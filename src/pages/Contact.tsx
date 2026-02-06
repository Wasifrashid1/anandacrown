import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import LeadFormModal from '@/components/LeadFormModal';

const budgetOptions = [
  '1 to 2 Crore',
  '2 to 3 Crore',
  '3 to 4 Crore',
  '4 to 5 Crore',
];

const configOptions = [
  '3 BHK',
  '3+1 BHK',
  '4+1 BHK',
  '5+1 BHK',
];

const Contact = () => {
  const { toast } = useToast();
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    flatType: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';
  const directWhatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello, I am interested in Ananda Crown Mohali. Please share details.')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({ title: 'Name is required', description: 'Please enter your full name.', variant: 'destructive' });
      return;
    }

    if (!formData.phone.trim()) {
      toast({ title: 'Phone is required', description: 'Please enter your mobile number.', variant: 'destructive' });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      toast({ title: 'Invalid Phone Number', description: 'Please enter a valid 10-digit Indian mobile number.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    const message = `New Site Visit Enquiry – Ananda Crown Mohali

Name: ${formData.name.trim()}
Mobile: ${formData.phone.trim()}
City: ${formData.city.trim() || 'Not specified'}
Interested In: ${formData.flatType || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast({ title: '✓ Request Submitted!', description: 'Opening WhatsApp now...' });
    setFormData({ name: '', phone: '', city: '', flatType: '', budget: '' });
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
    }, 300);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ananda Crown Mohali",
    "description": "Contact Ananda Crown Mohali sales team for site visit, pricing, and enquiries",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Ananda Crown Mohali",
      "telephone": "+91-9779799705",
      "email": "sales@anandacrown.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 78",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "140308",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ananda Crown Mohali Sector 78 Enquiry</title>
        <meta 
          name="description" 
          content="Contact Ananda Crown Mohali for site visit, pricing details & enquiries. Call +91 97797 99705 or fill the form. Located in Sector 78 Mohali." 
        />
        <meta name="keywords" content="Ananda Crown contact, Mohali apartment enquiry, Sector 78 site visit, Ananda Crown phone number" />
        <link rel="canonical" href="/contact" />
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
                <p className="text-primary font-display text-base md:text-lg italic mb-2">Get in Touch</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                  Contact <span className="text-gradient-gold">Us</span>
                </h1>
                <div className="gold-line max-w-md mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Schedule a site visit or enquire about <Link to="/" className="text-primary hover:underline">Ananda Crown Mohali</Link>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Grid */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Contact Info */}
                <motion.div
                  className="lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="luxury-card p-6 md:p-8">
                    <h2 className="font-serif text-xl md:text-2xl mb-6">Contact Information</h2>
                    
                    <div className="space-y-5">
                      <a href="tel:+919779799705" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Call Us</p>
                          <p className="font-medium group-hover:text-primary transition-colors">+91 97797 99705</p>
                        </div>
                      </a>

                      <a href={directWhatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-sm bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">WhatsApp</p>
                          <p className="font-medium group-hover:text-[#25D366] transition-colors">Chat with us</p>
                        </div>
                      </a>

                      <a href="mailto:sales@anandacrown.com" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email Us</p>
                          <p className="font-medium group-hover:text-primary transition-colors">sales@anandacrown.com</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Visit Us</p>
                          <p className="font-medium">Sector 78, SAS Nagar,<br />Mohali, Punjab 140308</p>
                        </div>
                      </div>
                    </div>

                    <div className="gold-line my-6" />

                    <button 
                      onClick={() => setBrochureModalOpen(true)}
                      className="btn-luxury-outline w-full flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Brochure
                    </button>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.div
                  className="lg:col-span-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="luxury-card p-6 md:p-8">
                    <h2 className="font-serif text-xl md:text-2xl mb-6">Schedule a Site Visit</h2>

                    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                          autoComplete="name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                          placeholder="Enter 10-digit mobile"
                          autoComplete="tel"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm text-muted-foreground mb-2">City</label>
                        <input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                          placeholder="Enter your city"
                          autoComplete="address-level2"
                        />
                      </div>

                      <div>
                        <label htmlFor="flatType" className="block text-sm text-muted-foreground mb-2">Flat Type</label>
                        <select
                          id="flatType"
                          value={formData.flatType}
                          onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                          className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select flat type</option>
                          {configOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm text-muted-foreground mb-2">Budget Range</label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget</option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury w-full mt-6 flex items-center justify-center gap-2 py-4 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-6">Explore Ananda Crown</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/floor-plans" className="text-primary hover:underline text-sm">Floor Plans</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/amenities" className="text-primary hover:underline text-sm">Amenities</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/location" className="text-primary hover:underline text-sm">Location</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/pricing" className="text-primary hover:underline text-sm">Pricing</Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>

      <LeadFormModal 
        isOpen={brochureModalOpen} 
        onClose={() => setBrochureModalOpen(false)} 
        type="download-brochure"
      />
    </>
  );
};

export default Contact;
