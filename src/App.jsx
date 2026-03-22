import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ErrorBoundary from '@/components/ErrorBoundary';

import HomePage from '@/pages/HomePage';
import ProductsHubPage from '@/pages/products/ProductsHubPage';
import SolamagicPage from '@/pages/products/SolamagicPage';
import ComfortSunPage from '@/pages/products/ComfortSunPage';
import ComfortSunProfessionalPage from '@/pages/products/ComfortSunProfessionalPage';
import ComfortSunDeluxePage from '@/pages/products/ComfortSunDeluxePage';
import ComfortSunEspecializadoPage from '@/pages/products/ComfortSunEspecializadoPage';
import ComfortSunPolivalentePage from '@/pages/products/ComfortSunPolivalentePage';
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

import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import RealEstatePage from '@/pages/RealEstatePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ErrorBoundary>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <a href="#main-content" className="skip-to-content">Saltar para o conteúdo</a>
            <Header />
            <main id="main-content" className="flex-grow" style={{ paddingTop: '64px' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/products" element={<ProductsHubPage />} />
                <Route path="/products/solamagic" element={<SolamagicPage />} />
                <Route path="/products/comfortsun" element={<ComfortSunPage />} />
                <Route path="/products/comfortsun/professional" element={<ComfortSunProfessionalPage />} />
                <Route path="/products/comfortsun/deluxe" element={<ComfortSunDeluxePage />} />
                <Route path="/products/comfortsun/especializado" element={<ComfortSunEspecializadoPage />} />
                <Route path="/products/comfortsun/polivalente" element={<ComfortSunPolivalentePage />} />
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

                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/real-estate" element={<RealEstatePage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/faqs" element={<FAQPage />} />

                {/* 404 deve ser sempre a última rota */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </ErrorBoundary>
      </Router>
    </LanguageProvider>
  );
}

export default App;
