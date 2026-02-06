import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Waves, TreeDeciduous, Dumbbell, Users, Baby, Shield, Zap, Car, Wine, Gamepad2, BookOpen, Heart } from 'lucide-react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
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

const Amenities = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Ananda Crown Mohali Amenities",
    "description": "World-class amenities including clubhouse, swimming pool, gym, landscaped gardens, and 24/7 security at Ananda Crown Sector 78 Mohali",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 78",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "postalCode": "140308",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <Helmet>
        <title>Amenities at Ananda Crown Mohali | Luxury Living Sector 78</title>
        <meta 
          name="description" 
          content="Explore world-class amenities at Ananda Crown Mohali - clubhouse, infinity pool, gym, landscaped gardens, kids zone & 24/7 security in Sector 78." 
        />
        <meta name="keywords" content="Ananda Crown amenities, luxury amenities Mohali, clubhouse Sector 78, swimming pool Mohali apartments" />
        <link rel="canonical" href="/amenities" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden scrollbar-luxury">
        <CursorGlow />
        <Navbar />

        <main className="pt-20 pb-16">
          {/* Header */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary font-display text-base md:text-lg italic mb-2">World-Class Amenities</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  The <span className="text-gradient-gold">Crown</span> Experience
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Indulge in an exceptional lifestyle with amenities crafted for the finest living at <Link to="/" className="text-primary hover:underline">Ananda Crown Mohali</Link>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Amenities */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Featured Amenities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.title}
                    className="group relative overflow-hidden rounded-sm luxury-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={amenity.image}
                        alt={`${amenity.title} at Ananda Crown Mohali Sector 78`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="font-serif text-lg md:text-xl mb-1">{amenity.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{amenity.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* All Amenities */}
          <section className="py-12 md:py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Complete Amenities List</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {amenityCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + catIndex * 0.05, duration: 0.6 }}
                  >
                    <h3 className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                      {category.title}
                    </h3>
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

          {/* CTA Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-4">Experience Luxury Living</h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Schedule a site visit to experience our world-class amenities at <Link to="/floor-plans" className="text-primary hover:underline">Ananda Crown</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="btn-luxury">
                  Schedule Site Visit
                </Link>
                <Link to="/floor-plans" className="btn-luxury-outline">
                  View Floor Plans
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default Amenities;
