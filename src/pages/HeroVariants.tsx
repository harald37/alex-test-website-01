import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';

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
];

const HeroVariant: React.FC<{ image: string; index: number }> = ({ image, index }) => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900 mb-20">
    <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur px-4 py-2 rounded text-white font-mono text-xs">
      Variante {index + 1}
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
        
        <h1 className="font-sans uppercase tracking-[0.4em] text-3xl md:text-6xl lg:text-7xl text-white/90 mb-12 font-light">
          Alex Begopoulos
        </h1>
        
        <div className="w-12 h-[1px] bg-white/10 mb-12" />
        
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

export const HeroVariants = () => {
  return (
    <div className="bg-zinc-950 pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-5xl text-white italic mb-4">Hero Varianten</h1>
        <p className="text-zinc-500 uppercase tracking-widest text-xs">Aktuelles Layout mit 10 verschiedenen Bildern</p>
      </div>
      
      {VARIANT_IMAGES.map((img, idx) => (
        <HeroVariant key={idx} image={img} index={idx} />
      ))}
      
      <div className="py-20 text-center">
        <Button to="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
};

export default HeroVariants;
