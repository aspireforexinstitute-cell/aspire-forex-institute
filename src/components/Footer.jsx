import React, { useState } from 'react';
import { Send, ArrowUp, Globe, ShieldCheck } from 'lucide-react';

export default function Footer({ theme = 'dark' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '80px',
        paddingBottom: '40px',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(30px)',
        borderTop: '1px solid var(--card-border)'
      }}
    >
      <div className="container-custom">
        <div className="footer-grid">
          
          {/* Col 1: Institute Branding */}
          <div>
            <a href="#home" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration: 'none', marginBottom: '20px', gap: '10px' }}>
              {/* Badge logo with glow */}
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                  alt="Aspire Forex Institute"
                  style={{
                    height: '90px',
                    width: '90px',
                    objectFit: 'contain',
                    display: 'block',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 0 14px rgba(76,201,240,0.45))',
                    transition: 'filter 0.4s ease, transform 0.4s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'drop-shadow(0 0 22px rgba(76,201,240,0.8)) brightness(1.08)'; e.currentTarget.style.transform = 'scale(1.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(76,201,240,0.45))'; e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Animated pulse ring */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '104px',
                  height: '104px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(76,201,240,0.22) 0%, rgba(46,212,122,0.08) 55%, transparent 70%)',
                  animation: 'logoPulse 3s ease-in-out infinite',
                  pointerEvents: 'none',
                  zIndex: 0
                }} />
              </div>
              {/* Brand name text */}
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)', display: 'block', lineHeight: 1.2 }}>
                  Aspire<span style={{ color: 'var(--accent-secondary)' }}>Forex</span>
                </span>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                  Institute
                </span>
              </div>
            </a>


            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '24px' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                Empowering Smarter Decisions. Building Confident Traders.
              </strong>
              Reliable market insights, practical guidance, and a smarter approach to Forex.
            </p>

            {/* Social Links - Instagram, TikTok, Facebook, WhatsApp */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aspireforexinstitute?igsi=dW81azBrcTF3ZGJ4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="social-footer-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#E1306C';
                  e.currentTarget.style.background = 'rgba(225, 48, 108, 0.15)';
                  e.currentTarget.style.color = '#E1306C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@aspireforexinstitute?_r=1&_t=ZS-994WvJCHOR6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className="social-footer-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00F2FE';
                  e.currentTarget.style.background = 'rgba(0, 242, 254, 0.15)';
                  e.currentTarget.style.color = '#00F2FE';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.88.13V9.04a6.35 6.35 0 0 0-.88-.06A6.34 6.34 0 0 0 3 15.32 6.34 6.34 0 0 0 9.34 21.66a6.34 6.34 0 0 0 6.34-6.34V8.58c1.37.98 3.03 1.56 4.83 1.56V6.69h-.92z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1cGMfPjdHk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="social-footer-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#1877F2';
                  e.currentTarget.style.background = 'rgba(24, 119, 242, 0.15)';
                  e.currentTarget.style.color = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029VbDnxUEAzNbqXUvZxo3f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community Channel"
                className="social-footer-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                  e.currentTarget.style.color = '#25D366';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C16.58 3.68 20.27 7.37 20.27 11.91C20.27 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.46 13.46 14.3 13.71C14.13 13.96 13.65 14.52 13.5 14.69C13.36 14.86 13.21 14.88 12.96 14.75C12.71 14.62 11.91 14.36 10.96 13.51C10.22 12.85 9.72 12.04 9.57 11.79C9.43 11.54 9.56 11.4 9.68 11.28C9.79 11.17 9.93 10.99 10.05 10.84C10.18 10.7 10.22 10.59 10.3 10.42C10.38 10.25 10.34 10.11 10.28 9.98C10.22 9.85 9.72 8.63 9.51 8.13C9.31 7.64 9.1 7.71 8.95 7.7C8.8 7.69 8.64 7.69 8.47 7.69C8.3 7.69 8.03 7.75 7.8 8C7.57 8.25 6.93 8.85 6.93 10.07C6.93 11.29 7.82 12.47 7.94 12.63C8.07 12.8 9.69 15.3 12.17 16.37C12.76 16.63 13.22 16.78 13.58 16.9C14.17 17.08 14.71 17.06 15.14 16.99C15.62 16.92 16.62 16.39 16.83 15.8C17.04 15.22 17.04 14.72 16.98 14.62C16.91 14.52 16.81 14.51 16.56 14.39Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Learning Process', href: '#process' },
                { name: 'Live Market', href: '#live-market' },
                { name: 'Student Reviews', href: '#testimonials' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Contact Desk', href: '#contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Education Highlights */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>Core Curriculum</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              {[
                { name: 'Smart Money Concepts (SMC)', href: '#process' },
                { name: 'Institutional Order Flow', href: '#live-market' },
                { name: 'Risk & Capital Management', href: '#about' },
                { name: 'Technical & Fundamental Analysis', href: '#why-us' },
                { name: 'Daily Live Market Analysis', href: '#live-market' },
                { name: 'Active Trading Community', href: '#testimonials' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>Institutional Weekly Brief</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Subscribe to get free weekly London & NY market breakdown reports and key news setups directly to your inbox.
            </p>

            {subscribed ? (
              <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(46,212,122,0.15)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 700 }}>
                Subscribed Successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="glass-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: '12px 14px', fontSize: '0.875rem' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px', fontSize: '0.875rem', width: '100%' }}>
                  Subscribe <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '28px', borderTop: '1px solid var(--card-border)', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Aspire Forex Institute. All Rights Reserved
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
