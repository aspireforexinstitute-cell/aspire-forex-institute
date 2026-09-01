import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Maximize2, X, MessageSquare, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const feedbackImages = [
    {
      id: 1,
      src: '/testimonials/feedback-1.jpg',
      title: 'Zain Ali & Sami Ullah Feedback',
      subtitle: 'Trading Guidance & Accurate Signals Review',
      tag: 'Verified Trader Review',
      badgeColor: '#2ED47A'
    },
    {
      id: 2,
      src: '/testimonials/feedback-2.jpg',
      title: 'Usama Jutt, Hamza Awan & Farhan Khan Feedback',
      subtitle: 'Gold (XAUUSD) Entry Analysis & Risk Control',
      tag: 'Accurate Entry Setup',
      badgeColor: '#4CC9F0'
    },
    {
      id: 3,
      src: '/testimonials/feedback-3.jpg',
      title: 'Adeel Raza, Bilal Ahmed & Ali Raza Feedback',
      subtitle: 'Beginner Learning Experience & Daily Updates',
      tag: 'Structured Mentorship',
      badgeColor: '#FFD166'
    },
    {
      id: 4,
      src: '/testimonials/feedback-4.jpg',
      title: 'Usman Jutt, Zain Ali & Hussain Feedback',
      subtitle: '200 Pips Gold Gain & High Risk-to-Reward',
      tag: 'Profitable Trade Review',
      badgeColor: '#A855F7'
    }
  ];

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % feedbackImages.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + feedbackImages.length) % feedbackImages.length);
  };

  return (
    <section id="testimonials" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Star size={14} color="#FFD166" fill="#FFD166" />
            <span>WHAT OUR TRADERS SAY</span>
          </div>
          <h2>Real Experiences | Real Feedback | <span className="gradient-text">A Growing Community</span></h2>
          <p>
            See what members of the Aspire community have to say about their experience with our Forex guidance, market insights, and trading signals.
          </p>
        </div>

        {/* Single Unified Reviews Showcase Box */}
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-static testimonial-card-box"
            style={{
              padding: '28px',
              borderRadius: '24px',
              border: '1.5px solid var(--card-border-glow)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
          >
            {/* Top Header Bar inside the Single Box */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: '1 1 220px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(76, 201, 240, 0.15)', border: '1px solid rgba(76, 201, 240, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageSquare size={20} color="var(--accent-secondary)" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, fontFamily: 'Outfit, Space Grotesk, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {feedbackImages[activeIdx].title}
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {feedbackImages[activeIdx].subtitle}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 12px',
                    borderRadius: '100px',
                    background: 'rgba(46, 212, 122, 0.12)',
                    border: '1.5px solid rgba(46, 212, 122, 0.4)',
                    color: '#2ED47A',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}
                >
                  <ShieldCheck size={14} /> Verified
                </span>

                <button
                  onClick={() => setLightboxImg(feedbackImages[activeIdx].src)}
                  title="View Full Resolution"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 12px',
                    borderRadius: '10px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Maximize2 size={13} /> Full View
                </button>
              </div>
            </div>

            {/* Main Featured Feedback Image Graphic */}
            <div
              onClick={() => setLightboxImg(feedbackImages[activeIdx].src)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--card-inner-bg)',
                border: '1px solid var(--card-border)',
                cursor: 'pointer',
                aspectRatio: '1 / 1',
                maxHeight: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={feedbackImages[activeIdx].src}
                  alt={feedbackImages[activeIdx].title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </AnimatePresence>

              {/* Hover Overlay Prompt */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(5, 8, 22, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  pointerEvents: 'none'
                }}
              >
                <Maximize2 size={12} /> Tap to Zoom
              </div>
            </div>

            {/* Integrated Navigation & 4 Interactive Thumbnails INSIDE the Same Single Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '14px',
                borderTop: '1px solid var(--card-border)'
              }}
            >
              {/* Prev / Next Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={prevSlide}
                  aria-label="Previous Review"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next Review"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--card-inner-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* 4 Mini Thumbnails inside the Single Box */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {feedbackImages.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: activeIdx === idx ? '2px solid var(--accent-secondary)' : '1px solid var(--card-border)',
                      boxShadow: activeIdx === idx ? '0 0 10px var(--accent-glow)' : 'none',
                      opacity: activeIdx === idx ? 1 : 0.6,
                      transform: activeIdx === idx ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </div>

              {/* Page Counter */}
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                {activeIdx + 1} / {feedbackImages.length}
              </span>
            </div>

          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card-box {
            padding: 16px 12px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>

      {/* Full-screen Lightbox Modal for HD Inspection */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(4, 7, 20, 0.92)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '900px',
                maxHeight: '90vh',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <button
                onClick={() => setLightboxImg(null)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  transition: 'transform 0.2s ease'
                }}
              >
                <X size={20} />
              </button>

              <img
                src={lightboxImg}
                alt="Client Feedback High Resolution"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
