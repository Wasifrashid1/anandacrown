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
      { icon: Wine, name: 'Grand Clubhouse', image: clubhouseImage },
      { icon: Waves, name: 'Infinity Pool', image: poolImage },
      { icon: TreeDeciduous, name: 'Landscaped Gardens', image: gardenImage },
    ],
  },
  {
    title: 'Wellness',
    items: [
      { icon: Dumbbell, name: 'Premium Gym' },
      { icon: Heart, name: 'Yoga & Meditation' },
      { icon: Waves, name: 'Spa & Sauna' },
    ],
  },
  {
    title: 'Recreation',
    items: [
      { icon: Gamepad2, name: 'Indoor Games' },
      { icon: BookOpen, name: 'Library Lounge' },
      { icon: Users, name: 'Party Hall' },
    ],
  },
  {
    title: 'Family',
    items: [
      { icon: Baby, name: 'Kids Play Zone', image: kidsImage },
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">World-Class Amenities</p>
          <h2 className="section-heading mb-6">
            The <span className="text-gradient-gold">Crown</span> Experience
          </h2>
          <div className="gold-line max-w-md mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Indulge in an exceptional lifestyle with amenities crafted for those who expect nothing but the finest.
          </p>
        </motion.div>

        {/* Featured Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredAmenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              className="group relative overflow-hidden rounded-sm luxury-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-serif text-xl mb-1">{amenity.title}</h4>
                <p className="text-sm text-muted-foreground">{amenity.desc}</p>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* All Amenities Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenityCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + catIndex * 0.1, duration: 0.6 }}
            >
              <h4 className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 rounded-sm bg-card flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
