import React from "react";
import { motion } from "motion/react";

export const Braunschweig = () => {
  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface-container-lowest min-h-screen">
      <section className="max-w-4xl">
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Region Braunschweig</span>
        <h1 className="font-serif italic text-5xl md:text-8xl lg:text-9xl text-zinc-900 leading-none tracking-tight mb-16">Hochzeitsfotograf Braunschweig.</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="w-12 h-[1px] bg-zinc-900/10 mb-8 md:mb-0"></div>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-800 italic font-serif">
              "Emotionale Hochzeitsfotografie in der Löwenstadt und Umgebung."
            </p>
            <p className="text-zinc-600 leading-relaxed tracking-wide">
              Als Ihr Hochzeitsfotograf in Braunschweig begleite ich Sie an Ihrem besonderen Tag. Ob im Braunschweiger Dom, im Schloss Richmond oder in einer der vielen charmanten Locations in der Region – ich halte Ihre emotionalsten Momente in zeitlosen Bildern fest.
            </p>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none">
          <p className="text-zinc-500 leading-relaxed mb-8">
            Diese Seite dient als Platzhalter für spezifische Informationen rund um Hochzeitsfotografie in Braunschweig. Hier werden bald detaillierte Einblicke in vergangene Reportagen und Tipps für Ihre Planung in der Region zu finden sein.
          </p>
        </div>
      </section>
    </main>
  );
};
