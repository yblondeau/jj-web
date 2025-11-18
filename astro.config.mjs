import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://julienjeangirard-coaching.com',
  base: '/',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap()
  ],
  build: { format: 'directory' }
});
