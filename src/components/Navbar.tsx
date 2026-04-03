import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Camera, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="w-8 h-8 text-stone-800 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-serif tracking-tight text-stone-900">Alex Begopoulos</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-widest uppercase transition-colors hover:text-stone-500",
                  location.pathname === link.path ? "text-stone-900" : "text-stone-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-200 py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium tracking-widest uppercase py-2",
                  location.pathname === link.path ? "text-stone-900" : "text-stone-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
