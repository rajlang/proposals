import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import strip from "@rollup/plugin-strip";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    // outDir: "docs",
    minify: "terser",
  },
  plugins: [
    svelte(),
    strip()
  ],
});
