
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, Gift, Wallet } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PaymentOptions = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod");
  const { toast } = useToast();

  const handlePaymentSubmit = () => {
    toast({
      title: "تم اختيار طريقة الدفع",
      description: "سيتم تطبيق طريقة الدفع المختارة على طلبك",
    });
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">طرق الدفع</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر طريقة الدفع المناسبة لك لإتمام طلبك بسهولة وأمان
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="cod" onValueChange={setSelectedPaymentMethod} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="cod" className="flex flex-col items-center py-3">
                <DollarSign className="h-6 w-6 mb-2" />
                <span>الدفع عند الاستلام</span>
              </TabsTrigger>
              <TabsTrigger value="card" className="flex flex-col items-center py-3">
                <CreditCard className="h-6 w-6 mb-2" />
                <span>بطاقة الائتمان</span>
              </TabsTrigger>
              <TabsTrigger value="wallet" className="flex flex-col items-center py-3">
                <Wallet className="h-6 w-6 mb-2" />
                <span>المحفظة الإلكترونية</span>
              </TabsTrigger>
              <TabsTrigger value="coupon" className="flex flex-col items-center py-3">
                <Gift className="h-6 w-6 mb-2" />
                <span>كوبون خصم</span>
              </TabsTrigger>
            </TabsList>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <TabsContent value="cod">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">الدفع عند الاستلام</h3>
                        <p className="text-gray-500">
                          ادفع قيمة طلبك نقداً عند استلام الطلب
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">تعليمات الدفع النقدي:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>تأكد من توفر المبلغ المطلوب عند الاستلام</li>
                        <li>سيقوم السائق بتوفير الباقي إذا لزم الأمر</li>
                        <li>ستحصل على إيصال مطبوع عند الدفع</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="card">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <CreditCard className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">بطاقة الائتمان/الخصم</h3>
                        <p className="text-gray-500">
                          ادفع بأمان باستخدام بطاقات الائتمان أو الخصم
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      {['visa', 'mastercard', 'amex', 'discover'].map((card) => (
                        <div key={card} className="bg-gray-50 p-3 rounded-lg flex items-center justify-center">
                          <img src={`/placeholder.svg`} alt={card} className="h-8" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* These would be actual form fields in a real app */}
                      <div className="bg-gray-50 p-3 rounded-lg h-12"></div>
                      <div className="bg-gray-50 p-3 rounded-lg h-12"></div>
                      <div className="bg-gray-50 p-3 rounded-lg h-12"></div>
                      <div className="bg-gray-50 p-3 rounded-lg h-12"></div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="wallet">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <Wallet className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">المحفظة الإلكترونية</h3>
                        <p className="text-gray-500">
                          استخدم محفظتك الإلكترونية للدفع بسرعة وسهولة
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {['Apple Pay', 'Google Pay', 'PayPal'].map((wallet) => (
                        <div key={wallet} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-primary cursor-pointer transition-colors">
                          {wallet}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="coupon">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <Gift className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">كوبون خصم</h3>
                        <p className="text-gray-500">
                          استخدم كوبون الخصم للحصول على سعر مخفض
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <input 
                        type="text" 
                        className="flex-1 p-3 border border-gray-200 rounded-lg" 
                        placeholder="أدخل رمز الكوبون"
                      />
                      <Button>تطبيق</Button>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-orange-800">العروض النشطة:</h4>
                        <span className="text-orange-600">3 عروض</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-100">
                          <span className="font-semibold">WELCOME20</span>
                          <span className="text-sm text-gray-500">خصم 20%</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-100">
                          <span className="font-semibold">FREESHIP</span>
                          <span className="text-sm text-gray-500">توصيل مجاني</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handlePaymentSubmit}>تأكيد طريقة الدفع</Button>
                </div>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
