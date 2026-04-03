import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-6">Alex Begopoulos</h3>
            <p className="text-stone-400 leading-relaxed">
              Capturing the essence of life's most beautiful moments through a lens of elegance and authenticity.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase text-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stone-500" />
                <span>hello@alexbegopoulos.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-500" />
                <span>+49 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-stone-500" />
                <span>Berlin, Deutschland</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase text-white mb-6">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Alex Begopoulos Photography. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
