import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Droplets, Zap, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA } from '@/config/company';

const FEATURES = [
  'Aquecimento instantâneo sem depósito',
  'Sem esperas, sem desperdício de água',
  'Instalação compacta e discreta',
  'Tecnologia de regulação eletrónica de precisão',
  'Economia de energia, sem perdas por standby',
  'Longa durabilidade, baixa manutenção',
  'Certificação e qualidade Made in Germany',
  'Adequados para habitação, cozinha e pontos de uso',
];

const ADVANTAGES = [
  {
    icon: Zap,
    title: 'Instantâneo',
    desc: 'Água quente imediata, sem tempo de espera. Só aquece quando é necessário.',
  },
  {
    icon: Droplets,
    title: 'Sem Depósito',
    desc: 'Elimina perdas por manutenção de temperatura. Maior higiene e eficiência.',
  },
  {
    icon: CheckCircle2,
    title: 'Made in Germany',
    desc: 'Produzido pela Clage, fabricante alemão com décadas de experiência em aquecimento de água.',
  },
];

const CATALOGS = [
  {
    label: 'Catálogo Clage 1',
    url: 'https://jumpshare.com/v/C0i89LsYBKCpl2L7bpW2',
  },
  {
    label: 'Catálogo Clage 2',
    url: 'https://jumpshare.com/v/7iVPezJFdJFAyx8HqnS2',
  },
];

export default function EsquentadoresPage() {
  return (
    <>
      <SEOHead
        title="Esquentadores Clage Instantâneos Made in Germany | Evoluimos Comércio"
        description="Esquentadores elétricos instantâneos Clage. Sem depósito, agua quente imediata, alta eficiência energética. Tecnologia alemã para habitação e espaços comerciais."
        canonical="/products/esquentadores"
      />
      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[420px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
          {/* Try to show an image if available, gracefully falls back to gradient */}
          <img
            src="/Esquentadores/poster.jpg"
            alt="Esquentador Clage"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
          <div className="absolute top-20 left-0 right-0 flex justify-center px-4">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'Esquentadores', path: '/products/esquentadores' },
              ]}
              dark
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Made in Germany
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Esquentadores Clage
            </h1>
            <p className="text-blue-300 font-semibold mt-3 text-lg drop-shadow">
              Água Quente Instantânea · Sem Depósito · Alta Eficiência
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">O que são os Esquentadores Clage?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Os <strong>esquentadores instantâneos Clage</strong> são equipamentos elétricos de aquecimento de água sem depósito, produzidos na Alemanha com os mais elevados padrões de qualidade e eficiência energética.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ao contrário dos esquentadores tradicionais com reservatório, os modelos Clage aquecem a água <strong>apenas no momento em que é necessária</strong>, eliminando completamente as perdas de energia por manutenção de temperatura. O resultado é água quente imediata, higiene superior e contas de energia mais baixas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ideais para instalação em cozinhas, casas de banho, lavabos e outros pontos de uso, os esquentadores Clage destacam-se pelo design compacto, facilidade de instalação e fiabilidade a longo prazo.
                </p>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Vantagens Principais</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {ADVANTAGES.map((a, i) => {
                    const Icon = a.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 mb-1 text-sm">{a.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{a.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Características</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Catalogs */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Catálogos</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Consulte os catálogos completos para conhecer todos os modelos e especificações técnicas disponíveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {CATALOGS.map((c, i) => (
                    <a
                      key={i}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-700 font-semibold rounded-xl transition-all text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      {c.label}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Image gallery placeholder */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Galeria</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    '/Esquentadores/produto1.png',
                    '/Esquentadores/nacasadebanho.jpg',
                    '/Esquentadores/paraaplicacoesespeciais.jpg',
                    '/Esquentadores/mini-instant-water-heaters.png',
                    '/Esquentadores/poster.jpg',
                  ].map((img, i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`Esquentador Clage ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <Droplets className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Diga-nos a sua aplicação, o caudal necessário e o ponto de instalação, recomendamos o modelo certo.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-colors"
                >
                  Formulário de Contacto
                </Link>
                <p className="text-gray-500 text-xs text-center mt-3">Análise gratuita e sem compromisso</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <h3 className="font-extrabold text-gray-900 mb-2 text-sm">Sobre a Clage</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  A Clage é uma empresa alemã especializada em aquecimento instantâneo de água, com décadas de experiência e presença em mais de 50 países. Os seus produtos combinam tecnologia de ponta com eficiência energética e durabilidade excepcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
