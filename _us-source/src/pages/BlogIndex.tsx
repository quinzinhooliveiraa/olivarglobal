import { useState, useMemo, useRef } from "react";
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

const CATEGORY_PHOTO: Record<string, string> = {
  "Lead Generation":
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
  "Google Ads":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
  Marketing:
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=900&q=80",
  Operations:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  Pricing:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
  Revenue:
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80",
  Scaling:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  Startup:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
  Strategy:
    "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=900&q=80",
  "Case Study":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  Sales:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
};

const FALLBACK_PHOTO =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80";

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

  const [active, setActive] = useState<string>("All");
  const articlesRef = useRef<HTMLElement>(null);

  const handleCategoryClick = (name: string) => {
    setActive(name);
    setTimeout(() => {
      articlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── 1. Blog banner ── */}
        <section
          className="pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-8 relative overflow-hidden"
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
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#16a34a" }}
            >
              {copy.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl md:text-6xl font-extrabold font-heading text-white leading-tight mb-4 max-w-3xl"
            >
              {copy.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {copy.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.18 }}
              className="text-xs font-medium mt-3"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              {posts.length} articles · {categories.length} categories
            </motion.p>
          </div>
        </section>

        {/* ── 2. Category banners with photos ── */}
        <section className="px-4 md:px-8 py-12 md:py-16 bg-[#f8f7f4]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0f2e23]/40 mb-6">
              Browse by topic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {categories.map(({ name, count }, idx) => (
                <motion.button
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  onClick={() => handleCategoryClick(name)}
                  className="group relative overflow-hidden rounded-2xl text-left focus:outline-none"
                  style={{ height: "200px" }}
                >
                  {/* Photo */}
                  <img
                    src={CATEGORY_PHOTO[name] ?? FALLBACK_PHOTO}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(15,46,35,0.72) 0%, rgba(15,46,35,0.55) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(15,46,35,0.88) 0%, rgba(15,46,35,0.72) 100%)",
                    }}
                  />
                  {/* Text */}
                  <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                    <p className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-1">
                      {name}
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {count} {count === 1 ? "article" : "articles"}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                      style={{ color: "#4ade80" }}
                    >
                      Read articles →
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Articles ── */}
        <section
          ref={articlesRef}
          className="px-4 md:px-8 py-12 md:py-16 bg-white scroll-mt-20"
        >
          <div className="container mx-auto max-w-5xl">
            {/* Filter strip */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0f2e23]/40 mr-2">
                Articles
              </h2>
              <button
                onClick={() => setActive("All")}
                className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border transition-all"
                style={{
                  background: active === "All" ? "#0f2e23" : "transparent",
                  color: active === "All" ? "#ffffff" : "#0f2e23",
                  borderColor: active === "All" ? "#0f2e23" : "rgba(15,46,35,0.2)",
                }}
              >
                All · {posts.length}
              </button>
              {categories.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => setActive(name)}
                  className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border transition-all"
                  style={{
                    background: active === name ? "#0f2e23" : "transparent",
                    color: active === name ? "#ffffff" : "#0f2e23",
                    borderColor:
                      active === name ? "#0f2e23" : "rgba(15,46,35,0.2)",
                  }}
                >
                  {name} · {count}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
              >
                {visible.map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: idx * 0.04 }}
                    className="group flex flex-col bg-white border border-[#0f2e23]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-[#15803d] text-white">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-[#0f2e23] leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p
                      className="text-sm text-[#0f2e23]/65 leading-relaxed mb-5 overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-[#0f2e23]/40">
                        {post.readingTime}
                      </span>
                      <Link
                        to={`${copy.indexPath}/${post.slug}`}
                        className="text-sm font-bold text-[#15803d] hover:text-[#0f2e23] transition-colors"
                      >
                        Read →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
