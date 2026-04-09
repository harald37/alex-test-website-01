import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border border-zinc-100 p-12 md:p-24 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-8 font-sans uppercase tracking-[0.5em] text-[9px] text-zinc-400">
            Reviews
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-4xl text-zinc-800 leading-snug mb-16 tracking-tight">
                "{REVIEWS[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-[1px] bg-zinc-900/10"></div>
                <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-900">{REVIEWS[currentIndex].names}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-12 left-0 w-full flex justify-between px-12">
            <button onClick={prev} className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <ChevronLeft aria-label="Vorheriges" size={20} strokeWidth={1} />
            </button>
            <button onClick={next} className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <ChevronRight aria-label="Nächstes" size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
