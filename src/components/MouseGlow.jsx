import React, { useEffect, useState, useRef } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const lastMoveTimeRef = useRef(0);
  const idleTimeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = Date.now();

      setPos({ x, y });
      setIsMoving(true);

      // Clear existing idle timer
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }

      // If mouse stops moving for 130ms, smoothly fade out
      idleTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 130);

      // Balanced trail particle generation (~45ms)
      if (now - lastMoveTimeRef.current > 45) {
        lastMoveTimeRef.current = now;

        const newParticle = {
          id: `${now}_${Math.random().toString(36).substring(2, 6)}`,
          x,
          y,
          size: Math.random() * 6 + 5, // 5px - 11px glowing soft dots
          color: Math.random() > 0.5 ? 'rgba(76, 201, 240, 0.3)' : 'rgba(46, 212, 122, 0.25)'
        };

        setTrail((prev) => [...prev.slice(-10), newParticle]);

        // Clean up dot after animation duration (380ms)
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 380);
      }
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Balanced, Visible Smooth Cursor Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: isMoving ? 0.9 : 0,
          transition: 'opacity 0.25s ease-out',
          background: `
            radial-gradient(360px circle at ${pos.x}px ${pos.y}px, rgba(76, 201, 240, 0.11), transparent 75%),
            radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(46, 212, 122, 0.08), transparent 70%)
          `
        }}
      />

      {/* Trailing Visible Soft Light Motion Dots */}
      {trail.map((pt) => (
        <div
          key={pt.id}
          style={{
            position: 'absolute',
            left: `${pt.x}px`,
            top: `${pt.y}px`,
            width: `${pt.size}px`,
            height: `${pt.size}px`,
            borderRadius: '50%',
            backgroundColor: pt.color,
            boxShadow: `0 0 12px ${pt.color}`,
            filter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            animation: 'mouseTrailFade 0.38s ease-out forwards'
          }}
        />
      ))}

      {/* Inline CSS Keyframe for Trail Dissolve */}
      <style>{`
        @keyframes mouseTrailFade {
          0% {
            opacity: 0.75;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.25);
          }
        }
      `}</style>
    </div>
  );
}
