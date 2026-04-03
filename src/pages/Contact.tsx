import React from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-zinc-900">Lassen Sie uns sprechen</h1>
            <p className="mb-12">
              Egal ob es um Ihre Hochzeit, ein Porträt-Shooting oder ein kreatives Projekt geht – 
              ich freue mich darauf, von Ihnen zu hören. Füllen Sie einfach das Formular aus 
              oder kontaktieren Sie mich direkt.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl">
                  <Mail className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-zinc-500">hello@alexbegopoulos.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl">
                  <Phone className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Telefon</h4>
                  <p className="text-zinc-500">+49 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Studio</h4>
                  <p className="text-zinc-500">Berlin, Deutschland</p>
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
