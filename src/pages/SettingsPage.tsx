
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
import { Bell, Globe, Lock, Moon, Smartphone, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-l from-primary-50 to-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">الإعدادات</h1>
            <p className="text-lg text-gray-700">
              تخصيص إعدادات التطبيق وضبط التفضيلات الخاصة بك
            </p>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                الحساب
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                الإشعارات
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Moon className="h-4 w-4" />
                المظهر
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                الخصوصية والأمان
              </TabsTrigger>
              <TabsTrigger value="language" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                اللغة
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الحساب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">الاسم الكامل</label>
                      <input 
                        type="text" 
                        defaultValue="محمد عبدالله العمري" 
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">رقم الهاتف</label>
                      <input 
                        type="tel" 
                        defaultValue="+966 50 123 4567" 
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        defaultValue="mohammed@example.com" 
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">تاريخ الميلاد</label>
                      <input 
                        type="date" 
                        defaultValue="1990-05-15" 
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-bold mb-4">كلمة المرور</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">كلمة المرور الحالية</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-200 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">كلمة المرور الجديدة</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-200 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">تأكيد كلمة المرور</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>حفظ التغييرات</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الإشعارات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">إشعارات الطلبات</h3>
                      <div className="space-y-4">
                        {[
                          { title: "تأكيد الطلب", description: "إشعار عند تأكيد طلبك" },
                          { title: "تحديثات حالة الطلب", description: "إشعارات لمتابعة حالة طلبك" },
                          { title: "وصول السائق", description: "إشعار عندما يقترب السائق من موقعك" },
                          { title: "الدفع والفواتير", description: "إشعارات متعلقة بعمليات الدفع" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                            <Switch defaultChecked={true} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">إشعارات التسويق</h3>
                      <div className="space-y-4">
                        {[
                          { title: "العروض والخصومات", description: "إشعارات بالعروض والتخفيضات الجديدة" },
                          { title: "تحديثات التطبيق", description: "إشعارات عند توفر تحديثات جديدة" },
                          { title: "استطلاعات الرأي", description: "استطلاعات للحصول على رأيك في الخدمة" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                            <Switch defaultChecked={index === 0} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">وسائل الإشعارات</h3>
                      <div className="space-y-4">
                        {[
                          { title: "إشعارات التطبيق", icon: <Smartphone className="h-5 w-5" /> },
                          { title: "البريد الإلكتروني", icon: <Globe className="h-5 w-5" /> },
                          { title: "الرسائل النصية", icon: <Bell className="h-5 w-5" /> },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-primary-50 p-2 rounded-full">
                                {item.icon}
                              </div>
                              <p className="font-medium">{item.title}</p>
                            </div>
                            <Switch defaultChecked={index < 2} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>حفظ التغييرات</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات المظهر</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">وضع العرض</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { title: "فاتح", value: "light" },
                          { title: "داكن", value: "dark" },
                          { title: "تلقائي", value: "system" },
                        ].map((theme) => (
                          <div 
                            key={theme.value}
                            className={`border-2 border-primary p-4 rounded-lg text-center cursor-pointer ${
                              theme.value === "light" ? 'bg-primary-50' : ''
                            }`}
                          >
                            <div className="h-24 mb-2 rounded bg-gray-200"></div>
                            <p className="font-medium">{theme.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">إعدادات العرض</h3>
                      <div className="space-y-4">
                        {[
                          { title: "تكبير النص", description: "تكبير حجم النصوص في التطبيق" },
                          { title: "حركات الانتقال", description: "تفعيل التأثيرات المتحركة" },
                          { title: "الوضع المُبسط", description: "تبسيط واجهة المستخدم" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                            <Switch defaultChecked={index === 1} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>حفظ التغييرات</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>الخصوصية والأمان</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">إعدادات الخصوصية</h3>
                      <div className="space-y-4">
                        {[
                          { title: "مشاركة الموقع", description: "السماح للتطبيق بالوصول لموقعك الجغرافي" },
                          { title: "التحقق بخطوتين", description: "تفعيل التحقق بخطوتين لزيادة أمان حسابك" },
                          { title: "حفظ معلومات الدفع", description: "تخزين بيانات بطاقات الدفع" },
                          { title: "حفظ بيانات الدخول", description: "البقاء متصلاً في هذا الجهاز" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                            <Switch defaultChecked={index % 2 === 0} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">خيارات الحماية</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Lock className="mr-2 h-4 w-4" />
                          تغيير كلمة المرور
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Smartphone className="mr-2 h-4 w-4" />
                          إدارة الأجهزة المتصلة
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                          تعطيل الحساب
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>حفظ التغييرات</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="language">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات اللغة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">لغة التطبيق</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { code: "ar", name: "العربية", flag: "🇸🇦" },
                          { code: "en", name: "English", flag: "🇺🇸" },
                          { code: "fr", name: "Français", flag: "🇫🇷" },
                          { code: "es", name: "Español", flag: "🇪🇸" },
                          { code: "tr", name: "Türkçe", flag: "🇹🇷" },
                          { code: "ur", name: "اردو", flag: "🇵🇰" },
                        ].map((language) => (
                          <div
                            key={language.code}
                            className={`p-4 border rounded-lg flex items-center gap-3 cursor-pointer ${
                              language.code === "ar" ? "border-primary bg-primary-50" : ""
                            }`}
                          >
                            <span className="text-2xl">{language.flag}</span>
                            <span className="font-medium">{language.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">إعدادات إضافية</h3>
                      <div className="space-y-4">
                        {[
                          { title: "التنسيق التلقائي للنص", description: "تعديل اتجاه النص حسب اللغة" },
                          { title: "الترجمة التلقائية", description: "ترجمة المحادثات مع السائقين" },
                          { title: "وحدات القياس", description: "استخدم النظام المتري (كم، كجم)" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                            <Switch defaultChecked={true} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>حفظ التغييرات</Button>
                    </div>
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

export default SettingsPage;
