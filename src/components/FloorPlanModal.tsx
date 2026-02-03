import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronLeft, ChevronRight, ArrowLeft, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanIndex?: number;
}

// Floor plans with external URLs as provided
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

  // Reset index when modal opens with new initialPlanIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialPlanIndex);
      setShowSitePlan(false);
      // Auto-fill flat type based on selected plan
      setFormData(prev => ({
        ...prev,
        flatType: floorPlans[initialPlanIndex]?.type || '3 BHK'
      }));
    }
  }, [isOpen, initialPlanIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
    setFormData(prev => ({
      ...prev,
      flatType: floorPlans[currentIndex === 0 ? floorPlans.length - 1 : currentIndex - 1]?.type || ''
    }));
  };

  const handleNext = () => {
    const nextIndex = currentIndex === floorPlans.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setFormData(prev => ({
      ...prev,
      flatType: floorPlans[nextIndex]?.type || ''
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
    const message = `Hello, I am interested in Floor Plan.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Unit Type: ${formData.flatType || currentPlan.type}

Request: Interested in Floor Plan

Please share details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast({
      title: 'Request Submitted!',
      description: 'Redirecting you to WhatsApp...',
    });

    setFormData({ name: '', phone: '', flatType: '' });
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const currentPlan = floorPlans[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center p-2 md:p-4 bg-background/90 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-card border border-border rounded-sm shadow-2xl my-4 md:my-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header with Back Button */}
            <div className="flex items-center justify-between p-3 md:p-5 border-b border-border bg-card/50 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="p-2 rounded-sm hover:bg-accent transition-colors flex items-center gap-2 text-sm"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">Back</span>
                </button>
                <div>
                  <h2 className="font-serif text-lg md:text-2xl text-gradient-gold">
                    {showSitePlan ? 'Site Plan' : `${currentPlan.type} Floor Plan`}
                  </h2>
                  <p className="text-[10px] md:text-sm text-muted-foreground">
                    {showSitePlan ? 'Ananda Crown Sector 78 Mohali' : `${currentPlan.size} | Ananda Crown Sector 78 Mohali`}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-sm hover:bg-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Site Plan Toggle Button */}
            <div className="flex justify-center py-3 border-b border-border/50 bg-card/30">
              <button
                onClick={() => setShowSitePlan(!showSitePlan)}
                className={`px-4 py-2 text-sm rounded-sm transition-all flex items-center gap-2 ${
                  showSitePlan
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/20'
                }`}
              >
                <MapPin className="w-4 h-4" />
                {showSitePlan ? 'View Floor Plans' : 'View Site Plan'}
              </button>
            </div>

            {showSitePlan ? (
              /* Site Plan View */
              <div className="p-4">
                <div className="flex items-center justify-center bg-background/50 rounded-sm">
                  <img
                    src={sitePlan.image}
                    alt={sitePlan.altText}
                    title={sitePlan.altText}
                    className="max-h-[50vh] md:max-h-[55vh] w-auto object-contain rounded-sm"
                  />
                </div>
              </div>
            ) : (
              /* Floor Plan View */
              <>
                {/* Floor Plan Image - Visible immediately */}
                <div className="relative p-3 md:p-4 flex items-center justify-center bg-background/50">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-1 md:left-4 z-10 p-2 bg-background/80 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Previous floor plan"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  <img
                    src={currentPlan.image}
                    alt={currentPlan.altText}
                    title={currentPlan.altText}
                    className="max-h-[40vh] md:max-h-[50vh] w-auto object-contain rounded-sm"
                  />

                  <button
                    onClick={handleNext}
                    className="absolute right-1 md:right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Next floor plan"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-1.5 md:gap-2 py-2 md:py-3 border-t border-border/50">
                  {floorPlans.map((plan, index) => (
                    <button
                      key={plan.type}
                      onClick={() => handleSelectPlan(index)}
                      className={`px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-sm transition-all ${
                        index === currentIndex
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-primary/20'
                      }`}
                    >
                      {plan.type}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Lead Capture Form - Always visible below image */}
            <div className="p-4 md:p-6 border-t border-border bg-card/50">
              <h3 className="font-serif text-base md:text-lg mb-3 md:mb-4 text-center">
                Request Details for {showSitePlan ? 'Site Plan' : currentPlan.type}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="fp-name" className="block text-xs md:text-sm text-muted-foreground mb-1">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fp-name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="fp-phone" className="block text-xs md:text-sm text-muted-foreground mb-1">
                      Mobile Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fp-phone"
                      type="tel"
                      required
                      maxLength={15}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                      placeholder="10-digit mobile"
                    />
                  </div>

                  {/* Unit Type - Auto-selected */}
                  <div>
                    <label htmlFor="fp-flat" className="block text-xs md:text-sm text-muted-foreground mb-1">
                      Unit Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="fp-flat"
                      required
                      value={formData.flatType}
                      onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm"
                    >
                      <option value="3 BHK">3 BHK</option>
                      <option value="3+1 BHK">3+1 BHK</option>
                      <option value="4 BHK">4 BHK</option>
                      <option value="5 BHK">5 BHK</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury w-full flex items-center justify-center gap-2 py-3 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting...' : 'Request Details via WhatsApp'}
                </button>

                <p className="text-[9px] md:text-[10px] text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. Your information is secure.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloorPlanModal;
