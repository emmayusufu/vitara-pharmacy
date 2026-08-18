import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://emmayusufu.github.io',
  base: '/vitara-pharmacy/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
