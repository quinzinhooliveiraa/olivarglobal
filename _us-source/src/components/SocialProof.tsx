import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Package } from "lucide-react";
import movingTruck from "@/assets/IMG_0681_1775702681106.jpeg";
import movingTruck2 from "@/assets/o_1775764023214.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import avatar4 from "@/assets/avatar4.jpg";

const useCountUp = (end: number, duration = 1800, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, start, duration]);

  return { count, ref };
};

const SocialProof = () => {
  const retention = useCountUp(95, 1600);
  const companies = useCountUp(14, 1400);
  const jobs = useCountUp(18340, 2000);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">

        {/* Mobile: stacked. Desktop: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

          {/* Column 1: Two stat cards */}
          <div className="flex flex-col gap-4">

            {/* Client Retention card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0" style={{ background: "linear-gradient(135deg, hsl(130 55% 32%) 0%, hsl(130 45% 20%) 100%)" }}>
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold font-heading text-sm leading-tight">Moving companies satisfied</p>
                  <p className="text-xs text-muted-foreground">They trusted our digital marketing tactics.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl md:text-4xl font-bold font-heading">
                  <span ref={retention.ref}>{retention.count}</span>%
                </p>
                <p className="text-sm text-primary">Client Retention</p>
              </div>
            </motion.div>

            {/* Satisfied Companies dark card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "hsl(var(--foreground))" }}
            >
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Moving company owner"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-background text-xl">
                  <span ref={companies.ref}>{companies.count}</span>+
                </p>
                <p className="text-sm text-background/60">Satisfied Moving Companies</p>
              </div>
            </motion.div>

          </div>

          {/* Column 2: Photo + Moving Jobs card */}
          <div className="flex flex-col gap-4">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden flex-1 min-h-[180px]"
            >
              <img
                src={movingTruck}
                alt="Professional moving company team at work"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Moving Jobs card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0" style={{ background: "linear-gradient(135deg, hsl(130 55% 32%) 0%, hsl(130 45% 20%) 100%)" }}>
                  <Package size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold font-heading text-sm leading-tight">Moving Jobs</p>
                  <p className="text-xs text-muted-foreground">Generated for our clients.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl md:text-4xl font-bold font-heading">
                  <span ref={jobs.ref}>{jobs.count.toLocaleString()}</span>+
                </p>
                <p className="text-sm text-primary">Moving Jobs</p>
              </div>
            </motion.div>

          </div>

          {/* Column 3: Tall photo — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:block rounded-2xl overflow-hidden relative"
          >
            <img
              src={movingTruck2}
              alt="Moving team loading truck"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <div className="w-6 h-px bg-white/40" />
              <span className="text-white/40 font-bold text-sm tracking-widest uppercase">OLIVAR SCALE JOBS</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;
