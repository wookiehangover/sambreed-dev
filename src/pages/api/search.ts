import type { APIRoute } from "astro";
import OpenAI from "openai";
import { DatabaseService, createVectorBuffer } from "@agentdb/sdk";

/** Database row returned from the vector search query */
interface ContentSearchRow {
	slug: string;
	title: string;
	description: string | null;
	content_type: string;
	type: string | null;
	pub_date: string | null;
	hero_image: string | null;
	hero_video: string | null;
	cover: string | null;
	categories: string | null;
	cosine_distance: number;
	similarity_score: number;
}

/** Database row returned from the count query */
interface CountRow {
	count: number;
}

/** Response item returned by the search API */
interface SearchResultItem {
	slug: string;
	title: string;
	description: string | null;
	type: string;
	pubDate: string | null;
	heroImage: string | null;
	heroVideo: string | null;
	cover: string | null;
	categories: string[] | null;
	score: number;
}

const client = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

// Initialize AgentDB connection
const service = new DatabaseService("https://api.agentdb.dev", import.meta.env.AGENTDB_API_KEY || null);
const connection = service.connect(import.meta.env.AGENTDB_TOKEN || null, "content-embeddings", "sqlite");

const searchVectors = new Map<string, number[]>();

export const GET: APIRoute = async function GET({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q") as string;
	const type = url.searchParams.get("type") as string;
	const thresholdParam = url.searchParams.get("threshold");
	const threshold = thresholdParam ? parseFloat(thresholdParam) : 0.3;

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

	if (isNaN(threshold) || threshold < 0 || threshold > 1) {
		return new Response(JSON.stringify({ message: "Invalid threshold parameter (must be between 0 and 1)" }), {
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
				model: "text-embedding-3-small",
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
		const params: string[] = [];

		if (type === "blog") {
			whereClause = "WHERE content_type = ?";
			params.push("writing");
		} else if (type === "wiki") {
			whereClause = "WHERE content_type = ?";
			params.push("wiki");
		}
		// For "all", no WHERE clause needed

		// Use AgentDB's native vector search with cosine distance
		// Query chunks table and deduplicate by slug (keep best matching chunk per document)
		const vectorBuffer = createVectorBuffer(vector);
		const searchQuery = `
			WITH ranked_chunks AS (
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
					(1 - vec_distance_cosine(embedding_vector, ?)) as similarity_score,
					ROW_NUMBER() OVER (PARTITION BY slug ORDER BY vec_distance_cosine(embedding_vector, ?) ASC) as rn
				FROM content_embeddings_chunks
				${whereClause}
			)
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
				cosine_distance,
				similarity_score
			FROM ranked_chunks
			WHERE rn = 1
			ORDER BY cosine_distance ASC
			LIMIT 30
		`;

		const queryParams = [vectorBuffer, vectorBuffer, vectorBuffer, ...params];
		
		// First, check if the table exists and has data
		const countResult = await connection.execute([{
			sql: `SELECT COUNT(*) as count FROM content_embeddings_chunks${whereClause ? ` ${whereClause}` : ''}`,
			params: params
		}]);
		
		if (countResult.results?.[0]?.error) {
			console.error("AgentDB Count Error:", countResult.results[0].error);
			return new Response(JSON.stringify({ 
				message: "Database error", 
				error: countResult.results[0].error 
			}), {
				status: 500,
				headers: { "content-type": "application/json" },
			});
		}
		
		const totalCount = (countResult.results?.[0]?.rows?.[0] as CountRow | undefined)?.count ?? 0;
		console.log(`Found ${totalCount} chunks in database for type: ${type}`);
		
		if (totalCount === 0) {
			return new Response(JSON.stringify({ 
				message: "No content found in database",
				count: 0
			}), {
				status: 200,
				headers: { "content-type": "application/json" },
			});
		}
		
		const result = await connection.execute([{ sql: searchQuery, params: queryParams }]);

		if (result.results?.[0]?.error) {
			console.error("AgentDB Search Error:", result.results[0].error);
			console.error("Query:", searchQuery);
			console.error("Params count:", queryParams.length);
			return new Response(JSON.stringify({ 
				message: "Search error",
				error: result.results[0].error,
				query: searchQuery.substring(0, 200) // First 200 chars for debugging
			}), {
				status: 500,
				headers: { "content-type": "application/json" },
			});
		}

		const rows = (result.results?.[0]?.rows ?? []) as ContentSearchRow[];
		console.log(`Search returned ${rows.length} rows before filtering`);

		// Transform the results (already sorted by cosine distance from AgentDB)
		// Filter out results below the similarity threshold
		const resp: SearchResultItem[] = rows
			.filter((row) => row.similarity_score >= threshold)
			.slice(0, 9)
			.map((row) => {
				const categories: string[] | null = row.categories ? JSON.parse(row.categories) : null;

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
					score: row.similarity_score,
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
