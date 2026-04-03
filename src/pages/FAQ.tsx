import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Wie weit im Voraus sollte ich buchen?",
    answer: "Für Hochzeiten empfehle ich eine Buchung 12-18 Monate im Voraus. Porträt-Shootings können meist 4-8 Wochen im Voraus geplant werden."
  },
  {
    question: "Bieten Sie auch Videoaufnahmen an?",
    answer: "Ja, ich biete sowohl Fotografie als auch cinematische Highlight-Filme an. Diese können einzeln oder als Paket gebucht werden."
  },
  {
    question: "Wie viele Fotos erhalte ich?",
    answer: "Das hängt vom Paket ab. Bei einer ganztägigen Hochzeitsbegleitung sind es in der Regel zwischen 400 und 600 bearbeitete Bilder."
  },
  {
    question: "Sind die Bilder bearbeitet?",
    answer: "Ja, jedes einzelne Bild, das Sie erhalten, wird von mir persönlich in meinem charakteristischen Stil bearbeitet (Farbe, Kontrast, Belichtung)."
  },
  {
    question: "Was passiert bei schlechtem Wetter?",
    answer: "Bei Porträt-Shootings können wir flexibel verschieben. Bei Hochzeiten nutzen wir die Gegebenheiten vor Ort oder nutzen stilvolle Indoor-Optionen."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-stone-800 group-hover:text-stone-500 transition-colors">
          {question}
        </span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-stone-400" />
        ) : (
          <Plus className="w-6 h-6 text-stone-400" />
        )}
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
            <p className="pb-8 text-stone-600 text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-surface min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif mb-6 text-stone-900">Häufig gestellte Fragen</h1>
          <p className="text-stone-500 tracking-widest uppercase text-sm">Alles, was Sie wissen müssen</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          {FAQ_DATA.map((item, idx) => (
            <AccordionItem
              key={idx}
              {...item}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
