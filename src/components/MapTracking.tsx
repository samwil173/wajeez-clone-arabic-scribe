
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Navigation, Map, Phone } from "lucide-react";
import { toast } from "@/components/ui/sonner";

declare global {
  interface Window {
    google: any;
  }
}

const MapTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(30);
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMap = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [driverInfo, setDriverInfo] = useState({
    name: "أحمد محمد",
    rating: 4.9,
    id: "12345",
    phone: "+966-50-123-4567"
  });
  
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

  // تهيئة خريطة جوجل
  useEffect(() => {
    if (window.google && mapRef.current && !googleMap.current) {
      // مركز الخريطة (الرياض، السعودية)
      const riyadhCenter = { lat: 24.7136, lng: 46.6753 };
      const destinationPoint = { lat: 24.7220, lng: 46.6900 };
      
      // إنشاء الخريطة
      googleMap.current = new window.google.maps.Map(mapRef.current, {
        center: riyadhCenter,
        zoom: 13,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
      });
      
      // إضافة علامة للمستخدم (نقطة الوصول)
      new window.google.maps.Marker({
        position: destinationPoint,
        map: googleMap.current,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#22c55e",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
        title: "موقع التسليم",
      });
      
      // إضافة علامة متحركة للسائق
      markerRef.current = new window.google.maps.Marker({
        position: riyadhCenter,
        map: googleMap.current,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/truck.png",
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        },
        title: "سائق التوصيل",
      });
      
      // إنشاء خط المسار بين نقطة البداية ونقطة الوصول
      const deliveryPath = new window.google.maps.Polyline({
        path: [riyadhCenter, destinationPoint],
        geodesic: true,
        strokeColor: "#3b82f6",
        strokeOpacity: 0.8,
        strokeWeight: 4,
      });
      
      deliveryPath.setMap(googleMap.current);
      
      // تحريك علامة السائق على طول المسار
      const animateMarker = () => {
        const currentPos = currentPosition / 100;
        const newPosition = window.google.maps.geometry.spherical.interpolate(
          new window.google.maps.LatLng(riyadhCenter),
          new window.google.maps.LatLng(destinationPoint),
          currentPos
        );
        
        if (markerRef.current) {
          markerRef.current.setPosition(newPosition);
        }
      };
      
      // تحديث موقع السائق كل ثانية
      const positionInterval = setInterval(animateMarker, 1000);
      
      return () => {
        clearInterval(positionInterval);
      };
    }
  }, [currentPosition]);

  const callDriver = () => {
    toast("جاري الاتصال", {
      description: `الاتصال بالسائق: ${driverInfo.name} - ${driverInfo.phone}`,
      action: {
        label: "إلغاء",
        onClick: () => toast("تم إلغاء الاتصال"),
      },
    });
  };

  const handleMapNavigation = () => {
    // فتح موقع التسليم في خرائط جوجل
    window.open("https://maps.google.com/?q=24.7220,46.6900", "_blank");
  };

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
                {/* خريطة جوجل */}
                <div ref={mapRef} className="absolute inset-0 bg-gray-100"></div>
                
                {/* مسار التوصيل (للعرض بدون خرائط جوجل) */}
                {!window.google && (
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 mx-10 mb-16 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-600 rounded-full" style={{ width: `${currentPosition}%` }}></div>
                    
                    {/* نقطة الانطلاق */}
                    <div className="absolute bottom-0 left-0 h-6 w-6 -mb-2 -ml-3 bg-secondary rounded-full border-4 border-white"></div>
                    
                    {/* نقطة الوصول */}
                    <div className="absolute bottom-0 right-0 h-6 w-6 -mb-2 -mr-3 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <Navigation className="h-3 w-3 text-white" />
                    </div>
                    
                    {/* شاحنة التوصيل المتحركة */}
                    <div className="absolute bottom-0 h-8 w-8 -mb-3 bg-rose-600 rounded-full border-4 border-white flex items-center justify-center"
                        style={{ left: `calc(${currentPosition}% - 18px)` }}>
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
                
                {/* أزرار التحكم بالخريطة */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-10 w-10 rounded-full shadow-md"
                    onClick={handleMapNavigation}
                  >
                    <Map className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-10 w-10 rounded-full shadow-md"
                    onClick={() => toast("تم تحديد موقعك الحالي")}
                  >
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
                  <Button 
                    className="whitespace-nowrap bg-rose-600 hover:bg-rose-700"
                    onClick={callDriver}
                  >
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
                      <div className="bg-rose-600 text-white p-2 rounded-full">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">{driverInfo.name}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">سائق مبتسم</span>
                          <span className="text-amber-500 text-sm font-medium mr-2">★ {driverInfo.rating}</span>
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
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => toast("سيتم الاتصال بك قريباً لتغيير وجهة التوصيل")}
                    >
                      تغيير وجهة التوصيل
                    </Button>
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
