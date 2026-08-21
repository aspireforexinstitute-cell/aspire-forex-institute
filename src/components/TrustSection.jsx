import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, DollarSign, Clock } from 'lucide-react';

function AnimatedCount({ target, prefix = '', suffix = '', formatComma = false, isVisible, isZero = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    if (isZero) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // High-precision easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target, isZero]);

  const formattedNumber = formatComma ? count.toLocaleString() : count;

  return (
    <span>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Clock,
      target: 5,
      prefix: '',
      suffix: '+ Years',
      label: 'Industry Experience',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      glow: 'rgba(56, 189, 248, 0.4)'
    },
    {
      icon: Users,
      target: 10000,
      prefix: '',
      suffix: '+',
      formatComma: true,
      label: 'Enrolled Students',
      gradient: 'linear-gradient(135deg, #059669 0%, #34D399 100%)',
      glow: 'rgba(52, 211, 153, 0.4)'
    },
    {
      icon: Trophy,
      target: 95,
      prefix: '',
      suffix: '%',
      label: 'Proven Success Rate',
      gradient: 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
      glow: 'rgba(251, 191, 36, 0.4)'
    },
    {
      icon: DollarSign,
      target: 0,
      prefix: '$',
      suffix: '',
      isZero: true,
      label: 'Joining Fee',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
      glow: 'rgba(45, 212, 191, 0.4)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          // Trigger immediate clean re-animation
          setTimeout(() => setIsVisible(true), 60);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trust"
      ref={sectionRef}
      style={{ padding: '10px 0 50px 0', position: 'relative', zIndex: 2 }}
    >
      <div className="container-custom">
        {/* Trust Banner Bar */}
        <div
          className="glass-card-static"
          style={{
            padding: '36px 36px',
            border: '1px solid var(--card-border-glow)',
            borderRadius: '24px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span
              style={{
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent-secondary)',
                fontFamily: 'Outfit, Space Grotesk, sans-serif'
              }}
            >
              TRUSTED BY INSTITUTIONAL TRADERS WORLDWIDE
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '22px'
            }}
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '22px 20px',
                    borderRadius: '16px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                    cursor: 'default',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: stat.gradient,
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                      boxShadow: `0 8px 20px -3px ${stat.glow}, inset 0 2px 4px rgba(255, 255, 255, 0.35)`
                    }}
                  >
                    <Icon size={26} strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        fontSize: 'clamp(1.55rem, 2.2vw, 1.85rem)',
                        fontWeight: 800,
                        fontFamily: 'Outfit, Space Grotesk, sans-serif',
                        color: 'var(--text-primary)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        marginBottom: '4px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <AnimatedCount
                        target={stat.target}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        formatComma={stat.formatComma}
                        isVisible={isVisible}
                        isZero={stat.isZero}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        letterSpacing: '0.01em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
