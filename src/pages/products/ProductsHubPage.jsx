import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Sun, Droplet, Paintbrush, Flame, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

const ProductsHubPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Produtos de Aquecimento e Conforto Térmico Soluções Inovadoras' : 'Heating & Thermal Comfort Products Innovative Solutions';
  const desc = language === 'pt' ? 'Descubra a nossa gama de soluções inovadoras.' : 'Discover our range of innovative solutions.';

  const products = [
    {
      id: 'radiant-heating',
      name: 'Duotherm',
      desc: language === 'pt' ? 'Sistema de Aquecimento Radiante' : 'Radiant Heating System',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1'
    },
    {
      id: 'infrared-heating',
      name: 'Solamagic',
      desc: language === 'pt' ? 'Aquecimento por Infravermelhos' : 'Infrared Heating',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97'
    },
    {
      id: 'moisture-elimination',
      name: 'DRYMAT',
      desc: language === 'pt' ? 'Eliminação de Humidade Ascendente' : 'Ascending Moisture Elimination',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156'
    },
    {
      id: 'thermal-coating',
      name: 'ClimateCoating',
      desc: language === 'pt' ? 'Revestimento Térmico Cerâmico' : 'Ceramic Thermal Coating',
      icon: Paintbrush,
      image: 'https://images.unsplash.com/photo-1694869951357-bf02005cd770'
    },
    {
      id: 'eco-fireplaces',
      name: 'Herkell',
      desc: language === 'pt' ? 'Biolareiras e Grelhadores Ecológicos' : 'Eco Fireplaces & Ecological Grills',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1679419857423-ad10bd29a74f'
    },
    {
      id: 'electric-water-heaters',
      name: 'Clage',
      desc: language === 'pt' ? 'Esquentadores Elétricos Instantâneos' : 'Instant Electric Water Heaters',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1673696663705-6c338b43cdfb'
    }
  ];

  return (
    <>
      <SEOHead title={`${title} | Evoluimos Comércio`} description={desc} canonical="/products" language={language} />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: t?.nav?.home || 'Home', path: '/' }, { label: t?.nav?.products || 'Products', path: '/products' }]} />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600">
              {desc}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-8">
                    <Icon className="w-8 h-8 text-orange-600 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-6">{product.desc}</p>
                    <Link to={`/products/${product.id}`} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      {language === 'pt' ? 'Saber Mais' : 'Learn More'} <ArrowRight className="ml-2 w-5 h-5" />
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

export default ProductsHubPage;