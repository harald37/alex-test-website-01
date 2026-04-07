import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';
import { Testimonials } from '../components/Testimonials';
import { Button } from '../components/ui/Button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <img 
            src={IMAGES.HERO} 
            alt="Elegante Hochzeitsreportage" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 mb-12 block">
              Authentische Hochzeitsreportagen
            </span>
            
            <h1 className="font-sans uppercase tracking-[0.4em] text-3xl md:text-6xl lg:text-7xl text-white/90 mb-12 font-light">
              Alex Begopoulos
            </h1>
            
            <div className="w-12 h-[1px] bg-white/10 mb-12" />
            
            <p className="font-serif italic text-xl md:text-3xl text-white/70 mb-24 max-w-2xl leading-relaxed">
              Authentische Momente & zeitlose Ästhetik <br className="hidden md:block" /> 
              in Hannover & weltweit
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button to="/portfolio" dark>
                Portfolio entdecken
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-32 md:py-48 px-6 md:px-24 bg-surface-container-lowest flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-12 block">Die Vision eines Geschichtenerzählers</span>
          <h2 className="font-serif italic text-4xl md:text-7xl text-zinc-900 leading-[1.1] mb-16">
            Echte Emotionen. <br className="hidden md:block"/>Zeitlose Ästhetik.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-24 text-left">
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">01. Authentizität</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                Kein steifes Posing. Ich begleite euch als stiller Beobachter und fange die Momente ein, wie sie wirklich passieren – ungestellt und ehrlich.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">02. Diskretion</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                An eurem Tag bin ich Teil der Gesellschaft, nicht der Regisseur. So entstehen Bilder von euren Liebsten, die sich völlig unbeobachtet fühlen.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">03. Zeitlosigkeit</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                Trends kommen und gehen. Mein Fine-Art Stil sorgt dafür, dass eure Bilder auch in 30 Jahren noch modern und elegant wirken.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="tracking-wide text-zinc-600 leading-relaxed text-base md:text-lg italic font-serif">
              "Als dein Hochzeitsfotograf in Hannover begleite ich euch nicht nur in Niedersachsen, sondern dort, wo eure Geschichte geschrieben wird – ob in den sanften Hügeln der Toskana oder im urbanen Herz Berlins."
            </p>
            <div className="flex flex-col items-center group pt-8">
              <span className="h-[1px] w-12 bg-zinc-900/20 group-hover:w-24 transition-all duration-500"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
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

      {/* About Me Short */}
      <section className="bg-zinc-50 py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div>
              <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-6 block">Der Fotograf</span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-zinc-900 leading-tight mb-8">Hallo, ich bin Alex.</h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed tracking-wide mb-8">
                Ich liebe es, echte Emotionen und ungestellte Momente einzufangen. In Hannover und Umgebung bin ich seit Jahren als Hochzeitsfotograf tätig und kenne die schönsten Plätze für eure Geschichte.
              </p>
              <Button to="/about" variant="link">
                Mehr über mich erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quote Section */}
      <section className="py-48 px-8 bg-surface-container-lowest text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-[1px] bg-zinc-900/10 mx-auto mb-16"></div>
          <h2 className="font-serif italic text-3xl md:text-5xl text-zinc-800 leading-relaxed mb-16">
            "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
          </h2>
          <div className="flex justify-center">
            <Button to="/contact">
              Erzählt mir eure Geschichte
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={highlightImages[selectedImageIndex].url}
                alt={highlightImages[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
