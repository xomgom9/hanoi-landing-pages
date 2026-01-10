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

// Import real stone images from Golden Archi
import classicXamNganHa from "@/assets/stones/classic-xam-ngan-ha.jpg";
import daMatHo from "@/assets/stones/da-mat-ho.jpg";
import daHoaNuiLua from "@/assets/stones/da-hoa-nui-lua.jpg";
import lapisLazuli from "@/assets/stones/lapis-lazuli.jpg";
import maNaoDo from "@/assets/stones/ma-nao-do.jpg";
import ngocHoangLong from "@/assets/stones/ngoc-hoang-long.jpg";
import ngocHoanLongSan from "@/assets/stones/ngoc-hoan-long-san.jpg";
import obsidian from "@/assets/stones/obsidian.jpg";
import serpentine from "@/assets/stones/serpentine.jpg";
import thachAnhTim from "@/assets/stones/thach-anh-tim.jpg";
import thachAnhTocXanh from "@/assets/stones/thach-anh-toc-xanh.jpg";
import thachAnhVang from "@/assets/stones/thach-anh-vang.jpg";

const samples = [
  {
    image: classicXamNganHa,
    name: "Classic Xám Ngân Hà",
    code: "C20322",
  },
  {
    image: daMatHo,
    name: "Đá Mắt Hổ",
    code: "Xem thêm",
  },
  {
    image: daHoaNuiLua,
    name: "Đá Hoa Núi Lửa",
    code: "Xem thêm",
  },
  {
    image: lapisLazuli,
    name: "Đá Lapis Lazuli",
    code: "Xem thêm",
  },
  {
    image: maNaoDo,
    name: "Đá Mã Não Đỏ",
    code: "Xem thêm",
  },
  {
    image: ngocHoangLong,
    name: "Đá Ngọc Hoàng Long",
    code: "Xem thêm",
  },
  {
    image: ngocHoanLongSan,
    name: "Ngọc Hoàn Long",
    code: "Lát sàn",
  },
  {
    image: obsidian,
    name: "Obsidian",
    code: "Xem thêm",
  },
  {
    image: serpentine,
    name: "Serpentine",
    code: "Xem thêm",
  },
  {
    image: thachAnhTim,
    name: "Thạch Anh Tím",
    code: "Xem thêm",
  },
  {
    image: thachAnhTocXanh,
    name: "Thạch Anh Tóc Xanh",
    code: "Xem thêm",
  },
  {
    image: thachAnhVang,
    name: "Thạch Anh Vàng",
    code: "Xem thêm",
  },
];

const SampleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="mau-da" className="py-16 section-navy" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Mẫu đá thạch anh (Terrazo)
          </h2>
          <div className="divider-gold mt-2" />
          <p className="text-white text-[21px] mt-2 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Đá Terrazzo – Sự tinh tế & độc bản cho công trình của bạn
          </p>
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
