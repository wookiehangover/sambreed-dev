import { getEntry } from "astro:content";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const url = new URL(context.request.url);

	// Check if request ends with .md
	if (url.pathname.endsWith(".md")) {
		const slug = url.pathname.replace(/\.md$/, "").replace(/^\//, "");

		try {
			// Try to find in writing collection first
			const entry = slug.startsWith("writing/")
				? await getEntry("writing", slug.replace("writing/", ""))
				: slug.startsWith("wiki/")
					? await getEntry("wiki", slug.replace("wiki/", ""))
					: null;

			if (entry) {
				const body = `
---
title: ${entry.data.title}
${entry.data.description ? `description: ${entry.data.description}` : ""}
url: https://sambreed.dev/${slug}
---
# ${entry.data.title}

${entry.body}`;

				return new Response(body, {
					headers: {
						"Content-Type": "text/plain; charset=utf-8",
					},
				});
			}
		} catch (error) {
			console.error(error);
			return new Response("Not found", { status: 404 });
		}

		// Return 404 if no matching content found
		return new Response("Not found", { status: 404 });
	}

	return next();
});
