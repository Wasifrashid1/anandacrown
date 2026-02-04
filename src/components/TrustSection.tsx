import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronDown, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    content: 'The payment plan options at Ananda Crown are incredibly flexible. With only 25% on RERA approval and the rest construction-linked, it\'s perfect for smart investors looking at pre-launch opportunities.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Malhotra',
    role: 'Healthcare Professional',
    content: 'The prime location near Airport Road is what attracted us. Easy connectivity to Chandigarh and excellent infrastructure development in Sector 78 makes this a perfect family home.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'IT Executive',
    content: 'Being close to Amity University and the IT corridor was crucial for our family. The spacious layouts and luxury amenities at Ananda Crown exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Amandeep Kaur',
    role: 'NRI Investor',
    content: 'Investing during the pre-launch phase was a smart decision. The location near Chandigarh Group of Colleges and the premium specifications promise great appreciation potential.',
    rating: 5,
  },
  {
    name: 'Harpreet Gill',
    role: 'Entrepreneur',
    content: 'What convinced us was the proximity to Chandigarh University and the excellent payment plan. The pre-development phase pricing gives early investors significant advantages.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Where is Ananda Crown Mohali located?',
    answer: 'Ananda Crown is strategically located in Sector 78, Mohali (SAS Nagar), Punjab, with excellent connectivity to Chandigarh, IT Hub, Airport Road, and major educational institutions.',
  },
  {
    question: 'What configurations are available in Ananda Crown?',
    answer: 'Ananda Crown offers 3 BHK, 3+1 BHK, 4 BHK, and 5 BHK ultra-luxury residences ranging from 2,425 to 4,100 sq. ft., designed for premium living.',
  },
  {
    question: 'Is Ananda Crown located in Sector 78 Mohali?',
    answer: 'Yes, Ananda Crown is located in Sector 78, Mohali, one of the most prime and well-connected residential areas with excellent infrastructure and amenities.',
  },
  {
    question: 'Are floor plans available for all units?',
    answer: 'Yes, detailed floor plans are available for all unit types (3 BHK, 3+1 BHK, 4 BHK, and 5 BHK). You can view them on our Floor Plans page or contact our sales team for personalized assistance.',
  },
  {
    question: 'How to book a site visit for Ananda Crown Mohali?',
    answer: 'You can book a site visit by filling the contact form on our website, calling us at +91 97797 99705, or connecting via WhatsApp. Our team will arrange a convenient time for your visit.',
  },
  {
    question: 'What is the current project status of Ananda Crown?',
    answer: 'Ananda Crown is currently in pre-launch / pre-development phase. This is an excellent opportunity for early investors to benefit from pre-launch pricing and flexible payment options.',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-24 md:py-32 relative overflow-hidden" id="faq">
        <div className="container mx-auto px-4 md:px-8" ref={ref}>
          {/* Pre-Launch Notice */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 p-4 bg-primary/10 border border-primary/30 rounded-sm max-w-2xl mx-auto">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm md:text-base text-foreground/90 text-center">
                <span className="font-medium text-primary">Pre-Launch Phase</span> – This project is currently in pre-development. Secure your unit with early booking advantages.
              </p>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display text-lg italic mb-4">Testimonials</p>
            <h2 className="section-heading mb-6">
              Trusted by <span className="text-gradient-gold">Families</span>
            </h2>
            <div className="gold-line max-w-md mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="luxury-card p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic text-sm md:text-base">"{testimonial.content}"</p>

                <div>
                  <p className="font-serif text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQs - Functional Accordion */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary font-display text-lg italic mb-4">FAQ</p>
            <h2 className="section-heading mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="gold-line max-w-md mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="luxury-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.08 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-4 md:p-5 text-left hover:bg-accent/30 transition-colors"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <span className="font-serif text-sm md:text-base pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-5 pb-4 md:pb-5 text-muted-foreground text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
