
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const { toast } = useToast();

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال رقم التتبع",
        variant: "destructive",
      });
      return;
    }
    
    setIsTracking(true);
    
    // Simulate tracking - in a real app, this would be an API call
    setTimeout(() => {
      toast({
        title: "تم العثور على الطلب",
        description: `تم العثور على طلبك رقم ${trackingNumber}`,
      });
    }, 1000);
  };

  const trackingSteps = [
    {
      title: "تم استلام الطلب",
      time: "10:30 صباحاً",
      completed: true,
    },
    {
      title: "جاري التجهيز",
      time: "11:15 صباحاً",
      completed: true,
    },
    {
      title: "في الطريق للتوصيل",
      time: "12:30 مساءً",
      completed: true,
    },
    {
      title: "تم التوصيل",
      time: "متوقع: 01:15 مساءً",
      completed: false,
    },
  ];

  return (
    <section className="py-16 bg-white" id="tracking">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تتبع طلبك</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ادخل رقم التتبع الخاص بطلبك لمعرفة حالته والوقت المتوقع للتوصيل
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleTracking} className="flex gap-3">
            <Input
              placeholder="أدخل رقم التتبع"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="text-lg py-6"
            />
            <Button type="submit" size="lg">
              تتبع
            </Button>
          </form>
        </div>

        {isTracking && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold">حالة الطلب #{trackingNumber}</h3>
                <p className="text-gray-600">
                  متوقع التسليم: اليوم 01:15 مساءً
                </p>
              </div>

              <div className="space-y-6">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="ml-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                      >
                        {step.completed ? (
                          <Check className="h-5 w-5 text-white" />
                        ) : (
                          <span className="text-gray-500">{index + 1}</span>
                        )}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div
                          className={`w-1 h-16 mx-auto ${
                            step.completed && trackingSteps[index + 1].completed
                              ? "bg-primary"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      )}
                    </div>
                    <div className="pt-1">
                      <h4
                        className={`font-bold ${
                          step.completed ? "text-primary" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
