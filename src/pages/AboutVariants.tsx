import React from "react";
import { motion } from "motion/react";
import { Camera, Heart, Star, MapPin, Coffee, Globe, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { IMAGES } from "../constants";

const ABOUT_INFO = {
  headline: "Hi, ich bin Alex.",
  subheadline: "Der Mensch hinter der Kamera",
  intro: "Ich bin 32 Jahre alt, leidenschaftlicher Hochzeitsfotograf aus Hannover und es ist für mich jedes Mal aufs Neue das größte Privileg, das Vertrauen von zwei Menschen für ihren wichtigsten Tag zu erhalten.",
  hobbies: "Wenn ich nicht hinter der Kamera stehe, reise ich leidenschaftlich gern, tauche in neue Kulturen ein und lasse mich von ihnen inspirieren. Außerdem schlägt mein Herz für Fußball, Gaming und aktuelle Tech‑Trends.",
  philosophyTitle: "Mein Bildstil",
  philosophySub: "Meine Philosophie",
  philosophy1: "Euer Hochzeitstag gehört euch. Ihr sollt lachen, weinen und feiern, ohne ständig an die Kamera denken zu müssen. Deshalb ist mein Stil vor allem eines: authentisch und unaufdringlich.",
  philosophy2: "Ich sehe mich als stiller Beobachter, der die zärtlichen Blicke, die herzhaften Lacher und die ausgelassenen Momente auf der Tanzfläche einfängt, so wie sie passieren.",
  philosophy3: "Um diesen natürlichen Look zu erreichen, liebe ich es, mit dem vorhandenen Sonnenlicht zu arbeiten. Statt gestellter Posen mit hartem Blitzlicht nutze ich oft eine offene Blende.",
  quote: "\"Für euch bedeutet das: Ihr werdet vom Hintergrund abgehoben und es entsteht dieser weiche, fast malerische Bildstil, der den Fokus voll und ganz auf euch und eure Emotionen legt.\"",
  tags: ['Reisen', 'Fußball', 'Gaming', 'Tech-Trends', 'Kultur', 'Programmierung', 'Design'],
  images: {
    main: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775486330/alex-in-den-bergen-von-oesterreich.webp",
    couple: "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775484706/fotograf-alex-begopoulos-mit-freundin-katharina.webp",
    travel: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    tech: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  }
};

export const AboutVariants = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Über Mich Varianten</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">20 optisch unterschiedliche Konzepte (Teil 1: 1-10)</p>
        </div>

        {/* 1. Classic Split */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">1. Classic Split (Bild Links, Text Rechts)</h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-16 rounded-[3rem] shadow-sm">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="font-sans uppercase tracking-widest text-xs text-zinc-400 mb-4 block">{ABOUT_INFO.subheadline}</span>
              <h3 className="font-serif text-5xl mb-8">{ABOUT_INFO.headline}</h3>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>{ABOUT_INFO.intro}</p>
                <p>{ABOUT_INFO.hobbies}</p>
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-100">
                <h4 className="font-serif text-2xl mb-4">{ABOUT_INFO.philosophyTitle}</h4>
                <p className="text-zinc-600 mb-6">{ABOUT_INFO.philosophy1}</p>
                <p className="font-serif italic text-xl text-zinc-900 border-l-2 border-zinc-900 pl-6">{ABOUT_INFO.quote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Hero Image with Overlay */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">2. Hero Image Overlay</h2>
          <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden min-h-[800px] flex items-end p-8 md:p-16">
            <img src={ABOUT_INFO.images.main} alt="Alex in den Bergen" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="relative z-10 max-w-3xl text-white">
              <span className="font-sans uppercase tracking-widest text-xs text-white/70 mb-4 block">{ABOUT_INFO.subheadline}</span>
              <h3 className="font-serif text-6xl md:text-8xl mb-8">{ABOUT_INFO.headline}</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">{ABOUT_INFO.intro}</p>
              <div className="flex flex-wrap gap-4">
                {ABOUT_INFO.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs uppercase tracking-widest border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bento Grid */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">3. Bento Grid (Kacheln)</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-12 rounded-[2rem] shadow-sm flex flex-col justify-center">
              <h3 className="font-serif text-4xl mb-6">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.intro}</p>
            </div>
            <div className="bg-zinc-900 rounded-[2rem] overflow-hidden aspect-square md:aspect-auto">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm">
              <h4 className="font-serif text-2xl mb-4">Interessen</h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_INFO.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-100 rounded-lg text-xs text-zinc-600">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-white p-12 rounded-[2rem] shadow-sm flex items-center gap-8">
              <div className="w-24 h-24 shrink-0 bg-zinc-100 rounded-full flex items-center justify-center">
                <Camera size={32} className="text-zinc-400" />
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2">{ABOUT_INFO.philosophyTitle}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{ABOUT_INFO.philosophy1}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Timeline Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">4. Timeline (Story-Format)</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-200" />
            
            <div className="relative pl-24 mb-16">
              <div className="absolute left-6 w-5 h-5 bg-zinc-900 rounded-full border-4 border-zinc-50" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Der Mensch</span>
              <h3 className="font-serif text-3xl mb-4">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.intro}</p>
              <img src={ABOUT_INFO.images.main} alt="Alex" className="w-full h-64 object-cover rounded-2xl mt-6" referrerPolicy="no-referrer" />
            </div>
            
            <div className="relative pl-24 mb-16">
              <div className="absolute left-6 w-5 h-5 bg-zinc-900 rounded-full border-4 border-zinc-50" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Die Philosophie</span>
              <h3 className="font-serif text-3xl mb-4">{ABOUT_INFO.philosophyTitle}</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">{ABOUT_INFO.philosophy1}</p>
              <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy2}</p>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-6 w-5 h-5 bg-zinc-900 rounded-full border-4 border-zinc-50" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Die Freizeit</span>
              <h3 className="font-serif text-3xl mb-4">Abseits der Kamera</h3>
              <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.hobbies}</p>
            </div>
          </div>
        </section>

        {/* 5. Magazine Editorial */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">5. Magazine Editorial (Spalten & Drop Cap)</h2>
          <div className="max-w-5xl mx-auto bg-[#fdfbf7] p-12 md:p-20 border border-[#e8e4d9] shadow-sm">
            <h3 className="font-serif text-6xl md:text-8xl text-center mb-16 uppercase tracking-tighter">The Photographer</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-zinc-800 leading-relaxed text-justify">
                  <span className="float-left text-7xl font-serif leading-none pr-3 pt-2">I</span>
                  ch bin 32 Jahre alt, leidenschaftlicher Hochzeitsfotograf aus Hannover und es ist für mich jedes Mal aufs Neue das größte Privileg, das Vertrauen von zwei Menschen für ihren wichtigsten Tag zu erhalten. {ABOUT_INFO.hobbies}
                </p>
                <img src={ABOUT_INFO.images.couple} alt="Alex & Katharina" className="w-full h-64 object-cover mt-8 grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-4 border-b border-zinc-300 pb-2">Die Philosophie</h4>
                <p className="text-zinc-800 leading-relaxed text-justify mb-6">
                  {ABOUT_INFO.philosophy1} {ABOUT_INFO.philosophy2}
                </p>
                <p className="font-serif italic text-xl text-zinc-600 text-center px-8 py-6 border-y border-zinc-300">
                  {ABOUT_INFO.quote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Scattered Polaroids */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">6. Scattered Polaroids</h2>
          <div className="max-w-6xl mx-auto relative min-h-[800px] flex items-center justify-center">
            <div className="absolute top-10 left-10 md:left-20 bg-white p-4 pb-12 shadow-xl rotate-[-6deg] w-64 z-10">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full aspect-square object-cover bg-zinc-100" referrerPolicy="no-referrer" />
              <p className="font-serif italic text-center mt-4 text-zinc-600">Hi, ich bin Alex</p>
            </div>
            <div className="absolute bottom-20 right-10 md:right-20 bg-white p-4 pb-12 shadow-xl rotate-[8deg] w-72 z-20">
              <img src={ABOUT_INFO.images.main} alt="Berge" className="w-full aspect-square object-cover bg-zinc-100" referrerPolicy="no-referrer" />
              <p className="font-serif italic text-center mt-4 text-zinc-600">Reisen & Natur</p>
            </div>
            <div className="absolute top-40 right-40 bg-white p-4 pb-12 shadow-xl rotate-[-3deg] w-56 z-0 hidden lg:block">
              <img src={ABOUT_INFO.images.couple} alt="Katharina" className="w-full aspect-square object-cover bg-zinc-100" referrerPolicy="no-referrer" />
              <p className="font-serif italic text-center mt-4 text-zinc-600">Mit Katharina</p>
            </div>
            
            <div className="relative z-30 bg-white/90 backdrop-blur-md p-12 rounded-[3rem] shadow-2xl max-w-xl text-center border border-white">
              <h3 className="font-serif text-4xl mb-6">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-600 leading-relaxed mb-8">{ABOUT_INFO.intro}</p>
              <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy1}</p>
            </div>
          </div>
        </section>

        {/* 7. Minimalist Centered */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">7. Minimalist Centered (Viel Whitespace)</h2>
          <div className="max-w-3xl mx-auto text-center bg-white p-20 rounded-[4rem] shadow-sm">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-12 shadow-lg">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-sans uppercase tracking-[0.3em] text-xs text-zinc-400 mb-6 block">{ABOUT_INFO.subheadline}</span>
            <h3 className="font-serif text-5xl mb-12">{ABOUT_INFO.headline}</h3>
            <p className="text-xl text-zinc-500 leading-relaxed font-serif italic mb-12 max-w-2xl mx-auto">
              "{ABOUT_INFO.intro}"
            </p>
            <div className="w-12 h-px bg-zinc-300 mx-auto mb-12" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto uppercase tracking-widest">
              {ABOUT_INFO.tags.join(" • ")}
            </p>
          </div>
        </section>

        {/* 8. Dark Mode Elegance */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">8. Dark Mode Elegance</h2>
          <div className="max-w-6xl mx-auto bg-zinc-950 text-white rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <h3 className="font-serif text-5xl italic mb-8 text-zinc-100">{ABOUT_INFO.headline}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 text-lg">{ABOUT_INFO.intro}</p>
                <p className="text-zinc-400 leading-relaxed mb-12 text-lg">{ABOUT_INFO.philosophy1}</p>
                <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</h4>
                    <p className="font-serif text-xl">Hannover</p>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-2">Experience</h4>
                    <p className="font-serif text-xl">100+ Weddings</p>
                  </div>
                </div>
              </div>
              <div className="h-[400px] md:h-auto">
                <img src={ABOUT_INFO.images.main} alt="Alex" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Interactive Hover Reveal */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">9. Interactive Hover Reveal</h2>
          <div className="max-w-4xl mx-auto bg-white p-16 rounded-[3rem] shadow-sm text-center">
            <h3 className="font-serif text-4xl leading-loose">
              Hi, ich bin Alex. Ein leidenschaftlicher <span className="relative inline-block group cursor-pointer border-b-2 border-zinc-900">Hochzeitsfotograf
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 aspect-square rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                  <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </span> aus Hannover. Wenn ich nicht fotografiere, liebe ich das <span className="relative inline-block group cursor-pointer border-b-2 border-zinc-900">Reisen
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 aspect-square rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                  <img src={ABOUT_INFO.images.travel} alt="Travel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </span> und entdecke neue Kulturen. Mein Stil ist <span className="relative inline-block group cursor-pointer border-b-2 border-zinc-900">authentisch
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 aspect-square rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                  <img src={ABOUT_INFO.images.couple} alt="Couple" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </span> und unaufdringlich.
            </h3>
            <p className="mt-12 text-xs text-zinc-400 uppercase tracking-widest">Hover über die unterstrichenen Wörter</p>
          </div>
        </section>

        {/* 10. Horizontal Scroll (Simulated) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">10. Horizontal Cards</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-6">
              
              <div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-white p-12 rounded-[2rem] shadow-sm flex flex-col justify-center min-h-[400px]">
                <span className="text-4xl mb-6">👋</span>
                <h3 className="font-serif text-3xl mb-4">{ABOUT_INFO.headline}</h3>
                <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.intro}</p>
              </div>

              <div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-zinc-900 text-white p-12 rounded-[2rem] shadow-sm flex flex-col justify-center min-h-[400px]">
                <Camera size={40} className="mb-6 text-zinc-500" />
                <h3 className="font-serif text-3xl mb-4">{ABOUT_INFO.philosophyTitle}</h3>
                <p className="text-zinc-400 leading-relaxed">{ABOUT_INFO.philosophy1}</p>
              </div>

              <div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-white p-12 rounded-[2rem] shadow-sm flex flex-col justify-center min-h-[400px]">
                <Globe size={40} className="mb-6 text-zinc-300" />
                <h3 className="font-serif text-3xl mb-4">Abseits der Kamera</h3>
                <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.hobbies}</p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
