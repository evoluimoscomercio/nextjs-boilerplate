import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Phone, ExternalLink, Home, Search, Wrench, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';

const SERVICES = [
  {
    icon: Search,
    title: 'Compra e Venda de Imóveis',
    desc: 'Serviço completo e personalizado para quem quer comprar ou vender um imóvel no Algarve e em Portugal. Acompanhamento em todo o processo, da pesquisa à escritura.',
  },
  {
    icon: Wrench,
    title: 'Consultoria e Diagnóstico',
    desc: 'Complemento único: avaliação do estado do imóvel com foco em humidade, eficiência térmica e conforto. Identificamos problemas antes da compra ou depois de mudar.',
  },
  {
    icon: Home,
    title: 'Sugestões de Reabilitação',
    desc: 'Propostas de melhoria com produtos inovadores e fáceis de aplicar, focados na resolução de humidade ascendente e eficiência energética, sem obras invasivas.',
  },
  {
    icon: Globe,
    title: 'Atendimento Multilingue',
    desc: 'Poliglota com experiência internacional. Atendimento em português, inglês, alemão e outras línguas, ideal para clientes estrangeiros no mercado imobiliário português.',
  },
];

const ADVANTAGES = [
  'Décadas de experiência no mercado imobiliário português',
  'Especialista em imóveis no Algarve',
  'Diagnóstico gratuito de humidade e eficiência térmica',
  'Rede de contactos em toda a região',
  'Atendimento multilingue (PT, EN, DE)',
  'Integração com soluções de conforto térmico',
  'Comissionamento apenas em caso de sucesso',
  'Relatório detalhado do estado do imóvel',
];

export default function RealEstatePage() {
  return (
    <>
      <SEOHead
        title="Serviços Imobiliários Eduardo Catarino | Algarve | Evoluimos Comércio"
        description="Serviços imobiliários no Algarve com Eduardo Catarino, agente EXP Portugal. Compra, venda e diagnóstico de imóveis. Especialista em eficiência térmica e humidade."
        canonical="/real-estate"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85"
            alt="Serviços Imobiliários Algarve"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Serviços Imobiliários', path: '/real-estate' },
              ]}
              dark
            />
            <span className="inline-block bg-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mt-6">
              EXP Portugal
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">
              Serviços Imobiliários
            </h1>
            <p className="text-amber-300 font-semibold mt-2 text-lg drop-shadow">
              Eduardo Catarino · Algarve · Atendimento Multilingue
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Complementaridade é a chave.
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eduardo Catarino é empreendedor de longa data no setor do conforto térmico e, paralelamente, agente imobiliário certificado pela <strong>EXP Portugal</strong>. Esta combinação única permite oferecer um serviço que vai muito além da mediação tradicional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Se ainda não tem casa, posso ajudá-lo a encontrar o imóvel certo. Se já tem, posso ajudá-lo a torná-lo mais confortável, eficiente e valorizado através das soluções Evoluimos Comércio.
                </p>
              </div>

              {/* Services grid */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">O Que Oferecemos</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SERVICES.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white border border-gray-200 rounded-2xl p-5"
                      >
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-sm mb-2">{s.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {ADVANTAGES.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Synergy with EC products */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-3">
                  Diagnóstico Integrado com Soluções EC
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Ao comprar ou vender um imóvel, avaliamos gratuitamente o estado das paredes (humidade ascendente), o isolamento térmico e o sistema de aquecimento. Se existirem problemas, apresentamos soluções concretas com os produtos Evoluimos Comércio, sem obras invasivas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Drymat Anti-Humidade', path: '/products/drymat' },
                    { label: 'ClimateCoating Isolamento', path: '/products/climatecoating' },
                    { label: 'Duotherm Aquecimento', path: '/products/duotherm' },
                  ].map(p => (
                    <Link key={p.path} to={p.path}
                      className="text-xs bg-white border border-orange-200 text-orange-700 font-bold px-3 py-1.5 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                      {p.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-extrabold text-xl mb-2">Fale Connosco</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Diga-nos que imóvel procura ou o que pretende vender. Resposta rápida, sem compromisso.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <a href={`tel:${COMPANY.phoneBare}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-colors mb-3">
                  <Phone className="w-4 h-4" />{COMPANY.phone}
                </a>
                <Link to="/contact"
                  className="block w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold text-center transition-colors text-sm">
                  Formulário de Contacto
                </Link>
              </div>

              <a
                href="https://sites.google.com/view/eduardocatarino-exp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-200 rounded-2xl p-5 hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-amber-700">Perfil EXP Portugal</p>
                  <p className="text-xs text-gray-500">Ver portfólio e imóveis disponíveis</p>
                </div>
              </a>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 text-sm mb-3">Zona de atuação</h4>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />Algarve</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />Vila Nova de Cacela</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />Todo o território nacional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
