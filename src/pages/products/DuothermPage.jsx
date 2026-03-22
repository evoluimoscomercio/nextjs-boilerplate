import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA } from '@/config/company';

export default function DuothermPage() {
  const benefits = [
    'Sem emissão de CO₂ — 100% ecológico',
    'Sem manutenção — apenas ligar/desligar',
    'Calor saudável por radiação (como o sol)',
    'Aquece também as paredes — ficam secas',
    'Fácil de instalar, sem obras invasivas',
    'Elemento decorativo personalizável',
    'Termostato incluído — controlo preciso',
    'Versão DELUXE com placa de vidro nanotecnológica',
  ];

  return (
    <>
      <SEOHead
        title="Duotherm — Aquecimento Radiante em Pedra Natural | Evoluimos Comércio"
        description="Radiadores Duotherm em pedra natural. Sistema de aquecimento por infravermelhos produzido em Portugal, tecnologia alemã. Sem CO₂, sem manutenção."
        canonical="/products/duotherm"
        image="https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1"
      />
      <div className="min-h-screen">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1518276779712-dfdcb9daa7a1?w=1400&q=85" alt="Duotherm Aquecimento Radiante" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 pb-8">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Duotherm', path: '/products/duotherm' }]} dark />
            <span className="inline-block bg-stone-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mt-3 self-start">Aquecimento Radiante</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">Duotherm</h1>
            <p className="text-orange-400 font-semibold mt-1">Radiadores em Pedra Natural · Tecnologia Alemã · Produzido em Portugal</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">O Que É o Duotherm?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O Duotherm® é um sistema de aquecimento por infravermelhos em pedra natural, desenvolvido na Alemanha e produzido em Portugal. Os radiadores superam os sistemas clássicos de aquecimento em todos os aspetos: baixo consumo energético, fácil instalação sem obras, silencioso e completamente limpo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Na versão <strong>DELUXE</strong>, a pedra natural é aquecida através de uma placa de vidro que integra a resistência elétrica à base de nanotecnologia. Esta alta tecnologia permite maior aproveitamento térmico com menor potência elétrica — mais acumulação de calor e menor consumo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">Calor Saudável por Radiação</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  O aquecimento por radiação funciona como o sol — aquece os corpos e as superfícies diretamente, sem circular ar ou criar correntes. Resultado: sem poeiras em suspensão, sem ressecamento do ar, melhor para alergias e vias respiratórias.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Calculamos a potência ideal para o seu espaço.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
