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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">Begin Your Journey</p>
          <h2 className="section-heading mb-6">
            Register Your <span className="text-gradient-gold">Interest</span>
          </h2>
          <div className="gold-line max-w-md mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards owning your dream home at Ananda Crown. 
            Our luxury consultants are ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-card p-8">
              <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <a
                  href="tel:+919779799705"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +91 97797 99705
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sales@anandacrown.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      sales@anandacrown.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-medium">
                      Sector 78, SAS Nagar,<br />
                      Mohali, Punjab 140308
                    </p>
                  </div>
                </div>
              </div>

              <div className="gold-line my-8" />

              {/* Download Brochure */}
              <button className="btn-luxury-outline w-full flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '20+', label: 'Years' },
                { value: '5000+', label: 'Happy Families' },
                { value: 'A+', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 glass rounded-sm">
                  <p className="text-2xl font-serif text-gradient-gold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
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
            <form onSubmit={handleSubmit} className="luxury-card p-8">
              <h3 className="font-serif text-2xl mb-6">Schedule a Visit</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Configuration */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Preferred Configuration
                  </label>
                  <select
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none"
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
                className="btn-luxury w-full mt-8 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our privacy policy. Your information is secure with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
