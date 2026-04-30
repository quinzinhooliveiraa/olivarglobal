import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?hide_event_type_details=1&hide_gdpr_banner=1&text_color=121212&primary_color=036100";

const PainPoints = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="book" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto text-center relative max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Premium icon badge */}
          <div className="flex items-center justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(130 55% 32%) 0%, hsl(130 45% 20%) 100%)" }}
            >
              <ShieldCheck size={28} className="text-white" />
            </div>
          </div>

          <p className="text-base font-semibold text-foreground mb-2">
            No Shared or Broker Leads
          </p>

          <h2 className="text-2xl md:text-5xl font-bold font-heading text-primary leading-tight mb-4">
            You Only Pay When a Move is Booked and Done
          </h2>

          <p className="text-muted-foreground text-sm">
            30 Minute Free Audit —{" "}
            <span className="font-bold text-foreground">Schedule Your Free Audit below</span>
          </p>
        </motion.div>

        {/* Calendar label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground px-2">
            👇 Pick a day &amp; time below
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Calendly inline widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-full overflow-hidden rounded-2xl shadow-md border border-border"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ width: "100%", height: "700px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
