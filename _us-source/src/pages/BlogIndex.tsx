import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DumpsterNavbar from "@/components/dumpster/DumpsterNavbar";
import DumpsterFooter from "@/components/dumpster/DumpsterFooter";
import { blogPosts, type BlogVariant } from "@/data/blogPosts";

const BASE_URL = "https://olivarglobal.com";

const VARIANT_META_INDEX = {
  moving: {
    title: "Blog — Olivar Scale Jobs | Insights for Moving Companies",
    description:
      "Tactical playbooks on lead generation, sales process, and operations for moving company owners.",
    canonical: `${BASE_URL}/us/blog/`,
    siteName: "Olivar Scale Jobs",
  },
  dumpster: {
    title: "Blog — Olivar Scale Jobs | Insights for Dumpster Rental Operators",
    description:
      "How the most profitable dumpster rental operators book more jobs, raise prices, and stop relying on broker leads.",
    canonical: `${BASE_URL}/us/dumpster/blog/`,
    siteName: "Olivar Scale Jobs",
  },
} as const;

interface BlogIndexProps {
  variant: BlogVariant;
}

const VARIANT_COPY = {
  moving: {
    eyebrow: "Olivar Scale Jobs Blog",
    title: "Insights for moving company owners",
    subtitle: "Tactical playbooks on lead generation, sales process, and operations.",
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
  Operations:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
  Pricing:       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
  Revenue:       "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80",
  Scaling:       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  Strategy:      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
  Marketing:     "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=900&q=80",
  "Lead Generation": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
  "Google Ads":  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80",
  Startup:       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
  "Case Study":  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  Sales:         "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
};
const FALLBACK_PHOTO = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80";

const PAGE_SIZE = 3;

const BlogIndex = ({ variant }: BlogIndexProps) => {
  const posts = blogPosts[variant];
  const copy = VARIANT_COPY[variant];
  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;
  const indexMeta = VARIANT_META_INDEX[variant];

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const highlightsRef = useRef<HTMLElement>(null);

  const featuredPosts = useMemo(() => posts.filter((p) => p.featured), [posts]);

  const highlightPool = useMemo(() => {
    if (!activeCategory) return featuredPosts;
    if (activeCategory === "__all__") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, featuredPosts, activeCategory]);

  const totalPages = Math.ceil(highlightPool.length / PAGE_SIZE);
  const visiblePosts = highlightPool.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goToPage = (next: number, direction: number) => {
    setDir(direction);
    setPage((next + totalPages) % totalPages);
  };

  useEffect(() => {
    setPage(0);
  }, [activeCategory]);

  const handleCategoryClick = (name: string) => {
    setActiveCategory((prev) => (prev === name ? null : name));
    setTimeout(() => {
      highlightsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{indexMeta.title}</title>
        <meta name="description" content={indexMeta.description} />
        <link rel="canonical" href={indexMeta.canonical} />
        <meta property="og:title" content={indexMeta.title} />
        <meta property="og:description" content={indexMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={indexMeta.canonical} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={indexMeta.siteName} />
      </Helmet>
      <Nav />
      <main className="flex-1">

        {/* ── 1. Banner ── */}
        <section
          className="pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-8 relative overflow-hidden"
          style={{ background: "#0f2e23" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
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
          </div>
        </section>

        {/* ── 2. Category photos ── */}
        <section className="px-4 md:px-8 py-12 md:py-16 bg-[#f8f7f4]">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f2e23]/35 mb-6">
              Browse by topic
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {/* All articles card */}
              {(() => {
                const isActive = activeCategory === "__all__";
                return (
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.32, delay: 0 }}
                    onClick={() => handleCategoryClick("__all__")}
                    className="group relative overflow-hidden rounded-2xl text-left focus:outline-none"
                    style={{ height: "200px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=80"
                      alt="All articles"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: isActive
                          ? "linear-gradient(160deg, rgba(21,128,61,0.88) 0%, rgba(15,46,35,0.75) 100%)"
                          : "linear-gradient(160deg, rgba(15,46,35,0.72) 0%, rgba(15,46,35,0.52) 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(160deg, rgba(15,46,35,0.9) 0%, rgba(15,46,35,0.75) 100%)" }}
                    />
                    {isActive && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#16a34a] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                      <p className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-1">All Articles</p>
                      <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {posts.length} {posts.length === 1 ? "article" : "articles"}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                        style={{ color: "#4ade80" }}
                      >
                        {isActive ? "Showing ✓" : "Browse all →"}
                      </span>
                    </div>
                  </motion.button>
                );
              })()}

              {categories.map(({ name, count }, idx) => {
                const isActive = activeCategory === name;
                return (
                  <motion.button
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.32, delay: idx * 0.05 }}
                    onClick={() => handleCategoryClick(name)}
                    className="group relative overflow-hidden rounded-2xl text-left focus:outline-none"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={CATEGORY_PHOTO[name] ?? FALLBACK_PHOTO}
                      alt={name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: isActive
                          ? "linear-gradient(160deg, rgba(21,128,61,0.88) 0%, rgba(15,46,35,0.75) 100%)"
                          : "linear-gradient(160deg, rgba(15,46,35,0.72) 0%, rgba(15,46,35,0.52) 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(160deg, rgba(15,46,35,0.9) 0%, rgba(15,46,35,0.75) 100%)",
                      }}
                    />
                    {isActive && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#16a34a] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                      <p className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-1">{name}</p>
                      <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {count} {count === 1 ? "article" : "articles"}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                        style={{ color: "#4ade80" }}
                      >
                        {isActive ? "Showing ✓" : "Read articles →"}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. Highlights carousel ── */}
        <section
          ref={highlightsRef}
          className="px-4 md:px-8 py-12 md:py-16 bg-white scroll-mt-20"
        >
          <div className="container mx-auto max-w-5xl">

            {/* Header */}
            <div className="flex items-center justify-between mb-7 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0f2e23]/35">
                  {!activeCategory ? "Highlights" : activeCategory === "__all__" ? "All Articles" : activeCategory}
                </p>
                {activeCategory && (
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="text-xs font-semibold px-3 py-1 rounded-full border transition-all"
                    style={{ color: "#0f2e23", borderColor: "rgba(15,46,35,0.2)" }}
                  >
                    ✕ Highlights
                  </button>
                )}
              </div>

              {/* Page dots + arrows */}
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(page - 1, -1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center border transition-all hover:bg-[#0f2e23] hover:text-white hover:border-[#0f2e23]"
                    style={{ borderColor: "rgba(15,46,35,0.22)", color: "#0f2e23" }}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i, i > page ? 1 : -1)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: i === page ? "#0f2e23" : "rgba(15,46,35,0.18)",
                        transform: i === page ? "scale(1.25)" : "scale(1)",
                      }}
                      aria-label={`Page ${i + 1}`}
                    />
                  ))}
                  <button
                    onClick={() => goToPage(page + 1, 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center border transition-all hover:bg-[#0f2e23] hover:text-white hover:border-[#0f2e23]"
                    style={{ borderColor: "rgba(15,46,35,0.22)", color: "#0f2e23" }}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {/* Cards */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`${activeCategory ?? "all"}-${page}`}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
                >
                  {visiblePosts.map((post) => (
                    <article
                      key={post.slug}
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
                        <span className="text-xs font-medium text-[#0f2e23]/40">{post.readingTime}</span>
                        <Link
                          to={`${copy.indexPath}/${post.slug}`}
                          className="text-sm font-bold text-[#15803d] hover:text-[#0f2e23] transition-colors"
                        >
                          Read →
                        </Link>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            {totalPages > 1 && (
              <div className="mt-8 h-0.5 bg-[#0f2e23]/8 rounded-full overflow-hidden">
                <motion.div
                  key={`${activeCategory ?? "all"}-${page}`}
                  className="h-full rounded-full"
                  style={{ background: "#16a34a" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${((page + 1) / totalPages) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}

            {/* View all articles */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setActiveCategory("__all__");
                  setTimeout(() => {
                    highlightsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2e23]/60 hover:text-[#15803d] transition-colors group"
              >
                View all articles
                <span className="text-base transition-transform group-hover:translate-x-1">↓</span>
              </button>
            </div>

          </div>
        </section>

      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
