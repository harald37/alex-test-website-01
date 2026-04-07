import React from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import { Button } from "../components/ui/Button";

export const Contact = () => {
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
    <div className="bg-surface min-h-screen pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-8 block">Kontakt</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 text-zinc-900 leading-tight">Lasst uns <br /> sprechen</h1>
            <p className="mb-16 text-zinc-600 text-base md:text-lg leading-relaxed tracking-wide max-w-md">
              Egal ob es um eure Hochzeit, ein Porträt-Shooting oder ein kreatives Projekt geht – 
              ich freue mich darauf, von euch zu hören. Füllt einfach das Formular aus 
              oder kontaktiert mich direkt.
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Email</h4>
                  <a href="mailto:info@hochzeitsfotograf-alex.de" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">info@hochzeitsfotograf-alex.de</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <MessageCircle className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">WhatsApp</h4>
                  <div className="flex flex-col space-y-3">
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">Direkt via WhatsApp</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Instagram</h4>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">alexbegopoulos.weddings</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-colors duration-500">
                  <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] text-zinc-400 mb-2">Facebook</h4>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl md:text-2xl text-zinc-900 hover:text-zinc-500 transition-colors">Alex Begopoulos</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:mt-12"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Vielen Dank!</h3>
                <p>
                  Deine Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei dir melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="Eure Namen"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="eure@email.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Telefonnummer</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="Eure Telefonnummer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Hochzeitsdatum</label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all font-sans ${formData.date ? 'text-zinc-600' : 'text-zinc-400'}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Hochzeitslocation (optional)</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all"
                      placeholder="Wo feiert ihr?"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Wie habt ihr mich gefunden? (optional)</label>
                    <div className="relative">
                      <select 
                        name="found"
                        value={formData.found}
                        onChange={handleChange}
                        className={`w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all appearance-none font-sans cursor-pointer ${formData.found ? 'text-zinc-600' : 'text-zinc-400'}`}
                      >
                        <option value="" disabled>Bitte wählen...</option>
                        <option>Google Suche</option>
                        <option>Instagram</option>
                        <option>Pinterest</option>
                        <option>Facebook</option>
                        <option>Empfehlung von Freunden</option>
                        <option>Hochzeitsportal</option>
                        <option>Sonstiges</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Nachricht</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all resize-none"
                    placeholder="Erzählt mir von euren Plänen..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                  />
                  <label htmlFor="privacy" className="text-xs text-zinc-500 leading-relaxed">
                    Ich akzeptiere die <a href="/datenschutz" className="underline hover:text-zinc-900">Datenschutzbestimmungen</a> und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={!privacyAccepted || loading}
                  className="w-full"
                >
                  <span>{loading ? "Wird gesendet..." : "Nachricht senden"}</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
