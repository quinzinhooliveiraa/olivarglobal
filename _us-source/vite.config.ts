import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

type RouteMeta = { title: string; description: string; url: string; image: string; imageAlt: string };

const ROUTE_META: Record<string, RouteMeta> = {
  dumpster: {
    title: "Olivar Scale Jobs — 50-90+ Booked Dumpster Rentals Per Week",
    description:
      "Pay-per-rentals dumpster lead generation. Fill your calendar with 50-90+ more booked dumpster rentals per week in 30 days. Exclusive leads, no monthly fees.",
    url: "https://olivarglobalsales.com/us/dumpster",
    image: "https://olivarglobalsales.com/us/og-dumpster.png",
    imageAlt: "Olivar Scale Jobs — Booked Dumpster Rentals Per Week",
  },
  "privacy-policy": {
    title: "Privacy Policy — Olivar Scale Jobs",
    description:
      "Olivar Scale Jobs privacy policy. Learn how we collect, use, and protect your information.",
    url: "https://olivarglobalsales.com/us/privacy-policy",
    image: "https://olivarglobalsales.com/us/og-privacy.png",
    imageAlt: "Privacy Policy — Olivar Scale Jobs",
  },
  blog: {
    title: "Blog — Olivar Scale Jobs (Moving)",
    description:
      "Tactical playbooks on lead generation, sales, and operations for moving company owners.",
    url: "https://olivarglobalsales.com/us/blog",
    image: "https://olivarglobalsales.com/us/og-moving.png",
    imageAlt: "Olivar Scale Jobs — Blog",
  },
  "dumpster/blog": {
    title: "Blog — Olivar Scale Jobs (Dumpster)",
    description:
      "How the most profitable dumpster rental operators book more rentals, raise prices, and stop relying on broker leads.",
    url: "https://olivarglobalsales.com/us/dumpster/blog",
    image: "https://olivarglobalsales.com/us/og-dumpster.png",
    imageAlt: "Olivar Scale Jobs — Dumpster Blog",
  },
};

// Blog post slugs are written as SPA fallback so direct URLs resolve on a static server.
// Per-post meta could be added later; the parent route meta is good enough for previews.
const BLOG_POST_SLUGS: Record<string, string[]> = {
  blog: [
    "fill-moving-calendar-without-brokers",
    "lead-gen-mistakes-killing-moving-companies",
    "moving-leads-convert-below-10-percent",
  ],
  "dumpster/blog": [
    "book-50-dumpster-rentals-per-week",
    "pricing-dumpster-rentals-profitable-20-yard",
    "broker-leads-killing-dumpster-margins",
    "google-ads-clicks-no-rentals",
  ],
};

function applyRouteMeta(html: string, meta: RouteMeta) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${meta.description}">`,
    )
    .replace(
      /<meta\s+property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${meta.url}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${meta.image}" />`,
    )
    .replace(
      /<meta\s+property="og:image:alt"[^>]*>/i,
      `<meta property="og:image:alt" content="${meta.imageAlt}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"[^>]*>/i,
      `<meta name="twitter:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[^>]*>/i,
      `<meta name="twitter:description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"[^>]*>/i,
      `<meta name="twitter:image" content="${meta.image}" />`,
    );
}

const spaFallbackPlugin = {
  name: "spa-fallback",
  closeBundle() {
    const outDir = path.resolve(__dirname, "../us");
    const indexHtml = path.join(outDir, "index.html");
    if (!fs.existsSync(indexHtml)) return;
    const baseHtml = fs.readFileSync(indexHtml, "utf8");
    for (const route of Object.keys(ROUTE_META)) {
      const dir = path.join(outDir, route);
      fs.mkdirSync(dir, { recursive: true });
      const customized = applyRouteMeta(baseHtml, ROUTE_META[route]);
      fs.writeFileSync(path.join(dir, "index.html"), customized);
    }
    // Write SPA fallback index.html for each blog post slug so direct URLs work
    // on a static server. Inherits the parent blog route's meta.
    for (const parent of Object.keys(BLOG_POST_SLUGS)) {
      const parentMeta = ROUTE_META[parent];
      if (!parentMeta) continue;
      for (const slug of BLOG_POST_SLUGS[parent]) {
        const dir = path.join(outDir, parent, slug);
        fs.mkdirSync(dir, { recursive: true });
        const customized = applyRouteMeta(baseHtml, {
          ...parentMeta,
          url: `${parentMeta.url}/${slug}`,
        });
        fs.writeFileSync(path.join(dir, "index.html"), customized);
      }
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
