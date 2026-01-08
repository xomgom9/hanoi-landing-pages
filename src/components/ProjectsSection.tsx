import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import staircaseImage from "@/assets/staircase-gold.jpg";
import heroImage from "@/assets/hero-staircase.jpg";
import quartzImage from "@/assets/quartz-sample.jpg";
import navyBgTexture from "@/assets/navy-bg-texture.jpg";

const staircaseProjects = [
  { image: staircaseImage, size: "tall" },
  { image: heroImage, size: "normal" },
  { image: quartzImage, size: "normal" },
  { image: staircaseImage, size: "normal" },
  { image: heroImage, size: "tall" },
  { image: quartzImage, size: "normal" },
];

const elevatorProjects = [
  { image: elevatorImage, size: "normal" },
  { image: quartzImage, size: "tall" },
  { image: elevatorImage, size: "normal" },
  { image: quartzImage, size: "normal" },
  { image: elevatorImage, size: "normal" },
  { image: quartzImage, size: "tall" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"staircase" | "elevator">("staircase");

  const currentProjects = activeTab === "staircase" ? staircaseProjects : elevatorProjects;

  return (
    <section id="cong-trinh" className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${navyBgTexture})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Công Trình Thực Tế Tiêu Biểu
          </h2>
          <div className="divider-gold mt-2" />
          <p className="text-white text-[21px] mt-2 mb-4 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Những dự án đã hoàn thiện với đá thạch anh cao cấp
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex w-full">
            <button
              onClick={() => setActiveTab("staircase")}
              className={`flex-1 px-8 py-3 text-sm font-semibold border-2 border-white transition-all duration-300 ease-in-out ${
                activeTab === "staircase"
                  ? "bg-[#f9d577] text-[#1f4667] scale-[1.02] shadow-lg"
                  : "bg-[#1f4667] text-[#f9d577] hover:bg-[#2a5a7a] hover:scale-[1.01]"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              CẦU THANG
            </button>
            <button
              onClick={() => setActiveTab("elevator")}
              className={`flex-1 px-8 py-3 text-sm font-semibold border-2 border-white transition-all duration-300 ease-in-out ${
                activeTab === "elevator"
                  ? "bg-[#f9d577] text-[#1f4667] scale-[1.02] shadow-lg"
                  : "bg-[#1f4667] text-[#f9d577] hover:bg-[#2a5a7a] hover:scale-[1.01]"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              THANG MÁY
            </button>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="columns-2 md:columns-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-[5px] shadow-sm mb-4 break-inside-avoid overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Công trình ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
                      project.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
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

export default ProjectsSection;
