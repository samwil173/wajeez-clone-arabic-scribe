
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the form data to a backend
    toast({
      title: "تم إرسال رسالتك",
      description: "سنتواصل معك قريباً!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "اتصل بنا",
      details: ["يمكنك الاتصال بنا عبر نموذج الاتصال"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "راسلنا",
      details: ["info@tawseel.dz"],
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اتصل بنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">
                        الاسم الكامل
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">
                        البريد الإلكتروني
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="أدخل رقم هاتفك"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
