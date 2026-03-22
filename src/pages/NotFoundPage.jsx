import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Página não encontrada | Evoluimos Comércio"
        description="A página que procura não existe."
        canonical="/404"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          background: '#0F0F11',
          color: '#EDE8E0',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '96px', fontWeight: 800, color: '#FF6B00', lineHeight: 1, marginBottom: '8px' }}>
          404
        </p>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#F5F0E8', marginBottom: '14px' }}>
          Página não encontrada
        </h1>
        <p style={{ color: '#7A7470', fontSize: '16px', maxWidth: '400px', lineHeight: 1.7, marginBottom: '36px' }}>
          A página que procura não existe ou foi movida. Verifique o endereço ou explore o nosso site.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              padding: '13px 26px',
              background: '#FF6B00',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Voltar ao início
          </Link>
          <Link
            to="/products"
            style={{
              padding: '13px 26px',
              background: 'rgba(255,255,255,0.07)',
              color: '#EDE8E0',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Ver produtos
          </Link>
          <Link
            to="/contact"
            style={{
              padding: '13px 26px',
              background: 'rgba(255,255,255,0.07)',
              color: '#EDE8E0',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
