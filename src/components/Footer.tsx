import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900/5 bg-surface-container-lowest">
      <div className="flex flex-col items-center w-full px-6 py-24 gap-12 max-w-screen-2xl mx-auto">
        <div className="font-sans uppercase tracking-[0.4em] text-lg text-zinc-900">
          Alex Begopoulos
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-sans uppercase tracking-[0.2em] text-[9px] text-zinc-400 hover:text-zinc-900 transition-all"
            >
              {link.name}
            </Link>
          ))}
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
