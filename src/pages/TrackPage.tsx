
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingSection from "@/components/TrackingSection";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, AlertTriangle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const location = useLocation();

  // استخراج معرف التتبع من عنوان URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      setTrackingId(id);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
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
                <div className="bg-primary text-white p-3 rounded-full">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">طلب رقم {trackingId}</h2>
                  <p className="text-gray-600">تم استلام طلبك وجاري العمل على توصيله</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setTrackingId(null)}>
                تتبع طلب آخر
              </Button>
            </div>
            
            {/* عرض معلومات توصيل مفصلة */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Package className="ml-2 h-5 w-5 text-primary" />
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
                    <AlertTriangle className="ml-2 h-5 w-5 text-primary" />
                    مساعدة
                  </h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      لدي مشكلة في طلبي
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      تغيير موعد التسليم
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      تغيير عنوان التسليم
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      إلغاء الطلب
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* خريطة التتبع */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">تتبع مباشر</h3>
              <iframe
                title="Live Tracking Map"
                className="w-full h-[400px] rounded-lg border border-gray-200"
                style={{ background: "url('/placeholder.svg') center/cover" }}
                src="about:blank"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="container py-10">
              <Card className="max-w-xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-primary/10 inline-flex p-3 rounded-full mb-4">
                      <Search className="h-6 w-6 text-primary" />
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
                      className="w-full py-6 text-lg"
                      onClick={() => trackingId && setTrackingId(trackingId)}
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
