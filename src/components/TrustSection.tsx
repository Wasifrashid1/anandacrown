import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    content: 'The quality of construction and attention to detail at Ananda Crown is exceptional. We are proud to call this our home.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Malhotra',
    role: 'Healthcare Professional',
    content: 'From the grand entrance to the stunning amenities, every aspect speaks luxury. The location is perfect for our family.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'IT Executive',
    content: 'The spacious layouts and premium finishes exceeded our expectations. Ananda Crown truly delivers on its promise of elevated living.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What are the available configurations?',
    answer: 'Ananda Crown offers 3 BHK, 3+1 BHK, and 4+1 BHK ultra-luxury residences ranging from 1,850 to 3,500 sq. ft.',
  },
  {
    question: 'What is the project location?',
    answer: 'Ananda Crown is strategically located in Sector 78, Mohali, with excellent connectivity to Chandigarh, IT Hub, Airport, and major schools.',
  },
  {
    question: 'When is the expected possession?',
    answer: 'Please contact our sales team for the latest possession timeline and construction updates.',
  },
  {
    question: 'What are the key amenities?',
    answer: 'The project features a grand clubhouse, infinity pool, landscaped gardens, premium gym, kids play zone, and 24/7 security among other world-class amenities.',
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
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

        <div className="grid md:grid-cols-3 gap-6 mb-24">
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

              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

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
            <motion.details
              key={faq.question}
              className="luxury-card group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-serif text-lg">{faq.question}</span>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
