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
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-zinc-400 mb-8 block">Full Service Begleitung</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-6xl leading-tight mb-12 italic text-zinc-900"
          >
            Handgefertigte Erinnerungen für die Ewigkeit
          </motion.h2>
          <div className="space-y-8 text-zinc-600">
            <p>
              Als Ihr <strong>Hochzeitsfotograf in Hannover</strong> und ganz <strong>Niedersachsen</strong> begleite ich Sie auf Ihrem Weg zum Ja-Wort. Mein Ziel ist es, nicht nur Bilder zu machen, sondern Kunstwerke zu schaffen, die die Emotionen Ihres Tages konservieren. Ob in der vertrauten Heimat oder als Destination Wedding – ich bin für Sie <strong>weltweit buchbar</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Service 01: Planning */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src={IMAGES.SERVICES.PLANNING} 
              alt="Planung & Vorgespräch" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-zinc-200 mb-4 md:mb-6 block text-center lg:text-left w-full">01.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-zinc-900 text-center lg:text-left w-full">Das Kennenlernen & Planung</h3>
            <div className="space-y-4 md:space-y-6 text-zinc-600 w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                Jede großartige Reportage beginnt mit Vertrauen. In einem ausführlichen Vorgespräch – persönlich in Hannover oder per Video-Call – besprechen wir Ihre Wünsche und Visionen.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Ich unterstütze Sie aktiv bei der <strong>Timeline-Planung</strong> Ihres Hochzeitstages, damit wir das schönste Licht für Ihre Paarfotos nutzen können. Zudem übernehme ich das <strong>Location-Scouting</strong> vorab, um verborgene Juwele für Ihr Shooting zu finden – in der Region Hannover und an jedem anderen Ort der Welt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Coverage */}
      <section className="bg-zinc-50 py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:order-2"
          >
            <img 
              src={IMAGES.SERVICES.COVERAGE} 
              alt="Hochzeitsbegleitung" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="w-full lg:order-1 flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-zinc-200 mb-4 md:mb-6 block text-center lg:text-left w-full">02.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-zinc-900 text-center lg:text-left w-full">Die Hochzeitsbegleitung</h3>
            <div className="space-y-4 md:space-y-6 text-zinc-600 w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                An Ihrem Hochzeitstag bin ich der stille Beobachter. Ich agiere diskret im Hintergrund, aber bin immer präsent, wenn der Moment es erfordert. Mein Fokus liegt auf <strong>authentischem Storytelling</strong>.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Vom ersten Pinselstrich beim Getting Ready bis zum emotionalen Hochzeitstanz fange ich die echten, ungestellten Emotionen ein. Ich dokumentiere nicht nur was passiert, sondern wie es sich anfühlt. So entstehen lebendige Erinnerungen, die Ihre Persönlichkeit widerspiegeln.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03: Post-Processing */}
      <section className="py-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src={IMAGES.SERVICES.POST} 
              alt="Nachbearbeitung & Galerie" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-zinc-200 mb-4 md:mb-6 block text-center lg:text-left w-full">03.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-zinc-900 text-center lg:text-left w-full">Die Nachbearbeitung & Galerie</h3>
            <div className="space-y-4 md:space-y-6 text-zinc-600 w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                Nach dem Fest beginnt die sorgfältige Kuration. Jedes einzelne Foto wird von mir persönlich gesichtet und in meinem unverwechselbaren <strong>Signature Style</strong> veredelt.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Sie erhalten innerhalb weniger Wochen Zugang zu einer passwortgeschützten, eleganten <strong>Online-Galerie</strong>. Dort können Sie alle Bilder in voller Auflösung herunterladen und unkompliziert mit Ihren Liebsten teilen. Eine zeitlose Kollektion, die Sie immer wieder in diesen besonderen Tag zurückversetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included in Every Coverage */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-zinc-400 block mb-4">Das Rundum-Sorglos-Paket</span>
            <h2 className="font-serif text-4xl md:text-6xl italic text-zinc-900 uppercase leading-tight">
              In jeder Ganztagesbegleitung <br className="hidden md:block" /> eurer Hochzeit enthalten
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Persönliche Beratung & individueller Zeitplan für euren Tag",
              "Exklusiver Wedding Guide mit wertvollen Planungstipps",
              "Sorgfältige Selektion & Veredelung aller Bilder in meinem Signature-Look",
              "Natürliche Retusche eurer Paarfotos für ein perfektes Ergebnis",
              "Erste Highlights bereits innerhalb von 7 Tagen (Preview)",
              "Passwortgeschützte Online-Galerie für euch und eure Gäste (12 Monate)",
              "Mobile Galerie-App für den schnellen Zugriff von überall",
              "Alle Fotos in voller Auflösung und ohne Wasserzeichen",
              "Integrierter Online-Shop für hochwertige Abzüge und Wandbilder",
              "Edles Fine-Art Album (20x20 cm) als bleibende Erinnerung",
              "Drohnenaufnahmen für einzigartige Perspektiven (wetterabhängig)",
              "Kontinuierliche Unterstützung und Beratung während der gesamten Planung"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 flex-shrink-0 w-5 h-5 border border-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-zinc-600 text-sm md:text-base font-light tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="bg-[#2D332F] py-24 md:py-40 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="font-serif text-4xl md:text-7xl italic uppercase tracking-widest text-white">Weitere Optionen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {[
              { title: "Engagement Shooting", desc: "Ein entspanntes Kennenlernen vor der Kamera vor eurem großen Tag" },
              { title: "Zweitfotograf / Assistenz", desc: "Eine zusätzliche Perspektive für noch mehr eingefangene Details" },
              { title: "After-Wedding-Session", desc: "Stressfreie Paarfotos an eurem Wunschort – ganz ohne Zeitdruck" },
              { title: "Exklusive Print-Produkte", desc: "Von hochwertigen Wandbildern bis hin zu edlen Triplex-Aufstellern" },
              { title: "Retusche & KI-Editierung", desc: "Ganz nach den individuellen Wünschen der Kunden" },
              { title: "Physische Sicherung", desc: "Eure gesamte Hochzeitsreportage auf einem hochwertigen USB-Stick" }
            ].map((option, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4"
              >
                <h4 className="font-serif text-2xl md:text-3xl italic text-white">{option.title}</h4>
                <p className="text-white/70 text-sm italic font-light tracking-wider max-w-[250px] mx-auto">
                  {option.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center border-y border-zinc-200 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-7xl italic mb-8 md:mb-12 text-zinc-900">Lassen Sie uns Ihre Geschichte erzählen.</h2>
          <p className="font-sans text-zinc-500 uppercase tracking-[0.2em] mb-10 md:mb-16 text-xs md:text-sm">Ich freue mich darauf, Sie bei einem ersten Gespräch kennenzulernen.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 bg-zinc-900 text-white font-sans uppercase tracking-widest text-[10px] md:text-xs px-12 md:px-16 py-5 md:py-6 hover:bg-zinc-800 transition-all duration-300"
          >
            <span>Jetzt Anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
