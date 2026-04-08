import React from 'react';
import { cn } from '../lib/utils';

const LogoVariant = ({ 
  children, 
  name, 
  className,
  dark = false 
}: { 
  children: React.ReactNode; 
  name: string;
  className?: string;
  dark?: boolean;
}) => (
  <div className={cn(
    "flex flex-col items-center justify-center p-12 border border-zinc-100 rounded-2xl transition-all hover:shadow-xl hover:border-zinc-200 group",
    dark ? "bg-zinc-900 text-white border-zinc-800" : "bg-white text-zinc-900",
    className
  )}>
    <div className="mb-8 flex items-center justify-center min-h-[80px]">
      {children}
    </div>
    <span className={cn(
      "text-[9px] uppercase tracking-[0.3em] font-sans",
      dark ? "text-zinc-500" : "text-zinc-400"
    )}>
      {name}
    </span>
  </div>
);

export const LogoShowcase = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-6">Logo Design Varianten</h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs max-w-2xl mx-auto leading-relaxed">
          30 exklusive Konzepte für die visuelle Identität von Alex Begopoulos. 
          Von minimalistischer Moderne bis hin zu zeitloser Eleganz.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1. Minimalist Sans (Current Style) */}
        <LogoVariant name="01. Minimalist Stacked">
          <div className="flex flex-col items-center">
            <span className="tracking-[0.6em] text-sm uppercase mb-1">ALEX</span>
            <span className="tracking-[0.6em] text-sm uppercase">BEGOPOULOS</span>
          </div>
        </LogoVariant>

        {/* 2. Classic Serif */}
        <LogoVariant name="02. Classic Serif">
          <div className="font-serif text-3xl tracking-tight">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 3. Luxury Wide */}
        <LogoVariant name="03. Luxury Wide">
          <div className="font-sans font-light tracking-[1.2em] text-xs uppercase">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 4. Signature Style */}
        <LogoVariant name="04. Signature Art">
          <div className="font-signature text-6xl text-zinc-800">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 5. Editorial Mix */}
        <LogoVariant name="05. Editorial Mix">
          <div className="font-serif text-3xl italic">
            Alex <span className="not-italic font-sans text-sm uppercase tracking-[0.4em] ml-2">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 6. Vertical Line Divider */}
        <LogoVariant name="06. Vertical Divider">
          <div className="flex items-center space-x-6">
            <span className="font-sans uppercase tracking-[0.4em] text-xs">Alex</span>
            <div className="w-[1px] h-8 bg-zinc-200" />
            <span className="font-sans uppercase tracking-[0.4em] text-xs">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 7. Monogram Focus */}
        <LogoVariant name="07. Monogram Focus">
          <div className="flex flex-col items-center">
            <span className="font-serif text-5xl italic mb-2">AB</span>
            <span className="font-sans uppercase tracking-[0.5em] text-[8px]">Alex Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 8. Dark Mode Minimal */}
        <LogoVariant name="08. Dark Mode Minimal" dark>
          <div className="font-sans font-thin tracking-[0.8em] text-sm uppercase">
            BEGOPOULOS
          </div>
        </LogoVariant>

        {/* 9. The Dot */}
        <LogoVariant name="09. The Dot">
          <div className="flex items-center space-x-3 font-sans uppercase tracking-[0.4em] text-xs">
            <span>Alex</span>
            <div className="w-1 h-1 bg-zinc-900 rounded-full" />
            <span>Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 10. Serif Bold Italic */}
        <LogoVariant name="10. Serif Bold Italic">
          <div className="font-serif font-bold italic text-4xl tracking-tighter">
            Begopoulos
          </div>
        </LogoVariant>

        {/* 11. Small Caps Sans */}
        <LogoVariant name="11. Small Caps Sans">
          <div className="font-sans text-lg tracking-[0.3em]">
            ALEX <span className="text-zinc-400">BEGOPOULOS</span>
          </div>
        </LogoVariant>

        {/* 12. Underlined Elegance */}
        <LogoVariant name="12. Underlined Elegance">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl italic mb-2">Alex Begopoulos</span>
            <div className="w-12 h-[1px] bg-zinc-900" />
          </div>
        </LogoVariant>

        {/* 13. Geometric Jost */}
        <LogoVariant name="13. Geometric Jost">
          <div className="font-sans font-bold tracking-[0.5em] text-sm uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>
            BEGOPOULOS
          </div>
        </LogoVariant>

        {/* 14. Overlapping Monogram */}
        <LogoVariant name="14. Overlapping">
          <div className="relative">
            <span className="font-serif text-7xl italic opacity-10 absolute -top-8 -left-4">A</span>
            <span className="font-serif text-3xl relative z-10 italic">Alex Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 15. Minimalist Box */}
        <LogoVariant name="15. Minimalist Box">
          <div className="border border-zinc-900 px-8 py-4 font-sans uppercase tracking-[0.4em] text-[10px]">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 16. Deep Forest Theme */}
        <LogoVariant name="16. Deep Forest Theme" className="bg-[#1a2e26] text-white border-none">
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl italic mb-1">Alex</span>
            <span className="font-sans uppercase tracking-[0.6em] text-[8px] opacity-60">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 17. Slash Separator */}
        <LogoVariant name="17. Slash Separator">
          <div className="font-sans text-sm uppercase tracking-[0.3em]">
            Alex <span className="text-zinc-300 mx-2">/</span> Begopoulos
          </div>
        </LogoVariant>

        {/* 18. Noto Serif Light */}
        <LogoVariant name="18. Noto Serif Light">
          <div className="font-serif text-2xl font-light tracking-widest" style={{ fontFamily: 'Noto Serif, serif' }}>
            ALEX BEGOPOULOS
          </div>
        </LogoVariant>

        {/* 19. The Initial Line */}
        <LogoVariant name="19. Initial Line">
          <div className="flex items-baseline">
            <span className="font-serif text-5xl italic mr-2">A.</span>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px]">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 20. Brutalist Bold */}
        <LogoVariant name="20. Brutalist Bold">
          <div className="font-sans font-black text-2xl uppercase tracking-tighter leading-none text-center">
            ALEX<br/>BEGOPOULOS
          </div>
        </LogoVariant>

        {/* 21. Soft Muted */}
        <LogoVariant name="21. Soft Muted" className="bg-zinc-100 border-none">
          <div className="font-serif text-2xl italic text-zinc-500">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 22. Double Line Border */}
        <LogoVariant name="22. Double Line Border">
          <div className="border-y border-zinc-900 py-3 px-6 font-sans uppercase tracking-[0.5em] text-[9px]">
            Alex Begopoulos
          </div>
        </LogoVariant>

        {/* 23. Signature & Sans */}
        <LogoVariant name="23. Signature & Sans">
          <div className="flex flex-col items-end">
            <span className="font-signature text-4xl -mb-4 mr-2 text-zinc-400">Alex</span>
            <span className="font-sans uppercase tracking-[0.4em] text-xs font-bold">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 24. Spaced Lowercase */}
        <LogoVariant name="24. Spaced Lowercase">
          <div className="font-sans tracking-[0.8em] text-xs lowercase">
            alex begopoulos
          </div>
        </LogoVariant>

        {/* 25. Gold Accent */}
        <LogoVariant name="25. Gold Accent">
          <div className="font-serif text-3xl italic">
            Alex <span className="text-[#c5a059]">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 26. Modern Stacked Right */}
        <LogoVariant name="26. Stacked Right">
          <div className="flex flex-col items-end w-full pr-8">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-400">Alex</span>
            <span className="font-sans uppercase tracking-[0.4em] text-sm font-bold">Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 27. Thin Serif Caps */}
        <LogoVariant name="27. Thin Serif Caps">
          <div className="font-serif text-2xl font-light uppercase tracking-[0.4em]">
            Begopoulos
          </div>
        </LogoVariant>

        {/* 28. Circular Vibe (Mock) */}
        <LogoVariant name="28. Geometric Circle">
          <div className="w-20 h-20 rounded-full border border-zinc-900 flex items-center justify-center text-center p-2">
            <span className="font-sans uppercase tracking-[0.2em] text-[8px] leading-tight">Alex<br/>Bego<br/>poulos</span>
          </div>
        </LogoVariant>

        {/* 29. The Frame */}
        <LogoVariant name="29. The Frame">
          <div className="relative p-6">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-900" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-900" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-900" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-900" />
            <span className="font-sans uppercase tracking-[0.5em] text-xs">Alex Begopoulos</span>
          </div>
        </LogoVariant>

        {/* 30. Final Elegance */}
        <LogoVariant name="30. Final Elegance" dark className="bg-zinc-950">
          <div className="flex flex-col items-center">
            <span className="font-signature text-5xl mb-2 text-white">Alex</span>
            <div className="w-20 h-[1px] bg-white/20 mb-4" />
            <span className="font-serif uppercase tracking-[0.6em] text-[9px] text-white/60">Begopoulos</span>
          </div>
        </LogoVariant>
      </div>

      <div className="mt-24 text-center">
        <p className="text-zinc-400 text-sm mb-12">Welches dieser Konzepte spiegelt deine Vision am besten wider?</p>
        <a href="/" className="inline-block px-12 py-4 bg-zinc-900 text-white text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
          Zurück zur Website
        </a>
      </div>
    </div>
  );
};

export default LogoShowcase;
