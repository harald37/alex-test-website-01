import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const NewStyleLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/new-style" },
    { label: "Portfolio", path: "/new-style/portfolio" },
    { label: "Über Mich", path: "/new-style/about" },
    { label: "Leistungen", path: "/new-style/services" },
    { label: "FAQ", path: "/new-style/faq" },
    { label: "Kontakt", path: "/new-style/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f2ed] text-[#141414] font-sans selection:bg-[#a0522d] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/new-style" className="font-serif text-2xl italic tracking-tighter">Alex Begopoulos</Link>
        
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`hover:opacity-50 transition-opacity ${location.pathname === item.path ? 'text-[#a0522d]' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1a2e26] z-[110] flex flex-col p-12"
          >
            <div className="flex justify-end mb-20">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-serif text-4xl italic text-left"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2e26] text-white py-24 px-6 md:px-24">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-serif text-3xl italic">Alex Begopoulos</div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-white/40">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
            ))}
          </div>
          <div className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Alex Begopoulos
          </div>
        </div>
      </footer>
    </div>
  );
};
