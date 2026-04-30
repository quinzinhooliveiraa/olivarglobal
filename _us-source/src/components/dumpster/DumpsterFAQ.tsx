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
    a: "Most clients start seeing an increase in calls within the first 7 days. Our program includes a 90-day guarantee. If qualified calls don't grow vs. your baseline, we work for free until they do.",
  },
  {
    q: "Do you work with brokers?",
    a: "No. Our focus is direct-to-client leads, so you stop losing margin to brokers. You get exclusive clients per city, no competition with other dumpster companies we serve.",
  },
  {
    q: "What does \"exclusive by city\" mean?",
    a: "We only accept one client per city/market area. If you sign with us, none of your local competitors can join.",
  },
  {
    q: "Pay-Per-Dumpster Rental?",
    a: "You only pay for our service when a dumpster is rented. If a lead is unqualified and doesn't result in a rental, you don't pay us anything.",
  },
  {
    q: "Can you integrate with my dumpster software?",
    a: "Yes, we integrate with ServiceCore and Docket for advanced lead tracking and workflow automation.",
  },
  {
    q: "How do I know the calls are real customers?",
    a: "We use call tracking to record and classify calls, so you know exactly how many qualified leads we generate.",
  },
  {
    q: "How much can I realistically grow?",
    a: "Some of our clients are already hitting $1,000,000 in yearly revenue, renting 250+ dumpsters per month. Results depend on fleet size, market, and execution, but the system is designed to scale month after month.",
  },
];

const DumpsterFAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[#15803d] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-black leading-tight">
            Frequently Asked Questions
          </h2>
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
                className="bg-white border border-green-100 rounded-xl px-6 transition-all duration-300 shadow-sm hover:border-[#15803d]/40"
              >
                <AccordionTrigger className="text-left font-bold font-body text-base text-black hover:no-underline hover:text-[#15803d] py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
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

export default DumpsterFAQ;
