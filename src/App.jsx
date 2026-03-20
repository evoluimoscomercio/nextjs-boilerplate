import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HomePage from '@/pages/HomePage';
import ProductsHubPage from '@/pages/products/ProductsHubPage';
import SolamagicPage from '@/pages/products/SolamagicPage';
import ComfortSunPage from '@/pages/products/ComfortSunPage';
import DuothermPage from '@/pages/products/DuothermPage';
import ClimateCoatingPage from '@/pages/products/ClimateCoatingPage';
import DrymatPage from '@/pages/products/DrymatPage';
import BioclimatizadoresPage from '@/pages/products/BioclimatizadoresPage';
import EcoFireplacesPage from '@/pages/products/EcoFireplacesPage';

import SolutionsHubPage from '@/pages/solutions/SolutionsHubPage';
import EliminateWallMoisturePage from '@/pages/solutions/EliminateWallMoisturePage';
import ReduceHeatingCostsPage from '@/pages/solutions/ReduceHeatingCostsPage';
import OutdoorComfortPage from '@/pages/solutions/OutdoorComfortPage';
import SustainableBusinessPage from '@/pages/solutions/SustainableBusinessPage';

import CaseStudiesPage from '@/pages/case-studies/CaseStudiesPage';
import CaseStudy1 from '@/pages/case-studies/CaseStudy1';
import CaseStudy2 from '@/pages/case-studies/CaseStudy2';
import CaseStudy3 from '@/pages/case-studies/CaseStudy3';

import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow" style={{ paddingTop: '64px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/products" element={<ProductsHubPage />} />
              <Route path="/products/solamagic" element={<SolamagicPage />} />
              <Route path="/products/comfortsun" element={<ComfortSunPage />} />
              <Route path="/products/duotherm" element={<DuothermPage />} />
              <Route path="/products/climatecoating" element={<ClimateCoatingPage />} />
              <Route path="/products/drymat" element={<DrymatPage />} />
              <Route path="/products/bioclimatizadores" element={<BioclimatizadoresPage />} />
              <Route path="/products/eco-fireplaces" element={<EcoFireplacesPage />} />

              <Route path="/solutions" element={<SolutionsHubPage />} />
              <Route path="/solutions/eliminate-moisture" element={<EliminateWallMoisturePage />} />
              <Route path="/solutions/reduce-heating-costs" element={<ReduceHeatingCostsPage />} />
              <Route path="/solutions/outdoor-comfort" element={<OutdoorComfortPage />} />
              <Route path="/solutions/sustainable-business" element={<SustainableBusinessPage />} />

              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/mcdonalds" element={<CaseStudy1 />} />
              <Route path="/case-studies/avillez" element={<CaseStudy2 />} />
              <Route path="/case-studies/sonae" element={<CaseStudy3 />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
