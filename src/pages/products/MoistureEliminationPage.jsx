import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const MoistureEliminationPage = () => {
  const { language, t } = useLanguage();
  const title = language === 'pt' ? 'DRYMAT Sistema de Eliminação de Humidade Ascendente sem Obras' : 'DRYMAT Ascending Moisture Elimination System without Renovation';
  const metaTitle = language === 'pt' ? 'DRYMAT Humidade | Secagem de Paredes sem Obras' : 'DRYMAT Moisture Control | Wall Drying without Renovation';

  return (
    <>
      <SEOHead title={metaTitle} description={title} canonical="/products/moisture-elimination" language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t.nav.home, path: '/' }, { label: t.nav.products, path: '/products' }, { label: 'DRYMAT', path: '/products/moisture-elimination' }]} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1693594558979-aed4872ff156" alt="DRYMAT" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/60 flex items-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{title}</h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2>{language === 'pt' ? 'Como funciona?' : 'How it works?'}</h2>
            <p>Electromagnetic pulse technology prevents capillary rise safely and efficiently.</p>
          </div>

          <div className="flex gap-4">
            <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700">{language === 'pt' ? 'Peça Avaliação Gratuita' : 'Request Free Assessment'}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MoistureEliminationPage;