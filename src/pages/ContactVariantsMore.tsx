import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Instagram, MapPin, Send, ArrowRight, Camera, Heart, Plane, Coffee, Terminal, Map } from "lucide-react";
import { cn } from "../lib/utils";

const CONTACT_INFO = {
  text: "Ich freue mich darauf, eure Geschichte kennenzulernen. Schreibt mir gerne über das Formular, per E-Mail oder auf Instagram.",
  email: "hallo@alexbegopoulos.com",
  instagram: "@alexbegopoulos",
  phone: "+49 123 456789",
  location: "Hannover & Weltweit"
};

const Input = ({ className, ...props }: any) => (
  <input className={cn("w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all bg-white", className)} {...props} />
);

const Textarea = ({ className, ...props }: any) => (
  <textarea className={cn("w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all bg-white resize-none", className)} {...props} />
);

export const ContactVariantsMore = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Kontaktformulare (Teil 2)</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">15 weitere Konzepte (Varianten 11-25)</p>
        </div>

        {/* 11. Terminal / CLI */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">11. Terminal / Developer Style</h2>
          <div className="max-w-3xl mx-auto bg-zinc-950 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 font-mono text-sm">
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-zinc-500">contact.sh</span>
            </div>
            <div className="p-8 text-green-400 space-y-4">
              <p><span className="text-zinc-500">$</span> ./init_contact.sh</p>
              <p className="text-zinc-300">Initializing connection to Alex Begopoulos...</p>
              <p className="text-zinc-300">Status: Ready to receive your story.</p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <span className="text-zinc-500">?</span> Enter your names:
                  <input className="bg-transparent border-none outline-none text-white ml-2 w-64 focus:ring-0 placeholder:text-zinc-700" placeholder="_" />
                </div>
                <div>
                  <span className="text-zinc-500">?</span> Enter your email:
                  <input type="email" className="bg-transparent border-none outline-none text-white ml-2 w-64 focus:ring-0 placeholder:text-zinc-700" placeholder="_" />
                </div>
                <div>
                  <span className="text-zinc-500">?</span> Enter wedding date & location:
                  <input className="bg-transparent border-none outline-none text-white ml-2 w-64 focus:ring-0 placeholder:text-zinc-700" placeholder="_" />
                </div>
                <div>
                  <span className="text-zinc-500">?</span> Your message:
                  <textarea rows={2} className="bg-transparent border-none outline-none text-white ml-2 w-full focus:ring-0 placeholder:text-zinc-700 resize-none align-top mt-2" placeholder="_" />
                </div>
                <button className="bg-green-900/30 text-green-400 hover:bg-green-900/60 px-4 py-2 border border-green-800 transition-colors">
                  [ Execute Send ]
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Postcard Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">12. Postcard (Postkarte)</h2>
          <div className="max-w-4xl mx-auto bg-[#fdfbf7] p-8 md:p-12 shadow-xl border border-[#e8e4d9] relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-200 hidden md:block" />
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl italic mb-6">Lieber Alex,</h3>
                <textarea rows={6} placeholder="wir heiraten und würden uns freuen, wenn du unseren Tag begleitest..." className="w-full bg-transparent border-none outline-none resize-none font-serif text-lg leading-relaxed placeholder:text-zinc-300" />
                <div className="pt-4">
                  <p className="font-serif text-lg">Liebe Grüße,</p>
                  <input placeholder="Eure Namen" className="bg-transparent border-b border-zinc-300 outline-none font-serif text-lg mt-2 w-full" />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-end mb-12">
                  <div className="w-24 h-32 border-2 border-zinc-200 flex items-center justify-center text-zinc-300 text-xs uppercase tracking-widest rotate-3">
                    Briefmarke
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-zinc-400 block mb-2">An:</label>
                    <p className="font-serif text-xl border-b border-zinc-300 pb-2">Alex Begopoulos</p>
                    <p className="font-serif text-xl border-b border-zinc-300 pb-2 mt-4">{CONTACT_INFO.email}</p>
                    <p className="font-serif text-xl border-b border-zinc-300 pb-2 mt-4">{CONTACT_INFO.location}</p>
                  </div>
                  <div className="space-y-4">
                    <input type="email" placeholder="Eure E-Mail für die Antwort" className="w-full bg-transparent border-b border-zinc-300 outline-none font-serif text-lg pb-2" />
                    <button className="w-full bg-zinc-900 text-white py-4 font-sans text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                      Postkarte einwerfen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Typeform / One Question at a Time */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">13. Typeform Style (Fokus)</h2>
          <div className="max-w-3xl mx-auto bg-white min-h-[400px] rounded-[2rem] shadow-sm p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-4xl mb-8">1. Wie lauten eure Namen?</h3>
                  <input placeholder="Z.B. Anna & Tom" className="w-full text-3xl border-b-2 border-zinc-200 pb-4 outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-200" />
                  <button onClick={() => setActiveStep(1)} className="mt-8 bg-zinc-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800">
                    OK <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
              {activeStep === 1 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-4xl mb-8">2. Wann und wo heiratet ihr?</h3>
                  <input placeholder="Datum & Location" className="w-full text-3xl border-b-2 border-zinc-200 pb-4 outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-200" />
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setActiveStep(2)} className="bg-zinc-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800">
                      OK <ArrowRight size={16} />
                    </button>
                    <button onClick={() => setActiveStep(0)} className="px-8 py-3 rounded-full text-zinc-500 hover:bg-zinc-100">Zurück</button>
                  </div>
                </motion.div>
              )}
              {activeStep === 2 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-4xl mb-8">3. Eure Nachricht an mich</h3>
                  <textarea rows={3} placeholder="Erzählt mir von euren Plänen..." className="w-full text-2xl border-b-2 border-zinc-200 pb-4 outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-200 resize-none" />
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setActiveStep(0)} className="bg-zinc-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800">
                      Absenden <Send size={16} />
                    </button>
                    <button onClick={() => setActiveStep(1)} className="px-8 py-3 rounded-full text-zinc-500 hover:bg-zinc-100">Zurück</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-12 flex gap-2">
              {[0, 1, 2].map(step => (
                <div key={step} className={cn("h-1 flex-1 rounded-full transition-colors", step <= activeStep ? "bg-zinc-900" : "bg-zinc-100")} />
              ))}
            </div>
          </div>
        </section>

        {/* 14. Accordion Form */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">14. Accordion Form (Kompakt)</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="p-8 border-b border-zinc-100">
              <h3 className="font-serif text-2xl">Eure Anfrage</h3>
              <p className="text-zinc-500 text-sm mt-2">{CONTACT_INFO.text}</p>
            </div>
            <div className="divide-y divide-zinc-100">
              <div className="p-6">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-4">1. Persönliche Daten</label>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                  <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                </div>
              </div>
              <div className="p-6">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-4">2. Hochzeitsdetails</label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="date" className="bg-zinc-50 border-transparent text-zinc-500" />
                  <Input placeholder="Location" className="bg-zinc-50 border-transparent" />
                </div>
              </div>
              <div className="p-6">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-4">3. Nachricht</label>
                <Textarea rows={4} placeholder="Erzählt mir mehr..." className="bg-zinc-50 border-transparent" />
              </div>
              <div className="p-6 bg-zinc-50">
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors">Jetzt anfragen</button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. Map Background */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">15. Map Background (Lokal)</h2>
          <div className="max-w-6xl mx-auto relative rounded-[2rem] overflow-hidden min-h-[600px] bg-zinc-200 flex items-center p-6 md:p-12">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Map size={400} className="text-zinc-400 opacity-20" />
              </div>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                <h3 className="font-serif text-3xl mb-6">Hannover & Weltweit</h3>
                <p className="text-zinc-600 mb-8">{CONTACT_INFO.text}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4"><MapPin className="text-zinc-400"/> Hannover, Germany</div>
                  <div className="flex items-center gap-4"><Mail className="text-zinc-400"/> {CONTACT_INFO.email}</div>
                  <div className="flex items-center gap-4"><Instagram className="text-zinc-400"/> {CONTACT_INFO.instagram}</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                  <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                  <Input placeholder="Datum & Ort" className="bg-zinc-50 border-transparent" />
                  <Textarea rows={4} placeholder="Nachricht" className="bg-zinc-50 border-transparent" />
                  <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors">Senden</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 16. Neumorphism */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">16. Neumorphism (Soft UI)</h2>
          <div className="max-w-2xl mx-auto bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
            <h3 className="font-serif text-3xl mb-8 text-center text-zinc-700">Let's Connect</h3>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <input 
                placeholder="Namen" 
                className="w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] text-zinc-700 placeholder:text-zinc-400 outline-none shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)]" 
              />
              <input 
                type="email"
                placeholder="E-Mail" 
                className="w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] text-zinc-700 placeholder:text-zinc-400 outline-none shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)]" 
              />
              <textarea 
                rows={4}
                placeholder="Nachricht" 
                className="w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] text-zinc-700 placeholder:text-zinc-400 outline-none resize-none shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)]" 
              />
              <button className="w-full py-4 rounded-2xl bg-[#e0e5ec] text-zinc-700 font-bold uppercase tracking-widest text-sm shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] transition-all active:scale-95">
                Senden
              </button>
            </form>
          </div>
        </section>

        {/* 17. Glassmorphism */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">17. Glassmorphism (Frosted Glass)</h2>
          <div className="max-w-4xl mx-auto relative rounded-[3rem] overflow-hidden min-h-[600px] flex items-center justify-center p-6">
            {/* Colorful abstract background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
            <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <div className="absolute top-40 right-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-40 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000" />
            
            <div className="relative z-10 w-full max-w-lg bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-[2rem] shadow-2xl">
              <h3 className="font-serif text-4xl text-white mb-8 drop-shadow-md">Say Hello</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input placeholder="Namen" className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 transition-colors backdrop-blur-sm" />
                <input type="email" placeholder="E-Mail" className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 transition-colors backdrop-blur-sm" />
                <textarea rows={4} placeholder="Nachricht" className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 transition-colors backdrop-blur-sm resize-none" />
                <button className="w-full bg-white/40 hover:bg-white/50 text-white font-medium py-4 rounded-xl transition-colors backdrop-blur-md border border-white/50">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 18. Retro / Vintage */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">18. Retro / Typewriter</h2>
          <div className="max-w-3xl mx-auto bg-[#f4ecd8] p-12 md:p-20 shadow-md border border-[#dcd0b8] relative">
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-zinc-400/30" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-zinc-400/30" />
            
            <h3 className="font-mono text-2xl uppercase tracking-[0.2em] text-zinc-800 mb-12 text-center border-b-2 border-zinc-800 pb-4 inline-block mx-auto w-full">Telegramm</h3>
            
            <form className="space-y-8 font-mono text-zinc-800" onSubmit={e => e.preventDefault()}>
              <div className="flex items-end gap-4">
                <label className="uppercase text-sm shrink-0">Von:</label>
                <input className="flex-1 bg-transparent border-b border-zinc-800 border-dashed outline-none focus:border-solid transition-all" />
              </div>
              <div className="flex items-end gap-4">
                <label className="uppercase text-sm shrink-0">Datum:</label>
                <input type="date" className="flex-1 bg-transparent border-b border-zinc-800 border-dashed outline-none focus:border-solid transition-all" />
              </div>
              <div>
                <label className="uppercase text-sm block mb-4">Nachricht:</label>
                <textarea rows={6} className="w-full bg-transparent border border-zinc-800 p-4 outline-none resize-none leading-loose" />
              </div>
              <div className="text-center pt-8">
                <button className="bg-zinc-800 text-[#f4ecd8] px-12 py-3 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  STOP. SENDEN. STOP.
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 19. Minimalist Line */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">19. Minimalist Line (Eine Zeile)</h2>
          <div className="max-w-4xl mx-auto bg-white p-20 rounded-[3rem] shadow-sm text-center">
            <h3 className="font-serif text-4xl italic mb-16">Erzählt mir von euch.</h3>
            <div className="relative max-w-2xl mx-auto">
              <input 
                placeholder="Hallo Alex, wir sind..." 
                className="w-full text-2xl md:text-4xl font-serif text-center border-b border-zinc-200 pb-4 outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
              />
              <button className="absolute right-0 bottom-4 text-zinc-400 hover:text-zinc-900 transition-colors">
                <ArrowRight size={32} strokeWidth={1} />
              </button>
            </div>
            <p className="mt-16 text-sm text-zinc-400">Drücke Enter, um zum nächsten Feld zu gelangen.</p>
          </div>
        </section>

        {/* 20. Polaroids */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">20. Polaroids (Bilder & Formular)</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <div className="absolute top-10 left-10 bg-white p-4 pb-12 shadow-xl rotate-[-6deg] w-64 z-10 border border-zinc-100">
                <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/v1775484706/fotograf-alex-begopoulos-mit-freundin-katharina.webp" alt="Alex" className="w-full aspect-square object-cover bg-zinc-100" />
                <p className="font-serif italic text-center mt-4 text-zinc-600">Hi, ich bin Alex!</p>
              </div>
              <div className="absolute top-32 right-10 bg-white p-4 pb-12 shadow-xl rotate-[4deg] w-64 z-20 border border-zinc-100">
                <div className="w-full aspect-square bg-zinc-900 flex flex-col items-center justify-center text-white p-6 text-center">
                  <Mail size={32} className="mb-4 opacity-50" />
                  <p className="font-sans text-xs uppercase tracking-widest">{CONTACT_INFO.email}</p>
                </div>
                <p className="font-serif italic text-center mt-4 text-zinc-600">Schreibt mir</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="font-serif text-3xl mb-8">Eure Nachricht</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                <Textarea rows={5} placeholder="Erzählt mir von eurer Hochzeit..." className="bg-zinc-50 border-transparent" />
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors">Absenden</button>
              </form>
            </div>
          </div>
        </section>

        {/* 21. Ticket / Boarding Pass */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">21. Boarding Pass (Ticket Style)</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
            <div className="md:w-2/3 p-8 md:p-12 border-r-2 border-dashed border-zinc-200 relative">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-50 rounded-full" />
              <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
                <h3 className="font-sans font-bold uppercase tracking-widest text-xl">Wedding Ticket</h3>
                <Plane className="text-zinc-300" />
              </div>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Passenger Names</label>
                    <input placeholder="Eure Namen" className="w-full font-serif text-xl outline-none border-b border-zinc-200 pb-1 focus:border-zinc-900" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Contact Email</label>
                    <input type="email" placeholder="E-Mail" className="w-full font-serif text-xl outline-none border-b border-zinc-200 pb-1 focus:border-zinc-900" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Departure Date</label>
                    <input type="date" className="w-full font-serif text-xl outline-none border-b border-zinc-200 pb-1 focus:border-zinc-900 text-zinc-500" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Destination</label>
                    <input placeholder="Location" className="w-full font-serif text-xl outline-none border-b border-zinc-200 pb-1 focus:border-zinc-900" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">Additional Notes</label>
                  <textarea rows={2} placeholder="Nachricht..." className="w-full font-serif text-lg outline-none border-b border-zinc-200 pb-1 focus:border-zinc-900 resize-none" />
                </div>
              </form>
            </div>
            <div className="md:w-1/3 bg-zinc-900 text-white p-8 md:p-12 flex flex-col justify-between relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-50 rounded-full" />
              <div>
                <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 opacity-50">Boarding Details</h4>
                <p className="font-serif text-lg mb-4">Alex Begopoulos</p>
                <p className="text-sm opacity-70 mb-2">{CONTACT_INFO.email}</p>
                <p className="text-sm opacity-70">{CONTACT_INFO.instagram}</p>
              </div>
              <button className="w-full bg-white text-zinc-900 py-4 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors mt-8">
                Confirm Booking
              </button>
            </div>
          </div>
        </section>

        {/* 22. Split Screen Diagonal */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">22. Diagonal Split</h2>
          <div className="max-w-6xl mx-auto bg-white min-h-[600px] rounded-[2rem] shadow-sm overflow-hidden relative flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-zinc-900 text-white p-12 md:p-20 relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
              <h3 className="font-serif text-4xl md:text-5xl italic mb-8">Let's create<br/>magic.</h3>
              <p className="text-zinc-400 max-w-sm mb-12">{CONTACT_INFO.text}</p>
              <div className="space-y-4">
                <p className="flex items-center gap-4"><Mail size={20} className="opacity-50"/> {CONTACT_INFO.email}</p>
                <p className="flex items-center gap-4"><Instagram size={20} className="opacity-50"/> {CONTACT_INFO.instagram}</p>
              </div>
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center -ml-12 relative z-0 bg-white">
              <form className="space-y-6 max-w-md ml-auto w-full" onSubmit={e => e.preventDefault()}>
                <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                <Textarea rows={4} placeholder="Nachricht" className="bg-zinc-50 border-transparent" />
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors">Senden</button>
              </form>
            </div>
          </div>
        </section>

        {/* 23. Dark Mode Neon */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">23. Dark Mode Neon</h2>
          <div className="max-w-3xl mx-auto bg-zinc-950 p-12 md:p-20 rounded-3xl shadow-2xl border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            <h3 className="font-sans font-black text-4xl text-white mb-2 tracking-tight">CONNECT</h3>
            <p className="text-cyan-400 font-mono text-xs mb-12 uppercase tracking-widest">{CONTACT_INFO.email}</p>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="Namen" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all placeholder:text-zinc-600" />
                <input type="email" placeholder="E-Mail" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all placeholder:text-zinc-600" />
              </div>
              <textarea rows={4} placeholder="Nachricht" className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all placeholder:text-zinc-600 resize-none" />
              <button className="w-full bg-transparent border border-cyan-500 text-cyan-400 font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-cyan-500 hover:text-zinc-950 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                Transmit
              </button>
            </form>
          </div>
        </section>

        {/* 24. Magazine Cover */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">24. Magazine Cover Style</h2>
          <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden relative min-h-[700px]">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2400/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" alt="Cover" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            
            <div className="relative z-10 p-12 h-full flex flex-col justify-between">
              <h3 className="font-serif text-7xl md:text-9xl text-center text-zinc-900 tracking-tighter mix-blend-overlay opacity-80">CONTACT</h3>
              
              <div className="mt-auto grid md:grid-cols-2 gap-12 items-end">
                <div>
                  <p className="font-serif text-2xl italic mb-4">Eure Geschichte beginnt hier.</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">{CONTACT_INFO.text}</p>
                  <div className="font-sans text-xs uppercase tracking-widest space-y-2">
                    <p>IG: {CONTACT_INFO.instagram}</p>
                    <p>MAIL: {CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 shadow-xl border border-white">
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <input placeholder="Namen" className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-zinc-900 font-serif" />
                    <input type="email" placeholder="E-Mail" className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-zinc-900 font-serif" />
                    <textarea rows={3} placeholder="Nachricht" className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-zinc-900 font-serif resize-none" />
                    <button className="w-full bg-zinc-900 text-white py-3 font-sans text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors mt-4">
                      Senden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 25. Floating Action Form (Simulated Modal) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">25. Floating Modal (Simuliert)</h2>
          <div className="max-w-6xl mx-auto bg-zinc-200 h-[600px] rounded-[2rem] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-zinc-900 p-8 text-white text-center relative">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 overflow-hidden border-4 border-zinc-900 -mt-16 relative z-20">
                  <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/w_100/v1775484706/fotograf-alex-begopoulos-mit-freundin-katharina.webp" alt="Alex" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl">Schreibt mir</h3>
                <p className="text-zinc-400 text-sm mt-2">{CONTACT_INFO.email}</p>
              </div>
              <div className="p-8">
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                  <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                  <Textarea rows={4} placeholder="Eure Nachricht" className="bg-zinc-50 border-transparent" />
                  <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors font-medium">
                    Nachricht absenden
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};
