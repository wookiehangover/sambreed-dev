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

export const collections = {
  'wiki': wikiCollection
}