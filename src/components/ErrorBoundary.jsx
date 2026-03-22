import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Captura erros de renderização em qualquer componente filho
 * e apresenta um ecrã de fallback em vez de quebrar toda a aplicação.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Em produção poderia enviar para um serviço de logging (ex: Sentry)
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info.componentStack);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        role="alert"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#0F0F11',
          color: '#EDE8E0',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#F5F0E8', marginBottom: '12px' }}>
          Algo correu mal
        </h1>
        <p style={{ color: '#7A7470', fontSize: '15px', maxWidth: '380px', lineHeight: 1.7, marginBottom: '28px' }}>
          Ocorreu um erro inesperado. Por favor, recarregue a página ou volte ao início.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              background: '#FF6B00',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Recarregar página
          </button>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.07)',
              color: '#EDE8E0',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Ir para o início
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
