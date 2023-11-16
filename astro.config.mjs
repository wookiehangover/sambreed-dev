import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc'

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://sambreed.dev',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkToc]
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/bitter']
    }
  }
});