import React from "react";
import { SmoothImage } from "../components/ui/SmoothImage";
import { motion } from "motion/react";

const TEST_IMAGES = [
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Wedding 1", ratio: "portrait" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", alt: "Wedding 2", ratio: "landscape" },
  { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", alt: "Wedding 3", ratio: "portrait" },
  { url: "https://images.unsplash.com/photo-1519225495810-751783d9a7a9", alt: "Wedding 4", ratio: "square" },
  { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf", alt: "Wedding 5", ratio: "landscape" },
  { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74", alt: "Wedding 6", ratio: "portrait" },
];

export const SmoothLoadingTest = () => {
  // Add cache busting to force loading state
  const cacheBuster = `?cb=${Date.now()}`;

  return (
    <div className="p-12 bg-[#f5f2ed] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Performance & UX</span>
          <h1 className="text-5xl font-serif italic mb-6">Smooth Image Loading</h1>
          <p className="text-[#141414]/60 max-w-2xl mx-auto">
            Diese Demonstration zeigt, wie Bilder ohne Layout-Sprünge (Layout Shift) und mit einem sanften Einblenden geladen werden. 
            Der Platzhalter reserviert den Raum, bevor das Bild erscheint.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEST_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <SmoothImage 
                src={`${img.url}${cacheBuster}&auto=format&fit=crop&q=80&w=800`}
                alt={img.alt}
                aspectRatio={img.ratio as any}
                className="hover:scale-105 transition-transform duration-1000"
              />
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#141414]/40">
                <span>{img.ratio}</span>
                <span>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 border border-[#141414]/5 rounded-3xl bg-white/50 backdrop-blur-sm">
          <h3 className="font-serif text-2xl mb-6 italic">Warum das besser ist:</h3>
          <ul className="space-y-4 text-[#141414]/70">
            <li className="flex gap-4">
              <span className="text-[#141414] font-bold">01.</span>
              <span><strong>Kein Springen:</strong> Durch die <code>aspect-ratio</code> Klassen weiß der Browser schon vor dem Download des Bildes, wie groß das Grid-Element sein wird.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#141414] font-bold">02.</span>
              <span><strong>Sanfte Ästhetik:</strong> Statt eines harten Erscheinens blendet das Bild über 800ms weich ein, sobald es im Speicher des Browsers liegt.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#141414] font-bold">03.</span>
              <span><strong>Placeholder:</strong> Ein dezenter Hintergrund (oder Skeleton) signalisiert dem Nutzer sofort, dass hier ein Inhalt geladen wird.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
