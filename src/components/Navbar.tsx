import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";
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
          "fixed top-0 w-full z-[100] transition-all duration-700",
          isOpen
            ? "bg-transparent py-8"
            : isScrolled
              ? "bg-surface/95 backdrop-blur-xl py-5 border-b border-zinc-900/5" 
              : location.pathname === '/' 
                ? "bg-transparent py-8" 
                : "bg-surface/80 backdrop-blur-md py-8"
        )}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto relative z-[100]">
          <Link
            to="/"
            className={cn(
              "tracking-[0.4em] text-lg uppercase transition-colors duration-500",
              !isScrolled && !isOpen && location.pathname === '/' ? "text-white" : "text-zinc-900"
            )}
            onClick={() => setIsOpen(false)}
          >
            ALEX BEGOPOULOS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              const isHero = !isScrolled && !isOpen && location.pathname === '/';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-sans uppercase tracking-[0.2em] text-[10px] transition-all duration-500 pb-1 border-b",
                    isActive
                      ? isHero ? "text-white border-white" : "text-zinc-900 border-zinc-900"
                      : isHero ? "text-white/60 border-transparent hover:text-white" : "text-zinc-400 border-transparent hover:text-zinc-900"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 focus:outline-none transition-colors duration-500",
              !isScrolled && !isOpen && location.pathname === '/' ? "text-white" : "text-zinc-900"
            )}
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
            className="md:hidden fixed inset-0 bg-surface-container-lowest z-[90] flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-10 px-12 pt-32 pb-16">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-serif italic tracking-[0.05em] text-4xl transition-colors duration-500",
                      location.pathname === link.path ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-900"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Socials */}
            <motion.div 
              variants={itemVariants}
              className="px-12 py-16 border-t border-zinc-900/5 flex flex-col items-center space-y-8"
            >
              <div className="flex items-center space-x-8">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </a>
                <a href={SOCIAL_LINKS.phone} className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </a>
              </div>
              <span className="font-sans uppercase tracking-[0.2em] text-[8px] text-zinc-300">
                © {new Date().getFullYear()} ALEX BEGOPOULOS
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
