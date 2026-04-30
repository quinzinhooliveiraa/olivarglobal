import { motion } from "framer-motion";
import guaranteeBadge from "@/assets/guarantee-badge.png";

const Offer = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-lg mx-auto"
        >
          {/* Badge with decorative rings */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Outer dashed ring */}
            <div
              className="absolute rounded-full border border-dashed border-border/60"
              style={{ width: "280px", height: "280px" }}
            />
            {/* Inner dashed ring */}
            <div
              className="absolute rounded-full border border-dashed border-border/40"
              style={{ width: "210px", height: "210px" }}
            />
            {/* Badge image */}
            <motion.img
              src={guaranteeBadge}
              alt="90-Day Guarantee"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-36 h-36 md:w-44 md:h-44 relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Text content */}
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            90-Day Guarantee
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
            If we don't increase your qualified calls vs. baseline within 90 days, we'll work for free until we hit the goal.
          </p>

          {/* CTA */}
          <a
            href="#book"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-lg"
          >
            YES! I Want More Moving Jobs →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
