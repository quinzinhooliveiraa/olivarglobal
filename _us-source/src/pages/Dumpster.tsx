import DumpsterNavbar from "@/components/dumpster/DumpsterNavbar";
import DumpsterHero from "@/components/dumpster/DumpsterHero";
import DumpsterBooking from "@/components/dumpster/DumpsterBooking";
import DumpsterMethod from "@/components/dumpster/DumpsterMethod";
import DumpsterSocialProof from "@/components/dumpster/DumpsterSocialProof";
import DumpsterTestimonials from "@/components/dumpster/DumpsterTestimonials";
import DumpsterPricing from "@/components/dumpster/DumpsterPricing";
import DumpsterOffer from "@/components/dumpster/DumpsterOffer";
import DumpsterFAQ from "@/components/dumpster/DumpsterFAQ";
import DumpsterFinalCTA from "@/components/dumpster/DumpsterFinalCTA";
import DumpsterFooter from "@/components/dumpster/DumpsterFooter";

const Dumpster = () => {
  return (
    <div className="min-h-screen bg-white">
      <DumpsterNavbar />
      <DumpsterHero />
      <DumpsterBooking />
      <DumpsterMethod />
      <DumpsterSocialProof />
      <DumpsterTestimonials />
      <DumpsterPricing />
      <DumpsterOffer />
      <DumpsterFAQ />
      <DumpsterFinalCTA />
      <DumpsterFooter />
    </div>
  );
};

export default Dumpster;
