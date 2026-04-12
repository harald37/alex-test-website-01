import React from "react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const HeroShowcase = () => {
  const portraitImages = [
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495567/braut-wird-von-braeutigam-umarmt-im-wald-uelzen.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495570/hochzeitspaar-blickt-richtung-maschsee-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495596/braut-steigt-aus-auto-standesamtliche-trauung-uelzen.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495595/braut-richtet-fliege-des-brautigams.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495593/brautpaar-paarshooting-im-feld.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495592/brautpaar-laueft-fotografen-entgegen-paarshooting-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495590/brautpaar-freie-trauung-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495587/braeutigam-tragt-die-braut-am-feldweg.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495586/braeutigam-schaut-braut-an-freie-trauung-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495582/shooting-braut-und-braeutigam-laecheln-sich-an-im-wald.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495581/sinnliches-portrait-brautpaar-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495580/portrait-braut-mit-brautstrauss-am-feldweg.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495566/detailshot-braut-und-braeutigam-halten-sich-die-haende-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495565/detailshot-braut-und-braeutigam-halten-haende-schloss-salder-salzgitter.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495562/close-up-bild-der-braut.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495560/close-up-braeutigam-freie-trauung-hannover.webp",
    "https://res.cloudinary.com/alexbegopoulos/image/upload/v1775495558/braut-und-braeutigam-halten-sich-die-hände-standesamt-schloss-salder-salzgitter.webp",
  ];

  return (
    <div className="bg-surface-container-lowest min-h-screen pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 mb-20">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-6">Hero Showcase</h1>
        <p className="font-sans text-zinc-500 uppercase tracking-widest text-sm max-w-2xl">
          40 kreative Einstiegs-Designs für deine Website. Jedes Design nutzt deine Hochkant-Paarbilder auf unterschiedliche Weise, optimiert für Smartphone und Desktop.
        </p>
      </div>

      <div className="space-y-40">
        {/* 1. Minimal Centered */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          <img src={portraitImages[0]} alt="Hero 1" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative text-center text-white space-y-8 px-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-8xl italic">Eure Geschichte</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="uppercase tracking-[0.4em] text-sm">In zeitlosen Bildern festgehalten</motion.p>
            <Button to="/kontakt" dark>Anfragen</Button>
          </div>
        </section>

        {/* 2. Split Screen */}
        <section className="min-h-screen grid md:grid-cols-2 bg-white">
          <div className="h-[60vh] md:h-screen">
            <img src={portraitImages[1]} alt="Hero 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-24 space-y-8">
            <span className="text-zinc-400 uppercase tracking-widest text-xs">Authentisch & Echt</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">Momente, die <br/><span className="italic">bleiben.</span></h2>
            <p className="text-zinc-500 max-w-md">Ich begleite euch an eurem großen Tag und fange die leisen Töne ein.</p>
            <Button to="/portfolio">Portfolio ansehen</Button>
          </div>
        </section>

        {/* 3. Overlapping Elements */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#f8f7f2] py-20">
          <div className="relative max-w-4xl w-full">
            <div className="w-full md:w-2/3 ml-auto aspect-[3/4] overflow-hidden shadow-2xl">
              <img src={portraitImages[2]} alt="Hero 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative md:absolute top-1/2 left-0 md:-translate-y-1/2 bg-white p-8 md:p-20 shadow-xl max-w-md mt-[-40px] md:mt-0 mx-4 md:mx-0">
              <h2 className="font-serif text-3xl md:text-5xl italic mb-6">Die Kunst des Fühlens</h2>
              <p className="text-zinc-500 mb-8">Es geht nicht darum, wie die Dinge aussehen, sondern darum, wie sie sich anfühlen.</p>
              <Button to="/ueber-mich">Über mich</Button>
            </div>
          </div>
        </section>

        {/* 4. Vertical Text Side */}
        <section className="h-screen flex bg-zinc-900 text-white overflow-hidden">
          <div className="hidden md:flex w-20 h-full border-r border-white/10 items-center justify-center">
            <span className="rotate-180 [writing-mode:vertical-lr] uppercase tracking-[0.5em] text-[10px] text-white/40">Alex Begopoulos Photography</span>
          </div>
          <div className="flex-1 relative">
            <img src={portraitImages[3]} alt="Hero 4" className="absolute inset-0 w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 space-y-6">
              <h2 className="font-serif text-5xl md:text-9xl italic">Stille <br/>Emotionen</h2>
              <Button to="/kontakt" dark>Jetzt Termin sichern</Button>
            </div>
          </div>
        </section>

        {/* 5. Editorial Large Serif */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-white py-20 px-6 overflow-hidden">
          <h2 className="font-serif text-[20vw] md:text-[15vw] leading-none mb-[-5vw] md:mb-[-2vw] z-10 text-zinc-900">ELEGANCE</h2>
          <div className="w-full max-w-[280px] md:max-w-lg aspect-[3/4] overflow-hidden relative">
            <img src={portraitImages[4]} alt="Hero 5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <p className="mt-8 md:mt-12 font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs text-zinc-400 text-center">Hochzeitsfotografie mit Herz & Seele</p>
        </section>

        {/* 6. Triple Grid */}
        <section className="min-h-screen bg-surface-container-lowest flex flex-col items-center justify-center px-6 py-20">
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-5xl w-full mb-12 md:mb-16">
            <div className="aspect-[3/4] overflow-hidden mt-6 md:mt-12">
              <img src={portraitImages[5]} alt="Grid 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img src={portraitImages[6]} alt="Grid 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12 md:mt-24">
              <img src={portraitImages[7]} alt="Grid 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl italic">Facetten der Liebe</h2>
            <Button to="/portfolio">Alle Stories</Button>
          </div>
        </section>

        {/* 7. Framed Image */}
        <section className="h-screen flex items-center justify-center bg-[#1a2e26] p-6">
          <div className="p-4 md:p-16 border border-white/20 relative">
            <div className="w-56 md:w-96 aspect-[3/4] overflow-hidden">
              <img src={portraitImages[8]} alt="Hero 7" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-10 text-zinc-900 shadow-2xl">
              <h2 className="font-serif text-2xl md:text-3xl italic">Zeitlos.</h2>
            </div>
          </div>
        </section>

        {/* 8. Dark Overlay with Side Text */}
        <section className="h-screen relative flex items-end justify-start p-8 md:p-32 overflow-hidden">
          <img src={portraitImages[9]} alt="Hero 8" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative text-white max-w-xl space-y-6">
            <h2 className="font-serif text-4xl md:text-7xl leading-tight">Eure Liebe, <br/>mein Fokus.</h2>
            <p className="text-white/60 text-sm md:text-base">Ich fange die Momente ein, die ihr vor lauter Aufregung gar nicht mitbekommt.</p>
            <Button to="/kontakt" dark>Kontakt aufnehmen</Button>
          </div>
        </section>

        {/* 9. Minimal White with Small Image */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 bg-white py-20">
          <div className="w-full max-w-[280px] md:max-w-sm aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img src={portraitImages[10]} alt="Hero 9" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="font-serif text-5xl md:text-6xl italic text-zinc-900">Pure <br/>Emotionen</h2>
            <div className="w-12 h-[1px] bg-zinc-200 mx-auto md:mx-0"></div>
            <p className="text-zinc-400 uppercase tracking-widest text-[10px]">Hannover & Weltweit</p>
            <Button to="/leistungen">Meine Leistungen</Button>
          </div>
        </section>

        {/* 10. Asymmetric Layout */}
        <section className="min-h-screen relative py-20 md:py-32 bg-[#f4f4f4]">
          <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative">
              <img src={portraitImages[11]} alt="Hero 10" className="w-full aspect-[4/5] object-cover shadow-2xl" referrerPolicy="no-referrer" />
              <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-zinc-900/5 -z-10" />
            </div>
            <div className="md:col-span-5 space-y-6 md:space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl italic leading-tight">Lasst uns <br/>Geschichte <br/>schreiben.</h2>
              <p className="text-zinc-500 text-sm md:text-base">Jede Hochzeit ist einzigartig. Genau so sollten auch eure Fotos sein.</p>
              <Button to="/kontakt">Erzählt mir mehr</Button>
            </div>
          </div>
        </section>

        {/* 11. Floating Text Box */}
        <section className="h-screen relative overflow-hidden">
          <img src={portraitImages[12]} alt="Hero 11" className="absolute inset-0 w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-24 text-center space-y-6 md:space-y-8 max-w-2xl shadow-2xl">
              <span className="text-zinc-400 uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Hochzeitsfotograf Alex Begopoulos</span>
              <h2 className="font-serif text-3xl md:text-6xl italic">Eure Liebe in Bildern</h2>
              <Button to="/portfolio">Portfolio entdecken</Button>
            </div>
          </div>
        </section>

        {/* 12. Text Behind Image Effect */}
        <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-[30vw] md:text-[25vw] font-serif text-zinc-50 select-none">LOVE</h2>
          </div>
          <div className="relative z-10 w-full max-w-[280px] md:max-w-md aspect-[3/4] shadow-2xl">
            <img src={portraitImages[13]} alt="Hero 12" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* 13. Double Image Layout */}
        <section className="min-h-screen flex items-center justify-center bg-surface-container-lowest px-6 py-20 md:py-32">
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 md:space-y-12">
              <h2 className="font-serif text-4xl md:text-6xl italic leading-tight">Zwei Seelen, <br/>ein Moment.</h2>
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img src={portraitImages[14]} alt="Hero 13a" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="pt-0 md:pt-24">
              <div className="w-full aspect-[3/4] overflow-hidden mb-8 md:mb-12">
                <img src={portraitImages[15]} alt="Hero 13b" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <Button to="/kontakt">Termin anfragen</Button>
            </div>
          </div>
        </section>

        {/* 14. Brutalist Bold */}
        <section className="min-h-screen bg-zinc-900 text-white p-4 md:p-6 flex flex-col">
          <div className="flex-1 border-2 md:border-4 border-white p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2 h-[50vh] md:h-full">
              <img src={portraitImages[16]} alt="Hero 14" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full md:w-1/2 space-y-8 md:space-y-12 text-center md:text-left">
              <h2 className="font-mono text-4xl md:text-8xl font-bold uppercase leading-none">RAW <br/>EMOTION</h2>
              <p className="font-mono text-white/60 text-xs md:text-sm">NO POSING. NO FAKES. JUST YOU.</p>
              <Button to="/portfolio" dark>VIEW WORK</Button>
            </div>
          </div>
        </section>

        {/* 15. Elegant Editorial Whitespace */}
        <section className="min-h-screen bg-white flex flex-col items-center justify-center py-20 md:py-40">
          <div className="w-full max-w-screen-xl px-6 grid md:grid-cols-3 gap-12 md:gap-20">
            <div className="md:col-span-1 flex flex-col justify-between py-0 md:py-12 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl italic">The Art of Wedding</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Capturing the essence of your most beautiful day with elegance and soul.</p>
              </div>
              <Button to="/kontakt">Inquire Now</Button>
            </div>
            <div className="md:col-span-2">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img src={portraitImages[17]} alt="Hero 15" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-6 right-6 md:top-10 md:right-10 text-white font-serif italic text-2xl md:text-4xl">2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* 16. Cinematic Letterbox */}
        <section className="h-screen bg-black flex items-center justify-center p-4 md:p-24">
          <div className="w-full h-full relative overflow-hidden group">
            <img src={portraitImages[0]} alt="Hero 16" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3s]" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
              <div className="flex justify-between items-start">
                <span className="text-white/40 font-mono text-[8px] md:text-xs tracking-widest uppercase">Scene 01 / The Beginning</span>
                <span className="text-white/40 font-mono text-[8px] md:text-xs tracking-widest uppercase">Alex Begopoulos</span>
              </div>
              <h2 className="text-white font-serif text-5xl md:text-[10vw] leading-none text-center italic">CINEMATIC</h2>
              <div className="flex justify-center">
                <Button to="/portfolio" dark>Watch Stories</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 17. Collage Style */}
        <section className="min-h-screen bg-[#faf9f6] py-20 md:py-32 px-6">
          <div className="max-w-screen-lg mx-auto relative h-[60vh] md:h-[80vh]">
            <div className="absolute top-0 left-0 w-2/3 md:w-1/2 aspect-[3/4] z-10 shadow-2xl rotate-[-3deg]">
              <img src={portraitImages[1]} alt="Collage 1" className="w-full h-full object-cover border-[6px] md:border-[12px] border-white" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2 aspect-[3/4] shadow-2xl rotate-[2deg]">
              <img src={portraitImages[2]} alt="Collage 2" className="w-full h-full object-cover border-[6px] md:border-[12px] border-white" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full">
              <h2 className="font-serif text-5xl md:text-8xl italic drop-shadow-lg">Memories</h2>
              <div className="mt-8">
                <Button to="/kontakt">Start Here</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 18. Floating Shadow */}
        <section className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="relative group">
            <div className="w-64 md:w-[500px] aspect-[3/4] overflow-hidden transition-transform duration-700 group-hover:-translate-y-4">
              <img src={portraitImages[3]} alt="Hero 18" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-zinc-900 text-white p-8 md:p-12 space-y-4">
              <h2 className="font-serif text-2xl md:text-4xl italic">Modern Soul</h2>
              <p className="text-white/40 text-[8px] md:text-xs uppercase tracking-widest">Wedding Photography</p>
            </div>
          </div>
        </section>

        {/* 19. Full Bleed Bottom Text */}
        <section className="h-screen relative overflow-hidden">
          <img src={portraitImages[4]} alt="Hero 19" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
            <h2 className="text-white font-serif text-6xl md:text-9xl italic leading-none">Forever.</h2>
            <div className="max-w-xs space-y-4 md:space-y-6 text-right">
              <p className="text-white/60 text-xs md:text-sm">Eure Geschichte verdient es, in ihrer reinsten Form erzählt zu werden.</p>
              <Button to="/kontakt" dark>Anfragen</Button>
            </div>
          </div>
        </section>

        {/* 20. Side-by-Side Center Text */}
        <section className="min-h-screen bg-white flex items-center justify-center py-20 md:py-32 px-6">
          <div className="max-w-screen-xl w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center">
            <div className="hidden md:block aspect-[3/4] overflow-hidden">
              <img src={portraitImages[5]} alt="Hero 20a" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-2 md:col-span-1 text-center space-y-8 md:space-y-12 order-first md:order-none">
              <div className="space-y-4">
                <span className="text-zinc-400 uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Est. 2015</span>
                <h2 className="font-serif text-4xl md:text-5xl italic">Alex <br/>Begopoulos</h2>
              </div>
              <div className="w-full aspect-[3/4] md:hidden overflow-hidden">
                <img src={portraitImages[6]} alt="Hero 20b mobile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <Button to="/portfolio">View Portfolio</Button>
            </div>
            <div className="hidden md:block aspect-[3/4] overflow-hidden">
              <img src={portraitImages[7]} alt="Hero 20c" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* --- NEW VARIANTS 21-40 --- */}

        {/* 21. Glassmorphism Center Card */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden p-6">
          <img src={portraitImages[8]} alt="Hero 21" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-24 text-center text-white max-w-2xl w-full">
            <h2 className="font-serif text-4xl md:text-7xl italic mb-6">Pure Liebe</h2>
            <p className="font-sans uppercase tracking-[0.3em] text-xs mb-10">In jedem Augenblick</p>
            <Button to="/kontakt" dark>Jetzt Anfragen</Button>
          </div>
        </section>

        {/* 22. Text Mask Style (Simulated with Overlay) */}
        <section className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center py-20 px-6">
          <div className="relative w-full max-w-4xl">
            <h2 className="text-[18vw] font-serif font-bold text-white leading-none text-center opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">STORY</h2>
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] shadow-2xl">
              <img src={portraitImages[9]} alt="Hero 22" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="mt-12 text-center space-y-6">
              <p className="text-white font-serif italic text-2xl">Eure Geschichte, mein Fokus.</p>
              <Button to="/portfolio" dark>Portfolio</Button>
            </div>
          </div>
        </section>

        {/* 23. Large Sidebar Text */}
        <section className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
          <div className="w-full md:w-1/3 p-12 md:p-24 flex flex-col justify-center space-y-8 order-2 md:order-1">
            <h2 className="font-serif text-5xl md:text-7xl italic leading-tight">Authentisch. <br/>Zeitlos.</h2>
            <p className="text-zinc-500 max-w-xs">Hochzeitsfotografie für Paare, die das Echte lieben.</p>
            <Button to="/ueber-mich">Über mich</Button>
          </div>
          <div className="w-full md:w-2/3 h-[60vh] md:h-screen order-1 md:order-2">
            <img src={portraitImages[10]} alt="Hero 23" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* 24. Floating Polaroid Stack */}
        <section className="min-h-screen bg-[#f9f9f9] flex items-center justify-center py-20 px-6 overflow-hidden">
          <div className="relative w-full max-w-lg h-[70vh]">
            <div className="absolute top-0 left-0 w-3/4 aspect-[3/4] bg-white p-4 shadow-xl rotate-[-6deg] z-10">
              <img src={portraitImages[11]} alt="P1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 aspect-[3/4] bg-white p-4 shadow-xl rotate-[4deg] z-20">
              <img src={portraitImages[12]} alt="P2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center bg-white/80 backdrop-blur p-8 shadow-2xl min-w-[200px]">
              <h2 className="font-serif text-3xl italic mb-4">Momente</h2>
              <Button to="/portfolio">Ansehen</Button>
            </div>
          </div>
        </section>

        {/* 25. Gradient Fade to Color */}
        <section className="h-screen relative flex items-center justify-end overflow-hidden">
          <img src={portraitImages[13]} alt="Hero 25" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent md:from-transparent md:via-black/20 md:to-black/80" />
          <div className="relative w-full md:w-1/2 p-12 md:p-32 text-white text-right space-y-8">
            <h2 className="font-serif text-5xl md:text-8xl italic">Das Leuchten</h2>
            <p className="uppercase tracking-[0.4em] text-xs opacity-60">In euren Augen</p>
            <div className="flex justify-end">
              <Button to="/kontakt" dark>Anfragen</Button>
            </div>
          </div>
        </section>

        {/* 26. Vertical Stripe Layout */}
        <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6 gap-12">
          <div className="hidden md:block text-right space-y-4">
            <h2 className="font-serif text-4xl italic">Eure</h2>
            <p className="text-zinc-400 uppercase tracking-widest text-[10px]">Hochzeit</p>
          </div>
          <div className="w-full max-w-sm aspect-[2/3] overflow-hidden shadow-2xl">
            <img src={portraitImages[14]} alt="Hero 26" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center md:text-left space-y-8">
            <div className="md:hidden space-y-4">
              <h2 className="font-serif text-4xl italic">Eure Hochzeit</h2>
            </div>
            <h2 className="font-serif text-4xl italic hidden md:block">Geschichte</h2>
            <p className="text-zinc-500 max-w-xs">Erzählt in Bildern, die auch nach Jahren noch berühren.</p>
            <Button to="/portfolio">Portfolio</Button>
          </div>
        </section>

        {/* 27. Circular Mask Reveal */}
        <section className="min-h-screen bg-[#1a2e26] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-64 md:w-[500px] aspect-square rounded-full overflow-hidden mb-12 border-4 border-white/10">
            <img src={portraitImages[15]} alt="Hero 27" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-6 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl italic text-white">Ein Blick sagt mehr.</h2>
            <Button to="/kontakt" dark>Jetzt Kennenlernen</Button>
          </div>
        </section>

        {/* 28. Double Border Frame */}
        <section className="min-h-screen flex items-center justify-center bg-white p-10">
          <div className="relative p-4 border border-zinc-100">
            <div className="p-4 border border-zinc-200">
              <div className="w-64 md:w-96 aspect-[3/4] overflow-hidden">
                <img src={portraitImages[16]} alt="Hero 28" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="absolute top-1/2 -right-12 md:-right-20 -translate-y-1/2 rotate-90">
              <span className="font-serif italic text-4xl md:text-6xl text-zinc-900 whitespace-nowrap">ALEX BEGOPOULOS</span>
            </div>
          </div>
        </section>

        {/* 29. Offset Grid with Large Text */}
        <section className="min-h-screen bg-surface-container-lowest py-32 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <img src={portraitImages[17]} alt="Hero 29" className="w-full aspect-[3/4] object-cover shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 w-full h-full border border-zinc-200 -z-10" />
            </div>
            <div className="space-y-10 order-1 md:order-2">
              <h2 className="font-serif text-6xl md:text-8xl italic leading-none">The <br/>Essence.</h2>
              <p className="text-zinc-500 max-w-sm">Fokus auf das Wesentliche. Eure Emotionen, ungestellt und echt.</p>
              <Button to="/leistungen">Leistungen</Button>
            </div>
          </div>
        </section>

        {/* 30. Soft Focus Background */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          <img src={portraitImages[0]} alt="Hero 30" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40" referrerPolicy="no-referrer" />
          <div className="relative z-10 flex flex-col items-center gap-12">
            <div className="w-48 md:w-72 aspect-[3/4] overflow-hidden shadow-2xl border-8 border-white">
              <img src={portraitImages[0]} alt="Hero 30 sharp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl italic">Fokus auf euch</h2>
              <Button to="/kontakt">Anfragen</Button>
            </div>
          </div>
        </section>

        {/* 31. Editorial Quote Style */}
        <section className="min-h-screen bg-white flex flex-col items-center justify-center py-32 px-6 text-center">
          <div className="max-w-4xl space-y-16">
            <span className="text-zinc-300 text-8xl font-serif leading-none">"</span>
            <h2 className="font-serif text-3xl md:text-6xl italic leading-relaxed text-zinc-800 -mt-12">
              Bilder sind die einzige Möglichkeit, die Zeit für einen Moment anzuhalten.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img src={portraitImages[1]} alt="Small" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <Button to="/portfolio">Meine Arbeiten</Button>
            </div>
          </div>
        </section>

        {/* 32. Minimalist Line Separation */}
        <section className="min-h-screen flex flex-col md:flex-row items-stretch bg-white">
          <div className="flex-1 relative h-[50vh] md:h-auto">
            <img src={portraitImages[2]} alt="Hero 32" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="w-[1px] bg-zinc-100 hidden md:block" />
          <div className="flex-1 p-12 md:p-32 flex flex-col justify-center space-y-10">
            <h2 className="font-serif text-5xl md:text-7xl italic">Einfach <br/>Schön.</h2>
            <p className="text-zinc-400 uppercase tracking-widest text-xs">Hochzeitsfotograf Hannover</p>
            <Button to="/kontakt">Kontakt</Button>
          </div>
        </section>

        {/* 33. Corner Image Layout */}
        <section className="min-h-screen bg-[#f8f7f2] relative overflow-hidden p-12 md:p-32">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h2 className="font-serif text-6xl md:text-[12vw] leading-none italic text-zinc-900/10">MOMENTS</h2>
            <div className="max-w-md space-y-8">
              <h3 className="font-serif text-4xl md:text-6xl italic">Eure Liebe, <br/>mein Auge.</h3>
              <Button to="/portfolio">Portfolio</Button>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2/3 md:w-1/3 aspect-[3/4] shadow-2xl">
            <img src={portraitImages[3]} alt="Hero 33" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* 34. Parallax-ish Scroll Reveal */}
        <section className="h-[150vh] relative bg-white">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <img src={portraitImages[4]} alt="Hero 34" className="absolute inset-0 w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
            <div className="relative z-10 text-center space-y-8">
              <h2 className="font-serif text-5xl md:text-9xl italic text-zinc-900">UNVERGESSLICH</h2>
              <p className="font-sans uppercase tracking-[0.5em] text-sm text-zinc-400">Jeder Kuss, jede Träne, jedes Lachen.</p>
              <Button to="/kontakt">Jetzt Anfragen</Button>
            </div>
          </div>
        </section>

        {/* 35. Bento Style Hero */}
        <section className="min-h-screen bg-white py-32 px-6">
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-[80vh] md:h-[60vh]">
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img src={portraitImages[5]} alt="Bento 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-end p-8">
                <h2 className="text-white font-serif text-3xl italic">Reportagen</h2>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img src={portraitImages[6]} alt="Bento 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="relative overflow-hidden group">
              <img src={portraitImages[7]} alt="Bento 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-2 bg-zinc-900 flex flex-col justify-center p-8 space-y-4">
              <h3 className="text-white font-serif italic text-2xl">Bereit für eure Story?</h3>
              <Button to="/kontakt" dark>Kontakt</Button>
            </div>
          </div>
        </section>

        {/* 36. Classic Centered High Contrast */}
        <section className="h-screen relative flex items-center justify-center bg-zinc-900">
          <img src={portraitImages[8]} alt="Hero 36" className="absolute inset-0 w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
          <div className="relative text-center space-y-12 px-6">
            <div className="space-y-4">
              <h2 className="text-white font-serif text-6xl md:text-9xl italic leading-none">Ewig.</h2>
              <p className="text-white/40 uppercase tracking-[0.6em] text-xs">Hochzeitsfotografie Alex Begopoulos</p>
            </div>
            <Button to="/portfolio" dark>Portfolio ansehen</Button>
          </div>
        </section>

        {/* 37. Side Navigation Style Hero */}
        <section className="h-screen flex bg-white overflow-hidden">
          <div className="w-1/4 h-full border-r border-zinc-100 flex flex-col justify-between p-12 hidden lg:flex">
            <div className="font-serif italic text-2xl">A.B.</div>
            <div className="space-y-6">
              <p className="text-zinc-400 text-xs uppercase tracking-widest leading-loose">
                Authentische Fotografie <br/>für eure Hochzeit in <br/>Hannover & Umgebung.
              </p>
              <Button to="/kontakt">Anfragen</Button>
            </div>
            <div className="text-[10px] text-zinc-300 uppercase tracking-widest">© 2026</div>
          </div>
          <div className="flex-1 relative">
            <img src={portraitImages[9]} alt="Hero 37" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="lg:hidden absolute bottom-10 left-6 right-6 bg-white/90 backdrop-blur p-8 text-center space-y-6">
              <h2 className="font-serif text-3xl italic">Authentisch & Echt</h2>
              <Button to="/kontakt">Anfragen</Button>
            </div>
          </div>
        </section>

        {/* 38. Overlapping Text with Border */}
        <section className="min-h-screen flex items-center justify-center bg-[#fcfcfc] py-32 px-6">
          <div className="relative max-w-4xl w-full">
            <div className="w-full md:w-3/4 aspect-[3/4] overflow-hidden border-[20px] border-white shadow-2xl">
              <img src={portraitImages[10]} alt="Hero 38" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative md:absolute -bottom-10 md:bottom-20 -right-4 md:-right-20 bg-zinc-900 text-white p-10 md:p-20 max-w-md space-y-6 mt-[-40px] md:mt-0">
              <h2 className="font-serif text-4xl md:text-6xl italic">Die Magie <br/>der Stille.</h2>
              <Button to="/portfolio" dark>Portfolio</Button>
            </div>
          </div>
        </section>

        {/* 39. Monochrome with Accent */}
        <section className="min-h-screen bg-white flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 h-[60vh] md:h-auto grayscale">
            <img src={portraitImages[11]} alt="Hero 39" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-32 flex flex-col justify-center space-y-12 bg-zinc-50">
            <h2 className="font-serif text-5xl md:text-7xl italic text-zinc-900">Zeitlose <br/>Eleganz.</h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed">Schwarz-Weiß Fotografie, die den Kern eurer Emotionen einfängt. Pur und unverfälscht.</p>
            <Button to="/kontakt">Jetzt Kennenlernen</Button>
          </div>
        </section>

        {/* 40. Full Height Reveal with Bottom Button */}
        <section className="h-screen relative overflow-hidden flex flex-col justify-between p-8 md:p-20">
          <img src={portraitImages[12]} alt="Hero 40" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-white font-serif text-4xl md:text-7xl italic drop-shadow-lg">Eure Reise beginnt hier.</h2>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="bg-white/10 backdrop-blur-xl p-10 md:p-16 text-center space-y-8 w-full max-w-xl">
              <p className="text-white font-sans uppercase tracking-[0.4em] text-xs">Bereit für unvergessliche Fotos?</p>
              <Button to="/kontakt" dark>Termin sichern</Button>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 mt-40 text-center border-t border-zinc-100 pt-20">
        <p className="font-serif italic text-2xl text-zinc-400 mb-8">Welches Design gefällt dir am besten?</p>
        <Button to="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
};

export default HeroShowcase;
