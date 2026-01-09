import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "TRANG CHỦ", href: "#hero" },
  { 
    name: "GIỚI THIỆU", 
    href: "#gioi-thieu",
    submenu: [
      { name: "Về chúng tôi", href: "#ve-chung-toi" },
      { name: "Tầm nhìn & Sứ mệnh", href: "#tam-nhin" },
    ]
  },
  { 
    name: "DỊCH VỤ", 
    href: "#dich-vu",
    submenu: [
      { name: "Cầu thang đá", href: "#cau-thang" },
      { name: "Thang máy đá", href: "#thang-may" },
      { name: "Ốp lát đá", href: "#op-lat" },
    ]
  },
  { 
    name: "SẢN PHẨM", 
    href: "#san-pham",
    submenu: [
      { name: "Đá Granite", href: "#granite" },
      { name: "Đá Marble", href: "#marble" },
      { name: "Đá Nhân tạo", href: "#nhan-tao" },
    ]
  },
  { 
    name: "CÔNG TRÌNH", 
    href: "#cong-trinh",
    submenu: [
      { name: "Biệt thự", href: "#biet-thu" },
      { name: "Khách sạn", href: "#khach-san" },
      { name: "Chung cư", href: "#chung-cu" },
    ]
  },
  { name: "TIN TỨC", href: "#tin-tuc" },
  { name: "LIÊN HỆ", href: "#lien-he" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-md" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center z-10">
            <img 
              src="/src/assets/logo.png" 
              alt="Golden Archi Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-navy/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/20 overflow-hidden"
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-white/80 hover:text-gold hover:bg-gold/10 transition-all duration-200 text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side - Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/80 hover:text-gold transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block py-3 text-white/90 hover:text-gold transition-colors duration-300 text-sm font-medium border-b border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
