import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const ReduceHeatingCostsPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Reduzir Custos de Aquecimento' : 'Reduce Heating Costs';

  return (
    <>
      <SEOHead title={title} description={title} canonical="/solutions/reduce-heating-costs" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.solutions || 'Solutions', path: '/solutions' }, { label: title, path: '/solutions/reduce-heating-costs' }]} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <div className="prose prose-lg mb-8">
            <h2>{language === 'pt' ? 'O Problema' : 'The Problem'}</h2>
            <p>Rising costs and inefficient systems lead to major heat loss.</p>
            <h2>{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
            <p>Duotherm and ClimateCoating offer 30-40% savings with 3-5 years payback.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReduceHeatingCostsPage;