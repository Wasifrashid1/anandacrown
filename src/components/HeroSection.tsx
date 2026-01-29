import { motion } from 'framer-motion';
import { ChevronDown, Download, Calendar, MessageCircle } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import heroImage from '@/assets/hero-building.jpg';
import CrownLogo from './CrownLogo';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroImage}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Gold Light Sweep Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: '400%' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 6,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Crown Logo */}
          <CrownLogo size="lg" className="mb-8" />

          {/* Tagline */}
          <motion.p
            className="text-primary font-display text-xl md:text-2xl italic mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            High Rise Luxury Living
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="section-heading text-5xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Experience
            <br />
            <span className="text-gradient-gold">Elevated Living</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Ultra Luxury 3, 3+1 & 4+1 BHK Residences
          </motion.p>

          <motion.p
            className="text-primary/80 font-medium tracking-widest uppercase text-sm mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Sector 78, Mohali
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#contact" className="btn-luxury flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </a>
            <a
              href="#contact"
              className="btn-luxury-outline flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
            <a
              href="https://wa.me/9779799705"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-sm bg-emerald/90 hover:bg-emerald text-foreground font-medium tracking-wider uppercase text-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2 },
            y: { duration: 2, repeat: Infinity },
          }}
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
