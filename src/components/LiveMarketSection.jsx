import React, { useState, useEffect } from 'react';
import { Globe, Flame, Calendar, TrendingUp, TrendingDown, Radio } from 'lucide-react';

export default function LiveMarketSection() {
  const [activeTab, setActiveTab] = useState('watchlist');
  const [tradingViewSymbol, setTradingViewSymbol] = useState('OANDA:XAUUSD');
  const [liveClockString, setLiveClockString] = useState('');

  // Real-time market pairs with live price fluctuation engine (Client-side simulation)
  const [livePairs, setLivePairs] = useState([
    { name: 'XAU/USD', category: 'Gold Spot', basePrice: 2428.50, currentPrice: 2428.50, change: '+1.42%', sentiment: 82, trend: 'up', decimals: 2 },
    { name: 'US30', category: 'Dow Jones', basePrice: 39450.20, currentPrice: 39450.20, change: '+0.88%', sentiment: 68, trend: 'up', decimals: 2 },
    { name: 'NAS100', category: 'NASDAQ 100', basePrice: 18210.80, currentPrice: 18210.80, change: '+1.15%', sentiment: 75, trend: 'up', decimals: 2 },
    { name: 'EUR/USD', category: 'Euro Major', basePrice: 1.0864, currentPrice: 1.0864, change: '-0.24%', sentiment: 42, trend: 'down', decimals: 4 },
    { name: 'GBP/USD', category: 'Cable', basePrice: 1.2840, currentPrice: 1.2840, change: '+0.54%', sentiment: 64, trend: 'up', decimals: 4 },
    { name: 'BTC/USD', category: 'Bitcoin', basePrice: 65240.00, currentPrice: 65240.00, change: '+3.85%', sentiment: 89, trend: 'up', decimals: 2 },
  ]);

  // 24/7 Real-Time Price Micro-Ticker Simulation for Live Market Pairs
  useEffect(() => {
    const tickInterval = setInterval(() => {
      setLivePairs(prev => prev.map(p => {
        const delta = (Math.random() - 0.48) * (p.basePrice * 0.00035);
        const newPrice = Math.max(p.basePrice * 0.96, p.currentPrice + delta);
        const isUp = newPrice >= p.basePrice;
        const pctChange = (((newPrice - p.basePrice) / p.basePrice) * 100).toFixed(2);
        return {
          ...p,
          currentPrice: newPrice,
          trend: isUp ? 'up' : 'down',
          change: `${isUp ? '+' : ''}${pctChange}%`
        };
      }));
    }, 2200);

    return () => clearInterval(tickInterval);
  }, []);

  // 24/7 Live UTC Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const day = dayNames[now.getUTCDay()];
      const dateNum = now.getUTCDate();
      const month = monthNames[now.getUTCMonth()];
      const year = now.getUTCFullYear();
      
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      
      setLiveClockString(`${day}, ${dateNum} ${month} ${year} • ${hours}:${minutes}:${seconds} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-market" className="live-market-section" style={{ padding: 'clamp(60px, 8vw, 100px) 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(28px, 5vw, 48px) auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255, 107, 0, 0.12)',
              border: '1px solid rgba(255, 107, 0, 0.35)',
              color: 'var(--accent-primary)',
              fontSize: 'clamp(0.74rem, 2vw, 0.82rem)',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}
          >
            <Radio size={14} className="animate-pulse" />
            <span>Institutional Market Intelligence</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3rem)', fontWeight: 900, fontFamily: 'Outfit, Space Grotesk, sans-serif', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.2 }}>
            Live Market <span className="gradient-text">Sentiment & Releases</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 2vw, 1.08rem)', lineHeight: 1.6, margin: '0 auto', maxWidth: '640px' }}>
            Track real-time global economic data releases, smart-money orderflow sentiment, and live charting tools directly from our trading floor.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div
            className="market-tabs-nav"
            style={{
              display: 'inline-flex',
              padding: '6px',
              borderRadius: '16px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              gap: '6px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '680px'
            }}
          >
            <button
              onClick={() => setActiveTab('watchlist')}
              className="market-tab-btn"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'watchlist' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'watchlist' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Flame size={16} /> Top Pairs Sentiment
            </button>
            <button
              onClick={() => setActiveTab('tradingview')}
              className="market-tab-btn"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'tradingview' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'tradingview' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Globe size={16} /> Live TradingView Terminal
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className="market-tab-btn"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'calendar' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'calendar' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={16} /> Economic Calendar
            </button>
          </div>
        </div>

        {/* Tab 1: Top Pairs Watchlist with Real-Time Live Ticker */}
        {activeTab === 'watchlist' && (
          <div className="watchlist-grid">
            {livePairs.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 'clamp(18px, 3vw, 24px)', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.trend === 'up' ? '#2ED47A' : '#FF5252', boxShadow: `0 0 8px ${item.trend === 'up' ? '#2ED47A' : '#FF5252'}`, display: 'inline-block' }} />
                      <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 800, margin: 0 }}>{item.name}</h3>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.category}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.currentPrice.toLocaleString('en-US', { minimumFractionDigits: item.decimals, maximumFractionDigits: item.decimals })}
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: item.trend === 'up' ? 'var(--accent-primary)' : '#FF5252',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {item.change}
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    <span>Live Orderflow Sentiment</span>
                    <span style={{ color: 'var(--accent-primary)' }}>{item.sentiment}% Buyers</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.sentiment}%`, height: '100%', background: 'var(--accent-gradient)', borderRadius: '100px', transition: 'width 0.5s ease' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Embedded TradingView Chart Widget via Iframe */}
        {activeTab === 'tradingview' && (
          <div className="glass-card-static" style={{ borderRadius: '24px', overflow: 'hidden', padding: 'clamp(12px, 2.5vw, 20px)' }}>
            {/* Top Asset Quick Switcher Toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ED47A', boxShadow: '0 0 8px #2ED47A', display: 'inline-block' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Live Institutional Charting
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(46,212,122,0.18)', color: 'var(--accent-primary)', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
                  REAL-TIME
                </span>
              </div>

              {/* Pair Switcher Buttons with Gold Default */}
              <div style={{ display: 'flex', gap: '4px', background: 'var(--card-inner-bg)', padding: '3px', borderRadius: '12px', border: '1px solid var(--card-border)', flexWrap: 'wrap' }}>
                {[
                  { label: 'Gold (XAUUSD)', symbol: 'OANDA:XAUUSD' },
                  { label: 'EUR/USD', symbol: 'FX:EURUSD' },
                  { label: 'GBP/USD', symbol: 'FX:GBPUSD' },
                  { label: 'US30', symbol: 'CAPITALCOM:US30' },
                  { label: 'NAS100', symbol: 'CAPITALCOM:NAS100' },
                  { label: 'BTC/USD', symbol: 'BINANCE:BTCUSDT' }
                ].map(p => (
                  <button
                    key={p.symbol}
                    onClick={() => setTradingViewSymbol(p.symbol)}
                    style={{
                      padding: '5px 11px',
                      borderRadius: '9px',
                      fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
                      fontWeight: 700,
                      border: 'none',
                      background: tradingViewSymbol === p.symbol ? 'var(--accent-gradient)' : 'transparent',
                      color: tradingViewSymbol === p.symbol ? '#050816' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TradingView Advanced Real-Time Candlestick Chart */}
            <div style={{ height: '560px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
              <iframe
                title="Live TradingView Terminal - Chart"
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=${encodeURIComponent(tradingViewSymbol)}&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC`}
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
              />
            </div>
          </div>
        )}

        {/* Tab 3: Official TradingView Economic Calendar via Iframe */}
        {activeTab === 'calendar' && (
          <div className="glass-card-static" style={{ borderRadius: '24px', overflow: 'hidden', padding: 'clamp(12px, 2.5vw, 20px)' }}>
            {/* Calendar Header Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(76, 201, 240, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Calendar size={18} color="var(--accent-secondary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 800, margin: 0, fontFamily: 'Outfit, Space Grotesk, sans-serif' }}>
                    TradingView Live Economic Calendar
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Real-time global macro events, high-impact interest rate decisions & news
                  </span>
                </div>
              </div>

              {/* Live Status Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(46, 212, 122, 0.12)',
                  border: '1px solid rgba(46, 212, 122, 0.35)',
                  fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2ED47A', boxShadow: '0 0 8px #2ED47A', animation: 'waPulseDot 2s infinite', flexShrink: 0 }} />
                <span>{liveClockString || 'LIVE STREAM CONNECTED'}</span>
              </div>
            </div>

            {/* TradingView Official Economic Calendar Iframe */}
            <div style={{ height: '620px', width: '100%', borderRadius: '16px', overflow: 'hidden', background: '#131722' }}>
              <iframe
                title="TradingView Live Economic Calendar"
                src="https://s.tradingview.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22countryFilter%22%3A%22us%2Ceu%2Cgb%2Cjp%2Cca%2Cau%2Cnz%2Cch%22%7D"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .market-tab-btn {
          padding: 10px 22px;
          font-size: 0.9rem;
          flex: 1 1 auto;
        }

        @media (max-width: 768px) {
          .market-tabs-nav {
            gap: 6px !important;
            padding: 4px !important;
          }
          .market-tab-btn {
            padding: 8px 12px !important;
            font-size: 0.78rem !important;
            flex: 1 1 100% !important;
          }
          #live-market .glass-card-static {
            height: auto !important;
          }
          #live-market iframe {
            height: 440px !important;
          }
        }

        @media (max-width: 480px) {
          #live-market iframe {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
