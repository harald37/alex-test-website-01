import React from 'react';

export const Imprint: React.FC = () => {
  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface-container-lowest">
      <section className="max-w-3xl mx-auto">
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Rechtliches</span>
        <h1 className="font-serif italic text-5xl md:text-7xl text-zinc-900 leading-none tracking-tight mb-16">Impressum</h1>
        
        <div className="space-y-12 text-zinc-600 text-base md:text-lg leading-relaxed tracking-wide">
          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              ALEX BEGOPOULOS | Hochzeitsfotograf Hannover<br /><br />
              Alexandros Begopoulos<br />
              Engelsburg 2<br />
              30629 Hannover
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">Kontakt</h2>
            <p>
              Telefon: 015165264449<br />
              E-Mail: info@hochzeitsfotograf-alex.de
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE355173603<br />
              Handwerkskammer Hannover: Betriebs-Nr.: 0336048
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">Redaktionell verantwortlich</h2>
            <p>
              Alexandros Begopoulos<br />
              Engelsburg 2<br />
              30629 Hannover
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline underline-offset-4 ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-900/5">
            <p className="text-xs text-zinc-400">
              Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors underline underline-offset-4">https://www.e-recht24.de/impressum-generator.html</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
