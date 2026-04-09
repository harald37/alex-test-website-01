import React from 'react';
import { cn } from '../lib/utils';

const COPY_VARIANTS = [
  { id: 1, title: "Emotional & Weitläufig", text: "Zuhause in Hannover, verliebt in eure Geschichten – egal ob in Niedersachsen, deutschlandweit oder am anderen Ende der Welt." },
  { id: 2, title: "Fokus auf Reisebereitschaft", text: "Euer Hochzeitsfotograf aus Hannover. Für eure Liebe reise ich durch ganz Niedersachsen, Deutschland und dorthin, wo eure Träume euch hinführen." },
  { id: 3, title: "Minimalistisch & Klar", text: "Hannover ist meine Basis, die Welt mein Studio. Ich begleite euch in Niedersachsen, Deutschland und weltweit." },
  { id: 4, title: "SEO-Optimiert & Direkt", text: "Hochzeitsfotograf Hannover & Niedersachsen. Authentische Reportagen in ganz Deutschland und für Destination Weddings weltweit." },
  { id: 5, title: "Persönlich & Nahbar", text: "Ich lebe und arbeite in Hannover, aber mein Herz schlägt für Hochzeiten in ganz Niedersachsen, Deutschland und überall dort, wo ihr 'Ja' sagt." },
  { id: 6, title: "Abenteuerlustig", text: "Von Hannover in die Welt: Ich begleite eure Hochzeit in Niedersachsen, ganz Deutschland oder an eurem persönlichen Sehnsuchtsort weltweit." },
  { id: 7, title: "Elegant & Zeitlos", text: "Ansässig in Hannover, verfügbar für zeitlose Hochzeitsfotografie in Niedersachsen, Deutschland und an den schönsten Orten der Welt." },
  { id: 8, title: "Kurz & Prägnant", text: "Hannover. Niedersachsen. Deutschland. Weltweit. Eure Geschichte, überall festgehalten." },
  { id: 9, title: "Storytelling Fokus", text: "Jede Liebesgeschichte verdient einen besonderen Rahmen. Ich starte in Hannover und folge euch durch Niedersachsen, Deutschland oder bis ans Meer." },
  { id: 10, title: "Professionell & Flexibel", text: "Ihr findet mich in Hannover, aber buchen könnt ihr mich für eure Hochzeit in ganz Niedersachsen, Deutschland und für exklusive Destination Weddings." },
  { id: 11, title: "Heimatliebe & Fernweh", text: "In Hannover verwurzelt, in der Welt zuhause. Euer Fotograf für authentische Momente in Niedersachsen, Deutschland und global." },
  { id: 12, title: "Modern & Urban", text: "Urbaner Stil aus Hannover für eure Hochzeit – in Niedersachsen, deutschlandweit oder an jedem Ort dieser Welt." },
  { id: 13, title: "Poetisch", text: "Wo auch immer eure Liebe gefeiert wird: Ich komme aus Hannover zu euch nach Niedersachsen, durch ganz Deutschland oder über alle Grenzen hinaus." },
  { id: 14, title: "Service-Orientiert", text: "Mein Standort ist Hannover, mein Einsatzgebiet ist grenzenlos. Ich fotografiere eure Hochzeit in Niedersachsen, Deutschland und weltweit." },
  { id: 15, title: "Künstlerisch", text: "Künstlerische Hochzeitsreportagen aus Hannover. Verfügbar in Niedersachsen, Deutschland und für eure Traumhochzeit im Ausland." },
  { id: 16, title: "Direkte Ansprache", text: "Sagt ihr 'Ja' in Hannover, Niedersachsen oder am Strand von Mallorca? Ich begleite euch deutschlandweit und weltweit." },
  { id: 17, title: "Fokus auf Destination", text: "Spezialisiert auf Hochzeiten in Hannover & Niedersachsen – leidenschaftlich gern auch deutschlandweit und weltweit für euch unterwegs." },
  { id: 18, title: "Dezent & Edel", text: "Hochzeitsfotografie mit Basis in Hannover. Begleitung in Niedersachsen, Deutschland und an internationalen Destinationen." },
  { id: 19, title: "Authentizitäts-Fokus", text: "Echte Momente, egal wo. Ich starte in Hannover und begleite euch durch Niedersachsen, Deutschland oder zu eurer Hochzeit weltweit." },
  { id: 20, title: "Reise-Statement", text: "Kein Weg ist zu weit für eure Geschichte. Von Hannover aus begleite ich Hochzeiten in Niedersachsen, Deutschland und auf der ganzen Welt." },
  { id: 21, title: "Klassisch", text: "Euer Hochzeitsfotograf in Hannover und Niedersachsen. Ich reise für euch durch ganz Deutschland und weltweit." },
  { id: 22, title: "Lifestyle-Orientiert", text: "Moderner Lifestyle aus Hannover. Ich fotografiere eure Liebe in Niedersachsen, Deutschland und an jedem Ort der Welt." },
  { id: 23, title: "Exklusiv", text: "Exklusive Hochzeitsreportagen mit Sitz in Hannover. Verfügbar für Buchungen in Niedersachsen, Deutschland und weltweit." },
  { id: 24, title: "Herzblut-Variante", text: "Mit Herzblut in Hannover dabei – und mit Leidenschaft für euch in Niedersachsen, Deutschland und weltweit unterwegs." },
  { id: 25, title: "Fokus auf Vielfalt", text: "Ob Schlosshochzeit in Niedersachsen, City-Wedding in Hannover oder Strandtrauung weltweit: Ich halte eure Momente fest." },
  { id: 26, title: "Geografisch Strukturiert", text: "Standort: Hannover. Fokus: Niedersachsen & Deutschland. Leidenschaft: Weltweite Hochzeiten." },
  { id: 27, title: "Einladend", text: "Besucht mich in Hannover oder ladet mich zu eurer Hochzeit in Niedersachsen, Deutschland oder weltweit ein." },
  { id: 28, title: "Visionär", text: "Meine Vision beginnt in Hannover und reicht über Niedersachsen und Deutschland bis zu den entlegensten Orten der Welt." },
  { id: 29, title: "Kompakt & Stark", text: "Hochzeitsfotograf aus Hannover. Einsatzbereit in Niedersachsen, Deutschland und weltweit." },
  { id: 30, title: "Der Allrounder", text: "Von der kleinen Feier in Hannover bis zur großen Destination Wedding weltweit: Ich bin euer Fotograf in Niedersachsen und ganz Deutschland." }
];

interface VariantWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const VariantWrapper = ({ title, children, className }: VariantWrapperProps) => (
  <div className={cn("flex flex-col gap-4 p-8 border border-zinc-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow", className)}>
    <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400">{title}</span>
    <div className="flex-1 flex items-center">
      {children}
    </div>
  </div>
);

export const CopyVariants = () => {
  return (
    <div className="min-h-screen bg-zinc-50 py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-24 text-center">
          <h1 className="font-serif italic text-4xl md:text-6xl text-zinc-900 mb-6">Text-Varianten (Standort & Reise)</h1>
          <p className="text-zinc-500 font-sans tracking-wide max-w-2xl mx-auto">
            30 Formulierungen, um Hannover als Hauptstandort zu betonen und gleichzeitig die Reisebereitschaft (Niedersachsen, Deutschland, Weltweit) zu kommunizieren.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COPY_VARIANTS.map((variant) => (
            <VariantWrapper key={variant.id} title={`${variant.id.toString().padStart(2, '0')}. ${variant.title}`}>
              <p className="font-serif italic text-lg md:text-xl text-zinc-800 leading-relaxed">
                {variant.text}
              </p>
            </VariantWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
