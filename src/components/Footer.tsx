import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="font-serif italic text-xl text-on-surface">
          Alex Begopoulos
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-sans font-light tracking-[0.1em] text-[10px] uppercase text-on-surface/40 hover:text-on-surface underline-offset-4 hover:underline transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/impressum"
            className="font-sans font-light tracking-[0.1em] text-[10px] uppercase text-on-surface/40 hover:text-on-surface underline-offset-4 hover:underline transition-all"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="font-sans font-light tracking-[0.1em] text-[10px] uppercase text-on-surface/40 hover:text-on-surface underline-offset-4 hover:underline transition-all"
          >
            Datenschutz
          </Link>
        </div>

        <div className="font-sans font-light tracking-[0.1em] text-[10px] uppercase text-on-surface/40">
          © {new Date().getFullYear()} ALEX BEGOPOULOS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
