import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { MinimalistTestimonials } from '../components/MinimalistTestimonials';
import { HomePortfolioGrid } from '../components/HomePortfolioGrid';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Custom Button Component for the variants
const CustomButton = ({ to, children, className, variant = 1 }: any) => {
  const baseStyles = "inline-flex items-center justify-center font-sans uppercase tracking-[0.3em] text-[10px] transition-all duration-500 py-5 px-12";
  
  const variants: Record<number, string> = {
    1: "border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white",
    2: "bg-zinc-900 text-white hover:bg-zinc-800 rounded-full",
    3: "border-b border-zinc-900 text-zinc-900 px-0 hover:opacity-50",
    4: "bg-transparent border border-zinc-900 text-zinc-900 hover:scale-105",
    5: "bg-zinc-900 text-white tracking-[0.5em] font-bold",
    6: "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white italic font-serif lowercase tracking-normal text-lg",
    7: "bg-zinc-100 text-zinc-900 border border-zinc-200 hover:border-zinc-900",
    8: "bg-zinc-900 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
    9: "border border-zinc-900 text-zinc-900 relative overflow-hidden group/btn",
    10: "bg-zinc-900 text-white rounded-none skew-x-[-12deg] hover:skew-x-0",
    11: "border border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900",
    12: "bg-zinc-900 text-white py-6 px-16 text-xs tracking-[0.6em]",
    13: "border border-zinc-900 text-zinc-900 rounded-lg hover:bg-zinc-50",
    14: "bg-zinc-900 text-white ring-offset-2 ring-2 ring-transparent hover:ring-zinc-900",
    15: "border-x border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white",
    // Deep Forest Variants (16-30)
    16: "bg-[#1a2e26] text-white hover:bg-[#2d4a3e]",
    17: "border border-[#1a2e26] text-[#1a2e26] hover:bg-[#1a2e26] hover:text-white",
    18: "bg-[#1a2e26] text-white rounded-full hover:shadow-lg hover:-translate-y-1",
    19: "border-b-2 border-[#1a2e26] text-[#1a2e26] px-0 hover:pb-2 transition-all",
    20: "bg-transparent border-2 border-[#1a2e26] text-[#1a2e26] font-bold tracking-[0.4em]",
    21: "bg-[#1a2e26] text-white italic font-serif lowercase tracking-normal text-xl px-16",
    22: "bg-[#f5f2ed] text-[#1a2e26] border border-[#1a2e26]/20 hover:border-[#1a2e26]",
    23: "bg-[#1a2e26] text-white shadow-[0_10px_20px_rgba(26,46,38,0.2)] hover:shadow-none",
    24: "border border-[#1a2e26] text-[#1a2e26] relative overflow-hidden group/btn-forest",
    25: "bg-[#1a2e26] text-white rounded-none -rotate-2 hover:rotate-0",
    26: "border border-[#1a2e26]/30 text-[#1a2e26]/60 hover:text-[#1a2e26] hover:border-[#1a2e26]",
    27: "bg-[#1a2e26] text-white py-8 px-20 text-sm tracking-[0.8em] font-light",
    28: "border-2 border-[#1a2e26] text-[#1a2e26] rounded-2xl hover:bg-[#1a2e26]/5",
    29: "bg-[#1a2e26] text-white ring-4 ring-[#1a2e26]/10 hover:ring-[#1a2e26]/30",
    30: "border-y border-[#1a2e26] text-[#1a2e26] hover:tracking-[0.5em]"
  };

  const content = (
    <>
      {(variant === 9 || variant === 24) && (
        <div className={cn(
          "absolute inset-0 translate-y-full transition-transform duration-500",
          variant === 9 ? "bg-zinc-900 group-hover/btn:translate-y-0" : "bg-[#1a2e26] group-hover/btn-forest:translate-y-0"
        )} />
      )}
      <span className={cn(
        "relative z-10", 
        variant === 9 && "group-hover/btn:text-white",
        variant === 24 && "group-hover/btn-forest:text-white"
      )}>
        {children}
      </span>
      {(variant === 3 || variant === 6 || variant === 19 || variant === 21) && <ArrowRight className="ml-4 w-4 h-4" />}
    </>
  );

  return (
    <Link to={to || "#"} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </Link>
  );
};

const HomeTemplate = ({ variant }: { variant: number }) => (
  <div className="flex flex-col bg-[#f5f2ed] text-[#141414]">
    {/* Hero Section */}
    <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#141414]">
      <div className="absolute inset-0 z-0 bg-[#141414]">
        <img 
          src="https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2560/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp" 
          alt="Elegante Hochzeitsreportage Hannover" 
          className="w-full h-full object-cover opacity-60 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center md:items-start justify-end text-center md:text-left px-6 md:px-24 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 mb-8 block">
            Hochzeitsfotograf Hannover
          </h1>
          <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white mb-0 leading-tight max-w-4xl">
            Authentische Hochzeitsreportagen
          </h2>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/40">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      </div>
    </section>

    {/* Philosophy Block */}
    <section className="py-32 md:py-48 px-6 md:px-24 bg-[#f5f2ed] flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-12 block">Meine Philosophie</span>
        <div className="w-12 h-[1px] bg-[#141414]/10 mx-auto mb-12"></div>
        <h2 className="font-serif italic text-2xl md:text-5xl text-[#141414] leading-relaxed mb-24 max-w-4xl mx-auto">
          Ich fange die Momente ein, die euren Tag unvergesslich machen. Ungestellt, ehrlich und mit einem Auge für das besondere Detail.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-24 text-left">
          <div className="space-y-6">
            <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-[#141414]/40">01. Authentizität</span>
            <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
              Kein steifes Posing. Ich begleite euch als stiller Beobachter und fange die Momente ein, wie sie wirklich passieren – ungestellt und ehrlich.
            </p>
          </div>
          <div className="space-y-6">
            <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-[#141414]/40">02. Diskretion</span>
            <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
              An eurem Tag bin ich Teil der Gesellschaft, nicht der Regisseur. So entstehen Bilder von euren Liebsten, die sich völlig unbeobachtet fühlen.
            </p>
          </div>
          <div className="space-y-6">
            <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-[#141414]/40">03. Zeitlosigkeit</span>
            <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
              Trends kommen und gehen. Durch meine hochwertige Bildsprache garantiere ich euch, dass eure Hochzeitsreportage auch nach Jahrzehnten nichts von ihrer Schönheit verliert.
            </p>
          </div>
        </div>
      </div>
    </section>

    <HomePortfolioGrid />

    {/* About Me Short */}
    <section className="bg-[#f5f2ed] py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="aspect-[3/4] overflow-hidden rounded-2xl">
          <img src={IMAGES.ABOUT} alt="Alex Begopoulos" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-12">
          <div>
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-6 block">Der Fotograf</span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#141414] leading-tight mb-8">Hallo, ich bin Alex.</h2>
            <p className="text-[#141414]/70 text-base md:text-lg leading-relaxed tracking-wide mb-8">
              Ich liebe es, echte Emotionen und ungestellte Momente einzufangen. In Hannover und Umgebung bin ich seit Jahren als Hochzeitsfotograf tätig und kenne die schönsten Plätze für eure Geschichte.
            </p>
            <CustomButton to="/ueber-mich" variant={variant}>
              Mehr über mich erfahren
            </CustomButton>
          </div>
        </div>
      </div>
    </section>

    <MinimalistTestimonials />

    {/* Quote Section */}
    <section className="py-48 px-8 bg-[#f5f2ed] text-center">
      <div className="max-w-3xl mx-auto">
        <div className="w-12 h-[1px] bg-[#141414]/10 mx-auto mb-16"></div>
        <h2 className="font-serif italic text-3xl md:text-5xl text-[#141414] leading-relaxed mb-16">
          "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
        </h2>
        <div className="flex justify-center">
          <CustomButton to="/kontakt" variant={variant}>
            Erzählt mir eure Geschichte
          </CustomButton>
        </div>
      </div>
    </section>
  </div>
);

export const HomeButtonVariants = () => {
  const [activeVariant, setActiveVariant] = React.useState(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Variant Selector */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-md p-2 rounded-full shadow-xl border border-zinc-200 flex gap-1 overflow-x-auto max-w-[90vw] no-scrollbar">
        {Array.from({ length: 30 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveVariant(i + 1)}
            className={cn(
              "w-10 h-10 min-w-[40px] rounded-full text-xs font-medium transition-all",
              activeVariant === i + 1 
                ? (i + 1 > 15 ? "bg-[#1a2e26] text-white" : "bg-zinc-900 text-white")
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-[90] text-center">
          <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-zinc-400">Variante {activeVariant}</span>
        </div>
        <HomeTemplate variant={activeVariant} />
      </div>
    </div>
  );
};
