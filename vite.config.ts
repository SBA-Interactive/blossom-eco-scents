import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 79dcd1662b38ec6f40266db3177e69a7be2e748d

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/blossom-eco-scents",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 79dcd1662b38ec6f40266db3177e69a7be2e748d
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react_jsx_dev_runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
