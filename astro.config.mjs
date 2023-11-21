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
  }
});