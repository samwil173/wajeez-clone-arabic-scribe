
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
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/services" },
    { name: "تتبع الطلب", path: "/track" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="lucide lucide-truck"
              viewBox="0 0 24 24"
            >
              <path d="M10 17h4V5H2v12h3M20 17h2v-6l-4-6h-3v12h3M14 9h4M5 17a2 2 0 104 0 2 2 0 00-4 0zM17 17a2 2 0 104 0 2 2 0 00-4 0z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-primary">توصيل</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">تسجيل الدخول</Button>
          <Button>طلب توصيل</Button>
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
              <SheetTitle className="text-right">القائمة</SheetTitle>
              <SheetDescription className="text-right">
                اختر وجهتك من القائمة
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-right py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2" />
              <Button variant="outline" className="w-full">تسجيل الدخول</Button>
              <Button className="w-full">طلب توصيل</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
