import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Download, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'book-visit' | 'download-brochure';
}

const flatTypeOptions = [
  '3 BHK Apartment',
  '3 + 1 BHK Apartment',
  '4 BHK Apartment',
  '5 BHK Apartment',
];

const budgetOptions = [
  '1 to 2 Crore',
  '2 to 3 Crore',
  '3 to 4 Crore',
  '4 to 5 Crore',
];

const LeadFormModal = ({ isOpen, onClose, type }: LeadFormModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    flatType: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim() || !formData.flatType || !formData.budget) {
      toast({
        title: 'Please fill all required fields',
        description: 'All fields are required to proceed.',
        variant: 'destructive',
      });
      return;
    }

    // Validate phone (basic India validation)
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

    // Build WhatsApp message
    const actionText = type === 'download-brochure' ? 'download brochure' : 'book a site visit';
    const message = `Hello, I want to ${actionText}.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
City: ${formData.city.trim()}
Flat Type: ${formData.flatType}
Budget: ${formData.budget}

Please share details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Show confirmation
    toast({
      title: 'Request Submitted!',
      description: 'Redirecting you to WhatsApp...',
    });

    // Clear form and close modal
    setFormData({ name: '', phone: '', city: '', flatType: '', budget: '' });
    
    // Redirect to WhatsApp after brief delay
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

  const title = type === 'download-brochure' ? 'Download Brochure' : 'Book Site Visit';
  const subtitle = type === 'download-brochure' 
    ? 'Fill the form to receive our exclusive brochure' 
    : 'Schedule your exclusive site visit today';
  const buttonText = type === 'download-brochure' ? 'Get Brochure' : 'Schedule Site Visit';
  const Icon = type === 'download-brochure' ? Download : Calendar;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-md bg-card border border-border rounded-sm shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-card/50">
              <div>
                <h2 className="font-serif text-xl text-gradient-gold">{title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-sm hover:bg-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="modal-name" className="block text-sm text-muted-foreground mb-1.5">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="modal-phone" className="block text-sm text-muted-foreground mb-1.5">
                  Mobile Number <span className="text-destructive">*</span>
                </label>
                <input
                  id="modal-phone"
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
                <label htmlFor="modal-city" className="block text-sm text-muted-foreground mb-1.5">
                  City <span className="text-destructive">*</span>
                </label>
                <input
                  id="modal-city"
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
                <label htmlFor="modal-flat" className="block text-sm text-muted-foreground mb-1.5">
                  Flat Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="modal-flat"
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
                <label htmlFor="modal-budget" className="block text-sm text-muted-foreground mb-1.5">
                  Budget <span className="text-destructive">*</span>
                </label>
                <select
                  id="modal-budget"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full flex items-center justify-center gap-2 py-3.5 mt-2 disabled:opacity-50"
              >
                <Icon className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : buttonText}
              </button>

              <p className="text-[10px] text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. Your information is secure.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;
