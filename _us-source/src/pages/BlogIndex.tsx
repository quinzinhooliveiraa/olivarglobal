import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DumpsterNavbar from "@/components/dumpster/DumpsterNavbar";
import DumpsterFooter from "@/components/dumpster/DumpsterFooter";
import { blogPosts, type BlogVariant } from "@/data/blogPosts";

interface BlogIndexProps {
  variant: BlogVariant;
}

const VARIANT_COPY = {
  moving: {
    eyebrow: "Olivar Scale Jobs Blog",
    title: "Insights for moving company owners",
    subtitle:
      "Tactical playbooks on lead generation, sales process, and operations.",
    indexPath: "/blog",
  },
  dumpster: {
    eyebrow: "Olivar Scale Jobs Blog",
    title: "Insights for dumpster rental operators",
    subtitle:
      "How the most profitable dumpster operators book more rentals, raise prices, and stop relying on broker leads.",
    indexPath: "/dumpster/blog",
  },
} as const;

const CATEGORY_ICONS: Record<string, string> = {
  "Lead Generation": "📡",
  "Google Ads": "🎯",
  Marketing: "📣",
  Operations: "⚙️",
  Pricing: "💰",
  Revenue: "📈",
  Scaling: "🚀",
  Startup: "🌱",
  Strategy: "♟️",
  "Case Study": "🔍",
  Sales: "🤝",
};

const BlogIndex = ({ variant }: BlogIndexProps) => {
  const posts = blogPosts[variant];
  const copy = VARIANT_COPY[variant];
  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) {
      map.set(p.category, (map.get(p.category) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, [posts]);

  const [selected, setSelected] = useState<string | null>(null);

  const visible = useMemo(
    () => (selected ? posts.filter((p) => p.category === selected) : []),
    [selected, posts],
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── Banner ── */}
        <section
          className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 md:px-8 relative overflow-hidden"
          style={{ background: "#0f2e23" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="container mx-auto max-w-5xl relative">
            <AnimatePresence mode="wait">
              {selected === null ? (
                <motion.div
                  key="header-default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: "#16a34a" }}
                  >
                    {copy.eyebrow}
                  </p>
                  <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-4 max-w-3xl">
                    {copy.title}
                  </h1>
                  <p
                    className="text-base md:text-lg max-w-2xl leading-relaxed mb-1"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {copy.subtitle}
                  </p>
                  <p
                    className="text-xs font-medium mt-2"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {posts.length} articles · {categories.length} categories
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="header-category"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="self-start flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    ← All categories
                  </button>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl" aria-hidden>
                      {CATEGORY_ICONS[selected] ?? "📄"}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-white leading-tight">
                      {selected}
                    </h1>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {visible.length} {visible.length === 1 ? "article" : "articles"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── Body: categories grid or posts grid ── */}
        <section className="px-4 md:px-8 py-10 md:py-14 bg-white">
          <div className="container mx-auto max-w-5xl">
            <AnimatePresence mode="wait">

              {selected === null ? (
                /* Category cards */
                <motion.div
                  key="categories"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
                >
                  {categories.map(({ name, count }, idx) => (
                    <motion.button
                      key={name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: idx * 0.05 }}
                      onClick={() => setSelected(name)}
                      className="group text-left flex flex-col gap-3 rounded-2xl p-6 md:p-7 border border-[#0f2e23]/10 hover:border-[#0f2e23]/30 hover:shadow-md transition-all bg-white"
                    >
                      <span className="text-3xl leading-none" aria-hidden>
                        {CATEGORY_ICONS[name] ?? "📄"}
                      </span>
                      <div>
                        <p className="text-base md:text-lg font-bold text-[#0f2e23] leading-snug group-hover:text-[#15803d] transition-colors">
                          {name}
                        </p>
                        <p className="text-xs font-medium text-[#0f2e23]/45 mt-1">
                          {count} {count === 1 ? "article" : "articles"}
                        </p>
                      </div>
                      <span
                        className="text-sm font-semibold mt-auto"
                        style={{ color: "#15803d" }}
                      >
                        Explore →
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                /* Post cards */
                <motion.div
                  key={`posts-${selected}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {visible.map((post, idx) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: idx * 0.05 }}
                      className="group flex flex-col bg-white border border-[#0f2e23]/10 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all"
                    >
                      <span className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-[#15803d] text-white">
                        {post.category}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold font-heading text-[#0f2e23] leading-snug mb-3">
                        {post.title}
                      </h2>
                      <p
                        className="text-sm md:text-[15px] text-[#0f2e23]/70 leading-relaxed mb-5 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-3">
                        <span className="text-xs font-medium text-[#0f2e23]/45">
                          {post.readingTime}
                        </span>
                        <Link
                          to={`${copy.indexPath}/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-[#15803d] hover:text-[#0f2e23] transition-colors"
                        >
                          Read article →
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </section>

      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
