import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Maximize, X, CreditCard, Building2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import floor plans
import floorPlan3BHK from '@/assets/floor-plan-3plus1-2875.jpeg';
import floorPlan3Plus1 from '@/assets/floor-plan-3plus1-2750.jpeg';
import floorPlan4BHK from '@/assets/floor-plan-4bhk.jpeg';
import floorPlan5BHK from '@/assets/floor-plan-5bhk.jpeg';

const configurations = [
  {
    type: '3 BHK',
    title: 'Luxury Residences',
    size: '2425 Sq. Ft.',
    booking: '₹20L Booking',
    status: 'AVAILABLE',
    features: ['3 Bedrooms', '3 Bathrooms', 'Living & Dining', 'Modular Kitchen', 'Utility Balcony', '1 Parking'],
    highlight: 'Perfect for Growing Families',
    floorPlan: floorPlan3BHK,
    altText: 'Ananda Crown Mohali 3 BHK Floor Plan Sector 78 Luxury Apartment Layout',
  },
  {
    type: '3+1 BHK',
    title: 'Premium Residences',
    size: '2750 Sq. Ft.',
    booking: '₹25L Booking',
    status: 'AVAILABLE',
    features: ['3 Bedrooms + Study', '4 Bathrooms', 'Large Living Area', 'Premium Kitchen', 'Servant Quarter', '2 Parking'],
    highlight: 'Ideal for Professionals',
    featured: true,
    floorPlan: floorPlan3Plus1,
    altText: 'Ananda Crown Mohali 3+1 BHK Floor Plan 2750 Sq Ft Luxury Apartment',
  },
  {
    type: '4 BHK',
    title: 'Ultra Luxury Residences',
    size: '3250 Sq. Ft.',
    booking: '₹25L Booking',
    status: 'AVAILABLE',
    features: ['4 Bedrooms', '4 Bathrooms', 'Private Lounge', 'Italian Kitchen', 'Servant Quarter', '2 Parking'],
    highlight: 'The Pinnacle of Luxury',
    floorPlan: floorPlan4BHK,
    altText: 'Ananda Crown Mohali 4 BHK Floor Plan 3250 Sq Ft Premium Apartment',
  },
  {
    type: '5 BHK',
    title: 'Penthouse Living',
    size: '4100 Sq. Ft.',
    booking: '₹40L Booking',
    status: 'AVAILABLE',
    features: ['5 Bedrooms', '5 Bathrooms', 'Family Lounge', 'Premium Kitchen', 'Multiple Balconies', '2 Parking'],
    highlight: 'Ultimate Family Residence',
    floorPlan: floorPlan5BHK,
    altText: 'Ananda Crown Mohali 5 BHK Floor Plan 4100 Sq Ft Penthouse Layout',
  },
];

const ConfigurationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookVisit = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('contact-name')?.focus();
        }, 800);
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('contact-name')?.focus();
      }, 800);
    }
  };

  return (
    <section id="configurations" className="py-16 md:py-24 lg:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-base md:text-lg italic mb-2 md:mb-4">Exclusive Configurations</p>
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Choose Your <span className="text-gradient-gold">Crown</span>
          </h2>
          <div className="gold-line max-w-md mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Each residence is meticulously designed to offer spacious layouts and premium finishes.
          </p>
        </motion.div>

        {/* Units Selling Fast Section */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="luxury-card p-5 md:p-8 text-center">
            <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6 text-gradient-gold flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 md:w-6 md:h-6" />
              UNITS SELLING FAST
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-sm">
                <p className="text-xs md:text-sm text-muted-foreground">3 BHK | 2425 sq.ft.</p>
                <p className="text-primary font-medium text-sm md:text-base">₹20L Booking</p>
                <span className="text-[10px] md:text-xs text-green-400">AVAILABLE</span>
              </div>
              <div className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-sm">
                <p className="text-xs md:text-sm text-muted-foreground">3+1 BHK | 2750 sq.ft.</p>
                <p className="text-primary font-medium text-sm md:text-base">₹25L Booking</p>
                <span className="text-[10px] md:text-xs text-green-400">AVAILABLE</span>
              </div>
              <div className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-sm">
                <p className="text-xs md:text-sm text-muted-foreground">4 BHK | 3250 sq.ft.</p>
                <p className="text-primary font-medium text-sm md:text-base">₹25L Booking</p>
                <span className="text-[10px] md:text-xs text-green-400">AVAILABLE</span>
              </div>
              <div className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-sm">
                <p className="text-xs md:text-sm text-muted-foreground">5 BHK | 4100 sq.ft.</p>
                <p className="text-primary font-medium text-sm md:text-base">₹40L Booking</p>
                <span className="text-[10px] md:text-xs text-green-400">AVAILABLE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Plan Section */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="luxury-card p-5 md:p-8 text-center">
            <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-gradient-gold">💳 PAY LESS NOW. GAIN MORE LATER.</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-sm flex-1 max-w-xs">
                <p className="text-2xl md:text-3xl font-serif text-primary mb-2">25%</p>
                <p className="text-sm md:text-base text-muted-foreground">on RERA Approval</p>
              </div>
              <div className="p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-sm flex-1 max-w-xs">
                <p className="text-2xl md:text-3xl font-serif text-primary mb-2">75%</p>
                <p className="text-sm md:text-base text-muted-foreground">Construction-Linked / Time-Linked Plan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Configuration Cards - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {configurations.map((config, index) => (
            <motion.div
              key={config.type}
              className={`luxury-card group flex-shrink-0 w-[280px] md:w-auto ${
                config.featured ? 'ring-2 ring-primary/50 md:scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {config.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-gold text-primary-foreground text-center py-1.5 md:py-2 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`p-5 md:p-8 ${config.featured ? 'pt-10 md:pt-12' : ''}`}>
                {/* Type Badge */}
                <div className="inline-block px-3 md:px-4 py-1 bg-primary/10 border border-primary/30 rounded-sm mb-3 md:mb-4">
                  <span className="text-primary font-medium text-sm md:text-base">{config.type}</span>
                </div>

                {/* Status Badge */}
                <div className="inline-block ml-2 px-2 py-0.5 rounded-sm text-[10px] md:text-xs font-medium bg-green-500/20 text-green-400">
                  {config.status}
                </div>

                {/* Title & Size */}
                <h3 className="font-serif text-lg md:text-2xl mb-1.5 md:mb-2">{config.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2 text-sm">
                  <Maximize className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  <span>{config.size}</span>
                </div>
                <p className="text-primary font-medium text-sm mb-4">{config.booking}</p>

                {/* Highlight */}
                <p className="text-xs md:text-sm text-primary/80 italic mb-4 md:mb-6">"{config.highlight}"</p>

                {/* Features List */}
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {config.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-2">
                  {config.floorPlan && (
                    <button
                      onClick={() => setSelectedFloorPlan(config.floorPlan)}
                      className="block w-full text-center py-2 md:py-2.5 rounded-sm font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border border-primary/50 text-primary hover:bg-primary/10"
                    >
                      View Floor Plan
                    </button>
                  )}
                  <button
                    onClick={handleBookVisit}
                    className={`block w-full text-center py-2.5 md:py-3 rounded-sm font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                      config.featured
                        ? 'btn-luxury'
                        : 'border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    Request Details
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {configurations.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>

      {/* Floor Plan Modal */}
      {selectedFloorPlan && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedFloorPlan(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFloorPlan(null)}
              className="absolute top-2 right-2 z-10 p-2 bg-background/80 rounded-full text-foreground hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedFloorPlan}
              alt={configurations.find(c => c.floorPlan === selectedFloorPlan)?.altText || 'Ananda Crown Mohali Luxury Apartment Floor Plan Sector 78'}
              title={configurations.find(c => c.floorPlan === selectedFloorPlan)?.altText || 'Ananda Crown Mohali Floor Plan'}
              className="w-full h-auto rounded-sm"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ConfigurationsSection;
