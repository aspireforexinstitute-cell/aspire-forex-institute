import React from 'react';
import { X, Play, Shield, CheckCircle } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card-static"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '840px',
          width: '100%',
          padding: '28px',
          borderRadius: '24px',
          border: '1px solid var(--card-border-glow)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', background: 'rgba(76,201,240,0.15)', color: 'var(--accent-secondary)' }}>
              LIVE METHODOLOGY DEMO
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px' }}>Smart Money Concepts Masterclass Preview</h3>
          </div>
          <button onClick={onClose} aria-label="Close modal" style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Video Player Embed / Mock Container */}
        <div
          style={{
            width: '100%',
            height: '420px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#000',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--card-border)'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
            title="Aspire Forex Institute Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Session Duration: 12 Mins &bull; Topic: Order Block Refinement & Liquidity Engineering
          </span>
          <button onClick={onClose} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
