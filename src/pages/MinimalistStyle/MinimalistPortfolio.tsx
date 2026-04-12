import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../../constants";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/Button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SEO } from "../../components/SEO";
import { SmoothImage } from "../../components/ui/SmoothImage";

export const MinimalistPortfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const scrollAnchorRef = React.useRef<HTMLDivElement>(null);
  const categories = ["all", "hochzeit", "portrait"];

  const sortedPortfolio = [...IMAGES.PORTFOLIO_2].sort((a, b) => {
    if (a.category === "hochzeit" && b.category === "portrait") return -1;
    if (a.category === "portrait" && b.category === "hochzeit") return 1;
    return 0;
  });

  const filteredImages = filter === "all" 
    ? sortedPortfolio 
    : sortedPortfolio.filter(img => img.category.toLowerCase() === filter);

  const weddingImages = filteredImages.filter(img => img.category === "hochzeit");
  const portraitImages = filteredImages.filter(img => img.category === "portrait");

  const openLightbox = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
    }
  }, [selectedImageIndex, filteredImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
    }
  }, [selectedImageIndex, filteredImages.length]);

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

  // Scroll to filter bar when filter changes
  useEffect(() => {
    if (scrollAnchorRef.current) {
      // Use requestAnimationFrame to ensure the DOM is ready
      requestAnimationFrame(() => {
        const headerHeight = window.innerWidth < 1024 ? 68 : 58;
        const elementPosition = scrollAnchorRef.current?.getBoundingClientRect().top ?? 0;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        // Only scroll if the user is already past the filter bar
        if (window.scrollY > offsetPosition) {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    }
  }, [filter]);

  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-[#f5f2ed] min-h-screen text-[#141414]">
      <SEO 
        title="Portfolio | Echte Hochzeitsmomente | Alex Begopoulos" 
        description="Lasst euch von meinen bisherigen Hochzeitsreportagen inspirieren. Authentische, emotionale und ungestellte Momente eures großen Tages." 
      />
      {/* Hero Section - Variant 01: Klassisch Zentriert */}
      <section className="mb-24 md:mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/40 mb-6 block"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-serif italic mb-8 leading-[0.9]"
          >
            Eure Geschichte in Bildern.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#141414]/60 max-w-xl mx-auto leading-relaxed mb-12 text-lg md:text-xl font-serif italic"
          >
            Authentische Momente, echte Emotionen und zeitlose Erinnerungen, die eure Geschichte so erzählen, wie sie wirklich war.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-12 h-[1px] bg-[#141414]/10 mx-auto mt-12"
          />
        </div>
      </section>

      {/* Scroll Anchor */}
      <div ref={scrollAnchorRef} className="h-px w-full" />

        {/* Category Filter */}
        <div className="sticky top-[68px] lg:top-[58px] z-40 bg-[#f5f2ed]/90 backdrop-blur-md pt-6 pb-2 md:py-8 mb-12 md:mb-16 border-b border-[#141414]/5">
        <ul className="flex items-center justify-center gap-8 md:gap-12 overflow-x-auto no-scrollbar px-4 md:px-0">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setFilter(cat)}
                className={cn(
                  "font-sans uppercase tracking-[0.3em] text-[9px] md:text-[10px] pb-1 border-b transition-all duration-500 whitespace-nowrap",
                  filter === cat 
                    ? "text-[#141414] border-[#141414]" 
                    : "text-[#141414]/40 border-transparent hover:text-[#141414]"
                )}
              >
                {cat === 'all' ? 'Alle' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}
      <div className="space-y-12">
        <AnimatePresence mode="popLayout">
          {weddingImages.length > 0 && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {weddingImages.map((item, index) => (
                <motion.div
                  layout
                  key={item.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="break-inside-avoid mb-12 group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <SmoothImage 
                    src={item.url} 
                    alt={item.alt} 
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          )}
          
          {portraitImages.length > 0 && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {portraitImages.map((item, index) => (
                <motion.div
                  layout
                  key={item.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="break-inside-avoid mb-12 group cursor-pointer"
                  onClick={() => openLightbox(weddingImages.length + index)}
                >
                  <SmoothImage 
                    src={item.url} 
                    alt={item.alt} 
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#141414]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-3 z-[210] flex items-center justify-center"
            >
              <X aria-label="Schließen" size={24} className="md:w-8 md:h-8" strokeWidth={1} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-4 z-[210] flex items-center justify-center"
            >
              <ChevronLeft aria-label="Vorheriges" size={32} className="md:w-12 md:h-12" strokeWidth={1} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all duration-300 p-2 md:p-4 z-[210] flex items-center justify-center"
            >
              <ChevronRight aria-label="Nächstes" size={32} className="md:w-12 md:h-12" strokeWidth={1} />
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
                src={filteredImages[selectedImageIndex].url}
                alt={filteredImages[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain shadow-2xl pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="mt-48 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="w-12 h-[1px] bg-[#141414]/10 mx-auto"></div>
          <h2 className="font-serif italic text-3xl md:text-5xl text-[#141414] leading-relaxed">
            Euch gefällt mein Stil? Lasst uns gemeinsam eure Geschichte festhalten.
          </h2>
          <div className="flex justify-center pt-4">
            <Button to="/kontakt" variant="forest">
              Erzählt mir eure Geschichte
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
