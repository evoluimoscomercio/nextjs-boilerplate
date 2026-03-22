import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Sun, Droplets, Wind, Thermometer, Zap, Flame, Snowflake } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { WA_URL as WA } from '@/config/company';

/* ── Animated SVG Hero ───────────────────────────────────────────── */
function HeroGraphic() {
  const CX = 800, CY = 350, OR = 188;
  const orbitals = [
    { angle: -90,    Icon: Sun,         color: '#8B5A00' },
    { angle: -38.57, Icon: Zap,         color: '#1A5A80' },
    { angle:  12.86, Icon: Thermometer, color: '#A03020' },
    { angle:  64.29, Icon: Flame,       color: '#B84000' },
    { angle: 115.71, Icon: Droplets,    color: '#1A5A80' },
    { angle: 167.14, Icon: Wind,        color: '#2A6A30' },
    { angle: 218.57, Icon: Snowflake,   color: '#1A5A80' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="nblur"><feGaussianBlur stdDeviation="30" /></filter>
          <radialGradient id="nb1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6A9E50" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6A9E50" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nb2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#90B870" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#90B870" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nb3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B8D890" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#B8D890" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Blurred nature depth blobs */}
        <ellipse cx="80"  cy="160" rx="300" ry="240" fill="url(#nb1)" filter="url(#nblur)" />
        <ellipse cx="1100" cy="580" rx="280" ry="200" fill="url(#nb2)" filter="url(#nblur)" />
        <ellipse cx="350" cy="650" rx="320" ry="170" fill="url(#nb3)" filter="url(#nblur)" />
        <ellipse cx="600" cy="80"  rx="250" ry="130" fill="url(#nb2)" filter="url(#nblur)" />

        {/* Expanding pulse rings */}
        {[0, 1, 2].map(i => (
          <motion.circle key={i} cx={CX} cy={CY} stroke="#4A8A3A" strokeWidth="0.9" fill="none"
            animate={{ r: [OR * 0.42, OR + 170], strokeOpacity: [0.28, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay: i * 1.67 }}
          />
        ))}

        {/* Static concentric rings */}
        {[68, 112, OR, 232, 278].map((r, i) => (
          <circle key={i} cx={CX} cy={CY} r={r} stroke="#3A7030"
            strokeWidth={i === 2 ? 1.3 : 0.55}
            strokeOpacity={[0.30, 0.14, 0.30, 0.10, 0.07][i]}
            fill="none" />
        ))}
        <circle cx={CX} cy={CY} r="300" stroke="#3A7030" strokeWidth="0.4"
          strokeOpacity="0.07" fill="none" strokeDasharray="6 12" />

        {/* Lines center → orbitals */}
        {orbitals.map((o, i) => {
          const rad = (o.angle * Math.PI) / 180;
          return (
            <line key={i}
              x1={CX + Math.cos(rad) * 72} y1={CY + Math.sin(rad) * 72}
              x2={CX + Math.cos(rad) * (OR - 32)} y2={CY + Math.sin(rad) * (OR - 32)}
              stroke="#3A7030" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="3 7"
            />
          );
        })}

        {/* Orbital circles + icons via foreignObject */}
        {orbitals.map((o, i) => {
          const rad = (o.angle * Math.PI) / 180;
          const x = CX + Math.cos(rad) * OR;
          const y = CY + Math.sin(rad) * OR;
          return (
            <g key={i}>
              <motion.circle cx={x} cy={y} r={29}
                fill="rgba(255,255,255,0.68)" stroke="#4A8A3A" strokeWidth="1.3" strokeOpacity="0.40"
                animate={{ r: [29, 31.5, 29] }}
                transition={{ duration: 3 + i * 0.28, repeat: Infinity, ease: 'easeInOut', delay: i * 0.38 }}
              />
              <circle cx={x} cy={y} r="23" fill="rgba(255,255,255,0.30)" />
              <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}>
                  <o.Icon size={15} color={o.color} strokeWidth={2} />
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* Central circle */}
        <circle cx={CX} cy={CY} r="66" fill="rgba(255,255,255,0.75)" stroke="#3A7828" strokeWidth="2.5" strokeOpacity="0.45" />
        <circle cx={CX} cy={CY} r="60" fill="rgba(255,255,255,0.40)" />
        {/* House walls */}
        <path d={`M ${CX-24} ${CY-7} L ${CX-24} ${CY+29} L ${CX+24} ${CY+29} L ${CX+24} ${CY-7}`}
          fill="none" stroke="#2A5820" strokeWidth="1.9" strokeLinejoin="round" />
        {/* Roof */}
        <path d={`M ${CX-30} ${CY-5} L ${CX} ${CY-36} L ${CX+30} ${CY-5}`}
          fill="none" stroke="#2A5820" strokeWidth="1.9" strokeLinejoin="round" />
        {/* Door */}
        <rect x={CX-8} y={CY+11} width="16" height="18" rx="2" fill="none" stroke="#2A5820" strokeWidth="1.5" />
        {/* Window */}
        <rect x={CX+10} y={CY-1} width="11" height="11" rx="1.5" fill="none" stroke="#2A5820" strokeWidth="1.5" />
        {/* Eco leaf accent */}
        <motion.path
          d={`M ${CX+15} ${CY+23} Q ${CX+26} ${CY+10} ${CX+15} ${CY+2} Q ${CX+8} ${CY+15} ${CX+15} ${CY+23}`}
          fill="#3A8828"
          animate={{ fillOpacity: [0.50, 0.82, 0.50] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Pulsing dots at orbital positions on outer ring */}
        {orbitals.map((o, i) => {
          const rad = (o.angle * Math.PI) / 180;
          return (
            <motion.circle key={i}
              cx={CX + Math.cos(rad) * 275} cy={CY + Math.sin(rad) * 275}
              r={2.5} fill="#5A8A4A"
              animate={{ fillOpacity: [0.28, 0.72, 0.28], r: [2.5, 3.5, 2.5] }}
              transition={{ duration: 2.2 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.28 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ── Count up ──────────────────────────────────────────────────────── */
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = target / 90;
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(n));
    }, 1000/60);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Data ──────────────────────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Solamagic', tag: 'Premium', icon: Sun, desc: 'Infravermelhos de onda curta para esplanadas. Calor imediato, 92% de eficiência. Made in Germany.', path: '/products/solamagic', img: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97?w=700&q=80' },
  { name: 'ComfortSun', tag: 'Polivalente', icon: Zap, desc: 'Quatro linhas de aquecedores infravermelhos para qualquer espaço e orçamento.', path: '/products/comfortsun', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80' },
  { name: 'Duotherm', tag: 'Radiante', icon: Thermometer, desc: 'Radiadores em pedra natural. Calor saudável por infravermelhos, sem CO2.', path: '/products/duotherm', img: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1?w=700&q=80' },
  { name: 'ClimateCoating', tag: 'Revestimento', icon: Wind, desc: 'Membrana cerâmica de nanotecnologia. Isola termicamente e regula humidade.', path: '/products/climatecoating', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
  { name: 'Drymat', tag: 'Anti-Humidade', icon: Droplets, desc: 'Elimina humidade ascendente sem obras. Tecnologia eletromagnética alemã.', path: '/products/drymat', img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=700&q=80' },
  { name: 'Bioclimatizadores', tag: 'Arrefecimento', icon: Wind, desc: 'Arrefecimento natural por evaporação. Sem compressor. Ideal para o verão.', path: '/products/bioclimatizadores', img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=700&q=80' },
];

const SOLUTIONS = [
  { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort', icon: Sun, desc: 'Mantenha a esplanada aberta o ano todo. Mais ocupação, mais faturação.' },
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture', icon: Droplets, desc: 'Paredes com humidade ascendente? O Drymat resolve sem obras, em poucos meses.' },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs', icon: Zap, desc: 'Aquecimento inteligente que consome menos e dura mais. Retorno real do investimento.' },
  { label: 'Negócios Sustentáveis', path: '/solutions/sustainable-business', icon: Flame, desc: 'Soluções ecológicas para empresas que querem poupar e ser responsáveis.' },
];

/* ── Component ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: '#0F0F11', color: '#EDE8E0' }}>
      <style>{`
        .pjs { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .ec-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(184,69,0,0.10);
          border: 1px solid rgba(184,69,0,0.35);
          color: #8B4000;
        }
        .prod-card {
          display: block;
          position: relative;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prod-card:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(0,0,0,0.5); }
        .prod-card:hover img { transform: scale(1.06); }
        .prod-card img { transition: transform 0.5s ease; }
      `}</style>

      <SEOHead
        title="Evoluimos Comércio Conforto Térmico Sustentável"
        description="Aquecimento, arrefecimento e proteção de edifícios com tecnologia europeia de alta eficiência. Distribuidores oficiais de Solamagic, Duotherm, Drymat e mais."
        canonical="/"
      />

      {/* ── HERO ── */}
      <section
        aria-label="Apresentação"
        className="relative flex flex-col overflow-hidden"
        style={{ height: 'calc(100svh - 64px)', minHeight: '600px', color: '#142012', background: 'radial-gradient(ellipse 95% 85% at 68% 32%, #B2D49A 0%, #C8E2B0 18%, #DAEEC2 38%, #EAF6D8 62%, #F2F9EC 100%)' }}
      >
        <HeroGraphic />
        <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-12 lg:px-20 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center flex-1 text-center max-w-3xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
              <span className="ec-tag pjs mb-6 inline-block">Tecnologia Alemã</span>
              <h1 className="pjs" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, color: '#142012', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Conforto Térmico<br /><span style={{ color: '#B84500' }}>Sustentável</span>
              </h1>
              <p className="pjs" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: '#3A5835', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
                Aquecimento, arrefecimento e proteção de edifícios. Soluções de alta tecnologia europeia para habitação e negócio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="pjs" aria-label="Contactar via WhatsApp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#16A34A', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(22,163,74,0.3)' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />WhatsApp
                </a>
                <Link to="/products" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B84500', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(184,69,0,0.35)' }}>
                  Ver Produtos<ArrowRight style={{ width: '18px', height: '18px' }} aria-hidden="true" />
                </Link>
                <Link to="/solutions" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(20,60,15,0.07)', color: '#1A3A10', padding: '14px 24px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', border: '1px solid rgba(20,60,15,0.22)' }}>
                  Soluções
                </Link>
              </div>
              <a href="tel:+351965026603" className="pjs" aria-label="Ligar para +351 965 026 603"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(20,60,15,0.16)', borderRadius: '14px', padding: '11px 18px', textDecoration: 'none', backdropFilter: 'blur(8px)' }}>
                <div style={{ width: '38px', height: '38px', background: '#B84500', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone style={{ width: '18px', height: '18px', color: '#fff' }} aria-hidden="true" />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#142012', letterSpacing: '0.02em' }}>+351 965 026 603</span>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ borderTop: '1px solid rgba(20,60,15,0.14)', paddingTop: '18px' }}>
            <p className="pjs" style={{ color: '#4A6A40', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Clientes de referência</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {["McDonald's", "Grupo Avillez", "Sonae"].map(c => (
                <span key={c} className="pjs" style={{ color: '#3A5830', fontWeight: 700, fontSize: '14px' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH + STATS ── */}
      <section aria-label="A nossa abordagem" style={{ background: 'linear-gradient(180deg, #111114 0%, #130900 55%, #111114 100%)', padding: 'clamp(64px, 9vw, 104px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Label with lines */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', justifyContent: 'center' }}>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(184,69,0,0.4)' }} />
              <p className="pjs" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0A020', whiteSpace: 'nowrap' }}>A nossa abordagem</p>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(184,69,0,0.4)' }} />
            </div>

            {/* Heading + text */}
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
              <h2 className="pjs" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '18px' }}>
                Complementaridade <span style={{ color: '#B84500' }}>é a chave.</span>
              </h2>
              <p className="pjs" style={{ fontSize: '16px', color: '#7A7470', lineHeight: 1.85 }}>
                Aquecer bem um espaço não depende só do aquecedor. Paredes húmidas, pontes térmicas e falta de isolamento triplicam os custos. Por isso reunimos soluções que trabalham juntas: eliminação de humidade, revestimento térmico, aquecimento eficiente e arrefecimento natural.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { n: 25, suffix: '+', label: 'Anos de\nexperiência' },
                { n: 3, suffix: '', label: 'Grandes clientes\nnacionais' },
                { n: 7, suffix: '', label: 'Marcas\neuropeias' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ textAlign: 'center', padding: 'clamp(22px, 3vw, 36px) 12px', background: 'rgba(184,69,0,0.07)', border: '1px solid rgba(184,69,0,0.18)', borderRadius: '20px' }}>
                  <div className="pjs" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 800, color: '#F0A020', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <CountUp target={s.n} suffix={s.suffix} />
                  </div>
                  <div className="pjs" style={{ fontSize: '12px', color: '#6A6460', marginTop: '10px', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS overlay image cards ── */}
      <section aria-label="Os Nossos Produtos" style={{ background: '#0F0F11', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom: '48px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '12px' }}>
              Os Nossos Produtos
            </h2>
            <p className="pjs" style={{ color: '#9A9490', fontSize: '17px', lineHeight: 1.7, maxWidth: '480px' }}>
              Alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.path} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.07 }}>
                  <Link to={p.path} className="prod-card" aria-label={`Ver produto ${p.name}`}>
                    <img src={p.img} alt={`${p.name} ${p.desc}`} loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.55) 48%, rgba(5,5,7,0.08) 100%)' }} aria-hidden="true" />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#B84500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={{ width: '16px', height: '16px', color: '#fff' }} aria-hidden="true" />
                      </div>
                      <span className="pjs" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{p.tag}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                      <h3 className="pjs" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px', lineHeight: 1.2 }}>{p.name}</h3>
                      <p className="pjs" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>{p.desc}</p>
                      <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#F0A020', fontSize: '13px', fontWeight: 700 }}>
                        Saber mais <ArrowRight style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS 4 cards com descrição ── */}
      <section aria-label="Soluções" style={{ background: '#141417', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom: '52px', maxWidth: '640px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '16px' }}>
              Do frio ao calor,<br />
              <span style={{ color: '#B84500' }}>temos a solução certa</span>
            </h2>
            <p className="pjs" style={{ color: '#9A9490', fontSize: '17px', lineHeight: 1.75 }}>
              Aquecemos dentro e fora de casa, de forma sustentável, simples e económica. Cada problema tem um produto feito para o resolver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.path} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.08 }}>
                  <Link to={s.path}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '26px 22px', background: '#1A1A1E', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', textDecoration: 'none', transition: 'all 0.25s ease', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(184,69,0,0.45)'; e.currentTarget.style.background = '#1E1E24'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1A1A1E'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(184,69,0,0.12)', border: '1px solid rgba(184,69,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ width: '22px', height: '22px', color: '#F0A020' }} aria-hidden="true" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="pjs" style={{ fontSize: '17px', fontWeight: 700, color: '#EDE8E0', marginBottom: '8px', lineHeight: 1.3 }}>{s.label}</h3>
                      <p className="pjs" style={{ fontSize: '14px', color: '#7A7470', lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                    <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#F0A020', fontSize: '13px', fontWeight: 700 }}>
                      Saber mais <ArrowRight style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Contacto" style={{ background: 'linear-gradient(135deg, #8B3200 0%, #B84500 100%)', padding: 'clamp(60px, 7vw, 88px) 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <h2 className="pjs" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
              Pronto para começar?
            </h2>
            <p className="pjs" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '36px', fontSize: '17px', lineHeight: 1.6 }}>
              Análise gratuita, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="pjs" aria-label="Contactar via WhatsApp"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#14532D', padding: '15px 28px', borderRadius: '14px', fontWeight: 800, fontSize: '16px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                <MessageCircle style={{ width: '19px', height: '19px' }} aria-hidden="true" />
                WhatsApp
              </a>
              <a href="tel:+351965026603" className="pjs" aria-label="Ligar para +351 965 026 603"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(0,0,0,0.18)', color: '#fff', padding: '15px 28px', borderRadius: '14px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                <Phone style={{ width: '19px', height: '19px' }} aria-hidden="true" />
                +351 965 026 603
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
