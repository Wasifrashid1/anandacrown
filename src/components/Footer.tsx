import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Residences', href: '/#configurations' },
  { name: 'Amenities', href: '/#amenities' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Location', href: '/#location' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const Footer = () => {
  const phoneNumber = '919779999705';
  const message = encodeURIComponent('Hello, I am interested in Ananda Crown Mohali. Please share details.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer className="bg-card/50 border-t border-border pb-16 md:pb-0">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="font-serif text-xl tracking-wider mb-4 md:mb-6">
              <span className="text-gradient-gold font-medium">ANANDA CROWN</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Ultra Luxury High-Rise Residences in the heart of Mohali. 
              20+ Years of Construction Excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@anandacrownmohali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-sm bg-card flex items-center justify-center border border-border hover:border-[#25D366] hover:text-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href === '/blog' ? (
                    <Link
                      to={link.href}
                      className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="tel:+919779999705"
                  className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  +91 97799 99705
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@anandacrown.com"
                  className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  sales@anandacrown.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Sector 78, SAS Nagar,<br />
                  Mohali, Punjab 140308
                </span>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Legal</h4>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
              The information provided herein is for general guidance only. 
              All images are for representational purposes. 
              The developer reserves the right to make modifications.
            </p>
            <div className="mt-3 md:mt-4 p-2.5 md:p-3 bg-card rounded-sm border border-border">
              <p className="text-[10px] md:text-xs text-muted-foreground">
                <span className="text-primary font-medium">RERA Registered</span><br />
                Registration in progress
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line my-6 md:my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Ananda Crown Mohali. All Rights Reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
