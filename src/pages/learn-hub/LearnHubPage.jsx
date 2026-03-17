import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const LearnHubPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Centro de Conteúdo' : 'Learning Center';
  const description = language === 'pt' ? 'Guias, calculadoras e artigos especializados sobre soluções térmicas.' : 'Guides, calculators and expert articles on thermal solutions.';

  const breadcrumbItems = [
    { label: t?.nav?.home || 'Home', path: '/' },
    { label: title, path: '/learn-hub' }
  ];

  const articles = [
    {
      id: 'choose-heating',
      title: language === 'pt' ? "Como Escolher o Melhor Sistema de Aquecimento para Sua Casa" : "How to Choose the Right Heating System for Your Home",
      category: language === 'pt' ? 'Guias' : 'Guides',
      time: '5 min',
      image: 'https://images.unsplash.com/photo-1700124084147-995973b6a970'
    },
    {
      id: 'radiant-vs-infrared',
      title: language === 'pt' ? "Diferenças entre Aquecimento Radiante e Infra-Vermelho" : "Radiant vs Infrared Heating: Key Differences",
      category: language === 'pt' ? 'Técnico' : 'Technical',
      time: '4 min',
      image: 'https://images.unsplash.com/photo-1570573175632-0aaaad5ca2d8'
    },
    {
      id: 'eliminate-moisture',
      title: language === 'pt' ? "Como Eliminar Humidade nas Paredes sem Obras" : "How to Eliminate Wall Moisture without Renovation",
      category: language === 'pt' ? 'Soluções' : 'Solutions',
      time: '6 min',
      image: 'https://images.unsplash.com/photo-1693209566729-d6c0597cdfb1'
    },
    {
      id: 'energy-calculator',
      title: language === 'pt' ? "Calculadora de Economia de Energia - Guia Completo" : "Energy Savings Calculator - Complete Guide",
      category: language === 'pt' ? 'Ferramentas' : 'Tools',
      time: '3 min',
      image: 'https://images.unsplash.com/photo-1654630106961-955f61257d8f'
    },
    {
      id: 'sustainable-heating',
      title: language === 'pt' ? "Aquecimento Sustentável para Negócios - Benchmarks" : "Sustainable Heating for Businesses - Industry Benchmarks",
      category: language === 'pt' ? 'Empresas' : 'Business',
      time: '7 min',
      image: 'https://images.unsplash.com/photo-1700914504404-5245d466e6e6'
    }
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={description} canonical="/learn-hub" language={language} />
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
            {articles.map((article, index) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {article.title}
                  </h2>
                  <div className="mt-auto flex items-center justify-between border-t pt-4">
                    <div className="flex items-center text-sm text-gray-500 gap-1">
                      <Clock className="w-4 h-4" />
                      {article.time}
                    </div>
                    <Link to={`/learn-hub/${article.id}`} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                      {t?.common?.readMore || 'Read More'} <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnHubPage;