import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const flatTypeOptions = [
  '3 BHK',
  '3+1 BHK',
  '4+1 BHK',
  '5+1 BHK',
];

const budgetOptions = [
  '1 to 2 Crore',
  '2 to 3 Crore',
  '3 to 4 Crore',
  '4 to 5 Crore',
];

const AutoPopupLeadForm = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
   const [dismissCount, setDismissCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    flatType: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '9779799705';

   // Auto-open popup: first at 4s, then 15s after dismiss, then 30s after second dismiss
  useEffect(() => {
     const formSubmitted = sessionStorage.getItem('ananda-crown-form-submitted');
     if (formSubmitted) return; // Don't show if form was submitted
 
     const storedDismissCount = sessionStorage.getItem('ananda-crown-dismiss-count');
     const currentDismissCount = storedDismissCount ? parseInt(storedDismissCount) : 0;
     setDismissCount(currentDismissCount);
 
     // Calculate delay based on dismiss count
     let delay = 4000; // Initial: 4 seconds
     if (currentDismissCount === 1) {
       delay = 15000; // After first dismiss: 15 seconds
     } else if (currentDismissCount === 2) {
       delay = 30000; // After second dismiss: 30 seconds
     } else if (currentDismissCount >= 3) {
       return; // Stop showing after 3 dismisses in a session
     }
 
     const timer = setTimeout(() => {
       setIsOpen(true);
     }, delay);
 
     return () => clearTimeout(timer);
   }, [dismissCount]);
 
   const handleClose = () => {
     setIsOpen(false);
     const newCount = dismissCount + 1;
     setDismissCount(newCount);
     sessionStorage.setItem('ananda-crown-dismiss-count', newCount.toString());
   };
 
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
 
     // WhatsApp message format as specified
     const message = `New Site Visit Enquiry – Ananda Crown Mohali
 
 Name: ${formData.name.trim()}
 Mobile: ${formData.phone.trim()}
 City: ${formData.city.trim()}
 Interested In: ${formData.flatType}
 Budget: ${formData.budget}`;
 
     const encodedMessage = encodeURIComponent(message);
     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
 
     // Mark form as submitted so popup doesn't appear again
     sessionStorage.setItem('ananda-crown-form-submitted', 'true');
 
     // Show confirmation
     toast({
       title: '✓ Enquiry Submitted!',
       description: 'Opening WhatsApp now...',
     });
 
     // Clear form
     setFormData({ name: '', phone: '', city: '', flatType: '', budget: '' });
     
     // Redirect to WhatsApp
     setTimeout(() => {
       window.open(whatsappLink, '_blank');
       setIsSubmitting(false);
       setIsOpen(false);
     }, 300);
   };
 
   const handleBackdropClick = (e: React.MouseEvent) => {
     if (e.target === e.currentTarget) {
       handleClose();
     }
   };
 
   return (
     <AnimatePresence>
       {isOpen && (
         <motion.div
           className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={handleBackdropClick}
         >
           <motion.div
             className="relative w-full max-w-md bg-card border border-border rounded-sm shadow-2xl overflow-hidden"
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.9, opacity: 0, y: 20 }}
             transition={{ duration: 0.3, type: 'spring', damping: 25 }}
           >
             {/* Header */}
             <div className="relative p-5 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
               <button
                 onClick={handleClose}
                 className="absolute top-3 right-3 p-2 rounded-sm hover:bg-accent transition-colors z-20"
                 aria-label="Close popup"
                 type="button"
               >
                 <X className="w-5 h-5" />
               </button>
               <h2 className="font-serif text-xl text-gradient-gold pr-8">Get Exclusive Details</h2>
               <p className="text-xs text-muted-foreground mt-1">Register your interest for Ananda Crown Mohali</p>
             </div>
 
             {/* Form */}
             <form onSubmit={handleSubmit} className="p-5 space-y-3">
               {/* Full Name */}
               <div>
                 <label htmlFor="popup-name" className="block text-xs text-muted-foreground mb-1">
                   Name <span className="text-destructive">*</span>
                 </label>
                 <input
                   id="popup-name"
                   type="text"
                   required
                   maxLength={100}
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                   placeholder="Enter your full name"
                   autoComplete="name"
                 />
               </div>
 
               {/* Mobile Number */}
               <div>
                 <label htmlFor="popup-phone" className="block text-xs text-muted-foreground mb-1">
                   Mobile Number <span className="text-destructive">*</span>
                 </label>
                 <input
                   id="popup-phone"
                   type="tel"
                   required
                   maxLength={15}
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                   className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                   placeholder="Enter 10-digit mobile number"
                   autoComplete="tel"
                 />
               </div>
 
               {/* City */}
               <div>
                 <label htmlFor="popup-city" className="block text-xs text-muted-foreground mb-1">
                   City <span className="text-destructive">*</span>
                 </label>
                 <input
                   id="popup-city"
                   type="text"
                   required
                   maxLength={50}
                   value={formData.city}
                   onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                   className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                   placeholder="Enter your city"
                   autoComplete="address-level2"
                 />
               </div>
 
               <div className="grid grid-cols-2 gap-3">
                 {/* Flat Type */}
                 <div>
                   <label htmlFor="popup-flat" className="block text-xs text-muted-foreground mb-1">
                     Flat Type <span className="text-destructive">*</span>
                   </label>
                   <select
                     id="popup-flat"
                     required
                     value={formData.flatType}
                     onChange={(e) => setFormData({ ...formData, flatType: e.target.value })}
                     className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm cursor-pointer"
                   >
                     <option value="">Select type</option>
                     {flatTypeOptions.map((opt) => (
                       <option key={opt} value={opt}>{opt}</option>
                     ))}
                   </select>
                 </div>
 
                 {/* Budget */}
                 <div>
                   <label htmlFor="popup-budget" className="block text-xs text-muted-foreground mb-1">
                     Budget <span className="text-destructive">*</span>
                   </label>
                   <select
                     id="popup-budget"
                     required
                     value={formData.budget}
                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                     className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors appearance-none text-sm cursor-pointer"
                   >
                     <option value="">Select budget</option>
                     {budgetOptions.map((opt) => (
                       <option key={opt} value={opt}>{opt}</option>
                     ))}
                   </select>
                 </div>
               </div>
 
               {/* Submit Button */}
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="btn-luxury w-full flex items-center justify-center gap-2 py-3 mt-2 disabled:opacity-50"
               >
                 <Send className="w-4 h-4" />
                 {isSubmitting ? 'Submitting...' : 'Get Details via WhatsApp'}
               </button>
 
               <p className="text-[9px] text-muted-foreground text-center">
                 By submitting, you agree to our privacy policy. Your information is secure.
               </p>
             </form>
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default AutoPopupLeadForm;
