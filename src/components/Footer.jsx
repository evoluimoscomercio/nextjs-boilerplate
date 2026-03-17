import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t = {}, language = 'pt' } = useLanguage() || {};

  const products = [
    { label: t?.nav?.subProducts?.radiant || 'Aquecimento Radiante', path: '/products/radiant-heating' },
    { label: t?.nav?.subProducts?.infrared || 'Infravermelhos', path: '/products/infrared-heating' },
    { label: t?.nav?.subProducts?.moisture || 'Eliminação de Humidade', path: '/products/moisture-elimination' },
    { label: t?.nav?.subProducts?.coating || 'Revestimento Térmico', path: '/products/thermal-coating' },
    { label: t?.nav?.subProducts?.eco || 'Biolareiras', path: '/products/eco-fireplaces' },
  ];

  const solutions = [
    { label: t?.nav?.subSolutions?.moisture || 'Eliminar Humidade', path: '/solutions/eliminate-moisture' },
    { label: t?.nav?.subSolutions?.costs || 'Reduzir Custos', path: '/solutions/reduce-heating-costs' },
    { label: t?.nav?.subSolutions?.outdoor || 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort' },
    { label: t?.nav?.subSolutions?.business || 'Negócios Sustentáveis', path: '/solutions/sustainable-business' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold text-orange-500 mb-3">Evoluimos Comércio</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t?.footer?.companyName || 'Soluções de conforto térmico sustentável.'}
            </p>
            <div className="flex gap-3 mb-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <Link to="/contact" className="inline-flex items-center text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors">
              {t?.common?.getQuote || 'Peça Orçamento'} <ArrowRight className="ml-1 w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t?.nav?.products || 'Produtos'}
            </h3>
            <ul className="space-y-2.5">
              {products.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t?.nav?.solutions || 'Soluções'}
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t?.footer?.contact || 'Contactos'}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+351965026603" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  +351 965 026 603
                </a>
              </li>
              <li>
                <a href="mailto:evolucom@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  evolucom@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Ribeiro de Junco<br />8900-057 Vila Nova de Cacela<br />Portugal</span>
              </li>
            </ul>
            <p className="text-gray-600 text-xs mt-4">
              {t?.footer?.nif || 'NIF'}: PT513000461
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Evoluimos Comércio. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-gray-300 transition-colors">{t?.nav?.about || 'Sobre'}</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">{t?.nav?.contact || 'Contactos'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
