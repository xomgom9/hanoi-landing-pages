import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import staircaseImage from "@/assets/staircase-gold.jpg";
import heroImage from "@/assets/hero-staircase.jpg";
import quartzImage from "@/assets/quartz-sample.jpg";

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
    <section id="cong-trinh" className="py-24 bg-[#f5f0e8]" ref={ref}>
      <div className="container mx-auto px-4">
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
            className="inline-flex items-center justify-center bg-[#f9d577] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6c569] transition-colors"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            <span className="flex flex-col items-center leading-tight text-red-600">
              <span>TƯ VẤN & MẪU ĐÁ CHUẨN CÔNG TRÌNH</span>
              <span>CẦU THANG – THANG MÁY</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
