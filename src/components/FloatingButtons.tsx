import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://zalo.me/0913522225"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ y: -3 }}
        aria-label="Liên hệ qua Zalo"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
      
      <motion.a
        href="tel:0913522225"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ y: -3 }}
        aria-label="Gọi điện thoại"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
