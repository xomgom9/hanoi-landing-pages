import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import staircaseImage from "@/assets/staircase-gold.jpg";
import heroImage from "@/assets/hero-staircase.jpg";
import quartzImage from "@/assets/quartz-sample.jpg";

const staircaseProjects = [
  { image: staircaseImage },
  { image: heroImage },
  { image: quartzImage },
  { image: staircaseImage },
  { image: heroImage },
  { image: quartzImage },
];

const elevatorProjects = [
  { image: elevatorImage },
  { image: quartzImage },
  { image: elevatorImage },
  { image: quartzImage },
  { image: elevatorImage },
  { image: quartzImage },
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
          <h2 className="text-[44px] mb-6" style={{ color: '#f9d577', fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
            Công Trình Thực Tế Tiêu Biểu
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex border-2 border-[#1f4667] overflow-hidden">
            <button
              onClick={() => setActiveTab("staircase")}
              className={`px-8 py-3 text-sm font-semibold transition-colors ${
                activeTab === "staircase"
                  ? "bg-[#1f4667] text-white"
                  : "bg-white text-[#1f4667] hover:bg-[#1f4667]/10"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              CẦU THANG
            </button>
            <button
              onClick={() => setActiveTab("elevator")}
              className={`px-8 py-3 text-sm font-semibold transition-colors ${
                activeTab === "elevator"
                  ? "bg-[#1f4667] text-white"
                  : "bg-white text-[#1f4667] hover:bg-[#1f4667]/10"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              THANG MÁY
            </button>
          </div>
        </motion.div>

        {/* Projects Grid - 2 rows x 3 columns */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-[5px] shadow-sm"
            >
              <img
                src={project.image}
                alt={`Công trình ${index + 1}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </motion.div>

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
