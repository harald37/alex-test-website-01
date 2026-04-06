import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';
import { Testimonials } from '../components/Testimonials';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <img 
            src={IMAGES.HERO} 
            alt="Elegante Hochzeitsreportage" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
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
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button to="/portfolio" dark>
                Portfolio entdecken
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-32 md:py-48 px-6 md:px-24 bg-surface-container-lowest flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-12 block">Die Vision eines Geschichtenerzählers</span>
          <h2 className="font-serif italic text-4xl md:text-7xl text-zinc-900 leading-[1.1] mb-12">
            Echte Emotionen. <br className="hidden md:block"/>Zeitlose Ästhetik.
          </h2>
          <div className="w-12 h-[1px] bg-zinc-900/10 mx-auto mb-12" />
          <p className="tracking-wide text-zinc-600 leading-relaxed mb-8 text-base md:text-lg">
            Als dein <strong>Hochzeitsfotograf in Hannover</strong> begleite ich euch nicht nur in Niedersachsen, sondern dort, wo eure Geschichte geschrieben wird – ob in den sanften Hügeln der Toskana oder im urbanen Herz Berlins. 
          </p>
          <p className="tracking-wide text-zinc-600 leading-relaxed mb-16 text-base md:text-lg">
            Meine Fotografie ist eine leise Beobachtung. Ich suche die Momente zwischen den Gesten: das unbewusste Lächeln, das Glänzen in den Augen beim Ja-Wort und die tiefe Verbundenheit eurer Liebsten.
          </p>
          <div className="flex flex-col items-center group">
            <span className="h-[1px] w-12 bg-zinc-900/20 group-hover:w-24 transition-all duration-500"></span>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-surface" id="highlights">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Eingefangene Augenblicke</span>
            <h2 className="font-serif italic text-4xl md:text-7xl text-zinc-900 leading-tight">
              Momente, die <br className="hidden md:block" /> die Zeit überdauern.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Large Featured Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-zinc-100 group"
            >
              <img 
                src={IMAGES.PORTFOLIO_2[0].url} 
                alt={IMAGES.PORTFOLIO_2[0].alt} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Side Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 aspect-[4/5] overflow-hidden bg-zinc-100 group"
            >
              <img 
                src={IMAGES.PORTFOLIO_2[2].url} 
                alt={IMAGES.PORTFOLIO_2[2].alt} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Small Detail Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4 aspect-square overflow-hidden bg-zinc-100 group"
            >
              <img 
                src={IMAGES.PORTFOLIO_2[12].url} 
                alt={IMAGES.PORTFOLIO_2[12].alt} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Vertical Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4 aspect-[2/3] overflow-hidden bg-zinc-100 group"
            >
              <img 
                src={IMAGES.PORTFOLIO_2[1].url} 
                alt={IMAGES.PORTFOLIO_2[1].alt} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Final Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4 aspect-[4/5] overflow-hidden bg-zinc-100 group"
            >
              <img 
                src={IMAGES.PORTFOLIO_2[6].url} 
                alt={IMAGES.PORTFOLIO_2[6].alt} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="mt-24 md:mt-32 text-center">
            <Button to="/portfolio" variant="link">
              Das gesamte Portfolio ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quote Section */}
      <section className="py-48 px-8 bg-surface-container-lowest text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-[1px] bg-zinc-900/10 mx-auto mb-16"></div>
          <h2 className="font-serif italic text-3xl md:text-5xl text-zinc-800 leading-relaxed mb-16">
            "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
          </h2>
          <Button to="/contact">
            Erzählt mir eure Geschichte
          </Button>
        </div>
      </section>
    </div>
  );
};
