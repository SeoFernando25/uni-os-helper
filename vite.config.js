import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile";

import path from "path";
import { fileURLToPath } from "url";
const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file).replace(/\\+/, "/");

export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  // base: "/uni-os-helper/",
  resolve: {
    alias: {
      "@lib": `${path.resolve(dir, "src/lib/")}`,
      "@components": `${path.resolve(dir, "src/lib/components/")}`,
      "@assets": `${path.resolve(dir, "src/assets/")}`,
    },
  },
});
