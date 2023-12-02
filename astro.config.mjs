import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc'
import { visit } from 'unist-util-visit';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

function remarkCodeWrapperPlugin() {
  return function transformer(tree) {
    visit(tree, 'code', (node) => {
      const rawContent = node.value;
      const lang = node.lang ?? 'javascript';
      node.type = 'html';
      node.value = `<code-block lang="${lang}"><pre><code>${rawContent}</code></pre></code-block>`;
    });
    return tree;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://sambreed.dev',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkToc, remarkCodeWrapperPlugin]
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/bitter']
    }
  },
  redirects: {
    "/writing/links-part-one": "/writing/2022/links-part-one.html",
    "/writing/links-part-one.html": "/writing/2022/links-part-one.html",
    "/writing/links-august-2022.html": "/writing/2022/links-august-2022.html",
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
  }
});