export const destinations = [
	{
		id: "writing",
		label: "Writing",
		object: "The computer",
		href: "/writing",
		description: "Essays, experiments, and occasional dispatches from my brain.",
		icon: "M3 3h18v13H3z M8 21h8 M12 16v5 M6 7h6 M6 10h10",
	},
	{
		id: "wiki",
		label: "Wiki",
		object: "The books",
		href: "/wiki",
		description: "My growing collection of notes, books, and rabbit holes. Pull up a shelf.",
		icon: "M4 3h4v18H4z M10 3h4v18h-4z M16 4l4-1 3 17-4 1z",
	},
	{
		id: "links",
		label: "Links",
		object: "The link collection",
		href: "/links",
		description: "Interesting things I found on the internet, all in one pleasantly chaotic pile.",
		icon: "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2 M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2",
	},
	{
		id: "search",
		label: "Search",
		object: "The globe",
		href: "/search",
		description: "Looking for something in particular? Let’s see what we can dig up.",
		icon: "M16 16l5 5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
	},
	{
		id: "email",
		label: "Email",
		object: "The envelope",
		href: "mailto:sam@destroy.email",
		description: "Have a question or just want to say hello? Send me a note.",
		icon: "M3 5h18v14H3z M3 5l9 8 9-8",
	},
] as const;

export type DestinationId = (typeof destinations)[number]["id"];
