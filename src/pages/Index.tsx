
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import MapTracking from "@/components/MapTracking";
import ContactSection from "@/components/ContactSection";
import PaymentOptions from "@/components/PaymentOptions";
import DriverExperience from "@/components/DriverExperience";
import MultiLanguage from "@/components/MultiLanguage";
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
        <MapTracking />
        <PaymentOptions />
        <PricingSection />
        <DriverExperience />
        <MultiLanguage />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
