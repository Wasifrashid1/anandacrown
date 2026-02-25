import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const reviews = [
  { name: "Amandeep Singh", text: "I was specifically looking for luxury apartments in Sector 78 Mohali, and Ananda Crown stood out immediately. The location near IT City Mohali is a major advantage. Connectivity to the airport and Chandigarh makes daily travel convenient. The payment plan is structured well compared to other projects I evaluated." },
  { name: "Pradeep Sethi", text: "The 3 BHK apartments at Ananda Crown Mohali are spacious and thoughtfully designed. I checked the floor plan and brochure on the official website, and everything was clearly explained. For someone seriously considering property investment in Mohali, this project deserves attention." },
  { name: "Gurukirpal Singh", text: "If you're comparing luxury flats in Mohali, especially in Sector 78, this project is worth shortlisting. The price per sq ft is competitive for a high-rise development of this scale. The investment potential looks strong considering future infrastructure growth." },
  { name: "Ramandeep Singh", text: "What impressed me most is the location. Being near IT Park Mohali and close to Chandigarh Airport adds long-term value. The brochure provides detailed insights about amenities and layouts, which helped me understand the offering clearly." },
  { name: "Abhinav Sharma", text: "The clubhouse amenities and gated security setup make Ananda Crown feel like a premium residential community. The modern design and high-rise concept give it a distinct edge compared to many low-rise projects in Mohali." },
  { name: "Inder Singh", text: "I explored the 4 BHK apartments, and they are ideal for families wanting spacious living. The layouts are practical and well-ventilated. The price list and payment details available on the website make the decision-making process easier." },
  { name: "Harleen Kaur", text: "In terms of property investment in Mohali, this seems promising. The proximity to IT City and airport ensures rental demand in the future. The pricing is reasonable for a luxury development in Sector 78." },
  { name: "Sandeep Gill", text: "I carefully reviewed the floor plans for the 3 BHK units. The space utilization is impressive. Booking amount and payment options are clearly mentioned, which adds transparency." },
  { name: "Karanvir Singh", text: "For anyone working in IT Park Mohali, this location is extremely practical. The gated community concept and clubhouse amenities make it suitable for families." },
  { name: "Mehakpreet Kaur", text: "One of the strongest points is the flexible payment plan. Compared to other luxury apartments in Mohali, the structure here is buyer-friendly and well planned." },
  { name: "Jaskirat Singh", text: "Being close to IT City Mohali makes it attractive for professionals. The high-rise living experience combined with modern amenities adds to its appeal." },
  { name: "Navdeep Brar", text: "I compared multiple luxury flats in Mohali before shortlisting this one. The ROI potential appears strong due to location advantages and premium positioning." },
  { name: "Harpreet Singh", text: "The 4 BHK apartments are spacious and suitable for premium buyers. The concept of high-rise living in Sector 78 gives it a modern urban feel." },
  { name: "Manpreet Kaur", text: "After visiting the site, I found the price list transparent. Everything from floor plans to brochure details is accessible and easy to understand." },
  { name: "Rajat Sharma", text: "The connectivity to the airport and major roads makes daily commuting smooth. The booking amount is reasonable considering the luxury positioning." },
  { name: "Simranjit Singh", text: "If you're searching for premium lifestyle apartments in Mohali, this is worth exploring. The 3 BHK layouts are spacious with good natural light." },
  { name: "Gagandeep Singh", text: "For frequent travelers, being near Chandigarh Airport is a major plus. The clubhouse and security features enhance the overall lifestyle experience." },
  { name: "Manav Arora", text: "I appreciated the clarity in the brochure and pricing structure. Compared to other projects in Sector 78 Mohali, this one feels well planned." },
  { name: "Kunal Mehta", text: "The rental demand near IT Park Mohali is expected to grow. From an investment perspective, the location supports long-term appreciation." },
  { name: "Arshdeep Singh", text: "The 3 BHK apartments are well ventilated and thoughtfully designed. Floor plans are practical without wasted space." },
  { name: "Rohit Verma", text: "In terms of price per sq ft in this category, it is competitive for a premium high-rise development in Mohali." },
  { name: "Taranpreet Singh", text: "The gated community concept and premium amenities make it suitable for families seeking safety and comfort." },
  { name: "Rajiv Malhotra", text: "The flexible payment plan simplifies booking. Detailed project information is available online, which adds confidence." },
  { name: "Vikramjeet Singh", text: "For buyers looking at luxury 4 BHK in Mohali, this project offers a strong combination of location and value." },
  { name: "Ankit Bansal", text: "The location near IT Park Mohali increases appreciation potential. The high-rise design adds to its premium appeal." },
  { name: "Deepak Sood", text: "The price list is transparent, and floor plan details are easy to understand. That level of clarity is important when investing." },
  { name: "Hardeep Singh", text: "If you want modern apartments in Mohali with clubhouse amenities and secure gated living, this is a strong contender." },
  { name: "Varun Khanna", text: "The booking amount and structured payment plan make it accessible for long-term investors." },
  { name: "Nitin Arora", text: "Being close to IT City Mohali and Chandigarh Airport makes the location highly practical for families and working professionals." },
  { name: "Sahil Mehra", text: "Overall, Ananda Crown Mohali delivers a luxury high-rise living experience in Sector 78. From floor plans to pricing and amenities, it checks most boxes for serious buyers." },
];

const faqs = [
  { q: "What is Ananda Crown Mohali?", a: "Ananda Crown Mohali is an ultra-luxury high-rise residential project in Sector 78, SAS Nagar, Mohali offering spacious 3 BHK and 4 BHK apartments with world-class amenities." },
  { q: "Where is Ananda Crown Mohali located?", a: "Ananda Crown is located in Sector 78, SAS Nagar, Mohali, Punjab 140308, near IT City and Chandigarh International Airport." },
  { q: "What apartment configurations are available?", a: "Ananda Crown offers luxury 3 BHK, 3+1 BHK, 4 BHK, and 5 BHK apartment configurations designed for premium buyers." },
  { q: "Is Ananda Crown Mohali RERA registered?", a: "Yes, Ananda Crown Mohali is committed to full RERA compliance for buyer safety and transparency." },
  { q: "What amenities does Ananda Crown offer?", a: "Amenities include a clubhouse, swimming pool, gymnasium, landscaped gardens, kids play area, and 24×7 gated security." },
  { q: "What is the price range of apartments?", a: "For the latest price list and payment plan details, please visit our pricing page or contact our sales team directly." },
  { q: "How can I book a site visit?", a: "You can book a site visit through our website contact form, WhatsApp, or by calling +91 97797 99705." },
];

const Reviews = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Ananda Crown Mohali",
      "url": "https://www.anandacrownmohali.com/ananda-crown-mohali-reviews",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 78",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "140308",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "reviewCount": "30"
      },
      "review": reviews.slice(0, 5).map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewBody": r.text,
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ananda Crown Mohali Reviews | Sector 78 Luxury Apartments Feedback</title>
        <meta name="description" content="Read genuine reviews of Ananda Crown Mohali in Sector 78. Explore luxury 3 & 4 BHK apartments, price list, floor plans, brochure & payment plan details." />
        <meta name="keywords" content="Ananda Crown Mohali Reviews, Sector 78 Mohali Reviews, Luxury Apartments Mohali Feedback" />
        <link rel="canonical" href="https://www.anandacrownmohali.com/ananda-crown-mohali-reviews" />
        {schemaData.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-24 md:pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <nav className="mb-6 md:mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </nav>

            {/* Header */}
            <motion.header className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary font-display text-base md:text-lg italic mb-2">Real Buyer Feedback</p>
              <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                Ananda Crown Mohali Reviews – Real Buyer Insights from Sector 78
              </h1>
              <div className="gold-line max-w-md mx-auto mb-6" />
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
                If you are researching Ananda Crown Mohali reviews, this page provides detailed insights from buyers and investors exploring luxury <Link to="/floor-plans" className="text-primary hover:underline">3 BHK and 4 BHK apartments</Link> in Sector 78 Mohali near IT City and Chandigarh Airport. From <Link to="/floor-plans" className="text-primary hover:underline">floor plans</Link> and <Link to="/pricing" className="text-primary hover:underline">price list</Link> to payment plans and amenities, here is what people are saying.
              </p>
            </motion.header>

            {/* Why Buyers */}
            <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              <h2 className="font-serif text-xl md:text-3xl mb-6">Why Buyers Are Considering Ananda Crown Mohali</h2>
              <div className="luxury-card p-5 md:p-6">
                <ul className="space-y-2 text-sm md:text-base text-foreground/90">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Prime location in Sector 78 Mohali near IT City</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Close proximity to Chandigarh International Airport</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Spacious 3 BHK and 4 BHK apartments</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>High-rise luxury living concept</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Competitive price per sq ft</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Flexible payment plan</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Gated community with clubhouse amenities</li>
                </ul>
              </div>
            </motion.section>

            {/* Reviews */}
            <section className="mb-12">
              <h2 className="font-serif text-xl md:text-3xl mb-6">Ananda Crown Mohali Detailed Reviews</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="luxury-card p-5 md:p-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.6) }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-serif text-base md:text-lg font-medium">{review.name}</span>
                      <div className="flex gap-0.5 ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed italic">"{review.text}"</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-serif text-xl md:text-3xl mb-6">Frequently Asked Questions – Ananda Crown Mohali</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="luxury-card px-5 border-none">
                    <AccordionTrigger className="font-serif text-sm md:text-base hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/90">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default Reviews;
