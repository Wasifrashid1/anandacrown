import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import ArticleContent from '@/components/ArticleContent';

const RERA_NUMBER = 'PBRERA-SAS81-PR1421-082026';
const SITE_URL = 'https://anandacrownmohali.com';

const faqs = [
  {
    q: 'Is Ananda Crown RERA approved?',
    a: `Ananda Crown, Sector 78 Mohali is registered with the Punjab Real Estate Regulatory Authority under registration number ${RERA_NUMBER}. Registration means the project's promoter details, land title, sanctioned plans and declared development schedule are on record with the authority. Buyers should always confirm the record independently on the Punjab RERA portal rather than relying on printed material alone.`,
  },
  {
    q: 'What does RERA registration protect me from?',
    a: 'Registration brings statutory disclosure before sale, a defined carpet area, a dedicated project bank account from which funds may only be drawn against certified construction progress, restrictions on unilateral changes to the sanctioned plan, defect liability after possession, and a specialised complaint route through the authority and appellate tribunal.',
  },
  {
    q: 'Where can I verify Punjab RERA registrations independently?',
    a: 'Use the registered projects search on the official Punjab Real Estate Regulatory Authority website. Search by registration number, promoter name or district (SAS Nagar for Mohali), then open the project record and download the registration certificate and sanctioned plans. Avoid third-party aggregator sites, which can be out of date.',
  },
  {
    q: 'What happens if a RERA-registered project is delayed?',
    a: 'Where possession is delayed beyond the declared date, the framework allows an allottee to either continue with the project and claim interest at the prescribed rate for the period of delay, or to withdraw and seek a refund with interest. Complaints are filed with the authority, with an appeal route to the appellate tribunal. This is a remedy for delay and not a return on investment.',
  },
];

const body = `## What RERA Registration Means for Ananda Crown Buyers

Ananda Crown is a luxury residential development in Sector 78, Mohali, offering 3, 4 and 5 BHK apartments, and it is registered with the Punjab Real Estate Regulatory Authority. For a buyer, registration is not a marketing badge. It is the point at which a set of promises stops being conversational and starts being documented with a state authority that has power to act on them.

### Legal Protection Under the RERA Act

The Real Estate (Regulation and Development) Act requires that a covered project be registered before it is advertised, marketed, booked or sold. The application itself carries weight: the promoter must place the land title, the sanctioned plan, the layout, the schedule of development works and the unit inventory on record. Once registered, those declarations become the reference against which delivery is measured.

Two consequences matter most in practice. First, carpet area has a statutory definition, so the area you are sold is not a marketing construct. Second, material alterations to the sanctioned plan require consent from a prescribed majority of allottees rather than a unilateral notice after the fact.

### Escrow Account & Fund Utilization Safeguards

A defined share of the amounts collected from allottees must be deposited into a separate bank account maintained for that project alone. Withdrawals are permitted only towards land and construction cost for the same project, and only against certification by an engineer, an architect and a chartered accountant confirming that the drawing is proportionate to completion.

This is the provision that addresses the oldest problem in Indian residential development, where money collected for one project funded land purchases for another. Buyers can read the position for themselves through the quarterly disclosures on the authority's portal.

### Timeline & Delivery Accountability

The promoter declares a completion period at the time of registration, and that declaration is the timeline the authority holds them to. If possession is delayed beyond it, an allottee may continue with the project and claim interest for the delay period, or withdraw and seek a refund with interest. Extensions are possible, but they are granted by the authority on stated grounds and appear on the record.

## Why RERA Matters Before You Book

### Protection Against Project Delays

Delay is the most common grievance in under-construction purchases, and the cost is real: buyers frequently pay rent and loan interest at the same time. The registered framework does not eliminate delay, but it converts it from an open-ended wait into a defined claim with a documented start date.

### Transparency in Carpet Area & Pricing

Because carpet area is defined by statute, comparison across projects becomes meaningful. Loading percentages, super area and saleable area vary between promoters; carpet area does not. Ask for the cost sheet expressed on carpet area, with parking and statutory charges shown separately from unit cost.

### Recourse in Case of Disputes

A registered project comes with a purpose-built forum. Complaints are filed with the authority and appeals lie to the appellate tribunal, which is materially faster and cheaper than general civil litigation. Recourse is only as strong as your paperwork, so keep every receipt, the allotment letter, the agreement for sale, and all written communication.

## How Ananda Crown Meets RERA Requirements

### Registered Project Details

Ananda Crown is registered under ${RERA_NUMBER}, a Punjab RERA project registration recorded for the SAS Nagar district. The registration record on the authority's portal carries the promoter's legal name, the project name, the registered land and built-up area, the validity period and the uploaded document set. Buyers should match all of these against the sales documentation they are shown.

Configuration-level specifics such as carpet areas per unit type, the payment plan structure, current pricing and the present construction stage are being updated soon on our public pages. Rather than publish figures that shift, we ask buyers to take these from the registered documents and from a written cost sheet issued by the sales office.

### Approved Layout & Sanctioned Plans

Registration requires sanctioned plans and layout approvals from the competent authority to be on record. The set worth reading before you book includes the sanctioned layout, the tower and floor plates, the specification annexure, and the fire and structural approvals. Delivered specifications should match the annexure attached to your agreement.

#### Developer Compliance Track Record

A promoter's earlier registered projects, their declared timelines and their actual handover dates are the single most useful predictor of future delivery. The consolidated list of the developer's other RERA-registered projects is being updated soon on this page; in the meantime, ask the sales office for it in writing and cross-check each entry on the authority's portal.

## Independent Verification Comes First

No page on a developer's own website should be your only evidence, including this one. Open the Punjab RERA portal, search the registration number, and confirm four fields: promoter name, project name, district and sector, and registered area. Download the certificate and keep a dated copy, because your lender will ask for it at the sanction stage.

If you want the exact registration string with a portal walkthrough, [look up Ananda Crown's exact RERA number](/ananda-crown-rera-number). For wider reading, see [why RERA registration matters when buying a flat in Mohali](/blog/why-rera-matters-buying-flat-mohali) and [how to verify a RERA number in Punjab](/blog/how-to-verify-rera-number-punjab). To request the current document set or book a site visit, use the [contact page](/contact), or review the [project overview](/overview) and [pricing details](/pricing).`;

const ReraCompliance = () => {
  const realEstateSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Ananda Crown, Sector 78, Mohali',
    description:
      'RERA-registered luxury residential project in Sector 78, Mohali offering 3, 4 and 5 BHK apartments. Registration number PBRERA-SAS81-PR1421-082026.',
    url: `${SITE_URL}/ananda-crown-rera`,
    identifier: RERA_NUMBER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 78',
      addressLocality: 'Mohali',
      addressRegion: 'Punjab',
      postalCode: '140308',
      addressCountry: 'IN',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Ananda Crown RERA Registered Project | Sector 78 Mohali</title>
        <meta
          name="description"
          content="Ananda Crown in Sector 78, Mohali is a RERA-registered luxury project (PBRERA-SAS81-PR1421-082026). Learn what RERA registration guarantees buyers and how to verify it."
        />
        <meta
          name="keywords"
          content="Ananda Crown RERA, RERA registered project Mohali, Ananda Crown Sector 78 RERA, RERA approved flats Mohali, PBRERA-SAS81-PR1421-082026, RERA compliance Punjab real estate"
        />
        <link rel="canonical" href={`${SITE_URL}/ananda-crown-rera`} />
        <script type="application/ld+json">{JSON.stringify(realEstateSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden scrollbar-luxury">
        <CursorGlow />
        <Navbar />

        <main className="pt-24 md:pt-32 pb-20">
          <article className="container mx-auto px-4 md:px-8 max-w-4xl">
            <nav className="mb-6 md:mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </nav>

            <motion.header
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary font-display text-base md:text-lg italic mb-2">Compliance & Trust</p>
              <h1 className="section-heading text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                Ananda Crown Is a <span className="text-gradient-gold">RERA-Registered</span> Project in Sector 78, Mohali
              </h1>
              <div className="gold-line max-w-md mb-6" />
              <p className="text-muted-foreground text-sm md:text-base">
                Punjab RERA registration number <span className="text-primary">{RERA_NUMBER}</span>
              </p>
            </motion.header>

            <motion.div
              className="prose prose-invert prose-gold max-w-none mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArticleContent content={body} />
            </motion.div>

            <section className="mb-12">
              <h2 className="font-serif text-xl md:text-2xl mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="luxury-card p-5 md:p-6">
                    <h3 className="font-serif text-base md:text-lg mb-2">{faq.q}</h3>
                    <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="luxury-card p-6 md:p-8 text-center">
              <h2 className="font-serif text-xl md:text-2xl mb-3">Verify Ananda Crown&rsquo;s Exact RERA Number</h2>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                See the full registration string and a step-by-step Punjab RERA portal walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/ananda-crown-rera-number" className="btn-luxury">
                  Verify Ananda Crown&rsquo;s exact RERA number
                </Link>
                <Link to="/contact" className="btn-luxury-outline flex items-center justify-center">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default ReraCompliance;