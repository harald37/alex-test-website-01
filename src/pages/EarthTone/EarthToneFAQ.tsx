import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Wie weit im Voraus sollten wir dich für unsere Hochzeit anfragen?",
    answer: "Am besten meldet ihr euch direkt bei mir, sobald euer Hochzeitsdatum und eure Location feststehen. Besonders für Termine an Samstagen in der Hauptsaison (Mai bis Oktober) bin ich oft schon 9 bis 12 Monate im Voraus ausgebucht."
  },
  {
    question: "Können wir uns vor der festen Buchung persönlich kennenlernen?",
    answer: "Unbedingt! Mir ist es extrem wichtig, dass die Chemie zwischen uns zu 100 % stimmt, da ich euch an eurem intimsten und emotionalsten Tag begleite."
  },
  {
    question: "Begleitest du auch Hochzeiten außerhalb Hannover?",
    answer: "Ja, ich liebe es zu reisen und begleite Hochzeiten in ganz Deutschland und für Destination Weddings sogar weltweit!"
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-[#141414]/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-[#141414] group-hover:text-[#141414]/60 transition-colors italic">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#141414]"
        >
          <Plus size={24} strokeWidth={1.5} />
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
            <div className="pb-8">
              <p className="max-w-3xl text-[#141414]/70 text-lg leading-relaxed whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const EarthToneFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-[#f5f2ed] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[#141414]/40 font-sans uppercase tracking-[0.4em] text-[10px] mb-6 block">Häufige Fragen</span>
          <h1 className="text-4xl md:text-7xl font-serif italic mb-6 text-[#141414]">Alles, was ihr wissen müsst.</h1>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-[#141414]/5">
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
