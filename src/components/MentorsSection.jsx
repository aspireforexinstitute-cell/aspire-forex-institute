import React from 'react';
import { Send, Award, CheckCircle2, TrendingUp, Globe, Share2 } from 'lucide-react';

export default function MentorsSection() {
  const mentors = [
    {
      name: 'Ch. Hasnain',
      role: 'Founder & Lead Institutional SMC Trader',
      experience: '8+ Years Exp',
      winRate: '94.2% Win Rate',
      bio: 'Ex-institutional prop trader specializing in central bank liquidity sweeps, Smart Money Concepts, and multi-million dollar capital management.',
      avatarColor: 'linear-gradient(135deg, #0A84FF 0%, #00C896 100%)',
      specialty: 'SMC & Liquidity Sweeps'
    },
    {
      name: 'Zain Ul Abidin',
      role: 'Head ICT Specialist & Order Flow Analyst',
      experience: '6+ Years Exp',
      winRate: '91.8% Win Rate',
      bio: 'Master of London & New York session killzones, Silver Bullet setups, and daily market expansion models.',
      avatarColor: 'linear-gradient(135deg, #4CC9F0 0%, #2ED47A 100%)',
      specialty: 'ICT Killzones & OTE'
    },
    {
      name: 'Ayesha Khan',
      role: 'Risk Management & Psychology Coach',
      experience: '5+ Years Exp',
      winRate: '92.5% Win Rate',
      bio: 'Specialist in trading psychology, emotional control, position sizing algorithms, and prop firm risk compliance.',
      avatarColor: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
      specialty: 'Mindset & Risk Systems'
    },
    {
      name: 'Hamza Malik',
      role: 'Prop Firm & High-Frequency Scalping Coach',
      experience: '7+ Years Exp',
      winRate: '93.6% Win Rate',
      bio: 'Scaled over $500K in funded prop firm accounts. Expert in 1m/5m high-frequency scalping strategies.',
      avatarColor: 'linear-gradient(135deg, #FFD166 0%, #FF5252 100%)',
      specialty: 'Prop Firm Challenges'
    }
  ];

  return (
    <section id="mentors" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Award size={14} color="var(--accent-secondary)" />
            <span>WORLD-CLASS FACULTY</span>
          </div>
          <h2>Guided by <span className="gradient-text">Veteran Institutional Traders</span></h2>
          <p>
            Learn directly from mentors who trade live markets daily and have proven track records with multi-figure funded accounts.
          </p>
        </div>

        {/* Mentors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {mentors.map((mentor, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
              
              {/* Avatar Circle Container with Luxury Emblem */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '30px',
                  margin: '0 auto 20px auto',
                  background: mentor.avatarColor,
                  padding: '3px',
                  boxShadow: '0 15px 30px -10px var(--accent-glow)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '27px',
                    background: '#0D1327',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Name & Role */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px' }}>{mentor.name}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                {mentor.role}
              </span>

              {/* Badges */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
                  {mentor.experience}
                </span>
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '100px', background: 'rgba(46,212,122,0.12)', border: '1px solid rgba(46,212,122,0.3)', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  {mentor.winRate}
                </span>
              </div>

              {/* Bio */}
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.72, marginBottom: '24px' }}>
                {mentor.bio}
              </p>

              {/* Social Icons (Clean Inline SVG) */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                <a href="#mentors" aria-label="LinkedIn" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#mentors" aria-label="Twitter" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#mentors" aria-label="Telegram" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                  <Send size={18} />
                </a>
                <a href="#mentors" aria-label="Website" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                  <Globe size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
