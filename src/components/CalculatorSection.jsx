import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, ShieldCheck, RefreshCw } from 'lucide-react';

export default function CalculatorSection() {
  const [balance, setBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1.0);
  const [stopLossPips, setStopLossPips] = useState(25);
  const [pair, setPair] = useState('EURUSD');

  // Calculation formulas
  const riskAmount = (balance * (riskPercent / 100)).toFixed(2);
  const pipValuePerLot = pair === 'XAUUSD' ? 100 : pair === 'US30' ? 1 : 10;
  const positionSize = ((balance * (riskPercent / 100)) / (stopLossPips * pipValuePerLot)).toFixed(2);

  return (
    <section id="tools" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Calculator size={14} color="var(--accent-secondary)" />
            <span>SAAS FINTECH UTILITIES</span>
          </div>
          <h2>Institutional <span className="gradient-text">Position Size Calculator</span></h2>
          <p>
            Never blow an account again. Calculate exact lot sizes aligned with professional 1% risk management before opening any trade.
          </p>
        </div>

        <div className="glass-card-static" style={{ maxWidth: '960px', margin: '0 auto', padding: '40px', border: '1px solid var(--card-border-glow)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
            
            {/* Input Controls Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Account Capital ($ USD)
                </label>
                <input
                  type="number"
                  className="glass-input"
                  value={balance}
                  onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                  placeholder="e.g. 10000"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Risk Per Trade (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="glass-input"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 0)}
                  placeholder="e.g. 1.0"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Stop Loss Distance (Pips / Points)
                </label>
                <input
                  type="number"
                  className="glass-input"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 0)}
                  placeholder="e.g. 25"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Select Asset Pair
                </label>
                <select
                  className="glass-input"
                  value={pair}
                  onChange={(e) => setPair(e.target.value)}
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  <option value="EURUSD">EUR / USD (Forex Major)</option>
                  <option value="GBPUSD">GBP / USD (Forex Major)</option>
                  <option value="XAUUSD">XAU / USD (Gold Spot)</option>
                  <option value="US30">US30 (Dow Jones Index)</option>
                  <option value="BTCUSD">BTC / USD (Crypto)</option>
                </select>
              </div>
            </div>

            {/* Live Calculated Results Box */}
            <div
              style={{
                background: 'rgba(76, 201, 240, 0.06)',
                border: '1px solid var(--card-border-glow)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  RECOMMENDED POSITION SIZE
                </span>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent-secondary)', marginTop: '4px' }}>
                  {positionSize} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 600 }}>Lots</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Max Dollar Risk</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                    ${riskAmount}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Pip Value</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    ${(parseFloat(riskAmount) / (stopLossPips || 1)).toFixed(2)} / pip
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.825rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.03)', padding: '10px 14px', borderRadius: '10px', fontWeight: 600 }}>
                <ShieldCheck size={18} color="var(--accent-primary)" />
                <span>Prop Firm Drawdown Rule Compliant (&le; 1% Risk)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
