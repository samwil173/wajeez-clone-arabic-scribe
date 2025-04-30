
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingSection from "@/components/TrackingSection";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, AlertTriangle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const location = useLocation();

  // استخراج معرف التتبع من عنوان URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      setTrackingId(id);
    }
  }, [location]);

  // تهيئة خريطة جوجل عند عرض التفاصيل
  useEffect(() => {
    if (trackingId && window.google && !mapLoaded) {
      try {
        // مركز الخريطة (الرياض، السعودية)
        const riyadhCenter = { lat: 24.7136, lng: 46.6753 };
        const destinationPoint = { lat: 24.7220, lng: 46.6900 };
        
        // العثور على عنصر iframe وإنشاء الخريطة
        const mapElement = document.getElementById("tracking-map");
        
        if (mapElement) {
          const map = new window.google.maps.Map(mapElement, {
            center: riyadhCenter,
            zoom: 13,
            mapTypeControl: false,
          });
          
          // إضافة علامة للمستخدم (نقطة الوصول)
          new window.google.maps.Marker({
            position: destinationPoint,
            map: map,
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
          new window.google.maps.Marker({
            position: riyadhCenter,
            map: map,
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/truck.png",
              scaledSize: new window.google.maps.Size(40, 40),
            },
            title: "سائق التوصيل",
          });
          
          // إنشاء خط المسار بين نقطة البداية ونقطة الوصول
          const deliveryPath = new window.google.maps.Polyline({
            path: [riyadhCenter, destinationPoint],
            geodesic: true,
            strokeColor: "#e11d48",
            strokeOpacity: 0.8,
            strokeWeight: 4,
          });
          
          deliveryPath.setMap(map);
          
          setMapLoaded(true);
        }
      } catch (error) {
        console.error("خطأ في تحميل الخريطة:", error);
      }
    }
  }, [trackingId, mapLoaded]);

  const handleTrackSubmit = () => {
    if (!trackingId) {
      toast("خطأ", {
        description: "الرجاء إدخال رقم التتبع",
      });
      return;
    }
    
    // إعادة تحميل الصفحة مع معرف التتبع الجديد
    window.location.href = `/track?id=${trackingId}`;
  };

  const handleSupportAction = (action: string) => {
    toast("طلب المساعدة", {
      description: `تم استلام طلبك: ${action}. سيتم التواصل معك قريباً.`,
      action: {
        label: "حسناً",
        onClick: () => {},
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-rose-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">تتبع طلبك</h1>
            <p className="text-lg text-gray-700">
              اعرف حالة طلبك والوقت المتوقع للتسليم في أي وقت
            </p>
          </div>
        </div>
        
        {trackingId ? (
          <div className="container py-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-rose-600 text-white p-3 rounded-full">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">طلب رقم {trackingId}</h2>
                  <p className="text-gray-600">تم استلام طلبك وجاري العمل على توصيله</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setTrackingId(null)}
              >
                تتبع طلب آخر
              </Button>
            </div>
            
            {/* عرض معلومات توصيل مفصلة */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Package className="ml-2 h-5 w-5 text-rose-600" />
                    تفاصيل الطلب
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">موعد التوصيل المتوقع</p>
                          <p className="font-bold">اليوم، 01:15 مساءً</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">تاريخ الطلب</p>
                          <p className="font-bold">17 ابريل، 2025</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">العناصر</p>
                          <p className="font-bold">3 منتجات</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">طريقة الدفع</p>
                          <p className="font-bold">الدفع عند الاستلام</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-2">عنوان التوصيل</p>
                      <p className="font-bold">شارع الرياض، برج السلام، الطابق 3</p>
                      <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                      
                      <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-2">تفاصيل الاتصال</p>
                        <p className="font-bold">محمد عبدالله</p>
                        <p className="text-gray-600">+966 50 123 4567</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <AlertTriangle className="ml-2 h-5 w-5 text-rose-600" />
                    مساعدة
                  </h3>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleSupportAction("لدي مشكلة في طلبي")}
                    >
                      لدي مشكلة في طلبي
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleSupportAction("تغيير موعد التسليم")}
                    >
                      تغيير موعد التسليم
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleSupportAction("تغيير عنوان التسليم")}
                    >
                      تغيير عنوان التسليم
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleSupportAction("إلغاء الطلب")}
                    >
                      إلغاء الطلب
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* خريطة التتبع */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">تتبع مباشر</h3>
              <div
                id="tracking-map"
                className="w-full h-[400px] rounded-lg border border-gray-200"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="container py-10">
              <Card className="max-w-xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-rose-600/10 inline-flex p-3 rounded-full mb-4">
                      <Search className="h-6 w-6 text-rose-600" />
                    </div>
                    <h2 className="text-2xl font-bold">أدخل رقم التتبع</h2>
                    <p className="text-gray-600 mt-2">
                      أدخل رقم التتبع الذي تلقيته في رسالة التأكيد
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Input 
                        placeholder="مثال: DLV123456789"
                        className="text-lg h-12" 
                        onChange={(e) => setTrackingId(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      className="w-full py-6 text-lg bg-rose-600 hover:bg-rose-700"
                      onClick={handleTrackSubmit}
                      disabled={!trackingId}
                    >
                      تتبع الطلب
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <TrackingSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TrackPage;
