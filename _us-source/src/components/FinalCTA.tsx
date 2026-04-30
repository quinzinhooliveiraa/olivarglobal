import { motion } from "framer-motion";
import movingTruck from "@/assets/moving-truck-hero.png";

const FinalCTA = () => {
  return (
    <section id="book" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-visible flex items-start min-h-[220px]"
          style={{ background: "hsl(var(--primary))" }}
        >
          {/* Left content — full width on mobile, 58% on desktop */}
          <div className="relative z-10 px-4 pt-5 pb-5 md:px-12 md:py-10 w-full md:max-w-[58%] flex flex-col">
            <h2 className="text-base md:text-3xl font-bold font-heading text-white leading-snug">
              <span className="md:hidden">Fill Your Calendar Without Brokers?</span>
              <span className="hidden md:inline">Ready to Fill Your Calendar Without Brokers?</span>
            </h2>
            <p className="text-white/80 text-xs md:text-sm hidden sm:block mt-2">
              Limited spots per city — we only accept <strong className="text-white">1 client per area</strong>.
            </p>
            <a
              href="https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?primary_color=094000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-bold px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl text-xs md:text-base transition-all hover:opacity-90 shadow-md bg-white whitespace-nowrap self-start"
              style={{ color: "hsl(130 45% 18%)" }}
            >
              <span className="md:hidden">Free Audit →</span>
              <span className="hidden md:inline">Schedule Your Free Audit →</span>
            </a>
          </div>

          {/* Truck — mobile only (large, offset right) */}
          <div
            className="md:hidden absolute pointer-events-none select-none"
            style={{ bottom: "-40px", top: "-40px", width: "90%", right: "-10%" }}
          >
            <img
              src={movingTruck}
              alt="Moving Truck"
              className="h-full w-full object-contain object-right-bottom"
              style={{ filter: "drop-shadow(-10px 10px 20px rgba(0,0,0,0.3))" }}
            />
          </div>

          {/* Truck — desktop only (contained, right side) */}
          <div
            className="hidden md:block absolute right-0 pointer-events-none select-none"
            style={{ bottom: "-40px", top: "-40px", width: "48%" }}
          >
            <img
              src={movingTruck}
              alt="Moving Truck"
              className="h-full w-full object-contain object-right-bottom"
              style={{ filter: "drop-shadow(-10px 10px 20px rgba(0,0,0,0.3))" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
