import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BedDouble, Maximize, Bath, Car } from 'lucide-react';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="configurations" className="py-24 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">Exclusive Configurations</p>
          <h2 className="section-heading mb-6">
            Choose Your <span className="text-gradient-gold">Crown</span>
          </h2>
          <div className="gold-line max-w-md mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each residence is meticulously designed to offer spacious layouts, 
            premium finishes, and breathtaking views of the Mohali skyline.
          </p>
        </motion.div>

        {/* Configuration Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {configurations.map((config, index) => (
            <motion.div
              key={config.type}
              className={`luxury-card group ${
                config.featured ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {config.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-gold text-primary-foreground text-center py-2 text-xs font-medium uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${config.featured ? 'pt-12' : ''}`}>
                {/* Type Badge */}
                <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-sm mb-4">
                  <span className="text-primary font-medium">{config.type}</span>
                </div>

                {/* Title & Size */}
                <h3 className="font-serif text-2xl mb-2">{config.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Maximize className="w-4 h-4 text-primary" />
                  <span>{config.size}</span>
                </div>

                {/* Highlight */}
                <p className="text-sm text-primary/80 italic mb-6">"{config.highlight}"</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {config.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-sm font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
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
      </div>
    </section>
  );
};

export default ConfigurationsSection;
