import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { generateBreadcrumbSchema } from '@/utils/schemaMarkup';
import { Helmet } from 'react-helmet';

const Breadcrumb = ({ items }) => {
  const { language } = useLanguage();
  const baseUrl = 'https://evoluimoscomercio.com';
  
  const schemaItems = items.map(item => ({
    name: item.label,
    url: `${baseUrl}${item.path}`
  }));
  
  const schema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;