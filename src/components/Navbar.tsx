import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Phone, MessageCircle, Mail } from "lucide-react";
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
          "fixed top-0 w-full z-[100] transition-[padding,background-color,backdrop-filter] duration-500",
          isOpen
            ? "bg-transparent py-8"
            : isScrolled
              ? "bg-surface/95 backdrop-blur-xl py-5" 
              : location.pathname === '/' 
                ? "bg-transparent py-8" 
                : "bg-surface/80 backdrop-blur-md py-8"
        )}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto relative z-[100]">
          {/* Mobile Toggle Placeholder to keep logo centered */}
          <div className="lg:hidden w-10" />

          <Link
            to="/"
            className={cn(
              "flex flex-col lg:flex-row items-center transition-colors duration-500 absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0",
              isOpen || (!isScrolled && location.pathname === '/') ? "text-white" : "text-zinc-900"
            )}
            onClick={() => setIsOpen(false)}
          >
            <span className="tracking-[0.6em] text-xs md:text-lg uppercase leading-none mb-1 lg:mb-0 lg:mr-4">ALEX</span>
            <span className="tracking-[0.6em] text-xs md:text-lg uppercase leading-none">BEGOPOULOS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-12 ml-auto pl-12">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                const isHero = !isScrolled && !isOpen && location.pathname === '/';
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "font-sans uppercase tracking-[0.2em] text-[10px] transition-all duration-500 pb-1 border-b whitespace-nowrap",
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

            <div className="w-[1px] h-4 bg-zinc-200/20 mx-2" />

            <div className="flex items-center space-x-6">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "transition-colors duration-500",
                  !isScrolled && !isOpen && location.pathname === '/' ? "text-white/60 hover:text-white" : "text-zinc-400 hover:text-zinc-900"
                )}
              >
                <Instagram aria-label="Instagram Profil" size={16} strokeWidth={1.5} />
              </a>
              <a 
                href={SOCIAL_LINKS.email} 
                className={cn(
                  "transition-colors duration-500",
                  !isScrolled && !isOpen && location.pathname === '/' ? "text-white/60 hover:text-white" : "text-zinc-400 hover:text-zinc-900"
                )}
              >
                <Mail aria-label="E-Mail schreiben" size={16} strokeWidth={1.5} />
              </a>
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "transition-colors duration-500",
                  !isScrolled && !isOpen && location.pathname === '/' ? "text-white/60 hover:text-white" : "text-zinc-400 hover:text-zinc-900"
                )}
              >
                <MessageCircle aria-label="WhatsApp Nachricht senden" size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 focus:outline-none transition-colors duration-500 relative z-[110]",
              isOpen || (!isScrolled && location.pathname === '/') ? "text-white" : "text-zinc-900"
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
                {isOpen ? <X aria-label="Schließen" size={28} strokeWidth={1.5} /> : <Menu aria-label="Menü öffnen" size={28} strokeWidth={1.5} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
        
        {/* Border Line - Absolute to prevent layout shifts */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[1px] transition-colors duration-500",
            isScrolled && !isOpen ? "bg-zinc-100" : "bg-transparent"
          )} 
        />
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-0 bg-[#1a2e26] z-[90] flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-12 pt-20">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-sans uppercase tracking-[0.6em] text-sm transition-all duration-700",
                      location.pathname === link.path ? "text-white" : "text-white/40 hover:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Socials */}
            <div className="px-12 py-12 flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-8">
                <motion.a variants={itemVariants} href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <Instagram aria-label="Instagram Profil" size={18} strokeWidth={1.2} />
                </motion.a>
                <motion.a variants={itemVariants} href={SOCIAL_LINKS.email} className="text-white/40 hover:text-white transition-colors">
                  <Mail aria-label="E-Mail schreiben" size={18} strokeWidth={1.2} />
                </motion.a>
                <motion.a variants={itemVariants} href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <MessageCircle aria-label="WhatsApp Nachricht senden" size={18} strokeWidth={1.2} />
                </motion.a>
              </div>
              <motion.span variants={itemVariants} className="font-sans uppercase tracking-[0.2em] text-[7px] text-white/20">
                © {new Date().getFullYear()} ALEX BEGOPOULOS
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
