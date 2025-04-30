
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Truck, Package, User, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { toast } from "@/components/ui/sonner";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast: toastLib } = useToast();

  const trackingSteps = [
    {
      title: "تم استلام الطلب",
      time: "10:30 صباحاً",
      completed: true,
      icon: <Package className="h-5 w-5 text-white" />,
    },
    {
      title: "جاري التجهيز",
      time: "11:15 صباحاً",
      completed: true,
      icon: <Clock className="h-5 w-5 text-white" />,
    },
    {
      title: "في الطريق للتوصيل",
      time: "12:30 مساءً",
      completed: true,
      icon: <Truck className="h-5 w-5 text-white" />,
    },
    {
      title: "تم التوصيل",
      time: "متوقع: 01:15 مساءً",
      completed: false,
      icon: <User className="h-5 w-5 text-white" />,
    },
  ];

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast("خطأ", {
        description: "الرجاء إدخال رقم التتبع",
        action: {
          label: "حسناً",
          onClick: () => {},
        },
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate tracking API call
    setTimeout(() => {
      setIsLoading(false);
      setIsTracking(true);
      
      toast("تم العثور على الطلب", {
        description: `تم العثور على طلبك رقم ${trackingNumber}`,
      });
    }, 1500);
  };

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
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? "جاري البحث..." : "تتبع"}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            مثال: <Button 
              variant="link" 
              className="p-0 h-auto text-primary" 
              onClick={() => setTrackingNumber("DLV123456789")}
            >
              DLV123456789
            </Button>
          </div>
        </div>

        {isTracking && (
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">حالة الطلب #{trackingNumber}</h3>
                  <p className="text-gray-600">
                    متوقع التسليم: اليوم 01:15 مساءً
                  </p>
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`/track?id=${trackingNumber}`, '_blank')}
                >
                  <MapPin className="h-4 w-4 ml-2" />
                  تتبع على الخريطة
                </Button>
              </div>

              <div className="space-y-6 mt-8">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="ml-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                      >
                        {step.completed ? (
                          step.icon
                        ) : (
                          step.icon
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
                      {index === 2 && step.completed && (
                        <div className="mt-2 bg-primary-50 p-2 rounded-md flex items-center">
                          <Truck className="h-4 w-4 text-primary ml-2" />
                          <span className="text-sm">السائق في الطريق إليك - 15 دقيقة متبقية</span>
                        </div>
                      )}
                      {index === 3 && !step.completed && (
                        <div className="mt-2 bg-amber-50 p-2 rounded-md flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 ml-2" />
                          <span className="text-sm">في انتظار وصول السائق</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white p-2 rounded-full ml-3">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">أحمد محمد</p>
                      <p className="text-sm text-gray-600">رقم السائق: 12345</p>
                    </div>
                  </div>
                  <Button>تواصل مع السائق</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
