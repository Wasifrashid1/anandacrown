import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import clubhouseImage from '@/assets/amenity-clubhouse.jpg';
import poolImage from '@/assets/amenity-pool.jpg';
import kidsImage from '@/assets/amenity-kids.jpg';
import gardenImage from '@/assets/amenity-garden.jpg';
import interiorImage from '@/assets/interior-living.jpg';
import heroImage from '@/assets/hero-building.jpg';

const galleryImages = [
  { src: heroImage, title: 'Exterior View', category: 'Building' },
  { src: clubhouseImage, title: 'Grand Clubhouse', category: 'Amenities' },
  { src: interiorImage, title: 'Living Room', category: 'Interiors' },
  { src: poolImage, title: 'Infinity Pool', category: 'Amenities' },
  { src: gardenImage, title: 'Landscaped Gardens', category: 'Amenities' },
  { src: kidsImage, title: 'Kids Play Area', category: 'Amenities' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg italic mb-4">Visual Experience</p>
          <h2 className="section-heading mb-6">
            A Glimpse of <span className="text-gradient-gold">Grandeur</span>
          </h2>
          <div className="gold-line max-w-md mx-auto" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              className={`group relative overflow-hidden rounded-sm cursor-pointer luxury-card ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`overflow-hidden ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={`${image.title} - Ananda Crown Mohali ${image.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-wider text-primary mb-1 block">
                  {image.category}
                </span>
                <h4 className="font-serif text-lg md:text-xl">{image.title}</h4>
              </div>

              {/* Gold Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            className="max-w-5xl max-h-[80vh] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={`${selectedImage.title} - Ananda Crown Mohali Luxury Apartments`}
              className="max-w-full max-h-[80vh] object-contain rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <span className="text-xs uppercase tracking-wider text-primary mb-1 block">
                {selectedImage.category}
              </span>
              <h4 className="font-serif text-2xl">{selectedImage.title}</h4>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
