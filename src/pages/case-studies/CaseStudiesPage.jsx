import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, TrendingDown, ThermometerSun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const CaseStudiesPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Casos de Sucesso' : 'Success Stories';
  const description = language === 'pt' 
    ? 'Descubra como ajudamos empresas e residências a economizar energia e eliminar humidade.' 
    : 'Discover how we helped businesses and homes save energy and eliminate moisture.';

  const breadcrumbItems = [
    { label: t?.nav?.home || 'Home', path: '/' },
    { label: title, path: '/case-studies' }
  ];

  const caseStudies = [
    {
      id: 'mcdonalds',
      title: language === 'pt' ? "Redução de 28% em Custos de Energia em Restaurante McDonald's" : "28% Energy Cost Reduction at McDonald's Restaurant",
      industry: 'Restauração',
      location: 'Portugal',
      metric: '-28% Energia',
      image: 'https://images.unsplash.com/photo-1557955776-857434f1c951',
      icon: TrendingDown
    },
    {
      id: 'avillez',
      title: language === 'pt' ? "Controlo de Humidade em Adega de Vinho Avillez" : "Humidity Control in Avillez Wine Cellar",
      industry: 'Hotelaria',
      location: 'Lisboa, Portugal',
      metric: '100% Controlo Humidade',
      image: 'https://images.unsplash.com/photo-1540620997285-9b7ddcddcbb3',
      icon: ThermometerSun
    },
    {
      id: 'sonae',
      title: language === 'pt' ? "Aumento de 45% no Uso de Áreas Externas em Centro Comercial" : "45% Increase in Outdoor Area Usage at Shopping Center",
      industry: 'Retalho',
      location: 'Porto, Portugal',
      metric: '+45% Utilização',
      image: 'https://images.unsplash.com/photo-1671171442876-ee2508253ef8',
      icon: Building
    }
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={description} canonical="/case-studies" language={language} />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600">
              {description}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div key={study.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-orange-600 font-bold shadow-md">
                      <Icon className="w-4 h-4" />
                      {study.metric}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 line-clamp-3">
                      {study.title}
                    </h2>
                    <Link to={`/case-studies/${study.id}`} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      {t?.common?.readMore || 'Read More'} <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;