import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

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
        isOpen 
          ? "bg-surface" 
          : (isScrolled 
              ? "bg-surface/90 backdrop-blur-xl py-6 border-b border-stone-900/5" 
              : "bg-surface/80 backdrop-blur-md py-8")
      )}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto relative z-50">
        <Link
          to="/"
          className="font-sans font-light tracking-[0.3em] text-lg text-on-surface uppercase"
          onClick={() => setIsOpen(false)}
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
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-10 px-12">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-sans uppercase tracking-[0.4em] text-xl transition-colors",
                      location.pathname === link.path ? "text-stone-900 font-medium" : "text-stone-400 hover:text-stone-900"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
