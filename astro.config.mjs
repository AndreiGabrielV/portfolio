// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",

  integrations: [tailwind(), sitemap(), react()],
  vite: {
    css: {
      transformer: "postcss",
    },
  },
});
