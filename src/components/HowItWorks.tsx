
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "١",
    title: "قم بإنشاء طلبك",
    description: "اختر نوع الخدمة وأدخل تفاصيل الطلب والعنوان المطلوب"
  },
  {
    number: "٢",
    title: "تأكيد الطلب والدفع",
    description: "اختر طريقة الدفع المناسبة لك وقم بتأكيد طلبك"
  },
  {
    number: "٣",
    title: "تتبع مندوبك",
    description: "تتبع موقع المندوب وحالة طلبك في الوقت الفعلي"
  },
  {
    number: "٤",
    title: "استلام الطلب",
    description: "استلم طلبك في الوقت المحدد وبحالة ممتازة"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف يعمل التوصيل؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            خطوات بسيطة للحصول على خدمة التوصيل بسرعة وسهولة
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-primary-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="bg-white p-4 rounded-full border-2 border-primary mb-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
                
                {index !== steps.length - 1 && (
                  <Badge className="lg:hidden mt-6 bg-primary">
                    ↓
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
