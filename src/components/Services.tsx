
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, MapPin, ShoppingCart } from "lucide-react";

const ServicesData = [
  {
    icon: <Truck className="h-10 w-10 text-rose-600" />,
    title: "توصيل سريع",
    description: "خدمة توصيل سريعة في غضون ساعة واحدة لجميع الطلبات داخل المدينة"
  },
  {
    icon: <Package className="h-10 w-10 text-rose-600" />,
    title: "توصيل الطرود",
    description: "خدمة آمنة لتوصيل الطرود والشحنات لأي مكان مع إمكانية التتبع"
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-rose-600" />,
    title: "توصيل المشتريات",
    description: "نوصل مشترياتك من أي متجر أو مول تريده مباشرة إلى منزلك"
  },
  {
    icon: <MapPin className="h-10 w-10 text-rose-600" />,
    title: "تغطية واسعة",
    description: "نغطي جميع المناطق في المدينة وضواحيها دون أي رسوم إضافية"
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نوفر مجموعة متنوعة من خدمات التوصيل لتلبية جميع احتياجاتك اليومية بكفاءة وموثوقية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServicesData.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:border-rose-200">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
