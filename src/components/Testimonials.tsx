import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { IMAGES } from "../constants";

const REVIEWS = [
  {
    text: "Alex hat unsere freie Trauung im Juli begleitet und wir haben die wundervollsten Erinnerungen an unseren perfekten Tag durch ihn bekommen. Die Fotos sind wundervoll, die Emotionen wurden perfekt eingefangen und wir haben uns so wohl gefühlt bei unserem Shooting, obwohl wir beide nicht so gerne vor der Kamera stehen. Die Kommunikation war von Anfang an super und wir haben uns immer gut aufgehoben gefühlt. Wir würden ihn wirklich jedem weiterempfehlen.",
    names: "Lili & Marvin",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uhLYM8ds8F_qVwzSfTs3MxptQtHUhgLHe155JUQISTV5xa6aSdOTbuCZkBYa3AjcU4XwIxVdtBrjPLcAAPIXsJcybqksWhbkG451l6ny2mGnI0QXxoqjqvp9aGCnfc6-GYGMiNIHTBWKeydgLMMG81eFLUC_FjS1X-viIWAP2p4djQFgie4U6zgtfgr85lUaUJI2plhhAFangUff7TOVRfEN1vaIslRskCb2ID7K87CgW-k93PLYQnIP9raCkNCTaI6fJfOdyhb"
  },
  {
    text: "Wir sind absolut begeistert von den Ergebnissen! Alex hat ein unglaubliches Auge für Details und die kleinen, ungestellten Momente, die unseren Tag so besonders gemacht haben. Seine ruhige und professionelle Art hat uns jegliche Nervosität genommen. Der Hochzeitsfilm ist der absolute Wahnsinn – wir schauen ihn uns immer wieder an und fühlen uns direkt in den Moment zurückversetzt. Vielen Dank für diese zeitlosen Schätze!",
    names: "Sarah & Jonas",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiODGYtL1aQhIB1pXuFJfpEKL_LIPAm565xB1gEJ3rWJ2_39jpr5jiU3moc2_8aFieVos4xxAGCLsDk4fRnaGTMJqTtcSVeCxLOuIv6u970LtPhO0SBsqoHxjDGYvz_j2Xj-aIWSEupsO92wtSvf0QSbOHGAcmsW4tc3FYVYFU_23D2BgjuCdoClNvNP4DivnI9TPqE6EqYkkiDV9dQUL9behbsASl8IAVScgZpu4S2gl4qpLrRn-SNv9xx6U0hVQDr0MBOf5po"
  },
  {
    text: "Vom ersten Kennenlernen bis zur Übergabe der Galerie war alles perfekt. Alex ist nicht nur ein fantastischer Fotograf, sondern auch ein toller Mensch, der sich perfekt in unsere Hochzeitsgesellschaft eingefügt hat. Die Bilder strahlen eine Natürlichkeit und Wärme aus, die wir uns genau so gewünscht haben. Besonders die Drohnenaufnahmen unserer Location am See haben uns sprachlos gemacht. Eine klare Empfehlung für alle, die echte Kunst suchen.",
    names: "Elena & Marc",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiJazjLKVh1zAoqW_Qw_EE8btnkybn4g29qnzsrzgk8C03DQu0O4GGOvusC8bRhzHfvKhQeJK7Hd2tH861gtSmAjZ1v3VkJsWTJ2dT2hHL7kkT9hmXTIj272qsyKbG6k4SPgsn5LDny_GyxNmEh5JR0jsqvgZ00GrY0rpX1EtO95Uctm3ICUTANsAQKlti2EWCPn5fIeZSaT0clvkoW6IkYwJFZjht1eW8fCvRArso8DlSYyIRKbTk7A8e9xSp7JsWNzhk34eeO"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="relative h-[70vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* High-Resolution Background from User */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhLYM8ds8F_qVwzSfTs3MxptQtHUhgLHe155JUQISTV5xa6aSdOTbuCZkBYa3AjcU4XwIxVdtBrjPLcAAPIXsJcybqksWhbkG451l6ny2mGnI0QXxoqjqvp9aGCnfc6-GYGMiNIHTBWKeydgLMMG81eFLUC_FjS1X-viIWAP2p4djQFgie4U6zgtfgr85lUaUJI2plhhAFangUff7TOVRfEN1vaIslRskCb2ID7K87CgW-k93PLYQnIP9raCkNCTaI6fJfOdyhb" 
          alt="Testimonial Background" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-1 mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
          ))}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-2xl md:text-4xl mb-8 text-white font-light"
        >
          Das sagen meine Paare...
        </motion.h2>

        <div className="flex items-center justify-center gap-4 md:gap-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="text-white/40 hover:text-white transition-all shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <div className="min-h-[180px] flex items-center justify-center flex-1 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-sm md:text-base leading-relaxed font-light tracking-wide italic text-white/90">
                  "{REVIEWS[currentIndex].text}"
                </p>
                
                <div className="font-signature text-4xl md:text-5xl text-white pt-2">
                  {REVIEWS[currentIndex].names}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={next}
            className="text-white/40 hover:text-white transition-all shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-white w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
