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
import { HeroShowcase } from "./pages/HeroShowcase";

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
          <Route path="/hero-showcase" element={<HeroShowcase />} />
        </Routes>
      </Layout>
    </Router>
  );
}

