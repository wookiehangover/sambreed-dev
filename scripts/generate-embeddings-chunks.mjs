import 'dotenv/config'
import { globby } from 'globby'
import OpenAI from 'openai'
import fs from 'fs/promises'
import matter from 'gray-matter'
import { DatabaseService } from '@agentdb/sdk'
import cliProgress from 'cli-progress'
import pLimit from 'p-limit'

const client = new OpenAI(process.env.OPENAI_API_KEY)

// Configuration - can be overridden via environment variables
const CHUNK_SIZE = parseInt(process.env.CHUNK_SIZE || '2000', 10) // ~500 tokens (4 chars per token)
const CHUNK_OVERLAP = parseInt(process.env.CHUNK_OVERLAP || '200', 10) // ~50 tokens
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || 'text-embedding-3-small'
const PARALLEL_LIMIT = parseInt(process.env.PARALLEL_LIMIT || '10', 10) // Number of parallel embedding requests

// Initialize AgentDB service and connection
const service = new DatabaseService('https://api.agentdb.dev', process.env.AGENTDB_API_KEY || null)
const connection = service.connect(process.env.AGENTDB_TOKEN || null, 'content-embeddings', 'sqlite')

/**
 * Create the chunks table schema if it doesn't exist
 */
async function ensureSchema() {
  const statements = [
    {
      sql: `CREATE TABLE IF NOT EXISTS content_embeddings_chunks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL,
        chunk_index INTEGER NOT NULL,
        chunk_text TEXT NOT NULL,
        chunk_start INTEGER NOT NULL,
        chunk_end INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        content_type TEXT NOT NULL,
        type TEXT,
        created_at TEXT,
        updated_at TEXT,
        pub_date TEXT,
        hero_image TEXT,
        hero_video TEXT,
        cover TEXT,
        categories TEXT,
        embedding_vector TEXT NOT NULL,
        embedding_model TEXT DEFAULT 'text-embedding-3-small',
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(slug, chunk_index)
      )`,
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_chunks_slug ON content_embeddings_chunks(slug)',
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_chunks_content_type ON content_embeddings_chunks(content_type)',
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_chunks_slug_content_type ON content_embeddings_chunks(slug, content_type)',
      params: []
    }
  ]

  console.log('🔧 Ensuring chunks schema exists...')

  for (const statement of statements) {
    try {
      const result = await connection.execute([statement])

      if (result.results?.[0]?.error) {
        console.error('❌ SQL Error:', result.results[0].error)
        throw new Error(result.results[0].error)
      }
    } catch (error) {
      console.error('❌ Failed to execute schema statement')
      throw error
    }
  }

  console.log('✅ Chunks schema ready')
}

/**
 * Create overlapping chunks from text content
 * Uses character-based splitting with word boundary awareness
 * Approximates tokens as ~4 chars per token
 * @param {string} text - The text to chunk
 * @param {number} chunkSize - Size of each chunk in characters
 * @param {number} overlap - Overlap size in characters
 * @returns {Array<{text: string, start: number, end: number, index: number}>}
 */
function createOverlappingChunks(text, chunkSize = CHUNK_SIZE, overlap = CHUNK_OVERLAP) {
  const chunks = []
  let start = 0
  let index = 0

  // Calculate the step size (how much to advance for each chunk)
  const stepSize = chunkSize - overlap

  while (start < text.length) {
    // Calculate the ideal end position
    const idealEnd = start + chunkSize
    let end = Math.min(idealEnd, text.length)
    
    // If not at the end of text, try to find a word boundary
    if (end < text.length) {
      // Look for sentence endings first (., !, ?)
      const sentenceEnd = text.lastIndexOf('.', end)
      const questionEnd = text.lastIndexOf('?', end)
      const exclamationEnd = text.lastIndexOf('!', end)
      const maxSentenceEnd = Math.max(sentenceEnd, questionEnd, exclamationEnd)
      
      // If we found a sentence end within the last 20% of the chunk, use it
      if (maxSentenceEnd > start + chunkSize * 0.8) {
        end = maxSentenceEnd + 1
      } else {
        // Otherwise, look for word boundaries (space, newline)
        const spaceIndex = text.lastIndexOf(' ', end)
        const newlineIndex = text.lastIndexOf('\n', end)
        const maxWordBoundary = Math.max(spaceIndex, newlineIndex)
        
        // If we found a word boundary within the last 30% of the chunk, use it
        if (maxWordBoundary > start + chunkSize * 0.7) {
          end = maxWordBoundary + 1
        }
      }
    }

    const chunkText = text.slice(start, end).trim()

    // Only add non-empty chunks
    if (chunkText.length > 0) {
      chunks.push({
        text: chunkText,
        start,
        end,
        index
      })
    }

    // Move start position forward by step size (chunkSize - overlap)
    // This ensures consistent chunking regardless of word boundary adjustments
    start += stepSize
    
    // Ensure we always make progress (at least 1 character)
    if (stepSize <= 0) {
      start = start + 1
    }
    
    index++

    // Prevent infinite loop if we're not making progress or overlap is too large
    if (start >= text.length || overlap >= chunkSize || stepSize <= 0) {
      break
    }
  }

  return chunks
}

/**
 * Get existing chunk entries from AgentDB for a specific content type
 * @param {string} contentType
 * @returns {Map<string, object>}
 */
async function getExistingChunkEntries(contentType) {
  const existingEntries = new Map()

  try {
    const result = await connection.execute([{
      sql: `SELECT slug, 
                   MAX(updated_at) as max_updated_at, 
                   MAX(created_at) as max_created_at, 
                   MAX(pub_date) as max_pub_date,
                   COUNT(*) as chunk_count
            FROM content_embeddings_chunks 
            WHERE content_type = ? 
            GROUP BY slug`,
      params: [contentType]
    }])

    const rows = result.results?.[0]?.rows || []

    for (const row of rows) {
      existingEntries.set(row.slug, {
        updatedAt: row.max_updated_at,
        createdAt: row.max_created_at,
        pubDate: row.max_pub_date,
        chunkCount: row.chunk_count
      })
    }

    console.log(`📋 Found ${existingEntries.size} existing ${contentType} entries with chunks`)
  } catch (error) {
    console.log(`📋 No existing ${contentType} chunk entries found`)
  }

  return existingEntries
}

/**
 * Check if chunks exist for a specific slug
 * @param {string} slug
 * @param {string} contentType
 * @returns {Promise<number>} Number of existing chunks
 */
async function getChunkCount(slug, contentType) {
  try {
    const result = await connection.execute([{
      sql: 'SELECT COUNT(*) as count FROM content_embeddings_chunks WHERE slug = ? AND content_type = ?',
      params: [slug, contentType]
    }])

    const rows = result.results?.[0]?.rows || []
    return rows[0]?.count || 0
  } catch (error) {
    return 0
  }
}

/**
 * Generate chunked embeddings for content files and store them in AgentDB
 * @param {string} src - Glob pattern for source files
 * @param {string} contentType - Type of content ('wiki' or 'writing')
 */
async function generateChunkedEmbeddings(src, contentType) {
  console.log(`\n🚀 Processing ${contentType} content from ${src}`)
  console.log(`📊 Using model: ${EMBEDDING_MODEL}, chunk size: ${CHUNK_SIZE}, overlap: ${CHUNK_OVERLAP}`)

  const files = await globby(src)
  console.log(`📁 Found ${files.length} files`)

  const existingEntries = await getExistingChunkEntries(contentType)

  let processed = 0
  let skipped = 0
  let created = 0
  let totalChunks = 0

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    const slug = file.replace('./src/content/wiki/', '').replace('./src/content/writing/', '').replace('.mdx', '').replace('.md', '')
    const { data, content: bodyContent } = matter(content)

    if (data.title == "2007") {
      console.log(`⏭️  Skipping ${slug} (excluded title)`)
      skipped++
      continue
    }

    const existingEntry = existingEntries.get(slug)
    
    // Check if chunks already exist for this slug
    const existingChunkCount = await getChunkCount(slug, contentType)

    // Check if we should skip this entry (chunks exist and no changes detected)
    if (existingChunkCount > 0 && existingEntry) {
      const shouldSkip = (
        (existingEntry.updatedAt && existingEntry.updatedAt === data.updatedAt) ||
        (existingEntry.createdAt && existingEntry.createdAt === data.createdAt) ||
        (existingEntry.pubDate && existingEntry.pubDate === data.pubDate)
      )

      if (shouldSkip) {
        console.log(`⏭️  Skipping ${slug} (${existingChunkCount} chunks already exist, no changes)`)
        skipped++
        continue
      }
    }

    // If chunks exist but content changed, remove old chunks
    if (existingChunkCount > 0) {
      await connection.execute([{
        sql: 'DELETE FROM content_embeddings_chunks WHERE slug = ? AND content_type = ?',
        params: [slug, contentType]
      }])
    }

    // Create overlapping chunks from the body content (excluding frontmatter)
    const chunks = createOverlappingChunks(bodyContent, CHUNK_SIZE, CHUNK_OVERLAP)
    
    if (chunks.length === 0) {
      console.log(`⏭️  Skipping ${slug} (no content to chunk)`)
      skipped++
      continue
    }
    
    const categories = data.categories ? JSON.stringify(data.categories) : null
    let chunkCreated = 0

    // Create progress bar for chunk processing
    const progressBar = new cliProgress.SingleBar({
      format: `🔄 Creating chunks for ${slug} | {bar} | {percentage}% | {value}/{total} chunks`,
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    }, cliProgress.Presets.shades_classic)

    progressBar.start(chunks.length, 0)

    // Create a limit function for parallel embedding generation
    const limit = pLimit(PARALLEL_LIMIT)
    let completedCount = 0
    const updateProgress = () => {
      completedCount++
      progressBar.update(completedCount)
    }

    // Generate embeddings for all chunks in parallel (with limit)
    const embeddingPromises = chunks.map((chunk, index) =>
      limit(async () => {
        try {
          const response = await client.embeddings.create({
            input: chunk.text,
            model: EMBEDDING_MODEL,
          })
          
          updateProgress()
          
          return {
            chunk,
            embedding: response.data[0].embedding
          }
        } catch (error) {
          console.error(`❌ Error creating embedding for chunk ${index} of ${slug}:`, error.message)
          throw error
        }
      })
    )

    const embeddingResults = await Promise.all(embeddingPromises)

    // Insert all chunks into database in batches
    const insertBatchSize = 50
    for (let i = 0; i < embeddingResults.length; i += insertBatchSize) {
      const batch = embeddingResults.slice(i, i + insertBatchSize)
      
      const insertStatements = batch.map(({ chunk, embedding }) => ({
        sql: `
          INSERT INTO content_embeddings_chunks (
            slug, chunk_index, chunk_text, chunk_start, chunk_end,
            title, description, content_type, type,
            created_at, updated_at, pub_date, hero_image, hero_video, cover,
            categories, embedding_vector, embedding_model
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        params: [
          slug,
          chunk.index,
          chunk.text,
          chunk.start,
          chunk.end,
          data.title,
          data.description || null,
          contentType,
          data.type || null,
          data.createdAt || null,
          data.updatedAt || null,
          data.pubDate || null,
          data.heroImage || null,
          data.heroVideo || null,
          data.cover || null,
          categories,
          JSON.stringify(embedding),
          EMBEDDING_MODEL
        ]
      }))

      await connection.execute(insertStatements)
    }

    chunkCreated = embeddingResults.length
    totalChunks += chunkCreated
    progressBar.stop()
    created++
    processed++
    console.log(`   ✅ Created ${chunkCreated} chunks for ${slug}`)
  }

  console.log(`✅ ${contentType} processing complete:`)
  console.log(`   📝 Created/Updated: ${created} documents`)
  console.log(`   🧩 Total chunks created: ${totalChunks}`)
  console.log(`   ⏭️  Skipped: ${skipped}`)
  console.log(`   📊 Total processed: ${processed}`)
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting chunked embedding generation with AgentDB...')
    console.log(`⚙️  Configuration:`)
    console.log(`   Model: ${EMBEDDING_MODEL}`)
    console.log(`   Chunk size: ${CHUNK_SIZE} characters (~${Math.round(CHUNK_SIZE / 4)} tokens)`)
    console.log(`   Overlap: ${CHUNK_OVERLAP} characters (~${Math.round(CHUNK_OVERLAP / 4)} tokens)`)
    console.log(`   Parallel limit: ${PARALLEL_LIMIT} concurrent requests`)

    // Ensure schema exists
    await ensureSchema()

    // Generate chunked embeddings for both content types
    await generateChunkedEmbeddings('./src/content/wiki/**/*.md', 'wiki')
    await generateChunkedEmbeddings('./src/content/writing/**/*.md*', 'writing')

    // Show final statistics
    const countResult = await connection.execute([{
      sql: `SELECT content_type, COUNT(*) as count, COUNT(DISTINCT slug) as document_count
            FROM content_embeddings_chunks 
            GROUP BY content_type`,
      params: []
    }])

    console.log('\n📊 Final database counts:')
    const rows = countResult?.results?.[0]?.rows || []

    if (Array.isArray(rows)) {
      rows.forEach(row => {
        console.log(`   ${row.content_type}: ${row.count} chunks across ${row.document_count} documents`)
      })
    }

    console.log('\n🎉 Chunked embedding generation complete!')

    if (!process.env.AGENTDB_TOKEN) {
      console.log(`\n💡 Set AGENTDB_TOKEN environment variable to reuse this database`)
    }

  } catch (error) {
    console.error('💥 Failed to generate chunked embeddings:', error)
    process.exit(1)
  }
}

main()

