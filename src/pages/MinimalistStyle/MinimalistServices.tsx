import React from "react";
import { motion } from "motion/react";
import { IMAGES } from "../../constants";
import { Book, Users, Camera, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { SEO } from "../../components/SEO";
import { SmoothImage } from "../../components/ui/SmoothImage";

export const MinimalistServices = () => {
  return (
    <div className="bg-[#f5f2ed] text-[#141414] overflow-x-hidden">
      <SEO 
        title="Leistungen & Preise | Hochzeitsfotografie | Alex Begopoulos" 
        description="Exklusive Hochzeitsbegleitungen, Paarshootings und After-Wedding-Shootings. Entdeckt meine Leistungen und was in jeder Reportage inklusive ist." 
      />
      {/* Hero Section - Variant 01: Klassisch Zentriert */}
      <section className="pt-48 pb-24 md:pt-64 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans uppercase tracking-[0.5em] text-[10px] text-[#141414]/40 mb-6 block"
          >
            Leistungen
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-serif italic mb-12 leading-[0.9]"
          >
            Euer Tag, meine Begleitung.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#141414]/60 max-w-xl mx-auto leading-relaxed text-lg md:text-xl font-serif italic"
          >
            Vom Getting Ready bis zum Hochzeitstanz – ich halte die Geschichte eures Tages in zeitlosen Bildern fest.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-12 h-[1px] bg-[#141414]/10 mx-auto mt-16"
          />
        </div>
      </section>

      {/* Service 01: Planning */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#1a2e26] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <SmoothImage 
              src={IMAGES.SERVICES.PLANNING} 
              alt="Planung & Vorgespräch" 
              aspectRatio="portrait"
              className="transition-all duration-700 shadow-sm"
            />
          </motion.div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-white/10 mb-4 md:mb-6 block text-center lg:text-left w-full">01.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-white text-center lg:text-left w-full">Das Kennenlernen & Planung</h3>
            <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                Jede großartige Hochzeitsreportage beginnt mit Vertrauen. In einem ausführlichen Vorgespräch – persönlich in Hannover oder per Video-Call – besprechen wir eure Wünsche und Visionen.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Gemeinsam werfen wir einen detaillierten Blick auf euren Tagesablauf. Ich unterstütze euch mit all meiner Erfahrung bei der Timeline-Planung. Mein Ziel ist es, dass ihr euren großen Tag völlig ohne Hektik und Zeitdruck genießen könnt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Coverage */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:order-2"
          >
            <SmoothImage 
              src={IMAGES.SERVICES.COVERAGE} 
              alt="Hochzeitsbegleitung" 
              aspectRatio="portrait"
              className="transition-all duration-700 shadow-sm"
            />
          </motion.div>
          <div className="w-full lg:order-1 flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-[#141414]/10 mb-4 md:mb-6 block text-center lg:text-left w-full">02.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-[#141414] text-center lg:text-left w-full">Die Hochzeitsbegleitung</h3>
            <div className="space-y-4 md:space-y-6 text-[#141414]/70 text-base md:text-lg w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                An eurem Hochzeitstag bin ich der stille Beobachter. Ich agiere diskret im Hintergrund, aber bin immer präsent, wenn der Moment es erfordert. Mein Fokus liegt auf <strong>authentischem Storytelling</strong>.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Von der Vorfreude beim Getting Ready bis zum emotionalen Hochzeitstanz fange ich die echten, ungestellten Emotionen ein. Ich dokumentiere nicht nur was passiert, sondern wie es sich anfühlt. So entstehen lebendige Erinnerungen, die eure Persönlichkeit widerspiegeln.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03: Post-Processing */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#1a2e26] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <SmoothImage 
              src={IMAGES.SERVICES.POST} 
              alt="Nachbearbeitung & Galerie" 
              aspectRatio="portrait"
              className="transition-all duration-700 shadow-sm"
            />
          </motion.div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <span className="font-sans text-4xl md:text-5xl font-extralight text-white/10 mb-4 md:mb-6 block text-center lg:text-left w-full">03.</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 italic text-white text-center lg:text-left w-full">Die Nachbearbeitung & Galerie</h3>
            <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg w-full text-center lg:text-left">
              <p className="max-w-xl mx-auto lg:mx-0">
                Nach der Hochzeit beginnt die sorgfältige Auswahl der Bilder. Jedes einzelne Foto wird von mir persönlich gesichtet und bekommt durch eine professionelle Bearbeitung seinen warmen und zeitlosen Look.
              </p>
              <p className="max-w-xl mx-auto lg:mx-0">
                Ihr erhaltet innerhalb weniger Wochen Zugang zu einer passwortgeschützten Online-Galerie. Dort könnt ihr alle Bilder in voller Auflösung herunterladen und unkompliziert mit euren Liebsten teilen. Eine zeitlose Kollektion, die euch immer wieder in diesen besonderen Tag zurückversetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included in Every Coverage */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#f5f2ed]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl italic text-[#141414] uppercase leading-tight px-4">
              Was in jeder meiner Hochzeitsbegleitungen selbstverständlich inklusive ist
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Persönliche Beratung & individueller Zeitplan für euren Tag",
              "Sorgfältige Selektion & Veredelung aller Bilder mit meinem typischen Bildlook",
              "Passwortgeschützte Online-Galerie für euch und eure Gäste (12 Monate)",
              "Mobile Galerie-App für den schnellen Zugriff von überall",
              "Alle Fotos in voller Auflösung und ohne Wasserzeichen",
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
                <div className="mt-1 flex-shrink-0 w-5 h-5 border border-[#141414] flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-colors duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[#141414]/70 text-sm md:text-base font-light tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="bg-[#1a2e26] py-24 md:py-40 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="font-serif text-4xl md:text-7xl italic uppercase tracking-widest text-white">Weitere Optionen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {[
              { title: "Engagement Shooting", desc: "Ein entspanntes Kennenlernen vor der Kamera vor eurem großen Tag" },
              { title: "Zweitfotograf / Assistenz", desc: "Eine zusätzliche Perspektive für noch mehr eingefangene Details" },
              { title: "After-Wedding-Session", desc: "Stressfreie Paarfotos an eurem Wunschort – ganz ohne Zeitdruck" },
              { title: "Exklusive Print-Produkte", desc: "Von hochwertigen Wandbildern bis hin zu edlen Fotobüchern" },
              { title: "Retusche & KI-Editierung", desc: "Ganz nach euren individuellen Wünschen" },
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
                <p className="text-white/70 text-sm md:text-base italic font-light tracking-wider max-w-[250px] mx-auto">
                  {option.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 md:px-40 bg-[#f5f2ed] text-[#141414] text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-serif text-3xl md:text-7xl italic text-[#141414] leading-tight">Lasst uns eure Geschichte erzählen.</h2>
          <p className="font-sans text-[#141414]/40 uppercase tracking-[0.2em] text-xs md:text-sm">Ich freue mich darauf, euch bei einem ersten Gespräch kennenzulernen.</p>
          <div className="flex justify-center">
            <Button to="/kontakt" variant="forest">
              Jetzt Anfragen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
