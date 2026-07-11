// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Ren statisk output. Alle sider prerenderes, så vi har ikke brug for en
// SSR-adapter. Outputtet lander i dist/, klar til at deploye som statiske
// filer (fx Cloudflare Pages).
// https://astro.build/config
export default defineConfig({
  // site er påkrævet af @astrojs/sitemap for at generere absolutte URL'er.
  site: 'https://varmepumpezonen.dk',
  output: 'static',
  integrations: [sitemap()],
});