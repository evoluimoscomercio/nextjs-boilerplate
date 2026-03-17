import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Evoluimos Comércio", 
  description = "Soluções de alto conforto com baixo custo", 
  canonical, 
  schemas = [],
  language = 'pt',
  image = "https://images.unsplash.com/photo-1691246276155-f38f5c2e6856",
  type = "website"
}) => {
  const baseUrl = 'https://evoluimoscomercio.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  
  // Ensure image is an absolute URL if it's a relative path
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const locale = language === 'pt' ? 'pt_PT' : 'en_US';

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="Evoluimos Comércio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Schema.org structured data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;