
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MultiLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const { toast } = useToast();
  
  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ur", name: "اردو", flag: "🇵🇰" },
  ];

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    toast({
      title: "تم تغيير اللغة",
      description: `تم تحديث لغة التطبيق إلى ${languages.find(lang => lang.code === code)?.name}`,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">دعم متعدد اللغات</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استخدم التطبيق باللغة التي تناسبك مع دعم كامل لعدة لغات
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-50 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">اختر لغتك المفضلة</h3>
                  <p className="text-gray-600">
                    يدعم التطبيق العديد من اللغات لتجربة استخدام مريحة
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {languages.map((language) => (
                  <Button
                    key={language.code}
                    variant={selectedLanguage === language.code ? "default" : "outline"}
                    className="justify-start h-auto py-3"
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    <div className="flex items-center w-full">
                      <span className="text-xl mr-3">{language.flag}</span>
                      <span>{language.name}</span>
                      {selectedLanguage === language.code && (
                        <Check className="h-4 w-4 mr-auto" />
                      )}
                    </div>
                  </Button>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  مميزات دعم اللغات:
                </h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <Check className="h-4 w-4 text-primary mt-1 ml-2" />
                    <span>واجهة مستخدم كاملة باللغة المختارة</span>
                  </li>
                  <li className="flex">
                    <Check className="h-4 w-4 text-primary mt-1 ml-2" />
                    <span>دعم للكتابة من اليمين لليسار للغات التي تتطلب ذلك</span>
                  </li>
                  <li className="flex">
                    <Check className="h-4 w-4 text-primary mt-1 ml-2" />
                    <span>ترجمة آلية للمحادثات مع السائقين والدعم</span>
                  </li>
                  <li className="flex">
                    <Check className="h-4 w-4 text-primary mt-1 ml-2" />
                    <span>تحديث آلي للغة حسب إعدادات جهازك</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MultiLanguage;
