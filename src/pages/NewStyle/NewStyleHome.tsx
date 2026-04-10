import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { HomePortfolioGrid } from '../../components/HomePortfolioGrid';
import { IMAGES } from '../../constants';

export const NewStyleHome: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#f5f2ed] text-[#141414]">
      {/* Hero Section */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2560/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp" 
            alt="Elegante Hochzeitsreportage Hannover" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col items-center md:items-start justify-end text-center md:text-left px-6 md:px-24 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs text-white/60 mb-8 block">
              Hochzeitsfotograf Hannover
            </h1>
            
            <h2 className="font-serif italic text-4xl md:text-7xl lg:text-8xl text-white mb-12 leading-[0.9] max-w-4xl">
              Eure Geschichte,<br />zeitlos erzählt.
            </h2>

            <button className="bg-[#a0522d] text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform">
              Termin anfragen
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 hidden md:block">
          <div className="flex flex-col items-center gap-4">
            <span className="writing-mode-vertical text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
            <div className="w-px h-20 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 80] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-32 md:py-48 px-6 md:px-24 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-12 block">Meine Philosophie</span>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif italic text-3xl md:text-6xl text-[#141414] leading-tight mb-24 max-w-4xl mx-auto">
              Ich fange die Momente ein, die euren Tag unvergesslich machen. Ungestellt, ehrlich und mit einem Auge für das besondere Detail.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-24 text-left">
            <div className="space-y-6">
              <span className="font-serif text-3xl italic text-[#a0522d]">01.</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">Authentizität</p>
              <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
                Kein steifes Posing. Ich begleite euch als stiller Beobachter und fange die Momente ein, wie sie wirklich passieren – ungestellt und ehrlich.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-serif text-3xl italic text-[#a0522d]">02.</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">Diskretion</p>
              <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
                An eurem Tag bin ich Teil der Gesellschaft, nicht der Regisseur. So entstehen Bilder von euren Liebsten, die sich völlig unbeobachtet fühlen.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-serif text-3xl italic text-[#a0522d]">03.</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#141414]">Zeitlosigkeit</p>
              <p className="text-[#141414]/70 leading-relaxed tracking-wide text-sm md:text-base">
                Trends kommen und gehen. Mein Fine-Art Stil sorgt dafür, dass eure Bilder auch in 30 Jahren noch modern und elegant wirken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <div className="bg-white rounded-[4rem] mx-4 md:mx-8 overflow-hidden shadow-sm">
        <HomePortfolioGrid />
      </div>

      {/* About Me Short */}
      <section className="py-32 md:py-48 px-6 md:px-24">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
          >
            <img 
              src={IMAGES.ABOUT} 
              alt="Alex Begopoulos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div>
              <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-6 block">Der Fotograf</span>
              <h2 className="font-serif italic text-4xl md:text-7xl text-[#141414] leading-tight mb-8">Hallo, ich bin Alex.</h2>
              <p className="text-[#141414]/70 text-lg md:text-xl leading-relaxed mb-12">
                Ich liebe es, echte Emotionen und ungestellte Momente einzufangen. In Hannover und Umgebung bin ich seit Jahren als Hochzeitsfotograf tätig und kenne die schönsten Plätze für eure Geschichte.
              </p>
              <Link 
                to="/new-style/about" 
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Mehr über mich erfahren</span>
                <div className="w-12 h-12 rounded-full border border-[#141414]/10 flex items-center justify-center group-hover:bg-[#1a2e26] group-hover:text-white transition-all">
                  <ChevronDown className="-rotate-90" size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Deep Forest Section */}
      <section className="bg-[#1a2e26] text-white py-32 md:py-48 px-6 md:px-24 rounded-[4rem] mx-4 md:mx-8 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-[#a0522d] mb-12 block">Was Paare sagen</span>
          <h2 className="font-serif italic text-3xl md:text-6xl leading-tight mb-16">
            "Alex hat unseren Tag perfekt eingefangen. Wir haben uns zu jeder Zeit wohlgefühlt und die Bilder sind einfach magisch."
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-widest">— Sarah & Christian</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-5xl text-[#141414] leading-relaxed mb-16">
            "Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen."
          </h2>
          <div className="flex justify-center">
            <button className="bg-[#a0522d] text-white px-12 py-6 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform">
              Erzählt mir eure Geschichte
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
