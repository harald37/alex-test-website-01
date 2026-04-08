import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const VARIANT_IMAGES = [
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495596/braut-steigt-aus-auto-standesamtliche-trauung-uelzen.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495595/braut-richtet-fliege-des-brautigams.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495593/brautpaar-paarshooting-im-feld.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495592/brautpaar-laueft-fotografen-entgegen-paarshooting-hannover.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495590/brautpaar-freie-trauung-hannover.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495587/braeutigam-tragt-die-braut-am-feldweg.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495586/braeutigam-schaut-braut-an-freie-trauung-hannover.webp",
  "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp",
];

const CREATIVE_VARIANTS = [
  {
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775502240/portrait-enna-steinhuder-meer-01.webp",
    title: "Warmes Sonnenlicht",
    description: "Emotionen in goldenen Farben eingefangen.",
    style: "color-warm",
    layout: "center"
  },
  {
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495581/sinnliches-portrait-brautpaar-hannover.webp",
    title: "Sinnliche Eleganz",
    description: "Zeitlose Momente in natürlichen Farben.",
    style: "color-natural",
    layout: "left"
  },
  {
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495577/kapelle-uelzen-standesamtliche-trauung.webp",
    title: "Architektur & Liebe",
    description: "Die Schönheit des Ortes trifft auf eure Geschichte.",
    style: "color-vibrant",
    layout: "right"
  },
  {
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495573/hochzeitstanz-im-eigenen-garten-bei-nacht-hannover.webp",
    title: "Magische Nacht",
    description: "Lichterglanz und tiefe Kontraste.",
    style: "color-night",
    layout: "center"
  },
  {
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495588/braeutigam-und-trauzeuge-laufen-im-feld.webp",
    title: "Natürliche Weite",
    description: "Freiheit und echte Freundschaft.",
    style: "color-soft",
    layout: "split"
  }
];

const HeroVariant: React.FC<{ image: string; index: number }> = ({ image, index }) => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900 mb-20">
    <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur px-4 py-2 rounded text-white font-mono text-[10px] uppercase tracking-widest">
      Standard B&W {index + 1}
    </div>
    <div className="absolute inset-0 z-0 bg-zinc-900">
      <img 
        src={image} 
        alt={`Variante ${index + 1}`} 
        className="w-full h-full object-cover opacity-60 grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    
    <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <span className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/40 mb-12 block">
          Authentische Hochzeitsreportagen
        </span>
        
        <p className="font-serif italic text-xl md:text-3xl text-white/70 mb-24 max-w-2xl leading-relaxed">
          Authentische Momente & zeitlose Ästhetik <br className="hidden md:block" /> 
          in Hannover & weltweit
        </p>
        
        <Button to="/portfolio" dark>
          Portfolio entdecken
        </Button>
      </motion.div>
    </div>
  </section>
);

const HeroVariantCreative: React.FC<{ variant: typeof CREATIVE_VARIANTS[0]; index: number }> = ({ variant, index }) => {
  const getOverlay = () => {
    switch(variant.style) {
      case 'color-warm': return 'bg-orange-900/10';
      case 'color-night': return 'bg-blue-950/40';
      case 'color-vibrant': return 'bg-transparent';
      default: return 'bg-black/20';
    }
  };

  const getLayoutClass = () => {
    switch(variant.layout) {
      case 'left': return 'items-start text-left ml-0 mr-auto md:pl-24';
      case 'right': return 'items-end text-right ml-auto mr-0 md:pr-24';
      case 'split': return 'items-center text-center';
      default: return 'items-center text-center';
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900 mb-20">
      <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur px-4 py-2 rounded text-white font-mono text-[10px] uppercase tracking-widest">
        Creative Color {index + 1}
      </div>
      <div className="absolute inset-0 z-0 bg-zinc-900">
        <img 
          src={variant.image} 
          alt={variant.title} 
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            variant.style === 'color-soft' ? 'opacity-80' : 'opacity-90'
          )}
          referrerPolicy="no-referrer"
        />
        <div className={cn("absolute inset-0", getOverlay())} />
      </div>
      
      <div className={cn("relative z-10 flex flex-col w-full max-w-7xl px-6", getLayoutClass())}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <span className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/60 mb-8 block">
            {variant.title}
          </span>
          
          <p className="font-serif italic text-2xl md:text-5xl text-white mb-16 max-w-3xl leading-tight">
            {variant.description}
          </p>
          
          <div className={cn("flex", variant.layout === 'right' ? 'justify-end' : variant.layout === 'center' ? 'justify-center' : 'justify-start')}>
            <Button to="/portfolio" dark className="bg-white text-zinc-900 hover:bg-zinc-200">
              Galerie ansehen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const HeroVariants = () => {
  return (
    <div className="bg-zinc-950 pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-8xl text-white italic mb-8">Hero Showcase</h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs max-w-2xl mx-auto leading-relaxed">
          Eine Erkundung visueller Einstiege. Von der reduzierten Schwarz-Weiß-Ästhetik bis hin zu emotionalen Farbwelten und kreativen Layouts.
        </p>
      </div>
      
      <div className="px-6 mb-12">
        <h2 className="font-sans uppercase tracking-[0.6em] text-[10px] text-white/20 mb-12 text-center">Teil 1: Zeitloses Schwarz-Weiß (Minimal)</h2>
      </div>
      {VARIANT_IMAGES.map((img, idx) => (
        <HeroVariant key={idx} image={img} index={idx} />
      ))}

      <div className="px-6 mt-32 mb-12">
        <h2 className="font-sans uppercase tracking-[0.6em] text-[10px] text-white/20 mb-12 text-center">Teil 2: Emotionale Farbwelten & Kreative Layouts</h2>
      </div>
      {CREATIVE_VARIANTS.map((variant, idx) => (
        <HeroVariantCreative key={idx} variant={variant} index={idx} />
      ))}
      
      <div className="py-32 text-center bg-zinc-900">
        <p className="text-white/40 font-serif italic text-xl mb-12">Welche Atmosphäre passt am besten zu deiner Geschichte?</p>
        <Button to="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
};

export default HeroVariants;
