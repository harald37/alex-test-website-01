import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO} 
            alt="Paar im Sonnenuntergang" 
            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif italic text-4xl md:text-8xl tracking-tighter text-zinc-900 mb-4 uppercase"
          >
            Alex Begopoulos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-serif italic text-xl md:text-3xl text-zinc-700 mb-12"
          >
            Hochzeitsfotograf Hannover & Weltweit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/portfolio" 
              className="bg-primary text-on-primary font-sans uppercase tracking-widest text-xs px-11 py-5 hover:bg-zinc-800 transition-all duration-500"
            >
              Portfolio entdecken
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-zinc-300 animate-pulse"></div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[819px] items-center bg-surface-container-lowest">
        <div className="relative h-[400px] md:h-full p-6 md:p-32 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
            <img 
              src={IMAGES.PHILOSOPHY} 
              alt="Nahaufnahme Eheringe" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-outline-variant/30"></div>
          </div>
        </div>
        <div className="p-8 md:p-32 flex flex-col justify-center">
          <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-zinc-400 mb-6 md:mb-8 block">Die Vision eines Geschichtenerzählers</span>
          <h2 className="font-serif italic text-3xl md:text-6xl text-zinc-900 leading-tight mb-8">
            Echte Emotionen. <br className="hidden md:block"/>Zeitlose Ästhetik.
          </h2>
          <p className="max-w-md mb-8 tracking-wide">
            Als Ihr <strong>Hochzeitsfotograf in Hannover</strong> begleite ich Sie nicht nur in Niedersachsen, sondern dort, wo Ihre Geschichte geschrieben wird – ob in den sanften Hügeln der Toskana oder im urbanen Herz Berlins. 
          </p>
          <p className="max-w-md mb-12 tracking-wide">
            Meine Fotografie ist eine leise Beobachtung. Ich suche die Momente zwischen den Gesten: das unbewusste Lächeln, das Glänzen in den Augen beim Ja-Wort und die tiefe Verbundenheit Ihrer Liebsten. Ich erschaffe visuelle Erbstücke, die die Atmosphäre Ihres großen Tages auch nach Jahrzehnten noch spürbar machen.
          </p>
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary"></span>
            <Link to="/portfolio" className="font-sans uppercase tracking-widest text-[10px] text-zinc-900 hover:underline underline-offset-8 transition-all">Zur Galerie</Link>
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
              <div className={cn("aspect-[2/3] overflow-hidden mb-8", index === 1 && "md:mt-16")}>
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

      {/* Quote Section */}
      <section className="py-48 px-8 bg-surface-container-low text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-5xl text-zinc-800 leading-relaxed mb-12">
            "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-primary text-on-primary font-sans uppercase tracking-widest text-[10px] px-12 py-5 hover:bg-zinc-800 transition-all"
          >
            Erzählen Sie mir Ihre Geschichte
          </Link>
          <div className="w-12 h-[1px] bg-zinc-300 mx-auto mt-12"></div>
        </div>
      </section>
    </div>
  );
};
