import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateProductSchema, generateFAQSchema } from '@/utils/schemaMarkup';

const InfraredHeatingPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Aquecimento por Infravermelhos de Onda Curta Solamagic Conforto Instantâneo' : 'Solamagic Short-Wave Infrared Heating Instant Comfort';
  const metaTitle = language === 'pt' ? 'Aquecimento Infravermelhos Solamagic | Esplanadas e Áreas Externas' : 'Solamagic Infrared Heating | Outdoor Patios & Terraces';

  const faqs = [
    { question: language === 'pt' ? 'Seguro no exterior?' : 'Outdoor safety?', answer: 'IP65 rated.' }
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={title} canonical="/products/infrared-heating" schemas={[generateProductSchema({name: 'Solamagic', description: title, image: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97', url: 'https://evoluimoscomercio.com/products/infrared-heating'}, language), generateFAQSchema(faqs)]} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.products, path: '/products' }, { label: 'Solamagic', path: '/products/infrared-heating' }]} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1638668679884-4196de47fe97" alt="Solamagic" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/60 flex items-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{title}</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2>{language === 'pt' ? 'O que é o Aquecimento por Infravermelhos?' : 'What is Infrared Heating?'}</h2>
            <p>Short-wave technology provides instant heat.</p>
            
            <h3>{language === 'pt' ? 'Aplicações e Benefícios' : 'Applications & Benefits'}</h3>
            <ul className="list-none pl-0 space-y-2">
              {['50-60% energy savings', 'Instant warmth', 'Plug and play'].map(b => (
                <li key={b} className="flex gap-2"><CheckCircle2 className="text-orange-600" /> {b}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700">{language === 'pt' ? 'Peça Orçamento' : 'Get a Quote'}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfraredHeatingPage;