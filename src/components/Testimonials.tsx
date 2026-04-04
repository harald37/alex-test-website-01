import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { IMAGES } from "../constants";

const REVIEWS = [
  {
    text: "Alex hat unsere freie Trauung begleitet und wir haben die wundervollsten Erinnerungen bekommen. Die Emotionen wurden perfekt eingefangen und wir haben uns so wohl gefühlt. Wir würden ihn jedem weiterempfehlen.",
    names: "Lili & Marvin",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uhLYM8ds8F_qVwzSfTs3MxptQtHUhgLHe155JUQISTV5xa6aSdOTbuCZkBYa3AjcU4XwIxVdtBrjPLcAAPIXsJcybqksWhbkG451l6ny2mGnI0QXxoqjqvp9aGCnfc6-GYGMiNIHTBWKeydgLMMG81eFLUC_FjS1X-viIWAP2p4djQFgie4U6zgtfgr85lUaUJI2plhhAFangUff7TOVRfEN1vaIslRskCb2ID7K87CgW-k93PLYQnIP9raCkNCTaI6fJfOdyhb"
  },
  {
    text: "Wir sind absolut begeistert! Alex hat ein unglaubliches Auge für Details und die kleinen, ungestellten Momente. Seine ruhige Art hat uns jegliche Nervosität genommen. Vielen Dank für diese zeitlosen Schätze!",
    names: "Sarah & Jonas",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiODGYtL1aQhIB1pXuFJfpEKL_LIPAm565xB1gEJ3rWJ2_39jpr5jiU3moc2_8aFieVos4xxAGCLsDk4fRnaGTMJqTtcSVeCxLOuIv6u970LtPhO0SBsqoHxjDGYvz_j2Xj-aIWSEupsO92wtSvf0QSbOHGAcmsW4tc3FYVYFU_23D2BgjuCdoClNvNP4DivnI9TPqE6EqYkkiDV9dQUL9behbsASl8IAVScgZpu4S2gl4qpLrRn-SNv9xx6U0hVQDr0MBOf5po"
  },
  {
    text: "Vom ersten Kennenlernen bis zur Galerie war alles perfekt. Alex ist ein fantastischer Fotograf und toller Mensch. Die Bilder strahlen eine Natürlichkeit und Wärme aus, die wir uns genau so gewünscht haben.",
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
          src="https://lh3.googleusercontent.com/aida/ADBb0uhMqZRXXeayKfMYuOc1kkwNW6i3skK9vNdiJWbZPmoti_NmJdYEZwydE1RTQGUjPyDrgPEBxFK8fd3gKV7SMKMkFbrcVqs6k-UMG4dXPc8x7AOM4O3PYImBUqEJZdGPqGxvmZzbttH-55BrwhGZpi5A0ayuUXZfkdRKos7RBhnZGCINcvgg6JBbIENVayBezMF_XBw9DNnRWWHt6fow98els3rT2AG2JTb7-nHJ1Fe2vyuc0JbPAUgPZj4H9k7qzjfuepT9pqWpQg" 
          alt="Testimonial Background" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-12 text-center text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-1 mb-4 md:mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-orange-400/80 text-orange-400/80" />
          ))}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 md:mb-12 text-white/60 font-light"
        >
          Das sagen meine Paare
        </motion.h2>

        <div className="flex items-center justify-center gap-2 md:gap-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="text-white/20 hover:text-white transition-all shrink-0 p-1 md:p-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
          </button>

          <div className="min-h-[140px] flex items-center justify-center flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <p className="text-[15px] md:text-2xl lg:text-3xl leading-relaxed font-light tracking-wide italic text-white/80 max-w-none">
                  "{REVIEWS[currentIndex].text}"
                </p>
                
                <div className="font-signature text-3xl md:text-5xl text-white/90 pt-6 md:pt-8">
                  {REVIEWS[currentIndex].names}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={next}
            className="text-white/20 hover:text-white transition-all shrink-0 p-1 md:p-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
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
