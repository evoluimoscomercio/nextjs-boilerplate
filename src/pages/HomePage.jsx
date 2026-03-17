import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Hammer, TrendingDown, Award, Quote, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '@/utils/schemaMarkup';

const HomePage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};
  const homeT = t?.home || {};
  const commonT = t?.common || {};

  const schemas = [
    generateLocalBusinessSchema(language),
    generateOrganizationSchema()
  ];

  const benefits = [
    { icon: Leaf,        title: homeT.benefit1Title || 'Eficiência',  text: homeT.benefit1Text || 'Reduza até 40% dos custos.' },
    { icon: Hammer,      title: homeT.benefit2Title || 'Qualidade',   text: homeT.benefit2Text || 'Tecnologia alemã de ponta.' },
    { icon: TrendingDown,title: homeT.benefit3Title || 'Poupança',    text: homeT.benefit3Text || 'Retorno em 3-5 anos.' },
    { icon: Award,       title: homeT.benefit4Title || 'Garantia',    text: homeT.benefit4Text || 'Até 25 anos de vida útil.' }
  ];

  const products = [
    { name: language === 'pt' ? 'Aquecimento Radiante' : 'Radiant Heating', path: '/products/radiant-heating', img: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1?w=600&q=80' },
    { name: language === 'pt' ? 'Infravermelhos' : 'Infrared Heating', path: '/products/infrared-heating', img: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97?w=600&q=80' },
    { name: language === 'pt' ? 'Eliminar Humidade' : 'Eliminate Moisture', path: '/products/moisture-elimination', img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=600&q=80' },
  ];

  return (
    <>
      <SEOHead
        title={homeT.metaTitle || 'Evoluimos Comércio | Soluções de Aquecimento Sustentável'}
        description={homeT.metaDescription || 'Soluções inovadoras de aquecimento, conforto térmico e eliminação de humidade. Tecnologia alemã. Até 40% de poupança energética.'}
        canonical="/"
        schemas={schemas}
        language={language}
      />

      <div>
        {/* Hero */}
        <section className="relative flex items-center overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1700124084147-995973b6a970?w=1600&q=85"
              alt="Soluções de conforto térmico modernas"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          </div>

          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 xl:px-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-orange-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                <span>● </span>
                {language === 'pt' ? 'Tecnologia Alemã Certificada' : 'Certified German Technology'}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                {homeT.heroTitle || 'Conforto Térmico Sustentável'}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-orange-400 mb-4 font-semibold tracking-tight">
                {homeT.heroSubtitle || 'Soluções Inteligentes para Espaços Modernos'}
              </p>
              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                {homeT.heroTagline || 'Reduza até 40% nos custos de energia. Conforto que dura 25 anos.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl active:scale-95"
                >
                  {commonT.getQuote || 'Peça Orçamento'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/40 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-base active:scale-95"
                >
                  {commonT.viewSolutions || 'Ver Soluções'}
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
                {[
                  { n: '25+', label: language === 'pt' ? 'Anos experiência' : 'Years experience' },
                  { n: '40%', label: language === 'pt' ? 'Poupança energia' : 'Energy savings' },
                  { n: '25', label: language === 'pt' ? 'Anos garantia' : 'Years warranty' },
                ].map(s => (
                  <div key={s.n} className="text-white">
                    <div className="text-2xl font-bold text-orange-400">{s.n}</div>
                    <div className="text-xs text-gray-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <a
            href="tel:+351965026603"
            className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-full shadow-lg text-sm font-semibold hover:shadow-xl transition-shadow"
          >
            <Phone className="w-4 h-4 text-orange-600" />
            <span className="hidden sm:inline">+351 965 026 603</span>
            <span className="sm:hidden">Ligar</span>
          </a>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                {homeT.whyTitle || 'Porquê Escolher-nos?'}
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                {language === 'pt'
                  ? 'Clientes como McDonald\'s, Sonae e Avillez confiam em nós.'
                  : 'Clients like McDonald\'s, Sonae and Avillez trust us.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 hover:bg-orange-50 rounded-2xl p-5 md:p-7 transition-all duration-300 group border border-transparent hover:border-orange-100"
                  >
                    <div className="w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  {language === 'pt' ? 'Os Nossos Produtos' : 'Our Products'}
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                  {language === 'pt' ? 'Tecnologia europeia certificada' : 'Certified European technology'}
                </p>
              </div>
              <Link to="/products" className="inline-flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 whitespace-nowrap">
                {language === 'pt' ? 'Ver todos' : 'View all'} <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {products.map((p, i) => (
                <motion.div
                  key={p.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                >
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-bold text-lg mb-2">{p.name}</p>
                    <Link to={p.path} className="inline-flex items-center text-orange-400 text-sm font-semibold hover:text-orange-300">
                      {commonT.learnMore || 'Saber mais'} <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="py-16 md:py-20 bg-orange-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote className="w-10 h-10 text-white/30 mx-auto mb-6" />
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                "{homeT.founderQuoteText || (language === 'pt'
                  ? 'Inovar é garantir um futuro sustentável para as próximas gerações.'
                  : 'To innovate is to ensure a sustainable future for next generations.')}"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-0.5 bg-white/40" />
                <p className="text-white/90 font-semibold">{homeT.founderName || 'Eduardo Catarino'}</p>
                <div className="w-10 h-0.5 bg-white/40" />
              </div>
              <p className="text-orange-200 text-sm mt-1">
                {language === 'pt' ? 'Fundador, Evoluimos Comércio' : 'Founder, Evoluimos Comércio'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs uppercase font-semibold tracking-widest text-gray-400 mb-8">
              {language === 'pt' ? 'Clientes de referência' : 'Reference clients'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {["McDonald's", "Grupo Avillez", "Sonae", "Duotherm", "Solamagic"].map(c => (
                <span key={c} className="text-gray-400 font-bold text-base md:text-lg tracking-tight hover:text-gray-600 transition-colors">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {language === 'pt'
                  ? 'Pronto para Transformar o Seu Conforto?'
                  : 'Ready to Transform Your Comfort?'}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {language === 'pt'
                  ? 'Orçamento gratuito e sem compromisso. Resposta em 24h.'
                  : 'Free quote, no obligation. Response within 24h.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all font-semibold shadow-lg active:scale-95"
                >
                  {commonT.getQuote || 'Peça Orçamento'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:+351965026603"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all font-semibold active:scale-95"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  +351 965 026 603
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
