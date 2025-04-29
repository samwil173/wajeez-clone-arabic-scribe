
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import TrackingSection from "@/components/TrackingSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <PricingSection />
        <TrackingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
