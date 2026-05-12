import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY_URL = ""; // Cole aqui o seu link do Calendly ou outra ferramenta

const BookingEmbed = () => {
  return (
    <section id="book" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Free Audit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Schedule Your Free 30-Minute Audit
          </h2>
          <p className="text-muted-foreground text-sm">
            Choose a time that works for you. No commitment, no pressure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {CALENDLY_URL ? (
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-2xl border border-border shadow-md"
              title="Schedule a meeting"
            />
          ) : (
            <div className="bg-card border-2 border-dashed border-border rounded-2xl p-16 flex flex-col items-center gap-4 text-muted-foreground">
              <Calendar size={40} className="text-primary/40" />
              <p className="text-sm font-medium">Espaço reservado para o embed de agendamento</p>
              <p className="text-xs">Cole o link do Calendly (ou outra ferramenta) no arquivo <span className="font-mono bg-muted px-1 rounded">BookingEmbed.tsx</span></p>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            By scheduling, you agree to our{" "}
            <Link to="/privacy-policy" className="underline hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            . Your information is used solely to conduct your free audit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingEmbed;
