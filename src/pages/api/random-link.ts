import type { APIRoute } from "astro";
import links from "~/data/links.json";

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const query = url.searchParams.get("q") as string;

	let allLinks = Object.values(links).flat();

	if (query) {
		allLinks = allLinks.filter(
			(link) =>
				link.title.toLowerCase().includes(query.toLowerCase()) ||
				link.url.toLowerCase().includes(query.toLowerCase()),
		);
	}

	const randomLink = allLinks[Math.floor(Math.random() * allLinks.length)];

	const destination = randomLink.url;

	// redirect
	return new Response(null, {
		status: 302,
		headers: {
			Location: destination,
			ReferrerPolicy: "no-referrer",
		},
	});
};
