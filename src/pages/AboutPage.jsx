import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/utils/schemaMarkup';
import { CheckCircle2, Shield, Leaf, Target } from 'lucide-react';

const AboutPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Quem Somos - Evoluimos Comércio' : 'About Us - Evoluimos Comércio';
  const description = language === 'pt' ? 'A nossa missão, visão e compromisso com o conforto sustentável.' : 'Our mission, vision and commitment to sustainable comfort.';

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(language)
  ];

  const partnerBrands = ['SOLAMAGIC', 'DUOTHERM', 'CLIMATECOATING', 'DRYMAT', 'HERKELL', 'CLAGE', 'AHT'];

  return (
    <>
      <SEOHead title={title} description={description} canonical="/about" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: t?.nav?.home || 'Home', path: '/' }, { label: t?.nav?.about || 'About', path: '/about' }]} />
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <motion.div className="flex-1" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{language === 'pt' ? 'Nossa História' : 'Our Story'}</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === 'pt' 
                  ? 'Fundada em 2018 por Eduardo Catarino, a Evoluimos Comércio nasceu com uma missão clara: "Contribuir para a evolução do ser humano e da própria sociedade através de soluções sustentáveis."' 
                  : 'Founded in 2018 by Eduardo Catarino, Evoluimos Comércio was born with a clear mission: "Contribute to the evolution of human beings and society through sustainable solutions."'}
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
                <blockquote className="text-lg italic text-gray-800">
                  "O que significa, quando uma microempresa tem clientes como Mc Donalds, Avillez, Sonae... Provavelmente, é porque estamos a fazer algumas coisas certas..."
                </blockquote>
                <div className="mt-4 font-bold text-orange-600">Eduardo Catarino</div>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-[350px] shrink-0" 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
            >
              <div className="relative max-w-[350px] mx-auto">
                <div className="absolute inset-0 bg-orange-600 rounded-xl transform translate-x-3 translate-y-3 opacity-20"></div>
                
                <img 
                  src="/images/founder-placeholder.svg" 
                  alt="Eduardo Catarino, fundador da Evoluimos Comércio" 
                  loading="lazy"
                  className="relative w-full h-auto object-cover rounded-xl shadow-lg border-2 border-white/50" 
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: language === 'pt' ? 'Experiência' : 'Experience', text: '25+ Anos / Years' },
              { icon: Shield, title: language === 'pt' ? 'Clientes' : 'Clients', text: "McDonald's, Sonae, Avillez" },
              { icon: Leaf, title: language === 'pt' ? 'Sustentabilidade' : 'Sustainability', text: 'Eco-friendly & Certificados' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center border">
                  <Icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold mb-10">{language === 'pt' ? 'As Nossas Marcas Parceiras' : 'Our Partner Brands'}</h2>
            <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {partnerBrands.slice(0, 4).map(brand => (
                  <div key={brand} className="flex items-center justify-center px-6 py-4 bg-gray-50 hover:bg-orange-50 hover:border-orange-200 transition-colors rounded-xl font-bold text-gray-700 text-lg shadow-sm border border-gray-200">
                    {brand}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-3/4 mx-auto">
                {partnerBrands.slice(4).map(brand => (
                  <div key={brand} className="flex items-center justify-center px-6 py-4 bg-gray-50 hover:bg-orange-50 hover:border-orange-200 transition-colors rounded-xl font-bold text-gray-700 text-lg shadow-sm border border-gray-200">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;