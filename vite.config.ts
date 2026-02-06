import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/anandacrown/",

  build: {
    outDir: "docs",      // ✅ REQUIRED for GitHub Pages
    emptyOutDir: true
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
