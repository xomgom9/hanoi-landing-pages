import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Heart, Droplets, Clock } from "lucide-react";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Sun,
    title: "1. Hiệu ứng sáng mạnh – nâng tầm không gian hẹp",
    points: [
      "Đá thạch anh giúp thang máy sáng hơn, rộng hơn và thanh lịch hơn trong từng chi tiết.",
      "Sự phản chiếu nhẹ nhàng của hạt đá tạo cảm giác hiện đại và sang trọng tức thì.",
    ],
  },
  {
    icon: Heart,
    title: "2. Điểm phong thủy an lành trong trục di chuyển",
    points: [
      "Thạch anh tích tụ năng lượng tự nhiên, mang lại cảm giác bình an trong mỗi chuyển động lên – xuống.",
      "Dòng khí được giữ ổn định, góp phần tạo nên nguồn sinh khí hài hòa trong ngôi nhà.",
    ],
  },
  {
    icon: Droplets,
    title: "3. Sạch sẽ vượt trội – bền bỉ với thời gian",
    points: [
      "Không thấm, không ố, không bám bẩn giúp thang máy luôn sáng sạch chỉ với vài thao tác lau nhẹ.",
      "Chịu lực và chống trầy tốt, rất phù hợp với không gian kín có tần suất sử dụng cao.",
    ],
  },
  {
    icon: Clock,
    title: "4. Giữ nét hiện đại lâu dài",
    points: [
      "Bề mặt đá có thể đánh bóng lại sau thời gian dài, giữ vẻ ngoài luôn mới và chỉn chu.",
      "Thang máy trở thành không gian nhỏ nhưng đầy giá trị thẩm mỹ và đẳng cấp.",
    ],
  },
];

const galleryImages = [
  elevatorImage,
  elevatorImage,
  elevatorImage,
  elevatorImage,
  elevatorImage,
];

const ElevatorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="op-thang-may" className="py-24 section-navy" ref={ref}>
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

        {/* Image Carousel */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="bg-white p-[5px] rounded-none">
                    <img 
                      src={image} 
                      alt={`Ốp thang máy đá thạch anh ${index + 1}`} 
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

        {/* Features Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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

        {/* Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Đã thi công thực tế nhiều công trình nhà phố & biệt thự trên Toàn quốc
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatorSection;
