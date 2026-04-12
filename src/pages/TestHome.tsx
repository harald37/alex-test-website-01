import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';

const HOME_VARIANTS = [
  { headline: "Echte Emotionen. Zeitlose Ästhetik.", subheadline: "Authentische Hochzeitsreportagen in Hannover & weltweit", intro: "Ich fange die Momente ein, die euren Tag unvergesslich machen. Ungestellt, ehrlich und mit einem Auge für das besondere Detail." },
  { headline: "Eure Liebesgeschichte in Bildern.", subheadline: "Fine Art Hochzeitsfotografie aus Hannover", intro: "Erinnerungen, die ein Leben lang halten. Ich begleite euch an eurem großen Tag und halte die Magie in zeitlosen Bildern fest." },
  { headline: "Momente für die Ewigkeit.", subheadline: "Emotionale Hochzeitsreportagen & Paarshootings", intro: "Kein steifes Posing, nur echte Gefühle. Lasst uns gemeinsam Bilder erschaffen, die eure Liebe authentisch widerspiegeln." },
  { headline: "Die Kunst des Augenblicks.", subheadline: "Euer Hochzeitsfotograf für Hannover und Umgebung", intro: "Ich bin da, um die kleinen, unsichtbaren Momente sichtbar zu machen. Für eine Hochzeitsreportage, die so einzigartig ist wie ihr." },
  { headline: "Ungestellt. Echt. Zeitlos.", subheadline: "Hochzeitsfotografie mit Fokus auf echte Emotionen", intro: "Euer Hochzeitstag vergeht wie im Flug. Meine Bilder sorgen dafür, dass ihr ihn immer wieder neu erleben könnt." },
  { headline: "Erinnerungen, die bleiben.", subheadline: "Authentische Fotografie für moderne Paare", intro: "Ich liebe es, Geschichten zu erzählen. Eure Geschichte. Mit all den Tränen, dem Lachen und der puren Freude." },
  { headline: "Euer Tag. Eure Geschichte.", subheadline: "Hochzeitsreportagen in Niedersachsen & Europa", intro: "Von den leisen Momenten am Morgen bis zur ausgelassenen Party am Abend – ich halte euren Tag in all seinen Facetten fest." },
  { headline: "Liebe sichtbar machen.", subheadline: "Fine Art Fotografie für unvergessliche Hochzeiten", intro: "Mit einem feinen Gespür für Ästhetik und Emotionen kreiere ich Bilder, die euch auch in vielen Jahren noch berühren werden." },
  { headline: "Natürlich. Elegant. Authentisch.", subheadline: "Euer Fotograf für den schönsten Tag im Leben", intro: "Ich begleite euch als stiller Beobachter und fange die Momente ein, wie sie wirklich passieren – ungestellt und ehrlich." },
  { headline: "Die Magie eurer Liebe.", subheadline: "Hochzeitsfotografie, die berührt", intro: "Jedes Paar hat seine eigene, einzigartige Geschichte. Mein Ziel ist es, diese Geschichte in wunderschönen, zeitlosen Bildern zu erzählen." },
  { headline: "Für immer festgehalten.", subheadline: "Emotionale Reportagen eurer Hochzeit", intro: "Lasst uns gemeinsam Erinnerungen schaffen, die die Zeit überdauern. Mit Bildern, die eure Liebe in jedem Detail zeigen." },
  { headline: "Echte Momente. Wahre Liebe.", subheadline: "Hochzeitsfotograf Hannover & Weltweit", intro: "Ich suche nach dem echten Lachen, den Freudentränen und den kleinen Gesten. Für eine Reportage, die lebt." },
  { headline: "Zeitlose Erinnerungen schaffen.", subheadline: "Fine Art Hochzeitsfotografie mit Herz", intro: "Eure Hochzeit ist ein Meilenstein. Ich sorge dafür, dass ihr diesen Tag durch meine Bilder immer wieder spüren könnt." },
  { headline: "Eure Geschichte, kunstvoll erzählt.", subheadline: "Authentische Hochzeitsreportagen", intro: "Mit Leidenschaft und einem Auge für Ästhetik dokumentiere ich euren großen Tag. Für Bilder, die mehr sagen als tausend Worte." },
  { headline: "Der Fokus liegt auf euch.", subheadline: "Hochzeitsfotografie in Hannover und darüber hinaus", intro: "Kein Stress, kein Posing. Genießt euren Tag in vollen Zügen, während ich die schönsten Momente für euch festhalte." },
  { headline: "Liebe in jedem Detail.", subheadline: "Elegante und emotionale Hochzeitsbilder", intro: "Ich achte auf die kleinen Dinge, die euren Tag so besonders machen. Für eine vollständige und wunderschöne Erinnerung." },
  { headline: "Unvergessliche Augenblicke.", subheadline: "Euer Hochzeitsfotograf für echte Emotionen", intro: "Lasst uns die Magie eures Hochzeitstages einfangen. Mit Bildern, die eure Persönlichkeit und eure Liebe widerspiegeln." },
  { headline: "Natürliche Hochzeitsfotografie.", subheadline: "Für Paare, die das Echte lieben", intro: "Ich fotografiere euch so, wie ihr seid. Authentisch, verliebt und voller Vorfreude auf eure gemeinsame Zukunft." },
  { headline: "Eure Liebe im besten Licht.", subheadline: "Fine Art Reportagen für euren großen Tag", intro: "Mit viel Liebe zum Detail und einem Gespür für den perfekten Moment kreiere ich Bilder, die euch ein Leben lang begleiten." },
  { headline: "Geschichten, die bleiben.", subheadline: "Hochzeitsfotograf aus Leidenschaft", intro: "Eure Hochzeit ist der Beginn eines neuen Kapitels. Ich freue mich darauf, den Anfang dieser Geschichte für euch zu dokumentieren." }
];

const HeroCentered = ({ headline, subheadline, intro }: any) => (
  <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-zinc-900 rounded-3xl overflow-hidden">
    <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Hero" />
    <div className="relative z-10 max-w-3xl">
      <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-white/40 mb-8 block">{subheadline}</span>
      <h1 className="font-serif italic text-4xl md:text-6xl text-white mb-8 leading-tight">{headline}</h1>
      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">{intro}</p>
      <Button to="/portfolio" dark>Portfolio entdecken</Button>
    </div>
  </section>
);

const HeroLeft = ({ headline, subheadline, intro }: any) => (
  <section className="relative h-[80vh] flex flex-col items-start justify-end p-12 md:p-24 bg-zinc-900 rounded-3xl overflow-hidden">
    <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Hero" />
    <div className="relative z-10 max-w-2xl">
      <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#c5a059] mb-6 block">{subheadline}</span>
      <h1 className="font-serif italic text-5xl md:text-7xl text-white mb-8 leading-none">{headline}</h1>
      <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">{intro}</p>
      <div className="flex gap-4">
        <Button to="/portfolio" dark>Portfolio</Button>
        <Button to="/kontakt" variant="outline" className="border-white/20 text-white hover:bg-white/10">Anfragen</Button>
      </div>
    </div>
  </section>
);

const HeroSplit = ({ headline, subheadline, intro }: any) => (
  <section className="grid lg:grid-cols-2 h-auto lg:h-[80vh] bg-white rounded-3xl overflow-hidden shadow-xl">
    <div className="p-12 md:p-24 flex flex-col justify-center items-start">
      <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">{subheadline}</span>
      <h1 className="font-serif italic text-4xl md:text-6xl text-zinc-900 mb-8 leading-tight">{headline}</h1>
      <p className="text-zinc-600 text-base leading-relaxed mb-12">{intro}</p>
      <Button to="/portfolio">Portfolio ansehen</Button>
    </div>
    <div className="h-[50vh] lg:h-full">
      <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp" className="w-full h-full object-cover grayscale" alt="Hero" />
    </div>
  </section>
);

const HeroMinimal = ({ headline, subheadline, intro }: any) => (
  <section className="py-32 px-6 text-center bg-zinc-50 rounded-3xl border border-zinc-100">
    <div className="max-w-4xl mx-auto">
      <span className="font-sans uppercase tracking-[0.8em] text-[10px] text-zinc-300 mb-12 block">{subheadline}</span>
      <h1 className="font-serif italic text-5xl md:text-8xl text-zinc-900 mb-12 leading-none">{headline}</h1>
      <div className="w-12 h-[1px] bg-zinc-900/10 mx-auto mb-12" />
      <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16 italic font-serif">"{intro}"</p>
      <Button to="/kontakt" variant="link">Erzählt mir eure Geschichte</Button>
    </div>
  </section>
);

export const TestHome = () => {
  const [view, setView] = useState<'cards' | 'visual'>('cards');
  const [layout, setLayout] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="bg-surface min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-zinc-900">Testseite: Startseiten-Einstiege</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs md:text-sm mb-12">Varianten für den Hero-Bereich</p>

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

        {view === 'cards' ? (
          <div className="grid md:grid-cols-2 gap-8">
            {HOME_VARIANTS.map((variant, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
                <div>
                  <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-4 block">Variante {idx + 1}</span>
                  <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-800 mb-2 block">{variant.subheadline}</span>
                  <h3 className="font-serif italic text-3xl text-zinc-900 mb-6 leading-tight">{variant.headline}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{variant.intro}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-48">
            {HOME_VARIANTS.slice(0, 10).map((variant, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -top-12 left-0 text-[10px] uppercase tracking-widest text-zinc-300">Beispiel {idx + 1}</div>
                {layout === 1 && <HeroCentered {...variant} />}
                {layout === 2 && <HeroLeft {...variant} />}
                {layout === 3 && <HeroSplit {...variant} />}
                {layout === 4 && <HeroMinimal {...variant} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
