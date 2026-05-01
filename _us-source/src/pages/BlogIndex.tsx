import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const BlogIndex = ({ variant }: BlogIndexProps) => {
  const posts = blogPosts[variant];
  const copy = VARIANT_COPY[variant];
  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;

  const highlighted = useMemo(() => {
    const seen = new Set<string>();
    return posts.filter((p) => {
      if (seen.has(p.category)) return false;
      seen.add(p.category);
      return true;
    });
  }, [posts]);

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
          </div>
        </section>

        {/* ── 2. Highlights ── */}
        <section className="px-4 md:px-8 py-12 md:py-16 bg-white">
          <div className="container mx-auto max-w-5xl">

            <p className="text-xs font-bold uppercase tracking-widest text-[#0f2e23]/35 mb-7">
              Highlights
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {highlighted.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.26, delay: idx * 0.04 }}
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
            </div>

          </div>
        </section>

      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
