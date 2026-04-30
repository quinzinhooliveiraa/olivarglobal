import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroImage from "@/assets/IMG_0680_1775702657750.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-6">
              <span className="text-foreground">Olivar Scale Jobs</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 font-heading">
              Add 50–90+{" "}
              <span className="text-gradient">Booked Moving Jobs</span>{" "}
              to Your Calendar Every Month.
            </h1>

            <p className="text-base text-muted-foreground mb-6 max-w-xl leading-relaxed mx-auto lg:mx-0">
              We generate 50–90+ high-ticket moving jobs per month using our{" "}
              <span className="text-foreground font-semibold">"Scale-to-Move" System</span>.{" "}
              You only pay our service fee when the job is booked and done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center lg:items-start justify-center lg:justify-start">
              <a
                href="#book"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all animate-pulse-glow text-center whitespace-nowrap w-full sm:w-auto"
              >
                Schedule Your Free Audit
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>⏱</span>
                <span>30-minute free strategy call</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <img src={heroImage} alt="Moving truck ready for jobs" className="w-full h-auto" fetchpriority="high" decoding="async" />
              <div className="absolute inset-0 bg-black/30 rounded-2xl" />
            </div>

            {/* Floating badges — desktop only */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden sm:flex absolute -left-3 top-8 rounded-xl px-4 py-2.5 border border-primary/20 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: "hsla(150, 30%, 8%, 0.85)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <p className="text-sm font-semibold text-white">No Monthly Retainers</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="hidden sm:flex absolute -right-3 top-1/4 rounded-xl px-4 py-2.5 border border-primary/20 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: "hsla(150, 30%, 8%, 0.85)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <p className="text-sm font-semibold text-white">No Shared Leads</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden sm:flex absolute -left-2 bottom-1/4 rounded-xl px-4 py-2.5 border border-primary/20 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: "hsla(150, 30%, 8%, 0.85)" }}
            >
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <p className="text-sm font-semibold text-white">Call Tracking</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="hidden sm:flex absolute -right-2 bottom-8 rounded-xl px-4 py-2.5 border border-primary/20 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: "hsla(150, 30%, 8%, 0.85)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <p className="text-sm font-semibold text-white">Exclusive City Rights</p>
              </div>
            </motion.div>

            {/* Pills row — mobile only, below image */}
            <div className="flex sm:hidden flex-wrap gap-2 mt-3 justify-center">
              {[
                { icon: null, label: "No Monthly Retainers" },
                { icon: null, label: "No Shared Leads" },
                { icon: Phone, label: "Call Tracking" },
                { icon: null, label: "Exclusive City Rights" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-primary/20"
                  style={{ backgroundColor: "hsla(150, 30%, 8%, 0.9)" }}
                >
                  {Icon ? <Icon size={11} className="text-primary" /> : <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
                  <span className="text-[10px] font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
