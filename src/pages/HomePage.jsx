import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Hammer, TrendingDown, Award, Quote } from 'lucide-react';
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
    {
      icon: Leaf,
      title: homeT.benefit1Title || 'Efficiency',
      text: homeT.benefit1Text || 'Save costs'
    },
    {
      icon: Hammer,
      title: homeT.benefit2Title || 'Quality',
      text: homeT.benefit2Text || 'Premium products'
    },
    {
      icon: TrendingDown,
      title: homeT.benefit3Title || 'Savings',
      text: homeT.benefit3Text || 'Quick ROI'
    },
    {
      icon: Award,
      title: homeT.benefit4Title || 'Warranty',
      text: homeT.benefit4Text || 'Long lifespan'
    }
  ];

  return (
    <>
      <SEOHead
        title={homeT.metaTitle || 'Evoluimos Comércio'}
        description={homeT.metaDescription || 'Thermal solutions'}
        canonical="/"
        schemas={schemas}
        language={language}
      />

      <div className="min-h-screen">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1700124084147-995973b6a970"
              alt="Modern thermal comfort solutions"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                {homeT.heroTitle || 'Sustainable Comfort'}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-4 font-semibold tracking-tight">
                {homeT.heroSubtitle || 'Smart Solutions'}
              </p>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {homeT.heroTagline || 'Reduce costs and increase comfort.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {commonT.getQuote || 'Get a Quote'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
                >
                  {commonT.viewSolutions || 'View Solutions'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                {homeT.whyTitle || 'Why Choose Us?'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-white/30 mx-auto mb-6" />
              <div className="w-full overflow-hidden px-4">
                <blockquote className="text-xl md:text-xl lg:text-2xl font-medium text-white mb-8 leading-relaxed tracking-tight whitespace-normal md:whitespace-nowrap">
                  "{homeT.founderQuoteText || (language === 'pt' ? 'Inovar é garantir um futuro sustentável para as próximas gerações.' : 'Innovating to guarantee a sustainable future for next generations.')}"
                </blockquote>
              </div>
              <p className="text-lg md:text-xl text-white/90 font-semibold tracking-tight">
                {homeT.founderName || 'Eduardo Catarino'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                {language === 'pt' 
                  ? 'Pronto para Transformar o Seu Conforto Térmico?' 
                  : 'Ready to Transform Your Thermal Comfort?'}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto tracking-tight">
                {language === 'pt'
                  ? 'Entre em contacto hoje e descubra como podemos ajudar.'
                  : 'Contact us today and discover how we can help.'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {commonT.getQuote || 'Get a Quote'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;