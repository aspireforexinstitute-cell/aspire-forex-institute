import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnrollModal({ isOpen, onClose, selectedCourse }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseName: selectedCourse ? selectedCourse.title : 'Smart Money Concepts (SMC)',
    experienceLevel: 'Beginner',
    paymentMethod: 'Bank Transfer / JazzCash / Easypaisa'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, courseName: selectedCourse.title }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card-static"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '36px',
          borderRadius: '24px',
          border: '1px solid var(--card-border-glow)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.7)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(46,212,122,0.18)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 0 30px rgba(46,212,122,0.4)'
              }}
            >
              <Sparkles size={40} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Congratulations!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Your enrollment request for <strong style={{ color: 'var(--accent-secondary)' }}>{formData.courseName}</strong> has been confirmed.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: '12px', marginBottom: '28px' }}>
              Check your email / WhatsApp. Our senior mentor team will send your LMS credentials and VIP Discord invite link immediately.
            </p>

            <button onClick={onClose} className="btn-primary" style={{ width: '100%', padding: '14px' }}>
              Return to Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', background: 'rgba(76,201,240,0.15)', color: 'var(--accent-secondary)' }}>
                OFFICIAL REGISTRATION
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '8px' }}>Enroll in Aspire Forex</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Secure your seat in our upcoming institutional live cohort.</p>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Full Name *</label>
              <input
                type="text"
                required
                className="glass-input"
                placeholder="e.g. Ch. Daniyal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Email Address *</label>
              <input
                type="email"
                required
                className="glass-input"
                placeholder="e.g. daniyal@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>WhatsApp Phone Number *</label>
              <input
                type="text"
                required
                className="glass-input"
                placeholder="+92 311 8123291"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Selected Course</label>
              <input
                type="text"
                readOnly
                className="glass-input"
                value={formData.courseName}
                style={{ background: 'rgba(255,255,255,0.08)', fontWeight: 700, color: 'var(--accent-secondary)' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '10px' }}>
              <Lock size={14} color="var(--accent-primary)" />
              <span>100% Encrypted SSL &bull; Instant Access Portal Dispatch</span>
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1rem', width: '100%' }}>
              Complete Instant Enrollment
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
