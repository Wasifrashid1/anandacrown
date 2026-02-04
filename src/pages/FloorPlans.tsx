import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, X, Send, Home, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';

const floorPlanData = [
  {
    type: '3 / 3+1 BHK',
    size: '2425 - 2750 Sq. Ft.',
    description: 'Spacious and well-planned layout designed for modern families, offering optimal room sizes, natural ventilation, and functional living spaces.',
    image: 'https://image2url.com/r2/default/images/1770094244865-abdd8e44-9177-4c6a-af44-ecf1c039b161.jpeg',
    altText: 'Ananda Crown Mohali 3 BHK 3+1 BHK Floor Plan Sector 78 Luxury Apartment Layout',
  },
  {
    type: '4 BHK',
    size: '3250 Sq. Ft.',
    description: 'Premium floor plan with larger bedrooms, expansive living and dining areas, and enhanced privacy for luxury living.',
    image: 'https://image2url.com/r2/default/images/1770094285453-b8b6c281-bfee-4759-9227-8bb7dfbbb6ba.jpeg',
    altText: 'Ananda Crown Mohali 4 BHK Floor Plan 3250 Sq Ft Premium Apartment Sector 78',
  },
  {
    type: '5 BHK',
    size: '4100 Sq. Ft.',
    description: 'Ultra-luxury configuration featuring generous room sizes, multiple balconies, and elite lifestyle planning.',
    image: 'https://image2url.com/r2/default/images/1770094320543-f30289e5-e019-4efc-85e3-ac72c24c81fd.jpeg',
    altText: 'Ananda Crown Mohali 5 BHK Floor Plan 4100 Sq Ft Penthouse Layout Sector 78',
  },
];

const sitePlan = {
  title: 'Site Plan',
  description: 'Comprehensive site layout showing tower placement, amenities, access roads, and open spaces.',
  image: 'https://image2url.com/r2/default/images/1770094566616-cd7d6c7e-4e77-4b89-ae84-53d4173587a6.png',
  altText: 'Ananda Crown Mohali Complete Site Plan Layout Sector 78',
};

const FloorPlans = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; altText: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unitType: '3 BHK',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';

  // Lock body scroll when fullscreen viewer is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const openFullscreen = (image: string, title: string, altText: string, unitType?: string) => {
    setSelectedImage({ image, title, altText });
    if (unitType) {
      setFormData(prev => ({ ...prev, unitType }));
    }
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Please fill all required fields',
        description: 'Name and Mobile Number are required.',
        variant: 'destructive',
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: 'Invalid Mobile Number',
        description: 'Please enter a valid 10-digit Indian mobile number.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const message = `Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Unit Type: ${formData.unitType}
Message: Interested in Floor Plan`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast({
      title: '✓ Request Submitted!',
      description: 'Opening WhatsApp now...',
    });

    setFormData({ name: '', phone: '', unitType: '3 BHK' });
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      closeFullscreen();
    }, 300);
  };

  // JSON-LD Schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ananda Crown Mohali Floor Plans",
    "description": "Floor plans and site plan for Ananda Crown luxury apartments in Sector 78, Mohali",
    "itemListElement": floorPlanData.map((plan, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Accommodation",
        "name": `${plan.type} Floor Plan - Ananda Crown Mohali`,
        "description": plan.description,
        "image": plan.image,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": plan.size.replace(/[^0-9-]/g, ''),
          "unitCode": "FTK"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Floor Plans & Site Plan | Ananda Crown Mohali Sector 78</title>
        <meta 
          name="description" 
          content="Explore detailed floor plans for 3 BHK, 3+1 BHK, 4 BHK, 5 BHK luxury apartments and complete site plan at Ananda Crown Sector 78 Mohali." 
        />
        <meta name="keywords" content="Ananda Crown floor plans, 3 BHK Mohali, 4 BHK Mohali, 5 BHK Mohali, Sector 78 apartments, luxury flats Mohali" />
        <link rel="canonical" href="/floor-plans" />
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
              {/* Back Button */}
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
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  Floor Plans & <span className="text-gradient-gold">Site Plan</span>
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Explore detailed floor layouts and the complete site plan to understand space utilization.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Floor Plans Grid */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {floorPlanData.map((plan, index) => (
                  <motion.div
                    key={plan.type}
                    className="luxury-card overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {/* Image - Clickable */}
                    <div 
                      className="relative aspect-[4/3] cursor-pointer overflow-hidden group"
                      onClick={() => openFullscreen(plan.image, plan.type, plan.altText, plan.type.split(' ')[0] + ' BHK')}
                    >
                      <img
                        src={plan.image}
                        alt={plan.altText}
                        title={plan.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">Click to View Full Screen</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-4 h-4 text-primary" />
                        <h2 className="font-serif text-lg md:text-xl">{plan.type}</h2>
                      </div>
                      <p className="text-xs text-primary mb-3">{plan.size}</p>
                      <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                      <button
                        onClick={() => openFullscreen(plan.image, plan.type, plan.altText, plan.type.split(' ')[0] + ' BHK')}
                        className="btn-luxury-outline w-full text-sm py-2.5"
                      >
                        View Floor Plan
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Site Plan Section */}
          <section className="py-8 md:py-12 bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Grid3X3 className="w-5 h-5 text-primary" />
                  <h2 className="font-serif text-2xl md:text-3xl">Site Plan</h2>
                </div>
                <p className="text-muted-foreground text-sm max-w-xl mx-auto">{sitePlan.description}</p>
              </motion.div>

              <motion.div
                className="max-w-4xl mx-auto luxury-card overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => openFullscreen(sitePlan.image, sitePlan.title, sitePlan.altText)}
              >
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={sitePlan.image}
                    alt={sitePlan.altText}
                    title={sitePlan.altText}
                    className="w-full h-full object-contain bg-background/50 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium">Click to View Full Screen</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h3 className="font-serif text-xl md:text-2xl mb-4">Ready to Explore Your Dream Home?</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Contact our team for personalized floor plan consultation and site visit scheduling.
              </p>
              <Link to="/#contact" className="btn-luxury inline-flex items-center gap-2">
                Schedule Site Visit
              </Link>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />

        {/* Fullscreen Image Viewer */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex flex-col">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-card/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={closeFullscreen}
                  className="p-2 rounded-sm hover:bg-accent transition-colors flex items-center gap-1.5 text-sm font-medium"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <h2 className="font-serif text-base md:text-lg text-gradient-gold">{selectedImage.title}</h2>
              </div>
              <button
                onClick={closeFullscreen}
                className="p-2 rounded-sm hover:bg-accent transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image - Full viewport, no scroll needed */}
            <div className="flex-1 flex items-center justify-center p-3 md:p-4 overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.altText}
                title={selectedImage.altText}
                className="max-w-full max-h-[calc(100vh-220px)] object-contain"
                loading="eager"
              />
            </div>

            {/* Lead Form - Fixed at bottom */}
            <div className="p-3 md:p-4 border-t border-border bg-card">
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <h3 className="font-serif text-sm md:text-base mb-3 text-center">
                  Request Details for {selectedImage.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Name *"
                    autoComplete="name"
                  />
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Mobile *"
                    autoComplete="tel"
                  />
                  <select
                    value={formData.unitType}
                    onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                    className="w-full px-3 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm"
                  >
                    <option value="3 BHK">3 BHK</option>
                    <option value="3+1 BHK">3+1 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                    <option value="5 BHK">5 BHK</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury w-full flex items-center justify-center gap-2 py-2.5 mt-3 disabled:opacity-50 text-sm"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting...' : 'Request Details via WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloorPlans;
