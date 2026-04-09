import React from 'react';
import { cn } from '../lib/utils';
import { ArrowRight, Mail, Instagram, MessageCircle, Heart, Camera, Calendar, MapPin, Send, Plus, Minus, Check, X, ChevronRight, Download, Share2, ExternalLink, User, Settings, Search, Bell, Menu, Home, Info, Phone, Globe, Lock, Unlock, Eye, EyeOff, Trash2, Edit3, Save, Copy, RefreshCw, Star, Bookmark, Filter, Grid, List } from 'lucide-react';

const ButtonVariant = ({ 
  children, 
  name, 
  className,
  dark = false 
}: { 
  children: React.ReactNode; 
  name: string;
  className?: string;
  dark?: boolean;
}) => (
  <div className={cn(
    "flex flex-col items-center justify-center p-8 border border-zinc-100 rounded-2xl transition-all hover:shadow-lg hover:border-zinc-200 group",
    dark ? "bg-zinc-900 text-white border-zinc-800" : "bg-white text-zinc-900",
    className
  )}>
    <div className="mb-6 flex items-center justify-center min-h-[60px] w-full">
      {children}
    </div>
    <span className={cn(
      "text-[8px] uppercase tracking-[0.2em] font-sans",
      dark ? "text-zinc-500" : "text-zinc-400"
    )}>
      {name}
    </span>
  </div>
);

export const ButtonShowcase = () => {
  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-6">Button Design Varianten</h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs max-w-2xl mx-auto leading-relaxed">
          40 exklusive Button-Konzepte für Alex Begopoulos. 
          Von minimalistischer Eleganz bis hin zu funktionaler Klarheit.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 1. Classic Minimal */}
        <ButtonVariant name="01. Classic Minimal">
          <button className="px-8 py-3 border border-zinc-900 text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all duration-500">
            Jetzt Anfragen
          </button>
        </ButtonVariant>

        {/* 2. Solid Dark */}
        <ButtonVariant name="02. Solid Dark">
          <button className="px-8 py-3 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all duration-500">
            Portfolio ansehen
          </button>
        </ButtonVariant>

        {/* 3. Ghost with Icon */}
        <ButtonVariant name="03. Ghost Icon">
          <button className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] group">
            <span>Mehr erfahren</span>
            <ArrowRight aria-label="Weiter" size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </ButtonVariant>

        {/* 4. Underlined */}
        <ButtonVariant name="04. Underlined">
          <button className="text-[10px] uppercase tracking-[0.3em] border-b border-zinc-900 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all">
            Kontakt aufnehmen
          </button>
        </ButtonVariant>

        {/* 5. Pill Shape */}
        <ButtonVariant name="05. Pill Shape">
          <button className="px-10 py-3 bg-zinc-100 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all">
            Verfügbarkeit prüfen
          </button>
        </ButtonVariant>

        {/* 6. Serif Italic */}
        <ButtonVariant name="06. Serif Italic">
          <button className="font-serif text-xl italic hover:text-zinc-400 transition-all">
            Lass uns reden
          </button>
        </ButtonVariant>

        {/* 7. Deep Forest Solid */}
        <ButtonVariant name="07. Deep Forest" className="bg-[#1a2e26] border-none">
          <button className="px-8 py-3 bg-white/10 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white/20 transition-all">
            Termin buchen
          </button>
        </ButtonVariant>

        {/* 8. Double Border */}
        <ButtonVariant name="08. Double Border">
          <button className="px-8 py-2 border-double border-4 border-zinc-900 text-[10px] uppercase tracking-[0.3em]">
            Galerie öffnen
          </button>
        </ButtonVariant>

        {/* 9. Floating Shadow */}
        <ButtonVariant name="09. Floating Shadow">
          <button className="px-8 py-3 bg-white shadow-xl rounded-lg text-[10px] uppercase tracking-[0.3em] hover:-translate-y-1 transition-all">
            Pakete entdecken
          </button>
        </ButtonVariant>

        {/* 10. Minimal Circle Icon */}
        <ButtonVariant name="10. Circle Icon">
          <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:border-zinc-900 transition-all">
            <Instagram aria-label="Instagram Profil" size={18} />
          </button>
        </ButtonVariant>

        {/* 11. Text with Dot */}
        <ButtonVariant name="11. Text & Dot">
          <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em]">
            <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full" />
            <span>Live Status</span>
          </button>
        </ButtonVariant>

        {/* 12. Wide Tracking */}
        <ButtonVariant name="12. Wide Tracking">
          <button className="text-[9px] uppercase tracking-[0.6em] text-zinc-400 hover:text-zinc-900 transition-all">
            SCROLL DOWN
          </button>
        </ButtonVariant>

        {/* 13. Glassmorphism */}
        <ButtonVariant name="13. Glassmorphism" className="bg-[url('https://picsum.photos/seed/wedding/400/300')] bg-cover">
          <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.3em]">
            Details ansehen
          </button>
        </ButtonVariant>

        {/* 14. Brutalist Square */}
        <ButtonVariant name="14. Brutalist">
          <button className="px-8 py-3 bg-zinc-900 text-white font-bold uppercase italic tracking-tighter hover:bg-zinc-700 transition-all">
            JETZT STARTEN
          </button>
        </ButtonVariant>

        {/* 15. Soft Gradient */}
        <ButtonVariant name="15. Soft Gradient">
          <button className="px-8 py-3 bg-gradient-to-r from-zinc-100 to-zinc-200 text-[10px] uppercase tracking-[0.3em] rounded hover:from-zinc-200 hover:to-zinc-300 transition-all">
            Preise anfragen
          </button>
        </ButtonVariant>

        {/* 16. Vertical Text */}
        <ButtonVariant name="16. Vertical">
          <button className="flex flex-col items-center space-y-4 group">
            <div className="w-[1px] h-12 bg-zinc-200 group-hover:h-16 transition-all" />
            <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.4em]">Kontakt</span>
          </button>
        </ButtonVariant>

        {/* 17. Gold Outline */}
        <ButtonVariant name="17. Gold Outline">
          <button className="px-8 py-3 border border-[#c5a059] text-[#c5a059] text-[10px] uppercase tracking-[0.3em] hover:bg-[#c5a059] hover:text-white transition-all">
            Premium Service
          </button>
        </ButtonVariant>

        {/* 18. Icon Only Square */}
        <ButtonVariant name="18. Icon Square">
          <button className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-700 transition-all">
            <Mail aria-label="E-Mail schreiben" size={18} />
          </button>
        </ButtonVariant>

        {/* 19. Two-Tone */}
        <ButtonVariant name="19. Two-Tone">
          <button className="flex overflow-hidden rounded-lg border border-zinc-900">
            <span className="px-4 py-2 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.2em]">Book</span>
            <span className="px-4 py-2 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.2em]">Now</span>
          </button>
        </ButtonVariant>

        {/* 20. Dotted Border */}
        <ButtonVariant name="20. Dotted">
          <button className="px-8 py-3 border-2 border-dotted border-zinc-300 text-[10px] uppercase tracking-[0.3em] hover:border-zinc-900 transition-all">
            FAQ Bereich
          </button>
        </ButtonVariant>

        {/* 21. Skewed */}
        <ButtonVariant name="21. Skewed">
          <button className="px-8 py-3 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.3em] -skew-x-12 hover:skew-x-0 transition-all">
            Action
          </button>
        </ButtonVariant>

        {/* 22. Animated Underline */}
        <ButtonVariant name="22. Animated Line">
          <button className="relative py-2 text-[10px] uppercase tracking-[0.3em] group">
            <span>Über mich</span>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-zinc-900 group-hover:w-full transition-all duration-500" />
          </button>
        </ButtonVariant>

        {/* 23. Neumorphism */}
        <ButtonVariant name="23. Neumorphism" className="bg-zinc-100">
          <button className="px-8 py-3 bg-zinc-100 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] text-[10px] uppercase tracking-[0.3em] active:shadow-inner transition-all">
            Soft Button
          </button>
        </ButtonVariant>

        {/* 24. Label & Icon */}
        <ButtonVariant name="24. Label & Icon">
          <button className="flex items-center space-x-4 px-6 py-3 bg-zinc-50 border border-zinc-100 rounded hover:bg-white hover:shadow-md transition-all">
            <div className="p-2 bg-zinc-900 rounded text-white"><Camera aria-label="Fotografie" size={14} /></div>
            <span className="text-[10px] uppercase tracking-[0.2em]">Portfolio</span>
          </button>
        </ButtonVariant>

        {/* 25. Large Serif Button */}
        <ButtonVariant name="25. Large Serif">
          <button className="font-serif text-3xl italic border-b-2 border-zinc-900 pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all">
            Let's Create
          </button>
        </ButtonVariant>

        {/* 26. Tag Style */}
        <ButtonVariant name="26. Tag Style">
          <button className="px-4 py-1.5 bg-zinc-100 text-zinc-500 text-[9px] uppercase tracking-[0.2em] rounded-full hover:bg-zinc-900 hover:text-white transition-all">
            #Hochzeit
          </button>
        </ButtonVariant>

        {/* 27. Corner Border */}
        <ButtonVariant name="27. Corner Border">
          <button className="relative px-8 py-3 text-[10px] uppercase tracking-[0.3em]">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-900" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-900" />
            <span>Details</span>
          </button>
        </ButtonVariant>

        {/* 28. Muted Minimal */}
        <ButtonVariant name="28. Muted">
          <button className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 hover:text-zinc-900 transition-all">
            Impressum
          </button>
        </ButtonVariant>

        {/* 29. Bold Outline Pill */}
        <ButtonVariant name="29. Bold Pill">
          <button className="px-10 py-3 border-2 border-zinc-900 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all">
            Anfragen
          </button>
        </ButtonVariant>

        {/* 30. Icon Left */}
        <ButtonVariant name="30. Icon Left">
          <button className="flex items-center space-x-3 px-6 py-3 border border-zinc-200 rounded hover:border-zinc-900 transition-all">
            <Calendar aria-label="Calendar" size={14} />
            <span className="text-[10px] uppercase tracking-[0.2em]">Termin</span>
          </button>
        </ButtonVariant>

        {/* 31. Thin Line Wide */}
        <ButtonVariant name="31. Thin Wide">
          <button className="w-full py-4 border-y border-zinc-100 text-[9px] uppercase tracking-[0.8em] hover:bg-zinc-50 transition-all">
            EXPLORE MORE
          </button>
        </ButtonVariant>

        {/* 32. Shadow Hover */}
        <ButtonVariant name="32. Shadow Hover">
          <button className="px-8 py-3 bg-white border border-zinc-100 text-[10px] uppercase tracking-[0.3em] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all">
            Galerie
          </button>
        </ButtonVariant>

        {/* 33. Dark Signature */}
        <ButtonVariant name="33. Dark Signature" dark>
          <button className="font-signature text-4xl text-white hover:text-zinc-400 transition-all">
            Alex B.
          </button>
        </ButtonVariant>

        {/* 34. Minimal Arrow */}
        <ButtonVariant name="34. Minimal Arrow">
          <button className="flex items-center space-x-6 group">
            <span className="text-[10px] uppercase tracking-[0.4em]">Next</span>
            <div className="w-12 h-[1px] bg-zinc-900 group-hover:w-20 transition-all" />
          </button>
        </ButtonVariant>

        {/* 35. Boxed Letter */}
        <ButtonVariant name="35. Boxed Letter">
          <button className="flex items-center">
            <div className="w-10 h-10 bg-zinc-900 text-white flex items-center justify-center font-serif italic text-xl">A</div>
            <span className="px-4 text-[10px] uppercase tracking-[0.3em]">Begopoulos</span>
          </button>
        </ButtonVariant>

        {/* 36. Dashed Underline */}
        <ButtonVariant name="36. Dashed Line">
          <button className="text-[10px] uppercase tracking-[0.3em] border-b border-dashed border-zinc-400 pb-1 hover:border-zinc-900 transition-all">
            Preise
          </button>
        </ButtonVariant>

        {/* 37. Floating Pill */}
        <ButtonVariant name="37. Floating Pill">
          <button className="px-8 py-3 bg-zinc-900 text-white rounded-full shadow-lg shadow-zinc-900/20 hover:shadow-zinc-900/40 hover:-translate-y-0.5 transition-all">
            <Send aria-label="Nachricht senden" size={16} />
          </button>
        </ButtonVariant>

        {/* 38. Serif Small Caps */}
        <ButtonVariant name="38. Serif Caps">
          <button className="font-serif text-sm tracking-[0.3em] uppercase">
            Wedding <span className="italic lowercase opacity-60">stories</span>
          </button>
        </ButtonVariant>

        {/* 39. Outline with Dot */}
        <ButtonVariant name="39. Outline Dot">
          <button className="relative px-8 py-3 border border-zinc-200 text-[10px] uppercase tracking-[0.3em] group">
            <span>Kontakt</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#c5a059] rounded-full scale-0 group-hover:scale-100 transition-all" />
          </button>
        </ButtonVariant>

        {/* 40. The Final Button */}
        <ButtonVariant name="40. Final Elegance" dark className="bg-zinc-950">
          <button className="px-12 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-zinc-950 transition-all duration-700">
            UNVERGESSLICH
          </button>
        </ButtonVariant>
      </div>

      <div className="mt-24 text-center">
        <p className="text-zinc-400 text-sm mb-12">Welcher Button-Stil passt am besten zu deinem neuen Logo?</p>
        <a href="/" className="inline-block px-12 py-4 bg-zinc-900 text-white text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
          Zurück zur Website
        </a>
      </div>
    </div>
  );
};

export default ButtonShowcase;
