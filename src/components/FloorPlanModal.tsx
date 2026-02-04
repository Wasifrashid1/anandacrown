import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronLeft, ChevronRight, ArrowLeft, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanIndex?: number;
}

// Floor plans with external URLs - dynamically scalable
const floorPlans = [
  {
    type: '3 BHK',
    size: '2425 Sq. Ft.',
    image: 'https://image2url.com/r2/default/images/1770094244865-abdd8e44-9177-4c6a-af44-ecf1c039b161.jpeg',
    altText: 'Ananda Crown Mohali 3 BHK Floor Plan Sector 78 Luxury Apartment Layout 2425 sq ft',
  },
  {
    type: '3+1 BHK',
    size: '2750 Sq. Ft.',
    image: 'https://image2url.com/r2/default/images/1770094244865-abdd8e44-9177-4c6a-af44-ecf1c039b161.jpeg',
    altText: 'Ananda Crown Mohali 3+1 BHK Floor Plan 2750 Sq Ft Luxury Apartment Sector 78',
  },
  {
    type: '4 BHK',
    size: '3250 Sq. Ft.',
    image: 'https://image2url.com/r2/default/images/1770094285453-b8b6c281-bfee-4759-9227-8bb7dfbbb6ba.jpeg',
    altText: 'Ananda Crown Mohali 4 BHK Floor Plan 3250 Sq Ft Premium Apartment Sector 78',
  },
  {
    type: '5 BHK',
    size: '4100 Sq. Ft.',
    image: 'https://image2url.com/r2/default/images/1770094320543-f30289e5-e019-4efc-85e3-ac72c24c81fd.jpeg',
    altText: 'Ananda Crown Mohali 5 BHK Floor Plan 4100 Sq Ft Penthouse Layout Sector 78',
  },
];

// Site Plan
const sitePlan = {
  title: 'Site Plan',
  image: 'https://image2url.com/r2/default/images/1770094566616-cd7d6c7e-4e77-4b89-ae84-53d4173587a6.png',
  altText: 'Ananda Crown Mohali Site Plan Layout Sector 78',
};

const FloorPlanModal = ({ isOpen, onClose, initialPlanIndex = 0 }: FloorPlanModalProps) => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(initialPlanIndex);
  const [showSitePlan, setShowSitePlan] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    flatType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';

  // Reset state when modal opens and lock body scroll
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialPlanIndex);
      setShowSitePlan(false);
      setFormData(prev => ({
        ...prev,
        flatType: floorPlans[initialPlanIndex]?.type || '3 BHK'
      }));
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialPlanIndex]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? floorPlans.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setFormData(prev => ({
      ...prev,
      flatType: floorPlans[newIndex]?.type || ''
    }));
  };

  const handleNext = () => {
    const newIndex = currentIndex === floorPlans.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setFormData(prev => ({
      ...prev,
      flatType: floorPlans[newIndex]?.type || ''
    }));
  };

  const handleSelectPlan = (index: number) => {
    setCurrentIndex(index);
    setFormData(prev => ({
      ...prev,
      flatType: floorPlans[index]?.type || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Please fill all required fields',
        description: 'Name and Mobile Number are required.',
        variant: 'destructive',
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: 'Invalid Mobile Number',
        description: 'Please enter a valid 10-digit Indian mobile number.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const currentPlan = floorPlans[currentIndex];
    const unitType = formData.flatType || currentPlan.type;
    
    // WhatsApp message in EXACT required format
    const message = `Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Unit Type: ${unitType}
Message: Interested in Floor Plan`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast({
      title: '✓ Request Submitted!',
      description: 'Opening WhatsApp now...',
    });

    setFormData({ name: '', phone: '', flatType: '' });
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 300);
  };

  const currentPlan = floorPlans[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Header with Back Button - Fixed at top */}
          <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-card/90 shrink-0">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={onClose}
                className="p-2 rounded-sm hover:bg-accent transition-colors flex items-center gap-1.5 text-sm font-medium"
                aria-label="Go back"
                type="button"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div>
                <h2 className="font-serif text-base md:text-xl text-gradient-gold">
                  {showSitePlan ? 'Site Plan' : `${currentPlan.type} Floor Plan`}
                </h2>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {showSitePlan ? 'Ananda Crown Sector 78 Mohali' : `${currentPlan.size} | Ananda Crown`}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-sm hover:bg-accent transition-colors"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Site Plan Toggle */}
          <div className="flex justify-center py-2 border-b border-border/50 bg-card/50 shrink-0">
            <button
              onClick={() => setShowSitePlan(!showSitePlan)}
              className={`px-3 py-1.5 text-xs md:text-sm rounded-sm transition-all flex items-center gap-1.5 ${
                showSitePlan
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20'
              }`}
              type="button"
            >
              <MapPin className="w-3.5 h-3.5" />
              {showSitePlan ? 'View Floor Plans' : 'View Site Plan'}
            </button>
          </div>

          {/* Image Container - Fills remaining space, NO SCROLL */}
          <div className="flex-1 flex items-center justify-center p-2 md:p-4 overflow-hidden relative min-h-0">
            {showSitePlan ? (
              <img
                src={sitePlan.image}
                alt={sitePlan.altText}
                title={sitePlan.altText}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            ) : (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-1 md:left-3 z-10 p-1.5 md:p-2 bg-background/90 rounded-full hover:bg-primary/20 transition-colors shadow-md"
                  aria-label="Previous floor plan"
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <img
                  src={currentPlan.image}
                  alt={currentPlan.altText}
                  title={currentPlan.altText}
                  className="max-w-full max-h-full object-contain"
                  loading="eager"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-1 md:right-3 z-10 p-1.5 md:p-2 bg-background/90 rounded-full hover:bg-primary/20 transition-colors shadow-md"
                  aria-label="Next floor plan"
                  type="button"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Plan Type Selector - Only when not showing site plan */}
          {!showSitePlan && (
            <div className="flex justify-center gap-1 md:gap-1.5 py-2 border-t border-border/50 bg-card/50 shrink-0">
              {floorPlans.map((plan, index) => (
                <button
                  key={plan.type}
                  onClick={() => handleSelectPlan(index)}
                  className={`px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-sm transition-all ${
                    index === currentIndex
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/20'
                  }`}
                  type="button"
                >
                  {plan.type}
                </button>
              ))}
            </div>
          )}

          {/* Lead Capture Form - Fixed at bottom */}
          <div className="p-3 md:p-4 border-t border-border bg-card shrink-0">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <h3 className="font-serif text-sm md:text-base mb-2 text-center">
                Request Details for {showSitePlan ? 'Site Plan' : currentPlan.type}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* Name */}
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-2.5 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                  placeholder="Name *"
                  autoComplete="name"
                />

                {/* Mobile Number */}
                <input
                  type="tel"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-2.5 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                  placeholder="Mobile *"
                  autoComplete="tel"
                />

                {/* Unit Type - Auto-selected */}
                <select
                  value={formData.flatType}
                  onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                  className="w-full px-2.5 py-2 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm"
                >
                  <option value="3 BHK">3 BHK</option>
                  <option value="3+1 BHK">3+1 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                  <option value="5 BHK">5 BHK</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full flex items-center justify-center gap-2 py-2.5 mt-2 disabled:opacity-50 text-sm"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Request Details via WhatsApp'}
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloorPlanModal;
