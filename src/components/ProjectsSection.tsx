import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import elevatorImage from "@/assets/elevator-quartz.jpg";
import staircaseImage from "@/assets/staircase-gold.jpg";
import heroImage from "@/assets/hero-staircase.jpg";

const projects = [
  {
    image: elevatorImage,
    category: "THANG MÁY",
    title: "Thang máy ốp đá thạch anh cao cấp",
  },
  {
    image: staircaseImage,
    category: "CẦU THANG",
    title: "Cầu thang biệt thự phong cách hiện đại",
  },
  {
    image: heroImage,
    category: "CẦU THANG",
    title: "Cầu thang nhà phố sang trọng",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cong-trinh" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] mb-2" style={{ color: '#f9d577', fontFamily: "'Times New Roman', serif", fontWeight: 600 }}>
            Công Trình Thực Tế Tiêu Biểu
          </h2>
          <div className="divider-gold mt-2" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
