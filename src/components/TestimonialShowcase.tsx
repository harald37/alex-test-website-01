import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    text: "Alex hat unsere freie Trauung begleitet und wir haben die wundervollsten Erinnerungen bekommen. Die Emotionen wurden perfekt eingefangen.",
    names: "Lili & Marvin",
  },
  {
    text: "Wir sind absolut begeistert! Alex hat ein unglaubliches Auge für Details und die kleinen, ungestellten Momente.",
    names: "Sarah & Jonas",
  }
];

interface VariantProps {
  title: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  fontStyle?: string;
  borderStyle?: string;
}

const TestimonialVariant = ({ title, bgColor, textColor, accentColor, fontStyle = "italic", borderStyle = "" }: VariantProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <div className={`py-20 px-6 ${bgColor} ${borderStyle} transition-all duration-500`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className={`font-sans uppercase tracking-[0.4em] text-[8px] ${accentColor} block mb-2`}>{title}</span>
        </div>

        <div className="relative min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <p className={`font-serif text-xl md:text-2xl ${fontStyle} ${textColor} leading-relaxed mb-8`}>
                "{REVIEWS[currentIndex].text}"
              </p>
              <div className={`font-sans uppercase tracking-[0.3em] text-[10px] ${accentColor}`}>
                — {REVIEWS[currentIndex].names}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-8 mt-12">
            <button onClick={prev} className={`${accentColor} hover:scale-110 transition-transform`}><ChevronLeft size={20} strokeWidth={1} /></button>
            <button onClick={next} className={`${accentColor} hover:scale-110 transition-transform`}><ChevronRight size={20} strokeWidth={1} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialShowcase = () => {
  return (
    <div className="space-y-12">
      <TestimonialVariant 
        title="Variante 1: Deep Forest" 
        bgColor="bg-[#1a2e26]" 
        textColor="text-white/90" 
        accentColor="text-white/40" 
      />
      <TestimonialVariant 
        title="Variante 2: Warm Sand" 
        bgColor="bg-[#f2ede4]" 
        textColor="text-zinc-800" 
        accentColor="text-zinc-400" 
      />
      <TestimonialVariant 
        title="Variante 3: Olive Grove" 
        bgColor="bg-[#3d4230]" 
        textColor="text-white/90" 
        accentColor="text-white/30" 
      />
      <TestimonialVariant 
        title="Variante 4: Soft Sage" 
        bgColor="bg-[#dce2d5]" 
        textColor="text-zinc-700" 
        accentColor="text-zinc-500" 
      />
      <TestimonialVariant 
        title="Variante 5: Mocha Earth" 
        bgColor="bg-[#3c2f2a]" 
        textColor="text-white/90" 
        accentColor="text-white/30" 
      />
      <TestimonialVariant 
        title="Variante 6: Desert Clay" 
        bgColor="bg-[#c9b9a8]" 
        textColor="text-zinc-900" 
        accentColor="text-zinc-600" 
      />
      <TestimonialVariant 
        title="Variante 7: Emerald Night" 
        bgColor="bg-[#0a2a22]" 
        textColor="text-white/95" 
        accentColor="text-[#c9b9a8]" 
      />
      <TestimonialVariant 
        title="Variante 8: Linen & Moss" 
        bgColor="bg-[#f9f7f2]" 
        textColor="text-[#2d332f]" 
        accentColor="text-[#3d4230]" 
        borderStyle="border-y border-[#3d4230]/10"
      />
      <TestimonialVariant 
        title="Variante 9: Dark Oak" 
        bgColor="bg-[#261f1d]" 
        textColor="text-white/80" 
        accentColor="text-[#dce2d5]/40" 
      />
      <TestimonialVariant 
        title="Variante 10: Ivory & Gold" 
        bgColor="bg-[#fffcf7]" 
        textColor="text-zinc-800" 
        accentColor="text-[#bfa37e]" 
        fontStyle="not-italic font-light tracking-tight"
      />
    </div>
  );
};
