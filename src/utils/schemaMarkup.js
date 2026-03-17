export const generateLocalBusinessSchema = (language = 'pt') => {
  const isPortuguese = language === 'pt';
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Evoluimos Comércio — Soluções Térmicas & Conforto S.A.",
    "image": "https://evoluimoscomercio.com/logo.png",
    "description": isPortuguese 
      ? "Soluções inteligentes de aquecimento, conforto térmico e eliminação de humidade."
      : "Intelligent heating, thermal comfort, and moisture elimination solutions.",
    "@id": "https://evoluimoscomercio.com",
    "url": "https://evoluimoscomercio.com",
    "telephone": "+351965026603",
    "email": "evolucom@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ribeiro de Junco",
      "addressLocality": "Vila Nova de Cacela",
      "postalCode": "8900-057",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.1669,
      "longitude": -7.5374
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "€€",
    "taxID": "PT513000461"
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evoluimos Comércio",
    "legalName": "Evoluimos Comércio — Soluções Térmicas & Conforto S.A.",
    "url": "https://evoluimoscomercio.com",
    "logo": "https://evoluimoscomercio.com/logo.png",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Eduardo Catarino"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+351-965026603",
      "contactType": "customer service",
      "email": "evolucom@gmail.com",
      "availableLanguage": ["Portuguese", "English"]
    },
    "sameAs": [
      "https://facebook.com/evoluimoscomercio",
      "https://linkedin.com/company/evoluimoscomercio"
    ]
  };
};

export const generateProductSchema = (product, language = 'pt') => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Evoluimos Comércio"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "url": product.url
    }
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateHowToSchema = (howTo, language = 'pt') => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateArticleSchema = (article, language = 'pt') => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "Evoluimos Comércio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Evoluimos Comércio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://evoluimoscomercio.com/logo.png"
      }
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "description": article.description
  };
};

export const generateReviewSchema = (review) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Evoluimos Comércio"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  };
};

export const generateContactSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Evoluimos Comércio",
    "description": "Contact us for quotes, expert advice, and assessments on intelligent heating and moisture elimination.",
    "url": "https://evoluimoscomercio.com/contact"
  };
};