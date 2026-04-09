import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ParallaxCTAProps {
  image: string;
  topText?: string;
  title: string;
  description: string;
  buttonText: string;
  link?: string;
}

export const ParallaxCTA = ({ 
  image, 
  topText = "GET SHOPPING", 
  title, 
  description, 
  buttonText,
  link = "#"
}: ParallaxCTAProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: image moves slightly slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image} 
          alt="Parallax Background" 
          className="w-full h-[120%] object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-2xl px-6 text-center space-y-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs text-white/90 block"
        >
          {topText}
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white"
        >
          {title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8"
        >
          <a 
            href={link}
            className="inline-flex items-center gap-4 px-8 py-4 border border-white/40 text-white font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-zinc-900 transition-all duration-500 group"
          >
            {buttonText}
            <ArrowRight aria-label="Weiter" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={1} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
