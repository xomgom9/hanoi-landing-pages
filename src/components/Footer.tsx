import { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Trang chủ", href: "#hero" },
  { name: "Giới thiệu", href: "#gioi-thieu" },
  { name: "Dịch vụ", href: "#dich-vu" },
  { name: "Sản phẩm", href: "#san-pham" },
  { name: "Công trình", href: "#cong-trinh" },
  { name: "Tin tức", href: "#tin-tuc" },
  { name: "Liên hệ", href: "#lien-he" },
  { name: "Chính sách", href: "#chinh-sach" },
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", email: "", address: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="bg-[#f5f0e6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo & Slogan */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                  <span className="text-navy font-bold text-2xl" style={{ fontFamily: "'Times New Roman', serif" }}>
                    KM
                  </span>
                </div>
                <div>
                  <span className="text-navy font-bold text-xl tracking-wide" style={{ fontFamily: "'Times New Roman', serif" }}>
                    KHANG MINH
                  </span>
                  <span className="block text-navy/60 text-xs tracking-widest">
                    STONE
                  </span>
                </div>
              </div>
              <p className="text-navy/70 italic text-lg" style={{ fontFamily: "'Times New Roman', serif" }}>
                "Khơi nguồn giác quan, đánh thức cảm xúc"
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Kết nối với chúng tôi
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-start gap-3 text-navy/80 hover:text-gold transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
                </a>
                <a href="tel:0901234567" className="flex items-center gap-3 text-navy/80 hover:text-gold transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">090 123 4567</span>
                </a>
                <a href="mailto:info@khangminhstone.com" className="flex items-center gap-3 text-navy/80 hover:text-gold transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">info@khangminhstone.com</span>
                </a>
                <a href="https://khangminhstone.com" className="flex items-center gap-3 text-navy/80 hover:text-gold transition-colors duration-300">
                  <Globe className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">www.khangminhstone.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Truy cập nhanh
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-navy/70 hover:text-gold transition-colors duration-300 text-sm py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-navy font-bold text-xl mb-6 flex items-center gap-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <span className="w-8 h-0.5 bg-gold"></span>
              ĐĂNG KÝ TƯ VẤN & BÁO GIÁ
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tên của quý khách"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gold/50 focus:border-gold outline-none text-navy placeholder:text-navy/50 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại liên hệ"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gold/50 focus:border-gold outline-none text-navy placeholder:text-navy/50 transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gold/50 focus:border-gold outline-none text-navy placeholder:text-navy/50 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ, khu vực, vị trí của công trình"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gold/50 focus:border-gold outline-none text-navy placeholder:text-navy/50 transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mô tả và nhu cầu tư vấn"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gold/50 focus:border-gold outline-none text-navy placeholder:text-navy/50 transition-colors duration-300 resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                Gửi Đăng Ký
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-navy/10 text-center">
          <p className="text-navy/60 text-sm">
            © 2024 Khang Minh Stone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
