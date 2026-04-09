import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    text: "Alex hat unsere freie Trauung begleitet und wir haben die wundervollsten Erinnerungen bekommen. Die Emotionen wurden perfekt eingefangen und wir haben uns so wohl gefühlt. Wir würden ihn jedem weiterempfehlen.",
    names: "Lili & Marvin",
  },
  {
    text: "Wir sind absolut begeistert! Alex hat ein unglaubliches Auge für Details und die kleinen, ungestellten Momente. Seine ruhige Art hat uns jegliche Nervosität genommen. Vielen Dank für diese zeitlosen Schätze!",
    names: "Sarah & Jonas",
  },
  {
    text: "Vom ersten Kennenlernen bis zur Galerie war alles perfekt. Alex ist ein fantastischer Fotograf und toller Mensch. Die Bilder strahlen eine Natürlichkeit und Wärme aus, die wir uns genau so gewünscht haben.",
    names: "Elena & Marc",
  }
];

export const GreenBannerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="bg-[#1a2e26] py-24 md:py-32 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-white/40 block mb-4">Das sagen meine Paare</span>
          <h2 className="font-serif text-3xl md:text-5xl italic uppercase tracking-widest text-white">Testimonials</h2>
        </div>

        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              <p className="font-serif text-xl md:text-3xl italic text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                "{REVIEWS[currentIndex].text}"
              </p>
              
              <div className="font-serif text-lg md:text-xl italic text-white/60">
                — {REVIEWS[currentIndex].names}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls (Static) */}
          <div className="flex md:hidden items-center justify-center space-x-8 mt-12">
            <button 
              onClick={prev} 
              className="text-white/40 hover:text-white transition-colors p-2"
              aria-label="Previous review"
            >
              <ChevronLeft aria-label="Vorheriges" size={24} strokeWidth={1.5} />
            </button>
            
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/20">
              {currentIndex + 1} / {REVIEWS.length}
            </span>

            <button 
              onClick={next} 
              className="text-white/40 hover:text-white transition-colors p-2"
              aria-label="Next review"
            >
              <ChevronRight aria-label="Nächstes" size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 w-full justify-between pointer-events-none">
            <button 
              onClick={prev} 
              className="pointer-events-auto text-white/20 hover:text-white transition-colors p-2 -ml-12"
              aria-label="Previous review"
            >
              <ChevronLeft aria-label="Vorheriges" size={32} strokeWidth={1} />
            </button>
            <button 
              onClick={next} 
              className="pointer-events-auto text-white/20 hover:text-white transition-colors p-2 -mr-12"
              aria-label="Next review"
            >
              <ChevronRight aria-label="Nächstes" size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
