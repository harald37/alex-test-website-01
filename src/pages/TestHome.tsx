import React from 'react';

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

export const TestHome = () => {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-zinc-900">Testseite: 20 Startseiten-Einstiege</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs md:text-sm">Varianten für den Hero-Bereich der Home-Seite</p>
        </div>

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
      </div>
    </div>
  );
};
