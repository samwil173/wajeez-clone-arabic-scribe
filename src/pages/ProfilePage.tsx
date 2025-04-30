
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, CreditCard, Edit, Gift, LogOut, MapPin, Settings, Star, User } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="صورة الملف الشخصي"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button variant="outline" size="icon" className="absolute bottom-0 right-0 rounded-full p-1">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center md:text-right">
                <h1 className="text-3xl font-bold">محمد عبدالله</h1>
                <p className="text-gray-600">عضو منذ أبريل 2025</p>
                
                <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  <span className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    4.9
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-primary">25 طلب</span>
                </div>
              </div>
              
              <div className="ml-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>تعديل الملف الشخصي</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="info" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                المعلومات الشخصية
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                العناوين
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                طرق الدفع
              </TabsTrigger>
              <TabsTrigger value="loyalty" className="flex items-center gap-2">
                <Gift className="h-4 w-4" />
                نقاط الولاء
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-500 block mb-1">الاسم الكامل</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        محمد عبدالله العمري
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-500 block mb-1">رقم الهاتف</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        +966 50 123 4567
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-500 block mb-1">البريد الإلكتروني</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        mohammed@example.com
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-500 block mb-1">تاريخ الميلاد</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        15 مايو 1990
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Badge className="h-5 w-5 text-primary" />
                      <span className="bg-primary-50 text-primary px-3 py-1 rounded-full text-sm">
                        حساب موثق
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline">تغيير كلمة المرور</Button>
                      <Button variant="destructive" className="flex items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        <span>تسجيل الخروج</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>العناوين المحفوظة</CardTitle>
                  <Button>إضافة عنوان جديد</Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "المنزل",
                        address: "شارع الأمير فيصل، حي العليا، الرياض",
                        isDefault: true
                      },
                      {
                        title: "العمل",
                        address: "شارع التحلية، حي السليمانية، الرياض",
                        isDefault: false
                      },
                    ].map((address, index) => (
                      <Card key={index} className={`border-2 ${address.isDefault ? 'border-primary' : ''}`}>
                        <CardContent className="p-4">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-bold text-lg">{address.title}</h3>
                            {address.isDefault && (
                              <span className="bg-primary-50 text-primary px-2 py-0.5 rounded-full text-xs">
                                العنوان الافتراضي
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-4">{address.address}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">تعديل</Button>
                            {!address.isDefault && (
                              <Button variant="outline" size="sm">تعيين كافتراضي</Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>طرق الدفع</CardTitle>
                  <Button>إضافة طريقة دفع</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "مدى",
                        number: "•••• •••• •••• 5678",
                        expiry: "09/28",
                        isDefault: true
                      },
                      {
                        type: "فيزا",
                        number: "•••• •••• •••• 1234",
                        expiry: "12/26",
                        isDefault: false
                      }
                    ].map((card, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-between p-4 border rounded-lg ${
                          card.isDefault ? 'border-primary bg-primary-50/30' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-gray-200 rounded"></div>
                          <div>
                            <p className="font-semibold">{card.type} - {card.number}</p>
                            <p className="text-sm text-gray-500">تنتهي في {card.expiry}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {card.isDefault && (
                            <span className="text-primary text-sm">الافتراضية</span>
                          )}
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="loyalty">
              <Card>
                <CardHeader>
                  <CardTitle>نقاط الولاء</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold mb-1">برنامج المكافآت</h3>
                        <p className="opacity-90">استبدل نقاطك واحصل على خصومات</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">رصيد النقاط</p>
                        <p className="text-3xl font-bold">750</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-4">الخصومات المتاحة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "خصم 10% على الطلب التالي",
                        points: 500,
                        available: true
                      },
                      {
                        title: "توصيل مجاني",
                        points: 750,
                        available: true
                      },
                      {
                        title: "خصم 25% على الطلب التالي",
                        points: 1200,
                        available: false
                      }
                    ].map((reward, index) => (
                      <Card key={index} className={reward.available ? '' : 'opacity-60'}>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{reward.title}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500">{reward.points} نقطة</span>
                            <Button 
                              size="sm" 
                              disabled={!reward.available}
                            >
                              استبدال
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
