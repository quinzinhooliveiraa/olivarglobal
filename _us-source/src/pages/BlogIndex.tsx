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
      "Tactical playbooks on lead generation, sales process, and operations from the team that helps movers fill calendars without brokers.",
    indexPath: "/blog",
    badgeBg: "hsl(130 55% 35%)",
    badgeText: "#ffffff",
  },
  dumpster: {
    eyebrow: "Olivar Scale Jobs Blog",
    title: "Insights for dumpster rental operators",
    subtitle:
      "How the most profitable dumpster operators in the country book more rentals, raise prices, and stop relying on broker leads.",
    indexPath: "/dumpster/blog",
    badgeBg: "#15803d",
    badgeText: "#ffffff",
  },
} as const;

const BlogIndex = ({ variant }: BlogIndexProps) => {
  const posts = blogPosts[variant];
  const copy = VARIANT_COPY[variant];
  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <main className="flex-1 pt-24 md:pt-28">
        <section className="px-4 md:px-8 pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="container mx-auto max-w-5xl">
            <p
              className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3"
              style={{ color: copy.badgeBg }}
            >
              {copy.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-[#0f2e23] leading-tight mb-4">
              {copy.title}
            </h1>
            <p className="text-base md:text-lg text-[#0f2e23]/70 max-w-2xl leading-relaxed">
              {copy.subtitle}
            </p>
          </div>
        </section>

        <section className="px-4 md:px-8 pb-16 md:pb-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
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
            </div>
          </div>
        </section>
      </main>
      <Foot />
    </div>
  );
};

export default BlogIndex;
