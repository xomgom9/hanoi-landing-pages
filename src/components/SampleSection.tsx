import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Palette, Users, Gift } from "lucide-react";
import quartzSample from "@/assets/quartz-sample.jpg";

const reasons = [
  {
    icon: Eye,
    title: "XEM vân đá thật rõ hơn ảnh",
    description: "Vân đá ngoài đời sắc nét, chân thực và thể hiện đúng chất liệu.",
  },
  {
    icon: Palette,
    title: "Biết ngay màu nào phù hợp nội thất",
    description: "Khi đặt mẫu trực tiếp cạnh đồ nội thất, bạn có thể dễ dàng chọn được màu hài hòa nhất.",
  },
  {
    icon: Users,
    title: "ĐƯỢC tư vấn chọn mẫu chuẩn không gian",
    description: "Chuyên gia hỗ trợ đánh giá ánh sáng, diện tích, phong cách thiết kế để đề xuất mẫu đá phù hợp nhất.",
  },
  {
    icon: Gift,
    title: "Hoàn toàn miễn phí 100%",
    description: "Bạn được xem và so sánh mẫu trực tiếp mà không mất bất kỳ chi phí nào.",
  },
];

const SampleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mau-da" className="py-24 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mẫu Đá <span className="text-gradient-gold">Chi Tiết</span>
          </h2>
          <div className="divider-gold mt-6" />
          <p className="text-muted-foreground mt-6 text-xl font-serif">
            4 Lý Do Bạn Nên Xem Vân Mẫu
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sample Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={quartzSample}
                alt="Mẫu đá thạch anh"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="flex gap-4 p-5 rounded-xl bg-secondary/30 border border-border/50 card-hover"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleSection;
