import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Plane, GraduationCap, Building2, 
  Hospital, ShoppingBag, MapPin 
} from 'lucide-react';

const locationAdvantages = [
  {
    icon: Plane,
    title: 'Airport',
    distance: '15 mins',
    description: 'Chandigarh International Airport',
  },
  {
    icon: GraduationCap,
    title: 'Top Schools',
    distance: '5-10 mins',
    description: 'DPS, Oakridge, GEMS',
  },
  {
    icon: Building2,
    title: 'IT Hub',
    distance: '10 mins',
    description: 'Mohali IT Park & Business Centers',
  },
  {
    icon: Hospital,
    title: 'Hospitals',
    distance: '10 mins',
    description: 'Fortis, Max, PGIMER nearby',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
    distance: '5 mins',
    description: 'Premium Malls & Markets',
  },
  {
    icon: MapPin,
    title: 'Chandigarh',
    distance: '20 mins',
    description: 'City Center & Sector 17',
  },
];

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">Strategic Location</p>
          <h2 className="section-heading mb-6">
            The Heart of <span className="text-gradient-gold">Mohali</span>
          </h2>
          <div className="gold-line max-w-md mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sector 78, Mohali — Perfectly positioned for connectivity, convenience, and an elevated urban lifestyle. <a href="/location" className="text-primary hover:underline">Explore full location details</a>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            className="relative rounded-sm overflow-hidden luxury-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13718.193427458044!2d76.69016!3d30.7051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef0c8b3d4f9%3A0x7b7f3f3f3f3f3f3f!2sSector%2078%2C%20Mohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) contrast(1.1) brightness(0.8) sepia(30%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ananda Crown Location"
              />
            </div>

            {/* Location Pin Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
              </motion.div>
            </div>

            {/* Gold Frame */}
            <div className="absolute inset-4 border border-primary/30 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Advantages Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {locationAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  className="luxury-card p-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-lg">{advantage.title}</h4>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">
                          {advantage.distance}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Address Box */}
            <motion.div
              className="mt-8 p-6 glass rounded-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Ananda Crown</h4>
                  <p className="text-muted-foreground">Sector 78, SAS Nagar, Mohali, Punjab 140308</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
