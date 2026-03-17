import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.warn('useLanguage must be used within a LanguageProvider. Using fallback.');
    return { language: 'pt', toggleLanguage: () => {}, t: translations.pt };
  }
  return context;
};

const translations = {
  pt: {
    nav: {
      home: 'Início',
      products: 'Produtos',
      solutions: 'Soluções',
      resources: 'Recursos',
      about: 'Sobre',
      contact: 'Contactos',
      learn: 'Aprender',
      subProducts: {
        all: 'Todos os Produtos',
        radiant: 'Aquecimento Radiante',
        infrared: 'Infravermelhos',
        moisture: 'Eliminação de Humidade',
        coating: 'Revestimento Térmico',
        eco: 'Biolareiras',
        water: 'Esquentadores Elétricos'
      },
      subSolutions: {
        all: 'Todas as Soluções',
        moisture: 'Eliminar Humidade',
        costs: 'Reduzir Custos',
        outdoor: 'Conforto em Esplanadas',
        business: 'Negócios Sustentáveis',
        construction: 'Construção & Reabilitação'
      },
      subResources: {
        caseStudies: 'Casos de Sucesso',
        learnHub: 'Centro de Conteúdo'
      }
    },
    common: {
      getQuote: 'Peça Orçamento Rápido',
      learnMore: 'Saber Mais',
      viewSolutions: 'Ver Soluções',
      contactUs: 'Contacte-nos',
      readMore: 'Ler Mais',
      backHome: 'Voltar ao Início',
      submit: 'Enviar',
      calculating: 'A calcular...',
      success: 'Sucesso!',
      error: 'Erro'
    },
    footer: {
      companyName: 'Soluções de conforto térmico sustentável.',
      quickLinks: 'Links Rápidos',
      contact: 'Contactos',
      nif: 'NIF',
      copyright: '© 2024 Evoluimos Comércio. Todos os direitos reservados.'
    },
    home: {
      metaTitle: 'Evoluimos Comércio | Soluções de Aquecimento Sustentável',
      metaDescription: 'Soluções inovadoras de aquecimento e conforto térmico.',
      heroTitle: 'Conforto Térmico Sustentável',
      heroSubtitle: 'Soluções Inteligentes para Espaços Modernos',
      heroTagline: 'Reduza custos e aumente o conforto.',
      whyTitle: 'Porquê Escolher-nos?',
      benefit1Title: 'Eficiência',
      benefit1Text: 'Reduza até 40% dos custos.',
      benefit2Title: 'Qualidade',
      benefit2Text: 'Tecnologia alemã de ponta.',
      benefit3Title: 'Poupança',
      benefit3Text: 'Retorno em 3-5 anos.',
      benefit4Title: 'Garantia',
      benefit4Text: 'Até 25 anos de vida útil.',
      founderQuoteText: 'Inovar é garantir um futuro sustentável para as próximas gerações.',
      founderName: 'Eduardo Catarino'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      resources: 'Resources',
      about: 'About',
      contact: 'Contact',
      learn: 'Learn',
      subProducts: {
        all: 'All Products',
        radiant: 'Radiant Heating',
        infrared: 'Infrared Heating',
        moisture: 'Moisture Elimination',
        coating: 'Thermal Coating',
        eco: 'Eco Fireplaces',
        water: 'Electric Water Heaters'
      },
      subSolutions: {
        all: 'All Solutions',
        moisture: 'Eliminate Moisture',
        costs: 'Reduce Costs',
        outdoor: 'Outdoor Comfort',
        business: 'Sustainable Business',
        construction: 'Construction & Rehab'
      },
      subResources: {
        caseStudies: 'Case Studies',
        learnHub: 'Learning Center'
      }
    },
    common: {
      getQuote: 'Get a Free Quote',
      learnMore: 'Learn More',
      viewSolutions: 'View Solutions',
      contactUs: 'Contact Us',
      readMore: 'Read More',
      backHome: 'Back to Home',
      submit: 'Submit',
      calculating: 'Calculating...',
      success: 'Success!',
      error: 'Error'
    },
    footer: {
      companyName: 'Sustainable thermal comfort solutions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      nif: 'VAT',
      copyright: '© 2024 Evoluimos Comércio. All rights reserved.'
    },
    home: {
      metaTitle: 'Evoluimos Comércio | Sustainable Heating Solutions',
      metaDescription: 'Innovative heating and thermal comfort solutions.',
      heroTitle: 'Sustainable Thermal Comfort',
      heroSubtitle: 'Smart Solutions for Modern Spaces',
      heroTagline: 'Reduce costs and increase comfort.',
      whyTitle: 'Why Choose Us?',
      benefit1Title: 'Efficiency',
      benefit1Text: 'Reduce costs up to 40%.',
      benefit2Title: 'Quality',
      benefit2Text: 'Cutting-edge German technology.',
      benefit3Title: 'Savings',
      benefit3Text: 'ROI in 3-5 years.',
      benefit4Title: 'Warranty',
      benefit4Text: 'Up to 25 years lifespan.',
      founderQuoteText: 'To innovate is to ensure a sustainable future for the next generations.',
      founderName: 'Eduardo Catarino'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('evolucom_language');
    return saved === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('evolucom_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  // Defensive fallback getter
  const t = new Proxy(translations[language] || translations.pt, {
    get(target, prop) {
      return target[prop] || translations.pt[prop] || {};
    }
  });

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};