import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Container } from "lucide-react";
import truck1 from "@/assets/dumpster/real-truck-2.jpg";
import truck2 from "@/assets/dumpster/real-truck-1.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import avatar4 from "@/assets/avatar4.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

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


const DumpsterSocialProof = () => {
  const retention = useCountUp(95, 1600);
  const companies = useCountUp(12, 1400);
  const rentals = useCountUp(8500, 2000);

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-green-100 flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #15803d 0%, #143824 100%)" }}
                >
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold font-heading text-sm leading-tight">Dumpster companies satisfied</p>
                  <p className="text-xs text-muted-foreground">They trusted our pay-per-rental model.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl md:text-4xl font-bold font-heading">
                  <span ref={retention.ref}>{retention.count}</span>%
                </p>
                <p className="text-sm text-[#15803d]">Client Retention</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-5 flex flex-col gap-3 bg-[#0a2418]"
            >
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-[#0a2418] object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-xl">
                  <span ref={companies.ref}>{companies.count}</span>+
                </p>
                <p className="text-sm text-white/60">Satisfied Dumpster Companies</p>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden flex-1 min-h-[180px] bg-[#f0fdf4] flex items-center justify-center"
            >
              <img
                src={truck2}
                alt="Dumpster being delivered"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-green-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #15803d 0%, #143824 100%)" }}
                >
                  <Container size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold font-heading text-sm leading-tight">Dumpsters Rented</p>
                  <p className="text-xs text-muted-foreground">Generated for our clients.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl md:text-4xl font-bold font-heading">
                  <span ref={rentals.ref}>{rentals.count.toLocaleString()}</span>+
                </p>
                <p className="text-sm text-[#15803d]">Booked & Paid</p>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:block rounded-2xl overflow-hidden relative bg-[#ecfdf5]"
          >
            <img
              src={truck1}
              alt="Orange dumpster truck with map and Google Business Profile"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <div className="w-6 h-px bg-black/30" />
              <span className="text-black/40 font-bold text-sm tracking-widest uppercase">OLIVAR SCALE JOBS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DumpsterSocialProof;
