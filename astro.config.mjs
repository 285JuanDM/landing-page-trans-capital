// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: "static",
  integrations: [
    icon({
      // Solo empaquetamos el set Lucide.
      include: { lucide: ["*"] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
