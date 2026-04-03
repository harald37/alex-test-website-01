import React from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface min-h-screen pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Kontakt</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 text-zinc-900 leading-tight">Lassen Sie uns <br /> sprechen</h1>
            <p className="mb-16 text-zinc-600 leading-relaxed tracking-wide max-w-md">
              Egal ob es um Ihre Hochzeit, ein Porträt-Shooting oder ein kreatives Projekt geht – 
              ich freue mich darauf, von Ihnen zu hören. Füllen Sie einfach das Formular aus 
              oder kontaktieren Sie mich direkt.
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Email</h4>
                  <a href={SOCIAL_LINKS.email} className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">hello@alexbegopoulos.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Telefon & WhatsApp</h4>
                  <div className="flex flex-col space-y-3">
                    <a href={SOCIAL_LINKS.phone} className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">+49 123 456 789</a>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] uppercase tracking-[0.2em]">
                      <MessageCircle size={14} />
                      <span>Direkt via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Social Media</h4>
                  <div className="flex items-center space-x-6">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">Instagram</a>
                    <span className="text-zinc-200">/</span>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 rounded-2xl md:rounded-3xl p-6 md:p-12"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Vielen Dank!</h3>
                <p>
                  Ihre Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Betreff</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all">
                    <option>Hochzeit</option>
                    <option>Porträt</option>
                    <option>Event</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Nachricht</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all resize-none"
                    placeholder="Erzählen Sie mir von Ihren Plänen..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium tracking-widest uppercase text-sm hover:bg-zinc-800 transition-all flex items-center justify-center space-x-3"
                >
                  <span>Nachricht senden</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
