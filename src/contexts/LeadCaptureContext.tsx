import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────
export type CTAType = 
  | 'call' 
  | 'whatsapp' 
  | 'download_brochure' 
  | 'book_visit' 
  | 'request_details' 
  | 'floor_plan_whatsapp'
  | string; // extensible for future CTAs

export interface LeadEntry {
  name: string;
  phone: string;
  timestamp: string;
  cta: CTAType;
}

interface PendingCTA {
  type: CTAType;
  action: () => void;
}

interface LeadCaptureContextType {
  /** Call this to intercept any CTA. Opens modal, then executes action after submit. */
  interceptCTA: (ctaType: CTAType, action: () => void) => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | null>(null);

export const useLeadCapture = () => {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) throw new Error('useLeadCapture must be used within LeadCaptureProvider');
  return ctx;
};

// ─── localStorage helpers ───────────────────────────────────────────────────
const STORAGE_KEY = 'ananda-crown-leads';

export function getStoredLeads(): LeadEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

async function appendLead(entry: LeadEntry) {
  try {
    await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(entry),
    });
  } catch (err) {
    console.error("Lead save failed", err);
  }
}

// ─── Provider ───────────────────────────────────────────────────────────────
export const LeadCaptureProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingCTA, setPendingCTA] = useState<PendingCTA | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interceptCTA = useCallback((ctaType: CTAType, action: () => void) => {
    setPendingCTA({ type: ctaType, action });
    setFormData({ name: '', phone: '' });
    setPhoneError('');
    setIsOpen(true);
  }, []);

  // Validate & auto-save on phone blur
  const handlePhoneBlur = async () => {
    const clean = formData.phone.replace(/\D/g, '').slice(-10);
    const valid = /^[6-9]\d{9}$/.test(clean);
    if (!valid && formData.phone.trim()) {
      setPhoneError('Enter a valid 10-digit Indian mobile number');
    } else {
      setPhoneError('');
      // Auto-save if both fields filled
      if (valid && formData.name.trim() && pendingCTA) {
        await appendLead({
          name: formData.name.trim(),
          phone: clean,
          timestamp: new Date().toISOString(),
          cta: pendingCTA.type,
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    const clean = formData.phone.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(clean)) {
      setPhoneError('Enter a valid 10-digit Indian mobile number');
      return;
    }
    setIsSubmitting(true);

    // Save lead (may duplicate the auto-save – appendLead is idempotent by timestamp)
    appendLead({
      name: formData.name.trim(),
      phone: clean,
      timestamp: new Date().toISOString(),
      cta: pendingCTA?.type || 'unknown',
    });

    // Close modal, then fire original CTA action
    const action = pendingCTA?.action;
    setIsOpen(false);
    setPendingCTA(null);
    setFormData({ name: '', phone: '' });

    // Small delay so modal closes before navigation/redirect
    setTimeout(() => {
      action?.();
      setIsSubmitting(false);
    }, 300);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPendingCTA(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <LeadCaptureContext.Provider value={{ interceptCTA }}>
      {children}

      {/* ── Lead Capture Modal ─────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div
            className="relative w-full max-w-sm bg-card border border-border rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
              <div>
                <h2 className="font-serif text-lg text-gradient-gold">Quick Registration</h2>
                <p className="text-[11px] text-muted-foreground mt-0.5">Share your details to continue</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-sm hover:bg-accent transition-colors"
                aria-label="Close"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-3">
              <div>
                <label htmlFor="lc-name" className="block text-xs text-muted-foreground mb-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="lc-name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-input border border-border rounded-sm focus:border-primary focus:outline-none transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="lc-phone" className="block text-xs text-muted-foreground mb-1">
                  Mobile Number <span className="text-destructive">*</span>
                </label>
                <input
                  id="lc-phone"
                  type="tel"
                  required
                  maxLength={15}
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => { setFormData(p => ({ ...p, phone: e.target.value })); setPhoneError(''); }}
                  onBlur={handlePhoneBlur}
                  className={`w-full px-3 py-2.5 bg-input border rounded-sm focus:outline-none transition-colors text-sm ${
                    phoneError ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                />
                {phoneError && (
                  <p className="text-[11px] text-destructive mt-1">{phoneError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full flex items-center justify-center gap-2 py-3 mt-1 disabled:opacity-50 text-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </button>

              <p className="text-[9px] text-muted-foreground text-center">
                Your information is secure and will not be shared.
              </p>
            </form>
          </div>
        </div>
      )}
    </LeadCaptureContext.Provider>
  );
};
