import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';
import { getCollection } from 'astro:content';
import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = (await getCollection('writing'))
		.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())

	const parser = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeStringify)

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.pubDate),
			description: post.data.description,
			link: `/writing/${post.slug}`,
			content: parser.processSync(post.body).toString()
		}))
	});
}
