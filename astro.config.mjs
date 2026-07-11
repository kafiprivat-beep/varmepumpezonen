// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Ren statisk output. Alle feeds hentes på build-tid og siderne prerenderes,
// så vi har ikke brug for en SSR-adapter. Outputtet lander i dist/ (ikke
// dist/client/), klar til at deploye som statiske filer (fx Cloudflare Pages).
// https://astro.build/config
export default defineConfig({
  // site er påkrævet af @astrojs/sitemap for at generere absolutte URL'er.
  site: 'https://livetoutdoor.dk',
  output: 'static',
  integrations: [sitemap()],
});