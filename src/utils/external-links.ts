/**
 * Configures external links to open in a new tab with proper security attributes.
 * External links are identified as those starting with "http" that don't match
 * the current hostname.
 *
 * @param container - Optional element to scope the query. Defaults to document.
 */
export function setupExternalLinks(container: Element | Document = document): void {
	const links = container.querySelectorAll("a");

	links.forEach((link) => {
		const href = link.getAttribute("href");
		const isExternal = href?.startsWith("http") && !location.hostname.includes(href);

		if (isExternal) {
			link.setAttribute("target", "_blank");
			link.setAttribute("rel", "noopener noreferrer");
		}
	});
}

/**
 * Sets up external link handling on astro:page-load event.
 * This is the recommended approach for View Transitions compatibility.
 */
export function initExternalLinks(): void {
	document.addEventListener("astro:page-load", () => {
		setupExternalLinks();
	});
}

