import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const EliminateWallMoisturePage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Eliminar Humidade nas Paredes' : 'Eliminate Wall Moisture';

  return (
    <>
      <SEOHead title={title} description={title} canonical="/solutions/eliminate-moisture" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.solutions || 'Solutions', path: '/solutions' }, { label: title, path: '/solutions/eliminate-moisture' }]} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <div className="prose prose-lg mb-8">
            <h2>{language === 'pt' ? 'O Problema' : 'The Problem'}</h2>
            <p>Ascending moisture causes severe structural and health impacts.</p>
            <h2>{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
            <p>DRYMAT and ClimateCoating provide 80-100% moisture reduction in 2-6 months.</p>
          </div>
          <Link to="/products/moisture-elimination" className="text-orange-600 font-bold hover:text-orange-700">Ver DRYMAT →</Link>
        </div>
      </div>
    </>
  );
};
export default EliminateWallMoisturePage;