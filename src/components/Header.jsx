import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language = 'pt', toggleLanguage = () => {}, t = {} } = useLanguage() || {};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 z-50">
            <span className="text-xl md:text-2xl font-bold text-orange-600 whitespace-nowrap">
              Evoluimos Comércio
            </span>
          </Link>

          <div className="hidden lg:flex items-center flex-1 justify-end space-x-4 xl:space-x-6">
            <Navigation />
            
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-4 xl:pl-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
                aria-label="Toggle language"
                title="Toggle Language"
              >
                <span className="font-bold text-sm">{(language || 'pt').toUpperCase()}</span>
              </button>

              <Link
                to="/contact"
                className="px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-md hover:shadow-lg whitespace-nowrap text-sm"
              >
                {t?.common?.getQuote || 'Get a Quote'}
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden items-center space-x-3 z-50">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600"
              aria-label="Toggle language"
            >
              <span className="font-bold text-sm">{(language || 'pt').toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 bg-gray-50 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t overflow-y-auto shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6 pb-32">
              <Navigation mobile onClose={() => setMobileMenuOpen(false)} />
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-8 px-6 py-4 bg-orange-600 text-white rounded-xl text-center font-bold text-lg shadow-lg"
              >
                {t?.common?.getQuote || 'Get a Quote'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;