import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const ConstructionRehabilitationPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Soluções Térmicas para Construção & Reabilitação' : 'Thermal Solutions for Construction & Rehabilitation';

  return (
    <>
      <SEOHead title={title} description={title} canonical="/solutions/construction-rehabilitation" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.solutions || 'Solutions', path: '/solutions' }, { label: title, path: '/solutions/construction-rehabilitation' }]} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <div className="prose prose-lg mb-8">
            <p>Achieve A+ energy ratings in new construction and historic rehabilitation.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConstructionRehabilitationPage;