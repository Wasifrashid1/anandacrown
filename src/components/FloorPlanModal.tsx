import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import floor plans
import floorPlan3BHK from '@/assets/floor-plan-3plus1-2875.jpeg';
import floorPlan3Plus1 from '@/assets/floor-plan-3plus1-2750.jpeg';
import floorPlan4BHK from '@/assets/floor-plan-4bhk.jpeg';
import floorPlan5BHK from '@/assets/floor-plan-5bhk.jpeg';

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanIndex?: number;
}

const floorPlans = [
  {
    type: '3 BHK',
    size: '2425 Sq. Ft.',
    image: floorPlan3BHK,
    altText: 'Ananda Crown Mohali 3 BHK Floor Plan Sector 78 Luxury Apartment Layout 2425 sq ft',
  },
  {
    type: '3+1 BHK',
    size: '2750 Sq. Ft.',
    image: floorPlan3Plus1,
    altText: 'Ananda Crown Mohali 3+1 BHK Floor Plan 2750 Sq Ft Luxury Apartment Sector 78',
  },
  {
    type: '4 BHK',
    size: '3250 Sq. Ft.',
    image: floorPlan4BHK,
    altText: 'Ananda Crown Mohali 4 BHK Floor Plan 3250 Sq Ft Premium Apartment Sector 78',
  },
  {
    type: '5 BHK',
    size: '4100 Sq. Ft.',
    image: floorPlan5BHK,
    altText: 'Ananda Crown Mohali 5 BHK Floor Plan 4100 Sq Ft Penthouse Layout Sector 78',
  },
];

const flatTypeOptions = [
  '3 BHK',
  '3+1 BHK',
  '4 BHK',
  '5 BHK',
];

const budgetOptions = [
  '1 to 2 Crore',
  '2 to 3 Crore',
  '3 to 4 Crore',
  '4 to 5 Crore',
];

const FloorPlanModal = ({ isOpen, onClose, initialPlanIndex = 0 }: FloorPlanModalProps) => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(initialPlanIndex);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    flatType: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));
  };

  const handleRequestDetails = () => {
    setFormData({ ...formData, flatType: floorPlans[currentIndex].type });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim() || !formData.flatType || !formData.budget) {
      toast({
        title: 'Please fill all required fields',
        description: 'All fields are required to proceed.',
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

    const message = `Hello, I want to request details for floor plan.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
City: ${formData.city.trim()}
Flat Type: ${formData.flatType}
Budget: ${formData.budget}

Please share details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast({
      title: 'Request Submitted!',
      description: 'Redirecting you to WhatsApp...',
    });

    setFormData({ name: '', phone: '', city: '', flatType: '', budget: '' });
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      setShowForm(false);
      onClose();
    }, 500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (showForm) {
        setShowForm(false);
      } else {
        onClose();
      }
    }
  };

  const currentPlan = floorPlans[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-5xl bg-card border border-border rounded-sm shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-border bg-card/50">
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-gradient-gold">
                  {currentPlan.type} Floor Plan
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {currentPlan.size} | Ananda Crown Sector 78 Mohali
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-sm hover:bg-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!showForm ? (
              <>
                {/* Floor Plan Image */}
                <div className="relative p-4 flex items-center justify-center bg-background/50">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-4 z-10 p-2 bg-background/80 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Previous floor plan"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  <img
                    src={currentPlan.image}
                    alt={currentPlan.altText}
                    title={currentPlan.altText}
                    className="max-h-[60vh] w-auto object-contain rounded-sm"
                    loading="lazy"
                  />

                  <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Next floor plan"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 py-3 border-t border-border/50">
                  {floorPlans.map((plan, index) => (
                    <button
                      key={plan.type}
                      onClick={() => setCurrentIndex(index)}
                      className={`px-3 py-1 text-xs rounded-sm transition-all ${
                        index === currentIndex
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-primary/20'
                      }`}
                    >
                      {plan.type}
                    </button>
                  ))}
                </div>

                {/* Request Details Button */}
                <div className="p-4 border-t border-border">
                  <button
                    onClick={handleRequestDetails}
                    className="btn-luxury w-full flex items-center justify-center gap-2 py-3"
                  >
                    <Send className="w-4 h-4" />
                    Request Details for {currentPlan.type}
                  </button>
                </div>
              </>
            ) : (
              /* Request Details Form */
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    Fill the form to get details for {currentPlan.type} ({currentPlan.size})
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="fp-name" className="block text-sm text-muted-foreground mb-1.5">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fp-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="fp-phone" className="block text-sm text-muted-foreground mb-1.5">
                    Mobile Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fp-phone"
                    type="tel"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="fp-city" className="block text-sm text-muted-foreground mb-1.5">
                    City <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fp-city"
                    type="text"
                    required
                    maxLength={50}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Enter your city"
                  />
                </div>

                {/* Flat Type */}
                <div>
                  <label htmlFor="fp-flat" className="block text-sm text-muted-foreground mb-1.5">
                    Flat Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="fp-flat"
                    required
                    value={formData.flatType}
                    onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm"
                  >
                    <option value="">Select flat type</option>
                    {flatTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="fp-budget" className="block text-sm text-muted-foreground mb-1.5">
                    Budget <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="fp-budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 border border-border rounded-sm text-sm hover:bg-accent transition-colors"
                  >
                    Back to Plans
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury flex-1 flex items-center justify-center gap-2 py-3 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>

                <p className="text-[10px] text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. Your information is secure.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloorPlanModal;
