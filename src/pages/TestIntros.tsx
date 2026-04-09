import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const INTROS = [
  // Portfolio
  { category: "Portfolio", headline: "Momente.", subheadline: "Die Kunst, das Unsichtbare sichtbar zu machen. Momente, die bleiben, wenn das Licht verblasst." },
  { category: "Portfolio", headline: "Echte Geschichten.", subheadline: "Jedes Bild erzählt eine eigene Geschichte. Ungestellt, authentisch und voller Emotionen." },
  { category: "Portfolio", headline: "Zeitlose Erinnerungen.", subheadline: "Ein Blick zurück auf die schönsten Augenblicke. Für die Ewigkeit festgehalten." },
  { category: "Portfolio", headline: "Licht & Schatten.", subheadline: "Die perfekte Balance aus Licht, Emotion und Ästhetik in jedem einzelnen Bild." },
  { category: "Portfolio", headline: "Eure Liebe in Bildern.", subheadline: "Lasst euch von echten Liebesgeschichten inspirieren. So einzigartig wie ihr selbst." },
  { category: "Portfolio", headline: "Visuelle Poesie.", subheadline: "Fotografie, die nicht nur zeigt, wie es aussah, sondern wie es sich anfühlte." },
  { category: "Portfolio", headline: "Unvergessliche Augenblicke.", subheadline: "Die kleinen und großen Momente eures Tages, kunstvoll und natürlich eingefangen." },
  { category: "Portfolio", headline: "Authentische Reportagen.", subheadline: "Kein Posing, nur echte Emotionen. Erlebt Hochzeiten durch meine Linse." },
  { category: "Portfolio", headline: "Magie des Moments.", subheadline: "Wenn aus einem flüchtigen Augenblick eine Erinnerung für die Ewigkeit wird." },
  { category: "Portfolio", headline: "Fine Art Fotografie.", subheadline: "Elegante, zeitlose und emotionale Bilder, die eure Geschichte erzählen." },

  // Über mich
  { category: "Über mich", headline: "Hallo, ich bin Alex.", subheadline: "Euer Hochzeitsfotograf aus Hannover. Leidenschaftlich, unaufdringlich und immer auf der Suche nach dem perfekten Licht." },
  { category: "Über mich", headline: "Der Mensch hinter der Kamera.", subheadline: "Ich liebe es, echte Emotionen einzufangen und eure Geschichte in Bildern zu erzählen." },
  { category: "Über mich", headline: "Meine Philosophie.", subheadline: "Fotografie ist für mich mehr als nur ein Beruf. Es ist die Leidenschaft, Momente für die Ewigkeit festzuhalten." },
  { category: "Über mich", headline: "Euer Geschichtenerzähler.", subheadline: "Ich begleite euch an eurem großen Tag als Freund, nicht nur als Dienstleister." },
  { category: "Über mich", headline: "Warum ich fotografiere.", subheadline: "Weil ich daran glaube, dass die echten, ungestellten Momente die wertvollsten sind." },
  { category: "Über mich", headline: "Licht, Liebe & Leidenschaft.", subheadline: "Das sind die drei Dinge, die meine Arbeit als Hochzeitsfotograf antreiben." },
  { category: "Über mich", headline: "Mehr als nur Bilder.", subheadline: "Ich möchte Erinnerungen schaffen, die euch auch in 50 Jahren noch zu Tränen rühren." },
  { category: "Über mich", headline: "Mein Weg zur Fotografie.", subheadline: "Wie aus einer Leidenschaft meine Berufung wurde, echte Liebesgeschichten zu dokumentieren." },
  { category: "Über mich", headline: "Euer Begleiter.", subheadline: "Diskret, aufmerksam und immer mit dem Blick für das besondere Detail." },
  { category: "Über mich", headline: "Authentisch & Echt.", subheadline: "Genau so wie meine Bilder bin auch ich. Lernt mich und meine Arbeitsweise kennen." },

  // Leistungen
  { category: "Leistungen", headline: "Eure Investition.", subheadline: "Transparente Pakete für unbezahlbare Erinnerungen. Findet das passende Angebot für euren Tag." },
  { category: "Leistungen", headline: "Was ich euch biete.", subheadline: "Von der kleinen standesamtlichen Trauung bis zur großen Hochzeitsreportage." },
  { category: "Leistungen", headline: "Maßgeschneiderte Pakete.", subheadline: "Jede Hochzeit ist einzigartig. Deshalb passe ich meine Leistungen individuell an eure Wünsche an." },
  { category: "Leistungen", headline: "Eure Hochzeitsreportage.", subheadline: "Ich begleite euch vom Getting Ready bis zur Party. Für eine lückenlose Geschichte." },
  { category: "Leistungen", headline: "Preise & Pakete.", subheadline: "Eine Übersicht meiner Leistungen. Für Erinnerungen, die ein Leben lang halten." },
  { category: "Leistungen", headline: "Mehr als nur Fotos.", subheadline: "Beratung, Planungshilfe und ein offenes Ohr für all eure Fragen rund um die Hochzeit." },
  { category: "Leistungen", headline: "Euer großes Abenteuer.", subheadline: "Egal ob Elopement in den Bergen oder große Feier im Schloss – ich bin dabei." },
  { category: "Leistungen", headline: "Paarshootings & mehr.", subheadline: "Neben Hochzeiten biete ich auch Verlobungsshootings und After-Wedding-Shootings an." },
  { category: "Leistungen", headline: "Transparenz von Anfang an.", subheadline: "Keine versteckten Kosten. Alle Pakete beinhalten die sorgfältige Bearbeitung eurer Bilder." },
  { category: "Leistungen", headline: "Eure Erinnerungen, euer Stil.", subheadline: "Wählt das Paket, das am besten zu eurer Vision und eurem Budget passt." },

  // FAQ
  { category: "FAQ", headline: "Häufig gestellte Fragen.", subheadline: "Alles, was ihr vor eurer Buchung wissen müsst. Klar, transparent und auf den Punkt." },
  { category: "FAQ", headline: "Fragen & Antworten.", subheadline: "Ihr habt Fragen? Hier findet ihr die Antworten auf die häufigsten Anliegen meiner Paare." },
  { category: "FAQ", headline: "Gut zu wissen.", subheadline: "Wichtige Informationen rund um meine Arbeitsweise, Buchung und den Ablauf am Hochzeitstag." },
  { category: "FAQ", headline: "Eure Fragen, meine Antworten.", subheadline: "Damit ihr genau wisst, was euch erwartet und ihr euren Tag entspannt genießen könnt." },
  { category: "FAQ", headline: "Klarheit schaffen.", subheadline: "Von der Anzahl der Bilder bis hin zur Reisebereitschaft – hier klären wir die Details." },
  { category: "FAQ", headline: "Ablauf & Details.", subheadline: "Wie läuft eine Buchung ab? Was passiert bei Regen? Alle Antworten auf einen Blick." },
  { category: "FAQ", headline: "Wissenswertes.", subheadline: "Die wichtigsten Informationen für eure Hochzeitsplanung mit mir als Fotograf." },
  { category: "FAQ", headline: "Noch Fragen offen?", subheadline: "Hier findet ihr die Antworten auf die Fragen, die mir am häufigsten gestellt werden." },
  { category: "FAQ", headline: "Transparente Antworten.", subheadline: "Ich lege großen Wert auf offene Kommunikation. Hier findet ihr alle wichtigen Infos." },
  { category: "FAQ", headline: "Alles auf einen Blick.", subheadline: "Die wichtigsten Fragen und Antworten rund um eure Hochzeitsreportage." },

  // Kontakt
  { category: "Kontakt", headline: "Lasst uns sprechen.", subheadline: "Erzählt mir von euren Plänen, eurer Vision und eurer Liebesgeschichte. Ich freue mich auf euch!" },
  { category: "Kontakt", headline: "Schreibt mir.", subheadline: "Habt ihr euren Termin schon gefunden? Dann sichert euch euer Datum für unvergessliche Bilder." },
  { category: "Kontakt", headline: "Eure Anfrage.", subheadline: "Füllt das Formular aus und lasst uns gemeinsam herausfinden, ob wir zueinander passen." },
  { category: "Kontakt", headline: "Hallo sagen.", subheadline: "Ich kann es kaum erwarten, mehr über euch und eure Hochzeitspläne zu erfahren." },
  { category: "Kontakt", headline: "Der erste Schritt.", subheadline: "Schreibt mir eine Nachricht und wir vereinbaren ein unverbindliches Kennenlerngespräch." },
  { category: "Kontakt", headline: "Erzählt mir eure Geschichte.", subheadline: "Wo heiratet ihr? Wie stellt ihr euch euren Tag vor? Ich bin gespannt auf eure Ideen." },
  { category: "Kontakt", headline: "Termin anfragen.", subheadline: "Sichert euch rechtzeitig euren Wunschtermin für eure Hochzeitsreportage." },
  { category: "Kontakt", headline: "Lasst uns connecten.", subheadline: "Egal ob per Formular, E-Mail oder WhatsApp – ich freue mich auf eure Nachricht." },
  { category: "Kontakt", headline: "Euer Weg zu mir.", subheadline: "Hinterlasst mir ein paar Details zu eurer Hochzeit und ich melde mich schnellstmöglich bei euch." },
  { category: "Kontakt", headline: "Ich freue mich auf euch.", subheadline: "Lasst uns gemeinsam Erinnerungen schaffen, die ein Leben lang halten." },

  // Hannover (SEO)
  { category: "Hannover", headline: "Hochzeitsfotograf Hannover.", subheadline: "Authentische Hochzeitsreportagen in der Landeshauptstadt und Umgebung. Momente, die bleiben." },
  { category: "Hannover", headline: "Eure Geschichte in Hannover.", subheadline: "Vom Neuen Rathaus bis zu den Herrenhäuser Gärten – ich halte eure Liebe fest." },
  { category: "Hannover", headline: "Liebe in der Leinestadt.", subheadline: "Natürliche und emotionale Hochzeitsfotografie für moderne Paare in Hannover." },
  { category: "Hannover", headline: "Hannover hautnah.", subheadline: "Ungestellte Augenblicke und zeitlose Ästhetik für euren großen Tag in Hannover." },
  { category: "Hannover", headline: "Euer Tag in Hannover.", subheadline: "Ich begleite euch diskret und aufmerksam durch eure Hochzeit in der Region Hannover." },

  // Braunschweig (SEO)
  { category: "Braunschweig", headline: "Hochzeitsfotograf Braunschweig.", subheadline: "Emotionale Hochzeitsreportagen in der Löwenstadt. Echte Momente, kunstvoll erzählt." },
  { category: "Braunschweig", headline: "Eure Liebe in Braunschweig.", subheadline: "Vom Altstadtmarkt bis zum Richmond Park – ich dokumentiere euren Tag in Braunschweig." },
  { category: "Braunschweig", headline: "Braunschweig bewegt.", subheadline: "Authentische Bilder, die die Magie eurer Hochzeit in Braunschweig einfangen." },
  { category: "Braunschweig", headline: "Löwenstadt-Liebe.", subheadline: "Zeitlose Hochzeitsfotografie für Paare, die das Besondere in Braunschweig suchen." },
  { category: "Braunschweig", headline: "Euer Moment in Braunschweig.", subheadline: "Ich halte die kleinen und großen Augenblicke eurer Hochzeit in Braunschweig fest." }
];

const LayoutMinimal = ({ headline, subheadline }: { headline: string; subheadline: string }) => (
  <div className="py-24 text-center max-w-3xl mx-auto">
    <h1 className="font-serif italic text-5xl md:text-7xl text-zinc-900 mb-8">{headline}</h1>
    <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs md:text-sm leading-relaxed">{subheadline}</p>
  </div>
);

const LayoutSplit = ({ headline, subheadline }: { headline: string; subheadline: string }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center py-20">
    <div className="space-y-6">
      <h1 className="font-serif italic text-4xl md:text-6xl text-zinc-900 leading-tight">{headline}</h1>
      <div className="w-12 h-[1px] bg-zinc-900/20" />
      <p className="text-zinc-600 text-base md:text-lg leading-relaxed tracking-wide">{subheadline}</p>
    </div>
    <div className="aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden">
      <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp" alt="Example" className="w-full h-full object-cover grayscale" />
    </div>
  </div>
);

const LayoutEditorial = ({ headline, subheadline }: { headline: string; subheadline: string }) => (
  <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl my-12">
    <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Background" />
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-zinc-500 mb-8 block">Alex Begopoulos</span>
      <h1 className="font-serif text-5xl md:text-8xl italic text-zinc-900 mb-8 leading-none">{headline}</h1>
      <p className="text-zinc-600 text-sm md:text-base uppercase tracking-[0.3em] max-w-2xl mx-auto">{subheadline}</p>
    </div>
  </div>
);

const LayoutDark = ({ headline, subheadline }: { headline: string; subheadline: string }) => (
  <div className="bg-zinc-900 text-white p-12 md:p-24 rounded-3xl my-12">
    <div className="max-w-2xl">
      <span className="text-[#c5a059] font-sans uppercase tracking-[0.4em] text-[10px] mb-6 block">Premium Wedding Photography</span>
      <h1 className="font-serif italic text-4xl md:text-7xl mb-8 leading-tight">{headline}</h1>
      <p className="text-white/60 text-base md:text-xl font-light leading-relaxed tracking-wide">{subheadline}</p>
    </div>
  </div>
);

export const TestIntros = () => {
  const [view, setView] = useState<'cards' | 'visual'>('cards');
  const [layout, setLayout] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="bg-surface min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-zinc-900">Testseite: Unterseiten-Einstiege</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs md:text-sm mb-12">Varianten für Headlines & Subheadlines</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex bg-zinc-100 p-1 rounded-lg">
              <button 
                onClick={() => setView('cards')}
                className={cn("px-6 py-2 text-[10px] uppercase tracking-widest rounded-md transition-all", view === 'cards' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700")}
              >
                Karten-Ansicht
              </button>
              <button 
                onClick={() => setView('visual')}
                className={cn("px-6 py-2 text-[10px] uppercase tracking-widest rounded-md transition-all", view === 'visual' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700")}
              >
                Visuelle Beispiele
              </button>
            </div>

            {view === 'visual' && (
              <div className="flex bg-zinc-100 p-1 rounded-lg">
                {[1, 2, 3, 4].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setLayout(num as any)}
                    className={cn("px-4 py-2 text-[10px] uppercase tracking-widest rounded-md transition-all", layout === num ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700")}
                  >
                    Layout {num}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-16">
          {["Portfolio", "Über mich", "Leistungen", "FAQ", "Kontakt", "Hannover", "Braunschweig"].map(category => (
            <div key={category} className="mb-24">
              <h2 className="text-2xl font-serif text-zinc-900 border-b border-zinc-200 pb-4 mb-12">{category}</h2>
              
              {view === 'cards' ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {INTROS.filter(intro => intro.category === category).map((intro, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                      <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-4 block">Variante {idx + 1}</span>
                      <h3 className="font-serif italic text-2xl text-zinc-900 mb-4">{intro.headline}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{intro.subheadline}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-32">
                  {INTROS.filter(intro => intro.category === category).slice(0, 5).map((intro, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -top-12 left-0 text-[10px] uppercase tracking-widest text-zinc-300">Beispiel {idx + 1}</div>
                      {layout === 1 && <LayoutMinimal headline={intro.headline} subheadline={intro.subheadline} />}
                      {layout === 2 && <LayoutSplit headline={intro.headline} subheadline={intro.subheadline} />}
                      {layout === 3 && <LayoutEditorial headline={intro.headline} subheadline={intro.subheadline} />}
                      {layout === 4 && <LayoutDark headline={intro.headline} subheadline={intro.subheadline} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
