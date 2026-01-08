import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Heart, Droplets, Clock } from "lucide-react";
import elevatorImage from "@/assets/elevator-quartz.jpg";

const features = [
  {
    icon: Sun,
    number: "1",
    title: "Hiệu ứng sáng mạnh – nâng tầm không gian hẹp",
    description: "Đá thạch anh giúp thang máy sáng hơn, rộng hơn và thanh lịch hơn trong từng chi tiết.",
  },
  {
    icon: Heart,
    number: "2",
    title: "Điểm phong thủy an lành trong trục di chuyển",
    description: "Thạch anh tích tụ năng lượng tự nhiên, mang lại cảm giác bình an trong mỗi chuyển động.",
  },
  {
    icon: Droplets,
    number: "3",
    title: "Sạch sẽ vượt trội – bền bỉ với thời gian",
    description: "Không thấm, không ố, không bám bẩn giúp thang máy luôn sáng sạch chỉ với vài thao tác lau nhẹ.",
  },
  {
    icon: Clock,
    number: "4",
    title: "Giữ nét hiện đại lâu dài",
    description: "Bề mặt đá có thể đánh bóng lại sau thời gian dài, giữ vẻ ngoài luôn mới và chỉn chu.",
  },
];

const ElevatorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="op-thang-may" className="py-24 bg-secondary/30" ref={ref}>
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
            Ốp Thang Máy Đá Thạch Anh
          </h2>
          <div className="divider-gold mt-2" />
          <p className="text-white text-[21px] mt-2 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Giải pháp cho nhà có thang máy gia đình – nâng tầm thẩm mỹ & độ bền
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">
                      {feature.number}
                    </span>
                  </div>
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={elevatorImage}
                alt="Ốp thang máy đá thạch anh"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
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
            Đã thi công thực tế nhiều công trình nhà phố & biệt thự trên Toàn quốc
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatorSection;
