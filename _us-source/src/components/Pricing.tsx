import { motion } from "framer-motion";
import { CheckCircle2, CircleCheck, CalendarX2 } from "lucide-react";

const features = [
  "Optimized Google Business Profile",
  "Landing Pages by City & ZIP Code",
  "Search Ads by Move Type",
  "Call Tracking & Attribution",
  "Review Generation System",
  "Bi-Weekly Performance Reports",
];

const Pricing = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2e23 0%, #0a2418 100%)" }}>
      {/* Background geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-white blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 bg-white blur-3xl pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-5xl font-bold font-heading text-white leading-tight">
            Full Map Program
          </h2>
          <p className="text-lg md:text-3xl font-bold font-heading mt-1 mb-4" style={{ color: "hsl(55 100% 70%)" }}>
            90 days
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
              <CircleCheck size={14} className="text-foreground shrink-0" />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">One Client per City</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
              <CalendarX2 size={14} className="text-foreground shrink-0" />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">No Long-Term Contract</span>
            </div>
          </div>
        </motion.div>

        {/* White pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-5 md:p-8 shadow-xl"
        >
          {/* Plan label */}
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="font-bold text-foreground">Growth</span>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Ideal for Established Moving Companies (20+ trucks)</p>
          <hr className="border-border mb-6" />

          {/* Price line */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 flex-wrap">
              <p className="text-base md:text-2xl font-bold font-heading text-foreground">Pay-Per-Move Completed</p>
              <span className="text-xs text-muted-foreground">/month</span>
              <span className="text-xs font-bold text-destructive tracking-wider uppercase">· Ads + Setup Fee Not Included</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#book"
            className="block w-full text-center font-bold text-white py-3 md:py-4 rounded-xl text-sm md:text-lg mb-6 transition-all hover:brightness-90"
            style={{ backgroundColor: "hsl(var(--primary))" }}
          >
            Book Your Free Audit
          </a>

          {/* Feature list */}
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
