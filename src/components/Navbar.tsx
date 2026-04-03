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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
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
            className="md:hidden text-on-surface p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-10 px-12">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-sans uppercase tracking-[0.4em] text-2xl transition-colors",
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
    </>
  );
};
