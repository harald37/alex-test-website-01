import React from "react";
import { IMAGES } from "../../constants";
import { motion } from "motion/react";
import { Camera, Heart, ChevronDown } from "lucide-react";

export const NewStyleAbout = () => {
  return (
    <div className="bg-[#f5f2ed] text-[#141414] pt-32 md:pt-48 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl relative z-10 rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src={IMAGES.ABOUT} 
                alt="Alex Begopoulos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border border-[#a0522d]/20 rounded-[3rem] -z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-6 block">Der Mensch hinter der Kamera</span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-12 text-[#141414] leading-[0.9]">Hi, ich bin Alex.</h1>
            <div className="space-y-8 text-[#141414]/70 text-lg md:text-xl leading-relaxed">
              <p>
                Ich bin 32 Jahre alt, leidenschaftlicher Hochzeitsfotograf aus Hannover und es ist für mich jedes Mal aufs Neue das größte Privileg, das Vertrauen von zwei Menschen für ihren wichtigsten Tag zu erhalten.
              </p>
              <p>
                Wenn ich nicht hinter der Kamera stehe, reise ich leidenschaftlich gern, tauche in neue Kulturen ein und lasse mich von ihnen inspirieren. Außerdem schlägt mein Herz für Fußball, Gaming und aktuelle Tech‑Trends.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Style Section - Deep Forest Block */}
        <div className="bg-[#1a2e26] text-white rounded-[4rem] p-8 md:p-24 mb-48 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-6 block">Meine Philosophie</span>
              <h2 className="text-4xl md:text-7xl font-serif italic mb-12 text-white leading-tight">Mein Bildstil</h2>
              <div className="space-y-8 text-white/70 text-lg leading-relaxed">
                <p>
                  Euer Hochzeitstag gehört euch. Ihr sollt lachen, weinen und feiern, ohne ständig an die Kamera denken zu müssen. Deshalb ist mein Stil vor allem eines: authentisch und unaufdringlich.
                </p>
                <p>
                  Ich sehe mich als stiller Beobachter, der die zärtlichen Blicke, die herzhaften Lacher und die ausgelassenen Momente auf der Tanzfläche einfängt, so wie sie passieren.
                </p>
                <p className="italic font-serif text-white text-2xl md:text-3xl border-l-2 border-[#a0522d] pl-8">
                  "Für euch bedeutet das: Ihr werdet vom Hintergrund abgehoben und es entsteht dieser weiche, fast malerische Bildstil."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <img 
                  src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775486330/alex-in-den-bergen-von-oesterreich.webp" 
                  alt="Alex in den Bergen" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl mt-12">
                <img 
                  src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775484706/fotograf-alex-begopoulos-mit-freundin-katharina.webp" 
                  alt="Alex und Katharina" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hobbies / Inspiration Section */}
        <div className="max-w-5xl mx-auto text-center mb-32">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-12 block">Inspiration & Leidenschaft</span>
          <h3 className="text-4xl md:text-6xl font-serif italic mb-12">Was mich antreibt.</h3>
          <p className="text-[#141414]/60 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Wenn ich nicht gerade die Liebe anderer Menschen dokumentiere, findet man mich oft auf Reisen. Das Eintauchen in fremde Kulturen schärft meinen Blick für das Wesentliche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Reisen', 'Fußball', 'Gaming', 'Tech-Trends', 'Kultur', 'Programmierung', 'Design'].map((tag) => (
              <span key={tag} className="px-8 py-4 bg-white border border-[#141414]/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
