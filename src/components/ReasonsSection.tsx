import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Grid3X3, Sofa, UserCheck, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Grid3X3,
    title: "XEM VÂN ĐÁ THẬT RÕ HƠN ẢNH",
    description: "Vân đá ngoài đời sắc nét, chân thực và thể hiện đúng chất liệu, điều mà hình ảnh không thể phản ánh đầy đủ."
  },
  {
    icon: Sofa,
    title: "BIẾT NGAY MÀU NÀO PHÙ HỢP NỘI THẤT",
    description: "Khi đặt mẫu trực tiếp cạnh đồ nội thất, bạn có thể dễ dàng chọn được màu hài hòa nhất với không gian."
  },
  {
    icon: UserCheck,
    title: "ĐƯỢC TƯ VẤN CHỌN MẪU CHUẨN KHÔNG GIAN",
    description: "Chuyên gia hỗ trợ đánh giá ánh sáng, diện tích, phong cách thiết kế để đề xuất mẫu đá phù hợp nhất."
  },
  {
    icon: ThumbsUp,
    title: "HOÀN TOÀN MIỄN PHÍ 100%",
    description: "Bạn được xem và so sánh mẫu trực tiếp mà không mất bất kỳ chi phí nào."
  }
];

const ReasonsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-4" style={{ color: '#f9d577', fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            4 Lý Do
          </h2>
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Bạn Nên Xem Vân Mẫu
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#f9d577] rounded-lg flex items-center justify-center">
                <reason.icon className="w-10 h-10 text-[#f9d577]" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-[#f9d577] font-bold text-sm md:text-base mb-4 uppercase tracking-wide">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
