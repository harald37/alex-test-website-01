import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { cn } from "../lib/utils";
import { SEO } from "../components/SEO";

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
import { ColorPaletteTest } from "./ColorPaletteTest";
import { NewStyleHome } from "./NewStyle/NewStyleHome";
import { NewStyleAbout } from "./NewStyle/NewStyleAbout";
import { NewStyleServices } from "./NewStyle/NewStyleServices";
import { NewStylePortfolio } from "./NewStyle/NewStylePortfolio";
import { NewStyleFAQ } from "./NewStyle/NewStyleFAQ";
import { NewStyleContact } from "./NewStyle/NewStyleContact";
import { MinimalistHome } from "./MinimalistStyle/MinimalistHome";
import { MinimalistAbout } from "./MinimalistStyle/MinimalistAbout";
import { MinimalistServices } from "./MinimalistStyle/MinimalistServices";
import { MinimalistPortfolio } from "./MinimalistStyle/MinimalistPortfolio";
import { MinimalistFAQ } from "./MinimalistStyle/MinimalistFAQ";
import { MinimalistContact } from "./MinimalistStyle/MinimalistContact";
import { PortfolioIntros } from "./PortfolioIntros";
import { ServicesIntros } from "./ServicesIntros";
import { HomeButtonVariants } from "./HomeButtonVariants";
import { ForestMonochromeHome } from "./ForestMonochrome/ForestMonochromeHome";
import { EarthToneHome } from "./EarthTone/EarthToneHome";
import { EarthToneAbout } from "./EarthTone/EarthToneAbout";
import { EarthToneFAQ } from "./EarthTone/EarthToneFAQ";
import { SmoothLoadingTest } from "./SmoothLoadingTest";

// Original Pages Backup
import { Home as OriginalHome } from "./Home";
import { About as OriginalAbout } from "./About";
import { Services as OriginalServices } from "./Services";
import { Portfolio as OriginalPortfolio } from "./Portfolio";
import { FAQ as OriginalFAQ } from "./FAQ";
import { Contact as OriginalContact } from "./Contact";

const TEST_PAGES = [
  { id: "testimonials", label: "Testimonials", component: TestimonialComparison, category: "Content" },
  { id: "hero-showcase", label: "Hero Showcase", component: HeroShowcase, category: "Hero" },
  { id: "hero-variants", label: "Hero Varianten", component: HeroVariants, category: "Hero" },
  { id: "menu", label: "Menü Vergleich", component: MenuComparison, category: "Content" },
  { id: "logos", label: "Logo Varianten", component: LogoShowcase, category: "Branding" },
  { id: "buttons", label: "Button Varianten", component: ButtonShowcase, category: "Branding" },
  { id: "button-test", label: "Button Test", component: ButtonTest, category: "Branding" },
  { id: "seo", label: "SEO Strategie", component: SEOTest, category: "Branding" },
  { id: "hero-layout", label: "Hero Layout", component: HeroLayoutTest, category: "Hero" },
  { id: "scroll", label: "Scroll Indicator", component: ScrollIndicatorTest, category: "Hero" },
  { id: "intros", label: "Subpage Intros", component: TestIntros, category: "Hero" },
  { id: "home-intros", label: "Home Intros", component: TestHome, category: "Hero" },
  { id: "home-test", label: "Home Test", component: HomeTest, category: "Home Tests" },
  { id: "home-test-2", label: "Home Test 2", component: HomeTest2, category: "Home Tests" },
  { id: "hero-15", label: "Hero (15)", component: HomeVariantsShowcase, category: "Hero" },
  { id: "quotes", label: "Zitate (30)", component: QuoteVariants, category: "Content" },
  { id: "copy", label: "Texte (30)", component: CopyVariants, category: "Content" },
  { id: "faq-cats", label: "FAQ (1-5)", component: FAQVariants, category: "FAQ" },
  { id: "faq-cats-more", label: "FAQ (6-15)", component: FAQVariantsMore, category: "FAQ" },
  { id: "faq-cats-even-more", label: "FAQ (16-25)", component: FAQVariantsEvenMore, category: "FAQ" },
  { id: "faq-cat-layouts", label: "FAQ Layouts", component: FAQCategoryVariants, category: "FAQ" },
  { id: "contact-variants", label: "Kontakt (1-10)", component: ContactVariants, category: "Kontakt" },
  { id: "contact-variants-more", label: "Kontakt (11-25)", component: ContactVariantsMore, category: "Kontakt" },
  { id: "about-variants", label: "Über Mich (1-10)", component: AboutVariants, category: "Über Mich" },
  { id: "about-variants-more", label: "Über Mich (11-20)", component: AboutVariantsMore, category: "Über Mich" },
  { id: "color-palette", label: "Farben & Kontraste", component: ColorPaletteTest, category: "Branding" },
  { id: "new-style-home", label: "Home", component: NewStyleHome, category: "NEUER STIL" },
  { id: "new-style-about", label: "Über Mich", component: NewStyleAbout, category: "NEUER STIL" },
  { id: "new-style-services", label: "Leistungen", component: NewStyleServices, category: "NEUER STIL" },
  { id: "new-style-portfolio", label: "Portfolio", component: NewStylePortfolio, category: "NEUER STIL" },
  { id: "new-style-faq", label: "FAQ", component: NewStyleFAQ, category: "NEUER STIL" },
  { id: "new-style-contact", label: "Kontakt", component: NewStyleContact, category: "NEUER STIL" },
  { id: "min-home", label: "Home (S/W)", component: MinimalistHome, category: "MINIMALISTISCH (S/W)" },
  { id: "home-button-variants", label: "Home Button Varianten (15)", component: HomeButtonVariants, category: "MINIMALISTISCH (S/W)" },
  { id: "min-about", label: "Über Mich (S/W)", component: MinimalistAbout, category: "MINIMALISTISCH (S/W)" },
  { id: "min-services", label: "Leistungen (S/W)", component: MinimalistServices, category: "MINIMALISTISCH (S/W)" },
  { id: "min-portfolio", label: "Portfolio (S/W)", component: MinimalistPortfolio, category: "MINIMALISTISCH (S/W)" },
  { id: "min-faq", label: "FAQ (S/W)", component: MinimalistFAQ, category: "MINIMALISTISCH (S/W)" },
  { id: "min-contact", label: "Kontakt (S/W)", component: MinimalistContact, category: "MINIMALISTISCH (S/W)" },
  { id: "portfolio-intros", label: "Portfolio Intros (30)", component: PortfolioIntros, category: "MINIMALISTISCH (S/W)" },
  { id: "services-intros", label: "Leistungen Intros (20)", component: ServicesIntros, category: "MINIMALISTISCH (S/W)" },
  { id: "forest-mono-home", label: "Home (Monochrom)", component: ForestMonochromeHome, category: "FOREST MONOCHROME" },
  { id: "earth-home", label: "Home (Braun)", component: EarthToneHome, category: "EARTH TONES (BRAUN)" },
  { id: "earth-about", label: "Über Mich (Braun)", component: EarthToneAbout, category: "EARTH TONES (BRAUN)" },
  { id: "earth-faq", label: "FAQ (Braun)", component: EarthToneFAQ, category: "EARTH TONES (BRAUN)" },
  { id: "smooth-loading", label: "Smooth Loading", component: SmoothLoadingTest, category: "Performance" },
  
  // Original Backup
  { id: "backup-home", label: "Home (Aktuell)", component: OriginalHome, category: "BACKUP (AKTUELL)" },
  { id: "backup-about", label: "Über Mich (Aktuell)", component: OriginalAbout, category: "BACKUP (AKTUELL)" },
  { id: "backup-services", label: "Leistungen (Aktuell)", component: OriginalServices, category: "BACKUP (AKTUELL)" },
  { id: "backup-portfolio", label: "Portfolio (Aktuell)", component: OriginalPortfolio, category: "BACKUP (AKTUELL)" },
  { id: "backup-faq", label: "FAQ (Aktuell)", component: OriginalFAQ, category: "BACKUP (AKTUELL)" },
  { id: "backup-contact", label: "Kontakt (Aktuell)", component: OriginalContact, category: "BACKUP (AKTUELL)" },
];

export const TestCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get("tab") || TEST_PAGES[0].id;
  
  const activePage = TEST_PAGES.find(p => p.id === activeTabId) || TEST_PAGES[0];

  const setActiveTab = (id: string) => {
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = Array.from(new Set(TEST_PAGES.map(p => p.category)));

  return (
    <div className="min-h-screen bg-[#f5f2ed] flex flex-col md:flex-row">
      <SEO 
        title="Test Center | Intern" 
        description="Internes Test Center für Design-Varianten." 
        noindex={true} 
      />
      {/* Sidebar Navigation (Desktop) / Top Bar (Mobile) */}
      <div className="md:w-[400px] md:h-screen md:sticky md:top-0 bg-[#141414] border-b md:border-b-0 md:border-r border-white/5 z-[90] flex flex-col transition-all duration-500">
        <div className="p-4 md:p-6 border-b border-white/5">
          <span className="font-sans uppercase tracking-[0.4em] text-[10px] text-white/40">
            Test Center
          </span>
          <h1 className="font-serif italic text-lg mt-1 hidden md:block text-white">Varianten & Tests</h1>
        </div>
        
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-6">
          {categories.map((cat) => (
            <div key={cat} className="space-y-2">
              <h3 className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold px-2">{cat}</h3>
              <div className="grid grid-cols-2 gap-1">
                {TEST_PAGES.filter(p => p.category === cat).map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setActiveTab(page.id)}
                    className={cn(
                      "font-sans uppercase tracking-[0.1em] text-[8px] px-2 py-2 rounded transition-all text-left leading-tight",
                      activeTabId === page.id 
                        ? "bg-white text-[#141414] shadow-lg" 
                        : "text-white/30 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow">
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
