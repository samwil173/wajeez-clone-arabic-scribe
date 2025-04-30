
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MapTracking = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [eta, setEta] = useState("15-20");
  const [distance, setDistance] = useState("2.5");
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would initialize the map library
    const mockMapInitialization = () => {
      if (!mapRef.current) return;
      
      // Add a background to simulate map
      mapRef.current.style.background = "url('/placeholder.svg')";
      mapRef.current.style.backgroundSize = "cover";
      mapRef.current.style.backgroundPosition = "center";
    };

    mockMapInitialization();
    
    // Mock ETA updates
    const etaInterval = setInterval(() => {
      setEta(prev => {
        const [min, max] = prev.split("-").map(Number);
        return min > 1 ? `${min-1}-${max-1}` : "1-2";
      });
      
      setDistance(prev => {
        const dist = parseFloat(prev);
        return (dist > 0.3 ? (dist - 0.1).toFixed(1) : "0.2");
      });
    }, 5000);
    
    return () => clearInterval(etaInterval);
  }, []);

  const handleContactDriver = () => {
    toast({
      title: "جاري الاتصال بالسائق",
      description: "سيتم توصيلك بالسائق قريبًا",
    });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تتبع طلبك مباشرة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            شاهد موقع السائق على الخريطة والوقت المتبقي للتوصيل
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]" ref={mapRef}>
              {/* Map will be rendered here by the actual map library */}
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                خريطة التتبع المباشر
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">معلومات التوصيل</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      قيد التوصيل
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500">الوقت المتبقي للتوصيل</p>
                      <p className="font-bold text-lg">{eta} دقيقة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500">المسافة المتبقية</p>
                      <p className="font-bold text-lg">{distance} كم</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src="/placeholder.svg" 
                        alt="سائق التوصيل" 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                      <div>
                        <p className="font-semibold">أحمد محمد</p>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★★★★★</span>
                          <span className="text-xs text-gray-500 mr-1">4.9</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="flex items-center justify-center gap-2"
                        onClick={handleContactDriver}
                      >
                        <Phone className="h-4 w-4" />
                        <span>اتصال</span>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2"
                        onClick={handleContactDriver}
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>محادثة</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapTracking;
