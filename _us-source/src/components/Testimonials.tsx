import { motion } from "framer-motion";
import { Star } from "lucide-react";
import triStateLogo from "@/assets/tristate-logo.png";
import prestigeLogo from "@/assets/prestige-logo.png";
import eliteVanLinesLogo from "@/assets/elitevanlines-logo.png";
import jlMovingLogo from "@/assets/jlmoving-logo.png";
import aaMovingLogo from "@/assets/aamoving-logo.png";

const testimonials = [
  {
    name: "David S.",
    role: "CEO",
    company: "Tri-State Relocations",
    location: "FL",
    initials: "TR",
    color: "bg-blue-600",
    logo: triStateLogo,
    logoBg: "#0d1526",
    rating: 5,
    text: "Managing a fleet of 24 trucks means high overhead. If they aren't moving, I'm losing money. Olivar Scale Jobs filled our mid-week gaps in the first 14 days. We went from 65% fleet utilization to 92% without touching our sales process. Their 'Pay-Per-Booked-Job' model is the only one that actually aligns with a mover's P&L.",
  },
  {
    name: "Marcus R.",
    role: "Owner",
    company: "Prestige Movers & Storage",
    location: "TX",
    initials: "PM",
    color: "bg-orange-500",
    logo: prestigeLogo,
    logoBg: "#000000",
    rating: 5,
    text: "I was burning $8k a month on shared leads from Angi and Thumbtack, competing with 5 other guys on price. Olivar changed the game. Last month, we closed 58 exclusive moves from their system with a 41% booking rate. No more price wars. These are high-intent callers asking for us by name.",
  },
  {
    name: "Sarah T.",
    role: "Operations Director",
    company: "Elite Van Line",
    location: "CA",
    initials: "EV",
    color: "bg-emerald-600",
    logo: eliteVanLinesLogo,
    logoBg: "#ffffff",
    rating: 5,
    text: "Most agencies send you 'one-bedroom apartment' junk. Olivar's ZIP-code landing pages actually filter for the big fish. In July alone, they generated 14 long-distance moves and nine 4+ bedroom home jobs. Our average ticket size increased by $1,400 per job because the lead quality is just on another level.",
  },
  {
    name: "Jason L.",
    role: "Founder",
    company: "JL Moving LLC",
    location: "IL",
    initials: "JL",
    color: "bg-purple-600",
    logo: jlMovingLogo,
    logoBg: "#ffffff",
    rating: 5,
    text: "We were stuck at around 40–50 moves a month for years. After implementing their Full Map Program, we broke our record and hit 114 booked moves in 30 days. We've had to buy 3 new trucks just to keep up with the volume. They aren't just a marketing agency; they are a growth partner for the long haul.",
  },
  {
    name: "Anton R.",
    role: "CEO",
    company: "A&A Moving Solutions",
    location: "NY",
    initials: "AA",
    color: "bg-rose-600",
    logo: aaMovingLogo,
    logoBg: "#ffffff",
    rating: 5,
    text: "I've been burned by 'SEO gurus' charging $3k retainers for 'impressions' that don't pay bills. Olivar is different. Zero monthly fees. I only pay when the job is on my calendar and the deposit is paid. We've added $120k in new revenue in 90 days with literally zero risk on our end.",
  },
];


const Testimonials = () => {
  return (
    <section id="results" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-5 shadow-md"
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="w-4 h-4 shrink-0"
              fill="none"
              initial={{ rotate: -20, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </motion.svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Star size={13} className="fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <motion.span
              className="text-sm font-bold text-foreground"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              4.8
            </motion.span>
          </motion.div>
          <h2 className="text-xl md:text-4xl font-bold font-heading leading-tight">
            Real Local Proof
          </h2>
          <p className="text-xl md:text-4xl font-bold font-heading text-destructive mt-1">
            Not Empty Promises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              {/* Company logo + name + verified badge */}
              <div className="flex items-center gap-3 min-w-0 mb-5">
                {/* Company logo */}
                {(t as any).logo ? (
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm" style={{ backgroundColor: (t as any).logoBg || "#0d1526" }}>
                    <img src={(t as any).logo} alt={t.company} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ) : (
                  <div className={`w-11 h-11 rounded-xl ${t.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <span className="text-sm font-extrabold text-white tracking-tight">{t.initials}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-bold text-sm leading-tight text-foreground whitespace-nowrap truncate">{t.company}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap truncate">{t.name} · {t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-foreground/75 leading-relaxed flex-1">"{t.text}"</p>

              {/* Footer */}
              <div className="flex items-center justify-end mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-[10px] text-muted-foreground">Google Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
