import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anh Minh",
    location: "Hà Nội",
    content: "Đá thạch anh rất đẹp và sang trọng. Sau khi ốp thang máy, không gian nhà tôi sáng và hiện đại hơn hẳn.",
  },
  {
    name: "Cô Thu Trang",
    location: "TP. HCM",
    content: "Thi công nhanh, đá chắc chắn và bền. Dùng hơn một năm mà bề mặt vẫn bóng như mới.",
  },
  {
    name: "Anh Hoàng",
    location: "Đà Nẵng",
    content: "Tôi thích nhất là đá dễ vệ sinh. Chỉ cần lau nhẹ là sạch, thang máy lúc nào cũng trông gọn gàng.",
  },
  {
    name: "Chú Long",
    location: "Nha Trang",
    content: "Tôi chọn đá thạch anh làm nhà cho con trai vì độ bền và yếu tố phong thủy. Vân hạt đẹp và tinh tế.",
  },
  {
    name: "Chị Hạnh",
    location: "Hải Phòng",
    content: "Đá thạch anh Khang Minh mang lại cảm giác sang và thanh lịch. Khách đến nhà đều khen không gian rất đẹp.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Feedback <span className="text-gradient-gold">Khách Hàng</span>
          </h2>
          <div className="divider-gold mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-serif font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
