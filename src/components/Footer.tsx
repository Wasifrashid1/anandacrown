import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import CrownLogo from './CrownLogo';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Residences', href: '#configurations' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <CrownLogo size="md" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Ultra Luxury High-Rise Residences in the heart of Mohali. 
              Experience a lifestyle crafted for those who expect nothing but the finest.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919779799705"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 97797 99705
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@anandacrown.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  sales@anandacrown.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Sector 78, SAS Nagar,<br />
                  Mohali, Punjab 140308
                </span>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-serif text-lg mb-6">Legal</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The information provided herein is for general guidance only. 
              All images are for representational purposes. 
              The developer reserves the right to make modifications without prior notice.
            </p>
            <div className="mt-4 p-3 bg-card rounded-sm border border-border">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">RERA Registered</span><br />
                Registration in progress
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Ananda Crown Mohali. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
