import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const budgetOptions = [
  'Under ₹1.5 Cr',
  '₹1.5 Cr - ₹2 Cr',
  '₹2 Cr - ₹3 Cr',
  'Above ₹3 Cr',
];

const configOptions = ['3 BHK', '3+1 BHK', '4+1 BHK'];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    configuration: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Enquiry Submitted!',
      description: 'Our team will contact you shortly.',
    });
    setFormData({ name: '', phone: '', email: '', budget: '', configuration: '' });
  };

  const phoneNumber = '919779799705';
  const message = encodeURIComponent('Hi, I am interested in Ananda Crown Mohali. Please share more details.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card/30 relative">
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
                  href={whatsappLink}
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
              <button className="btn-luxury-outline w-full flex items-center justify-center gap-2 text-sm py-3">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { value: '20+', label: 'Years' },
                { value: '5000+', label: 'Families' },
                { value: 'A+', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 md:p-4 glass rounded-sm">
                  <p className="text-lg md:text-2xl font-serif text-gradient-gold">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="luxury-card p-5 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6">Schedule a Visit</h3>

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Budget Range
                  </label>
                  <select
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

                {/* Configuration */}
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">
                    Preferred Configuration
                  </label>
                  <select
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm md:text-base"
                  >
                    <option value="">Select configuration</option>
                    {configOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-luxury w-full mt-6 md:mt-8 flex items-center justify-center gap-2 py-3 md:py-4"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>

              <p className="text-[10px] md:text-xs text-muted-foreground text-center mt-3 md:mt-4">
                By submitting, you agree to our privacy policy. Your information is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
