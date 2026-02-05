import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vue from "@astrojs/vue";

import svgLoader from "vite-svg-loader";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
});
