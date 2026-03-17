import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateLocalBusinessSchema, generateContactSchema, generateFAQSchema } from '@/utils/schemaMarkup';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', intent: '', message: ''
  });

  const title = language === 'pt' ? 'Contactos - Evoluimos Comércio' : 'Contact Us - Evoluimos Comércio';
  
  const faqs = language === 'pt' ? [
    { question: 'Como funcionam os orçamentos?', answer: 'São gratuitos e sem compromisso.' }
  ] : [
    { question: 'How do quotes work?', answer: 'They are free and without obligation.' }
  ];

  const schemas = [
    generateLocalBusinessSchema(language),
    generateContactSchema(),
    generateFAQSchema(faqs)
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    alert(language === 'pt' ? 'Sucesso! Mensagem enviada.' : 'Success! Message sent.');
    setFormData({ name: '', email: '', phone: '', intent: '', message: '' });
  };

  return (
    <>
      <SEOHead title={title} description="Contact us" canonical="/contact" schemas={schemas} language={language} />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb items={[{ label: t?.nav?.home || 'Home', path: '/' }, { label: t?.nav?.contact || 'Contact', path: '/contact' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{language === 'pt' ? 'Estamos aqui para ajudar com o seu projeto.' : 'We are here to help with your project.'}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border mb-8">
                <h2 className="text-2xl font-bold mb-6">{language === 'pt' ? 'Informação de Contacto' : 'Contact Information'}</h2>
                <div className="space-y-6">
                  <a href="tel:+351965026603" className="flex items-center gap-4 text-gray-700 hover:text-orange-600 transition-colors">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shrink-0"><Phone /></div>
                    <span className="text-lg font-medium">+351 965 026 603</span>
                  </a>
                  <a href="mailto:evolucom@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-orange-600 transition-colors">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shrink-0"><Mail /></div>
                    <span className="text-lg font-medium">evolucom@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shrink-0"><MapPin /></div>
                    <span className="text-lg font-medium">Ribeiro de Junco<br/>8900-057 Vila Nova de Cacela, Portugal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h2 className="text-2xl font-bold mb-6">{language === 'pt' ? 'Envie uma Mensagem' : 'Send a Message'}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{language === 'pt' ? 'Nome' : 'Name'}</label>
                  <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none text-gray-900" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none text-gray-900" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{language === 'pt' ? 'Telefone' : 'Phone'}</label>
                    <input type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none text-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{language === 'pt' ? 'Mensagem' : 'Message'}</label>
                  <textarea value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none h-32 text-gray-900" required></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  {t?.common?.submit || 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;