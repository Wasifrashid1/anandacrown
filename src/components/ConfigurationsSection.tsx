import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Maximize } from 'lucide-react';

const configurations = [
  {
    type: '3 BHK',
    title: 'Luxury Residences',
    size: '1,850 - 2,100 Sq. Ft.',
    features: ['3 Bedrooms', '3 Bathrooms', 'Living & Dining', 'Modular Kitchen', 'Utility Balcony', '1 Parking'],
    highlight: 'Perfect for Growing Families',
  },
  {
    type: '3+1 BHK',
    title: 'Premium Residences',
    size: '2,200 - 2,500 Sq. Ft.',
    features: ['3 Bedrooms + Study', '4 Bathrooms', 'Large Living Area', 'Premium Kitchen', 'Servant Quarter', '2 Parking'],
    highlight: 'Ideal for Professionals',
    featured: true,
  },
  {
    type: '4+1 BHK',
    title: 'Ultra Luxury Residences',
    size: '3,000 - 3,500 Sq. Ft.',
    features: ['4 Bedrooms + Study', '5 Bathrooms', 'Private Lounge', 'Italian Kitchen', 'Servant Quarter', '2 Parking'],
    highlight: 'The Pinnacle of Luxury',
  },
];

const ConfigurationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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

        {/* Configuration Cards - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
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

                {/* Title & Size */}
                <h3 className="font-serif text-lg md:text-2xl mb-1.5 md:mb-2">{config.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-6 text-sm">
                  <Maximize className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  <span>{config.size}</span>
                </div>

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

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-2.5 md:py-3 rounded-sm font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                    config.featured
                      ? 'btn-luxury w-full'
                      : 'border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Request Details
                </a>
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
    </section>
  );
};

export default ConfigurationsSection;
