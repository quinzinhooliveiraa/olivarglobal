import { motion } from "framer-motion";
import guaranteeBadge from "@/assets/dumpster/guarantee-badge.png";

const DumpsterOffer = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto"
        >
          <motion.img
            src={guaranteeBadge}
            alt="90-Day Guarantee"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 md:w-72 md:h-72 mb-2 drop-shadow-2xl"
          />

          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-black mb-4">
            90-Day Guarantee
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            If we don't increase your qualified calls vs. baseline within 90 days, we'll work for free until we hit the goal.
          </p>

          <a
            href="#book"
            className="block w-full sm:inline-block sm:w-auto bg-[#0f2e23] text-white px-8 py-4 rounded-md font-bold text-base md:text-lg hover:brightness-95 transition-all shadow-md text-center"
          >
            Schedule Your Free Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DumpsterOffer;
