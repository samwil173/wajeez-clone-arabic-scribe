
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingSection from "@/components/TrackingSection";

const TrackPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">تتبع طلبك</h1>
            <p className="text-lg text-gray-700">
              اعرف حالة طلبك والوقت المتوقع للتسليم في أي وقت
            </p>
          </div>
        </div>
        <TrackingSection />
      </main>
      <Footer />
    </div>
  );
};

export default TrackPage;
