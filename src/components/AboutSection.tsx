import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Building2, Gem, Shield } from 'lucide-react';
import interiorImage from '@/assets/interior-living.jpg';

const features = [
  {
    icon: Crown,
    title: 'Royal Living',
    description: 'Experience the pinnacle of luxury with meticulously designed interiors',
  },
  {
    icon: Building2,
    title: 'Premium Architecture',
    description: 'Contemporary design meets timeless elegance in every detail',
  },
  {
    icon: Gem,
    title: 'Rare Finishes',
    description: 'Imported marble, crystal fixtures, and bespoke craftsmanship',
  },
  {
    icon: Shield,
    title: 'Elite Security',
    description: 'Multi-tier security with smart home automation systems',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              hsl(40 50% 57% / 0.1) 50px,
              hsl(40 50% 57% / 0.1) 100px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">The Vision</p>
          <h2 className="section-heading mb-6">
            Where Luxury Meets <span className="text-gradient-gold">Legacy</span>
          </h2>
          <div className="gold-line max-w-md mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={interiorImage}
                alt="Luxury Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
              
              {/* Gold Frame Corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-8 -right-8 glass p-6 rounded-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-4xl font-serif text-gradient-gold font-bold">20+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ananda Crown Mohali represents the epitome of refined urban living. 
              Crafted for individuals who value elegance, space, and sophistication, 
              this landmark development redefines luxury in the Tricity region.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Every residence is a masterpiece—thoughtfully designed layouts, 
              premium finishes, and world-class amenities converge to create 
              a living experience unlike any other. This is where your legacy begins.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
