import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';
import { Button } from './ui/Button';

export const HomePortfolioGrid: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const highlightIndices = [0, 2, 12, 1, 6, 8, 14, 15, 16];
  const highlightImages = highlightIndices.map(index => IMAGES.PORTFOLIO_2[index]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev < highlightImages.length - 1 ? prev + 1 : 0));
    }
  }, [selectedImageIndex, highlightImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : highlightImages.length - 1));
    }
  }, [selectedImageIndex, highlightImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeLightbox, nextImage, prevImage]);

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex]);

  return (
    <>
      <section className="py-24 md:py-48 px-6 md:px-12 bg-surface" id="highlights">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Eingefangene Augenblicke</span>
            <h2 className="font-serif italic text-4xl md:text-7xl text-zinc-900 leading-tight">
              Momente, die <br className="hidden md:block" /> die Zeit überdauern.
            </h2>
          </div>

          <div className="columns-2 md:columns-2 lg:columns-3 gap-4 md:gap-8">
            {highlightImages.map((image, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid bg-zinc-100 group rounded-sm overflow-hidden mb-6 md:mb-8 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-auto transition-transform duration-[2s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-24 md:mt-32 text-center">
            <Button to="/portfolio" variant="link">
              Das gesamte Portfolio ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-3 z-[210] flex items-center justify-center"
            >
              <X size={24} className="md:w-8 md:h-8" strokeWidth={1} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-4 z-[210] flex items-center justify-center"
            >
              <ChevronLeft size={32} className="md:w-12 md:h-12" strokeWidth={1} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-4 z-[210] flex items-center justify-center"
            >
              <ChevronRight size={32} className="md:w-12 md:h-12" strokeWidth={1} />
            </button>

            <motion.div
              key={selectedImageIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x > swipeThreshold) {
                  prevImage();
                } else if (info.offset.x < -swipeThreshold) {
                  nextImage();
                }
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-full max-h-full flex flex-col items-center cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={highlightImages[selectedImageIndex].url}
                alt={highlightImages[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain shadow-2xl pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
