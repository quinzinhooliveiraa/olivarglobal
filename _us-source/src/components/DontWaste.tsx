import { motion } from "framer-motion";
import moversFurniture from "@/assets/movers-furniture.jpg";

const DontWaste = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-destructive/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-destructive/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid md:grid-cols-2 items-stretch">
            {/* Image side */}
            <div className="relative h-64 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              <img
                src={moversFurniture}
                alt="Movers carrying furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
            </div>

            {/* Text side */}
            <div className="relative p-8 md:p-12 text-center md:text-left">
              <span className="text-5xl font-bold text-primary/20 font-heading">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 font-heading mt-2">
                Don't Waste Your Money
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One of our clients came to us convinced that Google Ads didn't work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For three months, he spent <strong className="text-foreground">$3,000 on ads</strong> with inexperienced agencies and got{" "}
                <strong className="text-destructive">zero moving jobs</strong> in return. Just clicks and excuses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After switching to our approach, in less than two months, that same budget generated{" "}
                <strong className="text-primary">32 booked moving jobs</strong>, plus a new website built to convert high-intent visitors into real customers.
              </p>
              <p className="text-foreground font-semibold">
                The problem was never Google Ads. It was wasting money on people learning on your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DontWaste;
