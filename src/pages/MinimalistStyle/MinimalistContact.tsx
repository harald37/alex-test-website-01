import React from "react";
import { motion } from "motion/react";
import { Mail, Instagram, MapPin, Send } from "lucide-react";

export const MinimalistContact = () => {
  return (
    <div className="bg-[#f5f2ed] text-[#141414] min-h-screen pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Kontakt</span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-12 text-[#141414] leading-[0.9]">Sagt Hallo.</h1>
            <p className="mb-16 text-[#141414]/60 text-lg md:text-xl leading-relaxed max-w-md">
              Ich freue mich darauf, von euch zu hören. Füllt einfach das Formular aus oder kontaktiert mich direkt.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-all">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Email</h4>
                  <span className="text-xl md:text-2xl font-serif italic">hallo@alexbegopoulos.de</span>
                </div>
              </div>
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-all">
                  <Instagram size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Instagram</h4>
                  <span className="text-xl md:text-2xl font-serif italic">@alexbegopoulos</span>
                </div>
              </div>
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-all">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Standort</h4>
                  <span className="text-xl md:text-2xl font-serif italic">Hannover, Deutschland</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-[#141414]/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">Eure Namen</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" placeholder="Anna & Lukas" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">E-Mail Adresse</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" placeholder="hello@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">Eure Nachricht</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors resize-none" placeholder="Erzählt mir von euren Plänen..." />
              </div>
              <button className="w-full bg-[#141414] text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors flex items-center justify-center gap-3">
                Nachricht senden
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
