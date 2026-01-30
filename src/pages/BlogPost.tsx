import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogBySlug, blogPosts } from '@/data/blogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Ananda Crown Mohali"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ananda Crown Mohali"
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Ananda Crown Mohali</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-24 md:pt-32 pb-20">
          <article className="container mx-auto px-4 md:px-8 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6 md:mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </nav>

            {/* Header */}
            <motion.header
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="gold-line max-w-xs mb-6" />
              
              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {post.keywords.slice(0, 4).map((keyword) => (
                  <span 
                    key={keyword}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              className="prose prose-invert prose-gold max-w-none mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="luxury-card p-6 md:p-8 text-center mb-12">
              <h3 className="font-serif text-xl md:text-2xl mb-3">Interested in Ananda Crown Mohali?</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                Schedule a site visit or download our brochure for complete details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/#contact" className="btn-luxury">
                  Book Site Visit
                </Link>
                <a 
                  href="https://wa.me/919779999705?text=Hello%2C%20I%20am%20interested%20in%20Ananda%20Crown%20Mohali.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-outline flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <section>
              <h2 className="font-serif text-xl md:text-2xl mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="luxury-card p-4 group"
                  >
                    <h3 className="font-serif text-sm md:text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{related.readTime}</span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default BlogPost;
