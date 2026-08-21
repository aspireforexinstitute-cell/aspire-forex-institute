import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import LearningProcess from './components/LearningProcess';
import LiveMarketSection from './components/LiveMarketSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnrollModal from './components/EnrollModal';
import DemoModal from './components/DemoModal';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import ScrollRevealHandler from './components/ScrollRevealHandler';

export default function App() {
  // Theme state persisted in localStorage (default to 'dark')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aspire_theme') || 'dark';
  });

  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aspire_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenEnroll = (course = null) => {
    setSelectedCourse(course);
    setEnrollModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Background Animated Canvas & Radial Mesh */}
      <div className="bg-mesh-canvas" />

      {/* Interactive Pointer Glow Spotlight */}
      <MouseGlow />

      {/* Top Scroll Depth Progress Line */}
      <ScrollProgress />

      {/* Scroll Reveal Observer */}
      <ScrollRevealHandler />

      {/* Glass Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenEnroll={() => handleOpenEnroll()} />

      {/* Page Sections Flow: Home -> About -> Process -> Live Market -> Reviews -> Why Us -> Contact */}
      <main id="main-content">
        <Hero onOpenEnroll={() => handleOpenEnroll()} onOpenDemo={() => setDemoModalOpen(true)} />
        <TrustSection />
        <AboutSection />
        <LearningProcess />
        <LiveMarketSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <FAQSection />
        <CTASection onOpenEnroll={() => handleOpenEnroll()} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Popups / Modals */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        selectedCourse={selectedCourse}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
