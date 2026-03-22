import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA } from '@/config/company';

const LINES = [
  {
    name: 'Aquecimento Infravermelhos',
    desc: 'Linha base para aquecimento por infravermelhos no exterior. Eficiente e acessível para restaurantes, cafés e habitação.',
    uses: ['Esplanadas', 'Varanda', 'Jardim'],
    color: 'bg-orange-50 border-orange-200',
    tag: 'bg-orange-600',
  },
  {
    name: 'Polivalente',
    desc: 'Versão versátil para uso interior e exterior. Adapta-se a diferentes ambientes com flexibilidade máxima.',
    uses: ['Interior', 'Exterior', 'Semi-coberto'],
    color: 'bg-blue-50 border-blue-200',
    tag: 'bg-blue-600',
  },
  {
    name: 'Profissional',
    desc: 'Concebida para instalações comerciais intensivas — hotéis, spas, restauração de volume. Maior potência e robustez.',
    uses: ['Hotéis', 'Spas', 'Restauração'],
    color: 'bg-gray-50 border-gray-300',
    tag: 'bg-gray-700',
  },
  {
    name: 'Deluxe',
    desc: 'O topo da linha ComfortSun. Design premium e tecnologia avançada com lâmpada HeLeN para maior conforto visual.',
    uses: ['Premium', 'Design', 'Low Glare'],
    color: 'bg-amber-50 border-amber-200',
    tag: 'bg-amber-600',
  },
];

const WHY = [
  'Tecnologia de lâmpadas HeLeN desenvolvida por engenheiro alemão',
  'Aquecimento imediato — não aquece o ar, aquece as pessoas',
  'Resistente ao vento — ideal para exterior',
  'Não emite gases, não queima oxigénio',
  'Baixo consumo comparado com resistências convencionais',
  'Fácil instalação, sem manutenção regular',
];

export default function ComfortSunPage() {
  return (
    <>
      <SEOHead
        title="ComfortSun — Aquecimento Infravermelhos Polivalente | Evoluimos Comércio"
        description="Linha ComfortSun de aquecedores infravermelhos: Polivalente, Profissional e Deluxe. Tecnologia alemã para esplanadas, hotéis e habitação."
        canonical="/products/comfortsun"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      />

      <div className="min-h-screen">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85"
            alt="ComfortSun — Infravermelhos Polivalente"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 pb-8">
            <Breadcrumb
              items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'ComfortSun', path: '/products/comfortsun' }]}
              dark
            />
            <span className="inline-block bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mt-3 self-start">Polivalente</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">ComfortSun</h1>
            <p className="text-orange-400 font-semibold mt-1">4 Linhas · Interior & Exterior</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">A Solução Polivalente</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A ComfortSun foi fundada por um engenheiro alemão que desenvolveu os radiadores com tecnologia de lâmpadas HeLeN avançada. A <strong>ComfortSun Ibérica</strong>, com sede operacional em Portugal, distribui diretamente para o mercado ibérico, com fornecimento direto da fábrica alemã.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Enquanto a Solamagic é o posicionamento premium, a ComfortSun é a solução de <strong>volume e polivalência</strong> — com 4 linhas diferentes para cada tipo de aplicação e orçamento.
                </p>
              </div>

              {/* 4 Lines */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">As 4 Linhas ComfortSun</h2>
                <div className="space-y-4">
                  {LINES.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`border rounded-2xl p-5 ${l.color}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`${l.tag} text-white text-xs font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5`}>
                          {l.name}
                        </span>
                        <div>
                          <p className="text-gray-700 text-sm leading-relaxed">{l.desc}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {l.uses.map(u => (
                              <span key={u} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{u}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why infrared */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Porquê Infravermelhos?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WHY.map((w, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Diga-nos onde quer aplicar — recomendamos a linha certa.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link to="/contact"
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Quer o topo de gama?</p>
                <p className="text-sm text-gray-700 mb-3">A Solamagic é o nosso produto premium para esplanadas de alto nível.</p>
                <Link to="/products/solamagic" className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold hover:text-orange-700">
                  Ver Solamagic <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
