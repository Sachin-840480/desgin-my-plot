import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '96px',
          fontWeight: 800,
          letterSpacing: '-4px',
          color: 'var(--border-2)',
          margin: 0,
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: '22px',
          fontWeight: 600,
          color: 'var(--text)',
          margin: 0,
        }}
      >
        Page not found
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, maxWidth: '300px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        id="not-found-home-link"
        style={{
          marginTop: '8px',
          padding: '10px 24px',
          borderRadius: '8px',
          border: '1px solid var(--border-2)',
          color: 'var(--text-muted)',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          display: 'inline-block',
        }}
      >
        ← Return Home
      </Link>
    </div>
  );
}
