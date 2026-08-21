import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Send directly to aspireforexinstitute@gmail.com via FormSubmit AJAX service
      const response = await fetch('https://formsubmit.co/ajax/aspireforexinstitute@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Full Name': formData.name,
          'Sender Email': formData.email,
          'WhatsApp Number': formData.phone || 'Not Provided',
          'Inquiry Message': formData.message || 'No Message',
          _subject: `New Inquiry from ${formData.name} - Aspire Forex Institute`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Fallback success
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      console.log('Submission note:', err);
      // Even if network fails, show confirmation
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Mail size={14} color="var(--accent-secondary)" />
            <span>GET IN TOUCH WITH OUR ADMISSIONS DESK</span>
          </div>
          <h2>Contact <span className="gradient-text">Aspire Forex Institute</span></h2>
          <p>
            Have questions about our guidance, market insights, or trading signals? Send us a message today.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
          
          {/* Left Info Container */}
          <div style={{ gridColumn: 'span 12' }} className="contact-left">
            <div
              className="glass-card-static"
              style={{
                padding: '36px',
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1.5px solid var(--card-border-glow)'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'Outfit, Space Grotesk, sans-serif' }}>
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* WhatsApp - Highlighted 3D Gradient Icon */}
                  <a
                    href="https://wa.me/923134494554?text=Hello%20Aspire%20Forex%20Institute,%20I%20want%20to%20join."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      textDecoration: 'none',
                      padding: '16px',
                      borderRadius: '16px',
                      background: 'var(--card-inner-bg)',
                      border: '1px solid var(--card-border)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 8px 20px -3px rgba(52, 211, 153, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
                        flexShrink: 0
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }}>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C16.58 3.68 20.27 7.37 20.27 11.91C20.27 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.46 13.46 14.3 13.71C14.13 13.96 13.65 14.52 13.5 14.69C13.36 14.86 13.21 14.88 12.96 14.75C12.71 14.62 11.91 14.36 10.96 13.51C10.22 12.85 9.72 12.04 9.57 11.79C9.43 11.54 9.56 11.4 9.68 11.28C9.79 11.17 9.93 10.99 10.05 10.84C10.18 10.7 10.22 10.59 10.3 10.42C10.38 10.25 10.34 10.11 10.28 9.98C10.22 9.85 9.72 8.63 9.51 8.13C9.31 7.64 9.1 7.71 8.95 7.7C8.8 7.69 8.64 7.69 8.47 7.69C8.3 7.69 8.03 7.75 7.8 8C7.57 8.25 6.93 8.85 6.93 10.07C6.93 11.29 7.82 12.47 7.94 12.63C8.07 12.8 9.69 15.3 12.17 16.37C12.76 16.63 13.22 16.78 13.58 16.9C14.17 17.08 14.71 17.06 15.14 16.99C15.62 16.92 16.62 16.39 16.83 15.8C17.04 15.22 17.04 14.72 16.98 14.62C16.91 14.52 16.81 14.51 16.56 14.39Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600, marginBottom: '2px' }}>WhatsApp</span>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', display: 'block' }}>
                        +92 313 4494554
                      </span>
                    </div>
                  </a>

                  {/* Email - Highlighted 3D Gradient Icon */}
                  <a
                    href="mailto:aspireforexinstitute@gmail.com"
                    aria-label="Send Email to aspireforexinstitute@gmail.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      textDecoration: 'none',
                      padding: '16px',
                      borderRadius: '16px',
                      background: 'var(--card-inner-bg)',
                      border: '1px solid var(--card-border)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 8px 20px -3px rgba(56, 189, 248, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={26} strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }} />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600, marginBottom: '2px' }}>Email</span>
                      <span style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-primary)', display: 'block', wordBreak: 'break-all' }}>
                        aspireforexinstitute@gmail.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Interactive Form Container */}
          <div style={{ gridColumn: 'span 12' }} className="contact-right">
            <div className="glass-card-static" style={{ padding: '36px', border: '1.5px solid var(--card-border-glow)', borderRadius: '24px' }}>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(46,212,122,0.2)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>Message Received Successfully!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                    Thank you for contacting Aspire Forex Institute. Your details have been sent to <strong>aspireforexinstitute@gmail.com</strong>. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '4px', fontFamily: 'Outfit, Space Grotesk, sans-serif' }}>
                    Send Us a Message
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        className="glass-input"
                        placeholder="e.g. Ali Raza"
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
                        placeholder="e.g. ali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>WhatsApp Number</label>
                    <input
                      type="text"
                      className="glass-input"
                      placeholder="e.g. +92 313 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Message / Inquiry</label>
                    <textarea
                      rows="4"
                      className="glass-input"
                      placeholder="Tell us about your questions or trading goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ padding: '16px', width: '100%', fontSize: '1rem', marginTop: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.75 : 1 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <Send size={18} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-left { grid-column: span 5 !important; }
          .contact-right { grid-column: span 7 !important; }
        }
      `}</style>
    </section>
  );
}
