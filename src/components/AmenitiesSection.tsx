import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Waves, TreeDeciduous, Dumbbell, Users, 
  Baby, Shield, Zap, Car, Wine, 
  Gamepad2, BookOpen, Heart
} from 'lucide-react';
import clubhouseImage from '@/assets/amenity-clubhouse.jpg';
import poolImage from '@/assets/amenity-pool.jpg';
import kidsImage from '@/assets/amenity-kids.jpg';
import gardenImage from '@/assets/amenity-garden.jpg';

const amenityCategories = [
  {
    title: 'Lifestyle',
    items: [
      { icon: Wine, name: 'Grand Clubhouse' },
      { icon: Waves, name: 'Infinity Pool' },
      { icon: TreeDeciduous, name: 'Gardens' },
    ],
  },
  {
    title: 'Wellness',
    items: [
      { icon: Dumbbell, name: 'Premium Gym' },
      { icon: Heart, name: 'Yoga Zone' },
      { icon: Waves, name: 'Spa & Sauna' },
    ],
  },
  {
    title: 'Recreation',
    items: [
      { icon: Gamepad2, name: 'Indoor Games' },
      { icon: BookOpen, name: 'Library' },
      { icon: Users, name: 'Party Hall' },
    ],
  },
  {
    title: 'Family',
    items: [
      { icon: Baby, name: 'Kids Play Zone' },
      { icon: TreeDeciduous, name: 'Mini Golf' },
      { icon: Users, name: 'Senior Zone' },
    ],
  },
  {
    title: 'Security',
    items: [
      { icon: Shield, name: '24/7 Security' },
      { icon: Zap, name: 'Power Backup' },
      { icon: Car, name: 'Smart Parking' },
    ],
  },
];

const featuredAmenities = [
  { image: clubhouseImage, title: 'Grand Clubhouse', desc: 'Crystal chandeliers meet contemporary design' },
  { image: poolImage, title: 'Infinity Pool', desc: 'Rooftop oasis with panoramic views' },
  { image: gardenImage, title: 'Landscaped Gardens', desc: 'Acres of manicured green spaces' },
  { image: kidsImage, title: 'Kids Play Zone', desc: 'Safe and vibrant play areas' },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="amenities" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-base md:text-lg italic mb-2 md:mb-4">World-Class Amenities</p>
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            The <span className="text-gradient-gold">Crown</span> Experience
          </h2>
          <div className="gold-line max-w-md mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Indulge in an exceptional lifestyle with amenities crafted for the finest.
          </p>
        </motion.div>

        {/* Featured Amenities - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 mb-10 md:mb-16 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {featuredAmenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              className="group relative overflow-hidden rounded-sm luxury-card flex-shrink-0 w-[260px] md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h4 className="font-serif text-lg md:text-xl mb-0.5 md:mb-1">{amenity.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{amenity.desc}</p>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* All Amenities Grid - 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {amenityCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + catIndex * 0.05, duration: 0.6 }}
            >
              <h4 className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2 md:space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 md:gap-3 group cursor-default">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-card flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
