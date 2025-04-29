
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "التوصيل المحلي",
      description: "للتوصيل داخل المدينة",
      price: "200",
      features: [
        "توصيل في أقل من ساعة",
        "تغطية لجميع أحياء المدينة",
        "تتبع الطلب في الوقت الفعلي",
        "دعم العملاء على مدار الساعة",
      ],
      isPopular: false,
    },
    {
      name: "توصيل الشحنات",
      description: "للطرود والشحنات الكبيرة",
      price: "350",
      features: [
        "توصيل في نفس اليوم",
        "وزن يصل حتى 25 كجم",
        "تأمين على الشحنة",
        "خدمة التغليف الإضافي",
        "دعم العملاء على مدار الساعة",
      ],
      isPopular: true,
    },
    {
      name: "التوصيل السريع",
      description: "للطلبات المستعجلة",
      price: "450",
      features: [
        "توصيل في أقل من 30 دقيقة",
        "أولوية في الطلب",
        "مندوب مخصص",
        "تتبع الطلب في الوقت الفعلي",
        "دعم العملاء على مدار الساعة",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أسعارنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            أسعار مناسبة لجميع خدمات التوصيل مع خيارات متعددة تناسب احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.isPopular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -left-12 top-7 bg-primary text-primary-foreground px-10 py-1 rotate-[-45deg]">
                  الأكثر طلبًا
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 mr-1">دج</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="text-primary h-5 w-5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.isPopular ? "" : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  اختيار الخطة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
