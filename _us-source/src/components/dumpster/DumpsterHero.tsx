import { motion } from "framer-motion";
import { Clock, Users, MapPin } from "lucide-react";
import heroTruck from "@/assets/dumpster/hero-truck.png";
import guaranteeBadge from "@/assets/dumpster/guarantee-badge.png";

const badges = [
  {
    icon: Clock,
    label: "30 minutes",
    // top-left, outside truck body — above and to the left
    pos: "absolute -left-6 top-4 z-20",
    anim: { y: [0, -10, 0] },
    delay: 0,
    duration: 3,
  },
  {
    icon: Users,
    label: "Exclusive Leads",
    // right side, mid-height — clear of the cab
    pos: "absolute -right-6 top-1/4 z-20",
    anim: { y: [0, 12, 0] },
    delay: 0.5,
    duration: 3.6,
  },
  {
    icon: MapPin,
    label: "1 client per city",
    // bottom-left, below the truck body
    pos: "absolute -left-4 bottom-12 z-20",
    anim: { y: [0, -8, 0] },
    delay: 0.9,
    duration: 4.2,
  },
];

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

            {/* Mobile-only pills */}
            <div className="flex sm:hidden flex-wrap gap-2 mb-6 justify-center">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/80 border border-[#15803d]/30 rounded-full px-4 py-2 shadow-sm backdrop-blur-md"
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

          {/* RIGHT — truck + floating pills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-6 lg:mx-8"
          >
            <img
              src={heroTruck}
              alt="Orange roll-off dumpster truck"
              className="w-full h-auto relative z-10"
              fetchpriority="high"
              decoding="async"
            />

            {/* 90-day guarantee badge */}
            <motion.img
              src={guaranteeBadge}
              alt="90-Day Guarantee"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 md:-right-4 w-24 md:w-32 z-20 drop-shadow-xl"
            />

            {/* Floating glassmorphism badges — desktop only */}
            {badges.map(({ icon: Icon, label, pos, anim, delay, duration }) => (
              <motion.div
                key={label}
                animate={anim}
                transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                className={`hidden sm:flex ${pos} items-center gap-2 rounded-full px-4 py-2.5 shadow-lg`}
                style={{
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(21,128,61,0.25)",
                  boxShadow: "0 4px 24px 0 rgba(15,46,35,0.10), 0 1.5px 6px 0 rgba(21,128,61,0.08)",
                }}
              >
                <Icon size={15} className="text-[#15803d] shrink-0" />
                <span className="text-sm font-semibold text-black whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DumpsterHero;
