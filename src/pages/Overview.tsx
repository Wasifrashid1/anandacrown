import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, Building2, Gem, Shield } from 'lucide-react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import interiorImage from '@/assets/interior-living.jpg';
import heroImage from '@/assets/hero-building.jpg';

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

const Overview = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    "name": "Ananda Crown Mohali",
    "description": "Ultra luxury high-rise residences in Sector 78, Mohali offering 3 BHK, 3+1 BHK, 4 BHK and 5 BHK apartments with world-class amenities",
    "url": "https://anandacrownmohali.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 78",
      "addressLocality": "Mohali",
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
        <title>Project Overview | Ananda Crown Mohali Luxury Apartments</title>
        <meta 
          name="description" 
          content="Ananda Crown Mohali - Ultra luxury high-rise residences in Sector 78. 20+ years of excellence. 3, 3+1, 4 & 5 BHK premium apartments." 
        />
        <meta name="keywords" content="Ananda Crown overview, Mohali luxury project, Sector 78 apartments, ultra luxury flats Mohali" />
        <link rel="canonical" href="/overview" />
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
                <p className="text-primary font-display text-base md:text-lg italic mb-2">The Vision</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  Where Luxury Meets <span className="text-gradient-gold">Legacy</span>
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Ananda Crown Mohali represents the epitome of refined urban living in <Link to="/location" className="text-primary hover:underline">Sector 78, Mohali</Link>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Hero Image */}
          <section className="py-8">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                className="relative overflow-hidden rounded-sm luxury-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={heroImage}
                  alt="Ananda Crown Mohali Exterior View Sector 78"
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-2xl md:text-4xl font-serif text-gradient-gold font-bold">20+</p>
                  <p className="text-sm text-foreground/80">Years of Construction Excellence</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={interiorImage}
                      alt="Ananda Crown Mohali Luxury Interior Living Room"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 border border-primary/20" />
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl mb-6">About the Project</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ananda Crown Mohali represents the epitome of refined urban living. 
                    Crafted for individuals who value elegance, space, and sophistication, 
                    this landmark development redefines luxury in the Tricity region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Every residence is a masterpiece—thoughtfully designed layouts, 
                    premium finishes, and world-class <Link to="/amenities" className="text-primary hover:underline">amenities</Link> converge to create 
                    a living experience unlike any other. This is where your legacy begins.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 md:py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Project Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="luxury-card p-6 text-center">
                  <p className="text-3xl font-serif text-gradient-gold mb-2">4</p>
                  <p className="text-sm text-muted-foreground">Configurations</p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <p className="text-3xl font-serif text-gradient-gold mb-2">2425+</p>
                  <p className="text-sm text-muted-foreground">Sq. Ft. Onwards</p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <p className="text-3xl font-serif text-gradient-gold mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Amenities</p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <p className="text-3xl font-serif text-gradient-gold mb-2">Sector 78</p>
                  <p className="text-sm text-muted-foreground">Prime Location</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-6">Explore Ananda Crown</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/floor-plans" className="btn-luxury">View Floor Plans</Link>
                <Link to="/amenities" className="btn-luxury-outline">Explore Amenities</Link>
                <Link to="/pricing" className="btn-luxury-outline">Check Pricing</Link>
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

export default Overview;
