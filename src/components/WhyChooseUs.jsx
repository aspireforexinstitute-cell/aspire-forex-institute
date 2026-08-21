import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ShieldAlert, CandlestickChart, UserCheck, BrainCircuit, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Radio,
      title: 'Live Market Guidance & Updates',
      desc: 'Access ongoing market analysis, live session updates, and regular market-related insights to stay in tune with active trading hours.',
      tag: 'Real-Time Insights',
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      glow: 'rgba(56, 189, 248, 0.4)'
    },
    {
      icon: ShieldAlert,
      title: 'Structured Risk & Capital Discipline',
      desc: 'Learn essential principles of risk control, position management, and disciplined trade planning to safeguard your capital.',
      tag: 'Capital Awareness',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
      glow: 'rgba(52, 211, 153, 0.4)'
    },
    {
      icon: CandlestickChart,
      title: 'Price Action & Market Mechanics',
      desc: 'Decode price movement, market levels, and clean structure patterns to understand how market dynamics actually operate.',
      tag: 'Core Mechanics',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
      glow: 'rgba(251, 191, 36, 0.4)'
    },
    {
      icon: UserCheck,
      title: 'Direct Community & Mentor Support',
      desc: 'Receive clear explanations, structured walkthroughs, and answers to your questions as you develop your trading understanding.',
      tag: 'Guided Learning',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      glow: 'rgba(167, 139, 250, 0.4)'
    },
    {
      icon: BrainCircuit,
      title: 'Disciplined Trading Mindset',
      desc: 'Build emotional composure, patience, and consistency through disciplined trading principles and structured routines.',
      tag: 'Mindset & Focus',
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #DB2777 0%, #FB7185 100%)',
      glow: 'rgba(251, 113, 133, 0.4)'
    },
    {
      icon: Users,
      title: 'Active Trading Community',
      desc: 'Connect with fellow aspiring traders, share chart observations, and grow together within a supportive learning ecosystem.',
      tag: 'Trader Network',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
      glow: 'rgba(96, 165, 250, 0.4)'
    }
  ];

  return (
    <section id="why-us" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span>THE ASPIRE ADVANTAGE</span>
          </div>
          <h2>Why Traders Choose <span className="gradient-text">Aspire</span></h2>
          <p>
            We focus on practical Forex education, essential market knowledge, and clear trading signals designed to support your trading journey.
          </p>
        </div>

        {/* 6 Premium Cards Grid with Individual Staggered Scroll Motion */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (idx % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card"
                style={{
                  padding: '36px',
                  borderTop: `3px solid ${item.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: item.gradient,
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: `0 8px 20px -3px ${item.glow}, inset 0 2px 4px rgba(255, 255, 255, 0.35)`
                      }}
                    >
                      <Icon size={26} strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        padding: '5px 12px',
                        borderRadius: '100px',
                        background: 'var(--card-inner-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.3, fontFamily: 'Outfit, Space Grotesk, sans-serif' }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.72 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Bottom Glow Accent Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    opacity: 0.5,
                    marginTop: '24px'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
