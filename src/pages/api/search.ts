import type { APIRoute } from "astro";
import blogData from "~/data/writing.json";
import wikiData from "~/data/wiki.json";
import OpenAI from "openai";
import { findSimilarEmbeddings, type Embedding, type Score, type Vector } from "~/utils/vector-search";

const client = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

async function runSimilaritySearch(query: Vector, data: Embedding[], topK = 6): Promise<Score[]> {
	const similarEmbeddings = findSimilarEmbeddings(query, data, topK);
	return similarEmbeddings;
}

const searchVectors = new Map<string, Vector>();

const ALL = [...blogData.map((e) => ({ ...e, type: "blog" })), ...wikiData.map((e) => ({ ...e, type: "wiki" }))];

export const GET: APIRoute = async function GET({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q") as string;
	const type = url.searchParams.get("type") as string;

	let data: Embedding[];
	if (type === "blog") {
		data = blogData;
	} else if (type === "wiki") {
		data = wikiData;
	} else if (type === "all") {
		data = ALL;
	} else {
		return new Response(JSON.stringify({ message: "Missing type parameter" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	if (!q) {
		return new Response(JSON.stringify({ message: "Missing query parameter" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	try {
		let vector = searchVectors.get(q);

		if (!vector) {
			const response = await client.embeddings.create({
				input: q,
				model: "text-embedding-ada-002",
			});

			vector = response.data[0].embedding;

			if (!vector) {
				return new Response(JSON.stringify({ message: "No vector found" }), {
					status: 404,
					headers: { "content-type": "application/json" },
				});
			}

			searchVectors.set(q, vector);
		}

		const results = await runSimilaritySearch(vector, data, 10);

		const resp = Array.from(
			results
				.reduce((acc, result) => {
					acc.set(result.embedding.slug, {
						...result.embedding,
						score: result.score,
						embedding: undefined,
					});

					return acc;
				}, new Map())
				.values(),
		).slice(0, 6);

		return new Response(JSON.stringify(resp), {
			headers: {
				"content-type": "application/json",
				"Cache-Control": "max-age=300",
			},
		});
	} catch (error) {
		console.error("Error:", error);

		return new Response(JSON.stringify({ message: "Error" }), {
			status: 500,
			headers: { "content-type": "application/json" },
		});
	}
};
