import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import quartzSample from "@/assets/quartz-sample.jpg";
import staircaseImage from "@/assets/staircase-gold.jpg";
import elevatorImage from "@/assets/elevator-quartz.jpg";

const samples = [
  {
    image: quartzSample,
    name: "Thạch anh Lapis Lazuli",
    code: "G104LAP22B1",
  },
  {
    image: staircaseImage,
    name: "Thạch anh Xám Ngân Hà",
    code: "C20322",
  },
  {
    image: elevatorImage,
    name: "Thạch anh Mã Não Đỏ",
    code: "G104MND22B1",
  },
  {
    image: quartzSample,
    name: "Thạch anh Trắng Tuyết",
    code: "G104TT22B1",
  },
  {
    image: staircaseImage,
    name: "Thạch anh Vàng Hoàng Kim",
    code: "G104VHK22B1",
  },
];

const SampleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="mau-da" className="py-24 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-4" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Mẫu Đá Chi Tiết
          </h2>
        </motion.div>

        {/* Samples Carousel */}
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
              {samples.map((sample, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="relative group">
                    {/* Sample Name & Code - Top Right with blur background */}
                    <div className="absolute top-4 right-4 text-right z-10 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <p className="text-white italic text-[16px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                        {sample.name}
                      </p>
                      <p className="text-[#f9d577] font-semibold text-[14px]">
                        {sample.code}
                      </p>
                    </div>
                    
                    {/* Image with white border and hover zoom */}
                    <div className="bg-white p-[5px] overflow-hidden">
                      <img
                        src={sample.image}
                        alt={sample.name}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
            <CarouselNext className="right-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
          </Carousel>
        </motion.div>

        {/* Gold Divider */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h-[3px] bg-[#f9d577] w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default SampleSection;
