import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema } from '@/utils/schemaMarkup';

const Article2 = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? "Diferenças entre Aquecimento Radiante e Infra-Vermelho" : "Radiant vs Infrared Heating: Key Differences";
  const desc = language === 'pt' ? "Entenda tecnicamente qual a melhor opção para si." : "Understand technically which is the best option for you.";

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/learn-hub/radiant-vs-infrared" schemas={[generateArticleSchema({title, description: desc, image: 'https://images.unsplash.com/photo-1570573175632-0aaaad5ca2d8'}, language)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.learn, path: '/learn-hub' }, { label: title, path: '/learn-hub/radiant-vs-infrared' }]} />
          
          <img src="https://images.unsplash.com/photo-1570573175632-0aaaad5ca2d8" alt={title} className="w-full h-80 object-cover rounded-2xl mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="prose prose-lg prose-orange max-w-none text-gray-700">
            <p className="lead">{desc}</p>
            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden my-8">
              <thead className="bg-orange-50">
                <tr>
                  <th className="py-3 px-4 border-b">{language === 'pt' ? 'Característica' : 'Feature'}</th>
                  <th className="py-3 px-4 border-b">{language === 'pt' ? 'Radiante (Duotherm)' : 'Radiant (Duotherm)'}</th>
                  <th className="py-3 px-4 border-b">{language === 'pt' ? 'Infra-Vermelho (Solamagic)' : 'Infrared (Solamagic)'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-semibold">Uso Ideal</td>
                  <td className="py-3 px-4 border-b">Interiores, Contínuo</td>
                  <td className="py-3 px-4 border-b">Exteriores, Intermitente</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-semibold">Aquecimento</td>
                  <td className="py-3 px-4 border-b">Lento, retém calor</td>
                  <td className="py-3 px-4 border-b">Imediato (1 seg)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article2;