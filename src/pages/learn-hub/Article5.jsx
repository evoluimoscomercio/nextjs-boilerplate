import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema } from '@/utils/schemaMarkup';

const Article5 = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? "Aquecimento Sustentável para Negócios - Benchmarks da Indústria" : "Sustainable Heating for Businesses - Industry Benchmarks";
  const desc = language === 'pt' ? "Padrões da indústria e conformidade ESG." : "Industry standards and ESG compliance.";

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/learn-hub/sustainable-heating" schemas={[generateArticleSchema({title, description: desc, image: 'https://images.unsplash.com/photo-1700914504404-5245d466e6e6'}, language)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.learn, path: '/learn-hub' }, { label: title, path: '/learn-hub/sustainable-heating' }]} />
          
          <img src="https://images.unsplash.com/photo-1700914504404-5245d466e6e6" alt={title} className="w-full h-80 object-cover rounded-2xl mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="lead">{desc}</p>
            <h2>{language === 'pt' ? 'Métricas ESG' : 'ESG Metrics'}</h2>
            <p>{language === 'pt' ? 'Melhorar a eficiência reduz emissões CO2 e custos diretos, essencial para certificação BREEAM e LEED.' : 'Improving efficiency reduces CO2 emissions and direct costs, essential for BREEAM and LEED certification.'}</p>
            <h2>{language === 'pt' ? 'Conformidade' : 'Compliance'}</h2>
            <p>{language === 'pt' ? 'Normas europeias de 2026 exigem sistemas Classe A+.' : 'European 2026 regulations require Class A+ systems.'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article5;