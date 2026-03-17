import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t = {} } = useLanguage() || {};

  const quickLinks = [
    { label: t?.nav?.home || 'Home', path: '/' },
    { label: t?.nav?.products || 'Products', path: '/products' },
    { label: t?.nav?.solutions || 'Solutions', path: '/solutions' },
    { label: t?.nav?.contact || 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-orange-500 mb-4">
              Evoluimos Comércio
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              {t?.footer?.companyName || 'Sustainable thermal comfort solutions.'}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.footer?.quickLinks || 'Quick Links'}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.footer?.contact || 'Contact'}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+351965026603"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  +351-965026603
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:evolucom@gmail.com"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  evolucom@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Ribeiro de Junco<br />
                  8900-057 Vila Nova de Cacela<br />
                  Portugal
                </span>
              </li>
            </ul>
            <p className="text-gray-400 text-xs mt-4">
              {t?.footer?.nif || 'VAT'}: PT513000461
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t?.footer?.copyright || '© 2024 Evoluimos Comércio. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;