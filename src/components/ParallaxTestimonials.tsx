import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../constants";

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

export const ParallaxTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[700px] md:min-h-[850px] overflow-hidden flex items-center justify-center py-24"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={IMAGES.PORTFOLIO_2[12].url} 
          alt="Wedding Background" 
          className="w-full h-[130%] object-cover brightness-[0.85]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Variant 10 Style Overlay - Modified to be transparent with subtle border */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="backdrop-blur-[2px] border border-white/10 p-12 md:p-24 relative shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-transparent px-8 font-sans uppercase tracking-[0.5em] text-[9px] text-white/40">
            Reviews
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-4xl text-white leading-snug mb-16 tracking-tight drop-shadow-sm">
                "{REVIEWS[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-[1px] bg-white/20"></div>
                <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/80">{REVIEWS[currentIndex].names}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute bottom-12 left-0 w-full flex justify-between px-8 md:px-12">
            <button 
              onClick={prev} 
              className="text-white/20 hover:text-white transition-colors p-2"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            <button 
              onClick={next} 
              className="text-white/20 hover:text-white transition-colors p-2"
              aria-label="Next review"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
