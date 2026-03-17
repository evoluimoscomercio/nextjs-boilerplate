import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateProductSchema, generateFAQSchema } from '@/utils/schemaMarkup';

const RadiantHeatingPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Sistema de Aquecimento Radiante Duotherm Conforto Térmico Eficiente' : 'Duotherm Radiant Heating System Efficient Thermal Comfort';
  const metaTitle = language === 'pt' ? 'Aquecimento Radiante Duotherm | Sistemas de Piso Radiante Elétrico' : 'Duotherm Radiant Heating | Electric Radiant Floor Systems';
  
  const faqs = [
    { question: language === 'pt' ? 'Custo de instalação?' : 'Installation cost?', answer: language === 'pt' ? 'Variável consoante a área, peça orçamento.' : 'Varies by area, get a quote.' },
    { question: language === 'pt' ? 'Instalação em casas existentes?' : 'Installation in existing homes?', answer: language === 'pt' ? 'Sim, facilmente adaptável.' : 'Yes, easily adaptable.' },
    { question: language === 'pt' ? 'Compatível com painéis solares?' : 'Solar panel compatible?', answer: language === 'pt' ? 'Sim, 100% compatível.' : 'Yes, 100% compatible.' }
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={title} canonical="/products/radiant-heating" schemas={[generateProductSchema({name: 'Duotherm', description: title, image: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1', url: 'https://evoluimoscomercio.com/products/radiant-heating'}, language), generateFAQSchema(faqs)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.products, path: '/products' }, { label: 'Duotherm', path: '/products/radiant-heating' }]} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1" alt="Duotherm" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/60 flex items-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{title}</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2>{language === 'pt' ? 'O que é o Aquecimento Radiante?' : 'What is Radiant Heating?'}</h2>
            <p>{language === 'pt' ? 'O sistema Duotherm oferece aquecimento uniforme sem correntes de ar, ideal para habitações modernas.' : 'The Duotherm system offers uniform heating without drafts, ideal for modern homes.'}</p>
            
            <h3>{language === 'pt' ? 'Benefícios' : 'Benefits'}</h3>
            <ul className="list-none pl-0 space-y-2">
              {['30-40% energy savings', 'Uniform temperature', 'No drafts', 'Aesthetic appeal', 'Quiet', 'Renewable compatible'].map(b => (
                <li key={b} className="flex gap-2"><CheckCircle2 className="text-orange-600" /> {b}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700">{language === 'pt' ? 'Peça Orçamento' : 'Get a Quote'}</Link>
            <Link to="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800">{language === 'pt' ? 'Contacte um Especialista' : 'Contact an Expert'}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default RadiantHeatingPage;