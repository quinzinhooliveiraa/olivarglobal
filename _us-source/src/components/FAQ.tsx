import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast can I see results?",
    a: "Most clients start seeing an increase in calls within the first 20–35 days. Our program includes a 90-day guarantee — if qualified calls don't grow vs. your baseline, we work for free until they do.",
  },
  {
    q: "What does \"exclusive by city\" mean?",
    a: "We only accept one client per city/market area. If you sign with us, none of your local competitors can join. Your territory is protected.",
  },
  {
    q: "What is the Pay-Per-Job model?",
    a: "You only pay when a move is booked and completed. If a lead is unqualified and doesn't result in a booked job, you don't pay us anything.",
  },
  {
    q: "How many new leads will I receive?",
    a: "It depends on your location, service area, budget, and competition. Typically our clients see between 30 to 90+ booked moves per month.",
  },
  {
    q: "Why choose a specialized agency?",
    a: "We focus exclusively on the moving industry. This means we know what works, what doesn't, and can deliver results faster with less trial-and-error than a generalist agency.",
  },
  {
    q: "Do you work with brokers?",
    a: "No. Our focus is direct-to-client leads, so you stop losing margin to brokers. You get exclusive clients per city, no competition with other movers we serve.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-xl md:text-4xl font-bold font-heading text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Everything you need to know before getting started.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl px-6 transition-all duration-300 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold font-body text-sm text-foreground hover:no-underline hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
