import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WA = 'https://wa.me/351965026603';

const NAV = [
  {
    label: 'Produtos',
    children: [
      { label: 'Todos os Produtos', path: '/products' },
      { group: 'Infravermelhos Exterior' },
      { label: 'Solamagic — Premium', path: '/products/solamagic', badge: 'Premium' },
      { label: 'ComfortSun — Polivalente', path: '/products/comfortsun' },
      { group: 'Aquecimento Interior' },
      { label: 'Duotherm — Radiante', path: '/products/duotherm' },
      { group: 'Proteção & Conforto' },
      { label: 'ClimateCoating', path: '/products/climatecoating' },
      { label: 'Drymat — Anti-Humidade', path: '/products/drymat' },
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
  { label: 'Casos de Sucesso', path: '/case-studies' },
  { label: 'Sobre', path: '/about' },
];

const DropItem = ({ item, onClose }) => {
  const location = useLocation();
  if (item.group) return (
    <div className="px-4 pt-3 pb-1">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.group}</span>
    </div>
  );
  const active = location.pathname === item.path;
  return (
    <Link
      to={item.path}
      onClick={onClose}
      className={`flex items-center justify-between px-4 py-2 text-sm transition-colors rounded-lg mx-1 ${
        active ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
      }`}
    >
      {item.label}
      {item.badge && (
        <span className="text-xs bg-orange-600 text-white px-1.5 py-0.5 rounded-full font-semibold">{item.badge}</span>
      )}
    </Link>
  );
};

const DesktopDropdown = ({ item }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = item.children?.some(c => c.path && location.pathname === c.path);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
      }`}>
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50"
          >
            {item.children.map((c, i) => <DropItem key={i} item={c} onClose={() => setOpen(false)} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
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
      <header
        style={{ height: '64px' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link to="/" className="font-bold text-orange-600 text-lg tracking-tight whitespace-nowrap flex-shrink-0">
            Evoluimos Comércio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map((item, i) => item.children
              ? <DesktopDropdown key={i} item={item} />
              : (
                <Link key={i} to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    location.pathname === item.path ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold text-sm transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link to="/contact"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold text-sm transition-colors whitespace-nowrap">
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0">
            {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 border-b border-gray-100 flex-shrink-0" style={{ height: '64px' }}>
                <span className="font-bold text-orange-600">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-3 px-3">
                {NAV.map((item, i) => item.children ? (
                  <div key={i}>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="flex items-center justify-between w-full px-3 py-3 text-gray-800 font-semibold text-base rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-2"
                        >
                          {item.children.map((c, j) => <DropItem key={j} item={c} onClose={() => setMobileOpen(false)} />)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={i} to={item.path}
                    className="block px-3 py-3 text-gray-800 font-semibold text-base rounded-xl hover:bg-gray-50 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="p-4 border-t border-gray-100 space-y-2 flex-shrink-0">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Contactar via WhatsApp
                </a>
                <Link to="/contact"
                  className="block w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-base text-center transition-colors">
                  Pedir Orçamento
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
