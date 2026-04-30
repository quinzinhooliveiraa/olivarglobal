import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import SocialProof from "@/components/SocialProof";
import Method from "@/components/Method";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <SocialProof />
      <Method />
      <Testimonials />
      <Pricing />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
