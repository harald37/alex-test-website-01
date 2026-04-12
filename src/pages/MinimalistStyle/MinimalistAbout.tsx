import React from "react";
import { IMAGES } from "../../constants";
import { motion } from "motion/react";
import { Camera, Heart, Star } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { SEO } from "../../components/SEO";
import { SmoothImage } from "../../components/ui/SmoothImage";

export const MinimalistAbout = () => {
  return (
    <div className="bg-[#f5f2ed] text-[#141414] pt-32 md:pt-40 pb-24">
      <SEO 
        title="Über mich | Alex Begopoulos - Euer Hochzeitsfotograf" 
        description="Hi, ich bin Alex! Lernt den Menschen hinter der Kamera kennen. Mein Bildstil, meine Philosophie und warum ich Hochzeiten so sehr liebe." 
      />
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <SmoothImage 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              aspectRatio="portrait"
              className="transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#141414]/10 rounded-2xl -z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/40 mb-4 block">Über mich</h1>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#141414] leading-tight">Hi, ich bin Alex.</h2>
            <div className="space-y-6 text-[#141414]/70 text-base md:text-lg leading-relaxed">
              <p>
                Ich bin 32 Jahre alt, leidenschaftlicher Hochzeitsfotograf aus Hannover und es ist für mich jedes Mal aufs Neue das größte Privileg, das Vertrauen von zwei Menschen für ihren wichtigsten Tag zu erhalten. Denn für mich geht es bei der Hochzeitsfotografie um weit mehr als nur um schöne Posen – es geht um das Einfangen echter, ungestellter Momente. Ich möchte eure Geschichte genau so erzählen, wie sie passiert: mit all dem lauten Lachen, den Freudentränen, der Aufregung und den kleinen, leisen Details dazwischen.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Style Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/40 mb-4 block">Meine Philosophie</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#141414]">Mein Bildstil</h2>
            <div className="space-y-6 text-[#141414]/70 text-base md:text-lg leading-relaxed">
              <p>
                Euer Hochzeitstag gehört euch. Ihr sollt lachen, weinen und feiern, ohne ständig an die Kamera denken zu müssen. Deshalb ist mein Stil vor allem eines: authentisch und unaufdringlich.
              </p>
              <p>
                Ich sehe mich als stiller Beobachter, der die zärtlichen Blicke, die herzhaften Lacher und die ausgelassenen Momente auf der Tanzfläche einfängt, so wie sie passieren.
              </p>
              <p>
                Um diesen natürlichen Look zu erreichen, liebe ich es, mit dem vorhandenen Sonnenlicht zu arbeiten. Statt gestellter Posen mit hartem Blitzlicht nutze ich oft eine offene Blende.
              </p>
              <p className="italic font-serif text-[#141414] text-xl">
                "Für euch bedeutet das: Ihr werdet vom Hintergrund abgehoben und es entsteht dieser weiche, fast malerische Bildstil, der den Fokus voll und ganz auf euch und eure Emotionen legt."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-4"
          >
            <SmoothImage 
              src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775486330/alex-in-den-bergen-von-oesterreich.webp" 
              alt="Alex in den Bergen" 
              aspectRatio="portrait"
              containerClassName="rounded-2xl"
            />
            <SmoothImage 
              src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775484706/fotograf-alex-begopoulos-mit-freundin-katharina.webp" 
              alt="Alex und Katharina" 
              aspectRatio="portrait"
              containerClassName="rounded-2xl mt-12"
            />
          </motion.div>
        </div>

        {/* Hobbies / Inspiration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a2e26] rounded-[2rem] p-8 md:p-20 text-white overflow-hidden relative"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-serif mb-6 text-white">Inspiration & Leidenschaft</h3>
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                Wenn ich nicht gerade die Liebe anderer Menschen dokumentiere, findet man mich oft auf Reisen. Das Eintauchen in fremde Kulturen schärft meinen Blick für das Wesentliche und lässt mich die Welt immer wieder neu entdecken.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Reisen', 'Fußball', 'Gaming', 'Tech-Trends', 'Kultur', 'Programmierung', 'Design'].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SmoothImage 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" 
                alt="Travel" 
                aspectRatio="square"
                containerClassName="rounded-xl opacity-60 hover:opacity-100 transition-opacity"
              />
              <SmoothImage 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
                alt="Tech" 
                aspectRatio="square"
                containerClassName="rounded-xl opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Call to Action */}
        <section className="mt-48 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="w-12 h-[1px] bg-[#141414]/10 mx-auto"></div>
            <h2 className="font-serif italic text-3xl md:text-5xl text-[#141414] leading-relaxed">
              Bereit für eure Geschichte?
            </h2>
            <p className="text-[#141414]/60 text-lg md:text-xl font-serif italic">
              Ich freue mich darauf, euch kennenzulernen und eure besonderen Momente festzuhalten.
            </p>
            <div className="flex justify-center pt-4">
              <Button to="/kontakt" variant="forest">
                Schreibt mir eine Nachricht
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
