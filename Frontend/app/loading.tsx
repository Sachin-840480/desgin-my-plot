'use client';

import { useEffect, useState } from 'react';

/* Shows for at least 1.2 s so the spinner is never a flash */
export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '20px',
        backgroundColor: 'var(--bg)',
        /* fade out smoothly once the 1.2 s elapses */
        animation: 'fade-out 0.25s ease 1.2s both',
      }}
    >
      {/* Track ring */}
      <div style={{ position: 'relative', width: '56px', height: '56px' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2.5px solid var(--border-2)',
          }}
        />
        {/* Spinning amber arc — 1.2 s cycle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2.5px solid transparent',
            borderTopColor: 'var(--amber)',
            borderRightColor: 'var(--amber-lt)',
            animation: 'spin-ring 1.2s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite',
          }}
        />
        {/* Centre dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--amber)',
            animation: 'pulse-glow 1.4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Label */}
      <p
        style={{
          margin: 0,
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        Loading…
      </p>
    </div>
  );
}
