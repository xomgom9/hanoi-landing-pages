import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Compass, Eye, Shield } from "lucide-react";
import staircaseImage from "@/assets/staircase-gold.jpg";

const features = [
  {
    icon: Eye,
    title: "Luôn giữ được vẻ đẹp ban đầu",
    description: "Bề mặt đá có thể đánh bóng lại, tái tạo hoàn toàn độ sáng và độ mới. Cầu thang luôn giữ vẻ sang trọng, trở thành điểm nhấn lâu dài.",
  },
  {
    icon: Compass,
    title: "Nâng trục vượng khí – giữ năng lượng hanh thông",
    description: "Cầu thang là đường dẫn khí đứng quan trọng trong phong thủy. Ốp đá thạch anh giúp dòng khí ổn định, êm mạch và lan tỏa năng lượng cát lành.",
  },
  {
    icon: Sparkles,
    title: "Vẻ đẹp sang trọng ngay từ điểm chạm đầu tiên",
    description: "Gam màu sáng kết hợp hạt đá thạch anh óng ánh giúp cầu thang trở thành tâm điểm đầy tinh tế. Không gian được mở rộng, sáng bừng.",
  },
  {
    icon: Shield,
    title: "Bền chắc theo thời gian – mỗi bước đi đều an tâm",
    description: "Đá có cấu trúc đặc chắc, làm từ thạch anh tự nhiên, chống trầy và chống thấm tốt, phù hợp khu vực chịu tác động lớn.",
  },
];

const StaircaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lat-cau-thang" className="py-24 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-4">
            Ứng dụng
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lát Cầu Thang <span className="text-gradient-gold">Đá Thạch Anh</span>
          </h2>
          <div className="divider-gold mt-6" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Phù hợp nhà đang hoàn thiện phần thô – hoàn thiện nội thất cầu thang bộ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={staircaseImage}
                alt="Cầu thang đá thạch anh"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl bg-secondary/30 card-hover"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Đã thi công thực tế nhiều công trình nhà phố & biệt thự tại Toàn Quốc
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default StaircaseSection;
