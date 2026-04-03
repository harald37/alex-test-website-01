import React from "react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";
import { Book, Users, Camera, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={IMAGES.SERVICES.HERO} 
            alt="Exklusive Hochzeitsfotografie" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white font-serif text-4xl md:text-8xl italic font-light tracking-tight mb-4"
          >
            Ihre Geschichte in Bildern
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/90 font-sans uppercase tracking-[0.4em] text-sm"
          >
            Leistungen & Exklusive Begleitung
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-stone-400 mb-8 block">Full Service Begleitung</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-6xl leading-tight mb-12 italic text-stone-900"
          >
            Handgefertigte Erinnerungen für die Ewigkeit
          </motion.h2>
          <div className="space-y-8 text-stone-600 font-sans font-light leading-relaxed text-lg">
            <p>
              Als Ihr <strong>Hochzeitsfotograf in Hannover</strong> und ganz <strong>Niedersachsen</strong> begleite ich Sie auf Ihrem Weg zum Ja-Wort. Mein Ziel ist es, nicht nur Bilder zu machen, sondern Kunstwerke zu schaffen, die die Emotionen Ihres Tages konservieren. Ob in der vertrauten Heimat oder als Destination Wedding – ich bin für Sie <strong>weltweit buchbar</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Service 01: Planning */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <img 
              src={IMAGES.SERVICES.PLANNING} 
              alt="Planung & Vorgespräch" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-stone-200 mb-4 md:mb-6 block">01.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-stone-900">Das Kennenlernen & Planung</h3>
            <div className="space-y-4 md:space-y-6 text-stone-600 font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                Jede großartige Reportage beginnt mit Vertrauen. In einem ausführlichen Vorgespräch – persönlich in Hannover oder per Video-Call – besprechen wir Ihre Wünsche und Visionen.
              </p>
              <p>
                Ich unterstütze Sie aktiv bei der <strong>Timeline-Planung</strong> Ihres Hochzeitstages, damit wir das schönste Licht für Ihre Paarfotos nutzen können. Zudem übernehme ich das <strong>Location-Scouting</strong> vorab, um verborgene Juwele für Ihr Shooting zu finden – in der Region Hannover und an jedem anderen Ort der Welt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Coverage */}
      <section className="bg-stone-50 py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6 lg:order-2"
          >
            <img 
              src={IMAGES.SERVICES.COVERAGE} 
              alt="Hochzeitsbegleitung" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="col-span-12 lg:col-span-6 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-stone-200 mb-4 md:mb-6 block">02.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-stone-900">Die Hochzeitsbegleitung</h3>
            <div className="space-y-4 md:space-y-6 text-stone-600 font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                An Ihrem Hochzeitstag bin ich der stille Beobachter. Ich agiere diskret im Hintergrund, aber bin immer präsent, wenn der Moment es erfordert. Mein Fokus liegt auf <strong>authentischem Storytelling</strong>.
              </p>
              <p>
                Vom ersten Pinselstrich beim Getting Ready bis zum emotionalen Hochzeitstanz fange ich die echten, ungestellten Emotionen ein. Ich dokumentiere nicht nur was passiert, sondern wie es sich anfühlt. So entstehen lebendige Erinnerungen, die Ihre Persönlichkeit widerspiegeln.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03: Post-Processing */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <img 
              src={IMAGES.SERVICES.POST} 
              alt="Nachbearbeitung & Galerie" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-stone-200 mb-4 md:mb-6 block">03.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-stone-900">Die Nachbearbeitung & Galerie</h3>
            <div className="space-y-4 md:space-y-6 text-stone-600 font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                Nach dem Fest beginnt die sorgfältige Kuration. Jedes einzelne Foto wird von mir persönlich gesichtet und in meinem unverwechselbaren <strong>Signature Style</strong> veredelt.
              </p>
              <p>
                Sie erhalten innerhalb weniger Wochen Zugang zu einer passwortgeschützten, eleganten <strong>Online-Galerie</strong>. Dort können Sie alle Bilder in voller Auflösung herunterladen und unkompliziert mit Ihren Liebsten teilen. Eine zeitlose Kollektion, die Sie immer wieder in diesen besonderen Tag zurückversetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="bg-stone-50 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-stone-400 block mb-4">Das gewisse Extra</span>
            <h2 className="font-serif text-4xl md:text-6xl italic text-stone-900">Besondere Leistungen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {/* Album */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center"
            >
              <Book className="w-10 h-10 mb-8 text-stone-400 font-light" strokeWidth={1} />
              <h4 className="font-sans uppercase tracking-widest text-sm mb-6 font-medium text-stone-900">Fine Art Alben</h4>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                Handgefertigte Alben aus edlen Materialien. Ein haptisches Erlebnis und ein Erbstück für zukünftige Generationen.
              </p>
            </motion.div>
            {/* Second Shooter */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center"
            >
              <Users className="w-10 h-10 mb-8 text-stone-400 font-light" strokeWidth={1} />
              <h4 className="font-sans uppercase tracking-widest text-sm mb-6 font-medium text-stone-900">Second Shooter</h4>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                Für große Hochzeitsgesellschaften empfehle ich einen zweiten Fotografen, um keinen Moment und keine Perspektive zu verpassen.
              </p>
            </motion.div>
            {/* Engagement */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center"
            >
              <Camera className="w-10 h-10 mb-8 text-stone-400 font-light" strokeWidth={1} />
              <h4 className="font-sans uppercase tracking-widest text-sm mb-6 font-medium text-stone-900">Engagement Shootings</h4>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                Ein entspanntes Shooting vor der Hochzeit, um sich an die Kamera zu gewöhnen und wunderschöne Bilder für Einladungen zu erhalten.
              </p>
            </motion.div>
            {/* Worldwide */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center"
            >
              <Globe className="w-10 h-10 mb-8 text-stone-400 font-light" strokeWidth={1} />
              <h4 className="font-sans uppercase tracking-widest text-sm mb-6 font-medium text-stone-900">Weltweite Reise</h4>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                Ich begleite Sie dorthin, wo Ihre Liebe Sie hinführt. Ob Toskana, Mallorca oder Paris – ich bin dabei.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center border-y border-stone-200 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-7xl italic mb-8 md:mb-12 text-stone-900">Lassen Sie uns Ihre Geschichte erzählen.</h2>
          <p className="font-sans text-stone-500 uppercase tracking-[0.2em] mb-10 md:mb-16 text-xs md:text-sm">Ich freue mich darauf, Sie bei einem ersten Gespräch kennenzulernen.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 bg-stone-900 text-white font-sans uppercase tracking-widest text-[10px] md:text-xs px-12 md:px-16 py-5 md:py-6 hover:bg-stone-800 transition-all duration-300"
          >
            <span>Jetzt Anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
