import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants";
import { Instagram, Facebook, Phone, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900/5 bg-surface-container-lowest">
      <div className="flex flex-col items-center w-full px-6 py-24 gap-12 max-w-screen-2xl mx-auto">
        <div className="font-sans uppercase tracking-[0.4em] text-lg text-zinc-900">
          Alex Begopoulos
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-10">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Instagram aria-label="Instagram Profil" size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Facebook aria-label="Facebook Profil" size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.email} className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Mail aria-label="E-Mail schreiben" size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <MessageCircle aria-label="WhatsApp Nachricht senden" size={18} strokeWidth={1.5} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <Link
            to="/hochzeitsfotograf-hannover"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hochzeitsfotograf Hannover
          </Link>
          <Link
            to="/hochzeitsfotograf-braunschweig"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hochzeitsfotograf Braunschweig
          </Link>
          <Link
            to="/testimonial-comparison"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Design-Vergleich
          </Link>
          <Link
            to="/hero-showcase"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hero-Showcase
          </Link>
          <Link
            to="/hero-variants"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hero-Varianten
          </Link>
          <Link
            to="/menu-comparison"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Menü-Vergleich
          </Link>
          <Link
            to="/logo-showcase"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Logo-Varianten
          </Link>
          <Link
            to="/button-showcase"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Button-Varianten
          </Link>
          <Link
            to="/button-test"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Button-Test
          </Link>
          <Link
            to="/seo-test"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            SEO-Strategie
          </Link>
          <Link
            to="/hero-layout-test"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hero-Layout-Test
          </Link>
          <Link
            to="/scroll-indicator-test"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Scroll-Indicator-Test
          </Link>
          <Link
            to="/test-intros"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Subpage-Intros
          </Link>
          <Link
            to="/test-home"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Home-Intros
          </Link>
          <Link
            to="/home-test"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Home-Test
          </Link>
          <Link
            to="/home-test-2"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Home-Test 2
          </Link>
          <Link
            to="/home-variants-showcase"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Hero-Varianten (15)
          </Link>
          <Link
            to="/impressum"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
          >
            Datenschutz
          </Link>
        </div>

        <div className="font-sans uppercase tracking-[0.2em] text-[8px] text-zinc-300">
          © {new Date().getFullYear()} ALEX BEGOPOULOS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
