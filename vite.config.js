import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import vitePrerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    // vitePrerender({
    //   routes: [
    //     "/",
    //     "/img-traject",
    //     "/ncg-traject",
    //     "/duurzaam-herstel",
    //     "/vastgelopen-trajecten",
    //     "/over-aab",
    //     "/contact",
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
