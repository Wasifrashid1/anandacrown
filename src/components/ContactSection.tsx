import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LeadFormModal from './LeadFormModal';

const budgetOptions = [
  '₹1-2 Cr',
  '₹2-3 Cr',
  '₹3-4 Cr',
  '₹4 Cr+',
];

const configOptions = [
  '3 BHK – 2425 sq.ft.',
  '3+1 BHK – 2750 sq.ft.',
  '4 BHK – 3250 sq.ft.',
  '5 BHK – 4100 sq.ft.',
];

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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

  // Listen for scroll-to-contact event (for Book Site Visit, Download Brochure, etc.)
  useEffect(() => {
    const handleScrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Focus on first input after scroll
        setTimeout(() => {
          const nameInput = document.getElementById('contact-name');
          nameInput?.focus();
        }, 800);
      }
    };

    window.addEventListener('scrollToContact', handleScrollToContact);
    return () => window.removeEventListener('scrollToContact', handleScrollToContact);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Please fill required fields',
        description: 'Name and Phone are required.',
        variant: 'destructive',
      });
      return;
    }

    // Validate phone (basic India validation)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit Indian mobile number.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message with form data - using specified format
    const message = `Hello, I want to book a site visit.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
City: ${formData.city.trim() || 'Not specified'}
Flat Type: ${formData.flatType || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    // Direct wa.me link - no API, works everywhere
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Clear form
    setFormData({ name: '', phone: '', city: '', flatType: '', budget: '' });
    
    // Redirect to WhatsApp silently
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
    }, 300);
  };

  const directWhatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello, I am interested in Ananda Crown Mohali. Please share details.')}`;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card/30 relative pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-base md:text-lg italic mb-2 md:mb-4">Begin Your Journey</p>
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Register Your <span className="text-gradient-gold">Interest</span>
          </h2>
          <div className="gold-line max-w-md mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Take the first step towards owning your dream home at Ananda Crown.
          </p>
          {/* Scarcity Text */}
          <p className="text-primary font-medium text-sm mt-4 animate-pulse">
            ⭐ Limited Inventory Available – Units Selling Fast
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-card p-5 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6">Get in Touch</h3>
              
              <div className="space-y-4 md:space-y-6">
                <a
                  href="tel:+919779799705"
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Call Us</p>
                    <p className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                      +91 97797 99705
                    </p>
                  </div>
                </a>

                {/* WhatsApp - Direct Link */}
                <a
                  href={directWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-sm md:text-base group-hover:text-[#25D366] transition-colors">
                      Chat with us
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sales@anandacrown.com"
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Email Us</p>
                    <p className="font-medium text-sm md:text-base group-hover:text-primary transition-colors break-all">
                      sales@anandacrown.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-medium text-sm md:text-base">
                      Sector 78, SAS Nagar,<br />
                      Mohali, Punjab 140308
                    </p>
                  </div>
                </div>
              </div>

              <div className="gold-line my-6 md:my-8" />

              {/* Download Brochure */}
              <button 
                onClick={() => setBrochureModalOpen(true)}
                className="btn-luxury-outline w-full flex items-center justify-center gap-2 text-sm py-3"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { value: '20+', label: 'Years Excellence' },
                { value: '5000+', label: 'Happy Families' },
                { value: 'A+', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 md:p-4 glass rounded-sm">
                  <p className="text-lg md:text-2xl font-serif text-gradient-gold">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Investment Angle */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-sm">
              <p className="text-xs md:text-sm text-foreground/80 text-center">
                📈 <span className="font-medium text-primary">High Appreciation Zone</span> – IT Growth Belt
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="luxury-card p-5 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6">Schedule a Visit</h3>

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                {/* Name */}
                <div className="md:col-span-2">
                  <label htmlFor="contact-name" className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="contact-city" className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    City *
                  </label>
                  <input
                    id="contact-city"
                    type="text"
                    required
                    maxLength={50}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Enter your city"
                  />
                </div>

                {/* Flat Type */}
                <div>
                  <label htmlFor="contact-flat" className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Flat Type *
                  </label>
                  <select
                    id="contact-flat"
                    required
                    value={formData.flatType}
                    onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm md:text-base"
                  >
                    <option value="">Select flat type</option>
                    {configOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="contact-budget" className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="contact-budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm md:text-base"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full mt-6 md:mt-8 flex items-center justify-center gap-2 py-3 md:py-4 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>

              <p className="text-[10px] md:text-xs text-muted-foreground text-center mt-3 md:mt-4">
                By submitting, you agree to our privacy policy. Your information is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Download Brochure Modal */}
      <LeadFormModal 
        isOpen={brochureModalOpen} 
        onClose={() => setBrochureModalOpen(false)} 
        type="download-brochure"
      />
    </section>
  );
};

export default ContactSection;
