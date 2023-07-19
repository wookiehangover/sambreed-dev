import { z, defineCollection } from "astro:content"

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()).optional(),
  })
})

export const collections = {
  'wiki': wikiCollection
}