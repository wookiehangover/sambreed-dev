import { z, defineCollection } from "astro:content"

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    categories: z.array(z.string()),
    type: z.enum(['note', 'essay', 'list', 'quote', 'book']),
  })
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    layout: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  })
})

export const collections = {
  'wiki': wikiCollection,
  'writing': posts
}