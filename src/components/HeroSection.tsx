import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Calendar } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import heroImage from '@/assets/hero-building.jpg';
import CrownLogo from './CrownLogo';
import LeadFormModal from './LeadFormModal';
import { useLeadCapture } from '@/contexts/LeadCaptureContext';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'book-visit' | 'download-brochure'>('book-visit');
  const { interceptCTA } = useLeadCapture();
  
  const phoneNumber = '9779799705';
  const message = encodeURIComponent('Hello, I am interested in Ananda Crown Mohali. Please share details.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleBookVisit = (e: React.MouseEvent) => {
    e.preventDefault();
    interceptCTA('book_visit', () => {
      setModalType('book-visit');
      setModalOpen(true);
    });
  };

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    interceptCTA('download_brochure', () => {
      setModalType('download-brochure');
      setModalOpen(true);
    });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    interceptCTA('whatsapp', () => {
      window.open(whatsappLink, '_blank');
    });
  };

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

      {/* Gold Light Sweep Effect - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
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
      <div className="relative z-10 container mx-auto px-4 text-center pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Crown Logo */}
          <CrownLogo size="lg" className="mb-4 md:mb-8" />

          {/* Tagline */}
          <motion.p
            className="text-primary font-display text-lg md:text-2xl italic mb-2 md:mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            High Rise Luxury Living
          </motion.p>

          {/* Main Heading - H1 for SEO - Project location only */}
          <motion.h1
            className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Sector 78, <span className="text-gradient-gold">Mohali</span>
          </motion.h1>

          {/* Subheading - H2 for SEO */}
          <motion.p
            className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-2 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Ultra Luxury 3, 3+1, 4 & 5 BHK Residences
          </motion.p>

          <motion.p
            className="text-primary/80 font-medium tracking-widest uppercase text-xs md:text-sm mb-6 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Sector 78, Mohali • 20+ Years Excellence
          </motion.p>

          {/* CTA Buttons - Stack on mobile */}
          <motion.div
            className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button 
              onClick={handleBookVisit}
              className="btn-luxury flex items-center justify-center gap-2 py-3 md:py-4"
            >
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </button>
            <button
              onClick={handleDownloadBrochure}
              className="btn-luxury-outline flex items-center justify-center gap-2 py-3 md:py-4"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-sm bg-[#25D366] hover:bg-[#22c55e] text-white font-medium tracking-wider uppercase text-sm transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
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
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
      />
    </section>
  );
};

export default HeroSection;
