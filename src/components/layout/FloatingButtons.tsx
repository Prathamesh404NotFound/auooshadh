import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919999999999"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.1 }}
        className="w-14 h-14 rounded-full gradient-primary text-white shadow-lg flex items-center justify-center animate-float"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};
