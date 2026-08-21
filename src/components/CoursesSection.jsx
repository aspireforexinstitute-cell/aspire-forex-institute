import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, Check, ArrowRight, Star, Shield } from 'lucide-react';

export default function CoursesSection({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'beginner-foundation',
      category: 'beginner',
      title: 'Beginner Forex Foundation',
      badge: 'Starter Choice',
      level: 'Beginner',
      duration: '4 Weeks',
      rating: '4.9',
      price: '$199',
      popular: false,
      desc: 'Master currency pairs, pips, candlestick patterns, market structure, and basic risk management fundamentals.',
      features: [
        'Introduction to Forex Markets & Brokers',
        'Candlestick & Chart Pattern Analysis',
        'Basic Risk Management & Lot Calculations',
        'Demo Trading Setup & Trade Execution',
        'Certificate of Completion & Support Group'
      ]
    },
    {
      id: 'smc-mastery',
      category: 'smc',
      title: 'Smart Money Concepts (SMC)',
      badge: 'Most Popular',
      level: 'Advanced',
      duration: '6 Weeks',
      rating: '5.0',
      price: '$499',
      popular: true,
      desc: 'Uncover central bank liquidity pools, Order Blocks (OB), Fair Value Gaps (FVG), and Inducement sweeps.',
      features: [
        'Bank Liquidity Pools & Inducement Sweeps',
        'Order Block Refinement & Mitigation',
        'Fair Value Gap (FVG) & Imbalance Entries',
        'Prop Firm Strategy Optimization',
        'Live Trade Breakdowns & Signals Access'
      ]
    },
    {
      id: 'ict-masterclass',
      category: 'smc',
      title: 'Inner Circle Trader (ICT) Masterclass',
      badge: 'Institutional Grade',
      level: 'Intermediate - Advanced',
      duration: '6 Weeks',
      rating: '4.95',
      price: '$549',
      popular: false,
      desc: 'Master Silver Bullet strategies, Judas swings, Asian Session liquidity sweeps, and Killzone timing.',
      features: [
        'London & NY Session Killzone Execution',
        'Power of 3 (AMD: Accumulation, Manipulation, Distribution)',
        'Optimal Trade Entry (OTE) Fibonacci Ratios',
        'Daily Bias & Weekly Expansion Frameworks',
        '1-on-1 Mentorship Review Session'
      ]
    },
    {
      id: 'advanced-institutional',
      category: 'advanced',
      title: 'Advanced Institutional Trading',
      badge: 'Complete Bootcamp',
      level: 'Professional',
      duration: '8 Weeks',
      rating: '5.0',
      price: '$799',
      popular: false,
      desc: 'The ultimate mentorship program covering macroeconomics, order flow, portfolio hedging, and scale strategies.',
      features: [
        'Macroeconomic Analysis & Central Bank Rates',
        'Institutional Order Flow & Footprint Charts',
        'Advanced Risk-to-Reward (1:5+ Setups)',
        '$100K+ Prop Firm Challenge Preparation',
        'Lifetime Desk Access & Direct Mentor Hotline'
      ]
    },
    {
      id: 'scalping-mastery',
      category: 'scalping',
      title: 'High-Frequency Scalping Mastery',
      badge: 'Fast Results',
      level: 'Pro Scalper',
      duration: '4 Weeks',
      rating: '4.88',
      price: '$399',
      popular: false,
      desc: 'Capitalize on 1-minute and 5-minute charts using momentum, spread optimization, and quick liquidity grabs.',
      features: [
        '1m / 5m Timeframe Liquidity Scalping',
        'Spreads & Slippage Protection Formulas',
        'US30 & NASDAQ High-Volatility Playbooks',
        'Psychology of Fast Trade Execution',
        'Daily Scalp Signals Room Access'
      ]
    },
    {
      id: 'swing-pro',
      category: 'scalping',
      title: 'Swing Trading Strategy Pro',
      badge: 'Part-time Friendly',
      level: 'All Levels',
      duration: '6 Weeks',
      rating: '4.92',
      price: '$449',
      popular: false,
      desc: 'Trade multi-day swings with minimal chart screen time. Perfect for busy professionals and students.',
      features: [
        'Higher Timeframe (H4 / Daily) Trend Mapping',
        'Positional Entry Filters & Trailing Stops',
        'Gold (XAUUSD) & Major Forex Swings',
        'Automated Alert Setups & Telegram Feeds',
        'Lifetime Trade Journal Coaching'
      ]
    }
  ];

  const filteredCourses = filter === 'all' ? courses : courses.filter((c) => c.category === filter);

  return (
    <section id="courses" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span>CURATED LEARNING PATHWAYS</span>
          </div>
          <h2>Master the Art of <span className="gradient-text">Profitable Trading</span></h2>
          <p>
            Choose from beginner-friendly foundations to high-tier institutional SMC and prop-firm scaling programs.
          </p>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px', flexWrap: 'wrap', position: 'relative' }}>
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'beginner', label: 'Beginner' },
              { id: 'smc', label: 'SMC & ICT' },
              { id: 'advanced', label: 'Institutional' },
              { id: 'scalping', label: 'Scalping & Swing' }
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid var(--card-border)',
                    background: isActive ? 'transparent' : 'rgba(255,255,255,0.03)',
                    color: isActive ? '#050816' : 'var(--text-primary)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.25s ease, border-color 0.25s ease'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCourseTab"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'var(--accent-gradient)',
                        borderRadius: '100px',
                        zIndex: -1,
                        boxShadow: '0 4px 15px var(--accent-glow)'
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: course.popular ? '1px solid var(--accent-secondary)' : '1px solid var(--card-border)',
                boxShadow: course.popular ? '0 20px 40px -10px var(--accent-glow)' : 'var(--shadow-glass)'
              }}
            >
              <div>
                {/* Top Badge & Rating */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '100px',
                      background: course.popular ? 'var(--accent-secondary)' : 'rgba(76,201,240,0.1)',
                      color: course.popular ? '#050816' : 'var(--accent-secondary)'
                    }}
                  >
                    {course.badge}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 700, color: '#FFD166' }}>
                    <Star size={16} fill="#FFD166" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  {course.title}
                </h3>

                {/* Level & Duration Pills */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BarChart size={14} color="var(--accent-secondary)" /> {course.level}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} color="var(--accent-primary)" /> {course.duration}
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.72, marginBottom: '24px' }}>
                  {course.desc}
                </p>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', borderTop: '1px solid var(--card-border)', paddingTop: '20px' }}>
                  {course.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Enroll CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--card-border)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Investment</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {course.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                >
                  Enroll Now <ArrowRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
