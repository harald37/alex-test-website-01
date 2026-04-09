import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../constants';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';

const VARIANTS = [
  {
    eyebrow: "Hochzeitsfotograf Hannover",
    h1: "Eure Geschichte. Mein Blick.",
    text: "Ich begleite euch an eurem Tag als stiller Beobachter und fange die echten Momente ein.",
    image: IMAGES.PORTFOLIO_2[0].url
  },
  {
    eyebrow: "Authentische Reportagen",
    h1: "Ungestellt. Echt. Zeitlos.",
    text: "Keine steifen Posen, sondern die pure Emotion eures Tages – für immer festgehalten.",
    image: IMAGES.PORTFOLIO_2[1].url
  },
  {
    eyebrow: "Alex Begopoulos",
    h1: "Momente für die Ewigkeit.",
    text: "Hochzeitsfotografie mit Fokus auf das, was wirklich zählt: Eure Liebe.",
    image: IMAGES.PORTFOLIO_2[2].url
  },
  {
    eyebrow: "Hannover & Region",
    h1: "Liebe in Bildern.",
    text: "Zeitlose Ästhetik trifft auf echte Gefühle. Eure Reportage in Niedersachsen.",
    image: IMAGES.PORTFOLIO_2[3].url
  },
  {
    eyebrow: "Fine Art Fotografie",
    h1: "Authentisch. Pur. Emotional.",
    text: "Ich schaffe Erinnerungen, die euch auch in Jahrzehnten noch zu Tränen rühren werden.",
    image: IMAGES.PORTFOLIO_2[4].url
  },
  {
    eyebrow: "Zeitlose Ästhetik",
    h1: "Euer Tag, unvergessen.",
    text: "Vom Getting Ready bis zum letzten Tanz – ich dokumentiere eure Geschichte.",
    image: IMAGES.PORTFOLIO_2[5].url
  },
  {
    eyebrow: "Hochzeitsfotograf weltweit",
    h1: "Euer Abenteuer beginnt hier.",
    text: "Ob in Hannover oder am anderen Ende der Welt: Ich halte eure Reise fest.",
    image: IMAGES.PORTFOLIO_2[6].url
  },
  {
    eyebrow: "Euer Fotograf Alex",
    h1: "Die Kunst des Augenblicks.",
    text: "Ich sehe die kleinen Details, die euren Tag so einzigartig und besonders machen.",
    image: IMAGES.PORTFOLIO_2[7].url
  },
  {
    eyebrow: "Natürlich & Elegant",
    h1: "Erinnerungen, die bleiben.",
    text: "Eure Hochzeit vergeht wie im Flug. Meine Bilder lassen sie ewig währen.",
    image: IMAGES.PORTFOLIO_2[8].url
  },
  {
    eyebrow: "Aus Leidenschaft",
    h1: "Eure Liebe, mein Fokus.",
    text: "Mit Herzblut und Auge für Ästhetik begleite ich euch an eurem schönsten Tag.",
    image: IMAGES.PORTFOLIO_2[9].url
  },
  {
    eyebrow: "Niedersachsen & mehr",
    h1: "Magie in jedem Klick.",
    text: "Licht, Schatten und echte Emotionen – so erzähle ich eure Liebesgeschichte.",
    image: IMAGES.PORTFOLIO_2[10].url
  },
  {
    eyebrow: "Eure Hochzeitsreportage",
    h1: "Echte Gefühle, keine Posen.",
    text: "Genießt euren Tag in vollen Zügen, während ich die Magie im Hintergrund einfange.",
    image: IMAGES.PORTFOLIO_2[11].url
  },
  {
    eyebrow: "Für moderne Paare",
    h1: "Zeitlose Hochzeitsfotografie.",
    text: "Ein moderner Blick auf traditionelle Werte. Eure Hochzeit in zeitlosen Bildern.",
    image: IMAGES.PORTFOLIO_2[12].url
  },
  {
    eyebrow: "Kunstvolle Reportagen",
    h1: "Eure Story, kunstvoll erzählt.",
    text: "Jedes Bild ein Kunstwerk, jede Serie eine Geschichte. Eure Geschichte.",
    image: IMAGES.PORTFOLIO_2[13].url
  },
  {
    eyebrow: "Hochzeitsfotograf Hannover",
    h1: "Licht, Liebe & Leidenschaft.",
    text: "Drei Zutaten für Bilder, die mehr sagen als tausend Worte. Euer Tag in Hannover.",
    image: IMAGES.PORTFOLIO_2[14].url
  }
];

export const HomeVariantsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % VARIANTS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + VARIANTS.length) % VARIANTS.length);

  const current = VARIANTS[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={current.image} 
            alt="Background" 
            className="w-full h-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center md:items-start justify-end px-6 md:px-24 pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 mb-8 block">
              {current.eyebrow}
            </h1>
            
            <p className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight max-w-4xl">
              {current.h1}
            </p>

            <h2 className="text-white/70 text-base md:text-xl leading-relaxed mb-12 max-w-2xl">
              {current.text}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-30">
        <button onClick={prev} className="p-4 text-white/40 hover:text-white transition-colors">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-30">
        <button onClick={next} className="p-4 text-white/40 hover:text-white transition-colors">
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-8 z-30 text-white/40 font-sans text-xs tracking-widest">
        {currentIndex + 1} / {VARIANTS.length}
      </div>

      {/* Info */}
      <div className="absolute top-8 left-8 z-30 text-white/40 font-sans text-[10px] uppercase tracking-[0.4em]">
        Hero Text Varianten Showcase
      </div>
    </div>
  );
};
