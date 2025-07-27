import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const wikiCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date().optional(),
		categories: z.array(z.string()),
		type: z.enum(["note", "essay", "list", "quote", "book"]),
	}),
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/content/wiki",
	}),
});

const posts = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.string(),
			updatedDate: z.string().optional(),
			heroVideo: z.string().optional(),
			heroImage: z.string().optional(),
			heroAlt: z.string().optional(),
			cover: image().optional(),
		}),
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/content/writing",
	}),
});

export const collections = {
	wiki: wikiCollection,
	writing: posts,
};
