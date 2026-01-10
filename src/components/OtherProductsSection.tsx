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

// Import real kitchen and lavabo images
import banBepAmarcord from "@/assets/kitchen/ban-bep-amarcord.jpg";
import banBepBlueRoma from "@/assets/kitchen/ban-bep-blue-roma.jpg";
import banBepVivalioro from "@/assets/kitchen/ban-bep-vivalioro.jpg";
import banBepArabescato from "@/assets/kitchen/ban-bep-arabescato.jpg";
import banBepCovelani from "@/assets/kitchen/ban-bep-covelani.jpg";
import banBepGreyMonet from "@/assets/kitchen/ban-bep-grey-monet.jpg";
import lavaboBlueRoma from "@/assets/kitchen/lavabo-blue-roma.jpg";
import lavaboBeverlyBlue from "@/assets/kitchen/lavabo-beverly-blue.jpg";

const products = [
  { image: banBepAmarcord, name: "Bàn bếp Amarcord", type: "Mặt bếp" },
  { image: lavaboBlueRoma, name: "Đá Blue Roma", type: "Lavabo" },
  { image: banBepVivalioro, name: "Bàn bếp Vivalioro", type: "Mặt bếp" },
  { image: lavaboBeverlyBlue, name: "Đá Beverly Blue", type: "Lavabo" },
  { image: banBepArabescato, name: "Bàn bếp Arabescato", type: "Mặt bếp" },
  { image: banBepBlueRoma, name: "Đá Blue Roma", type: "Mặt bếp" },
  { image: banBepCovelani, name: "Bàn bếp Covelani", type: "Mặt bếp" },
  { image: banBepGreyMonet, name: "Bàn bếp Grey Monet", type: "Mặt bếp" },
];

const OtherProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="py-16 bg-[#f5f0e8]" ref={ref}>
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
          <p className="text-[#1f4667]/80 text-[18px] mt-2 max-w-2xl mx-auto">
            Đá thạch anh cao cấp cho không gian bếp sang trọng và hiện đại
          </p>
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
                  <div className="group overflow-hidden relative bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay with product info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-[#f9d577] text-sm font-medium">{product.type}</span>
                        <p className="text-white font-semibold">{product.name}</p>
                      </div>
                    </div>
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
