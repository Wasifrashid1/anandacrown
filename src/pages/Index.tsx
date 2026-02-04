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

const Index = () => {
  return (
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
  );
};

export default Index;
