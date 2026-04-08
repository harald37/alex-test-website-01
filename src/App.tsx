/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/testimonial-comparison" element={<TestimonialComparison />} />
          <Route path="/hero-showcase" element={<HeroShowcase />} />
          <Route path="/hero-variants" element={<HeroVariants />} />
          <Route path="/menu-comparison" element={<MenuComparison />} />
          <Route path="/logo-showcase" element={<LogoShowcase />} />
          <Route path="/button-showcase" element={<ButtonShowcase />} />
          <Route path="/button-test" element={<ButtonTest />} />
          <Route path="/seo-test" element={<SEOTest />} />
          <Route path="/hero-layout-test" element={<HeroLayoutTest />} />
        </Routes>
      </Layout>
    </Router>
  );
}

