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
      "Tactical playbooks on lead generation, sales process, and operations from the team that helps movers fill calendars without brokers.",
    indexPath: "/blog",
    accent: "#16a34a",
    badgeBg: "#15803d",
    badgeText: "#ffffff",
  },
  dumpster: {
    eyebrow: "Olivar Scale Jobs Blog",
    title: "Insights for dumpster rental operators",
    subtitle:
      "How the most profitable dumpster operators in the country book more rentals, raise prices, and stop relying on broker leads.",
    indexPath: "/dumpster/blog",
    accent: "#16a34a",
    badgeBg: "#15803d",
    badgeText: "#ffffff",
  },
} as const;

const BlogIndex = ({ variant }: BlogIndexProps) => {
  const posts = blogPosts[variant];
  const copy = VARIANT_COPY[variant];
  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const p of posts) {
      if (!seen.has(p.category)) {
        seen.add(p.category);
        result.push(p.category);
      }
    }
    return result.sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const showFilter = categories.length > 2;
  const [active, setActive] = useState("All");

  const countFor = (cat: string) =>
    cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length;

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── Banner ── */}
        <section
          className="pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-8 relative overflow-hidden"
          style={{ background: "#0f2e23" }}
        >
          {/* Dot-grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Gradient fade at bottom */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(15,46,35,0.85))",
            }}
          />

          <div className="container mx-auto max-w-5xl relative">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: copy.accent }}
            >
              {copy.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-4 max-w-3xl"
            >
              {copy.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {copy.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="text-xs font-medium mb-8"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {posts.length} articles
            </motion.p>

            {showFilter && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 }}
                className="flex flex-wrap gap-2"
              >
                {["All", ...categories].map((cat) => {
                  const isActive = active === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all focus:outline-none"
                      style={{
                        background: isActive ? "#ffffff" : "rgba(255,255,255,0.08)",
                        color: isActive ? "#0f2e23" : "rgba(255,255,255,0.85)",
                        borderColor: isActive ? "#ffffff" : "rgba(255,255,255,0.2)",
                      }}
                    >
                      {cat}
                      <span
                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                        style={{
                          background: isActive
                            ? "rgba(15,46,35,0.12)"
                            : "rgba(255,255,255,0.12)",
                          color: isActive ? "#0f2e23" : "rgba(255,255,255,0.7)",
                        }}
                      >
                        {countFor(cat)}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Cards grid ── */}
        <section className="px-4 md:px-8 py-10 md:py-16 bg-white">
          <div className="container mx-auto max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {visible.map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="group flex flex-col bg-white border border-[#0f2e23]/10 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all"
                  >
                    <span
                      className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                      style={{ background: copy.badgeBg, color: copy.badgeText }}
                    >
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
                      <span className="text-xs font-medium text-[#0f2e23]/50">
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
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
