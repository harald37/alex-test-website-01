import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const HERO_IMAGE = "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp";

const Kicker = ({ className }: { className?: string }) => (
  <span className={cn("font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 block", className)}>
    Authentische Hochzeitsreportagen
  </span>
);

const HeadlineSerif = ({ className }: { className?: string }) => (
  <p className={cn("font-serif italic text-xl md:text-3xl text-white/70 leading-relaxed max-w-2xl", className)}>
    Authentische Momente & zeitlose Ästhetik <br className="hidden md:block" />
    in Hannover & weltweit
  </p>
);

const VariantContainer = ({ id, title, children }: { id: number, title: string, children: React.ReactNode }) => (
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
    <div className="relative z-10 w-full h-full">
      {children}
    </div>
  </section>
);

export const HeroLayoutTest = () => {
  return (
    <div className="bg-zinc-950 pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white italic mb-6">Hero Layout Test</h1>
        <p className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed">
          20 verschiedene Platzierungen von Text und Button mit dem exakten Setup der Startseite.
        </p>
      </div>

      {/* V1: Classic Center (Current) */}
      <VariantContainer id={1} title="Classic Center (Aktuell)">
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
          <Kicker className="mb-12" />
          <HeadlineSerif className="mb-24" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V2: Bottom Left */}
      <VariantContainer id={2} title="Bottom Left">
        <div className="w-full h-full flex flex-col items-start justify-end text-left px-6 md:px-24 pb-24 md:pb-32">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V3: Bottom Right */}
      <VariantContainer id={3} title="Bottom Right">
        <div className="w-full h-full flex flex-col items-end justify-end text-right px-6 md:px-24 pb-24 md:pb-32">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V4: Top Left */}
      <VariantContainer id={4} title="Top Left">
        <div className="w-full h-full flex flex-col items-start justify-start text-left px-6 md:px-24 pt-32 md:pt-48">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V5: Top Right */}
      <VariantContainer id={5} title="Top Right">
        <div className="w-full h-full flex flex-col items-end justify-start text-right px-6 md:px-24 pt-32 md:pt-48">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V6: Center Left */}
      <VariantContainer id={6} title="Center Left">
        <div className="w-full h-full flex flex-col items-start justify-center text-left px-6 md:px-24">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V7: Center Right */}
      <VariantContainer id={7} title="Center Right">
        <div className="w-full h-full flex flex-col items-end justify-center text-right px-6 md:px-24">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V8: Bottom Center */}
      <VariantContainer id={8} title="Bottom Center">
        <div className="w-full h-full flex flex-col items-center justify-end text-center px-6 pb-24 md:pb-32">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V9: Top Center */}
      <VariantContainer id={9} title="Top Center">
        <div className="w-full h-full flex flex-col items-center justify-start text-center px-6 pt-32 md:pt-48">
          <Kicker className="mb-8" />
          <HeadlineSerif className="mb-12" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V10: Split Bottom (Text Left, Button Right) */}
      <VariantContainer id={10} title="Split Bottom">
        <div className="w-full h-full flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between px-6 md:px-24 pb-24 md:pb-32 gap-8">
          <div className="text-left">
            <Kicker className="mb-6" />
            <HeadlineSerif className="mb-0" />
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V11: Split Center (Text Left, Button Right) */}
      <VariantContainer id={11} title="Split Center">
        <div className="w-full h-full flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between px-6 md:px-24 gap-8">
          <div className="text-left">
            <Kicker className="mb-6" />
            <HeadlineSerif className="mb-0" />
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V12: Spread Vertical */}
      <VariantContainer id={12} title="Spread Vertical">
        <div className="w-full h-full flex flex-col items-center justify-between text-center px-6 py-32 md:py-48">
          <Kicker className="mb-0" />
          <HeadlineSerif className="mb-0" />
          <Button to="/portfolio" dark>Portfolio entdecken</Button>
        </div>
      </VariantContainer>

      {/* V13: Diagonal Flow */}
      <VariantContainer id={13} title="Diagonal Flow">
        <div className="w-full h-full relative px-6 md:px-24 py-32">
          <div className="absolute top-32 left-6 md:left-24 text-left">
            <Kicker className="mb-0" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none">
            <HeadlineSerif className="mb-0" />
          </div>
          <div className="absolute bottom-32 right-6 md:right-24">
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V14: Framed Center */}
      <VariantContainer id={14} title="Framed Center">
        <div className="w-full h-full flex items-center justify-center px-6">
          <div className="border border-white/20 p-12 md:p-24 flex flex-col items-center text-center backdrop-blur-sm bg-black/20 rounded-2xl max-w-4xl">
            <Kicker className="mb-10" />
            <HeadlineSerif className="mb-16" />
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V15: Glass Bottom Bar */}
      <VariantContainer id={15} title="Glass Bottom Bar">
        <div className="w-full h-full flex flex-col justify-end">
          <div className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <Kicker className="mb-4" />
              <HeadlineSerif className="mb-0 text-lg md:text-xl" />
            </div>
            <Button to="/portfolio" dark className="bg-white text-zinc-900 hover:bg-zinc-200">Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V16: Side Panel Left */}
      <VariantContainer id={16} title="Side Panel Left">
        <div className="w-full h-full flex justify-start">
          <div className="w-full md:w-1/3 min-w-[320px] max-w-[500px] h-full bg-zinc-950/80 backdrop-blur-md p-12 flex flex-col justify-center text-left border-r border-white/10">
            <Kicker className="mb-10" />
            <HeadlineSerif className="mb-16" />
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V17: Side Panel Right */}
      <VariantContainer id={17} title="Side Panel Right">
        <div className="w-full h-full flex justify-end">
          <div className="w-full md:w-1/3 min-w-[320px] max-w-[500px] h-full bg-zinc-950/80 backdrop-blur-md p-12 flex flex-col justify-center items-end text-right border-l border-white/10">
            <Kicker className="mb-10" />
            <HeadlineSerif className="mb-16" />
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V18: Inline Text & Button */}
      <VariantContainer id={18} title="Inline Text & Button">
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
          <Kicker className="mb-12" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <HeadlineSerif className="mb-0 text-center md:text-left" />
            <div className="h-12 w-[1px] bg-white/20 hidden md:block" />
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V19: Text Top Left, Button Bottom Right */}
      <VariantContainer id={19} title="Text Top Left, Button Bottom Right">
        <div className="w-full h-full flex flex-col justify-between px-6 md:px-24 py-32 md:py-48">
          <div className="text-left">
            <Kicker className="mb-8" />
            <HeadlineSerif className="mb-0" />
          </div>
          <div className="flex justify-end">
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
        </div>
      </VariantContainer>

      {/* V20: Text Bottom Right, Button Top Left */}
      <VariantContainer id={20} title="Text Bottom Right, Button Top Left">
        <div className="w-full h-full flex flex-col justify-between px-6 md:px-24 py-32 md:py-48">
          <div className="flex justify-start">
            <Button to="/portfolio" dark>Portfolio entdecken</Button>
          </div>
          <div className="text-right flex flex-col items-end">
            <Kicker className="mb-8" />
            <HeadlineSerif className="mb-0" />
          </div>
        </div>
      </VariantContainer>

      <div className="py-32 text-center bg-zinc-900">
        <Button to="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
};

export default HeroLayoutTest;
