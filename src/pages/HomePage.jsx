import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Sun, Droplets, Wind, Thermometer, Zap, Flame } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { WA_URL as WA } from '@/config/company';

/* ── Animated SVG Hero ───────────────────────────────────────────── */
function HeroGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF9500" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="600" cy="350" rx="500" ry="320" fill="url(#g1)" />
        <ellipse cx="800" cy="200" rx="300" ry="220" fill="url(#g2)" />
        {[0,1,2,3,4].map(i => (
          <motion.path
            key={i}
            d={`M ${480 + i*45} 60 Q ${580 + i*30} ${220 + i*18} ${530 + i*45} 380 Q ${610 + i*25} ${520 + i*12} ${555 + i*45} 660`}
            stroke={i % 2 === 0 ? '#FF6B00' : '#FF9500'}
            strokeWidth={i === 2 ? 1.5 : 0.8}
            strokeOpacity={0.1 + i * 0.04}
            fill="none"
            animate={{
              d: [
                `M ${480+i*45} 60 Q ${580+i*30} ${220+i*18} ${530+i*45} 380 Q ${610+i*25} ${520+i*12} ${555+i*45} 660`,
                `M ${480+i*45} 60 Q ${550+i*30} ${240+i*18} ${560+i*45} 380 Q ${590+i*25} ${540+i*12} ${535+i*45} 660`,
                `M ${480+i*45} 60 Q ${580+i*30} ${220+i*18} ${530+i*45} 380 Q ${610+i*25} ${520+i*12} ${555+i*45} 660`,
              ]
            }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {[{cx:680,cy:180,r:5,d:0},{cx:780,cy:310,r:4,d:0.8},{cx:620,cy:440,r:5,d:1.5},{cx:900,cy:240,r:3,d:0.4}].map((o,i)=>(
          <motion.circle key={i} cx={o.cx} cy={o.cy} r={o.r} fill="#FF6B00" fillOpacity={0.7}
            animate={{ cy:[o.cy, o.cy-16, o.cy], fillOpacity:[0.7,1,0.7] }}
            transition={{ duration: 3+i*0.5, repeat:Infinity, delay:o.d, ease:'easeInOut' }} />
        ))}
        <motion.circle cx="720" cy="350" r="200" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.08" fill="none"
          animate={{ r:[200,218,200] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }} />
        <motion.circle cx="720" cy="350" r="140" stroke="#FF9500" strokeWidth="0.5" strokeOpacity="0.07" fill="none"
          animate={{ r:[140,154,140] }} transition={{ duration:5.5, repeat:Infinity, ease:'easeInOut', delay:1 }} />
        {Array.from({length:6}).map((_,row)=>Array.from({length:10}).map((_,col)=>(
          <circle key={`${row}-${col}`} cx={480+col*60} cy={80+row*90} r="1" fill="#FF6B00" fillOpacity="0.07" />
        )))}
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
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture', icon: Droplets, desc: 'Paredes com humidade ascendente? O Drymat resolve sem obras, em poucos meses.' },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs', icon: Zap, desc: 'Aquecimento inteligente que consome menos e dura mais. Retorno real do investimento.' },
  { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort', icon: Sun, desc: 'Mantenha a esplanada aberta o ano todo. Mais ocupação, mais faturação.' },
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
          background: rgba(255,107,0,0.15);
          border: 1px solid rgba(255,107,0,0.35);
          color: #FF8C3A;
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
        style={{ height: 'calc(100svh - 64px)', minHeight: '600px', background: 'radial-gradient(ellipse 90% 70% at 60% 50%, #1C0E00 0%, #0F0F11 65%)' }}
      >
        <HeroGraphic />
        <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-12 lg:px-20 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center flex-1 text-center max-w-3xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
              <span className="ec-tag pjs mb-6 inline-block">Tecnologia Alemã</span>
              <h1 className="pjs" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Conforto Térmico<br /><span style={{ color: '#FF6B00' }}>Sustentável</span>
              </h1>
              <p className="pjs" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: '#B8B0A5', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
                Aquecimento, arrefecimento e proteção de edifícios. Soluções de alta tecnologia europeia para habitação e negócio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="pjs" aria-label="Contactar via WhatsApp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#16A34A', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(22,163,74,0.3)' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />WhatsApp
                </a>
                <Link to="/products" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FF6B00', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(255,107,0,0.3)' }}>
                  Ver Produtos<ArrowRight style={{ width: '18px', height: '18px' }} aria-hidden="true" />
                </Link>
                <Link to="/solutions" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.07)', color: '#EDE8E0', padding: '14px 24px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Soluções
                </Link>
              </div>
              <a href="tel:+351965026603" className="pjs" aria-label="Ligar para +351 965 026 603"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '11px 18px', textDecoration: 'none' }}>
                <div style={{ width: '38px', height: '38px', background: '#FF6B00', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone style={{ width: '18px', height: '18px', color: '#fff' }} aria-hidden="true" />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#F0EBE3', letterSpacing: '0.02em' }}>+351 965 026 603</span>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '18px' }}>
            <p className="pjs" style={{ color: '#5A5450', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Clientes de referência</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {["McDonald's", "Grupo Avillez", "Sonae"].map(c => (
                <span key={c} className="pjs" style={{ color: '#6A6460', fontWeight: 700, fontSize: '14px' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section aria-label="Estatísticas" style={{ background: '#FF6B00' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
          {[
            { n: 25, suffix: '+', label: 'Anos de experiência' },
            { n: 3, suffix: '', label: 'Grandes clientes nacionais' },
            { n: 7, suffix: '', label: 'Marcas europeias' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              className="flex flex-col items-center justify-center text-center pjs"
              style={{ padding: '28px 16px', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.12)' : 'none' }}>
              <span style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                <CountUp target={s.n} suffix={s.suffix} />
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '5px', fontWeight: 500 }}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS overlay image cards ── */}
      <section aria-label="Portfólio de Produtos" style={{ background: '#0F0F11', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom: '48px' }}>
            <div style={{ width: '36px', height: '3px', background: '#FF6B00', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '12px' }}>
              O Nosso Portfólio
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
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={{ width: '16px', height: '16px', color: '#fff' }} aria-hidden="true" />
                      </div>
                      <span className="pjs" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{p.tag}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                      <h3 className="pjs" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px', lineHeight: 1.2 }}>{p.name}</h3>
                      <p className="pjs" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>{p.desc}</p>
                      <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#FF8C3A', fontSize: '13px', fontWeight: 700 }}>
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
            <div style={{ width: '36px', height: '3px', background: '#FF6B00', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '16px' }}>
              Do frio ao calor,<br />
              <span style={{ color: '#FF6B00' }}>temos a solução certa</span>
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
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)'; e.currentTarget.style.background = '#1E1E24'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1A1A1E'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ width: '22px', height: '22px', color: '#FF8C3A' }} aria-hidden="true" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="pjs" style={{ fontSize: '17px', fontWeight: 700, color: '#EDE8E0', marginBottom: '8px', lineHeight: 1.3 }}>{s.label}</h3>
                      <p className="pjs" style={{ fontSize: '14px', color: '#7A7470', lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                    <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#FF8C3A', fontSize: '13px', fontWeight: 700 }}>
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
      <section aria-label="Contacto" style={{ background: 'linear-gradient(135deg, #E85A00 0%, #FF8C00 100%)', padding: 'clamp(60px, 7vw, 88px) 0' }}>
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
