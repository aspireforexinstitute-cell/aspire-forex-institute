import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/923134494554?text=Hello%20Aspire%20Forex%20Institute,%20I%20want%20to%20join.";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9950,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Pill Badge: Live Chat With Us! (Clear & Visible in Dark and Light mode) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live Chat With Us on WhatsApp"
        className="wa-live-badge"
        style={{
          padding: '10px 18px',
          fontSize: '0.88rem',
          fontWeight: 700,
          borderRadius: '999px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <span className="wa-live-dot" />
        <span className="wa-live-text">Live Chat With Us!</span>
      </a>

      {/* Floating WhatsApp Action Button with Exact Official Logo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live Chat With Us on WhatsApp"
        className="whatsapp-pulse"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)'
        }}
      >
        {/* Exact Official WhatsApp SVG Icon Matching Screenshot */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C16.58 3.68 20.27 7.37 20.27 11.91C20.27 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.46 13.46 14.3 13.71C14.13 13.96 13.65 14.52 13.5 14.69C13.36 14.86 13.21 14.88 12.96 14.75C12.71 14.62 11.91 14.36 10.96 13.51C10.22 12.85 9.72 12.04 9.57 11.79C9.43 11.54 9.56 11.4 9.68 11.28C9.79 11.17 9.93 10.99 10.05 10.84C10.18 10.7 10.22 10.59 10.3 10.42C10.38 10.25 10.34 10.11 10.28 9.98C10.22 9.85 9.72 8.63 9.51 8.13C9.31 7.64 9.1 7.71 8.95 7.7C8.8 7.69 8.64 7.69 8.47 7.69C8.3 7.69 8.03 7.75 7.8 8C7.57 8.25 6.93 8.85 6.93 10.07C6.93 11.29 7.82 12.47 7.94 12.63C8.07 12.8 9.69 15.3 12.17 16.37C12.76 16.63 13.22 16.78 13.58 16.9C14.17 17.08 14.71 17.06 15.14 16.99C15.62 16.92 16.62 16.39 16.83 15.8C17.04 15.22 17.04 14.72 16.98 14.62C16.91 14.52 16.81 14.51 16.56 14.39Z"
            fill="#FFFFFF"
          />
        </svg>
      </a>

      {/* Embedded CSS for Dark & Light Theme Smooth Switching */}
      <style>{`
        .wa-live-badge {
          background: #0A0F24;
          color: #FFFFFF;
          border: 1px solid rgba(46, 212, 122, 0.45);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(46, 212, 122, 0.2);
          transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.3s ease;
        }
        .wa-live-badge:hover {
          transform: translateY(-2px);
          border-color: #25D366;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6), 0 0 20px rgba(37, 211, 102, 0.35);
        }
        .wa-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 0 8px #25D366;
          display: inline-block;
          animation: waPulseDot 2s infinite ease-in-out;
        }

        /* Light Theme Smooth Adaptation */
        :root[data-theme="light"] .wa-live-badge {
          background: #FFFFFF !important;
          color: #0F172A !important;
          border: 1px solid rgba(37, 211, 102, 0.55) !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12), 0 0 14px rgba(37, 211, 102, 0.25) !important;
        }
        :root[data-theme="light"] .wa-live-badge:hover {
          background: #F8FAFC !important;
          border-color: #128C7E !important;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.18), 0 0 18px rgba(37, 211, 102, 0.35) !important;
        }

        @keyframes waPulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        @media (max-width: 640px) {
          .wa-live-text {
            display: none;
          }
          .wa-live-badge {
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}
