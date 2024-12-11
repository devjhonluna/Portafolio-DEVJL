import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    alpinejs({ entrypoint: '/src/entrypoint' }),
  ],
});
