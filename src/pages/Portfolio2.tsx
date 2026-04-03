import React, { useState } from "react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";
import { cn } from "../lib/utils";

const CATEGORIES = [
  { id: "all", name: "Alle" },
  { id: "natur", name: "Natur" },
  { id: "urban", name: "Urban" },
  { id: "elopement", name: "Elopement" },
];

export const Portfolio2 = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? IMAGES.PORTFOLIO_2 
    : IMAGES.PORTFOLIO_2.filter(img => img.category === activeCategory);

  return (
    <div className="bg-surface min-h-screen pt-40 pb-24">
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <section className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-[84px] leading-none text-stone-900 tracking-tighter mb-8"
          >
            Portfolio
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-sans font-light text-stone-500 text-xl leading-relaxed italic mb-6">
                Die Kunst, das Unsichtbare sichtbar zu machen. Momente, die bleiben, wenn das Licht verblasst.
              </p>
              <div className="h-px w-24 bg-stone-900/10 mb-6"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-sans font-light text-stone-600 leading-loose text-base"
            >
              <p className="mb-4">
                Als <span className="font-medium text-stone-900">Hochzeitsfotograf in Hannover</span> begleite ich Paare an ihrem wichtigsten Tag, um authentische, emotionale und zeitlose Geschichten in Bildern zu erzählen. Mein Portfolio umfasst nicht nur urbane Reportagen in der niedersächsischen Landeshauptstadt, sondern auch exklusive <span className="font-medium text-stone-900">Destination Weddings</span> und intime Elopements in ganz Europa.
              </p>
              <p>
                Ob in den Herrenhäuser Gärten, einer rustikalen Scheune in der Region Hannover oder bei einer freien Trauung an der toskanischen Küste – mein Fokus liegt auf der Fine Art Fotografie, die Natürlichkeit und Eleganz vereint. Entdecken Sie hier meine liebsten Arbeiten aus den Bereichen Natur, Urban und Elopement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="sticky top-[88px] z-40 bg-surface/80 backdrop-blur-md py-8 mb-12 border-b border-stone-900/5">
          <ul className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "whitespace-nowrap font-sans tracking-widest uppercase text-[11px] pb-2 border-b-2 transition-all duration-300",
                    activeCategory === cat.id 
                      ? "text-stone-900 font-medium border-stone-900" 
                      : "text-stone-400 font-light border-transparent hover:text-stone-900 hover:border-stone-300"
                  )}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, idx) => (
            <motion.div 
              layout
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="overflow-hidden bg-stone-100">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <button className="inline-block bg-stone-900 text-white px-16 py-6 font-sans tracking-[0.2em] uppercase text-xs hover:bg-stone-800 transition-all duration-300 active:opacity-80">
            Mehr entdecken
          </button>
        </div>
      </main>
    </div>
  );
};
