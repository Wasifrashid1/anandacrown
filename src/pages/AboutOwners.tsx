import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';

const AboutOwners = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ananda Group",
    "url": "https://www.anandacrownmohali.com/about-ananda-crown-mohali-owners",
    "founder": [
      { "@type": "Person", "name": "Sahil Aggarwal", "jobTitle": "Founder" },
      { "@type": "Person", "name": "Anuj Bansal", "jobTitle": "Co-Founder" }
    ],
    "description": "Ananda Group – builders of Ananda Crown Mohali with 20+ years of construction excellence and 6+ successful projects."
  };

  return (
    <>
      <Helmet>
        <title>About the Owners of Ananda Crown Mohali | 20+ Years of Excellence</title>
        <meta name="description" content="Meet Sahil Aggarwal and Anuj Bansal, the visionaries behind Ananda Crown Mohali. Discover Ananda Group's legacy of 6+ successful projects and 20 years of expertise." />
        <meta name="keywords" content="Ananda Crown Mohali Owner, Sahil Aggarwal Ananda Group, Anuj Bansal Ananda Group, Ananda Group Bathinda Projects, Best Builder in Sector 78 Mohali" />
        <link rel="canonical" href="https://www.anandacrownmohali.com/about-ananda-crown-mohali-owners" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-24 md:pt-32 pb-20">
          <article className="container mx-auto px-4 md:px-8 max-w-4xl">
            <nav className="mb-6 md:mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </nav>

            <motion.header className="mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary font-display text-base md:text-lg italic mb-2">Leadership & Legacy</p>
              <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                About Ananda Crown Mohali Owner & Ananda Group
              </h1>
              <div className="gold-line max-w-md mb-6" />
            </motion.header>

            <motion.div className="space-y-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {/* Intro */}
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                <Link to="/" className="text-primary hover:underline">Ananda Crown Mohali</Link> is backed by a leadership team known for integrity, execution excellence, and long-term commitment to quality construction in Punjab. The owners of Ananda Crown Mohali, Mr. Sahil Aggarwal and Mr. Anuj Bansal, bring more than two decades of combined construction and development expertise. Through Ananda Group, they have successfully delivered landmark residential developments and now bring that legacy to <Link to="/location" className="text-primary hover:underline">Sector 78 Mohali</Link>.
              </p>

              {/* Founders */}
              <section>
                <h2 className="font-serif text-xl md:text-3xl mb-4">The Force Behind the Crown: Meet the Founders</h2>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  At the core of Ananda Crown Mohali Owner leadership are two respected names in Punjab's real estate sector:
                </p>

                <div className="luxury-card p-5 md:p-6 mb-4">
                  <h3 className="font-serif text-lg md:text-xl text-primary mb-2">Mr. Sahil Aggarwal – Founder, Ananda Group</h3>
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                    A visionary entrepreneur with a strong understanding of urban expansion and premium residential planning. Sahil Aggarwal has been instrumental in conceptualizing large-scale residential ecosystems focused on lifestyle, connectivity, and long-term appreciation.
                  </p>
                </div>

                <div className="luxury-card p-5 md:p-6 mb-4">
                  <h3 className="font-serif text-lg md:text-xl text-primary mb-2">Mr. Anuj Bansal – Co-Founder, Ananda Group</h3>
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                    A construction strategist known for structural precision, execution quality, and timely project completion. Anuj Bansal ensures that every project under Ananda Group reflects durability, compliance, and engineering excellence.
                  </p>
                </div>

                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Together, Sahil Aggarwal Ananda Group leadership and Anuj Bansal Ananda Group experience create a strong foundation of trust and transparency.
                </p>
              </section>

              {/* Bathinda to Mohali */}
              <section>
                <h2 className="font-serif text-xl md:text-3xl mb-4">From Bathinda's Landmarks to Mohali's Skyline</h2>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  Before entering Mohali's luxury residential segment, Ananda Group built a solid reputation through multiple successful Ananda Group Bathinda Projects. With more than six completed developments, the group earned confidence through transparent dealings, timely possession, and superior build quality.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  The success of major residential communities in Bathinda laid the groundwork for expanding into Mohali's premium real estate landscape. With <Link to="/location" className="text-primary hover:underline">Sector 78</Link> emerging as a high-growth corridor, Ananda Crown was envisioned as a flagship development representing the next phase of Ananda Group's journey.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  This transition from Bathinda to Mohali reflects not expansion for scale — but expansion for excellence.
                </p>
              </section>

              {/* Philosophy */}
              <section>
                <h2 className="font-serif text-xl md:text-3xl mb-4">Why Ananda Crown? The Founders' Philosophy</h2>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                  <Link to="/" className="text-primary hover:underline">Ananda Crown Mohali</Link> is more than a residential project. It is a statement of intent by its owners. The philosophy behind the project rests on three pillars:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="luxury-card p-5">
                    <h3 className="font-serif text-lg text-primary mb-2">Unmatched Luxury</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      Introducing ultra-premium <Link to="/floor-plans" className="text-primary hover:underline">3 BHK</Link>, <Link to="/floor-plans" className="text-primary hover:underline">4 BHK</Link>, and spacious residences in Sector 78 Mohali with high-rise architectural standards.
                    </p>
                  </div>
                  <div className="luxury-card p-5">
                    <h3 className="font-serif text-lg text-primary mb-2">Investor Safety & Compliance</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      Every aspect is structured with RERA compliance and documentation transparency, reflecting the founders' "Safety First" commitment.
                    </p>
                  </div>
                  <div className="luxury-card p-5">
                    <h3 className="font-serif text-lg text-primary mb-2">Community-Centric Living</h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      Ananda Crown is designed as a gated ecosystem offering lifestyle amenities that encourage family well-being and social connectivity.
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  This approach positions Ananda Group among the best builder in Sector 78 Mohali conversations, driven by trust rather than marketing noise.
                </p>
              </section>

              {/* Personal Commitment */}
              <section>
                <h2 className="font-serif text-xl md:text-3xl mb-4">A Personal Commitment to Mohali's Future</h2>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  Unlike anonymous developers, the owners of Ananda Crown Mohali are actively involved and personally accountable. Sahil Aggarwal and Anuj Bansal maintain a hands-on approach, ensuring quality, transparency, and execution discipline.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  With deep roots in Punjab and a forward-looking vision aligned with global luxury benchmarks, Ananda Group aims to redefine high-rise living in Mohali.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Choosing <Link to="/" className="text-primary hover:underline">Ananda Crown</Link> means choosing a project backed by proven leadership, experience, and long-term commitment.
                </p>
              </section>
            </motion.div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default AboutOwners;
