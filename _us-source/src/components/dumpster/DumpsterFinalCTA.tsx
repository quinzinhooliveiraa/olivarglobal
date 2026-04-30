import { motion } from "framer-motion";
import footerTruck from "@/assets/dumpster/footer-truck.png";

const DumpsterFinalCTA = () => {
  return (
    <section id="book" className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #15803d 0%, #16a34a 100%)" }}
        >
          {/* Mobile layout: stacked */}
          <div className="md:hidden flex flex-col">
            <div className="px-6 pt-8 pb-4 flex flex-col text-center">
              <h2 className="text-2xl font-extrabold font-heading text-white leading-tight mb-3">
                Ready to fill 15/20/30/40yd without brokers?
              </h2>
              <p className="text-white/90 text-sm mb-5">
                Limited spots per city. We only accept <strong className="text-white">1 client per area</strong>.
              </p>
              <a
                href="https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?primary_color=15803d"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-[#0f2e23] border border-[#15803d]/20 font-bold px-7 py-4 rounded-md text-base transition-all hover:brightness-95 shadow-md text-center"
              >
                Schedule Your Free Audit →
              </a>
            </div>
            <div className="w-full">
              <img
                src={footerTruck}
                alt="Roll-off Dumpster Truck"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Desktop layout: side by side */}
          <div className="hidden md:flex items-stretch min-h-[260px]">
            <div className="relative z-10 px-12 py-12 max-w-[60%] flex flex-col justify-center text-left">
              <h2 className="text-4xl font-extrabold font-heading text-white leading-tight mb-3">
                Ready to fill 15/20/30/40yd without brokers?
              </h2>
              <p className="text-white/90 text-base mb-5">
                Limited spots per city. We only accept <strong className="text-white">1 client per area</strong>.
              </p>
              <a
                href="https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?primary_color=15803d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-white text-[#0f2e23] border border-[#15803d]/20 font-bold px-7 py-4 rounded-md text-base transition-all hover:brightness-95 shadow-md text-center"
              >
                Schedule Your Free Audit →
              </a>
            </div>
            <div
              className="absolute right-0 bottom-0 top-0 pointer-events-none select-none"
              style={{ width: "50%" }}
            >
              <img
                src={footerTruck}
                alt="Roll-off Dumpster Truck"
                className="h-full w-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DumpsterFinalCTA;
