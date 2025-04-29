
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-l from-primary-50 to-white py-12 md:py-20">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            توصيل سريع وموثوق به لجميع احتياجاتك
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            نقدم خدمات توصيل سريعة وموثوقة لجميع أنحاء المدينة. اطلب الآن واحصل على توصيل في أقل من 60 دقيقة!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg px-6">
              <Truck className="ml-2 h-5 w-5" />
              اطلب توصيل الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-6">
              تتبع طلبك
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="/placeholder.svg"
            alt="خدمة التوصيل"
            className="max-h-[350px] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
