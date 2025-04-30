
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, MessageCircle, Navigation, Star, ThumbsUp, Timer } from "lucide-react";

const DriverExperience = () => {
  const driverFeatures = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "شارة 'السائق المبتسم'",
      description: "احصل على شارة خاصة عند تحقيق معايير الخدمة المتميزة والحفاظ على تقييمات عالية"
    },
    {
      icon: <Navigation className="h-8 w-8 text-primary" />,
      title: "تحسين المسارات الذكي",
      description: "استخدم نظام توجيه المسارات لتوفير الوقت والوقود عبر اختيار أقصر الطرق وتفادي الازدحام المروري"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "محادثة مباشرة مع العملاء",
      description: "تواصل بسهولة مع العملاء لتأكيد تفاصيل التسليم وموقع الاستلام"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "نظام تقييم السائقين",
      description: "تتبع أدائك وتقييماتك من العملاء لتحسين مستوى الخدمة باستمرار"
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: "إدارة الطلبات بسهولة",
      description: "قبول أو رفض الطلبات، وتتبع المواعيد، وإدارة الأولويات بكل سهولة"
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "برنامج المكافآت",
      description: "احصل على مكافآت إضافية عند تحقيق أهداف التوصيل وتقديم خدمة متميزة"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تجربة السائق</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم للسائقين أدوات متطورة وتجربة سلسة لتقديم أفضل خدمة توصيل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {driverFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors duration-200">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="px-8 text-lg"
          >
            انضم كسائق الآن
          </Button>
          <p className="mt-3 text-gray-500">
            استفد من جدول عمل مرن ودخل إضافي
          </p>
        </div>
      </div>
    </section>
  );
};

export default DriverExperience;
