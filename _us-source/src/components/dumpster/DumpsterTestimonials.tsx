import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { MapPin, Quote, Star, BadgeCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import logoHeartland from "@/assets/dumpster/logo-heartland.png";
import logoBayou from "@/assets/dumpster/logo-bayou.png";
import logoSawtooth from "@/assets/dumpster/logo-sawtooth.png";
import logoPacific from "@/assets/dumpster/logo-pacific.png";

const testimonials = [
  {
    location: "Kansas City, MO",
    accent: "#15803d",
    accentSoft: "rgba(255,92,0,0.10)",
    accentRing: "rgba(255,92,0,0.25)",
    initials: "JR",
    logo: logoHeartland,
    name: "James Reynolds",
    role: "Owner",
    company: "Heartland Roll-Off Co.",
    story:
      "James was running two dumpster rental businesses and growing, but lead generation was unpredictable. He relied on referrals and Facebook ads he tried to manage himself. In less than 15 days after partnering with Scale Jobs, the first customers started coming in through Google Ads. It happened so fast he had to pause campaigns. His fleet was booked out before he expected.",
    quote:
      "I had to pause the ads because my entire fleet was busy. That was the best problem I've ever had. I bought a third truck because of it.",
    metrics: [
      { prefix: "$", value: 11750, suffix: "", label: "January revenue" },
      { prefix: "", value: 3.7, suffix: "x", label: "Ad spend return", decimals: 1 },
      { prefix: "", value: 35, suffix: "", label: "Dumpsters rented" },
    ],
  },
  {
    location: "Houston, TX",
    accent: "#0f5132",
    accentSoft: "rgba(255,198,13,0.14)",
    accentRing: "rgba(255,198,13,0.35)",
    initials: "MC",
    logo: logoBayou,
    name: "Marcus Coleman",
    role: "Owner",
    company: "Bayou Haul Services",
    story:
      "Marcus had been running a junk removal business for two years. He was using shared lead platforms and his income wasn't predictable. With just $500 in ads in the first month, he closed 10 jobs. That's a 55% conversion rate, well above the industry average.",
    quote:
      "I started skeptical. But when I saw that more than half of the calls turned into closed jobs, I understood the problem was never the lead. It was the process to get to it.",
    metrics: [
      { prefix: "", value: 55, suffix: "%", label: "Conversion rate" },
      { prefix: "", value: 3.9, suffix: "x", label: "Ad spend return", decimals: 1 },
      { prefix: "$", value: 500, suffix: "", label: "1st month spend" },
    ],
  },
  {
    location: "Boise, ID",
    accent: "#f97316",
    accentSoft: "rgba(249,115,22,0.10)",
    accentRing: "rgba(249,115,22,0.30)",
    initials: "NV",
    logo: logoSawtooth,
    name: "Nicole Vasquez",
    role: "Owner",
    company: "Sawtooth Waste Solutions",
    story:
      "Nicole had a clear market differentiator: she only charged for what the customer actually used, with no hidden fees. The problem was almost nobody knew she existed. She was already paying for two marketing services with no results. After joining Scale Jobs, the first lead arrived within the first week.",
    quote:
      "The first call came in sooner than I expected. What surprised me wasn't the speed. It was knowing exactly where the customer came from and how much it cost to bring them in.",
    metrics: [
      { prefix: "", value: 2, suffix: "x", label: "Initial return" },
      { prefix: "", value: 7, suffix: " days", label: "To 1st lead" },
      { prefix: "", value: 20, suffix: "%", label: "Close rate" },
    ],
  },
  {
    location: "California",
    accent: "#dc2626",
    accentSoft: "rgba(220,38,38,0.08)",
    accentRing: "rgba(220,38,38,0.25)",
    initials: "RW",
    logo: logoPacific,
    name: "Ryan Walker",
    role: "Owner",
    company: "Pacific Coast Dumpsters",
    story:
      "Ryan signed on a Friday. By Monday, Scale Jobs had the full setup ready: campaigns built, tracking live, everything configured. On Tuesday, the first lead arrived with name, phone, delivery address, and pickup date. He closed the client the same day. This is the shortest story because it's still being written.",
    quote:
      "Friday I signed. Monday everything was live. Tuesday I closed my first client. I don't know yet what's going to happen, but clearly something is working.",
    metrics: [
      { prefix: "<", value: 24, suffix: "h", label: "To 1st lead" },
      { prefix: "", value: 3, suffix: " days", label: "Full setup" },
      { prefix: "", value: 0, suffix: "Live", label: "Story unfolding", literal: true },
    ],
  },
];

type Metric = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  literal?: boolean;
};

const AnimatedNumber = ({ metric, accent }: { metric: Metric; accent: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const decimals = metric.decimals ?? 0;
  const rounded = useTransform(mv, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US")
  );

  useEffect(() => {
    if (!inView || metric.literal) return;
    const controls = animate(mv, metric.value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, metric.literal, metric.value, mv]);

  if (metric.literal) {
    return (
      <span ref={ref} style={{ color: accent }} className="text-lg font-extrabold leading-none">
        {metric.suffix}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      style={{ color: accent }}
      className="inline-flex items-baseline text-lg font-extrabold leading-none tabular-nums"
    >
      {metric.prefix}
      <motion.span>{rounded}</motion.span>
      {metric.suffix}
    </span>
  );
};

const DumpsterTestimonials = () => {
  return (
    <section
      id="cases"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-[#f7fef9] to-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(255,198,13,0.18) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,92,0,0.18) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-5 shadow-md"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.9</span>
          </motion.div>

          <h2 className="text-2xl md:text-5xl font-extrabold font-heading text-black leading-[1.05]">
            Real Results From Real{" "}
            <span className="bg-gradient-to-r from-[#15803d] to-[#0f5132] bg-clip-text text-transparent">Dumpster Owners</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
            No paid actors. No fake screenshots. Just operators who decided to stop guessing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${t.accent} 0%, ${t.accent}88 100%)` }}
              />

              {/* Card header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-black/10 shadow-md bg-white flex items-center justify-center"
                  >
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-bold text-[14px] sm:text-[15px] text-foreground leading-tight">{t.name}</p>
                    <BadgeCheck size={13} className="shrink-0 text-[#1d9bf0] fill-[#1d9bf0]/15" strokeWidth={2.2} />
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: t.accentSoft,
                        color: t.accent,
                        boxShadow: `inset 0 0 0 1px ${t.accentRing}`,
                      }}
                    >
                      <MapPin size={9} strokeWidth={2.5} />
                      {t.location}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-[12px] text-muted-foreground leading-tight mt-0.5 truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-4 pl-4">
                <div
                  aria-hidden
                  className="absolute left-0 top-1 bottom-1 w-1 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${t.accent} 0%, ${t.accent}33 100%)` }}
                />
                <Quote
                  size={18}
                  strokeWidth={2}
                  className="absolute -top-1 left-2 opacity-20"
                  style={{ color: t.accent }}
                />
                <p className="font-serif italic text-sm sm:text-base text-foreground leading-snug relative">
                  "{t.quote}"
                </p>
              </div>

              {/* Story */}
              <p className="text-[12.5px] sm:text-[13.5px] text-muted-foreground leading-relaxed mb-4">
                {t.story}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-auto p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-200/70">
                {t.metrics.map((m, idx) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 + idx * 0.08, duration: 0.5 }}
                    className="text-center cursor-default"
                  >
                    <div className="relative">
                      <AnimatedNumber metric={m} accent="#0a2418" />
                      <span className="block h-px bg-neutral-300 mx-auto mt-1.5 w-6" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-neutral-500 mt-1.5 leading-tight font-semibold">
                      {m.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DumpsterTestimonials;
