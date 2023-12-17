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

  let existingEntries = []
  
  try { 
    const data = await fs.readFile(dest, 'utf8')

    if (data) {
      entries.push(...JSON.parse(data))
    }
  } catch (error) {
    console.log('no existing entries')
  }



  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    const slug = file.replace('./src/content/wiki/', '').replace('./src/content/writing/', '').replace('.md', '')
    const { data } = matter(content)

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

  await fs.writeFile(dest, JSON.stringify(entries))
}

// generateEmbeddings('./src/content/wiki/**/*.md', './src/data/wiki.json')
generateEmbeddings('./src/content/writing/**/*.md', './src/data/writing.json')