import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#f5f2ed] text-[#141414] px-6 text-center">
      <SEO 
        title="Seite nicht gefunden | Alex Begopoulos" 
        description="Die gesuchte Seite existiert leider nicht mehr." 
        noindex={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">
          404 Fehler
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl text-[#141414] leading-tight mb-8">
          Hoppla, diese Seite existiert nicht.
        </h1>
        <p className="text-[#141414]/70 leading-relaxed tracking-wide text-base md:text-lg mb-12">
          Vielleicht hast du dich vertippt oder der Link ist veraltet. Lass uns gemeinsam zurück zum Anfang gehen.
        </p>
        <Button to="/" variant="forest">
          Zurück zur Startseite
        </Button>
      </motion.div>
    </div>
  );
};
