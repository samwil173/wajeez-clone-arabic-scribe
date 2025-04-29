
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import PricingSection from "@/components/PricingSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
            <p className="text-lg text-gray-700">
              مجموعة متكاملة من خدمات التوصيل لتلبية جميع احتياجاتك
            </p>
          </div>
        </div>
        <Services />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
