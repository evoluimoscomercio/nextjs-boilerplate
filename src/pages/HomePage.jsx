import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Sun, Droplets, Wind, Thermometer, Zap, Flame } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const WA = 'https://wa.me/351965026603';

/* ── Animated heat-wave SVG hero graphic ─────────────────────────── */
function HeatWave() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1200 700"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="glow1" cx="60%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="80%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#FF9500" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
          </radialGradient>
          <filter id="blur1">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Background glow blobs */}
        <ellipse cx="750" cy="350" rx="420" ry="280" fill="url(#glow1)" />
        <ellipse cx="950" cy="180" rx="260" ry="200" fill="url(#glow2)" />

        {/* Heat wave lines — animated */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <motion.path
            key={i}
            d={`M ${650 + i * 40} 80 Q ${750 + i * 30} ${200 + i * 20} ${700 + i * 40} 350 Q ${780 + i * 25} ${480 + i * 15} ${720 + i * 40} 620`}
            stroke={i % 2 === 0 ? '#FF6B00' : '#FF9500'}
            strokeWidth={i === 2 ? 2 : 1}
            strokeOpacity={0.15 + i * 0.05}
            fill="none"
            filter="url(#blur1)"
            animate={{
              d: [
                `M ${650 + i * 40} 80 Q ${750 + i * 30} ${200 + i * 20} ${700 + i * 40} 350 Q ${780 + i * 25} ${480 + i * 15} ${720 + i * 40} 620`,
                `M ${650 + i * 40} 80 Q ${720 + i * 30} ${220 + i * 20} ${740 + i * 40} 350 Q ${760 + i * 25} ${500 + i * 15} ${700 + i * 40} 620`,
                `M ${650 + i * 40} 80 Q ${750 + i * 30} ${200 + i * 20} ${700 + i * 40} 350 Q ${780 + i * 25} ${480 + i * 15} ${720 + i * 40} 620`,
              ],
            }}
            transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Floating orbs */}
        {[
          { cx: 820, cy: 200, r: 6, delay: 0 },
          { cx: 920, cy: 320, r: 4, delay: 0.8 },
          { cx: 760, cy: 440, r: 5, delay: 1.6 },
          { cx: 1050, cy: 250, r: 3, delay: 0.4 },
          { cx: 980, cy: 420, r: 4, delay: 1.2 },
        ].map((orb, i) => (
          <motion.circle
            key={i}
            cx={orb.cx}
            cy={orb.cy}
            r={orb.r}
            fill="#FF6B00"
            fillOpacity={0.6}
            animate={{ cy: [orb.cy, orb.cy - 18, orb.cy], fillOpacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
          />
        ))}

        {/* Large geometric circle accent */}
        <motion.circle
          cx="900"
          cy="350"
          r="220"
          stroke="#FF6B00"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          fill="none"
          animate={{ r: [220, 240, 220] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="900"
          cy="350"
          r="160"
          stroke="#FF9500"
          strokeWidth="0.5"
          strokeOpacity="0.1"
          fill="none"
          animate={{ r: [160, 175, 160] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Grid dots pattern */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={620 + col * 55}
              cy={80 + row * 80}
              r="1"
              fill="#FF6B00"
              fillOpacity="0.08"
            />
          ))
        )}
      </svg>
    </div>
  );
}

/* ── Stat counter ─────────────────────────────────────────────────── */
function CountUp({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Product card ─────────────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Solamagic', tag: 'Premium', desc: 'Infravermelhos onda curta para exterior. 92% eficiência. Made in Germany.', path: '/products/solamagic', icon: Sun, color: 'from-amber-500/10 to-orange-500/5', border: 'border-amber-500/20', accent: 'text-amber-400' },
  { name: 'ComfortSun', tag: 'Polivalente', desc: 'Quatro linhas de aquecedores infravermelhos para qualquer espaço e orçamento.', path: '/products/comfortsun', icon: Zap, color: 'from-orange-500/10 to-red-500/5', border: 'border-orange-500/20', accent: 'text-orange-400' },
  { name: 'Duotherm', tag: 'Radiante', desc: 'Radiadores em pedra natural. Calor saudável por infravermelhos, sem CO2.', path: '/products/duotherm', icon: Thermometer, color: 'from-stone-500/10 to-orange-500/5', border: 'border-stone-500/20', accent: 'text-stone-400' },
  { name: 'ClimateCoating', tag: 'Revestimento', desc: 'Membrana cerâmica de nanotecnologia. Isola termicamente, regula humidade.', path: '/products/climatecoating', icon: Wind, color: 'from-blue-500/10 to-cyan-500/5', border: 'border-blue-500/20', accent: 'text-blue-400' },
  { name: 'Drymat', tag: 'Anti-Humidade', desc: 'Elimina humidade ascendente sem obras. Tecnologia eletromagnética alemã.', path: '/products/drymat', icon: Droplets, color: 'from-cyan-500/10 to-teal-500/5', border: 'border-cyan-500/20', accent: 'text-cyan-400' },
  { name: 'Bioclimatizadores', tag: 'Arrefecimento', desc: 'Arrefecimento natural por evaporação. Sem compressor. Ideal para o verão.', path: '/products/bioclimatizadores', icon: Wind, color: 'from-teal-500/10 to-green-500/5', border: 'border-teal-500/20', accent: 'text-teal-400' },
];

const SOLUTIONS = [
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture', icon: Droplets },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs', icon: Zap },
  { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort', icon: Sun },
  { label: 'Negócios Sustentáveis', path: '/solutions/sustainable-business', icon: Flame },
];

/* ── Main component ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: '#0D0D0F', color: '#F0EDE8', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .tag-pill {
          display: inline-flex; align-items: center;
          padding: 3px 10px; border-radius: 999px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255,107,0,0.12);
          border: 1px solid rgba(255,107,0,0.25);
          color: #FF8C3A;
        }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); border-color: rgba(255,107,0,0.4) !important; }
        .orange-line {
          display: block; width: 40px; height: 3px;
          background: #FF6B00; border-radius: 2px; margin-bottom: 1.5rem;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring::before {
          content: ''; position: absolute; inset: -8px;
          border-radius: 50%; border: 2px solid #FF6B00;
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{
          height: 'calc(100svh - 64px)',
          minHeight: '580px',
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, #1A0F00 0%, #0D0D0F 70%)',
        }}
      >
        <HeatWave />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />

        <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-12 lg:px-20 xl:px-28 py-10 sm:py-14">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag-pill mb-6 inline-block">Tecnologia Alemã</span>

            <h1 className="syne leading-[0.95] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', color: '#F5F0E8' }}>
              Conforto<br />
              <span style={{ color: '#FF6B00' }}>Térmico</span><br />
              Sustentável
            </h1>

            <p className="mb-8 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#A09890', maxWidth: '440px' }}>
              Aquecimento, arrefecimento e proteção de edifícios. Soluções de alta tecnologia europeia para habitação e negócio.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold transition-all active:scale-95"
                style={{ background: '#22C55E', color: '#fff', padding: '12px 22px', borderRadius: '12px', fontSize: '14px', boxShadow: '0 0 24px rgba(34,197,94,0.3)' }}>
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link to="/products"
                className="inline-flex items-center gap-2 font-semibold transition-all active:scale-95"
                style={{ background: '#FF6B00', color: '#fff', padding: '12px 22px', borderRadius: '12px', fontSize: '14px', boxShadow: '0 0 24px rgba(255,107,0,0.3)' }}>
                Ver Produtos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/solutions"
                className="inline-flex items-center gap-2 font-semibold transition-all active:scale-95"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#F0EDE8', padding: '12px 22px', borderRadius: '12px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                Soluções
              </Link>
            </div>

            <a href="tel:+351965026603"
              className="inline-flex items-center gap-3 transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '10px 16px' }}>
              <div className="relative pulse-ring" style={{ width: '36px', height: '36px', background: '#FF6B00', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold" style={{ fontSize: '18px', letterSpacing: '0.02em', color: '#F0EDE8' }}>+351 965 026 603</span>
            </a>
          </motion.div>

          {/* Clients strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}
          >
            <p style={{ color: '#4A4540', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Clientes de referência</p>
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {["McDonald's", "Grupo Avillez", "Sonae"].map(c => (
                <span key={c} style={{ color: '#5A5550', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#FF6B00', padding: '0' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          {[
            { n: 25, suffix: '+', label: 'Anos de experiência' },
            { n: 3, suffix: '', label: 'Grandes clientes nacionais' },
            { n: 7, suffix: '', label: 'Marcas europeias' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
              style={{ padding: '28px 16px', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.1)' : 'none' }}
            >
              <span className="syne" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                <CountUp target={s.n} suffix={s.suffix} />
              </span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section style={{ background: '#0D0D0F', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '56px' }}
          >
            <span className="orange-line" />
            <h2 className="syne" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0E8', lineHeight: 1.1, marginBottom: '12px' }}>
              O Nosso Portfólio
            </h2>
            <p style={{ color: '#706860', maxWidth: '480px', lineHeight: 1.7 }}>
              Alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.path}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link to={p.path} className="card-hover block"
                    style={{ background: `linear-gradient(135deg, #141416, #111113)`, border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon className="w-5 h-5" style={{ color: '#FF8C3A' }} />
                      </div>
                      <span className="tag-pill">{p.tag}</span>
                    </div>
                    <h3 className="syne" style={{ fontSize: '20px', color: '#F5F0E8', marginBottom: '10px' }}>{p.name}</h3>
                    <p style={{ color: '#706860', fontSize: '13px', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '20px', color: '#FF8C3A', fontSize: '13px', fontWeight: 600 }}>
                      Saber mais <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ─────────────────────────────────────────────────── */}
      <section style={{ background: '#111113', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="orange-line" />
              <h2 className="syne" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F5F0E8', lineHeight: 1.1, marginBottom: '16px' }}>
                Resolvemos Problemas,<br />
                <span style={{ color: '#FF6B00' }}>Não Apenas Vendemos</span>
              </h2>
              <p style={{ color: '#706860', lineHeight: 1.8, marginBottom: '36px', maxWidth: '420px' }}>
                A nossa abordagem é complementar — os produtos criam sinergias para oferecer soluções completas de conforto térmico, do inverno ao verão.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOLUTIONS.map(s => {
                  const Icon = s.icon;
                  return (
                    <Link key={s.path} to={s.path} className="card-hover"
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#141416', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: '16px', height: '16px', color: '#FF8C3A' }} />
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#C0B8B0' }}>{s.label}</span>
                      <ArrowRight style={{ width: '14px', height: '14px', color: '#4A4540', marginLeft: 'auto' }} />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Animated graphic */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
              style={{ aspectRatio: '1', maxWidth: '420px', margin: '0 auto' }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#centerGlow)" />
                {/* Orbital rings */}
                {[80, 120, 160].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx="200" cy="200" r={r}
                    stroke="#FF6B00" strokeOpacity={0.08 + i * 0.04}
                    strokeWidth="1" fill="none"
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    style={{ transformOrigin: '200px 200px' }}
                    transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                  />
                ))}
                {/* Center icon */}
                <motion.g
                  animate={{ scale: [1, 1.05, 1] }}
                  style={{ transformOrigin: '200px 200px' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <circle cx="200" cy="200" r="52" fill="#FF6B00" fillOpacity="0.1" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
                  <circle cx="200" cy="200" r="36" fill="#FF6B00" fillOpacity="0.15" />
                  <text x="200" y="208" textAnchor="middle" fontSize="28" fill="#FF8C3A">🔥</text>
                </motion.g>
                {/* Orbiting dots */}
                {[
                  { r: 80, angle: 0, color: '#FF6B00', label: 'Calor' },
                  { r: 120, angle: 72, color: '#22C55E', label: 'Ecológico' },
                  { r: 80, angle: 144, color: '#3B82F6', label: 'Frio' },
                  { r: 120, angle: 216, color: '#A78BFA', label: 'Saúde' },
                  { r: 80, angle: 288, color: '#FBBF24', label: 'Poupança' },
                ].map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 200 + node.r * Math.cos(rad);
                  const y = 200 + node.r * Math.sin(rad);
                  return (
                    <motion.g key={i}
                      animate={{ rotate: 360 }}
                      style={{ transformOrigin: '200px 200px' }}
                      transition={{ duration: 24 + i * 4, repeat: Infinity, ease: 'linear' }}>
                      <circle cx={x} cy={y} r="8" fill={node.color} fillOpacity="0.9" />
                    </motion.g>
                  );
                })}
              </svg>
              {/* Labels floating around */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="syne" style={{ fontSize: '13px', color: '#FF8C3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Abordagem</p>
                  <p className="syne" style={{ fontSize: '13px', color: '#706860' }}>Complementar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#0D0D0F', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="syne" style={{ fontSize: '72px', color: '#FF6B00', lineHeight: 1, marginBottom: '24px', opacity: 0.4 }}>"</div>
            <blockquote className="syne" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#D0C8C0', lineHeight: 1.5, marginBottom: '32px', fontWeight: 700 }}>
              Trabalho com uma abordagem baseada na complementariedade. Os vários produtos criam sinergias para oferecer soluções completas de conforto térmico.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '2px', background: '#FF6B00' }} />
              <span style={{ color: '#FF8C3A', fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em' }}>Eduardo Catarino</span>
              <div style={{ width: '40px', height: '2px', background: '#FF6B00' }} />
            </div>
            <p style={{ color: '#4A4540', fontSize: '12px', marginTop: '6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Fundador, Evoluimos Comércio</p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #CC4400 100%)', padding: 'clamp(56px, 7vw, 88px) 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="syne" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
              Pronto para começar?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '36px', fontSize: '16px' }}>
              Análise gratuita, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold active:scale-95 transition-all"
                style={{ background: '#fff', color: '#166534', padding: '14px 28px', borderRadius: '14px', fontSize: '15px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a href="tel:+351965026603"
                className="inline-flex items-center justify-center gap-2 font-bold active:scale-95 transition-all"
                style={{ background: 'rgba(0,0,0,0.2)', color: '#fff', padding: '14px 28px', borderRadius: '14px', fontSize: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Phone className="w-5 h-5" />
                +351 965 026 603
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
