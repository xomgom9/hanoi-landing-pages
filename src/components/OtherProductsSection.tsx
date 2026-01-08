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

const products = [
  { image: quartzSample },
  { image: staircaseImage },
  { image: elevatorImage },
  { image: quartzSample },
  { image: staircaseImage },
];

const OtherProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
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
          <span className="inline-block px-4 py-2 rounded-full bg-[#f9d577] text-[#1f4667] text-[18px] font-medium mb-2">
            SẢN PHẨM KHÁC
          </span>
          <h2 className="text-[44px] mb-2" style={{ color: '#1f4667', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Đá Ốp Mặt Bếp Và Lavabo
          </h2>
        </motion.div>

        {/* Products Carousel */}
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
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="group overflow-hidden">
                    <img
                      src={product.image}
                      alt={`Sản phẩm ${index + 1}`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
            <CarouselNext className="right-2 bg-white border-[#1f4667] text-[#1f4667] hover:bg-[#1f4667] hover:text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherProductsSection;
