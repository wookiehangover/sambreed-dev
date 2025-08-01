import 'dotenv/config'
import { globby } from 'globby'
import OpenAI from 'openai'
import fs from 'fs/promises'
import matter from 'gray-matter'
import { DatabaseService } from '@agentdb/sdk'

const client = new OpenAI(process.env.OPENAI_API_KEY)

// Initialize AgentDB service and connection
const service = new DatabaseService('https://api.agentdb.dev', process.env.AGENTDB_API_KEY || null)
const connection = service.connect(process.env.AGENTDB_TOKEN || null, 'content-embeddings', 'sqlite')

/**
 * Create the embeddings table schema if it doesn't exist
 */
async function ensureSchema() {
  const statements = [
    {
      sql: `CREATE TABLE IF NOT EXISTS content_embeddings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
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
        embedding_model TEXT DEFAULT 'text-embedding-ada-002',
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_content_slug ON content_embeddings(slug)',
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_content_type ON content_embeddings(content_type)',
      params: []
    }
  ]

  console.log('🔧 Ensuring schema exists...')

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

  console.log('✅ Schema ready')
}

/**
 * Get existing entries from AgentDB for a specific content type
 * @param {string} contentType
 * @returns {Map<string, object>}
 */
async function getExistingEntries(contentType) {
  const existingEntries = new Map()

  try {
    const result = await connection.execute([{
      sql: 'SELECT slug, created_at, updated_at, pub_date FROM content_embeddings WHERE content_type = ?',
      params: [contentType]
    }])

    const rows = result.results?.[0]?.rows || []

    for (const row of rows) {
      existingEntries.set(row.slug, {
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        pubDate: row.pub_date
      })
    }

    console.log(`📋 Found ${existingEntries.size} existing ${contentType} entries`)
  } catch (error) {
    console.log(`📋 No existing ${contentType} entries found`)
  }

  return existingEntries
}

/**
 * Generate embeddings for content files and store them in AgentDB
 * @param {string} src - Glob pattern for source files
 * @param {string} contentType - Type of content ('wiki' or 'writing')
 */
async function generateEmbeddings(src, contentType) {
  console.log(`\n🚀 Processing ${contentType} content from ${src}`)

  const files = await globby(src)
  console.log(`📁 Found ${files.length} files`)

  const existingEntries = await getExistingEntries(contentType)

  let processed = 0
  let skipped = 0
  let created = 0

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    const slug = file.replace('./src/content/wiki/', '').replace('./src/content/writing/', '').replace('.mdx', '').replace('.md', '')
    const { data } = matter(content)

    if (data.title == "2007") {
      console.log(`⏭️  Skipping ${slug} (excluded title)`)
      skipped++
      continue
    }

    const existingEntry = existingEntries.get(slug)

    // Check if we should skip this entry (no changes detected)
    if (existingEntry) {
      const shouldSkip = (
        (existingEntry.updatedAt && existingEntry.updatedAt === data.updatedAt) ||
        (existingEntry.createdAt && existingEntry.createdAt === data.createdAt) ||
        (existingEntry.pubDate && existingEntry.pubDate === data.pubDate)
      )

      if (shouldSkip) {
        console.log(`⏭️  Skipping ${slug} (no changes)`)
        skipped++
        continue
      }
    }

    console.log(`🔄 Creating embedding for ${slug}`)
    const response = await client.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002',
    })

    const embedding = response.data[0].embedding
    const categories = data.categories ? JSON.stringify(data.categories) : null
    const embeddingVector = JSON.stringify(embedding)

    // Insert or replace the entry in AgentDB
    await connection.execute([{
      sql: `
        INSERT OR REPLACE INTO content_embeddings (
          slug, title, description, content_type, type,
          created_at, updated_at, pub_date, hero_image, hero_video, cover,
          categories, embedding_vector
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      params: [
        slug,
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
        embeddingVector
      ]
    }])

    created++
    processed++
  }

  console.log(`✅ ${contentType} processing complete:`)
  console.log(`   📝 Created/Updated: ${created}`)
  console.log(`   ⏭️  Skipped: ${skipped}`)
  console.log(`   📊 Total processed: ${processed}`)
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting embedding generation with AgentDB...')

    // Ensure schema exists
    await ensureSchema()

    // Generate embeddings for both content types
    await generateEmbeddings('./src/content/wiki/**/*.md', 'wiki')
    await generateEmbeddings('./src/content/writing/**/*.md*', 'writing')

    // Show final statistics
    const countResult = await connection.execute([{
      sql: 'SELECT content_type, COUNT(*) as count FROM content_embeddings GROUP BY content_type',
      params: []
    }])

    console.log('\n📊 Final database counts:')
    const rows = countResult?.results?.[0]?.rows || []

    if (Array.isArray(rows)) {
      rows.forEach(row => {
        console.log(`   ${row.content_type}: ${row.count}`)
      })
    }

    console.log('\n🎉 Embedding generation complete!')

    if (!process.env.AGENTDB_TOKEN) {
      console.log(`\n💡 Set AGENTDB_TOKEN environment variable to reuse this database`)
    }

  } catch (error) {
    console.error('💥 Failed to generate embeddings:', error)
    process.exit(1)
  }
}

main()