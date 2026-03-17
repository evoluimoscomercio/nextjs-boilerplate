import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Sun, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateArticleSchema, generateReviewSchema } from '@/utils/schemaMarkup';

const CaseStudy3 = () => {
  const { language, t } = useLanguage();

  const title = language === 'pt' ? "Caso de Sucesso: Aumento de 45% no Uso de Áreas Externas em Centro Comercial" : "Success Story: 45% Increase in Outdoor Area Usage at Shopping Center";
  const desc = language === 'pt' ? "Como a Sonae maximizou o uso de áreas externas com aquecimento inteligente e biolareiras." : "How Sonae maximized outdoor area usage with intelligent heating and bio-fireplaces.";
  
  const breadcrumbItems = [
    { label: t.nav.home, path: '/' },
    { label: language === 'pt' ? 'Casos de Sucesso' : 'Case Studies', path: '/case-studies' },
    { label: "Sonae", path: '/case-studies/sonae' }
  ];

  const schemas = [
    generateArticleSchema({ title, description: desc, image: 'https://images.unsplash.com/photo-1671171442876-ee2508253ef8' }, language),
    generateReviewSchema({ author: "Sonae Sierra", text: "Excelente aumento na retenção de clientes.", rating: "5" })
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/case-studies/sonae" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1671171442876-ee2508253ef8" alt="Sonae Outdoor Area" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                <div className="flex items-center gap-4 text-white/90 font-medium">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Retalho</span>
                  <span>Porto, Portugal</span>
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
                    ? "Grandes áreas de esplanada do centro comercial ficavam desertas durante os meses de outono e inverno, reduzindo o tempo de permanência dos clientes e afetando as receitas dos restaurantes associados."
                    : "Large patio areas of the shopping center remained deserted during autumn and winter months, reducing customer dwell time and affecting the revenue of associated restaurants."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'A Solução' : 'The Solution'}</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>Solamagic:</strong> {language === 'pt' ? 'Aquecedores infravermelhos premium para conforto imediato' : 'Premium infrared heaters for immediate comfort'}</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <span><strong>Herkell:</strong> {language === 'pt' ? 'Biolareiras ecológicas criando um ambiente acolhedor' : 'Eco-fireplaces creating a welcoming ambiance'}</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'pt' ? 'Os Resultados' : 'The Results'}</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <Users className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">+45%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Uso de Áreas Externas' : 'Outdoor Area Usage'}</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <Sun className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-sm font-medium text-gray-600 uppercase">{language === 'pt' ? 'Conforto Sustentável' : 'Sustainable Comfort'}</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-orange-500">{language === 'pt' ? 'Testemunho' : 'Testimonial'}</h3>
                <blockquote className="text-lg italic mb-6">
                  "{language === 'pt' ? 'A transformação foi imediata. Os clientes agora preferem as áreas exteriores, mesmo nos dias mais frios.' : 'The transformation was immediate. Customers now prefer the outdoor areas, even on colder days.'}"
                </blockquote>
                <div className="font-semibold">Sonae Sierra Management</div>
              </div>

              <div className="bg-white border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">{language === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}</h3>
                <div className="space-y-3">
                  <Link to="/products/infrared-heating" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Solamagic</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/products/eco-fireplaces" className="flex items-center justify-between text-orange-600 hover:text-orange-700 bg-orange-50 p-3 rounded-lg transition-colors">
                    <span className="font-medium">Biolareiras Herkell</span>
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

export default CaseStudy3;