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
    url: "https://olivarglobal.com/us/dumpster",
    image: "https://olivarglobal.com/us/og-dumpster.png",
    imageAlt: "Olivar Scale Jobs — Booked Dumpster Rentals Per Week",
  },
  "privacy-policy": {
    title: "Privacy Policy — Olivar Scale Jobs",
    description:
      "Olivar Scale Jobs privacy policy. Learn how we collect, use, and protect your information.",
    url: "https://olivarglobal.com/us/privacy-policy",
    image: "https://olivarglobal.com/us/og-privacy.png",
    imageAlt: "Privacy Policy — Olivar Scale Jobs",
  },
  blog: {
    title: "Blog — Olivar Scale Jobs (Moving)",
    description:
      "Tactical playbooks on lead generation, sales, and operations for moving company owners.",
    url: "https://olivarglobal.com/us/blog",
    image: "https://olivarglobal.com/us/og-moving.png",
    imageAlt: "Olivar Scale Jobs — Blog",
  },
  "dumpster/blog": {
    title: "Blog — Olivar Scale Jobs (Dumpster)",
    description:
      "How the most profitable dumpster rental operators book more rentals, raise prices, and stop relying on broker leads.",
    url: "https://olivarglobal.com/us/dumpster/blog",
    image: "https://olivarglobal.com/us/og-dumpster.png",
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
    "how-much-can-you-make-dumpster-rental",
    "pay-per-job-vs-marketing-agencies",
    "dumpsters-sitting-in-yard",
    "starting-dumpster-rental-business-2026",
    "scale-dumpster-business-one-truck-to-two",
    "dumpster-rental-pricing-guide-2026",
    "why-angi-thumbtack-dont-work-dumpster",
    "contractor-vs-residential-dumpster-rentals",
    "add-dumpster-rental-existing-business",
    "real-cost-empty-dumpster",
    "case-study-7-to-21-dumpsters",
    "signs-ready-scale-dumpster-business",
    "relying-word-of-mouth-jobs",
    "dumpster-rental-marketing-what-works-2026",
    "handle-dumpster-rental-competition",
    "complete-guide-start-dumpster-rental-2026",
    "how-many-dumpsters-to-start",
    "dumpster-rental-startup-costs",
    "how-to-price-dumpster-rentals",
    "first-30-days-dumpster-rental",
    "dumpster-rental-side-hustle-scales",
    "first-dumpster-job-delivery-guide",
    "seo-vs-google-ads-vs-pay-per-job",
  ],
};

function applyRouteMeta(html: string, meta: RouteMeta) {
  const canonicalUrl = meta.url.endsWith("/") ? meta.url : `${meta.url}/`;
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
      `<meta property="og:url" content="${canonicalUrl}" />`,
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
    )
    // Canonical
    .replace(
      /<link rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    // Hreflang self (en)
    .replace(
      /<link rel="alternate" hreflang="en"[^>]*>/i,
      `<link rel="alternate" hreflang="en" href="${canonicalUrl}" />`,
    )
    // Hreflang x-default
    .replace(
      /<link rel="alternate" hreflang="x-default"[^>]*>/i,
      `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
    );
    // pt-BR always stays pointing to https://olivarglobal.com/ (set in base index.html)
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
