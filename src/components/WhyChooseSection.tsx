import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Mountain, Sparkles, Shield, Phone } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Giữ sinh khí",
    description: "Mang lại cảm giác cân bằng và an tâm cho ngôi nhà",
  },
  {
    icon: Mountain,
    title: "Thạch anh tự nhiên",
    description: "Nền tảng vững chắc cho công trình bền vững",
  },
  {
    icon: Sparkles,
    title: "Vân hạt phản sáng",
    description: "Diện mạo sang trọng và có chiều sâu",
  },
  {
    icon: Shield,
    title: "Độ cứng bề mặt nổi trội",
    description: "Giữ vẻ đẹp khi sử dụng lâu dài",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ly-do" className="py-24 section-navy relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lý do chọn <span className="text-gradient-gold">Đá Thạch Anh Khang Minh</span>
          </h2>
          <div className="divider-gold mt-6" />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-secondary/30 border border-border/50 card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="tel:0913522225"
            className="inline-flex items-center gap-3 btn-gold rounded-full text-lg"
          >
            <Phone className="w-5 h-5" />
            Tư vấn & mẫu đá chuẩn công trình
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            Cầu thang – Thang máy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
