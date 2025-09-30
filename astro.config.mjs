// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",

  integrations: [tailwind(), sitemap()],
  vite: {
    css: {
      transformer: "postcss",
    },
  },
});
