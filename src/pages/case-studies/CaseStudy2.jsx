import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema, generateReviewSchema } from '@/utils/schemaMarkup';

const CaseStudy2 = () => {
  const { language, t } = useLanguage();

  const title = language === 'pt' ? "Caso de Sucesso: Controlo de Humidade em Adega de Vinho Avillez" : "Success Story: Humidity Control in Avillez Wine Cellar";
  const desc = language === 'pt' ? "Como os Restaurantes Avillez resolveram problemas de humidade permanentemente com a Evoluimos Comércio." : "How Avillez Restaurants permanently solved humidity issues with Evoluimos Comércio.";
  
  const breadcrumbItems = [
    { label: t.nav.home, path: '/' },
    { label: language === 'pt' ? 'Casos de Sucesso' : 'Case Studies', path: '/case-studies' },
    { label: "Avillez", path: '/case-studies/avillez' }
  ];

  const schemas = [
    generateArticleSchema({ title, description: desc, image: 'https://images.unsplash.com/photo-1540620997285-9b7ddcddcbb3' }, language),
    generateReviewSchema({ author: "Grupo Avillez", text: "Excelente sistema para manter a qualidade dos vinhos.", rating: "5" })
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/case-studies/avillez" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1540620997285-9b7ddcddcbb3" alt="Avillez Wine Cellar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                <div className="flex items-center gap-4 text-white/90 font-medium">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Hotelaria</span>
                  <span>Lisboa, Portugal</span>
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
                    ? "A adega enfrentava problemas sérios de humidade capilar ascendente. As paredes antigas do edifício histórico em Lisboa permitiam infiltrações que ameaçavam a integridade de vinhos valiosos, causando mofo e odores indesejados."
                    : "The cellar faced serious rising damp issues. The old walls of the historic building in Lisbon allowed infiltrations that threatened the integrity of valuable wines, causing mold and unwanted odors."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>DRYMAT:</strong> {language === 'pt' ? 'Sistema não invasivo de eliminação de humidade' : 'Non-invasive moisture elimination system'}</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>ClimateCoating:</strong> {language === 'pt' ? 'Revestimento térmico protetor' : 'Thermal protective coating'}</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'Os Resultados' : 'The Results'}</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <Droplets className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Humidade Eliminada' : 'Moisture Eliminated'}</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <Shield className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Obras Estruturais' : 'Structural Renovation'}</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-orange-500">{language === 'pt' ? 'Testemunho' : 'Testimonial'}</h3>
                <blockquote className="text-lg italic mb-6">
                  "{language === 'pt' ? 'Salvou a nossa adega sem precisarmos de fechar o espaço para obras. Um sistema verdadeiramente inovador.' : 'It saved our cellar without needing to close the space for construction. A truly innovative system.'}"
                </blockquote>
                <div className="font-semibold">Direção Grupo Avillez</div>
              </div>

              <div className="bg-white border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">{language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}</h3>
                <div className="space-y-3">
                  <Link to="/products/moisture-elimination" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Sistema DRYMAT</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/products/thermal-coating" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">ClimateCoating</span>
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

export default CaseStudy2;