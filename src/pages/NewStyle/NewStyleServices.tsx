import React from "react";
import { motion } from "motion/react";
import { IMAGES } from "../../constants";
import { Check, ArrowRight } from "lucide-react";

export const NewStyleServices = () => {
  return (
    <div className="bg-[#f5f2ed] text-[#141414] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-[#1a2e26]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={IMAGES.SERVICES.HERO} 
            alt="Exklusive Hochzeitsfotografie" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e26]/80 to-transparent" />
        </motion.div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white font-serif text-5xl md:text-9xl italic leading-[0.9] mb-8"
          >
            Eure Geschichte<br />in Bildern.
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/60 font-sans uppercase tracking-[0.4em] text-[10px]"
          >
            Leistungen & Exklusive Begleitung
          </motion.h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-12 block">Full Service Begleitung</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-6xl leading-tight mb-12 italic text-[#141414]"
          >
            Handgefertigte Erinnerungen für die Ewigkeit.
          </motion.h2>
          <p className="text-[#141414]/70 text-lg md:text-xl leading-relaxed">
            Als euer Hochzeitsfotograf begleite ich euch auf eurem Weg zum Ja-Wort. Mein Ziel ist es, nicht nur Bilder zu machen, sondern Kunstwerke zu schaffen, die die Emotionen eures Tages konservieren.
          </p>
        </div>
      </section>

      {/* Service 01: Planning - Deep Forest Block */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#1a2e26] text-white rounded-[4rem] mx-4 md:mx-8 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src={IMAGES.SERVICES.PLANNING} 
              alt="Planung & Vorgespräch" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <span className="font-serif text-4xl md:text-6xl italic text-[#a0522d] mb-8 block">01.</span>
            <h3 className="font-serif text-3xl md:text-6xl mb-8 italic text-white leading-tight">Das Kennenlernen & Planung</h3>
            <div className="space-y-8 text-white/70 text-lg leading-relaxed">
              <p>
                Jede großartige Reportage beginnt mit Vertrauen. In einem ausführlichen Vorgespräch besprechen wir eure Wünsche und Visionen.
              </p>
              <p>
                Ich unterstütze euch aktiv bei der Timeline-Planung eures Hochzeitstages, damit wir das schönste Licht für eure Paarfotos nutzen können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Coverage - Beige Block */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:order-2"
          >
            <img 
              src={IMAGES.SERVICES.COVERAGE} 
              alt="Hochzeitsbegleitung" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="lg:order-1">
            <span className="font-serif text-4xl md:text-6xl italic text-[#a0522d] mb-8 block">02.</span>
            <h3 className="font-serif text-3xl md:text-6xl mb-8 italic text-[#141414] leading-tight">Die Hochzeitsbegleitung</h3>
            <div className="space-y-8 text-[#141414]/70 text-lg leading-relaxed">
              <p>
                An eurem Hochzeitstag bin ich der stille Beobachter. Ich agiere diskret im Hintergrund, aber bin immer präsent, wenn der Moment es erfordert.
              </p>
              <p>
                Vom ersten Pinselstrich beim Getting Ready bis zum emotionalen Hochzeitstanz fange ich die echten, ungestellten Emotionen ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included Section - White Rounded Box */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white rounded-[4rem] mx-4 md:mx-8 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] block mb-6">Das Rundum-Sorglos-Paket</span>
            <h2 className="font-serif text-3xl md:text-7xl italic text-[#141414] leading-tight">
              In jeder Begleitung enthalten.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Persönliche Beratung & individueller Zeitplan",
              "Exklusiver Wedding Guide mit Planungstipps",
              "Sorgfältige Selektion & Veredelung aller Bilder",
              "Natürliche Retusche eurer Paarfotos",
              "Erste Highlights innerhalb von 7 Tagen",
              "Passwortgeschützte Online-Galerie",
              "Alle Fotos in voller Auflösung ohne Wasserzeichen",
              "Edles Fine-Art Album als bleibende Erinnerung"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#f5f2ed] flex items-center justify-center text-[#a0522d]">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-[#141414]/70 text-base font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-serif text-4xl md:text-8xl italic text-[#141414] leading-[0.9]">Lasst uns eure Geschichte erzählen.</h2>
          <div className="flex justify-center">
            <button className="bg-[#a0522d] text-white px-12 py-6 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform">
              Jetzt Anfragen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
