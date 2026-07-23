'use client';

import Link from 'next/link';
import { useUser, SignOutButton, UserButton } from '@clerk/nextjs';
import Loading from '@/app/loading';

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  const firstName = user?.firstName || user?.username || 'there';
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Top bar ── */}
      <header style={{ borderBottom: '1px solid var(--border)', padding: '0 32px' }}>
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            id="dash-logo"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--text)',
                letterSpacing: '-0.2px',
              }}
            >
              Design<span style={{ color: 'var(--amber)' }}>My</span>Plot
            </span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <UserButton />
            <SignOutButton redirectUrl="/">
              <button
                id="dash-signout"
                style={{
                  padding: '7px 16px',
                  borderRadius: '7px',
                  border: '1px solid var(--border-2)',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--sienna)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--sienna)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-2)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
                }}
              >
                Sign out
              </button>
            </SignOutButton>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main
        style={{
          flex: 1,
          maxWidth: '960px',
          margin: '0 auto',
          width: '100%',
          padding: '48px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Welcome */}
        <div>
          <p
            style={{
              margin: '0 0 4px',
              fontSize: '13px',
              color: 'var(--sage)',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            {greeting}
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.4px',
            }}
          >
            Welcome back,{' '}
            <span style={{ color: 'var(--amber)' }}>{firstName}</span>
          </h1>
          <p
            style={{
              margin: '8px 0 0',
              fontSize: '14px',
              color: 'var(--text-muted)',
            }}
          >
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />

        {/* Quick actions */}
        <div>
          <p
            style={{
              margin: '0 0 14px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
            }}
          >
            Quick actions
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { id: 'qa-new-plot', label: '+ New plot', primary: true },
              { id: 'qa-my-plots', label: 'My plots', primary: false },
              { id: 'qa-exports', label: 'Exports', primary: false },
            ].map(({ id, label, primary }) => (
              <button
                key={id}
                id={id}
                style={{
                  padding: '9px 20px',
                  borderRadius: '7px',
                  border: `1px solid ${primary ? 'var(--amber)' : 'var(--border-2)'}`,
                  background: primary ? 'var(--amber)' : 'transparent',
                  color: primary ? '#fff' : 'var(--text-muted)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.opacity = '0.8')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.opacity = '1')
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Recent activity placeholder */}
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid var(--border)',
            padding: '24px',
          }}
        >
          <p
            style={{
              margin: '0 0 14px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
            }}
          >
            Recent activity
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>
            No activity yet. Create your first plot to get started.
          </p>
        </div>
      </main>
    </div>
  );
}
