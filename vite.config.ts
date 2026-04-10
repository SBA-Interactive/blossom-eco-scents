import { defineconfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componenttagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineconfig(({ mode }) => ({
  base: "/blossom-eco-scents",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componenttagger()].filter(boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
