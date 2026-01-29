import { motion } from 'framer-motion';

interface CrownLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const CrownLogo = ({ className = '', showText = true, size = 'md' }: CrownLogoProps) => {
  const sizes = {
    sm: { crown: 'w-8 h-6', text: 'text-lg' },
    md: { crown: 'w-12 h-9', text: 'text-2xl' },
    lg: { crown: 'w-16 h-12', text: 'text-4xl' },
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Crown SVG */}
      <svg 
        className={`${sizes[size].crown} text-primary animate-float`} 
        viewBox="0 0 64 48" 
        fill="none"
      >
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(40, 50%, 57%)" />
            <stop offset="50%" stopColor="hsl(43, 60%, 85%)" />
            <stop offset="100%" stopColor="hsl(40, 50%, 57%)" />
          </linearGradient>
        </defs>
        <path
          d="M32 4L40 20L52 8L48 32H16L12 8L24 20L32 4Z"
          fill="url(#crownGradient)"
        />
        <circle cx="32" cy="4" r="3" fill="url(#crownGradient)" />
        <circle cx="12" cy="8" r="2.5" fill="url(#crownGradient)" />
        <circle cx="52" cy="8" r="2.5" fill="url(#crownGradient)" />
        <rect x="14" y="34" width="36" height="6" rx="1" fill="url(#crownGradient)" />
      </svg>

      {showText && (
        <div className={`${sizes[size].text} font-serif tracking-widest mt-1`}>
          <span className="text-foreground font-light">A</span>
          <span className="text-gradient-gold font-medium">NANDA</span>
          <div className="flex items-center justify-center gap-2 -mt-1">
            <span className="h-px w-4 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-gradient-gold font-medium tracking-[0.3em]">CROWN</span>
            <span className="h-px w-4 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CrownLogo;
