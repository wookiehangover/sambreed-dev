import 'dotenv/config'
import fs from 'fs/promises'
import { DatabaseService } from '@agentdb/sdk'

// Initialize AgentDB service and connection
const service = new DatabaseService('https://api.agentdb.dev', process.env.AGENTDB_API_KEY || null)
const connection = service.connect(process.env.AGENTDB_TOKEN || null, 'content-embeddings', 'sqlite')

/**
 * Create the embeddings table schema
 */
async function createSchema() {
  // Break down into separate statements
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
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_content_created_at ON content_embeddings(created_at)',
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_content_updated_at ON content_embeddings(updated_at)',
      params: []
    },
    {
      sql: 'CREATE INDEX IF NOT EXISTS idx_content_pub_date ON content_embeddings(pub_date)',
      params: []
    }
  ]

  console.log('🔧 Creating schema...')
  
  for (const statement of statements) {
    try {
      const result = await connection.execute([statement])
      console.log('✅ Executed:', statement.sql.split('\n')[0].trim())
      
      // Check for errors in the result
      if (result.results?.[0]?.error) {
        console.error('❌ SQL Error:', result.results[0].error)
        throw new Error(result.results[0].error)
      }
    } catch (error) {
      console.error('❌ Failed to execute:', statement.sql.split('\n')[0].trim())
      throw error
    }
  }
  
  console.log('✅ Schema created successfully')
}

/**
 * Insert embeddings data from JSON files
 */
async function insertEmbeddings() {
  try {
    // Read wiki embeddings
    const wikiData = JSON.parse(await fs.readFile('./src/data/wiki.json', 'utf8'))
    console.log(`📖 Found ${wikiData.length} wiki entries`)

    // Read writing embeddings  
    const writingData = JSON.parse(await fs.readFile('./src/data/writing.json', 'utf8'))
    console.log(`✍️ Found ${writingData.length} writing entries`)

    const allEntries = [
      ...wikiData.map(entry => ({ ...entry, content_type: 'wiki' })),
      ...writingData.map(entry => ({ ...entry, content_type: 'writing' }))
    ]

    console.log(`🔄 Processing ${allEntries.length} total entries...`)

    // Clear existing data
    await connection.execute([{ sql: 'DELETE FROM content_embeddings', params: [] }])
    console.log('🧹 Cleared existing data')

    // Batch insert in chunks of 50 to avoid large payloads
    const chunkSize = 50
    let inserted = 0

    for (let i = 0; i < allEntries.length; i += chunkSize) {
      const chunk = allEntries.slice(i, i + chunkSize)
      
      const insertStatements = chunk.map(entry => {
        const categories = entry.categories ? JSON.stringify(entry.categories) : null
        const embedding = JSON.stringify(entry.embedding)
        
        return {
          sql: `
            INSERT OR REPLACE INTO content_embeddings (
              slug, title, description, content_type, type,
              created_at, updated_at, pub_date, hero_image, hero_video, cover,
              categories, embedding_vector
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          params: [
            entry.slug,
            entry.title,
            entry.description || null,
            entry.content_type,
            entry.type || null,
            entry.createdAt || null,
            entry.updatedAt || null,
            entry.pubDate || null,
            entry.heroImage || null,
            entry.heroVideo || null,
            entry.cover || null,
            categories,
            embedding
          ]
        }
      })

      await connection.execute(insertStatements)
      inserted += chunk.length
      console.log(`📝 Inserted ${inserted}/${allEntries.length} entries`)
    }

    console.log('✅ All embeddings inserted successfully!')
    
    // Verify the data
    const countResult = await connection.execute([{ 
      sql: 'SELECT content_type, COUNT(*) as count FROM content_embeddings GROUP BY content_type',
      params: []
    }])
    
    console.log('📊 Final counts:')
    console.log('Count result structure:', JSON.stringify(countResult, null, 2))
    
    // Handle different possible response structures
    const rows = countResult?.results?.[0]?.rows || countResult?.rows || countResult || []
    
    if (Array.isArray(rows)) {
      rows.forEach(row => {
        console.log(`  ${row.content_type}: ${row.count}`)
      })
    } else {
      console.log('Could not parse count results')
    }

  } catch (error) {
    console.error('❌ Error inserting embeddings:', error)
    throw error
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting AgentDB population...')
    
    // Create schema
    await createSchema()
    
    // Insert data
    await insertEmbeddings()
    
    console.log('🎉 AgentDB population complete!')
    
    if (!process.env.AGENTDB_TOKEN) {
      console.log(`\n💡 Set AGENTDB_TOKEN environment variable to reuse this database`)
    }

  } catch (error) {
    console.error('💥 Failed to populate AgentDB:', error)
    process.exit(1)
  }
}

main()