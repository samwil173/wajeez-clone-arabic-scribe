
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Navigation, Map, Phone } from "lucide-react";

const MapTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(30);
  
  // تحريك الشاحنة على المسار بشكل مستمر لعرض التتبع المباشر
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev >= 100) return 10;
        return prev + 0.5;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تتبع مباشر للطلبات</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تابع شحنتك على الخريطة بشكل مباشر ومعرفة الوقت المتبقي للوصول
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                {/* هنا ستكون خريطة حقيقية مع Mapbox/Google Maps في التطبيق الفعلي */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/35.5,33.8,13/600x400?access_token=pk.placeholder')] bg-cover">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* مسار التوصيل */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 mx-10 mb-16 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${currentPosition}%` }}></div>
                  
                  {/* نقطة الانطلاق */}
                  <div className="absolute bottom-0 left-0 h-6 w-6 -mb-2 -ml-3 bg-secondary rounded-full border-4 border-white"></div>
                  
                  {/* نقطة الوصول */}
                  <div className="absolute bottom-0 right-0 h-6 w-6 -mb-2 -mr-3 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Navigation className="h-3 w-3 text-white" />
                  </div>
                  
                  {/* شاحنة التوصيل المتحركة */}
                  <div className="absolute bottom-0 h-8 w-8 -mb-3 bg-primary rounded-full border-4 border-white flex items-center justify-center"
                      style={{ left: `calc(${currentPosition}% - 18px)` }}>
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* أزرار التحكم بالخريطة */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
                    <Map className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
                    <Navigation className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">توصيل طلب #DLV123456789</h3>
                    <p className="text-gray-600">المسافة المتبقية: 3.2 كم • وقت الوصول: 15 دقيقة</p>
                  </div>
                  <Button className="whitespace-nowrap">
                    <Phone className="ml-2 h-4 w-4" />
                    اتصل بالسائق
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">تفاصيل التوصيل</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-gray-600 mb-1">السائق</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white p-2 rounded-full">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">أحمد محمد</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">سائق مبتسم</span>
                          <span className="text-amber-500 text-sm font-medium mr-2">★ 4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="font-medium text-gray-600 mb-2">محطات التوصيل</p>
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="ml-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-white text-xs">1</span>
                          </div>
                          <div className="h-full w-0.5 bg-gray-200 mx-auto mt-1"></div>
                        </div>
                        <div>
                          <p className="font-bold">المستودع الرئيسي</p>
                          <p className="text-sm text-gray-600">تم استلام الطلب: 10:30 صباحاً</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="ml-3">
                          <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs">2</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold">العنوان</p>
                          <p className="text-sm text-gray-600">شارع الرياض، برج السلام، الطابق 3</p>
                          <p className="text-sm text-gray-500">وقت الوصول المتوقع: 01:15 مساءً</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <Button variant="outline" className="w-full">تغيير وجهة التوصيل</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTracking;
