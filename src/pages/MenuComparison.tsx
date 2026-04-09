import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { cn } from '../lib/utils';

const MenuVariant = ({ 
  title, 
  description, 
  bgClass, 
  textClass, 
  inactiveTextClass, 
  activeTextClass,
  fontClass = "font-sans"
}: { 
  title: string; 
  description: string;
  bgClass: string;
  textClass: string;
  inactiveTextClass: string;
  activeTextClass: string;
  fontClass?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="p-6 border-b border-zinc-100">
        <h3 className="font-serif text-xl italic mb-1">{title}</h3>
        <p className="text-zinc-500 text-xs uppercase tracking-wider">{description}</p>
      </div>
      
      <div className="relative h-[500px] bg-zinc-900 flex items-center justify-center overflow-hidden">
        {/* Background Image for context */}
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000" 
          alt="Context" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />

        {/* Mock Header */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
          <span className={cn("tracking-widest text-xs uppercase", textClass)}>Alex Begopoulos</span>
          <button onClick={() => setIsOpen(true)} className={cn("p-2", textClass)}>
            <Menu aria-label="Menü öffnen" size={24} />
          </button>
        </div>

        <div className="relative z-0 text-center px-6">
          <h4 className="font-serif text-2xl text-white italic mb-2">Eure Geschichte</h4>
          <p className="text-white/60 text-[10px] uppercase tracking-widest">In Bildern erzählt</p>
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn("absolute inset-0 z-20 flex flex-col", bgClass)}
            >
              <div className="p-6 flex justify-end">
                <button onClick={() => setIsOpen(false)} className={textClass}>
                  <X aria-label="Schließen" size={24} />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      fontClass,
                      "uppercase tracking-[0.4em] text-sm",
                      i === 0 ? activeTextClass : inactiveTextClass
                    )}
                  >
                    {link.name}
                  </motion.div>
                ))}
              </div>

              <div className="p-12 flex flex-col items-center space-y-4">
                <div className="flex space-x-6">
                  <Instagram aria-label="Instagram Profil" size={16} className={inactiveTextClass} />
                  <Mail aria-label="E-Mail schreiben" size={16} className={inactiveTextClass} />
                  <MessageCircle aria-label="WhatsApp Nachricht senden" size={16} className={inactiveTextClass} />
                </div>
                <span className={cn("text-[8px] uppercase tracking-widest", inactiveTextClass)}>
                  © 2026 ALEX BEGOPOULOS
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const MenuComparison = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-6xl italic mb-4">Menü Varianten</h1>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Optimierung der Lesbarkeit auf Smartphones</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <MenuVariant 
          title="Aktuelles Design"
          description="Hellgraue Schrift auf weißem Grund"
          bgClass="bg-white"
          textClass="text-zinc-900"
          inactiveTextClass="text-zinc-300"
          activeTextClass="text-zinc-900"
        />
        
        <MenuVariant 
          title="Hoher Kontrast"
          description="Dunklere Schrift für bessere Lesbarkeit"
          bgClass="bg-white"
          textClass="text-zinc-900"
          inactiveTextClass="text-zinc-500"
          activeTextClass="text-zinc-900"
        />

        <MenuVariant 
          title="Dark Mode"
          description="Dunkler Hintergrund, helle Schrift"
          bgClass="bg-zinc-900"
          textClass="text-white"
          inactiveTextClass="text-white/40"
          activeTextClass="text-white"
        />

        <MenuVariant 
          title="Deep Forest"
          description="Dunkelgrüner Hintergrund (Passend zum Banner)"
          bgClass="bg-[#1a2e26]"
          textClass="text-white"
          inactiveTextClass="text-white/40"
          activeTextClass="text-white"
        />

        <MenuVariant 
          title="Serif Elegance"
          description="Nutzung der Serif-Schrift für das Menü"
          bgClass="bg-white"
          textClass="text-zinc-900"
          inactiveTextClass="text-zinc-400"
          activeTextClass="text-zinc-900"
          fontClass="font-serif italic capitalize tracking-normal text-2xl"
        />

        <MenuVariant 
          title="Minimalist Black"
          description="Starker Kontrast, kein Schnickschnack"
          bgClass="bg-zinc-950"
          textClass="text-white"
          inactiveTextClass="text-zinc-600"
          activeTextClass="text-white"
        />
      </div>

      <div className="mt-20 text-center">
        <p className="text-zinc-400 text-sm mb-8">Klicke auf das Menü-Icon in der Vorschau, um die Varianten zu testen.</p>
        <div className="flex justify-center space-x-4">
          <a href="/" className="px-8 py-3 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuComparison;
