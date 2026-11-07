import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc'
import { visit } from 'unist-util-visit';

// https://astro.build/config
import vercel from "@astrojs/vercel";

function rehypeCodeWrapperPlugin() {
  return function transformer(tree) {
    visit(tree, 'raw', (node) => {
      if (node.value.startsWith('<pre')) {
        const rawContent = node.value;
        node.value = `<code-block>${rawContent}</code-block>`;
      }
    });
    return tree;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://sambreed.dev',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro"
    },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeCodeWrapperPlugin]
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/bitter']
    }
  },
  redirects: {
    "/writing/links-part-one": "/writing/2022/links-part-one",
    "/writing/links-part-one.html": "/writing/2022/links-part-one",
    "/writing/links-august-2022.html": "/writing/2022/links-august-2022",
    "/writing/links-december-2022": "/writing/2022/links-december-2022",
    "/writing/links-april-2023.html": "/writing/2023/links-april-2023",
    "/writing/links-august-2023": "/writing/2023/links-august-2023",
    "/writing/links-feb-2023": "/writing/2023/links-feb-2023",
    "/writing/links-january-2023": "/writing/2023/links-january-2023",
    "/writing/links-july-2023": "/writing/2023/links-july-2023",
    "/writing/links-june-2023": "/writing/2023/links-june-2023",
    "/writing/links-march-2023": "/writing/2023/links-march-2023",
    "/writing/links-may-2023": "/writing/2023/links-may-2023",
    "/writing/links-oct-2023": "/writing/2023/links-oct-2023",
    "/writing/links-sept-2023": "/writing/2023/links-sept-2023",
    // Legacy .html URLs for posts with .html.md files
    "/writing/tragic-design-is.html": "/writing/tragic-design-is",
    "/writing/picking-up-the-pieces.html": "/writing/picking-up-the-pieces",
    "/writing/16-open-tabs.html": "/writing/16-open-tabs",
    "/writing/2016-reading-list.html": "/writing/2016-reading-list",
    "/writing/2017-reading-list.html": "/writing/2017-reading-list",
    "/writing/lessons-from-the-jerk.html": "/writing/lessons-from-the-jerk",
    "/writing/making-things-for-fun.html": "/writing/making-things-for-fun",
    "/writing/protect-your-history.html": "/writing/protect-your-history",
    "/writing/static-sites-with-next-js.html": "/writing/static-sites-with-next-js",
    "/writing/why-I-read-what-I-read-in-2016.html": "/writing/why-I-read-what-I-read-in-2016",
    "/writing/2007.html": "/writing/2007",
    "/writing/books.html": "/writing/books",
    "/writing/twitter.html": "/writing/twitter",
    // Missing slug redirects
    "/writing/lil-vector-search": "/writing/2023/lil-vector-search",
    // Slug frontmatter overrides - these files are in year directories but route differently
    "/writing/2025/39-lessons": "/writing/39-lessons",
  }
});