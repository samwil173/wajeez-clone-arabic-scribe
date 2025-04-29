
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-lg text-gray-700">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
