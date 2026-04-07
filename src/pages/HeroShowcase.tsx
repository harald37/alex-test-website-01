import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Button } from '../components/ui/Button';
import { ChevronDown, Camera, Heart, MapPin } from 'lucide-react';

const Hero1 = () => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
    <div className="absolute inset-0 z-0">
      <img src={IMAGES.HERO} alt="" className="w-full h-full object-cover opacity-60 grayscale" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <span className="font-sans uppercase tracking-[0.6em] text-[10px] text-white/40 mb-8 block">Authentische Hochzeitsreportagen</span>
        <h1 className="font-sans uppercase tracking-[0.4em] text-4xl md:text-7xl text-white/90 mb-12 font-light">Alex Begopoulos</h1>
        <div className="w-12 h-[1px] bg-white/10 mx-auto mb-12" />
        <p className="font-serif italic text-xl md:text-3xl text-white/70 mb-16 max-w-2xl mx-auto">Authentische Momente & zeitlose Ästhetik</p>
        <Button to="/portfolio" dark>Portfolio entdecken</Button>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20">
      <ChevronDown className="animate-bounce" />
    </div>
  </section>
);

const Hero2 = () => (
  <section className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden">
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
      <motion.img 
        initial={{ scale: 1.1 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 10 }}
        src={IMAGES.HERO} 
        className="w-full h-full object-cover grayscale" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-zinc-50">
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
        <span className="font-sans uppercase tracking-[0.4em] text-[9px] text-zinc-400 mb-6 block">Hannover — Worldwide</span>
        <h1 className="font-serif italic text-5xl md:text-8xl text-zinc-900 mb-8 leading-none">Alex <br/>Begopoulos</h1>
        <p className="text-zinc-500 text-lg mb-12 max-w-md leading-relaxed">Hochzeitsfotograf für Paare, die Wert auf echte Emotionen und zeitlose Ästhetik legen.</p>
        <Button to="/portfolio">Portfolio ansehen</Button>
      </motion.div>
    </div>
  </section>
);

const Hero3 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-50 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
      <h1 className="font-serif italic text-[25vw] whitespace-nowrap text-zinc-900">Begopoulos</h1>
    </div>
    <div className="relative z-10 text-center max-w-4xl px-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <h1 className="font-sans uppercase tracking-[0.8em] text-2xl md:text-4xl text-zinc-900 mb-12 font-light">Alex Begopoulos</h1>
        <p className="font-serif italic text-3xl md:text-6xl text-zinc-800 mb-16 leading-tight">Eure Geschichte in zeitlosen Bildern erzählt.</p>
        <div className="flex flex-wrap justify-center gap-12 text-zinc-400">
          <div className="flex items-center gap-2"><Camera size={16} /><span className="text-[10px] uppercase tracking-widest">Reportage</span></div>
          <div className="flex items-center gap-2"><Heart size={16} /><span className="text-[10px] uppercase tracking-widest">Emotion</span></div>
          <div className="flex items-center gap-2"><MapPin size={16} /><span className="text-[10px] uppercase tracking-widest">Worldwide</span></div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Hero4 = () => (
  <section className="relative h-screen flex items-end pb-24 px-12 bg-zinc-900 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.2 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 20 }}
        src={IMAGES.HERO} 
        className="w-full h-full object-cover opacity-40" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
        <h1 className="font-sans uppercase tracking-[0.4em] text-5xl md:text-8xl text-white font-light mb-4">Alex</h1>
        <h1 className="font-sans uppercase tracking-[0.4em] text-5xl md:text-8xl text-white font-light">Begopoulos</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="max-w-md text-right">
        <p className="text-white/60 text-lg mb-8 italic font-serif">"Momente, die die Zeit überdauern."</p>
        <Button to="/portfolio" dark>Portfolio</Button>
      </motion.div>
    </div>
  </section>
);

const Hero5 = () => (
  <section className="relative h-screen bg-white flex items-center px-6 md:px-24 overflow-hidden">
    <div className="grid grid-cols-12 w-full gap-8 items-center">
      <div className="col-span-12 md:col-span-5 z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] text-zinc-400 mb-8 block">Hochzeitsfotograf Hannover</span>
          <h1 className="font-serif italic text-6xl md:text-9xl text-zinc-900 mb-12 leading-[0.8]">The <br/>Art of <br/>Love.</h1>
          <p className="text-zinc-500 text-lg mb-12 max-w-sm">Authentische Hochzeitsreportagen mit einem Auge für das Besondere.</p>
          <Button to="/contact">Termin anfragen</Button>
        </motion.div>
      </div>
      <div className="col-span-12 md:col-span-7 relative h-[70vh]">
        <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full h-full">
          <img src={IMAGES.HERO} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute -bottom-12 -left-12 w-64 h-80 bg-zinc-50 p-4 hidden md:block">
          <img src={IMAGES.STORIES[0].url} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const Hero6 = () => (
  <section className="relative h-screen flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src={IMAGES.HERO} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <span className="font-signature text-6xl md:text-9xl text-white/80 mb-[-2rem] md:mb-[-4rem] z-20 relative block">Alex</span>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.3 }}>
        <h1 className="font-sans uppercase tracking-[0.6em] text-4xl md:text-8xl text-white font-light border-y border-white/10 py-8 px-12">Begopoulos</h1>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 text-white/40 uppercase tracking-[0.4em] text-[10px]">Hochzeitsfotograf Hannover & Weltweit</motion.p>
    </div>
  </section>
);

const Hero7 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-50 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full flex flex-col">
      <div className="h-1/2 bg-zinc-900 w-full"></div>
      <div className="h-1/2 bg-white w-full"></div>
    </div>
    <div className="relative z-10 max-w-5xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
        <div className="aspect-[3/4] bg-zinc-200 overflow-hidden shadow-2xl">
          <img src={IMAGES.HERO} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="text-left md:pl-12">
        <h1 className="font-serif italic text-5xl md:text-7xl text-zinc-800 mb-8 leading-tight">Momente, <br/>die bleiben.</h1>
        <p className="text-zinc-500 text-lg mb-12">Alex Begopoulos — Euer Hochzeitsfotograf für authentische Reportagen in Hannover.</p>
        <Button to="/portfolio">Portfolio</Button>
      </motion.div>
    </div>
  </section>
);

const Hero8 = () => (
  <section className="relative h-screen flex bg-zinc-900 overflow-hidden">
    <div className="hidden md:flex w-24 h-full border-r border-white/10 flex-col items-center justify-center py-12">
      <span className="font-sans uppercase tracking-[0.6em] text-[8px] text-white/30 rotate-180 vertical-text">Wedding Photography</span>
    </div>
    <div className="flex-grow relative flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={IMAGES.HERO} className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>
          <h1 className="font-sans uppercase tracking-[0.5em] text-4xl md:text-8xl text-white font-thin mb-8">Begopoulos</h1>
          <p className="font-serif italic text-2xl md:text-4xl text-white/60 mb-12">Fine Art Wedding Photography</p>
          <div className="flex justify-center gap-8">
            <Button to="/portfolio" dark>Portfolio</Button>
            <Button to="/contact" variant="link" dark>Kontakt</Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Hero9 = () => (
  <section className="relative h-screen flex items-center justify-center bg-[#fdfcfb] overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src={IMAGES.HERO} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 text-center max-w-3xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-400 mb-12 block">Eure Geschichte beginnt hier</span>
        <h1 className="font-serif italic text-5xl md:text-8xl text-zinc-800 mb-12 leading-tight">Sanft. Echt. <br/>Zeitlos.</h1>
        <p className="text-zinc-500 text-lg mb-16 leading-relaxed">Hochzeitsfotografie mit Herz und Seele. Ich begleite euch an eurem wichtigsten Tag in Hannover und weltweit.</p>
        <Button to="/portfolio">Portfolio entdecken</Button>
      </motion.div>
    </div>
  </section>
);

const Hero10 = () => (
  <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
    <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-1 opacity-20">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-full border-r border-zinc-100"></div>
      ))}
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className="font-sans font-black uppercase text-6xl md:text-[12rem] text-zinc-900 leading-none tracking-tighter mb-8">ALEX B.</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <span className="font-sans uppercase tracking-[0.4em] text-xs text-zinc-500">Wedding</span>
          <span className="font-sans uppercase tracking-[0.4em] text-xs text-zinc-500">Portrait</span>
          <span className="font-sans uppercase tracking-[0.4em] text-xs text-zinc-500">Editorial</span>
        </div>
        <div className="mt-16">
          <Button to="/portfolio">View Work</Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Hero11 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-900 p-6 md:p-12 overflow-hidden">
    <div className="absolute inset-0 border-[20px] md:border-[40px] border-white/5 z-20 pointer-events-none" />
    <div className="relative w-full h-full overflow-hidden">
      <img src={IMAGES.HERO} className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
          <h1 className="font-sans uppercase tracking-[0.8em] text-2xl md:text-5xl text-white mb-8">Alex Begopoulos</h1>
          <p className="font-serif italic text-lg md:text-2xl text-white/40">The Art of Storytelling</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Hero12 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-50 overflow-hidden">
    <motion.div 
      initial={{ filter: 'blur(20px)', opacity: 0 }} 
      animate={{ filter: 'blur(0px)', opacity: 1 }} 
      transition={{ duration: 2 }}
      className="text-center z-10"
    >
      <h1 className="font-signature text-7xl md:text-[10rem] text-zinc-900 mb-4">Alex</h1>
      <h2 className="font-sans uppercase tracking-[0.5em] text-xl md:text-3xl text-zinc-400 font-light">Begopoulos</h2>
      <div className="mt-12">
        <Button to="/portfolio" variant="link">Portfolio</Button>
      </div>
    </motion.div>
    <div className="absolute inset-0 opacity-10">
      <img src={IMAGES.HERO} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
  </section>
);

const Hero13 = () => (
  <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden px-6">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-zinc-50 select-none pointer-events-none">A</div>
    <div className="relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
        <h1 className="font-sans uppercase tracking-[0.4em] text-4xl md:text-7xl text-zinc-900 mb-8">Alex Begopoulos</h1>
        <p className="font-serif italic text-xl md:text-3xl text-zinc-500 mb-12">Hannover — Worldwide</p>
        <Button to="/portfolio">Explore</Button>
      </motion.div>
    </div>
  </section>
);

const Hero14 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
    <div className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full overflow-hidden border border-white/10">
      <motion.img 
        initial={{ scale: 1.2 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 10 }}
        src={IMAGES.HERO} 
        className="w-full h-full object-cover grayscale" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="text-center">
        <h1 className="font-sans uppercase tracking-[1em] text-xl md:text-4xl text-white mix-blend-difference">Alex Begopoulos</h1>
      </motion.div>
    </div>
  </section>
);

const Hero15 = () => (
  <section className="relative h-screen flex flex-col md:flex-row bg-zinc-50 overflow-hidden gap-4 p-4">
    {[IMAGES.HERO, IMAGES.STORIES[0].url, IMAGES.STORIES[1].url].map((url, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: i * 0.2, duration: 1 }}
        className="flex-grow h-full relative group overflow-hidden"
      >
        <img src={url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
        {i === 1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-center p-6">
            <div>
              <h1 className="font-sans uppercase tracking-[0.4em] text-2xl md:text-4xl mb-4">Alex Begopoulos</h1>
              <p className="text-xs uppercase tracking-widest opacity-70">Wedding Photography</p>
            </div>
          </div>
        )}
      </motion.div>
    ))}
  </section>
);

const Hero16 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
    <div className="relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <h1 className="font-sans uppercase tracking-[0.6em] text-3xl md:text-6xl text-amber-100/90 font-thin mb-8">Alex Begopoulos</h1>
        <div className="w-24 h-[1px] bg-amber-100/20 mx-auto mb-12" />
        <p className="font-serif italic text-xl md:text-3xl text-amber-100/40 mb-16">Elegance in every frame.</p>
        <Button to="/portfolio" dark>Explore Portfolio</Button>
      </motion.div>
    </div>
    <div className="absolute inset-0 opacity-30">
      <img src={IMAGES.HERO} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
    </div>
  </section>
);

const Hero17 = () => (
  <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
    <div className="w-full max-w-xs md:max-w-md text-center space-y-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <span className="font-sans uppercase tracking-[0.4em] text-[8px] text-zinc-400 block mb-8">Est. 2018</span>
        <h1 className="font-sans uppercase tracking-[0.2em] text-5xl md:text-7xl text-zinc-900 font-bold leading-none">ALEX <br/>BEGO <br/>POULOS</h1>
        <div className="pt-12">
          <p className="text-zinc-500 text-sm leading-relaxed tracking-widest uppercase">Hannover — Worldwide</p>
        </div>
      </motion.div>
    </div>
    <div className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50 hidden md:block"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-zinc-50 hidden md:block"></div>
  </section>
);

const Hero18 = () => (
  <section className="relative h-screen flex items-center justify-center bg-zinc-100 overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.HERO} className="w-full h-full object-cover grayscale opacity-20" referrerPolicy="no-referrer" />
    </div>
    <motion.div 
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }} 
      transition={{ duration: 1.5 }}
      className="relative z-10 bg-white/40 border border-white/20 p-12 md:p-24 rounded-sm shadow-2xl max-w-2xl text-center"
    >
      <h1 className="font-sans uppercase tracking-[0.4em] text-3xl md:text-5xl text-zinc-900 mb-8">Alex Begopoulos</h1>
      <p className="font-serif italic text-lg md:text-2xl text-zinc-700 mb-12 leading-relaxed">Authentische Hochzeitsreportagen für Paare, die das Besondere lieben.</p>
      <Button to="/portfolio">Portfolio</Button>
    </motion.div>
  </section>
);

const Hero19 = () => (
  <section className="relative h-screen flex items-center justify-center bg-[#f2f2f2] overflow-hidden p-8">
    <div className="relative w-full h-full border border-zinc-300 flex items-center justify-center">
      <div className="absolute top-8 left-8 font-sans uppercase tracking-widest text-[10px] text-zinc-400">Alex Begopoulos</div>
      <div className="absolute bottom-8 right-8 font-sans uppercase tracking-widest text-[10px] text-zinc-400">Wedding Photography</div>
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }} className="max-w-xl text-center">
        <h1 className="font-serif italic text-5xl md:text-8xl text-zinc-800 mb-8">Zeitlose <br/>Momente.</h1>
        <p className="text-zinc-500 mb-12 tracking-wide">In Hannover und überall dort, wo eure Geschichte geschrieben wird.</p>
        <Button to="/portfolio" variant="link">Portfolio</Button>
      </motion.div>
    </div>
  </section>
);

const Hero20 = () => (
  <section className="relative h-screen flex bg-white overflow-hidden">
    <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-12 md:p-24">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-400">Hannover — Worldwide</span>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
        <h1 className="font-sans uppercase tracking-[0.2em] text-4xl md:text-7xl text-zinc-900 font-light mb-8 leading-tight">Authentische <br/>Fotografie.</h1>
        <p className="text-zinc-500 text-lg mb-12 max-w-sm">Alex Begopoulos fängt eure Geschichte in zeitlosen Bildern ein.</p>
        <Button to="/portfolio">Portfolio</Button>
      </motion.div>
      <div className="hidden md:block"></div>
    </div>
    <div className="hidden md:block w-1/2 h-full relative">
      <img src={IMAGES.HERO} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
    </div>
  </section>
);

export const HeroShowcase = () => {
  return (
    <div className="bg-white">
      <div className="fixed top-24 left-6 z-50 bg-black/80 text-white p-4 rounded-lg backdrop-blur-md border border-white/10 hidden lg:block">
        <p className="text-[10px] uppercase tracking-widest mb-2 text-white/50">Navigation</p>
        <nav className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-2">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(i => (
            <a key={i} href={`#hero-${i}`} className="text-xs hover:text-zinc-400 transition-colors">Design {i}</a>
          ))}
        </nav>
      </div>

      <div id="hero-1"><Hero1 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 01 — Classic Minimalist</div>
      
      <div id="hero-2"><Hero2 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 02 — Editorial Split</div>
      
      <div id="hero-3"><Hero3 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 03 — Typography Focused</div>
      
      <div id="hero-4"><Hero4 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 04 — Cinematic Fullscreen</div>
      
      <div id="hero-5"><Hero5 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 05 — Asymmetric Grid</div>
      
      <div id="hero-6"><Hero6 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 06 — Modern Signature</div>
      
      <div id="hero-7"><Hero7 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 07 — Parallax Depth</div>
      
      <div id="hero-8"><Hero8 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 08 — Vertical Layout</div>
      
      <div id="hero-9"><Hero9 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 09 — Soft & Dreamy</div>
      
      <div id="hero-10"><Hero10 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 10 — Bold & Brutalist</div>

      <div id="hero-11"><Hero11 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 11 — The Frame</div>

      <div id="hero-12"><Hero12 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 12 — Motion Blur</div>

      <div id="hero-13"><Hero13 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 13 — The Initial</div>

      <div id="hero-14"><Hero14 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 14 — Organic Shapes</div>

      <div id="hero-15"><Hero15 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 15 — The Triptych</div>

      <div id="hero-16"><Hero16 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 16 — Luxury Gold</div>

      <div id="hero-17"><Hero17 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 17 — The Column</div>

      <div id="hero-18"><Hero18 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 18 — Glassmorphism</div>

      <div id="hero-19"><Hero19 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 19 — Analog Film</div>

      <div id="hero-20"><Hero20 /></div>
      <div className="py-12 bg-zinc-100 text-center font-sans uppercase tracking-widest text-[10px] text-zinc-400">Design 20 — Minimalist Path</div>
    </div>
  );
};
