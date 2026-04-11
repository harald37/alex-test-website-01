import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const VARIANT_DATA = [
  { title: "Portfolio", subtitle: "Eure Geschichte in Bildern.", description: "Authentische Momente, echte Emotionen und zeitlose Erinnerungen." },
  { title: "Galerie", subtitle: "Ein Blick auf die Liebe.", description: "Entdeckt meine liebsten Reportagen und Paarshootings." },
  { title: "Momente", subtitle: "Ewig festgehalten.", description: "Weil jeder Augenblick es wert ist, erinnert zu werden." },
  { title: "Reportagen", subtitle: "Echte Geschichten.", description: "Kein Posing, keine Masken. Nur ihr und eure Liebe." },
  { title: "Portfolio", subtitle: "Fine Art Photography.", description: "Zeitlose Ästhetik für euren besonderen Tag." },
];

const IntroWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => (
  <div className="py-24 border-b border-[#141414]/5">
    <div className="px-6 mb-8">
      <span className="text-[10px] uppercase tracking-[0.4em] text-[#141414]/30 font-bold">{title}</span>
    </div>
    {children}
  </div>
);

export const PortfolioIntros = () => {
  return (
    <div className="bg-[#f5f2ed] min-h-screen text-[#141414]">
      {/* Variant 1: Classic Minimalist (Centered) */}
      <IntroWrapper title="Variante 01: Klassisch Zentriert">
        <div className="max-w-4xl mx-auto text-center px-6 py-12">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/40 mb-6 block"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic mb-8"
          >
            Eure Geschichte in Bildern.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="w-12 h-[1px] bg-[#141414]/10 mx-auto"
          />
        </div>
      </IntroWrapper>

      {/* Variant 2: Split Layout (Left Title, Right Desc) */}
      <IntroWrapper title="Variante 02: Split Layout">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-end py-12">
          <div>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Galerie</span>
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9]">Momente.</h1>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-[#141414]/60 text-lg leading-relaxed">
              Authentische Momente, echte Emotionen und zeitlose Erinnerungen, die eure Geschichte erzählen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 3: Large Background Title */}
      <IntroWrapper title="Variante 03: Großer Hintergrund-Titel">
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="text-[20vw] font-serif italic whitespace-nowrap">Portfolio</span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Zeitlose Ästhetik.</h1>
            <p className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/50">Fine Art Wedding Photography</p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 4: Editorial Style (Vertical Line) */}
      <IntroWrapper title="Variante 04: Editorial Style">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 py-12">
          <div className="md:w-1/3">
            <h1 className="text-6xl font-serif italic leading-none">01.</h1>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mt-4 block">Portfolio</span>
          </div>
          <div className="md:w-2/3 border-l border-[#141414]/10 pl-12 py-4">
            <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
              "Bilder, die sich so anfühlen, wie der Moment war."
            </h2>
            <p className="text-[#141414]/60 max-w-lg">
              Ich begleite euch als stiller Beobachter und fange die ungestellten Augenblicke ein.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 5: Minimal Label & Big Header */}
      <IntroWrapper title="Variante 05: Minimal Label">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#141414]/20" />
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Ausgewählte Arbeiten</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-serif italic text-[#141414] leading-[0.8]">Galerie.</h1>
        </div>
      </IntroWrapper>

      {/* Variant 6: Floating Elements */}
      <IntroWrapper title="Variante 06: Schwebende Elemente">
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          <div className="mb-12 relative">
            <h1 className="text-6xl md:text-8xl font-serif italic relative z-10">Portfolio</h1>
            <div className="absolute -top-4 -right-8 w-16 h-16 rounded-full border border-[#1a2e26]/10" />
          </div>
          <p className="max-w-md text-[#141414]/50 font-sans uppercase tracking-[0.2em] text-[11px] leading-loose">
            Hannover & Weltweit — Authentische Hochzeitsreportagen für Paare, die das Echte lieben.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 7: Double Serif (Title + Sub) */}
      <IntroWrapper title="Variante 07: Double Serif">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-6xl font-serif italic mb-2">Die Galerie.</h1>
          <h2 className="text-2xl md:text-4xl font-serif italic text-[#141414]/30">Eure Geschichte.</h2>
          <div className="mt-12 max-w-xl">
            <p className="text-[#141414]/60 leading-relaxed">
              Jede Hochzeit ist einzigartig. Hier findet ihr einen Querschnitt meiner Arbeiten aus den letzten Jahren.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 8: Brutalist Minimal */}
      <IntroWrapper title="Variante 08: Brutalist Minimal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-y border-[#141414]/5 my-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
            <h1 className="text-7xl md:text-[120px] font-serif italic leading-none tracking-tighter">Portfolio</h1>
            <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-[#141414]/40">Est. 2018</span>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 9: Soft Fade In */}
      <IntroWrapper title="Variante 09: Soft Fade">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif italic mb-8 leading-relaxed">
              "Fotografie ist die Kunst, den Moment festzuhalten, bevor er verfliegt."
            </h1>
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/30">— Portfolio</span>
          </motion.div>
        </div>
      </IntroWrapper>

      {/* Variant 10: Deep Forest Accent */}
      <IntroWrapper title="Variante 10: Deep Forest Accent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="inline-block bg-[#1a2e26] text-white px-4 py-1 mb-8">
            <span className="font-sans uppercase tracking-[0.4em] text-[9px]">Galerie</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic text-[#141414] leading-tight">
            Echte Emotionen.<br/>
            <span className="text-[#141414]/20">Ungestellt.</span>
          </h1>
        </div>
      </IntroWrapper>

      {/* Variant 11: Numbered Intro */}
      <IntroWrapper title="Variante 11: Nummeriert">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-sm font-serif italic text-[#141414]/40">Kapitel 01</span>
              <h1 className="text-5xl font-serif italic mt-4">Portfolio</h1>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-xl md:text-2xl font-serif italic text-[#141414]/60 leading-relaxed">
                Eine Sammlung von Momenten, die zeigen, wie ich die Welt und eure Liebe sehe.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 12: Minimalist Grid Header */}
      <IntroWrapper title="Variante 12: Grid Header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-3">
            <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.8]">Work.</h1>
          </div>
          <div className="flex flex-col justify-end">
            <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-[#141414]/40 mb-2">Typ</span>
            <span className="font-serif italic text-lg">Reportagen</span>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 13: Centered with Subline */}
      <IntroWrapper title="Variante 13: Zentriert mit Subline">
        <div className="max-w-4xl mx-auto text-center px-6 py-24">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">Portfolio</h1>
          <p className="text-lg md:text-xl font-serif italic text-[#141414]/40">Authentisch. Ehrlich. Zeitlos.</p>
          <div className="mt-12 flex justify-center gap-8">
            <span className="w-1 h-1 rounded-full bg-[#141414]/20" />
            <span className="w-1 h-1 rounded-full bg-[#141414]/20" />
            <span className="w-1 h-1 rounded-full bg-[#141414]/20" />
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 14: Left Aligned Bold */}
      <IntroWrapper title="Variante 14: Linksbündig Bold">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-6xl md:text-9xl font-serif italic mb-8 tracking-tight">Galerie</h1>
          <div className="w-full h-[1px] bg-[#141414]/5 mb-8" />
          <div className="flex justify-between items-center">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Wedding Stories</span>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">2024 — 2025</span>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 15: Overlapping Text */}
      <IntroWrapper title="Variante 15: Überlappend">
        <div className="max-w-5xl mx-auto px-6 py-24 relative">
          <span className="text-[12vw] font-serif italic text-[#141414]/5 absolute top-10 left-0 leading-none">Stories</span>
          <div className="relative z-10 pt-12 pl-12">
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Eure Bilder.</h1>
            <p className="max-w-md text-[#141414]/60 leading-relaxed">
              Entdeckt eine Auswahl meiner liebsten Hochzeitsreportagen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 16: Clean & Airy */}
      <IntroWrapper title="Variante 16: Clean & Airy">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col items-center">
          <span className="font-sans uppercase tracking-[0.8em] text-[9px] text-[#141414]/30 mb-12">The Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-serif italic text-center max-w-2xl leading-relaxed">
            "Momente, die bleiben, wenn der Tag vorüber ist."
          </h1>
        </div>
      </IntroWrapper>

      {/* Variant 17: Side Label Vertical */}
      <IntroWrapper title="Variante 17: Side Label">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex gap-12">
          <div className="hidden md:block">
            <span className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/30 [writing-mode:vertical-lr] rotate-180">
              Portfolio — 2025
            </span>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Galerie.</h1>
            <p className="text-xl md:text-2xl font-serif italic text-[#141414]/50 max-w-xl leading-relaxed">
              Authentische Hochzeitsfotografie für Paare, die Wert auf echte Erinnerungen legen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 18: Minimalist Box */}
      <IntroWrapper title="Variante 18: Minimalist Box">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="border border-[#141414]/10 p-12 md:p-20 text-center">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Ausgewählte Arbeiten</span>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-0">Portfolio</h1>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 19: Typographic Focus */}
      <IntroWrapper title="Variante 19: Typo Focus">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
            Ich erzähle eure Geschichte<br/>
            <span className="pl-12 md:pl-24 text-[#141414]/30">— Bild für Bild.</span>
          </h1>
        </div>
      </IntroWrapper>

      {/* Variant 20: Simple & Direct */}
      <IntroWrapper title="Variante 20: Einfach & Direkt">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-8">Eure Galerie.</h1>
          <div className="w-24 h-[1px] bg-[#1a2e26]" />
        </div>
      </IntroWrapper>
    </div>
  );
};
