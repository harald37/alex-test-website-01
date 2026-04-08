import React from 'react';
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

const VariantHeader = ({ id, title, dark = false }: { id: string, title: string, dark?: boolean }) => (
  <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
    <span className="inline-block px-4 py-1 bg-[#c5a059] text-white text-[10px] uppercase tracking-widest rounded mb-4">Variante {id}</span>
    <h3 className={cn("font-sans uppercase tracking-widest text-xs", dark ? "text-zinc-400" : "text-zinc-500")}>{title}</h3>
  </div>
);

export const SEOTest = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto mb-20 text-center px-6">
        <h1 className="font-serif text-4xl md:text-7xl italic mb-6">SEO Hero Varianten</h1>
        <p className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed">
          17 verschiedene Ansätze, um "Hochzeitsfotograf Hannover" SEO-wirksam und optisch ansprechend zu platzieren. Alle Layouts sind für Smartphone und Desktop optimiert.
        </p>
      </div>

      {/* SEO Analyse Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-32">
        <SEOCard title="Die H1-Problematik">
          <p>Für Google ist die <strong>H1-Überschrift</strong> das wichtigste Signal. Wir müssen "Hochzeitsfotograf Hannover" dezent, aber technisch korrekt als H1 integrieren.</p>
        </SEOCard>
        <SEOCard title="Local vs. Global">
          <p>Um Hannover-Kunden zu gewinnen, ohne andere auszuschließen, nutzen wir das <strong>"Hub & Spoke" Modell</strong>: "Basis Hannover, weltweit verfügbar".</p>
        </SEOCard>
        <SEOCard title="Mobile First">
          <p>Über 70% der Brautpaare suchen auf dem Smartphone. Die H1 muss auf kleinen Bildschirmen sofort lesbar sein, ohne dass das Bild komplett verdeckt wird.</p>
        </SEOCard>
      </div>

      {/* Variante 1: Der "Elegante Fokus" */}
      <div className="mb-32">
        <VariantHeader id="1" title="Eleganter Fokus (Split Layout)" />
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-5xl italic leading-tight text-zinc-900">
                Euer Hochzeitsfotograf in Hannover – für Momente, die bleiben.
              </h1>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                Authentische Hochzeitsreportagen in Hannover, Niedersachsen und dort, wo eure Liebe euch hinführt. Ich fange die ungestellten Augenblicke eurer Geschichte ein.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button to="/portfolio">Portfolio</Button>
                <Button to="/contact" variant="outline">Anfragen</Button>
              </div>
            </div>
            <div className="aspect-[4/5] lg:aspect-square bg-zinc-200 rounded-2xl overflow-hidden order-1 lg:order-2">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp" alt="Hochzeitsfotograf Hannover" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>

      {/* Variante 2: Minimalistischer SEO-Hero */}
      <div className="mb-32">
        <VariantHeader id="2" title="Minimalistischer SEO-Hero" />
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900 mx-4 md:mx-6 rounded-3xl">
          <div className="absolute inset-0 z-0">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" className="w-full h-full object-cover opacity-40 grayscale" alt="Hochzeit in Hannover" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] text-2xl md:text-5xl text-white mb-8 font-light leading-tight">
              Hochzeitsfotograf <br/> <span className="text-[#c5a059]">Hannover</span> & Weltweit
            </h1>
            <p className="font-serif italic text-lg md:text-2xl text-white/60 mb-12">
              Zeitlose Hochzeitsreportagen für Paare, die das Echte suchen.
            </p>
            <Button to="/contact" dark>Termin anfragen</Button>
          </div>
        </section>
      </div>

      {/* Variante 3: Editorial Split */}
      <div className="mb-32">
        <VariantHeader id="3" title="Editorial Split" />
        <section className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row h-auto md:h-[80vh]">
            <div className="w-full md:w-1/2 bg-[#1a2e26] text-white p-12 md:p-24 flex flex-col justify-center items-start">
              <span className="font-sans uppercase tracking-widest text-[10px] text-white/50 mb-6">Fine Art Photography</span>
              <h1 className="font-serif text-4xl md:text-6xl italic mb-8 leading-tight">
                Hochzeitsfotograf <br/>aus Hannover.
              </h1>
              <p className="text-white/70 mb-12 max-w-md leading-relaxed text-sm md:text-base">
                Weltweite Reportagen mit einem Fokus auf ungestellte Emotionen und zeitlose Ästhetik.
              </p>
              <Button to="/portfolio" dark className="bg-white text-[#1a2e26] hover:bg-zinc-200">Galerie ansehen</Button>
            </div>
            <div className="w-full md:w-1/2 h-[50vh] md:h-full">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp" className="w-full h-full object-cover" alt="Brautpaar am Maschsee Hannover" />
            </div>
          </div>
        </section>
      </div>

      {/* Variante 4: Cinematic Overlay */}
      <div className="mb-32">
        <VariantHeader id="4" title="Cinematic Overlay (Bottom Left)" />
        <section className="relative h-[80vh] w-full">
          <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495596/braut-steigt-aus-auto-standesamtliche-trauung-uelzen.webp" className="absolute inset-0 w-full h-full object-cover" alt="Standesamtliche Trauung" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
            <div className="max-w-3xl">
              <h1 className="font-sans uppercase tracking-widest text-2xl md:text-4xl text-white mb-4">
                Hochzeitsfotograf Hannover
              </h1>
              <p className="font-serif italic text-xl md:text-3xl text-white/80 mb-8">
                Echte Geschichten. Weltweit erzählt.
              </p>
              <Button to="/contact" dark>Verfügbarkeit prüfen</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Variante 5: Floating Card */}
      <div className="mb-32">
        <VariantHeader id="5" title="Floating Card" />
        <section className="relative h-[90vh] flex items-center justify-center px-4 md:px-6">
          <div className="absolute inset-0 z-0">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495595/braut-richtet-fliege-des-brautigams.webp" className="w-full h-full object-cover" alt="Brautpaar Detail" />
          </div>
          <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 md:p-16 max-w-2xl text-center shadow-2xl rounded-xl">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-500 mb-6 block">Alex Begopoulos</span>
            <h1 className="font-serif text-3xl md:text-5xl italic text-zinc-900 mb-6">
              Euer Hochzeitsfotograf in Hannover
            </h1>
            <p className="text-zinc-600 mb-10 text-sm md:text-base leading-relaxed">
              Ich begleite euch an eurem großen Tag – unauffällig, authentisch und mit dem Blick für die kleinen, echten Momente. In Niedersachsen und europaweit.
            </p>
            <Button to="/portfolio">Portfolio ansehen</Button>
          </div>
        </section>
      </div>

      {/* Variante 6: Minimalist Frame */}
      <div className="mb-32">
        <VariantHeader id="6" title="Minimalist Frame" />
        <section className="max-w-5xl mx-auto px-6 text-center">
          <div className="p-4 md:p-8 bg-white shadow-xl rounded-sm mb-12 inline-block">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495593/brautpaar-paarshooting-im-feld.webp" className="w-full max-w-3xl h-auto object-cover" alt="Paarshooting im Feld" />
          </div>
          <h1 className="font-sans uppercase tracking-[0.3em] text-xl md:text-3xl text-zinc-900 mb-6">
            Hochzeitsfotografie Hannover
          </h1>
          <p className="font-serif italic text-lg md:text-2xl text-zinc-500 max-w-2xl mx-auto">
            Natürliche Reportagen für Paare, die sich an ihrem Hochzeitstag nicht verstellen möchten.
          </p>
        </section>
      </div>

      {/* Variante 7: Typographic Hero */}
      <div className="mb-32">
        <VariantHeader id="7" title="Typographic Hero" />
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] italic leading-[0.9] text-zinc-900 mb-8">
                Hannover <br/>
                <span className="font-sans uppercase tracking-tighter text-4xl md:text-6xl lg:text-[80px] font-bold not-italic text-zinc-200 block mt-4">
                  Hochzeitsfotograf
                </span>
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                Zeitlose Erinnerungen, eingefangen in Niedersachsen und auf der ganzen Welt.
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495592/brautpaar-laueft-fotografen-entgegen-paarshooting-hannover.webp" className="w-full aspect-[3/4] object-cover rounded-t-full" alt="Brautpaar läuft" />
            </div>
          </div>
        </section>
      </div>

      {/* Variante 8: Dark Romance */}
      <div className="mb-32 bg-zinc-950 py-32">
        <VariantHeader id="8" title="Dark Romance" dark />
        <section className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic text-[#c5a059] mb-8">
            Hochzeitsfotograf Hannover
          </h1>
          <p className="font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs text-white/50 mb-16">
            Authentische Reportagen • Europaweit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495590/brautpaar-freie-trauung-hannover.webp" className="w-full aspect-[4/5] object-cover opacity-80" alt="Freie Trauung" />
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495587/braeutigam-tragt-die-braut-am-feldweg.webp" className="w-full aspect-[4/5] object-cover md:-translate-y-8" alt="Bräutigam trägt Braut" />
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495586/braeutigam-schaut-braut-an-freie-trauung-hannover.webp" className="w-full aspect-[4/5] object-cover opacity-80" alt="Bräutigam schaut Braut an" />
          </div>
        </section>
      </div>

      {/* Variante 9: Light & Airy */}
      <div className="mb-32">
        <VariantHeader id="9" title="Light & Airy" />
        <section className="max-w-7xl mx-auto px-6 py-20 text-center bg-white rounded-3xl shadow-sm border border-zinc-100">
          <span className="font-sans uppercase tracking-widest text-xs text-zinc-400 mb-6 block">Alex Begopoulos</span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-800 mb-12">
            Hochzeitsfotograf <span className="italic text-zinc-400">aus</span> Hannover
          </h1>
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden mb-12">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495584/auszug-kapelle-uelzen-empfang-gaeste.webp" className="w-full h-full object-cover" alt="Auszug Kapelle" />
          </div>
          <Button to="/portfolio">Zu den Reportagen</Button>
        </section>
      </div>

      {/* Variante 10: The Storyteller */}
      <div className="mb-32">
        <VariantHeader id="10" title="The Storyteller" />
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h1 className="font-sans uppercase tracking-[0.2em] text-2xl md:text-4xl text-zinc-900 mb-6 leading-tight">
                Hochzeitsfotograf <br/>in Hannover
              </h1>
              <div className="w-12 h-1 bg-[#c5a059] mb-8" />
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Eure Hochzeit ist mehr als nur ein Event. Es ist der Startschuss für euer gemeinsames Leben. Als Hochzeitsfotograf in Hannover habe ich mich darauf spezialisiert, diese einzigartige Geschichte in Bildern zu erzählen.
              </p>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Ohne steifes Posing, dafür mit viel Gefühl für den Moment. Egal ob in der Region Hannover oder als Destination Wedding weltweit.
              </p>
              <Button to="/about" variant="outline">Lerne mich kennen</Button>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495581/sinnliches-portrait-brautpaar-hannover.webp" className="w-full aspect-[4/3] object-cover rounded" alt="Sinnliches Portrait" />
            </div>
          </div>
        </section>
      </div>

      {/* Variante 11: Modern Grid */}
      <div className="mb-32">
        <VariantHeader id="11" title="Modern Grid" />
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center p-8 bg-zinc-100 rounded-2xl text-center md:text-left">
              <h1 className="font-serif italic text-3xl md:text-4xl text-zinc-900 mb-4">
                Hochzeitsfotograf Hannover
              </h1>
              <p className="text-zinc-600 text-sm mb-8">
                Echte Emotionen. Zeitlose Bilder. Weltweit.
              </p>
              <div>
                <Button to="/contact" className="w-full md:w-auto">Anfragen</Button>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 aspect-square rounded-2xl overflow-hidden">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495573/hochzeitstanz-im-eigenen-garten-bei-nacht-hannover.webp" className="w-full h-full object-cover" alt="Hochzeitstanz bei Nacht" />
            </div>
            <div className="col-span-1 md:col-span-1 aspect-square rounded-2xl overflow-hidden">
              <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstorte-hannover.webp" className="w-full h-full object-cover" alt="Hochzeitstorte" />
            </div>
          </div>
        </section>
      </div>

      {/* Variante 12: Classic Centered */}
      <div className="mb-32">
        <VariantHeader id="12" title="Classic Centered" />
        <section className="max-w-4xl mx-auto px-6 text-center">
          <div className="aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495566/detailshot-braut-und-braeutigam-halten-sich-die-haende-hannover.webp" className="w-full h-full object-cover" alt="Hände halten" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl italic text-zinc-900 mb-6">
            Hochzeitsfotograf Hannover
          </h1>
          <p className="font-sans uppercase tracking-[0.2em] text-xs text-zinc-500 mb-10">
            Authentische Reportagen • Deutschland & Weltweit
          </p>
          <Button to="/portfolio">Portfolio ansehen</Button>
        </section>
      </div>

      {/* Variante 13: Asymmetric Balance */}
      <div className="mb-32">
        <VariantHeader id="13" title="Asymmetric Balance" />
        <section className="max-w-7xl mx-auto px-6 relative py-20">
          <div className="w-full md:w-2/3 ml-auto">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp" className="w-full aspect-video md:aspect-[21/9] object-cover rounded-xl" alt="Umarmung im Wald" />
          </div>
          <div className="relative md:absolute top-1/2 md:-translate-y-1/2 left-6 md:left-12 bg-white p-8 md:p-12 shadow-2xl max-w-lg mt-[-50px] md:mt-0 z-10 rounded-xl">
            <h1 className="font-sans uppercase tracking-widest text-2xl md:text-3xl text-zinc-900 mb-4">
              Hochzeitsfotograf Hannover
            </h1>
            <p className="text-zinc-600 mb-8">
              Für Paare, die das Echte lieben. Ich fange eure Geschichte in zeitlosen Bildern ein – in Hannover und überall auf der Welt.
            </p>
            <Button to="/contact">Let's connect</Button>
          </div>
        </section>
      </div>

      {/* Variante 14: Bold Statement */}
      <div className="mb-32">
        <VariantHeader id="14" title="Bold Statement" />
        <section className="bg-zinc-900 text-white py-32 px-6 text-center">
          <h1 className="font-sans font-bold uppercase tracking-tighter text-5xl md:text-8xl lg:text-[120px] leading-none mb-8">
            HOCHZEITS<br/>FOTOGRAF<br/>HANNOVER
          </h1>
          <div className="max-w-2xl mx-auto aspect-video overflow-hidden rounded mb-12">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000" alt="Maschsee Hannover" />
          </div>
          <p className="font-serif italic text-xl md:text-2xl text-white/70">
            Weltweite Reportagen für authentische Paare.
          </p>
        </section>
      </div>

      {/* Variante 15: Elegant Arch */}
      <div className="mb-32">
        <VariantHeader id="15" title="Elegant Arch" />
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic text-zinc-900 mb-4">
            Hochzeitsfotograf Hannover
          </h1>
          <p className="font-sans uppercase tracking-[0.3em] text-[10px] text-zinc-400 mb-16">
            Fine Art Wedding Photography
          </p>
          <div className="w-full max-w-md aspect-[2/3] rounded-t-full overflow-hidden border-8 border-white shadow-xl mb-12">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495581/sinnliches-portrait-brautpaar-hannover.webp" className="w-full h-full object-cover" alt="Sinnliches Portrait" />
          </div>
          <Button to="/portfolio" variant="outline">Entdecke meine Arbeit</Button>
        </section>
      </div>

      {/* Variante 16: Soft Gradient */}
      <div className="mb-32">
        <VariantHeader id="16" title="Soft Gradient" />
        <section className="relative h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" className="w-full h-full object-cover" alt="Regenschirm" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-7xl px-6 text-left">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl md:text-7xl italic text-zinc-900 mb-6">
                Hochzeitsfotograf Hannover
              </h1>
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed mb-10">
                Eure Geschichte, erzählt in ehrlichen und zeitlosen Bildern. In Hannover, Niedersachsen und weltweit.
              </p>
              <Button to="/contact">Jetzt anfragen</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Variante 17: Magazine Cover */}
      <div className="mb-32">
        <VariantHeader id="17" title="Magazine Cover" />
        <section className="max-w-5xl mx-auto px-6 relative py-20">
          <div className="aspect-[3/4] md:aspect-video w-full overflow-hidden">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495590/brautpaar-freie-trauung-hannover.webp" className="w-full h-full object-cover" alt="Freie Trauung" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
            <h1 className="font-serif text-6xl md:text-9xl italic text-white drop-shadow-lg mix-blend-overlay">
              Hannover
            </h1>
            <span className="font-sans uppercase tracking-[0.5em] md:tracking-[1em] text-xs md:text-sm text-white mt-4 drop-shadow-md">
              Hochzeitsfotograf & Weltweit
            </span>
          </div>
          <div className="text-center mt-12">
            <Button to="/portfolio">Portfolio öffnen</Button>
          </div>
        </section>
      </div>

      {/* Variante 18: Night Dance (Requested) */}
      <div className="mb-32">
        <VariantHeader id="18" title="Night Dance (Requested)" />
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 mx-4 md:mx-6 rounded-3xl">
          <div className="absolute inset-0 z-0">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp" className="w-full h-full object-cover opacity-60" alt="Hochzeitstanz bei Nacht mit Kuss" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mt-32 md:mt-48">
            <h1 className="font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] text-2xl md:text-5xl text-white mb-6 font-light leading-tight">
              Hochzeitsfotograf <br/> <span className="text-[#c5a059]">Hannover</span>
            </h1>
            <p className="font-serif italic text-lg md:text-2xl text-white/80 mb-10">
              Magische Momente, die für immer bleiben.
            </p>
            <Button to="/contact" dark className="bg-white text-zinc-950 hover:bg-zinc-200">Eure Geschichte erzählen</Button>
          </div>
        </section>
      </div>

      <div className="max-w-3xl mx-auto text-center px-6 mt-32">
        <h2 className="font-serif text-3xl italic mb-8 text-zinc-900">Fazit zur SEO-Strategie</h2>
        <div className="text-left space-y-6 text-zinc-600">
          <p>
            Alle 17 Varianten lösen das H1-Problem ("Hochzeitsfotograf Hannover" ist technisch korrekt eingebunden), ohne die Ästhetik zu zerstören.
          </p>
          <p>
            <strong>Wichtig für Mobile:</strong> Auf dem Smartphone (unter 768px Breite) passen sich alle Layouts automatisch an. Bilder werden oft quadratisch oder im Hochformat beschnitten, Texte werden zentriert und die Schriftgrößen reduziert, damit der Nutzer nicht scrollen muss, um den Button zu sehen.
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
