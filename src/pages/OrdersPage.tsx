
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Package, Search, ShoppingBag, Truck } from "lucide-react";

const OrdersPage = () => {
  const activeOrders = [
    {
      id: "ORD-1234",
      store: "مطعم الشرق",
      items: "3 عناصر",
      price: "120 ر.س",
      status: "قيد التوصيل",
      time: "15-20 دقيقة",
      icon: <Truck className="h-5 w-5 text-primary" />,
    },
    {
      id: "ORD-5678",
      store: "سوبرماركت الأمانة",
      items: "12 عنصر",
      price: "250 ر.س",
      status: "تم استلام الطلب",
      time: "25-30 دقيقة",
      icon: <Package className="h-5 w-5 text-amber-500" />,
    }
  ];

  const pastOrders = [
    {
      id: "ORD-9012",
      store: "مطعم البيت",
      items: "2 عناصر",
      price: "85 ر.س",
      date: "2025-04-28",
      status: "تم التوصيل",
      icon: <ShoppingBag className="h-5 w-5 text-green-500" />,
    },
    {
      id: "ORD-3456",
      store: "صيدلية الصحة",
      items: "1 عنصر",
      price: "45 ر.س",
      date: "2025-04-25",
      status: "تم التوصيل",
      icon: <ShoppingBag className="h-5 w-5 text-green-500" />,
    },
    {
      id: "ORD-7890",
      store: "متجر الإلكترونيات",
      items: "1 عنصر",
      price: "1200 ر.س",
      date: "2025-04-20",
      status: "تم التوصيل",
      icon: <ShoppingBag className="h-5 w-5 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">الطلبات</h1>
            <p className="text-lg text-gray-700">
              تابع طلباتك النشطة والسابقة وحالة كل طلب
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="البحث في الطلبات..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full md:w-80"
              />
            </div>
            <Button>
              طلب توصيل جديد
            </Button>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="active" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                طلبات نشطة
              </TabsTrigger>
              <TabsTrigger value="past" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                طلبات سابقة
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeOrders.map((order) => (
                  <Card key={order.id} className="border-2 hover:border-primary transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle className="text-xl">{order.store}</CardTitle>
                        <CardDescription>رقم الطلب: {order.id}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 bg-primary-50 text-primary px-3 py-1 rounded-full">
                        {order.icon}
                        <span className="font-medium">{order.status}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500">العناصر:</span>
                        <span className="font-medium">{order.items}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500">السعر الإجمالي:</span>
                        <span className="font-medium">{order.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">وقت التوصيل المتوقع:</span>
                        <span className="font-medium">{order.time}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">تتبع الطلب</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pastOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>{order.store}</CardTitle>
                        <CardDescription>رقم الطلب: {order.id}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        {order.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500">العناصر:</span>
                        <span>{order.items}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500">السعر الإجمالي:</span>
                        <span>{order.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">تاريخ التوصيل:</span>
                        <span>{order.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">تفاصيل الطلب</Button>
                      <Button>إعادة الطلب</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
