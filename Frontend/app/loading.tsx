export default function Loading() {
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
      }}
    >
      {/* Outer amber ring */}
      <div style={{ position: 'relative', width: '64px', height: '64px' }}>
        {/* Dim track ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid var(--border-2)',
          }}
        />
        {/* Spinning amber arc */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'var(--amber)',
            borderRightColor: 'var(--amber-lt)',
            animation: 'spin-ring 0.9s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite',
          }}
        />
        {/* Inner sage dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'var(--amber)',
            animation: 'pulse-glow 1.4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Design My Plot
        </p>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--text-dim)',
            margin: '4px 0 0',
            fontWeight: 400,
          }}
        >
          Loading…
        </p>
      </div>
    </div>
  );
}
