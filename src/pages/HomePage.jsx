import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Zap, Wind, Droplets, Flame, Thermometer, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const WA = 'https://wa.me/351965026603';

const PRODUCTS = [
  {
    name: 'Solamagic',
    tag: 'PREMIUM',
    desc: 'Infravermelhos de onda curta para esplanadas. Calor imediato, eficácia máxima. Made in Germany.',
    icon: Sun,
    path: '/products/solamagic',
    img: 'https://images.unsplash.com/photo-1638668679884-4196de47fe97?w=700&q=80',
    accent: 'from-amber-900/80',
  },
  {
    name: 'ComfortSun',
    tag: 'POLIVALENTE',
    desc: 'Linha completa de aquecedores infravermelhos — Polivalente, Profissional e Deluxe.',
    icon: Zap,
    path: '/products/comfortsun',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    accent: 'from-orange-900/80',
  },
  {
    name: 'Duotherm',
    tag: 'RADIANTE',
    desc: 'Radiadores em pedra natural. Aquecimento por infravermelhos saudável, silencioso e decorativo.',
    icon: Thermometer,
    path: '/products/duotherm',
    img: 'https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1?w=700&q=80',
    accent: 'from-stone-900/80',
  },
  {
    name: 'ClimateCoating',
    tag: 'REVESTIMENTO',
    desc: 'Membrana cerâmica de nanotecnologia. Isola termicamente, regula humidade e poupa energia.',
    icon: Wind,
    path: '/products/climatecoating',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    accent: 'from-blue-900/80',
  },
  {
    name: 'Drymat',
    tag: 'ANTI-HUMIDADE',
    desc: 'Elimina humidade ascendente sem obras. Tecnologia alemã de frequência eletromagnética.',
    icon: Droplets,
    path: '/products/drymat',
    img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=700&q=80',
    accent: 'from-cyan-900/80',
  },
  {
    name: 'Bioclimatizadores',
    tag: 'ARREFECIMENTO',
    desc: 'Arrefecimento natural por evaporação. Sem compressor, baixo consumo, ideal para verão.',
    icon: Wind,
    path: '/products/bioclimatizadores',
    img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=700&q=80',
    accent: 'from-teal-900/80',
  },
];

const SOLUTIONS = [
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture', icon: Droplets },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs', icon: Zap },
  { label: 'Conforto em Esplanadas', path: '/solutions/outdoor-comfort', icon: Sun },
  { label: 'Negócios Sustentáveis', path: '/solutions/sustainable-business', icon: Flame },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ height: 'calc(100svh - 64px)', minHeight: '540px' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1700124084147-995973b6a970?w=1600&q=85"
            alt="Soluções de conforto térmico sustentável"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full px-5 sm:px-10 lg:px-20 xl:px-32 py-8 sm:py-12">
          {/* Main content */}
          <div className="flex flex-col justify-center flex-1 max-w-2xl gap-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                ● Tecnologia Alemã
              </span>

              <h1
                className="font-extrabold text-white leading-[1.1] tracking-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                Conforto Térmico<br />
                <span className="text-orange-400">Sustentável</span>
              </h1>

              <p
                className="text-gray-200 leading-relaxed mb-7 max-w-lg"
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}
              >
                Aquecimento, arrefecimento e proteção de edifícios — soluções de alta tecnologia alemã para habitação e negócio.
              </p>

              {/* CTAs */}
              <div className="flex flex-row flex-wrap gap-3 mb-6">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95"
                >
                  Ver Produtos
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 transition-all active:scale-95"
                >
                  Soluções
                </Link>
              </div>

              {/* Phone */}
              <a
                href="tel:+351965026603"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl hover:bg-white/20 transition-all self-start group"
              >
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-base sm:text-lg tracking-wide">+351 965 026 603</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom: client logos */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Clientes de referência</p>
            <div className="flex flex-wrap gap-4 sm:gap-8">
              {["McDonald's", "Grupo Avillez", "Sonae"].map(c => (
                <span key={c} className="text-white/60 font-bold text-sm tracking-tight">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Portfólio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Os Nossos Produtos
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              Alta tecnologia europeia para aquecimento, conforto e proteção térmica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link to={p.path} className="group block relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2]">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} to-transparent`} />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 bg-orange-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{p.tag}</span>
                      </div>
                      <h3 className="text-white font-extrabold text-xl mb-1">{p.name}</h3>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">{p.desc}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-orange-400 text-xs font-bold group-hover:gap-2 transition-all">
                        Saber mais <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Abordagem</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
                Resolvemos Problemas,<br />Não Apenas Vendemos Produtos
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                A nossa abordagem é complementar — os produtos criam sinergias para oferecer soluções completas de conforto térmico, do inverno ao verão.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOLUTIONS.map(s => {
                  const Icon = s.icon;
                  return (
                    <Link key={s.path} to={s.path}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all group">
                      <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="font-semibold text-gray-800 text-sm group-hover:text-orange-700 transition-colors">{s.label}</span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 ml-auto transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Espaço moderno com conforto térmico"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-extrabold">25+</div>
                <div className="text-orange-200 text-sm mt-0.5">Anos de experiência</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT QUOTE ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-5xl text-orange-600 font-serif mb-6">"</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
              Trabalho com uma abordagem baseada na complementariedade — os vários produtos criam sinergias para oferecer soluções completas de conforto térmico.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-orange-600" />
              <p className="text-orange-400 font-bold tracking-wide">Eduardo Catarino</p>
              <div className="w-10 h-0.5 bg-orange-600" />
            </div>
            <p className="text-gray-500 text-sm mt-1">Fundador, Evoluimos Comércio</p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-orange-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Pronto para começar?
            </h2>
            <p className="text-orange-100 mb-8 text-lg">
              Fale connosco agora. Análise gratuita, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-green-700 rounded-xl font-extrabold text-base hover:bg-green-50 transition-all shadow-xl active:scale-95">
                <MessageCircle className="w-5 h-5" />
                WhatsApp — Resposta Imediata
              </a>
              <a href="tel:+351965026603"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-700 text-white border border-orange-500 rounded-xl font-bold text-base hover:bg-orange-800 transition-all active:scale-95">
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
