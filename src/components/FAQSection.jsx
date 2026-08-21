import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  const faqs = [
    {
      q: 'What does Aspire Forex Institute provide?',
      a: 'Aspire provides basic Forex guidance, trading signals, market insights, and regular market-related updates to help traders better understand and follow the Forex market.'
    },
    {
      q: 'Do you teach Forex from the basics?',
      a: 'Yes. We provide simple and practical guidance covering the essential Forex concepts and fundamentals needed to understand the market.'
    },
    {
      q: 'Do you provide Forex trading signals?',
      a: 'Yes. Our members receive Forex trading signals based on our market analysis and identified potential opportunities.'
    },
    {
      q: 'Do I need prior Forex experience to join?',
      a: 'No. Beginners can join and start by learning the basic concepts of Forex before following our market insights and signals.'
    },
    {
      q: 'Do you provide guaranteed profits?',
      a: 'No. Forex trading involves risk, and no signal or trading opportunity can guarantee profits. Our focus is on providing useful market information, guidance, and insights.'
    },
    {
      q: 'How do I get started with Aspire?',
      a: 'Simply join Aspire Forex Institute and get access to our Forex guidance, signals, market insights, and updates.'
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="var(--accent-secondary)" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2>Got Questions? <span className="gradient-text">We Have Answers</span></h2>
          <p>
            Everything You Need to Know Before Getting Started
          </p>
        </div>

        {/* Accordion Container with Staggered Scroll Motion & Smooth Expand Physics */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass-card-static"
                style={{
                  borderRadius: '18px',
                  border: isOpen ? '1.5px solid var(--accent-secondary)' : '1px solid var(--card-border)',
                  boxShadow: isOpen ? '0 10px 25px -4px var(--accent-glow)' : 'var(--shadow-glass)',
                  overflow: 'hidden',
                  background: 'var(--card-bg)',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: 'clamp(18px, 2.5vw, 24px) clamp(18px, 3vw, 30px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: isOpen ? 'var(--card-inner-bg)' : 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px',
                    fontFamily: 'Outfit, Space Grotesk, sans-serif',
                    transition: 'background 0.25s ease'
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--accent-secondary)' : 'var(--text-primary)' }}>
                    {faq.q}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      color: isOpen ? 'var(--accent-secondary)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 clamp(18px, 3vw, 30px) clamp(18px, 2.5vw, 26px) clamp(18px, 3vw, 30px)',
                          color: 'var(--text-secondary)',
                          fontSize: 'clamp(0.96rem, 1.2vw, 1.05rem)',
                          lineHeight: 1.75,
                          fontWeight: 500,
                          borderTop: '1px solid var(--card-border)',
                          paddingTop: '18px'
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
