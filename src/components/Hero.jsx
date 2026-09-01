import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Award, CheckCircle2, DollarSign, Activity } from 'lucide-react';

export default function Hero({ onOpenEnroll, onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('EURUSD');
  const [livePrice, setLivePrice] = useState(1.0864);
  const [animateIn, setAnimateIn] = useState(true);
  const heroSectionRef = React.useRef(null);

  // Simulate real-time forex ticker tick
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 0.0004;
      setLivePrice((prev) => parseFloat((prev + delta).toFixed(4)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Re-trigger opening animation on scroll in / scroll up / view enter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIn(true);
        } else {
          setAnimateIn(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroSectionRef}
      style={{
        position: 'relative',
        paddingTop: '180px',
        paddingBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Blur Particles in Background */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76, 201, 240, 0.15) 0%, rgba(46, 212, 122, 0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'pulseGlow 6s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 212, 122, 0.12) 0%, rgba(76, 201, 240, 0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'pulseGlow 8s ease-in-out infinite reverse'
        }}
      />

      {/* Floating Animated Grid Mesh Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.6
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--bg-primary) 85%)'
          }}
        >
        </div>
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-grid-layout">
          
          {/* Left Hero Content */}
          <div className="hero-left-col">
            
            {/* Main Headline Area with Clean Typography & Unique Opening Animation */}
            <div className="hero-headline-container" style={{ position: 'relative', marginBottom: '22px' }}>
              {/* Soft Ambient Glow Aura behind Headline */}
              <div className="headline-glow-aura" />

              {/* Small Clean Typography: Welcome to */}
              <div className={`hero-welcome-text-wrapper ${animateIn ? 'animate-active' : ''}`}>
                <span className="welcome-small-text">Welcome to</span>
              </div>

              {/* Main Headline: Aspire Forex Institute with Proper Word Spacing */}
              <h1 className="hero-main-title">
                <span className="hero-title-top-row">
                  <span className={`title-word title-aspire ${animateIn ? 'animate-active' : ''}`}>Aspire</span>
                  <span className={`title-word title-forex ${animateIn ? 'animate-active' : ''}`}>Forex</span>
                </span>
                <span className={`title-word title-institute gradient-text ${animateIn ? 'animate-active' : ''}`}>Institute</span>
              </h1>
            </div>

            {/* Subheading with formatted bold text and proper spacing */}
            <div
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                marginBottom: '28px',
                maxWidth: '620px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <p style={{ margin: 0, fontSize: 'clamp(1.05rem, 1.45vw, 1.18rem)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Welcome to Aspire Forex Institute</strong> — where market intelligence meets disciplined trading.
              </p>

              <p style={{ margin: 0, lineHeight: 1.75, fontSize: 'clamp(1rem, 1.35vw, 1.1rem)' }}>
                We empower retail traders with <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>professional market analysis, high-quality trading signals, practical forex insights, and essential market education</strong> designed to help you understand price movements, identify opportunities, and approach the markets with greater clarity and confidence.
              </p>
            </div>

            {/* CTA Action Button */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginBottom: '32px' }}>
              <a
                href="https://whatsapp.com/channel/0029VbDnxUEAzNbqXUvZxo3f"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: '15px 36px',
                  fontSize: '0.98rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                Join Us
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Feature Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', borderTop: '1px solid var(--card-border)', paddingTop: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Forex Guidance & Education</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Signals & Market Insights</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Dashboard Mockup - Always Rich Dark Terminal Style */}
          <div className="hero-right-col">
            <div className="hero-terminal-card">
              {/* Top Dashboard Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ED47A', boxShadow: '0 0 8px #2ED47A', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: '#FFFFFF', whiteSpace: 'nowrap' }}>Live Institutional Terminal</span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(46,212,122,0.2)', color: '#2ED47A', padding: '3px 8px', borderRadius: '6px', fontWeight: 800 }}>
                    ACTIVE
                  </span>
                </div>

                {/* Asset Tabs */}
                <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.06)', padding: '3px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
                  {['EURUSD', 'XAUUSD', 'US30', 'BTCUSD'].map((pair) => (
                    <button
                      key={pair}
                      onClick={() => setActiveTab(pair)}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '7px',
                        fontSize: 'clamp(0.68rem, 2vw, 0.75rem)',
                        fontWeight: 700,
                        border: 'none',
                        background: activeTab === pair ? '#4CC9F0' : 'transparent',
                        color: activeTab === pair ? '#050816' : '#94A3B8',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {pair}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticker & Price Bar */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>
                  {activeTab === 'EURUSD' ? livePrice.toFixed(4) : activeTab === 'XAUUSD' ? '2,428.50' : activeTab === 'US30' ? '39,450.0' : '65,240.0'}
                </span>
                <span style={{ fontSize: 'clamp(0.82rem, 2.2vw, 0.95rem)', color: '#2ED47A', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={15} /> +1.84% (Bullish Order Block)
                </span>
              </div>

              {/* Dynamic Animated SVG Candlestick Chart - Crisp Solid Dark Container */}
              <div
                style={{
                  height: '210px',
                  width: '100%',
                  background: '#050816',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}
              >
                {/* Signal Callout Badge */}
                <div className="hero-chart-badge">
                  <Activity size={12} style={{ flexShrink: 0 }} />
                  <span>Buy Signal Confirmed: SMC Liquidity</span>
                </div>

                {/* SVG Candlestick Graphic */}
                <svg width="100%" height="100%" viewBox="0 0 460 170" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="460" y2="40" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="85" x2="460" y2="85" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="130" x2="460" y2="130" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

                  {/* Candlesticks */}
                  {/* Candle 1 (Green) */}
                  <line x1="25" y1="100" x2="25" y2="140" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="20" y="110" width="10" height="22" fill="#2ED47A" rx="2" />

                  {/* Candle 2 (Red) */}
                  <line x1="65" y1="90" x2="65" y2="135" stroke="#FF5252" strokeWidth="2" />
                  <rect x="60" y="100" width="10" height="18" fill="#FF5252" rx="2" />

                  {/* Candle 3 (Green) */}
                  <line x1="105" y1="75" x2="105" y2="125" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="100" y="85" width="10" height="30" fill="#2ED47A" rx="2" />

                  {/* Candle 4 (Liquidity Sweep Green) */}
                  <line x1="145" y1="55" x2="145" y2="110" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="140" y="65" width="10" height="35" fill="#2ED47A" rx="2" />

                  {/* Candle 5 (Red Pullback) */}
                  <line x1="185" y1="70" x2="185" y2="105" stroke="#FF5252" strokeWidth="2" />
                  <rect x="180" y="75" width="10" height="20" fill="#FF5252" rx="2" />

                  {/* Candle 6 (Bullish Imbalance Breakout) */}
                  <line x1="225" y1="35" x2="225" y2="90" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="220" y="45" width="10" height="35" fill="#2ED47A" rx="2" />

                  {/* Candle 7 (Green Strong) */}
                  <line x1="265" y1="20" x2="265" y2="65" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="260" y="25" width="10" height="30" fill="#2ED47A" rx="2" />

                  {/* Candle 8 (Pullback to Order Block) */}
                  <line x1="305" y1="35" x2="305" y2="80" stroke="#FF5252" strokeWidth="2" />
                  <rect x="300" y="40" width="10" height="25" fill="#FF5252" rx="2" />

                  {/* Candle 9 (Huge Surge) */}
                  <line x1="345" y1="15" x2="345" y2="60" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="340" y="20" width="10" height="32" fill="#2ED47A" rx="2" />

                  {/* Candle 10 (Breakout High) */}
                  <line x1="385" y1="10" x2="385" y2="48" stroke="#2ED47A" strokeWidth="2" />
                  <rect x="380" y="12" width="10" height="26" fill="#2ED47A" rx="2" />

                  {/* Smooth Trend Curve Line */}
                  <path
                    d="M 25 120 Q 105 85, 145 75 T 225 45 T 305 40 T 395 18"
                    fill="none"
                    stroke="#4CC9F0"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Bottom Stat Cards Grid */}
              <div className="hero-stats-grid">
                <div className="hero-stat-box">
                  <span className="hero-stat-label">Win Rate</span>
                  <span className="hero-stat-value" style={{ color: '#2ED47A' }}>94.8%</span>
                </div>
                <div className="hero-stat-box">
                  <span className="hero-stat-label">Avg Risk/Reward</span>
                  <span className="hero-stat-value" style={{ color: '#4CC9F0' }}>1 : 3.8</span>
                </div>
                <div className="hero-stat-box">
                  <span className="hero-stat-label">Funded Traders</span>
                  <span className="hero-stat-value" style={{ color: '#EAB308' }}>1,420+</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Grid columns media query support & Hero Welcome animations */}
      <style>{`
        /* Welcome to - Clean Small Typography */
        .hero-welcome-text-wrapper {
          margin-bottom: 12px;
          opacity: 0;
          transform: translateY(14px);
          filter: blur(4px);
        }

        .hero-welcome-text-wrapper.animate-active {
          animation: welcomeTextEntrance 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.08s forwards;
        }

        .welcome-small-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #4CC9F0;
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }

        .welcome-small-text::after {
          content: '';
          display: inline-block;
          width: 36px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #4CC9F0, transparent);
        }

        /* Headline Container & Ambient Glow Aura */
        .hero-headline-container {
          position: relative;
        }

        .headline-glow-aura {
          position: absolute;
          top: -20px;
          left: -40px;
          width: 440px;
          height: 190px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76, 201, 240, 0.18) 0%, rgba(46, 212, 122, 0.08) 55%, transparent 75%);
          filter: blur(45px);
          pointer-events: none;
          z-index: 0;
          animation: auraBreathing 5s ease-in-out infinite;
        }

        /* Hero Main Title Typography with Clear Word Spacing */
        .hero-main-title {
          position: relative;
          z-index: 1;
          font-family: 'Outfit', 'Space Grotesk', sans-serif;
          font-size: clamp(3.2rem, 5.8vw, 4.75rem);
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 12px 18px;
        }

        .hero-title-top-row {
          display: inline-flex;
          align-items: baseline;
          gap: 12px 18px;
        }

        /* Staggered Word Entrance Animations */
        .title-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(26px) scale(0.96);
          filter: blur(6px);
        }

        .title-word.animate-active {
          animation: wordEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .title-aspire.animate-active {
          color: var(--text-primary);
          animation-delay: 0.18s;
        }

        .title-forex.animate-active {
          color: #4CC9F0;
          text-shadow: 0 0 24px rgba(76, 201, 240, 0.45);
          animation-delay: 0.32s;
        }

        .title-institute.animate-active {
          animation-delay: 0.46s;
        }

        /* Keyframes */
        @keyframes welcomeTextEntrance {
          0% { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes wordEntrance {
          0% { opacity: 0; transform: translateY(26px) scale(0.96); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes auraBreathing {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }

        /* Light mode adjustments */
        :root[data-theme="light"] .welcome-small-text {
          color: #0284C7;
        }
        :root[data-theme="light"] .welcome-small-text::after {
          background: linear-gradient(90deg, #0284C7, transparent);
        }
        :root[data-theme="light"] .title-forex {
          color: #0284C7;
          text-shadow: 0 0 16px rgba(2, 132, 199, 0.3);
        }

        /* Hero Chart Badge & Stats Styling */
        .hero-chart-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(46, 212, 122, 0.2);
          border: 1px solid #2ED47A;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #2ED47A;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
          max-width: calc(100% - 28px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hero-stat-box {
          background: #090D1A;
          padding: 14px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          min-width: 0;
          text-align: center;
          align-items: center;
        }

        .hero-stat-label {
          font-size: 0.78rem;
          color: #94A3B8;
          display: block;
          margin-bottom: 4px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .hero-stat-value {
          font-size: clamp(1.1rem, 2.2vw, 1.35rem);
          font-weight: 800;
          white-space: nowrap;
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .hero-main-title {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
            font-size: clamp(2rem, 7.8vw, 2.8rem) !important;
            line-height: 1.14 !important;
            width: 100% !important;
          }
          .hero-title-top-row {
            display: flex !important;
            align-items: baseline !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            width: 100% !important;
          }
          .welcome-small-text {
            font-size: 0.98rem !important;
          }
          .hero-chart-badge {
            top: 10px !important;
            right: 10px !important;
            padding: 3px 8px !important;
            font-size: 0.65rem !important;
            max-width: calc(100% - 20px) !important;
          }
          .hero-stat-box {
            padding: 10px 4px !important;
            border-radius: 10px !important;
          }
          .hero-stat-label {
            font-size: 0.68rem !important;
            letter-spacing: -0.01em !important;
          }
          .hero-stat-value {
            font-size: clamp(0.95rem, 3.4vw, 1.15rem) !important;
          }
        }

        @media (max-width: 480px) {
          .hero-main-title {
            font-size: clamp(1.85rem, 8vw, 2.35rem) !important;
          }
          .hero-chart-badge {
            font-size: 0.62rem !important;
            padding: 3px 6px !important;
          }
          .hero-stat-box {
            padding: 8px 3px !important;
          }
          .hero-stat-label {
            font-size: 0.62rem !important;
          }
          .hero-stat-value {
            font-size: 0.92rem !important;
          }
        }
      `}</style>
    </section>
  );
}
