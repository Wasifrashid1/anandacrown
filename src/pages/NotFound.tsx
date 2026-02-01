import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Phone, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const phoneNumber = '9779799705';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello, I am interested in Ananda Crown Mohali. Please share details.')}`;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Ananda Crown Mohali - Luxury Apartments Sector 78</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore Ananda Crown Mohali - Ultra luxury 3, 4 & 5 BHK apartments in Sector 78, Mohali." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          {/* Brand Logo */}
          <div className="font-serif text-2xl tracking-wider mb-8">
            <span className="text-gradient-gold font-medium">ANANDA CROWN</span>
          </div>
          
          {/* 404 Display */}
          <h1 className="text-7xl md:text-9xl font-serif text-gradient-gold mb-4">404</h1>
          
          <h2 className="text-xl md:text-2xl font-serif mb-4 text-foreground">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            The page you're looking for doesn't exist or has been moved. 
            Explore our luxury residences in Sector 78, Mohali.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn-luxury flex items-center justify-center gap-2 px-6 py-3"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] hover:bg-[#22c55e] text-white font-medium tracking-wider uppercase text-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>
          
          {/* Back Link */}
          <button 
            onClick={() => window.history.back()}
            className="mt-8 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          
          {/* Trust Badge */}
          <div className="mt-12 p-4 bg-card/50 border border-border rounded-sm inline-block">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-medium">20+ Years</span> of Construction Excellence
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
