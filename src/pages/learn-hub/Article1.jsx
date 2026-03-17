import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema, generateHowToSchema } from '@/utils/schemaMarkup';

const Article1 = () => {
  const { language, t } = useLanguage();
  
  const title = language === 'pt' ? "Como Escolher o Melhor Sistema de Aquecimento para Sua Casa" : "How to Choose the Right Heating System for Your Home";
  const desc = language === 'pt' ? "Guia prático para avaliar sistemas de aquecimento para sua residência." : "Practical guide to evaluate heating systems for your residence.";

  const schemas = [
    generateArticleSchema({ title, description: desc, image: 'https://images.unsplash.com/photo-1700124084147-995973b6a970' }, language),
    generateHowToSchema({
      name: title,
      description: desc,
      steps: [
        { name: "Step 1", text: "Evaluate your space" },
        { name: "Step 2", text: "Calculate energy needs" },
        { name: "Step 3", text: "Choose technology" }
      ]
    }, language)
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/learn-hub/choose-heating" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.learn, path: '/learn-hub' }, { label: title, path: '/learn-hub/choose-heating' }]} />
          
          <img src="https://images.unsplash.com/photo-1700124084147-995973b6a970" alt={title} className="w-full h-80 object-cover rounded-2xl mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="lead">{desc}</p>
            <h2>1. {language === 'pt' ? 'Avalie a área' : 'Evaluate the Area'}</h2>
            <p>{language === 'pt' ? 'O tamanho do espaço determina a potência necessária.' : 'Space size determines required power.'}</p>
            <h2>2. {language === 'pt' ? 'Considere o isolamento' : 'Consider Insulation'}</h2>
            <p>{language === 'pt' ? 'Se a casa for mal isolada, revestimentos térmicos são ideais.' : 'If the house is poorly insulated, thermal coatings are ideal.'}</p>
            <h2>3. {language === 'pt' ? 'Selecione a tecnologia' : 'Select the Technology'}</h2>
            <p>{language === 'pt' ? 'Radiante para uso contínuo, infravermelhos para uso intermitente ou exterior.' : 'Radiant for continuous use, infrared for intermittent or outdoor use.'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article1;