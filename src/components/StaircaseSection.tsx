import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Compass, Crown, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import real project images
import cauThangXamNganHa01 from "@/assets/projects/cau-thang-xam-ngan-ha-01.jpg";
import cauThangXamNganHa02 from "@/assets/projects/cau-thang-xam-ngan-ha-02.jpg";
import cauThangXamNganHa03 from "@/assets/projects/cau-thang-xam-ngan-ha-03.jpg";
import cauThangLongBien01 from "@/assets/projects/cau-thang-long-bien-01.jpg";
import cauThangLongBien02 from "@/assets/projects/cau-thang-long-bien-02.jpg";

const features = [
  {
    icon: Crown,
    title: "Vẻ đẹp sang trọng ngay từ điểm chạm đầu tiên",
    points: [
      "Gam màu sáng kết hợp hạt đá thạch anh óng ánh giúp cầu thang trở thành tâm điểm đầy tinh tế.",
      "Không gian được mở rộng, sáng bừng và mang cảm giác chỉn chu của những công trình đẳng cấp.",
    ],
  },
  {
    icon: Shield,
    title: "Bền chắc theo thời gian – mỗi bước đi đều an tâm",
    points: [
      "Đá có cấu trúc đặc chắc, làm từ thạch anh tự nhiên, chống trầy và chống thấm tốt, phù hợp khu vực chịu tác động lớn.",
      "Giữ cầu thang luôn sạch, sáng và bền bỉ dù trải qua nhiều năm sử dụng.",
    ],
  },
  {
    icon: Compass,
    title: "Nâng trục vượng khí – giữ năng lượng hanh thông",
    points: [
      "Cầu thang là đường dẫn khí đứng quan trọng trong phong thủy.",
      "Ốp đá thạch anh giúp dòng khí ổn định, êm mạch và lan tỏa năng lượng cát lành khắp ngôi nhà.",
    ],
  },
  {
    icon: Sparkles,
    title: "Luôn giữ được vẻ đẹp ban đầu",
    points: [
      "Bề mặt đá có thể đánh bóng lại, tái tạo hoàn toàn độ sáng và độ mới.",
      "Cầu thang luôn giữ vẻ sang trọng, trở thành điểm nhấn lâu dài của không gian sống.",
    ],
  },
];

const galleryImages = [
  { image: cauThangXamNganHa01, alt: "Cầu thang Xám Ngân Hà 01" },
  { image: cauThangXamNganHa02, alt: "Cầu thang Xám Ngân Hà 02" },
  { image: cauThangXamNganHa03, alt: "Cầu thang Xám Ngân Hà 03" },
  { image: cauThangLongBien01, alt: "Cầu thang Long Biên 01" },
  { image: cauThangLongBien02, alt: "Cầu thang Long Biên 02" },
];

const StaircaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lat-cau-thang" className="py-16 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#f9d577] text-[#1f4667] text-[18px] font-medium mb-2">
            Ứng dụng
          </span>
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Lát Cầu Thang Đá Thạch Anh
          </h2>
          <div className="divider-gold mt-2" />
          <p className="text-white text-[21px] mt-2 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Phù hợp nhà đang hoàn thiện phần thô – hoàn thiện nội thất cầu thang bộ
          </p>
        </motion.div>

        {/* Features Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <feature.icon className="w-5 h-5" style={{ color: '#f9d577' }} />
                <h3 className="text-[18px] font-semibold" style={{ color: '#f9d57a' }}>
                  {feature.title}
                </h3>
              </div>
              <div className="space-y-1 pl-8">
                {feature.points.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-[16px] text-white leading-relaxed">
                    – {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {galleryImages.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="bg-white p-[5px] rounded-none">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
            <CarouselNext className="right-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
          </Carousel>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Đã thi công thực tế nhiều công trình nhà phố & biệt thự tại Toàn Quốc
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default StaircaseSection;
