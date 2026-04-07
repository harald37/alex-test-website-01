import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Testimonials } from "../components/Testimonials";
import { ParallaxCTA } from "../components/ParallaxCTA";
import { ParallaxTestimonials } from "../components/ParallaxTestimonials";
import { GreenBannerTestimonials } from "../components/GreenBannerTestimonials";
import { TestimonialShowcase } from "../components/TestimonialShowcase";

export const TestimonialComparison = () => {
  return (
    <div className="pt-32 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans uppercase tracking-widest text-[10px]">Zurück zur Startseite</span>
        </Link>
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Design-Vergleich</h1>
          <p className="text-zinc-500">Hier sind die verschiedenen Testimonial-Stile und 10 neue Farbvarianten im Vergleich.</p>
        </div>
      </div>

      <div className="mb-32 border-t border-zinc-100 pt-32">
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">10 Neue Farbvarianten (Grün, Braun, Beige)</h2>
        <TestimonialShowcase />
      </div>
      
      <div className="mb-32">
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">1. Aktueller Standard (Variante 10)</h2>
        <Testimonials />
      </div>
      
      <div className="mt-32 border-t border-zinc-100 pt-32">
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">2. Parallax (Transparent + Dezente Umrandung)</h2>
        <ParallaxTestimonials />
      </div>

      <div className="mt-32 border-t border-zinc-100 pt-32">
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">3. Grüner Banner (SEO-Stil)</h2>
        <GreenBannerTestimonials />
      </div>

      <div className="mt-32 border-t border-zinc-100 pt-32">
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">Parallax CTA (Screenshot-Stil)</h2>
        <ParallaxCTA 
          image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920"
          topText="GET SHOPPING"
          title="Browse My Amazon Shop"
          description="A curated collection of my favorite books, photography, health, travel, beauty, fitness and eco-friendly home must-haves."
          buttonText="BROWSE MY AMAZON SHOP"
        />
      </div>
    </div>
  );
};
