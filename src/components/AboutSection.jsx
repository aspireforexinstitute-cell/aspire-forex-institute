import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Shield, Check, Layers, BarChart2, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('mission');

  const aboutTabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'method', label: 'Methodology' }
  ];

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Visual Container */}
          <div style={{ gridColumn: 'span 12' }} className="about-left">
            <div style={{ position: 'relative' }}>
              
              {/* Main Showcase Glass Card */}
              <div
                className="glass-card-static"
                style={{
                  padding: '36px',
                  border: '1px solid var(--card-border-glow)',
                  borderRadius: '24px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Header with Unique Glowing Emblem */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(76, 201, 240, 0.18) 0%, rgba(46, 212, 122, 0.18) 100%)',
                        border: '1px solid rgba(76, 201, 240, 0.4)',
                        boxShadow: '0 0 20px rgba(76, 201, 240, 0.22)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Layers size={25} color="#4CC9F0" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
                        Aspire Core Architecture
                      </h3>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-secondary)', letterSpacing: '0.04em' }}>
                        Institutional Smart Money Trading
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modern Segmented Tab Controls */}
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    marginBottom: '24px',
                    background: 'var(--card-inner-bg)',
                    padding: '6px',
                    borderRadius: '14px',
                    border: '1px solid var(--card-border)',
                    position: 'relative'
                  }}
                >
                  {aboutTabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          flex: 1,
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: 'none',
                          background: 'transparent',
                          color: isActive ? '#050816' : 'var(--text-muted)',
                          fontWeight: 800,
                          fontSize: '0.92rem',
                          cursor: 'pointer',
                          position: 'relative',
                          zIndex: 1,
                          transition: 'color 0.25s ease',
                          fontFamily: 'Plus Jakarta Sans, sans-serif'
                        }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeAboutTab"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'var(--accent-gradient)',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              zIndex: -1,
                              boxShadow: '0 4px 18px var(--accent-glow)'
                            }}
                            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                          />
                        )}
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Box */}
                <div
                  style={{
                    minHeight: '230px',
                    padding: '28px 32px',
                    background: 'var(--card-inner-bg)',
                    borderRadius: '18px',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  {activeTab === 'mission' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h4 style={{ color: 'var(--accent-secondary)', fontSize: 'clamp(1.15rem, 1.8vw, 1.28rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Empowering Traders Through Knowledge
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, wordSpacing: '0.04em', letterSpacing: '0.01em', margin: 0 }}>
                        At{' '}
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
                          Aspire Forex Institute
                        </strong>
                        , our mission is to make Forex trading simple, structured, and accessible for aspiring traders.
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, wordSpacing: '0.04em', letterSpacing: '0.01em', margin: 0 }}>
                        We focus on building a strong foundation through practical Forex education, essential market knowledge, and clear trading signals.
                      </p>
                    </div>
                  )}
                  {activeTab === 'vision' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h4 style={{ color: 'var(--accent-primary)', fontSize: 'clamp(1.15rem, 1.8vw, 1.28rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Building Confident Traders Worldwide
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, wordSpacing: '0.04em', letterSpacing: '0.01em', margin: 0 }}>
                        Our vision is to create a trusted learning environment where aspiring traders can understand the fundamentals of Forex, develop practical market awareness, and access reliable trading signals to support their trading journey.
                      </p>
                    </div>
                  )}
                  {activeTab === 'method' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h4 className="gradient-text" style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.28rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Simple Guidance | Clear Market Signals
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, wordSpacing: '0.04em', letterSpacing: '0.01em', margin: 0 }}>
                        At{' '}
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
                          Aspire Forex Institute
                        </strong>
                        , our methodology is designed to keep Forex learning simple, practical, and easy to understand.
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, wordSpacing: '0.04em', letterSpacing: '0.01em', margin: 0 }}>
                        We provide traders with basic Forex guidance, essential market knowledge, trading signals, and regular market-related updates to help them stay informed and understand potential opportunities.
                      </p>
                    </div>
                  )}
                </div>

                {/* Floating Micro Badge - Full Width Balanced Layout */}
                <div
                  className="float-element"
                  style={{
                    marginTop: '32px',
                    marginBottom: '4px',
                    padding: '14px 24px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid rgba(46, 212, 122, 0.35)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    boxShadow: '0 4px 16px rgba(46, 212, 122, 0.12)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(46, 212, 122, 0.15)',
                        border: '1px solid rgba(46, 212, 122, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <TrendingUp size={20} color="#2ED47A" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          letterSpacing: '0.01em',
                          fontFamily: 'Outfit, Space Grotesk, sans-serif',
                          margin: 0
                        }}
                      >
                        Grow With Aspire
                      </h4>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          letterSpacing: '0.01em'
                        }}
                      >
                        Practical Market Education & Daily Insights
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: 'rgba(46, 212, 122, 0.1)',
                      border: '1px solid rgba(46, 212, 122, 0.3)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      fontWeight: 700
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#2ED47A',
                        boxShadow: '0 0 8px #2ED47A'
                      }}
                    />
                    Live Learning & Signals
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div style={{ gridColumn: 'span 12' }} className="about-right">
            <div className="badge-pill" style={{ marginBottom: '18px' }}>
              <Target size={14} color="var(--accent-secondary)" />
              <span>About Aspire Forex Institute</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '20px' }}>
              Where Market Knowledge Meets <span className="gradient-text">Real-Time Insight</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
              <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Aspire Forex Institute</strong> is a dedicated Forex platform built to help traders understand the market and navigate it with greater clarity. We combine essential Forex guidance, practical market insights, trading signals, and timely market updates — all in one place.
            </p>

            {/* Checklist of Principles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(76,201,240,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px', color: 'var(--text-primary)' }}>Liquidity & Order Flow Mastery</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Identify institutional buy and sell side liquidity before market expansion.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(46,212,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={16} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px', color: 'var(--text-primary)' }}>Capital Protection & Risk Management</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Strict rules to never risk more than 1% per trade while capturing maximum upside.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(76,201,240,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text-primary)' }}>Precision Market Analysis</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    Decode market structure, price action, and key trading levels to identify potential opportunities with greater clarity and confidence.
                  </p>
                </div>
              </div>
            </div>

            <a href="#process" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Explore Our 5-Step Roadmap
            </a>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (min-width: 1024px) {
          .about-left { grid-column: span 6 !important; }
          .about-right { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}
