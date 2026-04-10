import React from "react";
import { motion } from "motion/react";
import { Camera, Heart, Star, MapPin, Coffee, Globe, ArrowRight, Quote } from "lucide-react";
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

export const AboutVariantsMore = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Über Mich Varianten (Teil 2)</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">10 weitere Konzepte (Varianten 11-20)</p>
        </div>

        {/* 11. Brutalist Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">11. Brutalist (Auffällig & Kantig)</h2>
          <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-sans font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">Alex<br/>Begopoulos</h3>
            <div className="grid md:grid-cols-2 gap-8 border-t-4 border-black pt-8">
              <div className="font-mono text-sm leading-relaxed border-l-4 border-black pl-4">
                <p className="mb-4 font-bold uppercase">Status: Online</p>
                <p>{ABOUT_INFO.intro}</p>
              </div>
              <div className="font-mono text-sm leading-relaxed border-l-4 border-black pl-4">
                <p className="mb-4 font-bold uppercase">System: Style</p>
                <p>{ABOUT_INFO.philosophy1}</p>
              </div>
            </div>
            <div className="mt-12 border-4 border-black p-4 bg-yellow-400 font-bold uppercase text-center tracking-widest">
              {ABOUT_INFO.tags.join(" // ")}
            </div>
          </div>
        </section>

        {/* 12. Split Screen Sticky */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">12. Split Screen Sticky</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="sticky top-32 h-[600px] rounded-[2rem] overflow-hidden shadow-xl hidden md:block">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-12 bg-white p-10 rounded-[2rem] shadow-sm">
              <div>
                <h3 className="font-serif text-4xl mb-6">{ABOUT_INFO.headline}</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.intro}</p>
              </div>
              <div className="w-12 h-px bg-zinc-200" />
              <div>
                <h3 className="font-serif text-3xl mb-6">{ABOUT_INFO.philosophyTitle}</h3>
                <p className="text-zinc-600 leading-relaxed mb-4">{ABOUT_INFO.philosophy1}</p>
                <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy2}</p>
              </div>
              <div className="w-12 h-px bg-zinc-200" />
              <div>
                <h3 className="font-serif text-3xl mb-6">Freizeit</h3>
                <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.hobbies}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Terminal / Code Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">13. Terminal / JSON Object</h2>
          <div className="max-w-3xl mx-auto bg-zinc-950 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 font-mono text-sm">
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-zinc-500">alex.json</span>
            </div>
            <div className="p-8 text-zinc-300 overflow-x-auto">
              <pre><code>{`{
  "name": "Alex Begopoulos",
  "age": 32,
  "role": "Hochzeitsfotograf",
  "location": "Hannover",
  "style": [
    "authentisch",
    "unaufdringlich",
    "natürliches Licht"
  ],
  "hobbies": [
    "Reisen",
    "Fußball",
    "Gaming",
    "Tech-Trends"
  ],
  "mission": "${ABOUT_INFO.intro.substring(0, 50)}..."
}`}</code></pre>
            </div>
          </div>
        </section>

        {/* 14. Scrapbook Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">14. Scrapbook (Collage)</h2>
          <div className="max-w-5xl mx-auto bg-[#f4ecd8] p-12 md:p-20 shadow-md border border-[#dcd0b8] relative min-h-[800px]">
            {/* Tape pieces */}
            <div className="absolute top-8 left-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm -rotate-2 z-20 shadow-sm" />
            <div className="absolute top-40 right-20 w-24 h-6 bg-white/40 backdrop-blur-sm rotate-3 z-20 shadow-sm" />
            
            <div className="absolute top-12 left-12 md:left-32 w-64 md:w-80 bg-white p-4 pb-12 shadow-xl -rotate-3 z-10">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full aspect-square object-cover sepia-[0.2]" referrerPolicy="no-referrer" />
              <p className="font-serif italic text-2xl text-center mt-4 text-zinc-800">Hi, ich bin Alex!</p>
            </div>

            <div className="absolute top-64 right-12 md:right-32 w-64 md:w-80 bg-white p-6 shadow-xl rotate-2 z-10">
              <h3 className="font-serif text-2xl mb-4 border-b border-zinc-200 pb-2">Meine Philosophie</h3>
              <p className="font-serif text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy1}</p>
            </div>

            <div className="absolute bottom-20 left-20 md:left-40 w-72 bg-white p-6 shadow-xl -rotate-1 z-10">
              <h3 className="font-serif text-2xl mb-4 border-b border-zinc-200 pb-2">Freizeit</h3>
              <p className="font-serif text-zinc-600 leading-relaxed">{ABOUT_INFO.hobbies}</p>
            </div>
          </div>
        </section>

        {/* 15. Number Callouts */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">15. Number Callouts (Statistiken)</h2>
          <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-sm">
            <div className="text-center mb-16">
              <h3 className="font-serif text-4xl mb-4">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-500 max-w-2xl mx-auto">{ABOUT_INFO.intro}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-zinc-100 py-12 mb-16">
              <div>
                <div className="font-serif text-5xl md:text-6xl mb-2">32</div>
                <div className="text-xs uppercase tracking-widest text-zinc-400">Jahre alt</div>
              </div>
              <div>
                <div className="font-serif text-5xl md:text-6xl mb-2">100+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-400">Hochzeiten</div>
              </div>
              <div>
                <div className="font-serif text-5xl md:text-6xl mb-2">1</div>
                <div className="text-xs uppercase tracking-widest text-zinc-400">Leidenschaft</div>
              </div>
              <div>
                <div className="font-serif text-5xl md:text-6xl mb-2">∞</div>
                <div className="text-xs uppercase tracking-widest text-zinc-400">Erinnerungen</div>
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <Quote className="mx-auto mb-6 text-zinc-300" size={40} />
              <p className="font-serif italic text-2xl text-zinc-800 leading-relaxed">{ABOUT_INFO.quote}</p>
            </div>
          </div>
        </section>

        {/* 16. Q&A Interview Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">16. Q&A Interview Style</h2>
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm">
            <h3 className="font-serif text-4xl mb-12 text-center border-b border-zinc-100 pb-8">Interview mit Alex</h3>
            <div className="space-y-10">
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-zinc-900 mb-3">Wer bist du und was machst du?</h4>
                <p className="font-serif text-lg text-zinc-600 leading-relaxed">{ABOUT_INFO.intro}</p>
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-zinc-900 mb-3">Wie würdest du deinen Bildstil beschreiben?</h4>
                <p className="font-serif text-lg text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy1} {ABOUT_INFO.philosophy3}</p>
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-zinc-900 mb-3">Was machst du, wenn du nicht fotografierst?</h4>
                <p className="font-serif text-lg text-zinc-600 leading-relaxed">{ABOUT_INFO.hobbies}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 17. Parallax Layers (Simulated) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">17. Layered Images</h2>
          <div className="max-w-5xl mx-auto relative h-[700px] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-0 opacity-50">
              <img src={ABOUT_INFO.images.travel} alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-10 opacity-80">
              <img src={ABOUT_INFO.images.couple} alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-20 bg-white/90 backdrop-blur-xl p-12 rounded-[3rem] shadow-xl max-w-xl text-center border border-white/50">
              <h3 className="font-serif text-5xl mb-6">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.intro}</p>
            </div>
          </div>
        </section>

        {/* 18. Dynamic Image Grid */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">18. Dynamic Image Grid</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 bg-zinc-900 text-white p-12 rounded-3xl flex flex-col justify-center min-h-[400px]">
              <h3 className="font-serif text-5xl mb-6">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">{ABOUT_INFO.intro}</p>
            </div>
            <div className="col-span-6 md:col-span-4 rounded-3xl overflow-hidden min-h-[400px]">
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-6 md:col-span-4 rounded-3xl overflow-hidden min-h-[300px]">
              <img src={ABOUT_INFO.images.travel} alt="Travel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-12 md:col-span-8 bg-white p-12 rounded-3xl shadow-sm flex flex-col justify-center min-h-[300px]">
              <h4 className="font-serif text-2xl mb-4">{ABOUT_INFO.philosophyTitle}</h4>
              <p className="text-zinc-600 leading-relaxed">{ABOUT_INFO.philosophy1}</p>
            </div>
          </div>
        </section>

        {/* 19. Floating Elements */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">19. Floating Elements (Soft)</h2>
          <div className="max-w-5xl mx-auto bg-zinc-100 rounded-[4rem] p-20 relative overflow-hidden min-h-[600px] flex items-center justify-center text-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 w-32 h-32 rounded-full overflow-hidden shadow-xl"
            >
              <img src={IMAGES.ABOUT} alt="Alex" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-20 w-40 h-40 rounded-full overflow-hidden shadow-xl"
            >
              <img src={ABOUT_INFO.images.couple} alt="Couple" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="font-serif text-5xl mb-8">{ABOUT_INFO.headline}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">{ABOUT_INFO.intro}</p>
              <button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                Lerne mich kennen
              </button>
            </div>
          </div>
        </section>

        {/* 20. Storybook Chapters */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">20. Storybook Chapters</h2>
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-r-3xl border-l-8 border-zinc-900 overflow-hidden">
            <div className="p-12 md:p-20">
              <div className="mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Kapitel 1</span>
                <h3 className="font-serif text-4xl mb-6 border-b border-zinc-100 pb-4">Der Mensch</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.intro}</p>
              </div>
              <div className="mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Kapitel 2</span>
                <h3 className="font-serif text-4xl mb-6 border-b border-zinc-100 pb-4">Die Philosophie</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.philosophy1} {ABOUT_INFO.philosophy2}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Kapitel 3</span>
                <h3 className="font-serif text-4xl mb-6 border-b border-zinc-100 pb-4">Abseits der Kamera</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">{ABOUT_INFO.hobbies}</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
