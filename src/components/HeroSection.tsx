import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-staircase.jpg";
const benefits = ["Sáng – Sang trọng, nâng tầm không gian nhà phố & biệt thự.", "Thạch anh giúp ổn định năng lượng, lan tỏa vượng khí cho trục cầu thang.", "Chống thấm ố – Bền đẹp vượt thời gian."];
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(15, 23, 42, 0.3) 100%)"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-4 font-sans md:text-5xl text-left">
              Đá Thạch Anh Lát Cầu Thang
              <br />
              <span className="text-gradient-gold text-6xl">& Ốp Thang Máy</span>
            </h1>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">
              Cho Nhà Phố & Biệt Thự Tại Hà Nội
            </p>
          </motion.div>

          <motion.ul className="space-y-4 mb-10" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90">{benefit}</span>
              </li>)}
          </motion.ul>

          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <a href="#contact" className="btn-gold rounded-full flex items-center justify-center gap-2 group">
              Liên hệ nhận mẫu đá miễn phí
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#mau-da" className="btn-outline-gold rounded-full text-center">
              Cảm nhận chất Thạch anh
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: 1
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;