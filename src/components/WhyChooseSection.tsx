import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import staircaseImage from "@/assets/staircase-gold.jpg";
import quartzImage from "@/assets/quartz-sample.jpg";

const reasons = [
  {
    image: staircaseImage,
    title: "Thạch anh tự nhiên – nền tảng vững chắc cho công trình.",
  },
  {
    image: quartzImage,
    title: "Giữ sinh khí – mang lại cảm giác cân bằng và an tâm cho ngôi nhà.",
  },
  {
    image: staircaseImage,
    title: "Vân hạt phản sáng – diện mạo sang trọng và có chiều sâu.",
  },
  {
    image: quartzImage,
    title: "Độ cứng bề mặt nổi trội – giữ vẻ đẹp khi sử dụng lâu dài.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ly-do" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${staircaseImage})`,
          filter: 'brightness(0.3)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Lý do chọn Đá Thạch Anh Khang Minh
          </h2>
        </motion.div>

        {/* Reasons Grid - 4 columns with images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="border-4 border-[#f9d577] bg-white">
                <div className="p-2 pb-0">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <p className="text-[#1f4667] text-[14px] leading-relaxed px-4 py-4">
                  {reason.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="tel:0913522225"
            className="inline-flex items-center justify-center gap-3 bg-[#f9d577] text-[#1f4667] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6c569] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="flex flex-col items-start leading-tight">
              <span>TƯ VẤN & MẪU ĐÁ CHUẨN CÔNG TRÌNH</span>
              <span>CẦU THANG – THANG MÁY</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
