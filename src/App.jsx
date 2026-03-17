import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import ProductsHubPage from '@/pages/products/ProductsHubPage';
import RadiantHeatingPage from '@/pages/products/RadiantHeatingPage';
import InfraredHeatingPage from '@/pages/products/InfraredHeatingPage';
import MoistureEliminationPage from '@/pages/products/MoistureEliminationPage';
import ThermalCoatingPage from '@/pages/products/ThermalCoatingPage';
import EcoFireplacesPage from '@/pages/products/EcoFireplacesPage';
import ElectricWaterHeatersPage from '@/pages/products/ElectricWaterHeatersPage';

import SolutionsHubPage from '@/pages/solutions/SolutionsHubPage';
import EliminateWallMoisturePage from '@/pages/solutions/EliminateWallMoisturePage';
import ReduceHeatingCostsPage from '@/pages/solutions/ReduceHeatingCostsPage';
import OutdoorComfortPage from '@/pages/solutions/OutdoorComfortPage';
import SustainableBusinessHeatingPage from '@/pages/solutions/SustainableBusinessHeatingPage';
import ConstructionRehabilitationPage from '@/pages/solutions/ConstructionRehabilitationPage';

import CaseStudiesPage from '@/pages/case-studies/CaseStudiesPage';
import CaseStudy1 from '@/pages/case-studies/CaseStudy1';
import CaseStudy2 from '@/pages/case-studies/CaseStudy2';
import CaseStudy3 from '@/pages/case-studies/CaseStudy3';
import LearnHubPage from '@/pages/learn-hub/LearnHubPage';
import Article1 from '@/pages/learn-hub/Article1';
import Article2 from '@/pages/learn-hub/Article2';
import Article3 from '@/pages/learn-hub/Article3';
import Article4 from '@/pages/learn-hub/Article4';
import Article5 from '@/pages/learn-hub/Article5';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/products" element={<ProductsHubPage />} />
              <Route path="/products/radiant-heating" element={<RadiantHeatingPage />} />
              <Route path="/products/infrared-heating" element={<InfraredHeatingPage />} />
              <Route path="/products/moisture-elimination" element={<MoistureEliminationPage />} />
              <Route path="/products/thermal-coating" element={<ThermalCoatingPage />} />
              <Route path="/products/eco-fireplaces" element={<EcoFireplacesPage />} />
              <Route path="/products/water-heaters" element={<ElectricWaterHeatersPage />} />

              <Route path="/solutions" element={<SolutionsHubPage />} />
              <Route path="/solutions/eliminate-moisture" element={<EliminateWallMoisturePage />} />
              <Route path="/solutions/reduce-heating-costs" element={<ReduceHeatingCostsPage />} />
              <Route path="/solutions/outdoor-comfort" element={<OutdoorComfortPage />} />
              <Route path="/solutions/sustainable-business" element={<SustainableBusinessHeatingPage />} />
              <Route path="/solutions/construction-rehabilitation" element={<ConstructionRehabilitationPage />} />
              
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/mcdonalds" element={<CaseStudy1 />} />
              <Route path="/case-studies/avillez" element={<CaseStudy2 />} />
              <Route path="/case-studies/sonae" element={<CaseStudy3 />} />

              <Route path="/learn-hub" element={<LearnHubPage />} />
              <Route path="/learn-hub/choose-heating" element={<Article1 />} />
              <Route path="/learn-hub/radiant-vs-infrared" element={<Article2 />} />
              <Route path="/learn-hub/eliminate-moisture" element={<Article3 />} />
              <Route path="/learn-hub/energy-calculator" element={<Article4 />} />
              <Route path="/learn-hub/sustainable-heating" element={<Article5 />} />

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