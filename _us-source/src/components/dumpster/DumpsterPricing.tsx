import { motion } from "framer-motion";
import { CheckCircle2, CircleCheck, CalendarX2 } from "lucide-react";

const features = [
  "Optimized GBP",
  "Landing Pages by Size & City",
  "Search Ads",
  "Call Tracking",
  "Review Machine",
  "Bi-Weekly Reports",
];

const DumpsterPricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2e23 0%, #0a2418 100%)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-[#15803d] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 bg-[#0f5132] blur-3xl pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight">
            Dumpster Flow
          </h2>
          <p className="text-2xl md:text-4xl font-extrabold font-heading mt-1 mb-5 text-[#16a34a]">
            90 days
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
              <CircleCheck size={14} className="text-black shrink-0" />
              <span className="text-xs font-bold text-black whitespace-nowrap">One Client per City</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
              <CalendarX2 size={14} className="text-black shrink-0" />
              <span className="text-xs font-bold text-black whitespace-nowrap">No Long-Term Contract</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={18} className="text-[#15803d]" />
            <span className="font-extrabold text-black text-lg">Growth</span>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Ideal for Regional Operators</p>
          <hr className="border-border mb-6" />

          <div className="mb-6">
            <div className="flex items-baseline gap-2 flex-wrap">
              <p className="text-xl md:text-3xl font-extrabold font-heading text-black">Pay-Per-Dumpster Rented</p>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-xs font-bold text-[#15803d] tracking-wider uppercase mt-1">
              Ads + Setup Fee Not Included
            </p>
          </div>

          <a
            href="#book"
            className="block w-full text-center font-bold text-white py-4 rounded-md text-base mb-6 transition-all hover:brightness-95 bg-[#15803d]"
          >
            Book Your Free Audit
          </a>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#15803d] shrink-0" />
                <span className="text-base text-black">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DumpsterPricing;
