import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { ChevronDown, MousePointer2, ArrowDown } from 'lucide-react';

const HERO_IMAGE = "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp";

const IndicatorContainer = ({ id, title, children }: { id: number, title: string, children: React.ReactNode }) => (
  <section className="relative h-screen w-full flex flex-col mb-20 overflow-hidden bg-zinc-900">
    <div className="absolute top-8 left-8 z-30 bg-white/10 backdrop-blur px-4 py-2 rounded text-white font-mono text-[10px] uppercase tracking-widest">
      Variante {id}: {title}
    </div>
    <div className="absolute inset-0 z-0 bg-zinc-900">
      <img
        src={HERO_IMAGE}
        alt={`Variante ${id}`}
        className="w-full h-full object-cover opacity-60 grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    
    {/* Standard Content to show context */}
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
      <span className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 mb-8 block">
        Authentische Hochzeitsreportagen
      </span>
      <p className="font-serif italic text-xl md:text-3xl text-white/70 leading-relaxed max-w-2xl mb-12">
        Authentische Momente & zeitlose Ästhetik <br className="hidden md:block" />
        in Hannover & weltweit
      </p>
      <Button to="/portfolio" dark>Portfolio entdecken</Button>
    </div>

    {/* The Indicator */}
    <div className="absolute bottom-12 left-0 w-full flex justify-center z-20">
      {children}
    </div>
  </section>
);

export const ScrollIndicatorTest = () => {
  return (
    <div className="bg-zinc-950 pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white italic mb-6">Scroll Indicator Test</h1>
        <p className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed">
          20 verschiedene Möglichkeiten, den Nutzer zum Scrollen zu animieren.
        </p>
      </div>

      {/* 1. Classic Mouse */}
      <IndicatorContainer id={1} title="Classic Mouse">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </div>
      </IndicatorContainer>

      {/* 2. Growing Line */}
      <IndicatorContainer id={2} title="Growing Line">
        <div className="h-16 w-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-white/60"
          />
        </div>
      </IndicatorContainer>

      {/* 3. Pulsing Dot */}
      <IndicatorContainer id={3} title="Pulsing Dot">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </IndicatorContainer>

      {/* 4. Text & Chevron */}
      <IndicatorContainer id={4} title="Text & Chevron">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/40">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </div>
      </IndicatorContainer>

      {/* 5. Double Chevron */}
      <IndicatorContainer id={5} title="Double Chevron">
        <div className="flex flex-col items-center -space-y-2">
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </div>
      </IndicatorContainer>

      {/* 6. Rotating Text Circle */}
      <IndicatorContainer id={6} title="Rotating Circle">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative w-24 h-24 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text className="text-[8px] uppercase tracking-[0.2em] fill-white/30 font-sans">
              <textPath href="#circlePath">Scroll down • Scroll down • </textPath>
            </text>
          </svg>
          <div className="absolute w-1 h-1 bg-white/40 rounded-full" />
        </motion.div>
      </IndicatorContainer>

      {/* 7. Moving Path Dot */}
      <IndicatorContainer id={7} title="Path Dot">
        <div className="h-20 w-4 flex flex-col items-center justify-between">
          <div className="w-[1px] h-full bg-white/10 relative">
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
            />
          </div>
        </div>
      </IndicatorContainer>

      {/* 8. Minimalist Label */}
      <IndicatorContainer id={8} title="Minimalist Label">
        <motion.span 
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-sans uppercase tracking-[1em] text-[9px] text-white/60"
        >
          SCROLL
        </motion.span>
      </IndicatorContainer>

      {/* 9. The Wave */}
      <IndicatorContainer id={9} title="The Wave">
        <div className="flex gap-1 items-end h-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              className="w-[2px] bg-white/40"
            />
          ))}
        </div>
      </IndicatorContainer>

      {/* 10. The Arch */}
      <IndicatorContainer id={10} title="The Arch">
        <div className="w-8 h-12 border border-white/20 rounded-t-full flex items-end justify-center pb-2">
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </IndicatorContainer>

      {/* 11. Hand Swipe */}
      <IndicatorContainer id={11} title="Hand Swipe">
        <motion.div 
          animate={{ y: [20, 0, 20], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MousePointer2 className="w-6 h-6 text-white/40 rotate-180" />
        </motion.div>
      </IndicatorContainer>

      {/* 12. The Pillar */}
      <IndicatorContainer id={12} title="The Pillar">
        <div className="w-1 h-12 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full bg-[#c5a059]"
          />
        </div>
      </IndicatorContainer>

      {/* 13. Serif Explore */}
      <IndicatorContainer id={13} title="Serif Explore">
        <div className="flex flex-col items-center gap-4">
          <span className="font-serif italic text-lg text-white/40">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </IndicatorContainer>

      {/* 14. The Compass */}
      <IndicatorContainer id={14} title="The Compass">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </div>
      </IndicatorContainer>

      {/* 15. Fading Text */}
      <IndicatorContainer id={15} title="Fading Text">
        <motion.span 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="font-serif italic text-sm text-white/50"
        >
          Scroll to begin your journey
        </motion.span>
      </IndicatorContainer>

      {/* 16. The Box */}
      <IndicatorContainer id={16} title="The Box">
        <div className="w-6 h-6 border border-white/20 relative">
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-0 w-full h-[1px] bg-[#c5a059]"
          />
        </div>
      </IndicatorContainer>

      {/* 17. Side Label (Right) */}
      <IndicatorContainer id={17} title="Side Label">
        <div className="absolute right-8 bottom-0 flex flex-col items-center gap-8">
          <span className="font-sans uppercase tracking-[0.8em] text-[9px] text-white/30 rotate-90 origin-right">SCROLL</span>
          <div className="w-[1px] h-24 bg-white/10" />
        </div>
      </IndicatorContainer>

      {/* 18. Expanding Rings */}
      <IndicatorContainer id={18} title="Expanding Rings">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full" />
          <motion.div 
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border border-white/40 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute inset-0 border border-white/40 rounded-full"
          />
        </div>
      </IndicatorContainer>

      {/* 19. The Hook */}
      <IndicatorContainer id={19} title="The Hook">
        <svg width="20" height="40" viewBox="0 0 20 40" className="fill-none stroke-white/30 stroke-1">
          <motion.path 
            d="M 10 0 V 30 C 10 35 15 35 15 30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="10" cy="0" r="1" className="fill-white/30" />
        </svg>
      </IndicatorContainer>

      {/* 20. The Arrowhead */}
      <IndicatorContainer id={20} title="The Arrowhead">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-6 flex items-center justify-center"
        >
          <svg viewBox="0 0 40 20" className="w-full h-full fill-none stroke-white/20 stroke-[0.5]">
            <path d="M 0 0 L 20 15 L 40 0" />
          </svg>
        </motion.div>
      </IndicatorContainer>

      <div className="py-32 text-center bg-zinc-900">
        <Button to="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
};

export default ScrollIndicatorTest;
