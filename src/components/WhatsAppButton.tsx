import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/9779799705"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tooltip */}
      <span className="hidden md:block px-4 py-2 bg-card text-sm rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald/50 animate-ping" />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 rounded-full bg-emerald flex items-center justify-center shadow-lg shadow-emerald/30">
          <MessageCircle className="w-6 h-6 text-foreground fill-current" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
