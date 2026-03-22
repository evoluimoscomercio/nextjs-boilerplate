import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, TrendingDown, Sun, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const SolutionsHubPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Soluções para Cada Necessidade' : 'Solutions for Every Need';
  const desc = language === 'pt'
    ? 'Eliminar humidade, reduzir custos de aquecimento, aquecer esplanadas ou tornar o negócio mais sustentável temos a solução certa para si.'
    : 'Eliminate moisture, reduce heating costs, heat outdoor spaces, or make your business more sustainable we have the right solution for you.';

  const solutions = [
    {
      id: 'outdoor-comfort',
      name: language === 'pt' ? 'Melhorar Conforto em Esplanadas' : 'Improve Outdoor Comfort',
      desc: language === 'pt' ? 'Aumente a rentabilidade do seu espaço exterior.' : 'Increase profitability of your outdoor space.',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1662976631114-bcec16615950'
    },
    {
      id: 'eliminate-wall-moisture',
      name: language === 'pt' ? 'Eliminar Humidade nas Paredes' : 'Eliminate Wall Moisture',
      desc: language === 'pt' ? 'Soluções definitivas sem obras.' : 'Definitive solutions without renovation.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1697228428093-dda1eb6d9f1e'
    },
    {
      id: 'reduce-heating-costs',
      name: language === 'pt' ? 'Reduzir Custos de Aquecimento' : 'Reduce Heating Costs',
      desc: language === 'pt' ? 'Aumente a eficiência energética.' : 'Increase energy efficiency.',
      icon: TrendingDown,
      image: 'https://images.unsplash.com/photo-1654630106961-955f61257d8f'
    },
    {
      id: 'sustainable-business',
      name: language === 'pt' ? 'Negócios Sustentáveis' : 'Sustainable Business',
      desc: language === 'pt' ? 'Soluções corporativas e ESG. Reduza emissões e pague menos energia.' : 'Corporate and ESG solutions. Reduce emissions and lower energy costs.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e'
    }
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/solutions" language={language} image="https://images.unsplash.com/photo-1693594558979-aed4872ff156" />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: t?.nav?.home || 'Home', path: '/' }, { label: t?.nav?.solutions || 'Solutions', path: '/solutions' }]} />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div key={sol.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={sol.image} alt={sol.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-8">
                    <Icon className="w-8 h-8 text-orange-600 mb-4" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{sol.name}</h2>
                    <p className="text-gray-600 mb-6">{sol.desc}</p>
                    <Link to={`/solutions/${sol.id}`} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      {language === 'pt' ? 'Ver Solução' : 'View Solution'} <ArrowRight className="ml-2 w-5 h-5" />
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

export default SolutionsHubPage;