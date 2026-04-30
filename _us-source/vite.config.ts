import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

const spaFallbackPlugin = {
  name: "spa-fallback",
  closeBundle() {
    const outDir = path.resolve(__dirname, "../us");
    const indexHtml = path.join(outDir, "index.html");
    if (!fs.existsSync(indexHtml)) return;
    for (const route of ["dumpster", "privacy-policy"]) {
      const dir = path.join(outDir, route);
      fs.mkdirSync(dir, { recursive: true });
      fs.copyFileSync(indexHtml, path.join(dir, "index.html"));
    }
  },
};

export default defineConfig(() => ({
  base: "/us/",
  build: {
    outDir: path.resolve(__dirname, "../us"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: true,
  },
  plugins: [react(), spaFallbackPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
