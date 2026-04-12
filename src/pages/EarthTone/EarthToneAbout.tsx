import React from "react";
import { IMAGES } from "../../constants";
import { motion } from "motion/react";

export const EarthToneAbout = () => {
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
            <div className="absolute -bottom-8 -left-8 w-full h-full border border-[#141414]/10 rounded-[3rem] -z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-6 block">Über mich</h1>
            <h2 className="text-5xl md:text-8xl font-serif italic mb-12 text-[#141414] leading-[0.9]">Hi, ich bin Alex.</h2>
            <div className="space-y-8 text-[#141414]/70 text-lg md:text-xl leading-relaxed">
              <p>
                Ich bin 32 Jahre alt, leidenschaftlicher Hochzeitsfotograf aus Hannover und es ist für mich jedes Mal aufs Neue das größte Privileg, das Vertrauen von zwei Menschen für ihren wichtigsten Tag zu erhalten.
              </p>
              <p>
                Wenn ich nicht hinter der Kamera stehe, reise ich leidenschaftlich gern, tauche in neue Kulturen ein und lasse mich von ihnen inspirieren.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Style Section - Deep Brown Block */}
        <div className="bg-[#2d1e17] text-white rounded-[4rem] p-8 md:p-24 mb-48 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/40 mb-6 block">Meine Philosophie</span>
              <h2 className="text-4xl md:text-7xl font-serif italic mb-12 text-white leading-tight">Mein Bildstil</h2>
              <div className="space-y-8 text-white/70 text-lg leading-relaxed">
                <p>
                  Euer Hochzeitstag gehört euch. Ihr sollt lachen, weinen und feiern, ohne ständig an die Kamera denken zu müssen. Deshalb ist mein Stil vor allem eines: authentisch und unaufdringlich.
                </p>
                <p className="italic font-serif text-white text-2xl md:text-3xl border-l-2 border-white/20 pl-8">
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
      </section>
    </div>
  );
};
