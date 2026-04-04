import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'natur', 'urban', 'elopement'];

  const filteredImages = filter === 'all' 
    ? IMAGES.PORTFOLIO 
    : IMAGES.PORTFOLIO.filter(img => img.category.toLowerCase() === filter);

  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface-container-lowest">
      {/* Editorial Header */}
      <section className="mb-24 md:mb-32 max-w-5xl">
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Portfolio</span>
        <h1 className="font-serif italic text-5xl md:text-8xl lg:text-9xl text-zinc-900 leading-none tracking-tight mb-16">Echte Geschichten.</h1>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="w-12 h-[1px] bg-zinc-900/10 mb-8 md:mb-0"></div>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-800 italic font-serif">
              "Die Kunst, das Unsichtbare sichtbar zu machen. Momente, die bleiben, wenn das Licht verblasst."
            </p>
            <p className="text-zinc-600 leading-relaxed tracking-wide">
              Als <span className="font-medium text-zinc-900">Hochzeitsfotograf in Hannover</span> begleite ich Paare an ihrem wichtigsten Tag, um authentische, emotionale und zeitlose Geschichten in Bildern zu erzählen. Mein Fokus liegt auf der Fine Art Fotografie, die Natürlichkeit und Eleganz vereint.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-surface-container-lowest/90 backdrop-blur-md pt-4 pb-2 md:py-8 mb-12 md:mb-16 border-b border-zinc-900/5">
        <ul className="flex items-center justify-center gap-8 md:gap-12 overflow-x-auto no-scrollbar px-4 md:px-0">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setFilter(cat)}
                className={cn(
                  "font-sans uppercase tracking-[0.3em] text-[9px] md:text-[10px] pb-1 border-b transition-all duration-500 whitespace-nowrap",
                  filter === cat 
                    ? "text-zinc-900 border-zinc-900" 
                    : "text-zinc-400 border-transparent hover:text-zinc-900"
                )}
              >
                {cat === 'all' ? 'Alle' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item, index) => (
            <motion.div
              layout
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid mb-12 group cursor-pointer"
            >
              <div className="overflow-hidden bg-zinc-100 mb-6">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-400">{item.category} — {item.location}</span>
                <h3 className="font-serif italic text-2xl text-zinc-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      <div className="mt-32 text-center">
        <button className="group relative inline-flex items-center justify-center px-20 py-7 overflow-hidden font-sans uppercase tracking-[0.3em] text-[9px] text-zinc-900 transition-all duration-700">
          <div className="absolute inset-0 border border-zinc-900/10 group-hover:border-zinc-900/30 transition-colors duration-500" />
          <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            Mehr entdecken
          </span>
        </button>
      </div>
    </main>
  );
};
