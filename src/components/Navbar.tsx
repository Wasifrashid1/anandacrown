import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Residences', href: '/#configurations' },
  { name: 'Amenities', href: '/#amenities' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Location', href: '/#location' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Handle hash navigation
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        // Same page, just scroll
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark py-2 md:py-3' : 'bg-transparent py-3 md:py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name - Simple Text */}
          <Link to="/" className="font-serif text-lg md:text-xl tracking-wider">
            <span className="text-gradient-gold font-medium">ANANDA CROWN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.href === '/blog' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919779999705"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 97799 99705</span>
            </a>
            <a
              href="/#contact"
              className="btn-luxury text-xs px-4 xl:px-6 py-2.5 xl:py-3"
            >
              Book Visit
            </a>
          </div>

          {/* Mobile CTA + Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+919779999705"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button at top */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-6 p-6">
              {navLinks.map((link, index) => (
                link.href === '/blog' ? (
                  <motion.div key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xl font-serif text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-serif text-foreground hover:text-primary transition-colors py-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              
              <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
                <a
                  href="tel:+919779999705"
                  className="flex items-center justify-center gap-2 py-3 border border-primary/50 rounded-sm text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 97799 99705</span>
                </a>
                <a
                  href="/#contact"
                  className="btn-luxury text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Site Visit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
