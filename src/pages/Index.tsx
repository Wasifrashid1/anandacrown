import { Helmet } from 'react-helmet-async';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConfigurationsSection from '@/components/ConfigurationsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import AutoPopupLeadForm from '@/components/AutoPopupLeadForm';

// Organization and RealEstateProject Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ananda Crown Mohali",
  "url": "https://anandacrownmohali.com",
  "logo": "https://anandacrownmohali.com/favicon.png",
  "description": "Ultra Luxury High-Rise Residences in Sector 78, Mohali - 20+ Years of Construction Excellence",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 78",
    "addressLocality": "Mohali",
    "addressRegion": "Punjab",
    "postalCode": "140308",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9779799705",
    "contactType": "sales",
    "email": "sales@anandacrown.com"
  },
  "sameAs": []
};

const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateProject",
  "name": "Ananda Crown Mohali",
  "description": "Ultra luxury 3 BHK, 3+1 BHK, 4 BHK and 5 BHK apartments in Sector 78 Mohali with world-class amenities",
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

const Index = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(realEstateSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden scrollbar-luxury">
        {/* Cursor Glow Effect */}
        <CursorGlow />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ConfigurationsSection />
          <AmenitiesSection />
          <GallerySection />
          <LocationSection />
          <TrustSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Mobile Sticky CTA Bar */}
        <MobileStickyBar />

        {/* Auto Popup Lead Form - Opens after 4 seconds, once per session */}
        <AutoPopupLeadForm />
      </div>
    </>
  );
};

export default Index;
