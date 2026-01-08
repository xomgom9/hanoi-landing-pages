import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Cô Thu Trang",
    location: "TP. HCM",
    content: "Thi công nhanh, đá chắc chắn và bền. Dùng hơn một năm mà bề mặt vẫn bóng như mới.",
    rating: 5,
  },
  {
    name: "Anh Hoàng",
    location: "Đà Nẵng",
    content: "Tôi thích nhất là đá dễ vệ sinh. Chỉ cần lau nhẹ là sạch, thang máy lúc nào cũng trông gọn gàng.",
    rating: 5,
  },
  {
    name: "Chú Long",
    location: "Nha Trang",
    content: "Tôi chọn đá thạch anh làm nhà cho con trai vì độ bền và yếu tố phong thủy. Vân hạt đẹp và tinh tế.",
    rating: 5,
  },
  {
    name: "Anh Minh",
    location: "Hà Nội",
    content: "Đá thạch anh rất đẹp và sang trọng. Sau khi ốp thang máy, không gian nhà tôi sáng và hiện đại hơn hẳn.",
    rating: 5,
  },
  {
    name: "Chị Hạnh",
    location: "Hải Phòng",
    content: "Đá thạch anh Khang Minh mang lại cảm giác sang và thanh lịch. Khách đến nhà đều khen không gian rất đẹp.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 bg-[#f5f0e8]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-2" style={{ color: '#1f4667', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Feedback khách hàng
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 h-full border border-gray-200/50 shadow-sm">
                    {/* Name & Location */}
                    <h3 className="text-[#1f4667] text-lg font-semibold text-center mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
                      {testimonial.name}, {testimonial.location}
                    </h3>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#f9d577] text-[#f9d577]" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-600 text-center text-sm leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-transparent border-none text-[#1f4667] hover:bg-transparent hover:text-[#f9d577] -translate-x-2" />
            <CarouselNext className="right-0 bg-transparent border-none text-[#1f4667] hover:bg-transparent hover:text-[#f9d577] translate-x-2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
