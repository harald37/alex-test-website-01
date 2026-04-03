import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-surface/80 backdrop-blur-xl py-6" : "bg-transparent py-8"
      )}
    >
      <div className="flex justify-between items-center w-full px-12 max-w-screen-2xl mx-auto">
        <Link
          to="/"
          className="font-sans font-light tracking-[0.3em] text-lg text-on-surface uppercase"
        >
          ALEX BEGOPOULOS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-sans uppercase tracking-widest text-xs transition-colors duration-500 pb-1",
                  isActive
                    ? "text-on-surface border-b border-on-surface"
                    : "text-on-surface/60 hover:text-on-surface"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/10 py-8 px-12 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-sans uppercase tracking-widest text-xs text-on-surface"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
