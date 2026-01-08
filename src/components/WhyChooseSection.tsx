import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import staircaseImage from "@/assets/staircase-gold.jpg";
import quartzImage from "@/assets/quartz-sample.jpg";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import heroImage from "@/assets/hero-staircase.jpg";

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
  {
    image: elevatorImage,
    title: "Chống thấm, chống ố – bề mặt luôn sạch đẹp.",
  },
  {
    image: heroImage,
    title: "Đa dạng màu sắc – phù hợp mọi phong cách nội thất.",
  },
  {
    image: staircaseImage,
    title: "Dễ vệ sinh – chỉ cần lau nhẹ là sáng bóng.",
  },
  {
    image: quartzImage,
    title: "Chịu lực tốt – phù hợp khu vực có tần suất sử dụng cao.",
  },
  {
    image: elevatorImage,
    title: "Thi công nhanh – tiết kiệm thời gian hoàn thiện.",
  },
  {
    image: heroImage,
    title: "Bảo hành dài hạn – yên tâm sử dụng nhiều năm.",
  },
  {
    image: staircaseImage,
    title: "Đội ngũ chuyên nghiệp – tư vấn tận tâm.",
  },
  {
    image: quartzImage,
    title: "Giá cả hợp lý – chất lượng vượt trội.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="ly-do" className="py-16 relative overflow-hidden" ref={ref}>
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
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Lý do chọn Đá Thạch Anh Khang Minh
          </h2>
          <div className="divider-gold mt-2" />
          <p className="text-white text-[21px] mt-2 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Chất lượng vượt trội – Uy tín hàng đầu trong ngành đá ốp lát
          </p>
        </motion.div>

        {/* Reasons Carousel */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reasons.map((reason, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="border-4 border-[#f9d577] bg-white h-full flex flex-col">
                    <div className="p-2 pb-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={reason.image} 
                          alt={reason.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-[#1f4667] text-[14px] leading-relaxed px-4 py-4 flex-1">
                      {reason.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
            <CarouselNext className="right-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
          </Carousel>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="tel:0913522225"
            className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#d4a84b] via-[#f9d577] to-[#d4a84b] bg-[length:200%_100%] animate-[shimmer_4s_ease-in-out_infinite]" />
            
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#d4a84b]/40 via-[#f9d577]/40 to-[#d4a84b]/40 blur-xl" />
            
            {/* Border */}
            <span className="absolute inset-0 rounded-full border-2 border-[#1f4667]/20 group-hover:border-[#1f4667]/40 transition-colors duration-300" />
            
            {/* Phone icon */}
            <span className="relative flex items-center gap-3">
              <svg className="w-6 h-6 text-[#1f4667]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="flex flex-col items-center leading-tight text-[#1f4667]">
                <span className="text-base md:text-lg font-bold tracking-wide">TƯ VẤN & MẪU ĐÁ CHUẨN CÔNG TRÌNH</span>
                <span className="text-sm md:text-base font-semibold">CẦU THANG – THANG MÁY</span>
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
