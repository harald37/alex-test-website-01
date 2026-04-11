/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { MinimalistHome as Home } from "./pages/MinimalistStyle/MinimalistHome";
import { MinimalistPortfolio as Portfolio } from "./pages/MinimalistStyle/MinimalistPortfolio";
import { MinimalistAbout as About } from "./pages/MinimalistStyle/MinimalistAbout";
import { MinimalistServices as Services } from "./pages/MinimalistStyle/MinimalistServices";
import { MinimalistFAQ as FAQ } from "./pages/MinimalistStyle/MinimalistFAQ";
import { MinimalistContact as Contact } from "./pages/MinimalistStyle/MinimalistContact";
import { Imprint } from "./pages/Imprint";
import { Privacy } from "./pages/Privacy";
import { Hannover } from "./pages/SEO/Hannover";
import { Braunschweig } from "./pages/SEO/Braunschweig";
import { TestimonialComparison } from "./pages/TestimonialComparison";
import HeroShowcase from "./pages/HeroShowcase";
import HeroVariants from "./pages/HeroVariants";
import MenuComparison from "./pages/MenuComparison";
import LogoShowcase from "./pages/LogoShowcase";
import ButtonShowcase from "./pages/ButtonShowcase";
import ButtonTest from "./pages/ButtonTest";
import SEOTest from "./pages/SEOTest";
import HeroLayoutTest from "./pages/HeroLayoutTest";
import ScrollIndicatorTest from "./pages/ScrollIndicatorTest";
import { TestIntros } from "./pages/TestIntros";
import { TestHome } from "./pages/TestHome";
import { HomeTest } from "./pages/HomeTest";
import { HomeTest2 } from "./pages/HomeTest2";
import { HomeVariantsShowcase } from "./pages/HomeVariantsShowcase";
import { QuoteVariants } from "./pages/QuoteVariants";
import { CopyVariants } from "./pages/CopyVariants";
import { TestCenter } from "./pages/TestCenter";
import { NewStyleHome } from "./pages/NewStyle/NewStyleHome";
import { NewStyleAbout } from "./pages/NewStyle/NewStyleAbout";
import { NewStyleFAQ } from "./pages/NewStyle/NewStyleFAQ";
import { NewStyleServices } from "./pages/NewStyle/NewStyleServices";
import { NewStylePortfolio } from "./pages/NewStyle/NewStylePortfolio";
import { NewStyleContact } from "./pages/NewStyle/NewStyleContact";
import { NewStyleLayout } from "./pages/NewStyle/NewStyleLayout";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/new-style/*" element={
          <NewStyleLayout>
            <Routes>
              <Route path="/" element={<NewStyleHome />} />
              <Route path="/about" element={<NewStyleAbout />} />
              <Route path="/faq" element={<NewStyleFAQ />} />
              <Route path="/services" element={<NewStyleServices />} />
              <Route path="/portfolio" element={<NewStylePortfolio />} />
              <Route path="/contact" element={<NewStyleContact />} />
            </Routes>
          </NewStyleLayout>
        } />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Imprint />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/hochzeitsfotograf-hannover" element={<Hannover />} />
              <Route path="/hochzeitsfotograf-braunschweig" element={<Braunschweig />} />
              <Route path="/test" element={<TestCenter />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

