import React, { useState, useEffect } from 'react';
import { Activity, Globe, Flame, Calendar, TrendingUp, TrendingDown, RefreshCw, Radio, Filter } from 'lucide-react';

export default function LiveMarketSection() {
  const [activeTab, setActiveTab] = useState('watchlist');
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [impactFilter, setImpactFilter] = useState('ALL');
  const [currencyFilter, setCurrencyFilter] = useState('ALL');
  const [currentTime, setCurrentTime] = useState('');

  // Fallback high-impact events in case of offline/network issues
  const fallbackEvents = [
    { time: '13:30 GMT', currency: 'USD', title: 'Non-Farm Employment Change (NFP)', impact: 'High', forecast: '185K', previous: '206K', date: new Date().toISOString() },
    { time: '13:30 GMT', currency: 'USD', title: 'Unemployment Rate', impact: 'High', forecast: '4.1%', previous: '4.1%', date: new Date().toISOString() },
    { time: '18:00 GMT', currency: 'USD', title: 'FOMC Meeting Minutes & Rate Decision', impact: 'High', forecast: '5.25%', previous: '5.50%', date: new Date().toISOString() },
    { time: '09:30 GMT', currency: 'GBP', title: 'CPI Inflation Rate YoY', impact: 'High', forecast: '2.0%', previous: '2.3%', date: new Date().toISOString() },
    { time: '12:45 GMT', currency: 'EUR', title: 'ECB Monetary Policy Statement', impact: 'Medium', forecast: '3.75%', previous: '4.00%', date: new Date().toISOString() },
    { time: '00:30 GMT', currency: 'JPY', title: 'Tokyo Core CPI y/y', impact: 'Medium', forecast: '2.2%', previous: '2.1%', date: new Date().toISOString() },
  ];

  // 24/7 Live UTC & Local Date/Time Clock
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
      
      setCurrentTime(`${day}, ${dateNum} ${month} ${year} • ${hours}:${minutes}:${seconds} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Live Forex Factory Feed 24/7
  const fetchForexFactoryData = async () => {
    setIsLoading(true);
    try {
      // Primary: Vite proxy endpoint connecting to Forex Factory
      const res = await fetch('/api/ff-calendar');
      if (!res.ok) throw new Error('Proxy failed');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setCalendarEvents(data);
      } else {
        setCalendarEvents(fallbackEvents);
      }
    } catch (err) {
      console.warn('Live feed fallback active:', err);
      setCalendarEvents(fallbackEvents);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchForexFactoryData();
    // Auto-refresh every 60 seconds 24/7
    const refreshInterval = setInterval(fetchForexFactoryData, 60000);
    return () => clearInterval(refreshInterval);
  }, []);

  // Helper to format ISO dates to exact readable Date and GMT / Time
  const formatEventDateTime = (isoString) => {
    if (!isoString) return { dateStr: 'Today', timeStr: '--:-- GMT' };
    try {
      const d = new Date(isoString);
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const day = dayNames[d.getUTCDay()];
      const dateNum = d.getUTCDate();
      const month = monthNames[d.getUTCMonth()];

      const hours = String(d.getUTCHours()).padStart(2, '0');
      const mins = String(d.getUTCMinutes()).padStart(2, '0');

      return {
        dateStr: `${day}, ${dateNum} ${month}`,
        timeStr: `${hours}:${mins} GMT`
      };
    } catch {
      return { dateStr: 'Today', timeStr: isoString };
    }
  };

  // Filtered Live Events
  const filteredEvents = calendarEvents.filter((ev) => {
    const impact = (ev.impact || '').toUpperCase();
    const country = (ev.country || ev.currency || '').toUpperCase();

    if (impactFilter === 'HIGH' && impact !== 'HIGH') return false;
    if (impactFilter === 'MEDIUM' && impact !== 'MEDIUM') return false;
    if (currencyFilter !== 'ALL' && country !== currencyFilter) return false;
    return true;
  });

  const pairs = [
    { name: 'XAU/USD', category: 'Gold Spot', price: '2,428.50', change: '+1.42%', sentiment: 82, trend: 'up' },
    { name: 'US30', category: 'Dow Jones', price: '39,450.20', change: '+0.88%', sentiment: 68, trend: 'up' },
    { name: 'NAS100', category: 'NASDAQ 100', price: '18,210.80', change: '+1.15%', sentiment: 75, trend: 'up' },
    { name: 'EUR/USD', category: 'Euro Major', price: '1.0864', change: '-0.24%', sentiment: 42, trend: 'down' },
    { name: 'GBP/USD', category: 'Cable', price: '1.2840', change: '+0.54%', sentiment: 64, trend: 'up' },
    { name: 'BTC/USD', category: 'Bitcoin', price: '65,240.00', change: '+3.85%', sentiment: 89, trend: 'up' },
  ];

  return (
    <section id="live-market" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Activity size={14} color="var(--accent-secondary)" />
            <span>REAL-TIME TERMINAL & ANALYTICS</span>
          </div>
          <h2>Live Market <span className="gradient-text">Intelligence & Sentiment</span></h2>
          <p>
            Track real-time market sentiment, institutional order flows, and key economic events before placing your trades.
          </p>

          {/* Navigation Bar for Market Widget Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('watchlist')}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'watchlist' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'watchlist' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Activity size={16} /> Top Pairs Watchlist
            </button>
            <button
              onClick={() => setActiveTab('tradingview')}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'tradingview' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'tradingview' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Globe size={16} /> Live TradingView Terminal
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: activeTab === 'calendar' ? 'var(--accent-gradient)' : 'var(--card-inner-bg)',
                color: activeTab === 'calendar' ? '#050816' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={16} /> Economic Calendar
            </button>
          </div>
        </div>

        {/* Tab 1: Top Pairs Watchlist */}
        {activeTab === 'watchlist' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {pairs.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{item.name}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.category}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>{item.price}</div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: item.trend === 'up' ? 'var(--accent-primary)' : '#FF5252',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px'
                      }}
                    >
                      {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {item.change}
                    </span>
                  </div>
                </div>

                {/* Sentiment Meter */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    <span>Bullish Sentiment</span>
                    <span style={{ color: 'var(--accent-primary)' }}>{item.sentiment}% Buyers</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.sentiment}%`, height: '100%', background: 'var(--accent-gradient)', borderRadius: '100px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Embedded TradingView Widget Placeholder / Live Container */}
        {activeTab === 'tradingview' && (
          <div className="glass-card-static" style={{ height: '540px', borderRadius: '24px', overflow: 'hidden', padding: '20px' }}>
            <iframe
              title="TradingView Chart Widget"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=FX%3AEURUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
            />
          </div>
        )}

        {/* Tab 3: Live 24/7 Forex Factory Economic Calendar Stream */}
        {activeTab === 'calendar' && (
          <div className="glass-card-static" style={{ padding: '32px' }}>
            
            {/* Live Header Bar with Real-time Clock & Feed Status */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(76, 201, 240, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={22} color="var(--accent-secondary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit, Space Grotesk, sans-serif', color: 'var(--text-primary)', margin: 0 }}>
                    Forex Factory Live Economic Calendar
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Official 24/7 Real-Time Economic Releases & Forecasts
                  </span>
                </div>
              </div>

              {/* 24/7 Live Status Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(46, 212, 122, 0.12)',
                    border: '1px solid rgba(46, 212, 122, 0.35)',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ED47A', boxShadow: '0 0 8px #2ED47A', animation: 'waPulseDot 2s infinite' }} />
                  <span>LIVE FEED: {currentTime || '24/7 CONNECTED'}</span>
                </div>

                <button
                  onClick={fetchForexFactoryData}
                  title="Refresh Live Data"
                  style={{
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--card-border)',
                    background: 'var(--card-inner-bg)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px', padding: '12px 18px', background: 'var(--card-inner-bg)', borderRadius: '14px', border: '1px solid var(--card-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Filter size={14} /> Impact:
                </span>
                {['ALL', 'HIGH', 'MEDIUM'].map((imp) => (
                  <button
                    key={imp}
                    onClick={() => setImpactFilter(imp)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      background: impactFilter === imp ? (imp === 'HIGH' ? '#FF5252' : imp === 'MEDIUM' ? '#FF9F43' : 'var(--accent-gradient)') : 'transparent',
                      color: impactFilter === imp ? '#FFFFFF' : 'var(--text-muted)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {imp === 'ALL' ? 'All Events' : imp === 'HIGH' ? '🔴 High Impact' : '🟠 Medium Impact'}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>Currency:</span>
                {['ALL', 'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrencyFilter(curr)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      background: currencyFilter === curr ? 'var(--accent-secondary)' : 'transparent',
                      color: currencyFilter === curr ? '#050816' : 'var(--text-muted)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Events List Stream */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '580px', overflowY: 'auto', paddingRight: '4px' }}>
              {isLoading && calendarEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 12px auto' }} />
                  <p style={{ margin: 0, fontWeight: 600 }}>Fetching Live 24/7 Forex Factory Economic Stream...</p>
                </div>
              ) : filteredEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  No events found matching the selected filter criteria.
                </div>
              ) : (
                filteredEvents.slice(0, 30).map((news, nIdx) => {
                  const impactUpper = (news.impact || 'Low').toUpperCase();
                  const isHigh = impactUpper === 'HIGH';
                  const isMed = impactUpper === 'MEDIUM' || impactUpper === 'MED';
                  const currency = news.country || news.currency || 'USD';
                  const eventDateTime = formatEventDateTime(news.date);

                  return (
                    <div
                      key={nIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        background: 'var(--card-inner-bg)',
                        border: '1px solid var(--card-border)',
                        flexWrap: 'wrap',
                        gap: '14px',
                        transition: 'transform 0.2s ease, border-color 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 320px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '95px' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                            {eventDateTime.dateStr}
                          </span>
                          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--accent-secondary)', whiteSpace: 'nowrap' }}>
                            {eventDateTime.timeStr}
                          </span>
                        </div>
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'rgba(76, 201, 240, 0.15)',
                            color: 'var(--accent-secondary)',
                            fontWeight: 800,
                            fontSize: '0.8rem',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {currency}
                        </span>
                        <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                          {news.title || news.event}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: isHigh ? 'rgba(255, 82, 82, 0.15)' : isMed ? 'rgba(255, 159, 67, 0.15)' : 'rgba(76, 201, 240, 0.12)',
                            color: isHigh ? '#FF5252' : isMed ? '#FF9F43' : 'var(--accent-secondary)',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            letterSpacing: '0.04em',
                            border: `1px solid ${isHigh ? 'rgba(255, 82, 82, 0.3)' : isMed ? 'rgba(255, 159, 67, 0.3)' : 'rgba(76, 201, 240, 0.2)'}`
                          }}
                        >
                          {impactUpper} IMPACT
                        </span>

                        {(news.forecast || news.previous) && (
                          <div style={{ display: 'flex', gap: '12px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                            {news.forecast && (
                              <span>
                                Forecast: <strong style={{ color: 'var(--text-primary)' }}>{news.forecast}</strong>
                              </span>
                            )}
                            {news.previous && (
                              <span>
                                Prev: <strong style={{ color: 'var(--text-muted)' }}>{news.previous}</strong>
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
