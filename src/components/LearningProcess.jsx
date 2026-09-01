import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, GraduationCap, LineChart, Radio, Compass, Award, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function LearningProcess() {
  const steps = [
    {
      number: '01',
      title: 'Join Aspire Institute',
      desc: 'Step into a structured environment where you can access essential Forex guidance, market insights, trading signals, and regular updates designed to keep you connected with the market.',
      icon: UserPlus,
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      glow: 'rgba(56, 189, 248, 0.45)'
    },
    {
      number: '02',
      title: 'Build Your Forex Foundation',
      desc: 'Learn the core concepts of Forex, including market basics, terminology, price movement, and the fundamentals every trader should understand before navigating the markets.',
      icon: GraduationCap,
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
      glow: 'rgba(52, 211, 153, 0.45)'
    },
    {
      number: '03',
      title: 'Understand the Market',
      desc: 'Develop a clearer understanding of market structure, price action, key levels, and the factors that influence potential market opportunities.',
      icon: LineChart,
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
      glow: 'rgba(251, 191, 36, 0.45)'
    },
    {
      number: '04',
      title: 'Follow Signals & Market Insights',
      desc: 'Stay updated with our trading signals, technical analysis, and market-related insights to understand how potential trading opportunities are identified and analyzed.',
      icon: Radio,
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      glow: 'rgba(167, 139, 250, 0.45)'
    },
    {
      number: '05',
      title: 'Trade with Greater Clarity',
      desc: 'Put your knowledge into practice by developing a more disciplined and informed approach to the market, while continuously learning and improving your trading understanding.',
      icon: Compass,
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #DB2777 0%, #FB7185 100%)',
      glow: 'rgba(251, 113, 133, 0.45)'
    }
  ];

  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span>THE 5-STEP ROADMAP</span>
          </div>
          <h2>Your Journey to <span className="gradient-text">Smarter Forex Trading</span></h2>
          <p>
            From understanding the basics to staying connected with the market — Aspire guides you through every step of your Forex journey.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards with Individual Staggered Scroll Motion */}
        <div className="process-grid" style={{ position: 'relative' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card process-step-card"
                style={{
                  padding: '36px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  borderTop: `3px solid ${step.color}`
                }}
              >
                {/* Step Circle Badge - High Contrast 3D Gradient */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: step.gradient,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '18px',
                    boxShadow: `0 10px 24px -3px ${step.glow}, inset 0 2px 4px rgba(255, 255, 255, 0.35)`,
                    flexShrink: 0
                  }}
                >
                  <Icon size={26} strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }} />
                </div>

                {/* Step Number */}
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    color: step.color,
                    marginBottom: '8px',
                    fontFamily: 'Outfit, Space Grotesk, sans-serif'
                  }}
                >
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3 style={{ fontSize: '1.22rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)', fontFamily: 'Outfit, Space Grotesk, sans-serif' }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {step.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-step-card {
            padding: 24px 18px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
