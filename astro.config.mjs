// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Served from the custom domain openecogoods.com at the root — no base path.
export default defineConfig({
  site: 'https://openecogoods.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/impressum') && !page.includes('/privacy'),
    }),
  ],
});
