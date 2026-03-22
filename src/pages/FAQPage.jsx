import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA } from '@/config/company';

const FAQS = [
  {
    q: 'Como funcionam os aquecedores por infravermelhos?',
    a: 'Os aquecedores por infravermelhos funcionam emitindo ondas de calor semelhantes às do sol. Transferem calor diretamente para superfícies e pessoas, sem necessitar de aquecer o ar ambiente, tornando o aquecimento mais rápido e eficiente.',
  },
  {
    q: 'O que distingue os aquecedores por infravermelhos dos convencionais?',
    a: 'Os aquecedores convencionais aquecem o ar, enquanto os modelos por infravermelhos transferem calor diretamente para objetos e pessoas. Isto elimina perdas de energia e proporciona um conforto mais imediato e eficiente.',
  },
  {
    q: 'Os aquecedores por infravermelhos são seguros?',
    a: 'Sim. Não emitem gases, não levantam poeiras nem ressecam o ar. A maioria dos modelos inclui proteção contra sobreaquecimento e sistemas de segurança adicionais para uso tranquilo em casa ou no trabalho.',
  },
  {
    q: 'Os aquecedores por infravermelhos são económicos?',
    a: 'Sim, porque aquecem diretamente sem perdas e o calor não se dissipa rapidamente. O consumo energético é mais eficiente do que nos sistemas tradicionais, resultando em faturas de eletricidade mais baixas.',
  },
  {
    q: 'Posso usar aquecedores por infravermelhos no exterior?',
    a: 'Sim, são ideais para esplanadas e jardins. O calor não é disperso pelo vento como acontece com os sistemas de aquecimento de ar, proporcionando conforto mesmo em dias frios.',
  },
  {
    q: 'Posso usar aquecedores por infravermelhos no interior?',
    a: 'Sim. Modelos específicos para interior oferecem conforto sem ruído, sem odores e sem circulação de poeiras, sendo particularmente indicados para pessoas com alergias ou sensibilidades respiratórias.',
  },
  {
    q: 'Quais são as opções de instalação disponíveis?',
    a: 'Os aquecedores podem ser instalados no teto, na parede ou em suportes móveis, dependendo do modelo e das necessidades do espaço. A nossa equipa aconselha a solução mais adequada a cada caso.',
  },
  {
    q: 'Qual a diferença entre as linhas Professional e Deluxe?',
    a: 'A linha Deluxe apresenta um design mais sofisticado, com controlo remoto e conectividade Bluetooth. A linha Professional prioriza potência e durabilidade para uso intensivo, sem as funcionalidades de controlo remoto.',
  },
  {
    q: 'Com que rapidez os aquecedores aquecem um espaço?',
    a: 'O aquecimento é praticamente imediato, uma vez que o calor é emitido diretamente para superfícies e pessoas sem necessitar de aquecer o ar primeiro. Sente-se a diferença em segundos.',
  },
  {
    q: 'Os aquecedores por infravermelhos precisam de manutenção?',
    a: 'Não, são equipamentos de baixa manutenção. Não possuem peças móveis nem necessitam de filtros. Basta manter a superfície emissora limpa para garantir o desempenho ideal.',
  },
  {
    q: 'Os aquecedores por infravermelhos são benéficos para a saúde?',
    a: 'Sim. Ao contrário dos aquecedores convencionais, não ressecam o ar nem levantam poeiras, tornando-os ideais para pessoas com alergias, problemas respiratórios ou pele sensível.',
  },
  {
    q: 'Os aquecedores por infravermelhos são sustentáveis?',
    a: 'Sim. Consomem menos energia do que os sistemas tradicionais e não produzem emissões de CO₂ nem gases nocivos durante o funcionamento, contribuindo para um estilo de vida mais sustentável.',
  },
  {
    q: 'Por que o calor infravermelho é comparado à luz solar?',
    a: 'Tanto o sol como os aquecedores por infravermelhos utilizam radiação infravermelha para aquecer diretamente, criando um calor natural, imediato e confortável, sem ressecar o ambiente.',
  },
  {
    q: 'Os aquecedores são resistentes às intempéries?',
    a: 'Os modelos para exterior são concebidos para resistir às condições adversas, com proteção contra salpicos de água e humidade. Modelos com classificação IP65 ou superior são resistentes à água.',
  },
  {
    q: 'Devo consultar um profissional antes de comprar?',
    a: 'Recomendamos sempre uma consulta prévia. A orientação profissional permite selecionar o modelo ideal tendo em conta a potência necessária, o local de instalação e o tipo de uso (interior/exterior), evitando experiências negativas.',
  },
  {
    q: 'Onde posso comprar ou tornar-me revendedor ComfortSun?',
    a: 'Contacte-nos diretamente para compra ou oportunidades de revenda. Oferecemos entrega direta da fábrica na Alemanha e suporte completo para parceiros de negócio.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
    >
      <h3>
        <button
          id={buttonId}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">{item.q}</span>
          <ChevronDown
            className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="Perguntas Frequentes | ComfortSun — Evoluimos Comércio"
        description="Respostas às perguntas mais frequentes sobre aquecedores por infravermelhos ComfortSun: funcionamento, segurança, instalação, eficiência energética e muito mais."
        canonical="/faqs"
      />
      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Perguntas Frequentes', path: '/faqs' }]} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
              <HelpCircle className="w-6 h-6 text-orange-600" />
            </div>
            <span className="block text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">Ajuda</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Tudo o que precisa de saber sobre os aquecedores por infravermelhos ComfortSun.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-3 mb-14">
            {FAQS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Ainda tem dúvidas?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fale connosco diretamente — respondemos rapidamente e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Falar por WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
              >
                Pedir Orçamento
              </Link>
            </div>
          </motion.div>

          {/* Cross-links */}
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Ver Todos os Produtos', desc: 'Conheça as nossas soluções de conforto térmico', path: '/products' },
              { label: 'Soluções por Necessidade', desc: 'Encontre a resposta certa para o seu caso', path: '/solutions' },
            ].map(link => (
              <Link key={link.path} to={link.path}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group"
              >
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{link.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{link.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
