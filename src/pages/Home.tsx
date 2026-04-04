import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';
import { Testimonials } from '../components/Testimonials';

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
              <Link 
                to="/portfolio" 
                className="group relative inline-flex items-center justify-center px-20 py-7 overflow-hidden font-sans uppercase tracking-[0.3em] text-[9px] text-white/80 transition-all duration-700"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out" />
                
                <span className="relative z-10 group-hover:text-zinc-900 transition-colors duration-500">
                  Portfolio entdecken
                </span>
              </Link>
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
          <p className="tracking-wide text-zinc-600 leading-relaxed mb-8 text-lg">
            Als dein <strong>Hochzeitsfotograf in Hannover</strong> begleite ich euch nicht nur in Niedersachsen, sondern dort, wo eure Geschichte geschrieben wird – ob in den sanften Hügeln der Toskana oder im urbanen Herz Berlins. 
          </p>
          <p className="tracking-wide text-zinc-600 leading-relaxed mb-16 text-lg">
            Meine Fotografie ist eine leise Beobachtung. Ich suche die Momente zwischen den Gesten: das unbewusste Lächeln, das Glänzen in den Augen beim Ja-Wort und die tiefe Verbundenheit eurer Liebsten.
          </p>
          <div className="flex flex-col items-center group">
            <Link to="/portfolio" className="font-sans uppercase tracking-[0.3em] text-[10px] text-zinc-900 transition-all mb-4">Zur Galerie</Link>
            <span className="h-[1px] w-12 bg-zinc-900/20 group-hover:w-24 transition-all duration-500"></span>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 md:py-32 px-6 md:px-24 bg-surface" id="portfolio">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif italic text-3xl md:text-4xl text-zinc-900">Ausgewählte Reportagen</h2>
          <p className="font-sans text-[10px] uppercase tracking-widest text-zinc-400 mt-4">In Hannover, Niedersachsen & Weltweit</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[120px] max-w-7xl mx-auto">
          {IMAGES.STORIES.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden mb-8">
                <img 
                  src={story.url} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 mb-2">{story.location}</span>
                <h3 className="font-serif text-2xl text-zinc-900 italic">{story.title}</h3>
              </div>
            </motion.div>
          ))}
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
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden font-sans uppercase tracking-[0.3em] text-[9px] text-zinc-900 transition-all duration-700"
          >
            <div className="absolute inset-0 border border-zinc-900/10 group-hover:border-zinc-900/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Erzählt mir eure Geschichte
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};
