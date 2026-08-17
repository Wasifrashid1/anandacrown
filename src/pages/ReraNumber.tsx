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
    q: 'What is the RERA number of Ananda Crown?',
    a: `The RERA registration number of Ananda Crown, Sector 78 Mohali is ${RERA_NUMBER}. It is a Punjab RERA project registration recorded for the SAS Nagar district. Confirm it on the official Punjab RERA portal before making any payment.`,
  },
  {
    q: 'How do I check if a RERA number is genuine?',
    a: 'Search the number in the registered projects section of the official Punjab RERA website, then match four fields on the returned record: promoter legal name, project name, district and sector, and registered project area. Download the registration certificate from the record. A number that returns no record, or a record whose promoter or location differs from your documents, should be clarified in writing before you pay anything.',
  },
  {
    q: 'Is the RERA number the same as the project registration certificate?',
    a: 'No. The number is the identifier; the certificate is the document issued by the authority against that identifier. The certificate carries the promoter details, the registered area, the validity period and the conditions of registration, and it is downloadable from the project record on the portal. Lenders usually ask for the certificate rather than the number alone.',
  },
];

const body = `## Official RERA Registration Number

Buyers searching for the RERA number of Ananda Crown are usually at the due-diligence stage rather than the browsing stage. This page exists to give the exact registration string, explain how to read it, and show how to confirm it on the state portal in a few minutes.

### ${RERA_NUMBER}

That is the Punjab RERA registration number recorded for Ananda Crown, the luxury 3, 4 and 5 BHK residential development in Sector 78, Mohali. Enter it exactly as written, including hyphens, when searching the authority's portal.

### What Each Segment of the Number Means

Punjab registration numbers are structured rather than random, which gives you a quick sanity check before you even open the portal.

PBRERA identifies the Punjab Real Estate Regulatory Authority as the issuing body. SAS81 carries the district element for SAS Nagar, the district Mohali falls within, along with a sequence component. PR indicates a project registration, as distinct from an agent registration, and 1421 is the project serial. 082026 reflects the month and year associated with the registration record.

The practical use of reading it this way is simple: a Mohali project should carry the SAS Nagar district element and a PR project marker. A number presented for a Mohali project that shows another district, or an agent-type marker, is worth questioning immediately.

## How to Verify This Number Yourself

### Step-by-Step: Punjab RERA Portal Search

Begin on the official Punjab Real Estate Regulatory Authority website and confirm you are on the government domain before entering anything. Open the registered projects search rather than the registered agents search, since the two are separate registers and an agent record certifies nothing about a project.

Enter ${RERA_NUMBER} in the registration number field and run the search. If the number search returns nothing, that is often a formatting difference rather than an absent record: filter by district (SAS Nagar) and scan for the project and promoter name instead.

Open the returned project record. It typically shows the promoter's legal name, the project name, the registration validity period, the registered land and proposed built-up area, and a set of uploaded documents. Download the registration certificate and the sanctioned layout, and save a dated screenshot of the record page for your own file.

Finally, open the quarterly progress reports if they are available. They give an independent read on construction pace, which is far more informative than any photograph shown at a sales office.

### What to Cross-Check (Developer Name, Project Address, Sanctioned Area)

Three fields do most of the work. The promoter's legal name on the portal should match the entity named on your allotment letter, your agreement and, crucially, the payee name on your receipt. The project address should read Sector 78, SAS Nagar, Punjab. The registered area and the tower or phase count should be consistent with the layout you were shown, particularly where a development is registered in phases.

Also read the validity period. Registration is granted for a declared completion period, and an extension is not automatically a problem, but it is something to ask about in writing.

#### Red Flags If the Number Doesn't Match

Treat these as reasons to pause rather than paperwork noise: the number returns no record on the official portal; the promoter name on the record differs from the entity collecting your money; the project address or district does not match; the registered area is materially smaller than the layout being marketed; the tower containing your unit sits outside the registered parcel; or you are asked to pay a booking amount in cash or to an individual account. In every one of these cases, request written clarification before any payment.

## Why Buyers Search for This Specifically

### Due Diligence Before Booking

A registration number is the single most efficient starting point for due diligence, because everything else the authority holds hangs off it: the certificate, the sanctioned plans, the declared timeline, the promoter details and the progress reports. Ten minutes with the number gives you a document set that a brochure never will.

### Home Loan & Bank Verification Requirements

Lenders run their own legal and technical appraisal, and the project's registration record and approved plans form part of it. Buyers who verify before booking rarely encounter surprises at the sanction stage, while buyers who verify afterwards sometimes discover a problem with a booking amount already paid. Our [home loan and EMI guide](/blog/home-loan-emi-guide-ananda-crown) covers the wider documentation the lender will request.

## Details Best Taken From Source

Unit-level carpet areas, current pricing, the payment plan structure and the present construction stage are being updated soon on our public pages. These are exactly the fields that change, so take them from the registered documents and from a written cost sheet issued by the sales office rather than from any summary page.

To understand what this registration actually protects you from, [learn what RERA registration means for Ananda Crown](/ananda-crown-rera). For a general walkthrough of the portal, read [how to verify a RERA number in Punjab](/blog/how-to-verify-rera-number-punjab), and for the buyer's case for checking first, see [why RERA registration matters in Mohali](/blog/why-rera-matters-buying-flat-mohali). Request the current document set through the [contact page](/contact) or start from the [project homepage](/).`;

const ReraNumber = () => {
  const realEstateSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Ananda Crown, Sector 78, Mohali',
    description: `Official Punjab RERA registration number of Ananda Crown, Sector 78 Mohali: ${RERA_NUMBER}.`,
    url: `${SITE_URL}/ananda-crown-rera-number`,
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
        <title>Ananda Crown RERA Number: PBRERA-SAS81-PR1421-082026</title>
        <meta
          name="description"
          content="Find and verify the official RERA number of Ananda Crown, Sector 78 Mohali — PBRERA-SAS81-PR1421-082026. Step-by-step guide to checking it on the Punjab RERA portal."
        />
        <meta
          name="keywords"
          content="RERA number of Ananda Crown, Ananda Crown RERA number, PBRERA-SAS81-PR1421-082026, Punjab RERA verification, check RERA number Mohali project"
        />
        <link rel="canonical" href={`${SITE_URL}/ananda-crown-rera-number`} />
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
              <p className="text-primary font-display text-base md:text-lg italic mb-2">Registration Lookup</p>
              <h1 className="section-heading text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                RERA Number of <span className="text-gradient-gold">Ananda Crown</span>, Mohali
              </h1>
              <div className="gold-line max-w-md mb-6" />
              <p className="text-muted-foreground text-sm md:text-base">
                Registered with Punjab RERA as <span className="text-primary">{RERA_NUMBER}</span>
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
              <h2 className="font-serif text-xl md:text-2xl mb-3">Understand What RERA Registration Means for You</h2>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                Fund safeguards, declared timelines and buyer recourse, explained for Ananda Crown.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/ananda-crown-rera" className="btn-luxury">
                  Understand what RERA registration means for you
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

export default ReraNumber;