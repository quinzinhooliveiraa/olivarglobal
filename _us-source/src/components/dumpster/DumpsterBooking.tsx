import { motion } from "framer-motion";
import { Truck, Zap } from "lucide-react";

const DumpsterBooking = () => {
  return (
    <section
      id="book"
      className="py-16 md:py-20 px-4 md:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,92,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center -space-x-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-[#0f5132] flex items-center justify-center shadow-md">
              <Truck size={22} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#15803d] flex items-center justify-center shadow-md">
              <Zap size={22} className="text-white" strokeWidth={2.5} fill="white" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2 font-heading">
            No Junk or Shared Leads
          </h2>
          <p className="text-2xl md:text-4xl font-extrabold text-[#15803d] mb-3 font-heading leading-tight">
            You Only Pay When a Dumpster is Booked and Paid
          </p>
          <p className="text-base md:text-lg text-black">
            <span className="font-semibold">30 Minute Free Audit</span>
            <span className="text-muted-foreground">. Schedule Your Free Audit below</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100"
        >
          <iframe
            src="https://calendly.com/quinzinhooliveiraa/olivar-scale-jobs-free-audit?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=15803d"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule Your Free Audit"
            className="block w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DumpsterBooking;
