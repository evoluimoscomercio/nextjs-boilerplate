import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema, generateHowToSchema } from '@/utils/schemaMarkup';

const Article3 = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? "Como Eliminar Humidade nas Paredes sem Obras" : "How to Eliminate Wall Moisture without Renovation";
  const desc = language === 'pt' ? "Passo a passo com sistema DRYMAT." : "Step by step with DRYMAT system.";

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/learn-hub/eliminate-moisture" schemas={[generateArticleSchema({title, description: desc, image: 'https://images.unsplash.com/photo-1693209566729-d6c0597cdfb1'}, language)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.learn, path: '/learn-hub' }, { label: title, path: '/learn-hub/eliminate-moisture' }]} />
          
          <img src="https://images.unsplash.com/photo-1693209566729-d6c0597cdfb1" alt={title} className="w-full h-80 object-cover rounded-2xl mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="lead">{desc}</p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start bg-orange-50 p-6 rounded-xl">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                <div>
                  <h3 className="text-xl font-bold mt-0">Diagnóstico</h3>
                  <p>Identificamos as causas das humidades capilares.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-orange-50 p-6 rounded-xl">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                  <h3 className="text-xl font-bold mt-0">Instalação</h3>
                  <p>Instalação não invasiva do sistema de inversão magnética.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-orange-50 p-6 rounded-xl">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                <div>
                  <h3 className="text-xl font-bold mt-0">Resultados</h3>
                  <p>Paredes secas e ambiente saudável em poucos meses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article3;