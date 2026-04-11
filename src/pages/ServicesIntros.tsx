import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const IntroWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => (
  <div className="py-24 border-b border-[#141414]/5">
    <div className="px-6 mb-8">
      <span className="text-[10px] uppercase tracking-[0.4em] text-[#141414]/30 font-bold">{title}</span>
    </div>
    {children}
  </div>
);

export const ServicesIntros = () => {
  return (
    <div className="bg-[#f5f2ed] min-h-screen text-[#141414]">
      {/* Variant 1: Classic Minimalist */}
      <IntroWrapper title="Variante 01: Klassisch Zentriert">
        <div className="max-w-4xl mx-auto text-center px-6 py-12">
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/40 mb-6 block">Leistungen</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Euer Tag, meine Begleitung.</h1>
          <p className="text-[#141414]/60 max-w-xl mx-auto leading-relaxed">
            Vom Getting Ready bis zum Hochzeitstanz – ich halte die Geschichte eures Tages in zeitlosen Bildern fest.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 2: Split Editorial */}
      <IntroWrapper title="Variante 02: Split Editorial">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center py-12">
          <div>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Services</span>
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9]">Leistungen.</h1>
          </div>
          <div className="border-l border-[#141414]/10 pl-8">
            <p className="text-[#141414]/60 text-lg leading-relaxed italic font-serif">
              "Ich biete euch mehr als nur Fotos. Ich biete euch Erinnerungen, die ein Leben lang bleiben."
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 3: Large Background Number */}
      <IntroWrapper title="Variante 03: Hintergrund-Zahl">
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="text-[30vw] font-serif italic whitespace-nowrap">02</span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Pakete & Optionen.</h1>
            <p className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/50">Transparente Begleitung für eure Hochzeit</p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 4: Left Aligned Minimal */}
      <IntroWrapper title="Variante 04: Linksbündig Minimal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="w-12 h-[1px] bg-[#1a2e26] mb-12" />
          <h1 className="text-5xl md:text-8xl font-serif italic mb-8">Leistungen.</h1>
          <p className="max-w-md text-[#141414]/60 leading-relaxed text-lg">
            Individuelle Hochzeitsreportagen, abgestimmt auf eure Wünsche und euren Zeitplan.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 5: Vertical Title Side */}
      <IntroWrapper title="Variante 05: Vertikaler Titel">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex gap-12 md:gap-24">
          <div className="hidden md:block">
            <h1 className="text-8xl font-serif italic [writing-mode:vertical-lr] rotate-180 leading-none">Services</h1>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Was ich für euch tue</span>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
              Authentische Begleitung,<br/>
              zeitlose Resultate.
            </h2>
            <p className="text-[#141414]/60 max-w-lg leading-relaxed">
              Jede Hochzeit ist anders. Deshalb biete ich verschiedene Pakete an, die wir gemeinsam an eure Bedürfnisse anpassen können.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 6: Floating Accent Circle */}
      <IntroWrapper title="Variante 06: Akzent-Kreis">
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border border-[#1a2e26]/5 -z-10" />
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-8 block">Angebote</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Eure Begleitung.</h1>
          <div className="w-16 h-[1px] bg-[#141414]/10" />
        </div>
      </IntroWrapper>

      {/* Variant 7: Double Header (English/German) */}
      <IntroWrapper title="Variante 07: Zweisprachig">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12">
            <h1 className="text-6xl md:text-9xl font-serif italic leading-none">Services.</h1>
            <span className="text-2xl md:text-4xl font-serif italic text-[#141414]/20">Leistungen</span>
          </div>
          <p className="text-[#141414]/60 max-w-xl text-lg">
            Von der ersten Planung bis zum fertigen Album – ich stehe euch mit meiner Erfahrung zur Seite.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 8: Boxed Intro */}
      <IntroWrapper title="Variante 08: Boxed Intro">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-sm border border-[#141414]/5">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block text-center">Details</span>
            <h1 className="text-4xl md:text-6xl font-serif italic text-center mb-12">Wie ich arbeite.</h1>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <p className="text-sm text-[#141414]/60 leading-relaxed">
                Ich lege Wert auf eine entspannte Atmosphäre. Nur so entstehen Bilder, auf denen ihr euch wirklich wiederkennt.
              </p>
              <p className="text-sm text-[#141414]/60 leading-relaxed">
                Meine Begleitung startet meist ab 6 Stunden, um die Geschichte eures Tages ganzheitlich erzählen zu können.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 9: Typographic List Style */}
      <IntroWrapper title="Variante 09: Listen-Stil">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-16">Leistungen.</h1>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {["Reportagen", "Paarshootings", "After-Wedding", "Alben", "Prints"].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-[10px] font-sans text-[#141414]/30">0{i+1}</span>
                <span className="text-xl md:text-2xl font-serif italic">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 10: Deep Forest Background Header */}
      <IntroWrapper title="Variante 10: Deep Forest Header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-8 bg-[#1a2e26] p-12 md:p-24 text-white">
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/40 mb-8 block">Investment</span>
              <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
                Wertvolle Erinnerungen für die Ewigkeit.
              </h1>
            </div>
            <div className="md:col-span-4 bg-white/50 p-12 flex items-end">
              <p className="text-sm text-[#141414]/60 leading-relaxed">
                Eure Hochzeitsbilder sind eine Investition, die mit den Jahren an Wert gewinnt.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 11: Minimalist Quote Focus */}
      <IntroWrapper title="Variante 11: Zitat-Fokus">
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-serif italic mb-12 leading-relaxed">
            "Es geht nicht um die Stunden, sondern um die Momente, die wir teilen."
          </h1>
          <div className="w-12 h-[1px] bg-[#1a2e26] mx-auto mb-8" />
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Meine Leistungen</span>
        </div>
      </IntroWrapper>

      {/* Variant 12: Bold & Clean */}
      <IntroWrapper title="Variante 12: Bold & Clean">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[#141414]/10">
          <div className="flex justify-between items-end">
            <h1 className="text-7xl md:text-[150px] font-serif italic leading-[0.7] tracking-tighter">Services</h1>
            <div className="max-w-xs text-right hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#141414]/40 leading-loose">
                Hannover — Niedersachsen — Weltweit<br/>
                Authentische Hochzeitsfotografie
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 13: Floating Labels */}
      <IntroWrapper title="Variante 13: Schwebende Labels">
        <div className="max-w-5xl mx-auto px-6 py-24 relative">
          <div className="absolute top-10 right-10 opacity-20">
            <span className="text-8xl font-serif italic">02</span>
          </div>
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Information</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Leistungen & Preise.</h1>
          <p className="text-[#141414]/60 max-w-md leading-relaxed">
            Transparente Kommunikation ist mir wichtig. Hier erfahrt ihr, wie ich euch begleiten kann.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 14: Minimal Line Art */}
      <IntroWrapper title="Variante 14: Line Art">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#141414]/20 mb-12" />
          <h1 className="text-4xl md:text-6xl font-serif italic mb-8 text-center">Eure Begleitung.</h1>
          <span className="font-sans uppercase tracking-[0.5em] text-[9px] text-[#141414]/30">Details & Pakete</span>
        </div>
      </IntroWrapper>

      {/* Variant 15: Side-by-Side Text */}
      <IntroWrapper title="Variante 15: Side-by-Side">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h1 className="text-5xl font-serif italic">Services.</h1>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-3xl font-serif italic text-[#141414]/60 leading-relaxed mb-8">
              Ich biete euch eine ganzheitliche Begleitung eures Hochzeitstages an.
            </p>
            <div className="w-12 h-[1px] bg-[#1a2e26]" />
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 16: Elegant Overlay */}
      <IntroWrapper title="Variante 16: Elegant Overlay">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="relative">
            <h1 className="text-6xl md:text-9xl font-serif italic text-[#141414]/5 leading-none">Leistungen</h1>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 pl-8 md:pl-16">
              <h2 className="text-3xl md:text-6xl font-serif italic">Was euch erwartet.</h2>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 17: Minimalist Steps */}
      <IntroWrapper title="Variante 17: Steps">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h1 className="text-5xl font-serif italic">Leistungen.</h1>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-[#1a2e26]" />
              <span className="w-2 h-2 rounded-full bg-[#141414]/10" />
              <span className="w-2 h-2 rounded-full bg-[#141414]/10" />
            </div>
          </div>
          <p className="text-[#141414]/60 max-w-2xl text-lg leading-relaxed">
            Entdeckt meine verschiedenen Pakete für eure Hochzeitsreportage in Hannover und Umgebung.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 18: Centered Bold Label */}
      <IntroWrapper title="Variante 18: Bold Label">
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="inline-block border border-[#141414] px-8 py-3 mb-12">
            <span className="font-sans uppercase tracking-[0.6em] text-[10px] font-bold">Leistungen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
            Eure Geschichte verdient es,<br/>
            erzählt zu werden.
          </h1>
        </div>
      </IntroWrapper>

      {/* Variant 19: Asymmetric Layout */}
      <IntroWrapper title="Variante 19: Asymmetrisch">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.8] mb-12">Work.</h1>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center border-t border-[#141414]/10 pt-8 md:border-t-0 md:pt-0">
            <p className="text-[#141414]/60 text-lg leading-relaxed">
              Vom ersten Kennenlernen bis zur Übergabe eurer Bilder begleite ich euch mit Leidenschaft und Professionalität.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 20: Simple Serif Focus */}
      <IntroWrapper title="Variante 20: Serif Focus">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-4">Leistungen.</h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#1a2e26] to-transparent mb-8" />
          <p className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Authentisch — Zeitlos — Ehrlich</p>
        </div>
      </IntroWrapper>
    </div>
  );
};
