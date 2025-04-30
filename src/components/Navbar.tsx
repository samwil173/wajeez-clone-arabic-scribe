
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Menu, 
  Truck, 
  Home, 
  ShoppingBag, 
  User, 
  Settings, 
  Globe, 
  CreditCard,
  Heart
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "الرئيسية", path: "/", icon: <Home className="h-5 w-5" /> },
    { name: "الطلبات", path: "/orders", icon: <ShoppingBag className="h-5 w-5" /> },
    { name: "الملف الشخصي", path: "/profile", icon: <User className="h-5 w-5" /> },
    { name: "الإعدادات", path: "/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-rose-500 p-2 rounded-md text-white">
            <Heart className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-rose-600">حنيني</span>
            <span className="text-xs text-gray-500">توصيل بسرعة، توصيل بابتسامة!</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => alert("تم تفعيل تغيير اللغة")}
          >
            <Globe className="h-4 w-4" />
            <span>العربية</span>
          </Button>
          <Button 
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700"
            onClick={() => window.location.href = "/track"}
          >
            <Truck className="h-4 w-4" />
            <span>طلب توصيل</span>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-right flex items-center justify-end gap-2">
                <span className="text-rose-600">حنيني</span>
                <Heart className="h-5 w-5 text-rose-600" />
              </SheetTitle>
              <SheetDescription className="text-right">
                توصيل بسرعة، توصيل بابتسامة!
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-right py-2 text-gray-700 hover:text-rose-600 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <hr className="my-2" />
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => alert("تم تفعيل تغيير اللغة")}
              >
                <Globe className="h-4 w-4" />
                <span>العربية</span>
              </Button>
              <Button 
                className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "/track";
                }}
              >
                <Truck className="h-4 w-4" />
                <span>طلب توصيل</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
