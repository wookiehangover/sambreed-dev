import 'dotenv/config'
import { globby } from 'globby'
import OpenAI from 'openai'
import fs from 'fs/promises'
import matter from 'gray-matter'

const client = new OpenAI(process.env.OPENAI_API_KEY)

/**
 * 
 * @param {string} src 
 * @param {string} dest 
 */
async function generateEmbeddings(src, dest) {

  const files = await globby(src)

  const entries = []
  let existingEntries = new Map()
  
  try { 
    const data = await fs.readFile(dest, 'utf8')

    if (data) {
      const json = JSON.parse(data)
      for (const entry of json) {
        existingEntries.set(entry.slug, entry)
      }
    }
  } catch (error) {
    console.log('no existing entries')
  }

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    const slug = file.replace('./src/content/wiki/', '').replace('./src/content/writing/', '').replace('.md', '')
    const { data } = matter(content)

    const existingEntry = existingEntries.get(slug)

    if (existingEntry) {
      if (existingEntries.updatedAt === data.updatedAt) {
        console.log(`skipping ${slug}`)
        entries.push(existingEntry)
        continue
      }

      if (existingEntries.createdAt === data.createdAt) {
        console.log(`skipping ${slug}`)
        entries.push(existingEntry)
        continue
      }

      if (existingEntries.pubDate === data.pubDate) {
        console.log(`skipping ${slug}`)
        entries.push(existingEntry)
        continue
      }
    }

    console.log(`creating embedding for ${slug}`)
    const response = await client.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002',
    })

    const entry = {
      slug,
      ...data,
      embedding: response.data[0].embedding,
    }
    entries.push(entry)
  }

  console.log(`writing ${entries.length} entries to ${dest}`)
  await fs.writeFile(dest, JSON.stringify(entries))
}

await generateEmbeddings('./src/content/wiki/**/*.md', './src/data/wiki.json')
await generateEmbeddings('./src/content/writing/**/*.md', './src/data/writing.json')