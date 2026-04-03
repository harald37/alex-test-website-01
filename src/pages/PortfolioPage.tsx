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
    <main className="pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Editorial Header */}
      <section className="mb-16 md:mb-20">
        <h1 className="font-serif text-5xl md:text-[84px] leading-none text-zinc-900 tracking-tighter mb-8">Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xl leading-relaxed italic mb-6">
              Die Kunst, das Unsichtbare sichtbar zu machen. Momente, die bleiben, wenn das Licht verblasst.
            </p>
            <div className="h-px w-24 bg-zinc-900/10 mb-6"></div>
          </div>
          <div className="">
            <p className="mb-4">
              Als <span className="font-medium text-zinc-900">Hochzeitsfotograf in Hannover</span> begleite ich Paare an ihrem wichtigsten Tag, um authentische, emotionale und zeitlose Geschichten in Bildern zu erzählen. Mein Portfolio umfasst nicht nur urbane Reportagen in der niedersächsischen Landeshauptstadt, sondern auch exklusive <span className="font-medium text-zinc-900">Destination Weddings</span> und intime Elopements in ganz Europa.
            </p>
            <p>
              Ob in den Herrenhäuser Gärten, einer rustikalen Scheune in der Region Hannover oder bei einer freien Trauung an der toskanischen Küste – mein Fokus liegt auf der Fine Art Fotografie, die Natürlichkeit und Eleganz vereint. Entdecken Sie hier meine liebsten Arbeiten aus den Bereichen Natur, Urban und Elopement.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[88px] z-40 bg-surface py-6 md:py-8 mb-8 md:mb-12 border-b border-on-surface/5">
        <ul className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setFilter(cat)}
                className={cn(
                  "uppercase tracking-widest text-[11px] pb-2 border-b-2 transition-all duration-300",
                  filter === cat 
                    ? "text-on-surface font-medium border-zinc-900" 
                    : "text-zinc-400 font-light border-transparent hover:text-zinc-900 hover:border-zinc-300"
                )}
              >
                {cat === 'all' ? 'Alle' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item, index) => (
            <motion.div
              layout
              key={item.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid mb-6 group cursor-pointer"
            >
              <div className="overflow-hidden bg-surface-container-low mb-4">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-outline">{item.category} — {item.location}</span>
                <h3 className="font-serif italic text-xl text-zinc-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      <div className="mt-24 text-center">
        <button className="inline-block bg-on-surface text-surface px-16 py-6 font-sans tracking-[0.2em] uppercase text-xs hover:bg-zinc-800 transition-all duration-300">
          Mehr entdecken
        </button>
      </div>
    </main>
  );
};
