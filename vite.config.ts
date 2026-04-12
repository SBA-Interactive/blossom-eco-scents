import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { nitro } from "nitro/vite"


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/blossom-eco-scents/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), nitro()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react_jsx_dev_runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
