import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'How Central Banks Manipulate Retail Forex Traders (And How to Profit)',
      category: 'Institutional Strategy',
      date: 'August 02, 2026',
      readTime: '6 min read',
      summary: 'Discover how institutional liquidity pools trigger retail stop losses at key support/resistance levels before initiating massive trend expansions.',
      content: `Retail traders often wonder why their trade gets stopped out right before the market surges in their predicted direction. The answer lies in Central Bank Order Flow & Liquidity Engineering.

Banks and hedge funds require massive liquidity to fill multi-million dollar orders. They engineer sweeps above equal highs (BSL) and below equal lows (SSL) to capture retail stop losses as liquidity.

At Aspire Forex Institute, we teach students to identify Order Blocks (OB) and Fair Value Gaps (FVG) left behind during these sweeps so you enter alongside institutional capital instead of being liquidity.`
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Passing a $100,000 Prop Firm Challenge',
      category: 'Prop Firm Scaling',
      date: 'July 28, 2026',
      readTime: '8 min read',
      summary: 'A step-by-step risk blueprint for passing FTMO, FundedNext, and 5%ers evaluations without hitting maximum daily drawdown limits.',
      content: `Passing a prop firm evaluation is 20% strategy and 80% capital protection risk compliance. 

Key Rules for Passing:
1. Never risk more than 0.5% to 1.0% per trade.
2. Maintain a minimum Risk/Reward ratio of 1:3.
3. Stop trading for the day after 2 consecutive losses to protect mental capital.
4. Focus only on high-conviction London and New York Killzones.

By following Aspire's Position Size Calculator and risk management rules, over 95% of our disciplined students secure funded accounts.`
    },
    {
      id: 3,
      title: 'Decoding the ICT Silver Bullet Strategy for 5m Scalpers',
      category: 'ICT Masterclass',
      date: 'July 20, 2026',
      readTime: '5 min read',
      summary: 'Learn the exact 10:00 AM - 11:00 AM NY Session window to catch high-probability 15 to 30 pip expansions daily.',
      content: `The ICT Silver Bullet is one of the most consistent time-based trading models in modern price action.

The Silver Bullet window opens during specific 60-minute Killzone windows:
- London Session: 3:00 AM - 4:00 AM EST
- New York Session: 10:00 AM - 11:00 AM EST

During this hour, look for a Liquidity Sweep, a Market Structure Shift (MSS) on the 5-minute timeframe, and enter on the first Fair Value Gap (FVG) retracement with a tight 10-pip stop loss.`
    }
  ];

  return (
    <section id="blog" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <BookOpen size={14} color="var(--accent-secondary)" />
            <span>INSTITUTIONAL INSIGHTS & BLOG</span>
          </div>
          <h2>Latest Trading <span className="gradient-text">Articles & Research</span></h2>
          <p>
            Stay updated with cutting-edge price action insights, macro market breakdowns, and prop firm strategies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {articles.map((article) => (
            <div key={article.id} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', background: 'rgba(76,201,240,0.15)', color: 'var(--accent-secondary)' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} /> {article.readTime}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>
                  {article.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {article.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--card-border)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} /> {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-secondary)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div
            className="glass-card-static"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '700px',
              width: '100%',
              padding: '36px',
              maxHeight: '85vh',
              overflowY: 'auto',
              border: '1px solid var(--card-border-glow)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '100px', background: 'rgba(76,201,240,0.15)', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                {selectedArticle.category}
              </span>
              <button onClick={() => setSelectedArticle(null)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>{selectedArticle.title}</h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Published on {selectedArticle.date} &bull; {selectedArticle.readTime}
            </div>

            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
