import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const EcoFireplacesPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'Herkell Biolareiras e Grelhadores a Pellets Aquecimento Sustentável' : 'Herkell Eco Fireplaces & Pellet Grills Sustainable Heating';
  const metaTitle = language === 'pt' ? 'Herkell Biolareiras | Grelhadores a Pellets Ecológicos' : 'Herkell Eco Fireplaces | Ecological Pellet Grills';

  return (
    <>
      <SEOHead title={metaTitle} description={title} canonical="/products/eco-fireplaces" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.products, path: '/products' }, { label: 'Herkell', path: '/products/eco-fireplaces' }]} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1679419857423-ad10bd29a74f" alt="Herkell" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/60 flex items-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{title}</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2>Herkell Sustainable Fire</h2>
            <p>100% ecological fuel, no smoke/emissions, authentic fire, no installation required.</p>
          </div>

          <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700">{language === 'pt' ? 'Peça Orçamento' : 'Get a Quote'}</Link>
        </div>
      </div>
    </>
  );
};
export default EcoFireplacesPage;