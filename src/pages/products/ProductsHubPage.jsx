import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const INFRARED = [
  {
    name: 'Solamagic',
    tag: 'PREMIUM Made in Germany',
    badge: '⭐ Premium',
    badgeColor: 'bg-amber-500',
    desc: 'O topo da gama em infravermelhos de onda curta para exterior. Design versátil, alcance máximo, 92% de eficiência. A escolha dos melhores restaurantes e hotéis.',
    path: '/products/solamagic',
    img: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97?w=800&q=80',
    highlight: true,
  },
  {
    name: 'ComfortSun',
    tag: 'POLIVALENTE 4 Linhas',
    badge: 'Volume',
    badgeColor: 'bg-orange-600',
    desc: 'Solução polivalente com 4 linhas: Aquecimento Infravermelhos, Polivalente, Profissional e Deluxe. Flexibilidade para cada necessidade e orçamento.',
    path: '/products/comfortsun',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    highlight: false,
    lines: ['Infravermelhos', 'Polivalente', 'Profissional', 'Deluxe'],
  },
];

const HEATING = [
  {
    name: 'Duotherm',
    tag: 'AQUECIMENTO RADIANTE',
    desc: 'Radiadores em pedra natural produzidos na Alemanha. Calor saudável por infravermelhos, sem emissão de CO₂, com termostato e efeito decorativo único.',
    path: '/products/duotherm',
    img: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1?w=700&q=80',
  },
];

const PROTECTION = [
  {
    name: 'ClimateCoating',
    tag: 'REVESTIMENTO TÉRMICO',
    desc: 'Membrana cerâmica de nanotecnologia alemã. Aplica-se como tinta, isola termicamente, regula a humidade do ar e reduz custos de climatização.',
    path: '/products/climatecoating',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
  },
  {
    name: 'Drymat',
    tag: 'ELIMINAÇÃO DE HUMIDADE',
    desc: 'Tecnologia austríaca de frequência eletromagnética que elimina humidade ascendente sem obras. Instala-se numa parede e seca o imóvel em poucos meses.',
    path: '/products/drymat',
    img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=700&q=80',
  },
  {
    name: 'Bioclimatizadores',
    tag: 'ARREFECIMENTO NATURAL',
    desc: 'Arrefecimento por evaporação sem compressor, sem gases, baixo consumo. Ideal para substituir ar condicionado convencional no verão.',
    path: '/products/bioclimatizadores',
    img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=700&q=80',
  },
  {
    name: 'Biolareiras Herkell',
    tag: 'BIOLAREIRAS ECO',
    desc: 'Lareiras a bio-etanol e grelhadores a pellets. Conforto e estética sem chaminé, sem instalação de gás, totalmente ecológicos.',
    path: '/products/eco-fireplaces',
    img: 'https://images.unsplash.com/photo-1679419857423-ad10bd29a74f?w=700&q=80',
  },
];

const ProductCard = ({ p, large = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Link to={p.path}
      className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 ${p.highlight ? 'border-amber-300 ring-2 ring-amber-200' : 'border-gray-200 hover:border-orange-200'}`}
    >
      <div className={`relative overflow-hidden ${large ? 'h-56 sm:h-64' : 'h-44'}`}>
        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {p.badge && (
          <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-extrabold px-2.5 py-1 rounded-full`}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">{p.tag}</div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{p.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
        {p.lines && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {p.lines.map(l => (
              <span key={l} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded-full font-semibold">{l}</span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1 text-orange-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
          Saber mais <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function ProductsHubPage() {
  return (
    <>
      <SEOHead
        title="Produtos de Aquecimento e Conforto Térmico | Evoluimos Comércio"
        description="Solamagic, ComfortSun, Duotherm, ClimateCoating, Drymat e Bioclimatizadores. Tecnologia alemã para aquecimento, arrefecimento e proteção térmica."
        canonical="/products"
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Portfólio Completo</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">Os Nossos Produtos</h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </div>

          {/* Infravermelhos Exterior */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400 whitespace-nowrap">Infravermelhos para Exterior</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {INFRARED.map((p, i) => <ProductCard key={i} p={p} large />)}
            </div>
          </div>

          {/* Aquecimento Interior */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400 whitespace-nowrap">Aquecimento Interior</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {HEATING.map((p, i) => <ProductCard key={i} p={p} />)}
            </div>
          </div>

          {/* Proteção & Conforto */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400 whitespace-nowrap">Proteção, Arrefecimento & Conforto</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROTECTION.map((p, i) => <ProductCard key={i} p={p} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
