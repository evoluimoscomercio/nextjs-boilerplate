import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'evolucom_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '680px',
        background: '#1A1816',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '18px 20px',
        zIndex: 9999,
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <p style={{ fontSize: '14px', color: '#B0A8A0', lineHeight: 1.6, margin: 0 }}>
          Usamos cookies para melhorar a sua experiência.{' '}
          <Link to="/privacy-policy" style={{ color: '#FF8C3A', textDecoration: 'underline' }} onClick={decline}>
            Política de Privacidade
          </Link>
        </p>
        <button
          onClick={decline}
          aria-label="Fechar banner de cookies"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', flexShrink: 0 }}
        >
          <X style={{ width: '16px', height: '16px', color: '#6A6460' }} />
        </button>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={accept}
          style={{ background: '#FF6B00', color: '#fff', border: 'none', borderRadius: '10px', padding: '10px 20px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Aceitar
        </button>
        <button
          onClick={decline}
          style={{ background: 'rgba(255,255,255,0.06)', color: '#B0A8A0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
