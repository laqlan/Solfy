import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://solfy.net', // Update with actual production domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    // sitemap() can be enabled once the site URL is properly configured
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
