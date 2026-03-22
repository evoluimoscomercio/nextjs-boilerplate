import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WA_URL as WA } from '@/config/company';

const NAV = [
  {
    label: 'Produtos',
    children: [
      { label: 'Todos os Produtos', path: '/products' },
      { group: 'Infravermelhos Exterior' },
      { label: 'Solamagic Premium', path: '/products/solamagic', badge: 'Premium' },
      { label: 'ComfortSun Polivalente', path: '/products/comfortsun' },
      { group: 'Aquecimento Interior' },
      { label: 'Duotherm Radiante', path: '/products/duotherm' },
      { group: 'Proteção e Conforto' },
      { label: 'ClimateCoating', path: '/products/climatecoating' },
      { label: 'Drymat Anti-Humidade', path: '/products/drymat' },
      { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' },
      { label: 'Biolareiras Herkell', path: '/products/eco-fireplaces' },
    ]
  },
  {
    label: 'Soluções',
    children: [
      { label: 'Todas as Soluções', path: '/solutions' },
      { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture' },
      { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs' },
      { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort' },
      { label: 'Negócios Sustentáveis', path: '/solutions/sustainable-business' },
    ]
  },
  { label: 'Sobre', path: '/about' },
  { label: 'Contacto', path: '/contact' },
];

const DropItem = ({ item, onClose }) => {
  const location = useLocation();
  if (item.group) return (
    <div style={{ padding: '10px 14px 4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF6B00', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {item.group}
    </div>
  );
  const active = location.pathname === item.path;
  return (
    <Link to={item.path} onClick={onClose}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', margin: '1px 6px', borderRadius: '8px',
        fontSize: '14px', fontWeight: active ? 600 : 400,
        color: active ? '#FF8C3A' : '#B0A8A0',
        background: active ? 'rgba(255,107,0,0.08)' : 'transparent',
        textDecoration: 'none', transition: 'all 0.15s',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#F0EBE3'; }}}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B0A8A0'; }}}>
      {item.label}
      {item.badge && <span style={{ fontSize: '10px', background: '#FF6B00', color: '#fff', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>{item.badge}</span>}
    </Link>
  );
};

const DesktopDrop = ({ item }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const active = item.children?.some(c => c.path && location.pathname === c.path);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        aria-expanded={open}
        aria-haspopup="true"
        style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 12px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: active ? '#FF8C3A' : '#A09890', transition: 'color 0.15s', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#F0EBE3'; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#A09890'; }}>
        {item.label}
        <ChevronDown style={{ width: '14px', height: '14px', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }} transition={{ duration: 0.15 }}
            style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', width: '248px', background: '#1A1816', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '8px 0', zIndex: 100, boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
            {item.children.map((c, i) => <DropItem key={i} item={c} onClose={() => setOpen(false)} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); setExpanded(null); }, [location.pathname]);

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: '64px', background: scrolled ? 'rgba(13,13,15,0.96)' : 'rgba(13,13,15,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s', fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none' }}>
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link to="/" aria-label="Evoluimos Comércio página inicial" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <svg height="30" viewBox="0 0 22 32" overflow="visible" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="22" height="32" rx="2" fill="#B84500"/>
              <text x="3" y="23.5" fill="white" fontSize="21" fontWeight="900" fontFamily="'Plus Jakarta Sans',sans-serif">E</text>
              <path d="M 18 2 A 14 14 0 1 1 18 30" fill="none" stroke="#F0A020" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#F5F0E8', whiteSpace: 'nowrap', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Evoluimos <span style={{ color: '#F0A020' }}>Comércio</span>
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map((item, i) => item.children
              ? <DesktopDrop key={i} item={item} />
              : (
                <Link key={i} to={item.path}
                  style={{ padding: '8px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, color: location.pathname === item.path ? '#FF8C3A' : '#A09890', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.15s' }}
                  onMouseEnter={e => { if (location.pathname !== item.path) e.currentTarget.style.color = '#F0EBE3'; }}
                  onMouseLeave={e => { if (location.pathname !== item.path) e.currentTarget.style.color = '#A09890'; }}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 15px', background: '#16A34A', color: '#fff', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              <MessageCircle style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/contact"
              style={{ padding: '9px 15px', background: '#FF6B00', color: '#fff', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Pedir Orçamento
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{ padding: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', cursor: 'pointer', flexShrink: 0 }}>
            {mobileOpen
              ? <X style={{ width: '18px', height: '18px', color: '#F0EBE3' }} aria-hidden="true" />
              : <Menu style={{ width: '18px', height: '18px', color: '#A09890' }} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 lg:hidden" style={{ background: 'rgba(0,0,0,0.65)', zIndex: 40, backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true" />
            <motion.nav
              id="mobile-menu"
              aria-label="Menu mobile"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 lg:hidden"
              style={{ width: '85vw', maxWidth: '360px', background: '#111114', zIndex: 50, display: 'flex', flexDirection: 'column', boxShadow: '-8px 0 48px rgba(0,0,0,0.6)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', height: '64px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontWeight: 800, color: '#FF6B00', fontSize: '16px' }}>Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '7px', cursor: 'pointer' }}>
                  <X style={{ width: '16px', height: '16px', color: '#A09890' }} aria-hidden="true" />
                </button>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                {NAV.map((item, i) => item.children ? (
                  <div key={i}>
                    <button onClick={() => setExpanded(expanded === i ? null : i)}
                      aria-expanded={expanded === i}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '13px 12px', borderRadius: '10px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#D5D0C8', fontWeight: 600, fontSize: '15px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.label}
                      <ChevronDown style={{ width: '16px', height: '16px', transition: 'transform 0.2s', transform: expanded === i ? 'rotate(180deg)' : 'none' }} aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} style={{ overflow: 'hidden', paddingLeft: '8px' }}>
                          {item.children.map((c, j) => <DropItem key={j} item={c} onClose={() => setMobileOpen(false)} />)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={i} to={item.path}
                    style={{ display: 'block', padding: '13px 12px', borderRadius: '10px', color: location.pathname === item.path ? '#FF8C3A' : '#D5D0C8', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', background: '#16A34A', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />
                  Contactar via WhatsApp
                </a>
                <Link to="/contact"
                  style={{ display: 'block', padding: '14px', background: '#FF6B00', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textAlign: 'center', textDecoration: 'none' }}>
                  Pedir Orçamento
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
