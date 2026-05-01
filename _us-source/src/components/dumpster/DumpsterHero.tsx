import { motion } from "framer-motion";
import { Clock, Users, MapPin } from "lucide-react";
import heroTruck from "@/assets/dumpster/hero-truck.png";
import guaranteeBadge from "@/assets/dumpster/guarantee-badge.png";

const DumpsterHero = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm md:text-base font-extrabold tracking-widest uppercase mb-5">
              <span className="text-[#15803d]">Olivar Scale Jobs</span>
              <span className="text-foreground"> - </span>
              <span className="text-foreground">Pay-Per-Rentals</span>
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-8 text-black font-heading tracking-tight">
              Fill Your Calendar With 50-90+ More Booked Dumpsters Per Week in 30 days
            </h1>

            {/* Mobile-only pills (static) */}
            <div className="flex sm:hidden flex-wrap gap-2 mb-6 justify-center">
              {[
                { icon: Clock,   label: "30 minutes" },
                { icon: Users,   label: "Exclusive Leads" },
                { icon: MapPin,  label: "1 client per city" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#ecfdf5] border border-[#15803d]/30 rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon size={14} className="text-[#15803d]" />
                  <span className="text-xs font-semibold text-black">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start">
              <a
                href="#book"
                className="bg-[#0f2e23] text-white px-6 py-3.5 rounded-md text-sm font-bold hover:brightness-95 transition-all w-full sm:w-auto text-center"
              >
                Schedule Your Free Audit
              </a>
              <a
                href="#book"
                className="bg-[#15803d] text-white px-6 py-3.5 rounded-md text-sm font-bold hover:brightness-95 transition-all w-full sm:w-auto text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>

          {/* RIGHT — truck + guarantee badge + floating pills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroTruck}
              alt="Orange roll-off dumpster truck with Google Maps"
              className="w-full h-auto relative z-10"
              fetchpriority="high"
              decoding="async"
            />
            <motion.img
              src={guaranteeBadge}
              alt="90-Day Guarantee"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 md:-right-4 w-24 md:w-36 z-20 drop-shadow-xl"
            />

            {/* Floating badges — desktop only */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -left-3 top-6 z-20 items-center gap-2 bg-[#ecfdf5] border border-[#15803d]/40 rounded-full px-4 py-2.5 shadow-xl backdrop-blur-sm"
            >
              <Clock size={15} className="text-[#15803d]" />
              <span className="text-sm font-semibold text-black">30 minutes</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="hidden sm:flex absolute -right-3 top-1/3 z-20 items-center gap-2 bg-[#ecfdf5] border border-[#15803d]/40 rounded-full px-4 py-2.5 shadow-xl backdrop-blur-sm"
            >
              <Users size={15} className="text-[#15803d]" />
              <span className="text-sm font-semibold text-black">Exclusive Leads</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="hidden sm:flex absolute -left-2 bottom-16 z-20 items-center gap-2 bg-[#ecfdf5] border border-[#15803d]/40 rounded-full px-4 py-2.5 shadow-xl backdrop-blur-sm"
            >
              <MapPin size={15} className="text-[#15803d]" />
              <span className="text-sm font-semibold text-black">1 client per city</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DumpsterHero;
