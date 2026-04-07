import React, { useState, useEffect, useCallback } from 'react';
// Refresh UI trigger
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';
import { GreenBannerTestimonials } from '../components/GreenBannerTestimonials';
import { HomePortfolioGrid } from '../components/HomePortfolioGrid';
import { Button } from '../components/ui/Button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
      <section className="py-32 md:py-48 px-6 md:px-24 bg-surface-container-lowest flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-12 block">Die Vision eines Geschichtenerzählers</span>
          <h2 className="font-serif italic text-4xl md:text-7xl text-zinc-900 leading-[1.1] mb-16">
            Echte Emotionen. <br className="hidden md:block"/>Zeitlose Ästhetik.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-24 text-left">
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">01. Authentizität</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                Kein steifes Posing. Ich begleite euch als stiller Beobachter und fange die Momente ein, wie sie wirklich passieren – ungestellt und ehrlich.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">02. Diskretion</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                An eurem Tag bin ich Teil der Gesellschaft, nicht der Regisseur. So entstehen Bilder von euren Liebsten, die sich völlig unbeobachtet fühlen.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400">03. Zeitlosigkeit</span>
              <p className="text-zinc-600 leading-relaxed tracking-wide text-sm md:text-base">
                Trends kommen und gehen. Mein Fine-Art Stil sorgt dafür, dass eure Bilder auch in 30 Jahren noch modern und elegant wirken.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="tracking-wide text-zinc-600 leading-relaxed text-base md:text-lg italic font-serif">
              "Als dein Hochzeitsfotograf in Hannover begleite ich euch nicht nur in Niedersachsen, sondern dort, wo eure Geschichte geschrieben wird – ob in den sanften Hügeln der Toskana oder im urbanen Herz Berlins."
            </p>
            <div className="flex flex-col items-center group pt-8">
              <span className="h-[1px] w-12 bg-zinc-900/20 group-hover:w-24 transition-all duration-500"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <HomePortfolioGrid />

      {/* About Me Short */}
      <section className="bg-zinc-50 py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              className="w-full h-full object-cover transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div>
              <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-6 block">Der Fotograf</span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-zinc-900 leading-tight mb-8">Hallo, ich bin Alex.</h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed tracking-wide mb-8">
                Ich liebe es, echte Emotionen und ungestellte Momente einzufangen. In Hannover und Umgebung bin ich seit Jahren als Hochzeitsfotograf tätig und kenne die schönsten Plätze für eure Geschichte.
              </p>
              <Button to="/about" variant="link">
                Mehr über mich erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <GreenBannerTestimonials />

      {/* Quote Section */}
      <section className="py-48 px-8 bg-surface-container-lowest text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-[1px] bg-zinc-900/10 mx-auto mb-16"></div>
          <h2 className="font-serif italic text-3xl md:text-5xl text-zinc-800 leading-relaxed mb-16">
            "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
          </h2>
          <div className="flex justify-center">
            <Button to="/contact">
              Erzählt mir eure Geschichte
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
