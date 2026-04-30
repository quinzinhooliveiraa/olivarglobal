import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Target, FileText, Phone, BarChart3, Clock } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Google Business Profile",
    desc: "Get found where customers are searching. We optimize your GBP with photos, reviews, categories, and posts to put your company in the Top 3 on Google Maps.",
  },
  {
    icon: Target,
    title: "Search Ads by Size",
    desc: "Target the right customers with ads tailored to dumpster sizes (10/20/30/40 yd). Maximize leads by showing up exactly when and where people are ready to rent.",
  },
  {
    icon: FileText,
    title: "Landing Pages by ZIP Code",
    desc: "Dedicated landing pages for each city and ZIP code, built to convert. Customers see your company as the local go-to choice, boosting call volume and trust.",
  },
  {
    icon: Phone,
    title: "Call Tracking",
    desc: "Know exactly where your calls come from. Every lead is tracked, recorded, and classified so you can measure real ROI. No more guessing.",
  },
  {
    icon: BarChart3,
    title: "Results",
    desc: "Our method isn't about promises. It's about measurable growth. Clients regularly scale from 100 rentals/month to 250+, reaching $900K+ yearly revenue.",
  },
];

const DumpsterMethod = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.8"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="method" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 text-center lg:text-left"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#15803d] mb-4">
              The Method
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-black leading-tight mb-8 tracking-tight">
              Get Access To The Only Pay-Per-Rentals Growth Partner
            </h2>

            <a
              href="#book"
              className="block w-full text-center bg-[#0f2e23] text-white font-bold text-base py-4 rounded-md mb-3 hover:brightness-95 transition-all"
            >
              Schedule Your Free Audit
            </a>

            <div className="flex items-center justify-center gap-2 bg-[#ecfdf5] rounded-full py-3">
              <Clock size={16} className="text-[#15803d]" />
              <span className="text-sm font-semibold text-black">30 minutes</span>
            </div>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-green-100" />
            <motion.div
              className="absolute left-5 top-4 w-0.5 bg-[#15803d] origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 pl-16"
                >
                  <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-[#15803d] flex-shrink-0 z-10 flex items-center justify-center shadow-md">
                    <step.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold font-heading text-black mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.desc}</p>
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

export default DumpsterMethod;
