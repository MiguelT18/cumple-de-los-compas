// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  env: {
    schema: {
      MONGODB_URI: envField.string({ context: "server", access: "secret" }),
      MONGODB_NAME: envField.string({ context: "server", access: "public" }),
    },
  },

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        charm: ["graduate-cap", "person"],
        mingcute: ["user-add-line"],
        lucide: ["users", "chevron-left", "chevron-right"],
      },
    }),
  ],

  adapter: vercel(),
});