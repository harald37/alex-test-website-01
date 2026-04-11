import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../../constants";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

export const MinimalistPortfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const categories = ["all", "hochzeit", "portrait"];

  const filteredImages = filter === "all" 
    ? IMAGES.PORTFOLIO_2 
    : IMAGES.PORTFOLIO_2.filter(img => img.category.toLowerCase() === filter);

  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-[#f5f2ed] min-h-screen">
      {/* Editorial Header */}
      <section className="mb-32 max-w-5xl">
        <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Portfolio</span>
        <h1 className="font-serif italic text-5xl md:text-9xl text-[#141414] leading-[0.9] mb-16">Momente.</h1>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="w-12 h-[1px] bg-[#141414]/10"></div>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl leading-relaxed text-[#141414] italic font-serif">
              "Die Kunst, das Unsichtbare sichtbar zu machen. Momente, die bleiben."
            </p>
            <p className="text-[#141414]/60 leading-relaxed text-lg">
              Als Hochzeitsfotograf in Hannover begleite ich Paare an ihrem wichtigsten Tag, um authentische, emotionale und zeitlose Geschichten in Bildern zu erzählen.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-24 z-40 bg-[#f5f2ed]/90 backdrop-blur-md py-8 mb-16 border-b border-[#141414]/5">
        <ul className="flex items-center justify-center gap-12">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setFilter(cat)}
                className={cn(
                  "font-sans uppercase tracking-[0.3em] text-[10px] pb-1 border-b transition-all duration-500",
                  filter === cat 
                    ? "text-[#141414] border-[#141414]" 
                    : "text-[#141414]/30 border-transparent hover:text-[#141414]"
                )}
              >
                {cat === 'all' ? 'Alle' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item, index) => (
            <motion.div
              layout
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid mb-8 group cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm border border-[#141414]/5">
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1a2e26]/98 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white">
              <X size={32} strokeWidth={1} />
            </button>
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImageIndex].url}
                alt={filteredImages[selectedImageIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
