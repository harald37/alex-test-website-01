import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Wie weit im Voraus solltet ihr buchen?",
    answer: "Für Hochzeiten empfehle ich eine Buchung 12-18 Monate im Voraus. Porträt-Shootings können meist 4-8 Wochen im Voraus geplant werden."
  },
  {
    question: "Bietest du auch Videoaufnahmen an?",
    answer: "Ja, ich biete sowohl Fotografie als auch cinematische Highlight-Filme an. Diese können einzeln oder als Paket gebucht werden."
  },
  {
    question: "Wie viele Fotos erhalte ich?",
    answer: "Das hängt vom Paket ab. Bei einer ganztägigen Hochzeitsbegleitung sind es in der Regel zwischen 400 und 600 bearbeitete Bilder."
  },
  {
    question: "Sind die Bilder bearbeitet?",
    answer: "Ja, jedes einzelne Bild, das ihr erhaltet, wird von mir persönlich in meinem charakteristischen Stil bearbeitet (Farbe, Kontrast, Belichtung)."
  },
  {
    question: "Was passiert bei schlechtem Wetter?",
    answer: "Bei Porträt-Shootings können wir flexibel verschieben. Bei Hochzeiten nutzen wir die Gegebenheiten vor Ort oder nutzen stilvolle Indoor-Optionen."
  },
  {
    question: "Wie lange dauert das Paarshooting?",
    answer: "Um die Magie und Romantik eurer Liebe bestmöglich einzufangen, empfehle ich das Shooting idealerweise während des Sonnenuntergangs durchzuführen. Das warme, sanfte Licht der 'Golden Hour' verleiht den Fotos eine ganz besondere Atmosphäre und sorgt für eine natürliche, romantische Stimmung. Die genaue Dauer hängt von eurer individuellen Planung ab, aber ich empfehle meistens etwa 45 bis 60 Minuten für das Paarshooting einzuplanen."
  },
  {
    question: "Was passiert, nachdem wir dich angefragt haben?",
    answer: "Zuerst lernen wir uns in einem unverbindlichen Videotelefonat (z.B. per Zoom oder Skype) kennen. Alternativ können wir natürlich auch telefonieren oder uns persönlich treffen. Dabei erkläre ich euch meine Arbeitsweise, wir besprechen eure Visionen und ich beantworte all eure Fragen. Sämtliche Vorgespräche sind für euch kostenfrei und völlig unverbindlich."
  },
  {
    question: "Reist du auch oder begleitest du nur in Niedersachsen?",
    answer: "Egal wo ihr euren besonderen Tag erleben wollt: Ich freue mich darauf, euch begleiten zu dürfen! Außerhalb von Niedersachsen fallen lediglich zusätzliche Anfahrts- und eventuell nötige Übernachtungskosten an. Ich bin für euch deutschlandweit und weltweit buchbar."
  },
  {
    question: "Bietest du auch Drohnenaufnahmen an?",
    answer: "Ja, bei meinen Ganztagsbegleitungen sind Luftaufnahmen immer inklusive. Bitte beachtet jedoch, dass der Drohnenflug stark vom Wetter und den örtlichen Bedingungen (wie z.B. Flugverbotszonen) abhängig ist."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-zinc-800 group-hover:text-zinc-500 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-zinc-400"
        >
          <Plus className="w-6 h-6" strokeWidth={1} />
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
            <p className="pb-8 max-w-3xl text-zinc-600 text-base md:text-lg leading-relaxed">
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
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-zinc-900">Häufig gestellte Fragen</h1>
          <p className="text-zinc-500 tracking-widest uppercase text-xs md:text-sm">Alles, was ihr wissen müsst</p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm">
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
