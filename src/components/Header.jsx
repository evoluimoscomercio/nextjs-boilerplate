import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language = 'pt', toggleLanguage = () => {}, t = {} } = useLanguage() || {};

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/98 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-12">
            <Link to="/" className="flex items-center z-50 flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-lg md:text-xl font-bold text-orange-600 tracking-tight whitespace-nowrap">
                Evoluimos Comércio
              </span>
            </Link>

            <div className="hidden lg:flex items-center flex-1 justify-end gap-6">
              <Navigation />
              <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                <button
                  onClick={toggleLanguage}
                  className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors font-bold text-xs flex items-center justify-center"
                  aria-label="Mudar idioma"
                >
                  {(language || 'pt').toUpperCase()}
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm shadow-sm whitespace-nowrap"
                >
                  {t?.common?.getQuote || 'Peça Orçamento'}
                </Link>
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-2 z-50">
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 font-bold text-xs flex items-center justify-center"
                aria-label="Mudar idioma"
              >
                {(language || 'pt').toUpperCase()}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-orange-600 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Abrir menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="font-bold text-orange-600">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <Navigation mobile onClose={() => setMobileMenuOpen(false)} />
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 bg-orange-600 text-white rounded-xl text-center font-bold text-base shadow-md hover:bg-orange-700 transition-colors"
                >
                  {t?.common?.getQuote || 'Peça Orçamento Rápido'}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
