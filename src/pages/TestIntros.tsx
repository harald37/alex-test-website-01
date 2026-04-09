import React from 'react';

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
  { category: "Kontakt", headline: "Ich freue mich auf euch.", subheadline: "Lasst uns gemeinsam Erinnerungen schaffen, die ein Leben lang halten." }
];

export const TestIntros = () => {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-zinc-900">Testseite: 50 Unterseiten-Einstiege</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs md:text-sm">Varianten für Headlines & Subheadlines</p>
        </div>

        <div className="space-y-16">
          {["Portfolio", "Über mich", "Leistungen", "FAQ", "Kontakt"].map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-serif text-zinc-900 border-b border-zinc-200 pb-4 mb-8">{category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {INTROS.filter(intro => intro.category === category).map((intro, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                    <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-4 block">Variante {idx + 1}</span>
                    <h3 className="font-serif italic text-2xl text-zinc-900 mb-4">{intro.headline}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{intro.subheadline}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
