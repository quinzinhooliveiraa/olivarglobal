import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Target, FileText, Phone, BarChart3, Clock } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Google Business Profile",
    desc: "Get found where customers are searching. We optimize your GBP with photos, reviews, categories, and posts to put your moving company in the Top 3 on Google Maps.",
  },
  {
    icon: Target,
    title: "Search Ads by Move Type",
    desc: "Target the right customers with ads tailored to local moves, long-distance, and commercial relocations. Show up exactly when and where people are ready to book a mover.",
  },
  {
    icon: FileText,
    title: "Landing Pages by ZIP Code",
    desc: "Dedicated landing pages for each city and ZIP code, built to convert. Customers see your company as the local go-to mover, boosting call volume and trust.",
  },
  {
    icon: Phone,
    title: "Call Tracking",
    desc: "Know exactly where your calls come from. Every lead is tracked, recorded, and classified so you can measure real ROI — no more guessing where your jobs come from.",
  },
  {
    icon: BarChart3,
    title: "Results",
    desc: "Our method isn't about promises — it's about measurable growth. Clients regularly scale from 30 moves/month to 90+, reaching predictable revenue and stopping the feast-or-famine cycle for good.",
  },
];

const Method = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.8"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="method" className="section-padding relative overflow-hidden" style={{ backgroundColor: "hsl(20 60% 97%)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

          {/* Left column — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
              The Method
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground leading-tight mb-8">
              The Google-First Method that fills your schedule.
            </h2>

            {/* CTA Button */}
            <a
              href="#book"
              className="block w-full text-center bg-primary text-white font-bold text-sm md:text-base py-3 md:py-4 rounded-xl mb-3 hover:bg-primary/90 transition-all shadow-md"
            >
              Schedule Your Free Audit
            </a>

            {/* 30 min pill */}
            <div className="flex items-center justify-center gap-2 bg-white rounded-xl py-3 border border-border">
              <Clock size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">30 minutes</span>
            </div>
          </motion.div>

          {/* Right column — timeline */}
          <div ref={timelineRef} className="relative">
            {/* Base line (gray) */}
            <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-border" />
            {/* Animated green line on top */}
            <motion.div
              className="absolute left-3 top-4 w-0.5 bg-primary origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 pl-12"
                >
                  <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-primary flex-shrink-0 z-10 flex items-center justify-center shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold font-heading text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;
