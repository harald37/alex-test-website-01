import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { cn } from "../lib/utils";

// Import all test components
import { TestimonialComparison } from "./TestimonialComparison";
import HeroShowcase from "./HeroShowcase";
import HeroVariants from "./HeroVariants";
import MenuComparison from "./MenuComparison";
import LogoShowcase from "./LogoShowcase";
import ButtonShowcase from "./ButtonShowcase";
import ButtonTest from "./ButtonTest";
import SEOTest from "./SEOTest";
import HeroLayoutTest from "./HeroLayoutTest";
import ScrollIndicatorTest from "./ScrollIndicatorTest";
import { TestIntros } from "./TestIntros";
import { TestHome } from "./TestHome";
import { HomeTest } from "./HomeTest";
import { HomeTest2 } from "./HomeTest2";
import { HomeVariantsShowcase } from "./HomeVariantsShowcase";
import { QuoteVariants } from "./QuoteVariants";
import { CopyVariants } from "./CopyVariants";
import { FAQVariants } from "./FAQVariants";
import { FAQVariantsMore } from "./FAQVariantsMore";
import { FAQVariantsEvenMore } from "./FAQVariantsEvenMore";
import { FAQCategoryVariants } from "./FAQCategoryVariants";
import { ContactVariants } from "./ContactVariants";
import { ContactVariantsMore } from "./ContactVariantsMore";
import { AboutVariants } from "./AboutVariants";
import { AboutVariantsMore } from "./AboutVariantsMore";

const TEST_PAGES = [
  { id: "testimonials", label: "Testimonials", component: TestimonialComparison },
  { id: "hero-showcase", label: "Hero Showcase", component: HeroShowcase },
  { id: "hero-variants", label: "Hero Varianten", component: HeroVariants },
  { id: "menu", label: "Menü Vergleich", component: MenuComparison },
  { id: "logos", label: "Logo Varianten", component: LogoShowcase },
  { id: "buttons", label: "Button Varianten", component: ButtonShowcase },
  { id: "button-test", label: "Button Test", component: ButtonTest },
  { id: "seo", label: "SEO Strategie", component: SEOTest },
  { id: "hero-layout", label: "Hero Layout", component: HeroLayoutTest },
  { id: "scroll", label: "Scroll Indicator", component: ScrollIndicatorTest },
  { id: "intros", label: "Subpage Intros", component: TestIntros },
  { id: "home-intros", label: "Home Intros", component: TestHome },
  { id: "home-test", label: "Home Test", component: HomeTest },
  { id: "home-test-2", label: "Home Test 2", component: HomeTest2 },
  { id: "hero-15", label: "Hero (15)", component: HomeVariantsShowcase },
  { id: "quotes", label: "Zitate (30)", component: QuoteVariants },
  { id: "copy", label: "Texte (30)", component: CopyVariants },
  { id: "faq-cats", label: "FAQ Kategorien (1-5)", component: FAQVariants },
  { id: "faq-cats-more", label: "FAQ Kategorien (6-15)", component: FAQVariantsMore },
  { id: "faq-cats-even-more", label: "FAQ Kategorien (16-25)", component: FAQVariantsEvenMore },
  { id: "faq-cat-layouts", label: "FAQ Kategorie-Layouts (10)", component: FAQCategoryVariants },
  { id: "contact-variants", label: "Kontaktformulare (1-10)", component: ContactVariants },
  { id: "contact-variants-more", label: "Kontaktformulare (11-25)", component: ContactVariantsMore },
  { id: "about-variants", label: "Über Mich (1-10)", component: AboutVariants },
  { id: "about-variants-more", label: "Über Mich (11-20)", component: AboutVariantsMore },
];

export const TestCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get("tab") || TEST_PAGES[0].id;
  
  const activePage = TEST_PAGES.find(p => p.id === activeTabId) || TEST_PAGES[0];

  const setActiveTab = (id: string) => {
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation Bar */}
      <div className="fixed top-[72px] md:top-[88px] left-0 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 z-[90] overflow-x-auto no-scrollbar transition-all duration-500">
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center h-14 gap-8">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-zinc-400 whitespace-nowrap border-r border-zinc-100 pr-8 mr-2">
            Test Center
          </span>
          <div className="flex items-center gap-6 h-full">
            {TEST_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => setActiveTab(page.id)}
                className={cn(
                  "font-sans uppercase tracking-[0.2em] text-[9px] h-full border-b-2 transition-all whitespace-nowrap",
                  activeTabId === page.id 
                    ? "border-zinc-900 text-zinc-900" 
                    : "border-transparent text-zinc-400 hover:text-zinc-600"
                )}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-[128px] md:pt-[144px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <activePage.component />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
