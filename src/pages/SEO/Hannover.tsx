import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Camera, Heart, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { IMAGES, SOCIAL_LINKS } from "../../constants";
import { MinimalistTestimonials } from "../../components/MinimalistTestimonials";
import { HomePortfolioGrid } from "../../components/HomePortfolioGrid";
import { Button } from "../../components/ui/Button";

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-[#141414]/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-sans uppercase tracking-[0.2em] text-xs text-[#141414] group-hover:text-[#141414]/60 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#141414]/40"
        >
          <Plus aria-label="Antwort anzeigen" className="w-5 h-5" strokeWidth={1} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#141414]/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Hannover = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Begleitest du Hochzeiten in ganz Hannover?",
      a: "Ja, ich begleite Hochzeiten im gesamten Stadtgebiet Hannover sowie in der Region (z.B. Garbsen, Langenhagen, Laatzen)."
    },
    {
      q: "Kennst du gute Locations in Hannover?",
      a: "Absolut. Ob Herrenhäuser Gärten, Neues Rathaus oder moderne Industrie-Locations – ich kenne viele schöne Ecken für Paarfotos."
    },
    {
      q: "Wie lange im Voraus sollte man buchen?",
      a: "Für beliebte Samstage in der Hauptsaison empfehle ich eine Buchung 12-18 Monate im Voraus."
    },
    {
      q: "Wie lange dauert das Paarshooting?",
      a: "Für die schönsten Ergebnisse empfehle ich 45-60 Minuten einzuplanen, idealerweise während der Golden Hour bei Sonnenuntergang."
    },
    {
      q: "Reist du auch überregional?",
      a: "Ja, ich begleite euch überall dort, wo ihr eure Liebe feiert – in ganz Deutschland und weltweit."
    },
    {
      q: "Was passiert nach meiner Anfrage?",
      a: "Wir lernen uns unverbindlich kennen (Video-Call oder Telefon), besprechen eure Wünsche und ich erstelle euch ein individuelles Angebot."
    }
  ];

  const includedItems = [
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
  ];

  const options = [
    { title: "Engagement Shooting", desc: "Ein entspanntes Kennenlernen vor der Kamera in Hannover" },
    { title: "Zweitfotograf / Assistenz", desc: "Eine zusätzliche Perspektive für noch mehr eingefangene Details" },
    { title: "After-Wedding-Session", desc: "Stressfreie Paarfotos in Hannover – ganz ohne Zeitdruck nach der Hochzeit" },
    { title: "Exklusive Print-Produkte", desc: "Von hochwertigen Wandbildern bis hin zu edlen Triplex-Aufstellern" },
    { title: "Retusche & KI-Editierung", desc: "Ganz nach den individuellen Wünschen der Kunden" },
    { title: "Physische Sicherung", desc: "Eure gesamte Hochzeitsreportage auf einem hochwertigen USB-Stick" }
  ];

  return (
    <main className="bg-[#f5f2ed] min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 md:pt-64 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-8 block">Region Hannover</span>
          <h1 className="font-serif italic text-5xl md:text-8xl lg:text-9xl text-[#141414] leading-none tracking-tight mb-16">
            Hochzeitsfotograf <br className="hidden md:block" /> Hannover.
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="w-12 h-[1px] bg-[#141414]/10 mb-8 md:mb-0"></div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-[#141414]/80 italic font-serif">
                "Authentische Hochzeitsreportagen in der Landeshauptstadt und Umgebung."
              </p>
              <p className="text-[#141414]/70 text-base md:text-lg leading-relaxed tracking-wide">
                Als euer Hochzeitsfotograf in Hannover begleite ich euch an eurem besonderen Tag. Ob in den Herrenhäuser Gärten, im Neuen Rathaus oder in einer der vielen charmanten Locations in der Region – ich halte eure emotionalsten Momente in zeitlosen Bildern fest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <HomePortfolioGrid />

      {/* Included in Every Coverage */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#141414]/40 block mb-4">Das Rundum-Sorglos-Paket</span>
            <h2 className="font-serif text-3xl md:text-4xl italic text-[#141414] uppercase leading-tight">
              In jeder Ganztagesbegleitung <br className="hidden md:block" /> eurer Hochzeit in Hannover enthalten
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {includedItems.map((item, idx) => (
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

      {/* Weitere Optionen */}
      <section className="bg-[#1a2e26] py-24 md:py-32 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl italic uppercase tracking-widest text-white">Weitere Optionen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {options.map((option, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-3"
              >
                <h4 className="font-serif text-xl md:text-2xl italic text-white">{option.title}</h4>
                <p className="text-white/90 text-sm md:text-base italic font-light tracking-wider max-w-[200px] mx-auto">
                  {option.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Short */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="aspect-[3/4] overflow-hidden rounded-[3rem]">
            <img 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-12">
            <div>
              <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-6 block">Der Fotograf</span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-[#141414] leading-tight mb-8">Hallo, ich bin Alex.</h2>
              <p className="text-[#141414]/70 text-base md:text-lg leading-relaxed tracking-wide mb-8">
                Ich liebe es, echte Emotionen und ungestellte Momente einzufangen. In Hannover und Umgebung bin ich seit Jahren als Hochzeitsfotograf tätig und kenne die schönsten Plätze für eure Geschichte.
              </p>
              <Button to="/about" variant="link">
                Mehr über mich erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <MinimalistTestimonials />

      {/* FAQ Short */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-[#141414]/40 mb-8 block text-center">Häufige Fragen</span>
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#141414] leading-tight mb-16 text-center">Kurz & Knapp für Hannover.</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/faq" variant="link">
              Alle FAQs ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#1a2e26] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-serif italic text-3xl md:text-4xl leading-tight font-medium text-white">
            Bereit für eure Geschichte <br /> in Hannover?
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed tracking-wide max-w-lg mx-auto">
            Schreibt mir eine Nachricht und lasst uns über eure Pläne sprechen. Ich freue mich darauf, euch kennenzulernen.
          </p>
          <div className="flex flex-col items-center gap-12 pt-8">
            <Button to="/contact" variant="white">
              Termin anfragen
            </Button>
            <div className="flex items-center gap-12">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 group">
                <MessageCircle aria-label="WhatsApp Nachricht senden" size={28} strokeWidth={1} />
                <span className="text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
