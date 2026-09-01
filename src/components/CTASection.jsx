import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Send } from 'lucide-react';

export default function CTASection({ onOpenEnroll }) {
  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-static cta-card-box"
          style={{
            padding: '54px 40px',
            textAlign: 'center',
            borderRadius: '28px',
            border: '1.5px solid var(--card-border-glow)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {/* Tag */}
          <div className="badge-pill" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} color="var(--accent-secondary)" />
            <span>START YOUR FOREX JOURNEY</span>
          </div>

          {/* Headline */}
          <h2 style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.2rem)', lineHeight: 1.2, marginBottom: '20px', fontWeight: 800, wordBreak: 'break-word' }}>
            Ready To Trade With <span className="gradient-text">Greater Clarity?</span>
          </h2>

          {/* Subheading */}
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', maxWidth: '780px', margin: '0 auto 32px auto', lineHeight: 1.75 }}>
            Take the next step in your Forex journey with Aspire Forex Institute. Build your foundation, stay connected with the market, and access practical Forex guidance, trading signals, and market insights designed to help you trade with greater clarity and confidence.<br /><br />
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Your journey starts with understanding. Your progress begins with consistency.</span>
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://whatsapp.com/channel/0029VbDnxUEAzNbqXUvZxo3f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '14px 36px',
                fontSize: '0.98rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Join Today <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: '14px 32px', fontSize: '0.98rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Contact Support
            </a>
          </div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-card-box {
            padding: 36px 18px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
