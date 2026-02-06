import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Maximize, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';

const configurations = [
  {
    type: '3 BHK',
    size: '2425 Sq. Ft.',
    booking: '₹20L Booking',
    status: 'AVAILABLE',
    features: ['3 Bedrooms', '3 Bathrooms', 'Living & Dining', 'Modular Kitchen', 'Utility Balcony', '1 Parking'],
  },
  {
    type: '3+1 BHK',
    size: '2750 Sq. Ft.',
    booking: '₹25L Booking',
    status: 'AVAILABLE',
    features: ['3 Bedrooms + Study', '4 Bathrooms', 'Large Living Area', 'Premium Kitchen', 'Servant Quarter', '2 Parking'],
    featured: true,
  },
  {
    type: '4 BHK',
    size: '3250 Sq. Ft.',
    booking: '₹25L Booking',
    status: 'AVAILABLE',
    features: ['4 Bedrooms', '4 Bathrooms', 'Private Lounge', 'Italian Kitchen', 'Servant Quarter', '2 Parking'],
  },
  {
    type: '5 BHK',
    size: '4100 Sq. Ft.',
    booking: '₹40L Booking',
    status: 'AVAILABLE',
    features: ['5 Bedrooms', '5 Bathrooms', 'Family Lounge', 'Premium Kitchen', 'Multiple Balconies', '2 Parking'],
  },
];

const Pricing = () => {
  const phoneNumber = '9779799705';

  const handleRequestPricing = (configType: string) => {
    const message = `Hello, I want to request pricing details for ${configType} at Ananda Crown Mohali. Please share complete price breakdown.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ananda Crown Mohali Luxury Apartments",
    "description": "Ultra luxury 3 BHK, 3+1 BHK, 4 BHK, and 5 BHK apartments in Sector 78 Mohali with premium amenities",
    "brand": {
      "@type": "Brand",
      "name": "Ananda Crown"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15000000",
      "highPrice": "50000000",
      "offerCount": "4"
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Investment | Ananda Crown Mohali Sector 78</title>
        <meta 
          name="description" 
          content="Check pricing for 3 BHK, 3+1 BHK, 4 BHK & 5 BHK luxury apartments at Ananda Crown Mohali. Flexible payment plans with only 25% on RERA approval." 
        />
        <meta name="keywords" content="Ananda Crown price, Mohali apartment price, 3 BHK price Mohali, 4 BHK price Sector 78, luxury flats pricing" />
        <link rel="canonical" href="/pricing" />
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
                <p className="text-primary font-display text-base md:text-lg italic mb-2">Investment Opportunity</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  Pricing & <span className="text-gradient-gold">Payment Plans</span>
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Flexible payment options designed for smart investors at <Link to="/" className="text-primary hover:underline">Ananda Crown Mohali</Link>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Pre-Launch Notice */}
          <section className="py-4">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                className="flex items-center justify-center gap-2 p-4 bg-primary/10 border border-primary/30 rounded-sm max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-foreground/90 text-center">
                  <span className="font-medium text-primary">Pre-Launch Phase</span> – Early booking benefits available. Prices may vary upon RERA approval.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Payment Plan */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                className="luxury-card p-6 md:p-8 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-xl md:text-2xl mb-6 flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  <span className="text-gradient-gold">Flexible Payment Plan</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-sm flex-1 max-w-xs">
                    <p className="text-2xl md:text-3xl font-serif text-primary mb-2">25%</p>
                    <p className="text-sm md:text-base text-muted-foreground">on RERA Approval</p>
                  </div>
                  <div className="p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-sm flex-1 max-w-xs">
                    <p className="text-2xl md:text-3xl font-serif text-primary mb-2">75%</p>
                    <p className="text-sm md:text-base text-muted-foreground">Construction-Linked Plan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-8 md:py-12 bg-card/30">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Available Configurations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {configurations.map((config, index) => (
                  <motion.div
                    key={config.type}
                    className={`luxury-card ${config.featured ? 'ring-2 ring-primary/50' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {config.featured && (
                      <div className="bg-gradient-gold text-primary-foreground text-center py-2 text-xs font-medium uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-sm mb-3">
                        <span className="text-primary font-medium">{config.type}</span>
                      </div>
                      <div className="inline-block ml-2 px-2 py-0.5 rounded-sm text-xs font-medium bg-green-500/20 text-green-400">
                        {config.status}
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground mb-2 text-sm mt-3">
                        <Maximize className="w-4 h-4 text-primary" />
                        <span>{config.size}</span>
                      </div>
                      <p className="text-primary font-medium text-lg mb-4">{config.booking}</p>

                      <ul className="space-y-2 mb-6">
                        {config.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2">
                        <Link 
                          to="/floor-plans" 
                          className="block w-full text-center py-2.5 rounded-sm font-medium text-xs uppercase tracking-wider border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                        >
                          View Floor Plan
                        </Link>
                        <button
                          onClick={() => handleRequestPricing(config.type)}
                          className="btn-luxury w-full text-sm py-2.5"
                        >
                          Request Price
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Benefits */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Why Invest in Ananda Crown?</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="luxury-card p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg mb-2">High Appreciation</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link to="/location" className="text-primary hover:underline">Sector 78 Mohali</Link> is in the IT growth belt with strong appreciation potential.
                  </p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <CreditCard className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg mb-2">Flexible Payments</h3>
                  <p className="text-sm text-muted-foreground">
                    Pay only 25% now and rest on construction milestones.
                  </p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <AlertCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg mb-2">Pre-Launch Advantage</h3>
                  <p className="text-sm text-muted-foreground">
                    Early investors get best prices before RERA price lock.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-4">Ready to Invest?</h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Get detailed pricing and payment plan customized for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="btn-luxury">
                  Schedule Consultation
                </Link>
                <Link to="/blog" className="btn-luxury-outline">
                  Read Investment Guides
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

export default Pricing;
