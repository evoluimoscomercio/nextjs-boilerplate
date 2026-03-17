import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema } from '@/utils/schemaMarkup';
import { Calculator, Euro } from 'lucide-react';

const Article4 = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? "Calculadora de Economia de Energia - Guia Completo" : "Energy Savings Calculator - Complete Guide";
  const desc = language === 'pt' ? "Descubra quanto pode poupar." : "Find out how much you can save.";

  const [cost, setCost] = useState(100);
  const [savings, setSavings] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const result = cost * 0.4; // Average 40% savings
    setSavings(result.toFixed(2));
  };

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/learn-hub/energy-calculator" schemas={[generateArticleSchema({title, description: desc, image: 'https://images.unsplash.com/photo-1654630106961-955f61257d8f'}, language)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.learn, path: '/learn-hub' }, { label: title, path: '/learn-hub/energy-calculator' }]} />
          
          <img src="https://images.unsplash.com/photo-1654630106961-955f61257d8f" alt={title} className="w-full h-80 object-cover rounded-2xl mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border my-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold">{language === 'pt' ? 'Calcule a sua poupança' : 'Calculate your savings'}</h2>
            </div>
            
            <form onSubmit={calculate} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {language === 'pt' ? 'Custo Atual Mensal de Aquecimento (€)' : 'Current Monthly Heating Cost (€)'}
                </label>
                <input 
                  type="number" 
                  value={cost} 
                  onChange={(e) => setCost(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                {language === 'pt' ? 'Calcular' : 'Calculate'}
              </button>
            </form>

            {savings && (
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100 flex items-center gap-4">
                <Euro className="w-10 h-10 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">{language === 'pt' ? 'Poupança Mensal Estimada:' : 'Estimated Monthly Savings:'}</p>
                  <p className="text-3xl font-bold text-green-700">€{savings}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Article4;