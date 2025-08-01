import type { APIRoute } from "astro";
import OpenAI from "openai";
import { DatabaseService, createVectorBuffer } from "@agentdb/sdk";

const client = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

// Initialize AgentDB connection
const service = new DatabaseService("https://api.agentdb.dev", import.meta.env.AGENTDB_API_KEY || null);
const connection = service.connect(import.meta.env.AGENTDB_TOKEN || null, "content-embeddings", "sqlite");

const searchVectors = new Map<string, number[]>();

export const GET: APIRoute = async function GET({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q") as string;
	const type = url.searchParams.get("type") as string;

	if (!q) {
		return new Response(JSON.stringify({ message: "Missing query parameter" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	if (!type || !["blog", "wiki", "all"].includes(type)) {
		return new Response(JSON.stringify({ message: "Missing or invalid type parameter" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	try {
		// Generate embedding for the search query
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

		// Build the WHERE clause based on type
		let whereClause = "";
		const params: any[] = [];

		if (type === "blog") {
			whereClause = "WHERE content_type = ?";
			params.push("writing");
		} else if (type === "wiki") {
			whereClause = "WHERE content_type = ?";
			params.push("wiki");
		}
		// For "all", no WHERE clause needed

		// Use AgentDB's native vector search with cosine distance
		const vectorBuffer = createVectorBuffer(vector);
		const searchQuery = `
			SELECT
				slug,
				title,
				description,
				content_type,
				type,
				pub_date,
				hero_image,
				hero_video,
				cover,
				categories,
				vec_distance_cosine(embedding_vector, ?) as cosine_distance,
				(1 - vec_distance_cosine(embedding_vector, ?)) as similarity_score
			FROM content_embeddings
			${whereClause}
			ORDER BY cosine_distance ASC
			LIMIT 10
		`;

		const queryParams = [vectorBuffer, vectorBuffer, ...params];
		const result = await connection.execute([{ sql: searchQuery, params: queryParams }]);

		if (result.results?.[0]?.error) {
			console.error("AgentDB Error:", result.results[0].error);
			return new Response(JSON.stringify({ message: "Search error" }), {
				status: 500,
				headers: { "content-type": "application/json" },
			});
		}

		const rows = result.results?.[0]?.rows || [];

		// Transform the results (already sorted by cosine distance from AgentDB)
		const resp = rows.slice(0, 6).map((row: any) => {
			const categories = row.categories ? JSON.parse(row.categories) : null;

			return {
				slug: row.slug,
				title: row.title,
				description: row.description,
				type: row.content_type === "writing" ? "blog" : row.content_type,
				pubDate: row.pub_date,
				heroImage: row.hero_image,
				heroVideo: row.hero_video,
				cover: row.cover,
				categories,
				score: row.similarity_score, // Use the similarity score from AgentDB
			};
		});

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
