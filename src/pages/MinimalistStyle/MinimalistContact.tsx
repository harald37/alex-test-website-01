import React from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants";
import { Button } from "../../components/ui/Button";

export const MinimalistContact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = React.useState(false);
  
  // Form state
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    found: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Etwas ist schiefgelaufen. Bitte versuche es später erneut.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Verbindung zum Server fehlgeschlagen. Bitte prüfe deine Internetverbindung.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#f5f2ed] text-[#141414] min-h-screen pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#141414]/40 mb-8 block">Kontakt</span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-12 text-[#141414] leading-[0.9]">Sagt Hallo.</h1>
            <p className="mb-16 text-[#141414]/60 text-lg md:text-xl leading-relaxed max-w-md">
              Ich freue mich darauf, von euch zu hören. Füllt einfach das Formular aus oder kontaktiert mich direkt.
            </p>

            <div className="space-y-12">
              <a href="mailto:info@hochzeitsfotograf-alex.de" className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#1a2e26] group-hover:text-white transition-all">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Email</h4>
                  <span className="text-xl md:text-2xl font-serif italic">info@hochzeitsfotograf-alex.de</span>
                </div>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#1a2e26] group-hover:text-white transition-all">
                  <Instagram size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Instagram</h4>
                  <span className="text-xl md:text-2xl font-serif italic">@alexbegopoulos.weddings</span>
                </div>
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#1a2e26] group-hover:text-white transition-all">
                  <Facebook size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Facebook</h4>
                  <span className="text-xl md:text-2xl font-serif italic">Alex Begopoulos</span>
                </div>
              </a>
              <div className="flex items-center gap-8 group cursor-default">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">Standort</h4>
                  <span className="text-xl md:text-2xl font-serif italic">Hannover, Deutschland</span>
                </div>
              </div>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#1a2e26] group-hover:text-white transition-all">
                  <MessageCircle size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40 mb-1">WhatsApp</h4>
                  <span className="text-xl md:text-2xl font-serif italic">Direkt via WhatsApp</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-[#141414]/5 lg:mt-12"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-[#141414]/5 text-[#141414] rounded-full flex items-center justify-center mb-6">
                  <Send aria-label="Nachricht senden" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4 italic">Vielen Dank!</h3>
                <p className="text-[#141414]/60">
                  Deine Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei dir melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Eure Namen *</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" 
                      placeholder="Namen" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">E-Mail Adresse *</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" 
                      placeholder="E-Mail" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Telefonnummer *</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" 
                      placeholder="Telefon" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Hochzeitsdatum *</label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors font-sans" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Hochzeitslocation / Wo feiert ihr?</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors" 
                      placeholder="Ort / Location" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Wie habt ihr mich gefunden?</label>
                    <div className="relative">
                      <select 
                        name="found"
                        value={formData.found}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors font-sans cursor-pointer appearance-none"
                      >
                        <option value="" disabled className="text-[#141414]/40">Bitte wählen...</option>
                        <option value="Google Suche">Google Suche</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Pinterest">Pinterest</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Empfehlung">Empfehlung</option>
                        <option value="Sonstiges">Sonstiges</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#141414]/20">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#141414]/40">Eure Nachricht *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-[#141414]/10 py-4 outline-none focus:border-[#141414] transition-colors resize-none" 
                    placeholder="Eure Nachricht..." 
                  />
                </div>

                <div className="flex flex-col space-y-6">
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="privacy"
                      required
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#141414]/20 text-[#141414] focus:ring-[#141414]"
                    />
                    <label htmlFor="privacy" className="text-[10px] text-[#141414]/40 uppercase tracking-widest leading-relaxed">
                      Ich akzeptiere die <a href="/datenschutz" className="underline hover:text-[#141414]">Datenschutzbestimmungen</a> *
                    </label>
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#141414]/20">* Pflichtfelder</span>
                </div>

                <button 
                  type="submit"
                  disabled={!privacyAccepted || loading}
                  className="w-full bg-[#1a2e26] text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#141414] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Wird gesendet..." : "Nachricht senden"}
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
