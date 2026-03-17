import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Thermometer, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema, generateReviewSchema } from '@/utils/schemaMarkup';

const CaseStudy1 = () => {
  const { language, t } = useLanguage();

  const title = language === 'pt' ? "Caso de Sucesso: Redução de 28% em Custos de Energia em Restaurante McDonald's" : "Success Story: 28% Energy Cost Reduction at McDonald's Restaurant";
  const desc = language === 'pt' ? "Descubra como o McDonald's reduziu custos em 28% com sistemas de aquecimento inteligente." : "Discover how McDonald's reduced costs by 28% with intelligent heating systems.";
  
  const breadcrumbItems = [
    { label: t.nav.home, path: '/' },
    { label: language === 'pt' ? 'Casos de Sucesso' : 'Case Studies', path: '/case-studies' },
    { label: "McDonald's", path: '/case-studies/mcdonalds' }
  ];

  const schemas = [
    generateArticleSchema({ title, description: desc, image: 'https://images.unsplash.com/photo-1557955776-857434f1c951' }, language),
    generateReviewSchema({ author: "McDonald's Management", text: "Excelente solução, reduzimos custos significativamente.", rating: "5" })
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/case-studies/mcdonalds" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1557955776-857434f1c951" alt="McDonald's exterior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                <div className="flex items-center gap-4 text-white/90 font-medium">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Restauração</span>
                  <span>Múltiplas localizações, Portugal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8 text-lg text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'O Desafio' : 'The Challenge'}</h2>
                <p>
                  {language === 'pt' 
                    ? "Os restaurantes enfrentavam custos de energia elevados nas áreas de refeição e esplanadas. O sistema tradicional não conseguia manter uma temperatura consistente, resultando em desperdício de energia e desconforto para os clientes em dias frios."
                    : "The restaurants faced high energy costs in dining and patio areas. The traditional system couldn't maintain consistent temperatures, resulting in energy waste and customer discomfort on cold days."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
                <p className="mb-4">
                  {language === 'pt' 
                    ? "Implementámos uma abordagem híbrida inteligente:"
                    : "We implemented a smart hybrid approach:"}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>Duotherm:</strong> {language === 'pt' ? 'Aquecimento radiante nas áreas interiores' : 'Radiant heating in indoor areas'}</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>Solamagic:</strong> {language === 'pt' ? 'Infravermelhos para esplanadas exteriores' : 'Infrared for outdoor patios'}</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'Os Resultados' : 'The Results'}</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <TrendingDown className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">-28%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Custos de Energia' : 'Energy Costs'}</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <Thermometer className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">+40%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Uso da Esplanada no Inverno' : 'Winter Patio Usage'}</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-orange-500">{language === 'pt' ? 'Testemunho' : 'Testimonial'}</h3>
                <blockquote className="text-lg italic mb-6">
                  "{language === 'pt' ? 'O investimento pagou-se a si mesmo em menos de 18 meses. O conforto dos nossos clientes melhorou significativamente.' : 'The investment paid for itself in less than 18 months. Our customers comfort improved significantly.'}"
                </blockquote>
                <div className="font-semibold">McDonald's Portugal</div>
              </div>

              <div className="bg-white border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">{language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}</h3>
                <div className="space-y-3">
                  <Link to="/products/radiant-heating" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Duotherm Radiante</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/products/infrared-heating" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Solamagic Infravermelhos</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy1;