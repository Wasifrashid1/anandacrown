import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, GraduationCap, Building2, Hospital, ShoppingBag, MapPin } from 'lucide-react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';

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

const Location = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Ananda Crown Mohali - Sector 78",
    "description": "Ultra luxury apartments strategically located in Sector 78, Mohali with excellent connectivity to Airport, IT Hub, and Chandigarh",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 78",
      "addressLocality": "SAS Nagar, Mohali",
      "addressRegion": "Punjab",
      "postalCode": "140308",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.7051",
      "longitude": "76.6901"
    }
  };

  return (
    <>
      <Helmet>
        <title>Location Advantages | Ananda Crown Sector 78 Mohali</title>
        <meta 
          name="description" 
          content="Discover the strategic location of Ananda Crown in Sector 78 Mohali - near Airport Road, IT Hub, top schools & hospitals. Perfect connectivity." 
        />
        <meta name="keywords" content="Ananda Crown location, Sector 78 Mohali, Mohali Airport Road, IT Hub Mohali apartments" />
        <link rel="canonical" href="/location" />
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
                <p className="text-primary font-display text-base md:text-lg italic mb-2">Strategic Location</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  The Heart of <span className="text-gradient-gold">Mohali</span>
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Sector 78, Mohali — Perfectly positioned for connectivity, convenience, and an elevated urban lifestyle at <Link to="/" className="text-primary hover:underline">Ananda Crown</Link>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Map & Advantages */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Map */}
                <motion.div
                  className="relative rounded-sm overflow-hidden luxury-card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
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
                      title="Ananda Crown Location Sector 78 Mohali"
                    />
                  </div>
                  <div className="absolute inset-4 border border-primary/30 rounded-sm pointer-events-none" />
                </motion.div>

                {/* Advantages Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl mb-6">Location Advantages</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {locationAdvantages.map((advantage, index) => (
                      <motion.div
                        key={advantage.title}
                        className="luxury-card p-6 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <advantage.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-serif text-lg">{advantage.title}</h3>
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
                </motion.div>
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="py-12 md:py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-2">Ananda Crown</h2>
                <p className="text-muted-foreground mb-8">Sector 78, SAS Nagar, Mohali, Punjab 140308</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/#contact" className="btn-luxury">
                    Schedule Site Visit
                  </Link>
                  <a 
                    href="https://wa.me/9779799705?text=Hello%2C%20I%20am%20interested%20in%20Ananda%20Crown%20Mohali.%20Please%20share%20location%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-outline"
                  >
                    Get Directions on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-6">Explore More</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/floor-plans" className="text-primary hover:underline text-sm">View Floor Plans</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/amenities" className="text-primary hover:underline text-sm">Explore Amenities</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/pricing" className="text-primary hover:underline text-sm">Check Pricing</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/blog" className="text-primary hover:underline text-sm">Read Our Blog</Link>
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

export default Location;
