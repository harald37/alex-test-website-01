import React from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const [filter, setFilter] = React.useState("All");
  const categories = ["All", "Wedding", "Portrait"];

  const filteredImages = filter === "All" 
    ? IMAGES.PORTFOLIO 
    : IMAGES.PORTFOLIO.filter(img => img.category === filter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO} 
            alt="Hero" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6 tracking-tight"
          >
            Capturing Timeless Moments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-widest uppercase"
          >
            Fine Art Photography & Cinematic Storytelling
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0">
          <h2 className="text-4xl font-serif text-stone-900">Portfolio</h2>
          
          <div className="flex space-x-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-medium tracking-widest uppercase transition-all pb-1 border-b-2 ${
                  filter === cat ? "border-stone-900 text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={img.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white/70 text-xs tracking-widest uppercase mb-2">{img.category}</p>
                <h3 className="text-white text-2xl font-serif">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif mb-8">Bereit für Ihr nächstes Abenteuer?</h2>
          <p className="text-stone-600 text-lg mb-12 leading-relaxed">
            Lassen Sie uns gemeinsam Erinnerungen schaffen, die ein Leben lang halten. 
            Ich freue mich darauf, Ihre Geschichte zu hören.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-3 bg-stone-900 text-white px-10 py-4 rounded-full hover:bg-stone-800 transition-all group"
          >
            <span className="font-medium tracking-widest uppercase text-sm">Jetzt Anfragen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};
