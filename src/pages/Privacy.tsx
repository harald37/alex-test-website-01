import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface-container-lowest">
      <section className="max-w-3xl mx-auto">
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Rechtliches</span>
        <h1 className="font-serif italic text-5xl md:text-7xl text-zinc-900 leading-none tracking-tight mb-16">Datenschutz</h1>
        
        <div className="space-y-12 text-zinc-600 leading-relaxed tracking-wide">
          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-sans uppercase tracking-[0.1em] text-[10px] text-zinc-900 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-sans uppercase tracking-[0.1em] text-[10px] text-zinc-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <h3 className="font-sans uppercase tracking-[0.1em] text-[10px] text-zinc-900 mt-4 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">3. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">4. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Google Cloud Platform. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
          </div>

          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-900 mb-4">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
