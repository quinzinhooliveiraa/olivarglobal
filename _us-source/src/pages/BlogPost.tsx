import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DumpsterNavbar from "@/components/dumpster/DumpsterNavbar";
import DumpsterFooter from "@/components/dumpster/DumpsterFooter";
import { getPost, type BlogVariant } from "@/data/blogPosts";

const BASE_URL = "https://olivarglobalsales.com";

const VARIANT_META = {
  moving: {
    blogPath: "/us/blog",
    siteName: "Olivar Scale Jobs",
    publisher: "Olivar Scale Jobs",
    publisherUrl: `${BASE_URL}/us/`,
  },
  dumpster: {
    blogPath: "/us/dumpster/blog",
    siteName: "Olivar Scale Jobs",
    publisher: "Olivar Scale Jobs",
    publisherUrl: `${BASE_URL}/us/dumpster`,
  },
} as const;

function toIsoDate(humanDate: string): string {
  const d = new Date(humanDate);
  if (isNaN(d.getTime())) return new Date().toISOString().split("T")[0];
  return d.toISOString().split("T")[0];
}

interface BlogPostProps {
  variant: BlogVariant;
}

const VARIANT_COPY = {
  moving: {
    indexPath: "/blog",
    indexLabel: "← Back to blog",
    badgeBg: "hsl(130 55% 35%)",
    badgeText: "#ffffff",
    ctaTitle: "Ready to fill your moving calendar without brokers?",
    ctaSubtitle:
      "Limited spots per city. We only accept one client per area.",
    ctaButtonText: "Schedule Your Free Audit →",
    ctaButtonUrl:
      "https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?primary_color=094000",
    ctaBg: "hsl(var(--primary))",
  },
  dumpster: {
    indexPath: "/dumpster/blog",
    indexLabel: "← Back to blog",
    badgeBg: "#15803d",
    badgeText: "#ffffff",
    ctaTitle: "Ready to fill 15/20/30/40yd without brokers?",
    ctaSubtitle:
      "Limited spots per city. We only accept one client per area.",
    ctaButtonText: "Schedule Your Free Audit →",
    ctaButtonUrl:
      "https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?primary_color=15803d",
    ctaBg: "linear-gradient(135deg, #15803d 0%, #16a34a 100%)",
  },
} as const;

const BlogPost = ({ variant }: BlogPostProps) => {
  const { slug } = useParams<{ slug: string }>();
  const copy = VARIANT_COPY[variant];
  const post = slug ? getPost(variant, slug) : undefined;

  const Nav = variant === "dumpster" ? DumpsterNavbar : Navbar;
  const Foot = variant === "dumpster" ? DumpsterFooter : Footer;
  const meta = VARIANT_META[variant];

  if (!post) {
    return <Navigate to={copy.indexPath} replace />;
  }

  const canonicalUrl = `${BASE_URL}${meta.blogPath}/${post.slug}/`;
  const isoDate = toIsoDate(post.publishedAt);
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    author: { "@type": "Organization", name: meta.publisher, url: meta.publisherUrl },
    publisher: { "@type": "Organization", name: meta.publisher, url: meta.publisherUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    articleSection: post.category,
    inLanguage: "en-US",
  });
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/us/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}${meta.blogPath}/` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{post.title} — {meta.siteName}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:section" content={post.category} />
        <script type="application/ld+json">{articleSchema}</script>
        <script type="application/ld+json">{breadcrumbSchema}</script>
      </Helmet>
      <Nav />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <Link
              to={copy.indexPath}
              className="inline-block text-sm font-semibold text-[#15803d] hover:text-[#0f2e23] transition-colors mt-4 md:mt-6 mb-6"
            >
              {copy.indexLabel}
            </Link>

            <article>
              <header className="mb-8 md:mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ background: copy.badgeBg, color: copy.badgeText }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs font-medium text-[#0f2e23]/50">
                    {post.readingTime}
                  </span>
                  <span className="text-xs font-medium text-[#0f2e23]/40">
                    · {post.publishedAt}
                  </span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-5xl font-extrabold font-heading text-[#0f2e23] leading-tight"
                >
                  {post.title}
                </motion.h1>
              </header>

              <div className="prose-blog">
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={i}
                        className="text-2xl md:text-3xl font-bold font-heading text-[#0f2e23] mt-10 md:mt-12 mb-4 leading-snug"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={i}
                        className="text-lg md:text-xl font-bold font-heading text-[#0f2e23] mt-7 md:mt-8 mb-3 leading-snug"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="my-8 md:my-10 px-5 md:px-7 py-5 md:py-6 rounded-xl border-l-4"
                        style={{
                          borderLeftColor: copy.badgeBg,
                          background: "#f4f8f5",
                        }}
                      >
                        <p className="text-lg md:text-xl font-semibold font-heading text-[#0f2e23] leading-snug italic">
                          “{block.text}”
                        </p>
                        {block.author && (
                          <footer className="mt-2 text-sm text-[#0f2e23]/60 not-italic">
                            — {block.author}
                          </footer>
                        )}
                      </blockquote>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-base md:text-[17px] text-[#0f2e23]/85 leading-[1.75] mb-5"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </div>

        <section className="px-4 md:px-8 mt-14 md:mt-20 pb-16 md:pb-24">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl px-6 py-10 md:px-12 md:py-12 text-center"
              style={{ background: copy.ctaBg }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white leading-tight mb-3">
                {copy.ctaTitle}
              </h2>
              <p className="text-white/85 text-sm md:text-base mb-6 max-w-xl mx-auto">
                {copy.ctaSubtitle}
              </p>
              <a
                href={copy.ctaButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0f2e23] font-bold px-7 py-4 rounded-md text-base transition-all hover:brightness-95 shadow-md"
              >
                {copy.ctaButtonText}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Foot />
    </div>
  );
};

export default BlogPost;
