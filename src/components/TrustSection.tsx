import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronDown, AlertCircle } from 'lucide-react';

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
    question: 'What are the available configurations at Ananda Crown Mohali?',
    answer: 'Ananda Crown offers 3 BHK, 3+1 BHK, 4 BHK, and 5 BHK ultra-luxury residences ranging from 2,425 to 4,100 sq. ft. in Sector 78, Mohali.',
  },
  {
    question: 'Where is Ananda Crown located in Mohali?',
    answer: 'Ananda Crown is strategically located in Sector 78, Mohali, with excellent connectivity to Chandigarh, IT Hub, Airport Road, and major schools and hospitals.',
  },
  {
    question: 'What is the booking amount for luxury apartments at Ananda Crown?',
    answer: 'Booking amounts start from ₹20L for 3 BHK, ₹25L for 3+1 BHK and 4 BHK, and ₹40L for 5 BHK luxury apartments. Contact our sales team for current offers.',
  },
  {
    question: 'What are the key amenities at Ananda Crown Sector 78?',
    answer: 'The project features a grand clubhouse, swimming pool, landscaped gardens, premium gym, kids play zone, and 24/7 security among other world-class amenities designed for luxury living.',
  },
  {
    question: 'What is the payment plan for Ananda Crown Mohali?',
    answer: 'We offer a flexible payment plan with 25% on RERA Approval and 75% on Construction-Linked / Time-Linked basis. Contact us for personalized payment options.',
  },
  {
    question: 'What is the current project status of Ananda Crown?',
    answer: 'Ananda Crown is currently in pre-launch / pre-development phase. This is an excellent opportunity for early investors to benefit from pre-launch pricing and flexible payment options.',
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
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

        {/* FAQs */}
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

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="luxury-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full p-5 md:p-6 text-left cursor-pointer hover:bg-accent/30 transition-colors"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                type="button"
              >
                <span className="font-serif text-sm md:text-lg pr-4" itemProp="name">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground text-sm md:text-base" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
