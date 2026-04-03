import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Build mailto fallback with form data
    const subject = encodeURIComponent(form.subject || 'Contacto via site');
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone || 'Não indicado'}\n\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8"
      aria-label="Formulário de contacto"
    >
      <h2 className="text-xl font-extrabold text-gray-900 mb-1">Envie-nos uma mensagem</h2>
      <p className="text-gray-500 text-sm mb-6">Preencha o formulário e responderemos o mais breve possível.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nome <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="O seu nome"
            autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@exemplo.com"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Telefone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+351 900 000 000"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Assunto <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
          >
            <option value="">Selecione...</option>
            <option value="Pedido de orçamento">Pedido de orçamento</option>
            <option value="Informações sobre produtos">Informações sobre produtos</option>
            <option value="Serviços imobiliários">Serviços imobiliários</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mensagem <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Descreva o que procura, o espaço, ou a sua dúvida..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          Os seus dados são tratados de acordo com a nossa{' '}
          <Link to="/privacy-policy" className="text-orange-600 hover:underline">Política de Privacidade</Link>.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {status === 'sending' ? 'A enviar...' : 'Enviar Mensagem'}
        </button>
      </div>

      {status === 'sent' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"
          role="status"
        >
          O seu cliente de email foi aberto com a mensagem pré-preenchida. Se preferir, pode também contactar-nos via WhatsApp para uma resposta mais rápida.
        </motion.div>
      )}
    </motion.form>
  );
}

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

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Contactos', path: '/contact' }]} />

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
            className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-center mb-8 max-w-sm mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <MessageCircle className="w-10 h-10 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">WhatsApp</h2>
            <p className="text-gray-400 mb-7 max-w-sm mx-auto">
              A forma mais rápida e cómoda. Envie fotos, vídeos ou descreva o seu caso, respondemos rapidamente.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-extrabold text-lg transition-all shadow-xl hover:shadow-green-500/40 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              Abrir WhatsApp
            </a>
            <p className="text-gray-500 text-sm mt-5">{COMPANY.phone}</p>
          </motion.div>

          {/* Other contacts */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
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
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.title}</div>
                  <div className="font-bold text-gray-900 text-sm">{c.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{c.sub}</div>
                </motion.div>
              );
              return c.href
                ? <a key={i} href={c.href} aria-label={`${c.title}: ${c.value}`}>{inner}</a>
                : <div key={i}>{inner}</div>;
            })}
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Helpful links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">Pode também interessar-lhe</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Perguntas Frequentes', desc: 'Respostas rápidas às dúvidas mais comuns', path: '/faqs' },
                { label: 'Os Nossos Produtos', desc: 'Conheça todas as soluções disponíveis', path: '/products' },
                { label: 'Sobre Nós', desc: 'Conheça o Eduardo e a empresa', path: '/about' },
              ].map(link => (
                <Link key={link.path} to={link.path}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{link.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{link.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* NIF */}
          <p className="text-center text-gray-400 text-sm mt-10">
            {COMPANY.legalName} · NIF {COMPANY.nif}
          </p>
        </div>
      </div>
    </>
  );
}
