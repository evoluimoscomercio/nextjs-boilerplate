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
          <div className="absolute top-20 left-0 right-0 flex justify-center px-4">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Serviços Imobiliários', path: '/real-estate' },
              ]}
              dark
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="inline-block bg-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
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
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
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
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Redes Sociais</p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.facebook.com/EduardoCatarinoConsultor" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                    </div>
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/eduardocatarino_consultor_exp" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-pink-600 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 transition-colors">
                      <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                    </div>
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/eduardocatarinoevoluimos/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                    LinkedIn
                  </a>
                </div>
              </div>

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
