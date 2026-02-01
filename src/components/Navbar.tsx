import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LeadFormModal from './LeadFormModal';

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
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      } else {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleBookVisit = () => {
    setIsOpen(false);
    setModalOpen(true);
  };

  return (
    <>
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919779799705"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91 97797 99705</span>
              </a>
              <button
                onClick={handleBookVisit}
                className="btn-luxury text-xs px-4 xl:px-6 py-2.5 xl:py-3"
              >
                Book Visit
              </button>
            </div>

            {/* Mobile CTA + Menu */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:+919779799705"
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

        {/* Mobile Menu - Slide from Right */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Slide-in Menu */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-background border-l border-border z-50 overflow-y-auto"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                {/* Close button at top */}
                <div className="flex justify-between items-center p-4 border-b border-border">
                  <span className="font-serif text-lg text-gradient-gold">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-foreground p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links - Vertical List */}
                <nav className="p-4">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {link.href === '/blog' ? (
                          <Link
                            to={link.href}
                            className="block py-3 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <button
                            className="block w-full text-left py-3 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-sm transition-colors"
                            onClick={() => handleNavClick(link.href)}
                          >
                            {link.name}
                          </button>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Buttons */}
                <div className="p-4 border-t border-border space-y-3">
                  <a
                    href="tel:+919779799705"
                    className="flex items-center justify-center gap-2 py-3 border border-primary/50 rounded-sm text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 97797 99705</span>
                  </a>
                  <button
                    onClick={handleBookVisit}
                    className="btn-luxury w-full text-center"
                  >
                    Book Site Visit
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type="book-visit"
      />
    </>
  );
};

export default Navbar;
