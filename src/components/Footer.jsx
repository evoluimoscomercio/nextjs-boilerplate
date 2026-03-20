import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

const WA = 'https://wa.me/351965026603';

const PRODUCTS = [
  { label: 'Solamagic Premium', path: '/products/solamagic' },
  { label: 'ComfortSun Polivalente', path: '/products/comfortsun' },
  { label: 'Duotherm Radiante', path: '/products/duotherm' },
  { label: 'ClimateCoating', path: '/products/climatecoating' },
  { label: 'Drymat Anti-Humidade', path: '/products/drymat' },
  { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' },
];

const SOLUTIONS = [
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture' },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs' },
  { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort' },
  { label: 'Negócios Sustentáveis', path: '/solutions/sustainable-business' },
  { label: 'Casos de Sucesso', path: '/case-studies' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#080809', color: '#A09890', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {/* Top bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800, color: '#F5F0E8', marginBottom: '6px' }}>
                Evoluimos Comércio
              </h2>
              <p style={{ fontSize: '13px', color: '#504840', maxWidth: '320px', lineHeight: 1.7 }}>
                Soluções de alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
              </p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#22C55E', color: '#fff', padding: '13px 22px', borderRadius: '12px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 0 24px rgba(34,197,94,0.2)', transition: 'all 0.2s' }}>
              <MessageCircle style={{ width: '18px', height: '18px' }} />
              Contactar via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ padding: '56px 24px' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginBottom: '20px' }}>Contactos</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a href="tel:+351965026603" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#A09890', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone style={{ width: '13px', height: '13px', color: '#FF8C3A' }} />
                  </div>
                  +351 965 026 603
                </a>
              </li>
              <li>
                <a href="mailto:evolucom@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#A09890', textDecoration: 'none', fontSize: '13px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail style={{ width: '13px', height: '13px', color: '#FF8C3A' }} />
                  </div>
                  evolucom@gmail.com
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <MapPin style={{ width: '13px', height: '13px', color: '#FF8C3A' }} />
                  </div>
                  <span>Vila Nova de Cacela<br />8900-057 · Portugal</span>
                </div>
              </li>
            </ul>
            <p style={{ marginTop: '20px', fontSize: '11px', color: '#302820' }}>NIF: PT513000461</p>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginBottom: '20px' }}>Produtos</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {PRODUCTS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#706860', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px' }}
                    onMouseEnter={e => e.target.style.color = '#F0EDE8'}
                    onMouseLeave={e => e.target.style.color = '#706860'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginBottom: '20px' }}>Soluções</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SOLUTIONS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#706860', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#F0EDE8'}
                    onMouseLeave={e => e.target.style.color = '#706860'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginBottom: '20px' }}>Empresa</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Sobre Nós', path: '/about' },
                { label: 'Contactos', path: '/contact' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#706860', textDecoration: 'none', fontSize: '13px' }}
                    onMouseEnter={e => e.target.style.color = '#F0EDE8'}
                    onMouseLeave={e => e.target.style.color = '#706860'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini brands */}
            <div style={{ marginTop: '32px' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#302820', marginBottom: '12px' }}>Marcas representadas</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Solamagic', 'ComfortSun', 'Duotherm', 'ClimateCoating', 'Drymat', 'Herkell'].map(b => (
                  <span key={b} style={{ fontSize: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '3px 8px', color: '#403830' }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '20px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '12px', color: '#302820' }}>© 2025 Evoluimos Comércio. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/about" style={{ color: '#302820', fontSize: '12px', textDecoration: 'none' }}>Sobre</Link>
            <Link to="/contact" style={{ color: '#302820', fontSize: '12px', textDecoration: 'none' }}>Contactos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
