import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Wind } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA } from '@/config/company';

const MODELS = [
  { name: 'Elite 8', area: 'até 15 m²', price: '160,00€', desc: 'Compacto e silencioso. Ideal para escritórios, quartos e pequenas salas.' },
  { name: 'Elite 14', area: 'até 25 m²', price: '240,00€', desc: 'Para espaços médios. Inclui função antimosquitos e ionização do ar.' },
  { name: 'MF 60', area: 'até 35 m²', price: '499,00€', desc: 'Brumiventilador de exterior. Ideal para esplanadas e espaços de grande área.' },
];

export default function BioclimatizadoresPage() {
  return (
    <>
      <SEOHead
        title="Bioclimatizadores — Arrefecimento Natural por Evaporação | Evoluimos Comércio"
        description="Bioclimatizadores Elite e MF60. Arrefecimento natural sem compressor, baixo consumo, sem gases. Alternativa saudável ao ar condicionado."
        canonical="/products/bioclimatizadores"
        image="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a"
      />
      <div className="min-h-screen">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1400&q=85" alt="Bioclimatizadores arrefecimento natural" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 pb-8">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' }]} dark />
            <span className="inline-block bg-teal-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mt-3 self-start">Arrefecimento Natural</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">Bioclimatizadores</h1>
            <p className="text-orange-400 font-semibold mt-1">Arrefecimento por Evaporação · Sem Compressor · Baixo Consumo</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Arrefecimento Natural sem Compressor</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Os bioclimatizadores são uma alternativa saudável ao ar condicionado convencional. O arrefecimento é produzido através da <strong>evaporação de água</strong> — quanto mais calor fizer, maior o arrefecimento, com humidificação natural do ar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O consumo elétrico é baixíssimo — limita-se à ventoinha que suga o ar quente e o impulsiona arrefecido para o ambiente. Os modelos Elite têm design moderno, comando remoto, 3 velocidades, função antimosquitos e ionização do ar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Modelos Disponíveis</h2>
                <div className="space-y-4">
                  {MODELS.map((m, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wind className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                          <span className="font-extrabold text-gray-900">{m.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-semibold">{m.area}</span>
                            <span className="font-bold text-orange-600">{m.price}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">* Preços com IVA incluído e entrega. Para funcionamento ideal, usar com janelas abertas em favor da corrente de ar.</p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    'Sem compressor, sem gases fluorados',
                    'Baixíssimo consumo elétrico',
                    'Humidifica o ar seco',
                    'Sem instalação — plug & play',
                    'Função antimosquitos (Elite)',
                    'Ionização do ar (Elite)',
                    'Ideal para verão e esplanadas',
                    'Design moderno com comando',
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />{b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-2">Encomendar</h3>
                <p className="text-gray-400 text-sm mb-5">Preços com IVA e entrega incluídos. Entrega em Portugal continental.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Informação
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
