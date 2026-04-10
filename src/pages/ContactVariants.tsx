import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Instagram, MapPin, Phone, Send, ArrowRight, MessageSquare, Camera, Heart } from "lucide-react";
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

export const ContactVariants = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Kontaktformulare</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">10 optisch unterschiedliche Varianten</p>
        </div>

        {/* 1. Classic Split */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">1. Classic Split (Text Links, Formular Rechts)</h2>
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-zinc-900 text-white p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-4xl italic mb-6">Lasst uns sprechen.</h3>
                <p className="text-zinc-400 leading-relaxed mb-12">{CONTACT_INFO.text}</p>
              </div>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                  <Mail size={20} /> <span>{CONTACT_INFO.email}</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                  <Instagram size={20} /> <span>{CONTACT_INFO.instagram}</span>
                </a>
                <div className="flex items-center gap-4 text-zinc-300">
                  <MapPin size={20} /> <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
            <div className="md:w-7/12 p-12">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-sm font-medium text-zinc-700">Name</label><Input placeholder="Eure Namen" /></div>
                  <div className="space-y-2"><label className="text-sm font-medium text-zinc-700">E-Mail</label><Input type="email" placeholder="eure@email.de" /></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-sm font-medium text-zinc-700">Hochzeitsdatum</label><Input type="date" /></div>
                  <div className="space-y-2"><label className="text-sm font-medium text-zinc-700">Location</label><Input placeholder="Wo feiert ihr?" /></div>
                </div>
                <div className="space-y-2"><label className="text-sm font-medium text-zinc-700">Eure Nachricht</label><Textarea rows={4} placeholder="Erzählt mir von euren Plänen..." /></div>
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                  Anfrage senden <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 2. Centered Minimal */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">2. Centered Minimal (Fokus auf das Wesentliche)</h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl mb-4">Eure Anfrage</h3>
              <p className="text-zinc-500">{CONTACT_INFO.text}</p>
              <div className="flex justify-center gap-6 mt-6 text-sm text-zinc-400">
                <span className="flex items-center gap-2"><Mail size={16}/> {CONTACT_INFO.email}</span>
                <span className="flex items-center gap-2"><Instagram size={16}/> {CONTACT_INFO.instagram}</span>
              </div>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <Input placeholder="Eure Namen" className="bg-transparent border-zinc-300 py-4" />
              <Input type="email" placeholder="E-Mail Adresse" className="bg-transparent border-zinc-300 py-4" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" className="bg-transparent border-zinc-300 py-4 text-zinc-500" />
                <Input placeholder="Location" className="bg-transparent border-zinc-300 py-4" />
              </div>
              <Textarea rows={5} placeholder="Erzählt mir von eurer Vision..." className="bg-transparent border-zinc-300 py-4" />
              <button className="w-full bg-black text-white py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors">
                Nachricht senden
              </button>
            </form>
          </div>
        </section>

        {/* 3. Dark Elegance */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">3. Dark Elegance (Dunkel & Edel)</h2>
          <div className="max-w-4xl mx-auto bg-zinc-950 text-zinc-100 p-8 md:p-16 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-serif text-4xl italic mb-6 text-white">Say Hello.</h3>
                <p className="text-zinc-400 mb-8">{CONTACT_INFO.text}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-zinc-300"><Mail size={18} className="text-zinc-500"/> {CONTACT_INFO.email}</div>
                  <div className="flex items-center gap-4 text-zinc-300"><Instagram size={18} className="text-zinc-500"/> {CONTACT_INFO.instagram}</div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <input placeholder="Namen" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-zinc-600" />
                <input type="email" placeholder="E-Mail" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-zinc-600" />
                <input placeholder="Datum & Location" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-zinc-600" />
                <textarea rows={3} placeholder="Nachricht" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-zinc-600 resize-none" />
                <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                  Senden
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 4. Bento Grid */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">4. Bento Grid (Kacheln)</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
              <h3 className="font-serif text-3xl mb-8">Schreibt mir</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Namen" className="bg-zinc-50 border-transparent" />
                  <Input type="email" placeholder="E-Mail" className="bg-zinc-50 border-transparent" />
                </div>
                <Input placeholder="Datum & Location" className="bg-zinc-50 border-transparent" />
                <Textarea rows={6} placeholder="Eure Nachricht" className="bg-zinc-50 border-transparent" />
                <button className="bg-zinc-900 text-white px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors">Senden</button>
              </form>
            </div>
            <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-sm flex flex-col justify-center items-center text-center">
              <Instagram size={32} className="mb-4 opacity-50" />
              <h4 className="font-serif text-xl mb-2">Instagram</h4>
              <p className="text-zinc-400 text-sm">{CONTACT_INFO.instagram}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-center items-center text-center border border-zinc-100">
              <Mail size={32} className="mb-4 text-zinc-300" />
              <h4 className="font-serif text-xl mb-2">E-Mail</h4>
              <p className="text-zinc-500 text-sm">{CONTACT_INFO.email}</p>
            </div>
          </div>
        </section>

        {/* 5. Floating Card over Image */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">5. Floating Card (Über Bild)</h2>
          <div className="max-w-6xl mx-auto relative rounded-[2rem] overflow-hidden min-h-[600px] flex items-center justify-end p-6 md:p-12">
            <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2400/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="relative bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl w-full max-w-md shadow-2xl">
              <h3 className="font-serif text-3xl italic mb-2">Kontakt</h3>
              <p className="text-sm text-zinc-600 mb-6">{CONTACT_INFO.text}</p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <Input placeholder="Namen" className="bg-white/50" />
                <Input type="email" placeholder="E-Mail" className="bg-white/50" />
                <Textarea rows={4} placeholder="Nachricht" className="bg-white/50" />
                <button className="w-full bg-zinc-900 text-white py-3 rounded-xl hover:bg-zinc-800 transition-colors">Senden</button>
              </form>
            </div>
          </div>
        </section>

        {/* 6. Step-by-Step Wizard */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">6. Step-by-Step (Interaktiv)</h2>
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[2rem] shadow-sm text-center min-h-[400px] flex flex-col justify-center">
            <div className="mb-8 flex justify-center gap-2">
              {[1,2,3].map(step => (
                <div key={step} className={cn("h-1.5 rounded-full transition-all", step === 1 ? "w-8 bg-zinc-900" : "w-4 bg-zinc-200")} />
              ))}
            </div>
            <h3 className="font-serif text-3xl mb-8">Wie lauten eure Namen?</h3>
            <Input placeholder="Z.B. Anna & Tom" className="text-center text-xl py-4 mb-8" />
            <div className="flex justify-center gap-4">
              <button className="bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-colors">Weiter</button>
            </div>
            <p className="mt-12 text-xs text-zinc-400">Oder direkt per Mail: {CONTACT_INFO.email}</p>
          </div>
        </section>

        {/* 7. Brutalist / High Contrast */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">7. Brutalist (Auffällig & Kantig)</h2>
          <div className="max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-sans font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">Hit me up!</h3>
            <p className="font-mono text-sm mb-8 border-l-4 border-black pl-4">{CONTACT_INFO.text}</p>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold uppercase text-xs mb-2">Namen</label>
                  <input className="w-full border-2 border-black p-3 focus:bg-yellow-100 outline-none transition-colors font-mono" />
                </div>
                <div>
                  <label className="block font-bold uppercase text-xs mb-2">E-Mail</label>
                  <input type="email" className="w-full border-2 border-black p-3 focus:bg-yellow-100 outline-none transition-colors font-mono" />
                </div>
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">Nachricht</label>
                <textarea rows={4} className="w-full border-2 border-black p-3 focus:bg-yellow-100 outline-none transition-colors font-mono resize-none" />
              </div>
              <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-yellow-400 hover:text-black transition-colors border-2 border-black">
                Abschicken
              </button>
            </form>
            <div className="mt-8 pt-8 border-t-4 border-black flex flex-wrap gap-6 font-mono text-sm font-bold">
              <span>IG: {CONTACT_INFO.instagram}</span>
              <span>MAIL: {CONTACT_INFO.email}</span>
            </div>
          </div>
        </section>

        {/* 8. Letter / Editorial */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">8. Editorial Letter (Lückentext)</h2>
          <div className="max-w-3xl mx-auto bg-[#fdfbf7] p-12 md:p-20 rounded-sm shadow-md border border-[#e8e4d9]">
            <p className="text-right font-mono text-xs text-zinc-400 mb-12">An: {CONTACT_INFO.email}</p>
            <div className="font-serif text-2xl md:text-3xl leading-loose text-zinc-800">
              Hallo Alex,<br/><br/>
              wir sind <input placeholder="Namen" className="bg-transparent border-b-2 border-zinc-300 focus:border-zinc-900 outline-none w-48 text-center placeholder:text-zinc-300 mx-2" /> 
              und wir heiraten am <input type="date" className="bg-transparent border-b-2 border-zinc-300 focus:border-zinc-900 outline-none w-48 text-center text-xl mx-2" /> 
              in <input placeholder="Location" className="bg-transparent border-b-2 border-zinc-300 focus:border-zinc-900 outline-none w-48 text-center placeholder:text-zinc-300 mx-2" />.<br/><br/>
              Wir würden uns freuen, wenn du unseren Tag begleitest. Du erreichst uns unter <input type="email" placeholder="E-Mail" className="bg-transparent border-b-2 border-zinc-300 focus:border-zinc-900 outline-none w-64 text-center placeholder:text-zinc-300 mx-2" />.<br/><br/>
              <textarea placeholder="Weitere Details..." className="w-full bg-transparent border-b-2 border-zinc-300 focus:border-zinc-900 outline-none resize-none mt-4 placeholder:text-zinc-300" rows={2} />
            </div>
            <div className="mt-16 text-center">
              <button className="bg-zinc-900 text-white px-12 py-4 rounded-full font-sans text-sm tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                Brief senden
              </button>
            </div>
            <p className="text-center mt-8 text-sm text-zinc-500 font-sans">Oder via Instagram: {CONTACT_INFO.instagram}</p>
          </div>
        </section>

        {/* 9. Chat Bubble Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">9. Chat Interface</h2>
          <div className="max-w-md mx-auto bg-white rounded-[3rem] shadow-xl border-8 border-zinc-100 overflow-hidden h-[600px] flex flex-col">
            <div className="bg-zinc-50 p-6 border-b border-zinc-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/w_100/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" className="w-full h-full object-cover" alt="Alex" />
              </div>
              <div>
                <h4 className="font-medium">Alex Begopoulos</h4>
                <p className="text-xs text-zinc-500">Online</p>
              </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-zinc-50/50">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0 overflow-hidden">
                  <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/w_100/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" className="w-full h-full object-cover" alt="Alex" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-zinc-700 max-w-[80%]">
                  Hey! 👋 {CONTACT_INFO.text}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0 overflow-hidden">
                  <img src="https://res.cloudinary.com/alexbegopoulos/image/upload/w_100/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp" className="w-full h-full object-cover" alt="Alex" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-zinc-700 max-w-[80%]">
                  Wie lauten eure Namen und wann heiratet ihr?
                </div>
              </div>
            </div>
            <div className="p-4 bg-white border-t border-zinc-100">
              <div className="flex items-center gap-2 bg-zinc-100 rounded-full p-2">
                <input placeholder="Nachricht schreiben..." className="flex-1 bg-transparent outline-none px-4 text-sm" />
                <button className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0">
                  <Send size={16} className="ml-1" />
                </button>
              </div>
              <p className="text-center text-[10px] text-zinc-400 mt-3">Oder E-Mail an {CONTACT_INFO.email}</p>
            </div>
          </div>
        </section>

        {/* 10. Sidebar + Form */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">10. Sidebar & Formular</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-8">
              <div>
                <h3 className="font-serif text-3xl mb-4">Kontakt</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{CONTACT_INFO.text}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-900"><Mail size={18}/></div>
                  <div className="text-sm font-medium">{CONTACT_INFO.email}</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-900"><Instagram size={18}/></div>
                  <div className="text-sm font-medium">{CONTACT_INFO.instagram}</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Namen</label><Input className="bg-zinc-50 border-transparent" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-zinc-400">E-Mail</label><Input type="email" className="bg-zinc-50 border-transparent" /></div>
                </div>
                <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Datum & Location</label><Input className="bg-zinc-50 border-transparent" /></div>
                <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Nachricht</label><Textarea rows={5} className="bg-zinc-50 border-transparent" /></div>
                <button className="bg-zinc-900 text-white px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors font-medium">Anfrage absenden</button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
