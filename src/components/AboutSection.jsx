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
        <div className="about-grid-layout">
          
          {/* Left Visual Container */}
          <div className="about-left">
            <div style={{ position: 'relative' }}>
              
              {/* Main Showcase Glass Card */}
              <div className="glass-card-static about-main-card">
                {/* Header with Unique Glowing Emblem */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
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
                      <Layers size={24} color="#4CC9F0" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '2px' }}>
                        Aspire Core Architecture
                      </h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-secondary)', letterSpacing: '0.04em' }}>
                        Institutional Smart Money Trading
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modern Segmented Tab Controls */}
                <div
                  style={{
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '20px',
                    background: 'var(--card-inner-bg)',
                    padding: '4px',
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
                          padding: '9px 4px',
                          borderRadius: '10px',
                          border: 'none',
                          background: 'transparent',
                          color: isActive ? '#050816' : 'var(--text-muted)',
                          fontWeight: 800,
                          fontSize: 'clamp(0.72rem, 2.3vw, 0.88rem)',
                          cursor: 'pointer',
                          position: 'relative',
                          zIndex: 1,
                          transition: 'color 0.25s ease',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                          minWidth: 0
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
                <div className="about-tab-content-box">
                  {activeTab === 'mission' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <h4 style={{ color: 'var(--accent-secondary)', fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Empowering Traders Through Knowledge
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                        At{' '}
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
                          Aspire Forex Institute
                        </strong>
                        , our mission is to make Forex trading simple, structured, and accessible for aspiring traders.
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                        We focus on building a strong foundation through practical Forex education, essential market knowledge, and clear trading signals.
                      </p>
                    </div>
                  )}
                  {activeTab === 'vision' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <h4 style={{ color: 'var(--accent-primary)', fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Building Confident Traders Worldwide
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                        Our vision is to create a trusted learning environment where aspiring traders can understand the fundamentals of Forex, develop practical market awareness, and access reliable trading signals to support their trading journey.
                      </p>
                    </div>
                  )}
                  {activeTab === 'method' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <h4 className="gradient-text" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '0.01em', margin: 0 }}>
                        Simple Guidance | Clear Market Signals
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                        At{' '}
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
                          Aspire Forex Institute
                        </strong>
                        , our methodology is designed to keep Forex learning simple, practical, and easy to understand.
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                        We provide traders with basic Forex guidance, essential market knowledge, trading signals, and regular market-related updates to help them stay informed and understand potential opportunities.
                      </p>
                    </div>
                  )}
                </div>

                {/* Floating Micro Badge - Full Width Balanced Layout */}
                <div
                  className="about-grow-badge"
                  style={{
                    marginTop: '24px',
                    padding: '14px 20px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid rgba(46, 212, 122, 0.35)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '14px',
                    boxShadow: '0 4px 16px rgba(46, 212, 122, 0.12)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(46, 212, 122, 0.15)',
                        border: '1px solid rgba(46, 212, 122, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <TrendingUp size={18} color="#2ED47A" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '1rem',
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
                          fontSize: '0.78rem',
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
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      background: 'rgba(46, 212, 122, 0.1)',
                      border: '1px solid rgba(46, 212, 122, 0.3)',
                      color: 'var(--text-primary)',
                      fontSize: '0.78rem',
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
          <div className="about-right">
            <div className="badge-pill" style={{ marginBottom: '18px' }}>
              <Target size={14} color="var(--accent-secondary)" />
              <span>About Aspire Forex Institute</span>
            </div>

            <h2 className="about-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', lineHeight: 1.22, marginBottom: '20px', wordBreak: 'break-word' }}>
              Where Market Knowledge Meets <span className="gradient-text">Real-Time Insight</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '28px' }}>
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
        .about-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
        }

        .about-main-card {
          padding: 36px;
          border: 1px solid var(--card-border-glow);
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .about-tab-content-box {
          min-height: 220px;
          padding: 28px 30px;
          background: var(--card-inner-bg);
          border-radius: 18px;
          border: 1px solid var(--card-border);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .about-grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .about-main-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .about-tab-content-box {
            padding: 16px 12px !important;
            min-height: 180px !important;
          }
          .about-heading {
            font-size: clamp(1.65rem, 6.2vw, 2.1rem) !important;
          }
          .about-grow-badge {
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
