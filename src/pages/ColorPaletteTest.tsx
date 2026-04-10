import React from "react";
import { motion } from "motion/react";
import { Check, Info, Heart, Camera, Calendar, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const FOREST_GREEN = "#1a2e26";
const TERRACOTTA = "#a0522d";
const BEIGE = "#f5f2ed";
const INK_BLACK = "#141414";

const ColorSwatch = ({ hex, label, usage }: { hex: string, label: string, usage: string }) => (
  <div className="flex flex-col gap-3">
    <div 
      className="w-full aspect-square rounded-2xl shadow-sm border border-black/5 flex items-end p-4"
      style={{ backgroundColor: hex }}
    >
      <span className={cn(
        "text-[10px] font-mono uppercase tracking-widest",
        hex === BEIGE || hex === "#ffffff" ? "text-zinc-900" : "text-white/70"
      )}>
        {hex}
      </span>
    </div>
    <div>
      <p className="text-sm font-bold text-zinc-900">{label}</p>
      <p className="text-[10px] uppercase tracking-widest text-zinc-400">{usage}</p>
    </div>
  </div>
);

const SectionPreview = ({ title, description, bg, textColor, buttonBg, buttonText, accentColor }: any) => (
  <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-sm mb-12">
    <div className="p-8 md:p-16" style={{ backgroundColor: bg }}>
      <div className="max-w-3xl mx-auto">
        <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight" style={{ color: textColor }}>
          {title}
        </h3>
        <p className="text-lg leading-relaxed mb-10" style={{ color: textColor, opacity: 0.8 }}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button 
            className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all hover:brightness-110"
            style={{ backgroundColor: buttonBg, color: buttonText }}
          >
            Termin anfragen
          </button>
          <button 
            className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold border flex items-center gap-2 group transition-all"
            style={{ borderColor: accentColor || textColor, color: accentColor || textColor }}
          >
            Portfolio ansehen
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-black/5 bg-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: accentColor || buttonBg, color: buttonText }}>
              <Heart size={20} />
            </div>
            <h4 className="font-serif text-xl mb-2" style={{ color: textColor }}>Echte Emotionen</h4>
            <p className="text-sm opacity-70" style={{ color: textColor }}>Ich fange die ungestellten Momente eures Tages ein.</p>
          </div>
          <div className="p-6 rounded-2xl border border-black/5 bg-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: FOREST_GREEN, color: "white" }}>
              <Camera size={20} />
            </div>
            <h4 className="font-serif text-xl mb-2" style={{ color: textColor }}>Natürliches Licht</h4>
            <p className="text-sm opacity-70" style={{ color: textColor }}>Keine künstlichen Blitze, nur pure Atmosphäre.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ColorPaletteTest = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Farbkonzept V2</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">Deep Forest als Akzent & Hintergrund | Text in Schwarz</p>
        </div>

        {/* Farbübersicht */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ColorSwatch hex={BEIGE} label="Soft Beige" usage="Haupt-Hintergrund" />
              <ColorSwatch hex={INK_BLACK} label="Ink Black" usage="Haupt-Textfarbe" />
              <ColorSwatch hex={FOREST_GREEN} label="Deep Forest" usage="Element-Hintergrund / Buttons" />
              <ColorSwatch hex={TERRACOTTA} label="Terracotta" usage="Akzentfarbe / Highlights" />
            </div>
          </div>
        </div>

        {/* Strategische Erklärung */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-zinc-100">
            <h2 className="font-serif text-3xl mb-8">Das neue Konzept: Tiefgrün als Anker</h2>
            <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
              <p className="text-lg leading-relaxed">
                In dieser Version nutzen wir **Schwarz (#141414)** für alle Texte, um maximale Lesbarkeit und einen modernen Look zu garantieren. Das **Deep Forest Green** wird strategisch als Hintergrund für Sektionen oder Buttons eingesetzt, um Tiefe zu erzeugen.
              </p>
              <ul className="space-y-4 list-none p-0">
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <div>
                    <strong className="text-zinc-900 block mb-1">Deep Forest als Sektions-Hintergrund</strong>
                    Dunkle Sektionen unterbrechen den hellen Beige-Fluss und lenken die Aufmerksamkeit auf wichtige Call-to-Actions oder Testimonials.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <div>
                    <strong className="text-zinc-900 block mb-1">Terracotta als "Eye-Catcher"</strong>
                    Terracotta wird sparsam für Icons, kleine Labels oder sekundäre Buttons genutzt, um Wärme zu spenden.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test-Beispiele */}
        <div className="space-y-8">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">Live-Vorschau der Kombinationen</h2>
          
          {/* Beispiel 1: Beige Background, Black Text, Forest Button */}
          <SectionPreview 
            title="Beige & Schwarz (Klassisch)"
            description="Der Hauptteil der Website: Schwarzer Text auf sanftem Beige. Das Deep Forest Green wird hier nur für den primären Button genutzt, um ihn deutlich hervorzuheben."
            bg={BEIGE}
            textColor={INK_BLACK}
            buttonBg={FOREST_GREEN}
            buttonText="white"
            accentColor={TERRACOTTA}
          />

          {/* Beispiel 2: Deep Forest Background, White Text, Terracotta Button */}
          <SectionPreview 
            title="Deep Forest Statement"
            description="Eine dunkle Sektion für besondere Momente. Hier nutzen wir das Waldgrün als Hintergrund. Der Text wird weiß, und Terracotta dient als leuchtender Akzent-Button."
            bg={FOREST_GREEN}
            textColor="white"
            buttonBg={TERRACOTTA}
            buttonText="white"
            accentColor="#dcd0b8"
          />

          {/* Beispiel 3: Beige Background, Black Text, Terracotta Button */}
          <SectionPreview 
            title="Warme Akzente"
            description="Hier nutzen wir Terracotta als Haupt-Buttonfarbe auf dem Beige-Hintergrund. Das Waldgrün taucht nur dezent in den Icons oder als Rahmenfarbe auf."
            bg={BEIGE}
            textColor={INK_BLACK}
            buttonBg={TERRACOTTA}
            buttonText="white"
            accentColor={FOREST_GREEN}
          />

          {/* Beispiel 4: Mixed Elements */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[2.5rem] bg-white border border-zinc-100">
              <div className="w-12 h-12 rounded-full bg-[#a0522d] flex items-center justify-center mb-6 text-white">
                <Heart size={24} />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-[#141414]">Kleine Details</h3>
              <p className="text-zinc-500 mb-8">Schwarzer Text auf weißem Grund mit Terracotta-Akzenten wirkt sehr modern und luftig.</p>
              <button className="w-full py-4 rounded-xl bg-[#1a2e26] text-white font-bold uppercase tracking-widest text-xs">
                Mehr erfahren
              </button>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-[#1a2e26] text-white">
              <div className="w-12 h-12 rounded-full bg-[#f5f2ed] flex items-center justify-center mb-6 text-[#1a2e26]">
                <Camera size={24} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Dunkle Eleganz</h3>
              <p className="text-white/70 mb-8">Waldgrün als Hintergrund mit hellem Beige als Akzentfarbe für Icons und Buttons.</p>
              <button className="w-full py-4 rounded-xl bg-[#a0522d] text-white font-bold uppercase tracking-widest text-xs">
                Portfolio
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Mein Experten-Tipp V2</h2>
          <p className="text-zinc-500 leading-relaxed italic">
            "Behalte Schwarz (#141414) als Anker für deine Texte bei. Nutze Deep Forest Green (#1a2e26) für große Farbflächen (Sektionen) oder als kräftige Button-Farbe. Terracotta (#a0522d) ist dein Joker: Nutze es dort, wo du Wärme und Aufmerksamkeit erzeugen willst, ohne die natürliche Ruhe des Grüns zu stören."
          </p>
        </div>
      </div>
    </div>
  );
};
