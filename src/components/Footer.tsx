import { Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-foreground">KM</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">KHANG MINH</h3>
                <p className="text-xs text-muted-foreground">Đá Thạch Anh Cao Cấp</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Chuyên cung cấp và thi công đá thạch anh lát cầu thang, ốp thang máy cho nhà phố và biệt thự tại Hà Nội và toàn quốc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#lat-cau-thang" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Lát cầu thang đá thạch anh
                </a>
              </li>
              <li>
                <a href="#op-thang-may" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Ốp thang máy đá thạch anh
                </a>
              </li>
              <li>
                <a href="#mau-da" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Xem mẫu đá
                </a>
              </li>
              <li>
                <a href="#cong-trinh" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Công trình tiêu biểu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0913522225" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  0913 522 225
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://zalo.me/0913522225" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Zalo: 0913 522 225
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Hà Nội, Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Khang Minh Stone. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
