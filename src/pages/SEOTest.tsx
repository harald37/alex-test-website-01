import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';

const SEOCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white p-8 border border-zinc-100 rounded-2xl shadow-sm">
    <h3 className="font-sans uppercase tracking-widest text-xs text-[#c5a059] mb-4">{title}</h3>
    <div className="text-zinc-600 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const SEOTest = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto mb-20 text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-6">SEO Strategie Test</h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs max-w-2xl mx-auto leading-relaxed">
          Optimierung der Startseite für "Hochzeitsfotograf Hannover" bei gleichzeitiger Offenheit für weltweite Reportagen.
        </p>
      </div>

      {/* Variante 1: Der "Elegante Fokus" */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-zinc-900 text-white text-[10px] uppercase tracking-widest rounded">Vorschlag A: Eleganter Fokus</div>
            <h2 className="font-serif text-4xl md:text-5xl italic leading-tight text-zinc-900">
              Euer Hochzeitsfotograf in Hannover – für Momente, die bleiben.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Authentische Hochzeitsreportagen in Hannover, Niedersachsen und dort, wo eure Liebe euch hinführt. Ich fange die ungestellten Augenblicke eurer Geschichte ein – zeitlos, ehrlich und voller Gefühl.
            </p>
            <div className="flex space-x-4">
              <Button to="/portfolio">Portfolio</Button>
              <Button to="/contact" variant="outline">Anfragen</Button>
            </div>
          </div>
          <div className="aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden">
            <img src={IMAGES.HERO} alt="Hochzeitsfotograf Hannover" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* SEO Analyse Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-32">
        <SEOCard title="Die H1-Problematik">
          <p>Aktuell fehlt auf der Startseite eine <strong>H1-Überschrift</strong>. Für Google ist das das wichtigste Signal. Wir sollten "Hochzeitsfotograf Hannover" dezent, aber technisch korrekt als H1 integrieren.</p>
          <p><em>Lösung:</em> Den Namen "Alex Begopoulos" als Logo führen und den Keyword-Satz als H1 stylen.</p>
        </SEOCard>
        <SEOCard title="Local vs. Global">
          <p>Um Hannover-Kunden zu gewinnen, ohne andere auszuschließen, nutzen wir das <strong>"Hub & Spoke" Modell</strong>.</p>
          <p>Die Startseite signalisiert "Basis Hannover", während Texte wie "weltweit verfügbar" oder "Destination Weddings" die Reichweite erhöhen.</p>
        </SEOCard>
        <SEOCard title="Semantische Struktur">
          <p>Google liebt Hierarchie. Nach der H1 im Hero brauchen wir H2-Überschriften, die Begriffe wie "Hochzeitsreportage", "Brautpaar-Shooting" und "Region Hannover" natürlich einweben.</p>
        </SEOCard>
      </div>

      {/* Variante 2: Der "Minimalistische Hero" (SEO optimiert) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900 mb-32 mx-6 rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.HERO} className="w-full h-full object-cover opacity-40 grayscale" alt="Hochzeit in Hannover" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-white/40 mb-8 block">Vorschlag B: Minimalistischer SEO-Hero</span>
          <h1 className="font-sans uppercase tracking-[0.3em] text-2xl md:text-5xl text-white mb-12 font-light leading-tight">
            Hochzeitsfotograf <br/> <span className="text-[#c5a059]">Hannover</span> & Weltweit
          </h1>
          <p className="font-serif italic text-lg md:text-2xl text-white/60 mb-12">
            Zeitlose Hochzeitsreportagen für Paare, die das Echte suchen.
          </p>
          <Button to="/contact" dark>Termin anfragen</Button>
        </div>
      </section>

      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="font-serif text-3xl italic mb-8 text-zinc-900">Warum diese Änderungen?</h2>
        <div className="text-left space-y-6 text-zinc-600">
          <p>
            1. <strong>Keyword-Platzierung:</strong> Google gewichtet Text, der "Above the Fold" (ohne Scrollen sichtbar) steht, am höchsten. "Hochzeitsfotograf Hannover" muss hier auftauchen.
          </p>
          <p>
            2. <strong>Nutzer-Intention:</strong> Ein Besucher aus Hannover sieht sofort: "Hier bin ich richtig." Ein Besucher für eine Auslandshochzeit sieht durch den Zusatz "& Weltweit", dass du auch für ihn relevant bist.
          </p>
          <p>
            3. <strong>Abgrenzung zur Landingpage:</strong> Die Hannover-Seite im Footer kann sehr spezifisch auf Locations (Herrenhäuser Gärten, Altes Rathaus etc.) eingehen. Die Startseite bleibt dein "Aushängeschild" mit Fokus auf deine Homebase.
          </p>
        </div>
        <div className="mt-16">
          <Button to="/">Zurück zur Live-Seite</Button>
        </div>
      </div>
    </div>
  );
};

export default SEOTest;
