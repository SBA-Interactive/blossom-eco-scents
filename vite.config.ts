import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import babel from "vite-plugin-babel";
import path from "path";
import { componentTagger } from "lovable-tagger";

const ReactCompilerConfig = {
  target: '18',
};

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
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react_jsx_dev_runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
