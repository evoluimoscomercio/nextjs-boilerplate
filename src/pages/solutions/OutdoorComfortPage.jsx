import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const OutdoorComfortPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Melhorar Conforto em Esplanadas' : 'Improve Outdoor Comfort';

  return (
    <>
      <SEOHead title={title} description={title} canonical="/solutions/outdoor-comfort" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.solutions || 'Solutions', path: '/solutions' }, { label: title, path: '/solutions/outdoor-comfort' }]} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <div className="prose prose-lg mb-8">
            <h2>{language === 'pt' ? 'O Problema' : 'The Problem'}</h2>
            <p>Cold areas restrict seasonal patio use, impacting revenue.</p>
            <h2>{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
            <p>Solamagic and Herkell increase usage by 40-50%.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OutdoorComfortPage;