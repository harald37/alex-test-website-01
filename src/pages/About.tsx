import React from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { Camera, Heart, Star } from "lucide-react";

export const About = () => {
  return (
    <div className="bg-surface pt-40 pb-24">
      <section className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-stone-100 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-serif mb-8 text-stone-900">Über mich</h1>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Hallo, ich bin Alex. Seit über einem Jahrzehnt widme ich mich der Kunst, 
                Momente einzufangen, die sonst im Fluss der Zeit verloren gehen würden.
              </p>
              <p>
                Meine Fotografie ist geprägt von einer tiefen Liebe zum Detail und einem 
                Auge für die subtilen Emotionen. Ich glaube, dass jedes Bild eine 
                Geschichte erzählt – eine Geschichte von Liebe, Freude und menschlicher Verbindung.
              </p>
              <p>
                Wenn ich nicht gerade hinter der Kamera stehe, finde ich Inspiration in der 
                Natur, in alten Filmen und in der Stille eines frühen Morgens.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-stone-50 rounded-2xl">
                <Camera className="w-8 h-8 text-stone-400 mx-auto mb-4" />
                <h4 className="font-serif text-xl mb-1">10+ Jahre</h4>
                <p className="text-sm text-stone-500 uppercase tracking-widest">Erfahrung</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-2xl">
                <Heart className="w-8 h-8 text-stone-400 mx-auto mb-4" />
                <h4 className="font-serif text-xl mb-1">500+</h4>
                <p className="text-sm text-stone-500 uppercase tracking-widest">Shootings</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-2xl">
                <Star className="w-8 h-8 text-stone-400 mx-auto mb-4" />
                <h4 className="font-serif text-xl mb-1">Top Rated</h4>
                <p className="text-sm text-stone-500 uppercase tracking-widest">Service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
