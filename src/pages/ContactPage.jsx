import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { WA_URL as WA, COMPANY } from '@/config/company';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contactos | Evoluimos Comércio"
        description="Fale connosco via WhatsApp, telefone ou email. Análise gratuita e sem compromisso."
        canonical="/contact"
      />
      <div className="min-h-screen bg-gray-50 pt-12 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Contactos</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
              Fale Connosco
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              A forma mais rápida é via WhatsApp. Respondemos normalmente em poucos minutos.
            </p>
          </motion.div>

          {/* WhatsApp hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-3xl p-8 sm:p-10 text-center mb-8"
          >
            <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">WhatsApp</h2>
            <p className="text-gray-400 mb-7 max-w-sm mx-auto">
              A forma mais rápida e cómoda. Envie fotos, vídeos ou descreva o seu caso — respondemos rapidamente.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-extrabold text-lg transition-all shadow-xl hover:shadow-green-500/40 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Abrir WhatsApp
            </a>
            <p className="text-gray-600 text-sm mt-5">{COMPANY.phone}</p>
          </motion.div>

          {/* Other contacts */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Phone,
                title: 'Telefone',
                value: COMPANY.phone,
                href: `tel:${COMPANY.phoneBare}`,
                sub: 'Chamada para rede móvel nacional',
                color: 'bg-orange-50 text-orange-600',
              },
              {
                icon: Mail,
                title: 'Email',
                value: COMPANY.email,
                href: `mailto:${COMPANY.email}`,
                sub: 'Resposta em 24h úteis',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: MapPin,
                title: 'Localização',
                value: COMPANY.address.city,
                href: null,
                sub: `${COMPANY.address.postalCode} · ${COMPANY.address.country}`,
                color: 'bg-gray-100 text-gray-600',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all text-center"
                >
                  <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.title}</div>
                  <div className="font-bold text-gray-900 text-sm">{c.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{c.sub}</div>
                </motion.div>
              );
              return c.href
                ? <a key={i} href={c.href}>{inner}</a>
                : <div key={i}>{inner}</div>;
            })}
          </div>

          {/* NIF */}
          <p className="text-center text-gray-400 text-xs mt-10">
            {COMPANY.legalName} · NIF {COMPANY.nif}
          </p>
        </div>
      </div>
    </>
  );
}
