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

export const PortfolioIntros = () => {
  return (
    <div className="bg-[#f5f2ed] min-h-screen text-[#141414]">
      {/* Variant 1-20 are existing or slightly modified to include more text */}
      
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
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#141414]/60 max-w-xl mx-auto leading-relaxed mb-12"
          >
            Authentische Momente, echte Emotionen und zeitlose Erinnerungen, die eure Geschichte so erzählen, wie sie wirklich war.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="w-12 h-[1px] bg-[#141414]/10 mx-auto"
          />
        </div>
      </IntroWrapper>

      {/* Variant 2: Split Layout */}
      <IntroWrapper title="Variante 02: Split Layout">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-end py-12">
          <div>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Galerie</span>
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9]">Momente.</h1>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-[#141414]/60 text-lg leading-relaxed">
              Ich begleite euch als stiller Beobachter und fange die ungestellten Augenblicke ein, die euren Tag so besonders machen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 3: Editorial Style */}
      <IntroWrapper title="Variante 03: Editorial Style">
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
              Meine Fotografie ist eine Hommage an die Echtheit. Keine Masken, kein Posing – nur ihr und eure Liebe in ihrer reinsten Form.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 4: Minimal Label */}
      <IntroWrapper title="Variante 04: Minimal Label">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#141414]/20" />
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Ausgewählte Arbeiten</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-serif italic text-[#141414] leading-[0.8] mb-12">Galerie.</h1>
          <p className="text-[#141414]/50 max-w-xl text-lg font-serif italic">
            Ein Querschnitt meiner liebsten Reportagen aus den letzten Jahren.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 5: Double Serif */}
      <IntroWrapper title="Variante 05: Double Serif">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-6xl font-serif italic mb-2">Die Galerie.</h1>
          <h2 className="text-2xl md:text-4xl font-serif italic text-[#141414]/30 mb-12">Eure Geschichte.</h2>
          <div className="max-w-xl">
            <p className="text-[#141414]/60 leading-relaxed text-lg">
              Jede Hochzeit ist ein Unikat. Hier findet ihr eine Auswahl an Momenten, die zeigen, wie ich eure Welt und eure Liebe sehe.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 6: Numbered Intro */}
      <IntroWrapper title="Variante 06: Nummeriert">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-sm font-serif italic text-[#141414]/40">Kapitel 01</span>
              <h1 className="text-5xl font-serif italic mt-4">Portfolio</h1>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-serif italic text-[#141414]/60 leading-relaxed max-w-2xl">
                Eine Sammlung von Momenten, die zeigen, wie ich die Welt und eure Liebe sehe. Authentisch, ehrlich und zeitlos.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 7: Overlapping Text */}
      <IntroWrapper title="Variante 07: Überlappend">
        <div className="max-w-5xl mx-auto px-6 py-24 relative">
          <span className="text-[12vw] font-serif italic text-[#141414]/5 absolute top-10 left-0 leading-none">Stories</span>
          <div className="relative z-10 pt-12 pl-12">
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Eure Bilder.</h1>
            <p className="max-w-md text-[#141414]/60 leading-relaxed text-lg">
              Entdeckt eine Auswahl meiner liebsten Hochzeitsreportagen und lasst euch von den Geschichten inspirieren.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 8: Side Label */}
      <IntroWrapper title="Variante 08: Side Label">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex gap-12">
          <div className="hidden md:block">
            <span className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/30 [writing-mode:vertical-lr] rotate-180">
              Portfolio — 2025
            </span>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Galerie.</h1>
            <p className="text-xl md:text-2xl font-serif italic text-[#141414]/50 max-w-xl leading-relaxed">
              Authentische Hochzeitsfotografie für Paare, die Wert auf echte Erinnerungen und zeitlose Ästhetik legen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 9: Typo Focus */}
      <IntroWrapper title="Variante 09: Typo Focus">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-12">
            Ich erzähle eure Geschichte<br/>
            <span className="pl-12 md:pl-24 text-[#141414]/30">— Bild für Bild.</span>
          </h1>
          <p className="max-w-2xl text-[#141414]/60 text-lg leading-relaxed">
            In meinem Portfolio findet ihr eine Auswahl an Reportagen, die die Vielfalt und Schönheit jeder einzelnen Hochzeit widerspiegeln.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 10: Simple & Direct */}
      <IntroWrapper title="Variante 10: Einfach & Direkt">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-8">Eure Galerie.</h1>
          <p className="text-[#141414]/60 max-w-xl mb-12 text-lg">
            Hier bekommt ihr einen Einblick in meine Arbeit und meinen Stil als Hochzeitsfotograf.
          </p>
          <div className="w-24 h-[1px] bg-[#1a2e26]" />
        </div>
      </IntroWrapper>

      {/* Variant 11: Minimalist Box */}
      <IntroWrapper title="Variante 11: Minimalist Box">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="border border-[#141414]/10 p-12 md:p-20 text-center">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Ausgewählte Arbeiten</span>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Portfolio</h1>
            <p className="text-[#141414]/50 max-w-md mx-auto leading-relaxed">
              Eine kuratierte Auswahl an Momenten, die die Essenz meiner Fotografie einfangen.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 12: Clean & Airy */}
      <IntroWrapper title="Variante 12: Clean & Airy">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col items-center text-center">
          <span className="font-sans uppercase tracking-[0.8em] text-[9px] text-[#141414]/30 mb-12">The Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-serif italic max-w-2xl leading-relaxed mb-12">
            "Momente, die bleiben, wenn der Tag vorüber ist."
          </h1>
          <p className="max-w-xl text-[#141414]/50 text-lg">
            Entdeckt meine Sicht auf die Liebe und die kleinen Details, die das große Ganze ausmachen.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 13: Grid Header */}
      <IntroWrapper title="Variante 13: Grid Header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.8] mb-8">Work.</h1>
            <p className="text-[#141414]/60 max-w-2xl text-xl font-serif italic">
              Authentische Hochzeitsreportagen für Paare, die das Echte lieben.
            </p>
          </div>
          <div className="flex flex-col justify-end border-l border-[#141414]/10 pl-8">
            <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-[#141414]/40 mb-2">Typ</span>
            <span className="font-serif italic text-lg">Reportagen</span>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 14: Deep Forest Accent */}
      <IntroWrapper title="Variante 14: Deep Forest Accent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="inline-block bg-[#1a2e26] text-white px-4 py-1 mb-8">
            <span className="font-sans uppercase tracking-[0.4em] text-[9px]">Galerie</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic text-[#141414] leading-tight mb-12">
            Echte Emotionen.<br/>
            <span className="text-[#141414]/20">Ungestellt.</span>
          </h1>
          <p className="max-w-xl text-[#141414]/60 text-lg leading-relaxed">
            In meinem Portfolio zeige ich euch, wie ich die ungeschminkte Wahrheit eures Tages festhalte.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 15: Soft Fade */}
      <IntroWrapper title="Variante 15: Soft Fade">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif italic mb-8 leading-relaxed">
              "Fotografie ist die Kunst, den Moment festzuhalten, bevor er verfliegt."
            </h1>
            <p className="text-[#141414]/40 mb-8 max-w-lg mx-auto">
              Hier findet ihr eine Auswahl an Momenten, die ich für die Ewigkeit konserviert habe.
            </p>
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/30">— Portfolio</span>
          </motion.div>
        </div>
      </IntroWrapper>

      {/* Variant 16: Brutalist Minimal */}
      <IntroWrapper title="Variante 16: Brutalist Minimal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-y border-[#141414]/5 my-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8 mb-8">
            <h1 className="text-7xl md:text-[120px] font-serif italic leading-none tracking-tighter">Portfolio</h1>
            <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-[#141414]/40">Est. 2018</span>
          </div>
          <p className="text-[#141414]/60 max-w-2xl text-lg">
            Eine ehrliche Dokumentation eurer Liebe. Zeitlos, minimalistisch und auf das Wesentliche reduziert.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 17: Floating Elements */}
      <IntroWrapper title="Variante 17: Schwebende Elemente">
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          <div className="mb-12 relative">
            <h1 className="text-6xl md:text-8xl font-serif italic relative z-10">Portfolio</h1>
            <div className="absolute -top-4 -right-8 w-16 h-16 rounded-full border border-[#1a2e26]/10" />
          </div>
          <p className="max-w-md text-[#141414]/50 font-sans uppercase tracking-[0.2em] text-[11px] leading-loose mb-8">
            Hannover & Weltweit — Authentische Hochzeitsreportagen für Paare, die das Echte lieben.
          </p>
          <div className="w-12 h-[1px] bg-[#141414]/10" />
        </div>
      </IntroWrapper>

      {/* Variant 18: Large Background Title */}
      <IntroWrapper title="Variante 18: Großer Hintergrund-Titel">
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="text-[20vw] font-serif italic whitespace-nowrap">Portfolio</span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Zeitlose Ästhetik.</h1>
            <p className="text-[#141414]/60 mb-8">Entdeckt meine Sicht auf die Fine Art Wedding Photography.</p>
            <p className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/50">Hannover & Weltweit</p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 19: Asymmetric Layout */}
      <IntroWrapper title="Variante 19: Asymmetrisch">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.8] mb-12">Work.</h1>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center border-t border-[#141414]/10 pt-8 md:border-t-0 md:pt-0">
            <p className="text-[#141414]/60 text-lg leading-relaxed mb-6">
              In meinem Portfolio findet ihr eine Auswahl an Reportagen, die die Vielfalt und Schönheit jeder einzelnen Hochzeit widerspiegeln.
            </p>
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/30">Selected Stories</span>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 20: Simple Serif Focus */}
      <IntroWrapper title="Variante 20: Serif Focus">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-8">Leistungen.</h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#1a2e26] to-transparent mb-8" />
          <p className="text-[#141414]/60 max-w-2xl text-lg mb-8">
            Hier erfahrt ihr alles über meine Pakete und wie ich euch an eurem Tag begleiten kann.
          </p>
          <p className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40">Authentisch — Zeitlos — Ehrlich</p>
        </div>
      </IntroWrapper>

      {/* Variant 21: Minimalist List */}
      <IntroWrapper title="Variante 21: Minimalist List">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row gap-12 items-baseline">
            <h1 className="text-6xl md:text-8xl font-serif italic">Portfolio.</h1>
            <div className="flex-1 border-b border-[#141414]/10 pb-4">
              <p className="text-[#141414]/60 text-lg italic font-serif">
                "Eine Sammlung von Momenten, die das Herz berühren."
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-2xl">
            <p className="text-[#141414]/50 leading-relaxed">
              Entdeckt meine Arbeiten und bekommt ein Gefühl für meine Bildsprache und mein Storytelling.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 22: Centered Bold Label */}
      <IntroWrapper title="Variante 22: Bold Label Centered">
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="inline-block border border-[#141414] px-8 py-3 mb-12">
            <span className="font-sans uppercase tracking-[0.6em] text-[10px] font-bold">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-12">
            Eure Geschichte verdient es,<br/>
            erzählt zu werden.
          </h1>
          <p className="text-[#141414]/60 max-w-xl mx-auto leading-relaxed">
            In meiner Galerie findet ihr authentische Hochzeitsreportagen, die die echten Emotionen eures Tages einfangen.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 23: Elegant Line Art */}
      <IntroWrapper title="Variante 23: Elegant Line Art">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#141414]/20 mb-12" />
          <h1 className="text-4xl md:text-6xl font-serif italic mb-8 text-center">Eure Galerie.</h1>
          <p className="max-w-xl text-center text-[#141414]/60 text-lg mb-12">
            Jedes Bild erzählt einen Teil eurer Geschichte. Hier findet ihr eine Auswahl meiner liebsten Reportagen.
          </p>
          <span className="font-sans uppercase tracking-[0.5em] text-[9px] text-[#141414]/30">Details & Momente</span>
        </div>
      </IntroWrapper>

      {/* Variant 24: Side-by-Side Text Bold */}
      <IntroWrapper title="Variante 24: Side-by-Side Bold">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h1 className="text-5xl font-serif italic">Portfolio.</h1>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-3xl font-serif italic text-[#141414]/60 leading-relaxed mb-8">
              Ich biete euch eine ganzheitliche Dokumentation eures Hochzeitstages an.
            </p>
            <p className="text-[#141414]/50 max-w-lg leading-relaxed mb-8">
              In meiner Galerie bekommt ihr einen Einblick in meine Arbeitsweise und meinen Fokus auf die echten Momente.
            </p>
            <div className="w-12 h-[1px] bg-[#1a2e26]" />
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 25: Elegant Overlay Header */}
      <IntroWrapper title="Variante 25: Elegant Overlay Header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="relative">
            <h1 className="text-6xl md:text-9xl font-serif italic text-[#141414]/5 leading-none">Galerie</h1>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 pl-8 md:pl-16">
              <h2 className="text-3xl md:text-6xl font-serif italic mb-4">Was euch erwartet.</h2>
              <p className="text-[#141414]/60 max-w-md text-lg">
                Authentische Bilder, die eure Geschichte so erzählen, wie sie sich angefühlt hat.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 26: Minimalist Steps Portfolio */}
      <IntroWrapper title="Variante 26: Steps Portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h1 className="text-5xl font-serif italic">Portfolio.</h1>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-[#1a2e26]" />
              <span className="w-2 h-2 rounded-full bg-[#141414]/10" />
              <span className="w-2 h-2 rounded-full bg-[#141414]/10" />
            </div>
          </div>
          <p className="text-[#141414]/60 max-w-2xl text-lg leading-relaxed">
            Entdeckt meine Sicht auf die Liebe. In meiner Galerie findet ihr eine Auswahl an Reportagen aus Hannover und Umgebung.
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 27: Boxed Intro Portfolio */}
      <IntroWrapper title="Variante 27: Boxed Intro Portfolio">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-sm border border-[#141414]/5">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block text-center">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-serif italic text-center mb-12">Eure Geschichte.</h1>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <p className="text-sm text-[#141414]/60 leading-relaxed">
                Ich liebe es, die echten Emotionen einzufangen. In meiner Galerie zeige ich euch, wie ich Hochzeiten dokumentiere.
              </p>
              <p className="text-sm text-[#141414]/60 leading-relaxed">
                Jedes Bild ist ein Teil eines großen Ganzen. Entdeckt meine liebsten Reportagen und lasst euch inspirieren.
              </p>
            </div>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 28: Typographic List Style Portfolio */}
      <IntroWrapper title="Variante 28: Listen-Stil Portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-16">Portfolio.</h1>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {["Reportagen", "Paarshootings", "After-Wedding", "Momente", "Details"].map((item, i) => (
              <div key={item} className="flex flex-col gap-2">
                <span className="text-[10px] font-sans text-[#141414]/30">0{i+1}</span>
                <span className="text-xl md:text-2xl font-serif italic">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-16 text-[#141414]/60 max-w-xl text-lg italic font-serif">
            "Bilder, die mehr sagen als tausend Worte."
          </p>
        </div>
      </IntroWrapper>

      {/* Variant 29: Vertical Title Side Portfolio */}
      <IntroWrapper title="Variante 29: Vertikaler Titel Portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex gap-12 md:gap-24">
          <div className="hidden md:block">
            <h1 className="text-8xl font-serif italic [writing-mode:vertical-lr] rotate-180 leading-none">Portfolio</h1>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Ausgewählte Arbeiten</span>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
              Eure Liebe,<br/>
              meine Sichtweise.
            </h2>
            <p className="text-[#141414]/60 max-w-lg leading-relaxed text-lg">
              In meiner Galerie findet ihr eine Auswahl an Reportagen, die zeigen, wie ich die Welt und eure Liebe sehe. Authentisch, ehrlich und zeitlos.
            </p>
          </div>
        </div>
      </IntroWrapper>

      {/* Variant 30: Split Editorial Portfolio */}
      <IntroWrapper title="Variante 30: Split Editorial Portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center py-12">
          <div>
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-4 block">Galerie</span>
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9]">Momente.</h1>
          </div>
          <div className="border-l border-[#141414]/10 pl-8">
            <p className="text-[#141414]/60 text-lg leading-relaxed italic font-serif mb-6">
              "Ich fange die Momente ein, die euren Tag unvergesslich machen."
            </p>
            <p className="text-[#141414]/50 text-sm leading-relaxed">
              Entdeckt meine Arbeiten und bekommt ein Gefühl für meine Bildsprache und mein Storytelling.
            </p>
          </div>
        </div>
      </IntroWrapper>
    </div>
  );
};
