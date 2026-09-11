// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Served from the custom domain openecogoods.com at the root — no base path.
export default defineConfig({
  site: 'https://openecogoods.com',
});
