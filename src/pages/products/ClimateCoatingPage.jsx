import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Wind } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA } from '@/config/company';

export default function ClimateCoatingPage() {
  const products = [
    { name: 'ThermoVital / ThermoPlus', zone: 'Interior', desc: 'Regula a humidade do ar (≈55%), funciona como esponja. Ideal para todas as paredes e tetos interiores.' },
    { name: 'ThermoProtect', zone: 'Exterior', desc: 'Membrana impermeável para fachadas. Reflete o calor solar e protege contra chuva e humidade.' },
    { name: 'ThermoShield Roof', zone: 'Coberturas', desc: 'Aplicação em coberturas planas e telhados. Reduz drasticamente o ganho de calor no verão.' },
  ];

  return (
    <>
      <SEOHead
        title="ClimateCoating — Revestimento Térmico Cerâmico | Evoluimos Comércio"
        description="ClimateCoating: membrana cerâmica de nanotecnologia alemã. Isola termicamente, regula humidade, aplica-se como tinta. Economias de 30-40% em climatização."
        canonical="/products/climatecoating"
      />
      <div className="min-h-screen">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85" alt="ClimateCoating revestimento térmico" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 pb-8">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'ClimateCoating', path: '/products/climatecoating' }]} dark />
            <span className="inline-block bg-blue-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mt-3 self-start">Revestimento Térmico</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">ClimateCoating®</h1>
            <p className="text-orange-400 font-semibold mt-1">Nanotecnologia Cerâmica · Made in Germany · Mais do que uma tinta</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Muito Mais do que uma Tinta</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O ClimateCoating® é a marca alemã original de produtos com base em nanotecnologia que formam uma <strong>membrana cerâmica com microesferas de vácuo</strong>. Aplica-se exatamente como uma tinta normal — mas os efeitos são radicalmente diferentes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Esta membrana produz <strong>efeitos endotérmicos</strong> que promovem a secagem de paredes e aumentam o conforto térmico. Estudos internacionais registam economias de <strong>30 a 40%</strong> nos custos de climatização apenas por pintar com estes produtos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Linhas de Produto</h2>
                <div className="space-y-4">
                  {products.map((p, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wind className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-extrabold text-gray-900 text-sm">{p.name}</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{p.zone}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Benefícios</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    'Economias de 30-40% em climatização',
                    'Regula humidade do ar (≈55%)',
                    'Seca paredes húmidas',
                    'Aplica-se como tinta convencional',
                    'Proteção exterior contra chuva',
                    'Reduz ganho de calor no verão',
                    'Produtos para interior, exterior e cobertura',
                    'Nanotecnologia testada internacionalmente',
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />{b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Indicamos o produto certo para interior, exterior ou cobertura.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-gray-900 mb-2">Combo recomendado</p>
                <p className="text-xs text-gray-600 mb-3">ClimateCoating + Drymat = proteção total contra humidade e perda térmica.</p>
                <Link to="/products/drymat" className="text-xs text-orange-600 font-bold hover:text-orange-700">Ver Drymat →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
