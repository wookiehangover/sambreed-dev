declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"wiki": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/notetaking.md": {
	id: "computers/notetaking.md";
  slug: "computers/notetaking";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/places-made-of-language.md": {
	id: "computers/places-made-of-language.md";
  slug: "computers/places-made-of-language";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/the-way-the-thing-works.md": {
	id: "computers/the-way-the-thing-works.md";
  slug: "computers/the-way-the-thing-works";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/ai-coding-ish.md": {
	id: "computers/web-development/ai-coding-ish.md";
  slug: "computers/web-development/ai-coding-ish";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/building-this-wiki.md": {
	id: "computers/web-development/building-this-wiki.md";
  slug: "computers/web-development/building-this-wiki";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/layered-architecture.md": {
	id: "computers/web-development/front-end/layered-architecture.md";
  slug: "computers/web-development/front-end/layered-architecture";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/new-css.md": {
	id: "computers/web-development/front-end/new-css.md";
  slug: "computers/web-development/front-end/new-css";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/svg-sprites.md": {
	id: "computers/web-development/front-end/svg-sprites.md";
  slug: "computers/web-development/front-end/svg-sprites";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/three-way-switch.md": {
	id: "computers/web-development/front-end/three-way-switch.md";
  slug: "computers/web-development/front-end/three-way-switch";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/what-is-front-end-infra.md": {
	id: "computers/web-development/front-end/what-is-front-end-infra.md";
  slug: "computers/web-development/front-end/what-is-front-end-infra";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/front-end/zen-of-tailwind.md": {
	id: "computers/web-development/front-end/zen-of-tailwind.md";
  slug: "computers/web-development/front-end/zen-of-tailwind";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/nginx-certs.md": {
	id: "computers/web-development/nginx-certs.md";
  slug: "computers/web-development/nginx-certs";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/product-tracking.md": {
	id: "computers/web-development/product-tracking.md";
  slug: "computers/web-development/product-tracking";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/web-development/python/aws-lambda-python-makefile.md": {
	id: "computers/web-development/python/aws-lambda-python-makefile.md";
  slug: "computers/web-development/python/aws-lambda-python-makefile";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"computers/what-I-use.md": {
	id: "computers/what-I-use.md";
  slug: "computers/what-i-use";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/fiction/blood-meridian.md": {
	id: "library/fiction/blood-meridian.md";
  slug: "library/fiction/blood-meridian";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/fiction/desolation-road.md": {
	id: "library/fiction/desolation-road.md";
  slug: "library/fiction/desolation-road";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/fiction/dhalgren.md": {
	id: "library/fiction/dhalgren.md";
  slug: "library/fiction/dhalgren";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/non-fiction/a-pattern-language.md": {
	id: "library/non-fiction/a-pattern-language.md";
  slug: "library/non-fiction/a-pattern-language";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/non-fiction/a-thousand-brains.md": {
	id: "library/non-fiction/a-thousand-brains.md";
  slug: "library/non-fiction/a-thousand-brains";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"library/non-fiction/the-creative-act.md": {
	id: "library/non-fiction/the-creative-act.md";
  slug: "library/non-fiction/the-creative-act";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"sports/trail-running/gear.md": {
	id: "sports/trail-running/gear.md";
  slug: "sports/trail-running/gear";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
"sports/trail-running/training-plans.md": {
	id: "sports/trail-running/training-plans.md";
  slug: "sports/trail-running/training-plans";
  body: string;
  collection: "wiki";
  data: InferEntrySchema<"wiki">
} & { render(): Render[".md"] };
};
"writing": {
"16-open-tabs.html.md": {
	id: "16-open-tabs.html.md";
  slug: "16-open-tabs.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2007.html.md": {
	id: "2007.html.md";
  slug: "2007.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2016-reading-list.html.md": {
	id: "2016-reading-list.html.md";
  slug: "2016-reading-list.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2017-reading-list.html.md": {
	id: "2017-reading-list.html.md";
  slug: "2017-reading-list.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022/links-august-2022.html.md": {
	id: "2022/links-august-2022.html.md";
  slug: "2022/links-august-2022.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022/links-december-2022.md": {
	id: "2022/links-december-2022.md";
  slug: "2022/links-december-2022";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2022/links-part-one.html.md": {
	id: "2022/links-part-one.html.md";
  slug: "2022/links-part-one.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/an-even-worse-search.md": {
	id: "2023/an-even-worse-search.md";
  slug: "2023/an-even-worse-search";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-april-2023.html.md": {
	id: "2023/links-april-2023.html.md";
  slug: "2023/links-april-2023.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-august-2023.md": {
	id: "2023/links-august-2023.md";
  slug: "2023/links-august-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-december-2023.md": {
	id: "2023/links-december-2023.md";
  slug: "2023/links-december-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-feb-2023.md": {
	id: "2023/links-feb-2023.md";
  slug: "2023/links-feb-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-january-2023.md": {
	id: "2023/links-january-2023.md";
  slug: "2023/links-january-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-july-2023.md": {
	id: "2023/links-july-2023.md";
  slug: "2023/links-july-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-june-2023.md": {
	id: "2023/links-june-2023.md";
  slug: "2023/links-jun-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-march-2023.md": {
	id: "2023/links-march-2023.md";
  slug: "2023/links-march-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-may-2023.md": {
	id: "2023/links-may-2023.md";
  slug: "2023/links-may-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-november-2023.md": {
	id: "2023/links-november-2023.md";
  slug: "2023/links-november-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-oct-2023.md": {
	id: "2023/links-oct-2023.md";
  slug: "2023/links-oct-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/links-sept-2023.md": {
	id: "2023/links-sept-2023.md";
  slug: "2023/links-sept-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2023/little-vector-search.mdx": {
	id: "2023/little-vector-search.mdx";
  slug: "2023/lil-vector-search";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] };
"2023/little-web-components.md": {
	id: "2023/little-web-components.md";
  slug: "2023/lil-web-components";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024/great-link-drought.md": {
	id: "2024/great-link-drought.md";
  slug: "2024/great-link-drought";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024/links-august.md": {
	id: "2024/links-august.md";
  slug: "2024/links-august";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024/links-february.md": {
	id: "2024/links-february.md";
  slug: "2024/links-february";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024/links-january.md": {
	id: "2024/links-january.md";
  slug: "2024/links-january";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2024/web-perf-blah-blah-blah.md": {
	id: "2024/web-perf-blah-blah-blah.md";
  slug: "2024/web-perf-blah-blah-blah";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"2025/links-april.md": {
	id: "2025/links-april.md";
  slug: "2025/links-april";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"big-sur-marathon-2023.md": {
	id: "big-sur-marathon-2023.md";
  slug: "big-sur-marathon-2023";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"books.html.md": {
	id: "books.html.md";
  slug: "books.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"dipsea-2023-race-report.md": {
	id: "dipsea-2023-race-report.md";
  slug: "dipsea-2023-race-report";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"lessons-from-the-jerk.html.md": {
	id: "lessons-from-the-jerk.html.md";
  slug: "lessons-from-the-jerk.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"making-things-for-fun.html.md": {
	id: "making-things-for-fun.html.md";
  slug: "making-things-for-fun.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"picking-up-the-pieces.html.md": {
	id: "picking-up-the-pieces.html.md";
  slug: "picking-up-the-pieces.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"protect-your-history.html.md": {
	id: "protect-your-history.html.md";
  slug: "protect-your-history.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"static-sites-with-next-js.html.md": {
	id: "static-sites-with-next-js.html.md";
  slug: "static-sites-with-next-js.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"tragic-design-is.html.md": {
	id: "tragic-design-is.html.md";
  slug: "tragic-design-is.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"twitter.html.md": {
	id: "twitter.html.md";
  slug: "twitter.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"what-I-read-in-2016.html.md": {
	id: "what-I-read-in-2016.html.md";
  slug: "why-I-read-what-I-read-in-2016.html";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
