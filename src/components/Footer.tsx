import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";

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
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Facebook size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.phone} className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Phone size={18} strokeWidth={1.5} />
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
