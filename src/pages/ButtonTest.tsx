import React from 'react';
import { cn } from '../lib/utils';
import { Send } from 'lucide-react';

const TestSection = ({ 
  title, 
  description, 
  children,
  className 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={cn("py-24 border-b border-zinc-100 last:border-none", className)}>
    <div className="max-w-3xl mx-auto px-6">
      <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-400 mb-8 block">{title}</span>
      <p className="text-zinc-600 leading-relaxed mb-12 text-lg">
        {description}
      </p>
      <div className="flex justify-start">
        {children}
      </div>
    </div>
  </section>
);

export const ButtonTest = () => {
  const placeholderText = "Eure Hochzeit ist ein einmaliges Erlebnis, voller kleiner Gesten und großer Emotionen. Ich begleite euch als stiller Beobachter, um diese flüchtigen Momente in zeitlosen Bildern festzuhalten. Jede Reportage ist so individuell wie eure Geschichte selbst. Wenn euch meine Bildsprache anspricht, freue ich mich darauf, euch kennenzulernen.";

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto mb-20 text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-6">Button Kontext Test</h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs max-w-2xl mx-auto leading-relaxed">
          Vorschau der ausgewählten Button-Varianten (2, 20, 23, 29, 37) im direkten Zusammenspiel mit Textinhalten.
        </p>
      </div>

      {/* Button 02: Solid Dark */}
      <TestSection 
        title="Variante 02: Solid Dark" 
        description={placeholderText}
      >
        <button className="px-12 py-4 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all duration-500">
          JETZT ANFRAGEN
        </button>
      </TestSection>

      {/* Button 20: Dotted */}
      <TestSection 
        title="Variante 20: Dotted" 
        description={placeholderText}
      >
        <button className="px-12 py-4 border-2 border-dotted border-zinc-300 text-[10px] uppercase tracking-[0.3em] hover:border-zinc-900 transition-all">
          JETZT ANFRAGEN
        </button>
      </TestSection>

      {/* Button 23: Neumorphism */}
      <TestSection 
        title="Variante 23: Neumorphism" 
        description={placeholderText}
        className="bg-zinc-50"
      >
        <button className="px-12 py-4 bg-zinc-50 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] text-[10px] uppercase tracking-[0.3em] active:shadow-inner transition-all">
          JETZT ANFRAGEN
        </button>
      </TestSection>

      {/* Button 29: Bold Pill */}
      <TestSection 
        title="Variante 29: Bold Pill" 
        description={placeholderText}
      >
        <button className="px-14 py-4 border-2 border-zinc-900 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all">
          JETZT ANFRAGEN
        </button>
      </TestSection>

      {/* Button 37: Floating Pill */}
      <TestSection 
        title="Variante 37: Floating Pill" 
        description={placeholderText}
      >
        <button className="px-12 py-4 bg-zinc-900 text-white rounded-full shadow-lg shadow-zinc-900/20 hover:shadow-zinc-900/40 hover:-translate-y-0.5 transition-all flex items-center space-x-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">JETZT ANFRAGEN</span>
          <Send size={14} />
        </button>
      </TestSection>

      <div className="mt-24 text-center">
        <a href="/button-showcase" className="text-zinc-400 text-xs uppercase tracking-[0.3em] hover:text-zinc-900 transition-all">
          Zurück zur Übersicht
        </a>
      </div>
    </div>
  );
};

export default ButtonTest;
