import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: '/jj-web/', // TODO: update with final URL
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap()
  ],
  build: { format: 'directory' }
});