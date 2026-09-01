import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenEnroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 26, opacity: 0 });
  const navRef = useRef(null);
  const isManualClickRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Live Market', href: '#live-market' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  // Update sliding underline position based on active item
  const updateIndicator = () => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-href="${activeLink}"]`);
    if (activeEl) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      const indicatorWidth = 26;
      const left = elRect.left - navRect.left + (elRect.width - indicatorWidth) / 2;
      setIndicatorStyle({
        left,
        width: indicatorWidth,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeLink]);

  // Handle direct click with smooth lock so scroll does not jump back and forth
  const handleNavClick = (href) => {
    setActiveLink(href);
    isManualClickRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // If user recently clicked a nav button, ignore intermediate sections during scroll
      if (isManualClickRef.current) return;

      // Section scroll spy to update active link indicator
      const scrollPos = window.scrollY + 220;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveLink(navLinks[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '12px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 24px)',
        maxWidth: '1380px',
        zIndex: 9000,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div
        style={{
          background: theme === 'dark' ? 'rgba(11, 17, 32, 0.92)' : 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: theme === 'dark' ? '1.5px solid rgba(76, 201, 240, 0.35)' : '1.5px solid rgba(10, 132, 255, 0.3)',
          borderRadius: scrolled ? '22px' : '28px',
          padding: scrolled ? '12px 24px' : '14px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          boxShadow: theme === 'dark'
            ? '0 16px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(76, 201, 240, 0.15)'
            : '0 16px 45px rgba(10, 132, 255, 0.14), 0 4px 16px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand Logo - Larger, HD Circular Badge with Rich Glow */}
        <a href="#home" className="navbar-logo-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, gap: '12px' }}>
          <div className="logo-badge-wrapper">
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Aspire Forex Institute"
              className="navbar-logo"
              style={{
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.18))'
              }}
            />
            {/* Glowing ring behind logo */}
            <div className="logo-glow-ring" />
          </div>

          {/* Text beside badge (Shows on Mobile, Clean on Desktop) */}
          <div className="navbar-brand-text">
            <span className="brand-name-top">
              <span className="brand-aspire">Aspire</span>{' '}
              <span className="brand-forex">Forex</span>
            </span>
            <span className="brand-institute gradient-text">
              Institute
            </span>
          </div>
        </a>

        {/* Center Desktop Links with High-Contrast Active Pill Highlight */}
        <nav ref={navRef} className="desktop-nav" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 1, whiteSpace: 'nowrap' }}>
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                data-href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link-item ${isActive ? 'nav-active-pill' : ''}`}
                style={{
                  position: 'relative',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: isActive
                    ? (theme === 'dark' ? 'rgba(76, 201, 240, 0.16)' : 'rgba(10, 132, 255, 0.14)')
                    : 'transparent',
                  border: isActive
                    ? (theme === 'dark' ? '1.5px solid rgba(76, 201, 240, 0.45)' : '1.5px solid rgba(10, 132, 255, 0.45)')
                    : '1.5px solid transparent',
                  color: isActive
                    ? (theme === 'dark' ? '#4CC9F0' : '#0A84FF')
                    : 'var(--text-muted)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 800 : 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? (theme === 'dark' ? '0 0 14px rgba(76, 201, 240, 0.25)' : '0 2px 10px rgba(10, 132, 255, 0.2)')
                    : 'none',
                  transition: 'all 0.22s ease'
                }}
              >
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {/* Theme Toggle (Dark/Light) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: theme === 'dark' ? 'rgba(255, 209, 102, 0.12)' : 'rgba(10, 132, 255, 0.12)',
              border: theme === 'dark' ? '1.5px solid rgba(255, 209, 102, 0.45)' : '1.5px solid rgba(10, 132, 255, 0.45)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: theme === 'dark' ? '0 0 12px rgba(255, 209, 102, 0.25)' : '0 0 12px rgba(10, 132, 255, 0.2)',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#FFD166" /> : <Moon size={18} color="#0A84FF" />}
          </button>

          {/* Action Button */}
          <a
            href="https://wa.me/923134494554?text=Hello%20Aspire%20Forex%20Institute,%20I%20want%20to%20Join."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary enroll-btn-nav"
            style={{
              padding: '10px 20px',
              fontSize: '0.875rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Join Now <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Hamburger with Smooth 3-Line Animated Morph */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Menu"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: mobileMenuOpen 
                ? (theme === 'dark' ? 'rgba(76, 201, 240, 0.16)' : 'rgba(10, 132, 255, 0.14)')
                : 'var(--card-inner-bg)',
              border: mobileMenuOpen 
                ? (theme === 'dark' ? '1.5px solid rgba(76, 201, 240, 0.5)' : '1.5px solid rgba(10, 132, 255, 0.5)')
                : '1px solid var(--card-border)',
              color: mobileMenuOpen ? 'var(--accent-secondary)' : 'var(--text-primary)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: mobileMenuOpen ? '0 0 14px var(--accent-glow)' : 'none',
              transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ width: '20px', height: '15px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '2.5px',
                  borderRadius: '3px',
                  backgroundColor: 'currentColor',
                  transformOrigin: 'left center',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(1px, -2px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '2.5px',
                  borderRadius: '3px',
                  backgroundColor: 'currentColor',
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? 'translateX(10px) scaleX(0)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '2.5px',
                  borderRadius: '3px',
                  backgroundColor: 'currentColor',
                  transformOrigin: 'left center',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(1px, 2px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-Down Dropdown Menu with Spring Entrance & Exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: '10px',
              background: theme === 'dark' ? 'rgba(11, 17, 32, 0.96)' : 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1.5px solid var(--card-border-glow)',
              borderRadius: '22px',
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)'
            }}
          >
            {navLinks.map((link, idx) => {
              const isActive = activeLink === link.href;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035, duration: 0.25 }}
                  onClick={() => {
                    handleNavClick(link.href);
                    setMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '14px',
                    background: isActive ? 'var(--card-inner-bg)' : 'transparent',
                    border: isActive ? '1px solid var(--card-border)' : '1px solid transparent',
                    color: isActive ? 'var(--accent-secondary)' : 'var(--text-primary)',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '0.96rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background 0.2s ease, color 0.2s ease'
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4CC9F0', boxShadow: '0 0 10px #4CC9F0' }} />
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="https://wa.me/923134494554?text=Hello%20Aspire%20Forex%20Institute,%20I%20want%20to%20Join."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.035 + 0.05, duration: 0.25 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', marginTop: '10px', padding: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', borderRadius: '14px' }}
            >
              Join Now <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Breakpoint Styles */}
      <style>{`
        /* Nav link text hover transition */
        .nav-link-item {
          transition: color 0.25s ease !important;
        }
        .nav-link-item:hover {
          color: var(--accent-secondary) !important;
        }

        /* Badge logo wrapper */
        .logo-badge-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Glowing ring behind logo */
        .logo-glow-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,201,240,0.4) 0%, rgba(46,212,122,0.15) 50%, transparent 70%);
          pointer-events: none;
          animation: logoPulse 3s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes logoPulse {
          0%, 100% { opacity: 0.75; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.14); }
        }

        /* Slow rotate on hover */
        .navbar-logo-link:hover .navbar-logo {
          transform: rotate(6deg) scale(1.06);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 0 16px rgba(76,201,240,0.8)) brightness(1.12);
        }
        .navbar-logo {
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        /* Brand Name Text Styling */
        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.15;
          text-align: left;
        }

        .brand-name-top {
          font-size: 1.08rem;
          font-weight: 800;
          font-family: 'Space Grotesk', 'Outfit', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.1;
          display: flex;
          align-items: baseline;
        }

        .brand-aspire {
          color: var(--text-primary);
        }

        .brand-forex {
          color: #0A84FF;
          margin-left: 4px;
        }

        :root[data-theme="dark"] .brand-forex {
          color: #4CC9F0;
        }

        .brand-institute {
          font-size: 0.92rem;
          font-weight: 800;
          font-family: 'Space Grotesk', 'Outfit', sans-serif;
          letter-spacing: -0.01em;
          line-height: 1.15;
          display: block;
        }

        /* Tiny mobile ≤ 480px */
        @media (max-width: 480px) {
          .navbar-logo { height: 48px !important; width: 48px !important; }
          .logo-glow-ring { width: 58px; height: 58px; }
          .navbar-brand-text { display: flex !important; }
          .brand-name-top { font-size: 0.98rem !important; }
          .brand-institute { font-size: 0.85rem !important; }
          .enroll-btn-nav { display: none !important; }
        }

        /* Small mobile 481–767px */
        @media (min-width: 481px) and (max-width: 767px) {
          .navbar-logo { height: 54px !important; width: 54px !important; }
          .logo-glow-ring { width: 66px; height: 66px; }
          .navbar-brand-text { display: flex !important; }
          .brand-name-top { font-size: 1.08rem !important; }
          .brand-institute { font-size: 0.92rem !important; }
          .enroll-btn-nav { display: none !important; }
        }

        /* Tablet 768–1240px */
        @media (min-width: 768px) and (max-width: 1240px) {
          .navbar-logo { height: 62px !important; width: 62px !important; }
          .logo-glow-ring { width: 76px; height: 76px; }
          .navbar-brand-text { display: flex !important; }
          .enroll-btn-nav { display: inline-flex !important; }
        }

        /* Hide desktop nav on tablet/mobile */
        @media (max-width: 1240px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }

        /* Desktop 1241px+ (PC Version: Clean layout without mobile brand text) */
        @media (min-width: 1241px) {
          .navbar-brand-text { display: none !important; }
          .mobile-toggle { display: none !important; }
          .navbar-logo { height: 78px !important; width: 78px !important; }
          .logo-glow-ring { width: 96px; height: 96px; }
          .enroll-btn-nav { display: inline-flex !important; }
        }

        /* Large desktop 1380px+ */
        @media (min-width: 1380px) {
          .desktop-nav { gap: 22px !important; }
          .nav-link-item { font-size: 0.95rem !important; }
          .navbar-logo { height: 84px !important; width: 84px !important; }
          .logo-glow-ring { width: 104px; height: 104px; }
        }
      `}</style>
    </header>
  );
}
