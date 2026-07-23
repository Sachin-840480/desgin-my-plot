'use client';

import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Navbar ── */}
      <header
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '0 32px',
        }}
      >
        <nav
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
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

          {/* Auth */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  id="nav-dashboard"
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                  }
                >
                  Dashboard
                </Link>
                <UserButton />
              </>
            ) : (
              <SignInButton mode="redirect">
                <button
                  id="nav-signin"
                  style={{
                    padding: '7px 18px',
                    borderRadius: '7px',
                    border: '1px solid var(--border-2)',
                    background: 'transparent',
                    color: 'var(--text)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--amber)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--amber)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-2)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)';
                  }}
                >
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            color: 'var(--text)',
            margin: 0,
            maxWidth: '640px',
          }}
        >
          Design your plot,{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--amber) 20%, var(--sienna) 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            with intention.
          </span>
        </h1>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: '440px',
            margin: 0,
          }}
        >
          Visualise, plan, and bring your land to life — built for people who care about their space.
        </p>

        {isSignedIn ? (
          <Link
            href="/dashboard"
            id="hero-goto-dashboard"
            style={{
              marginTop: '8px',
              padding: '12px 28px',
              borderRadius: '8px',
              background: 'var(--amber)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            Go to Dashboard →
          </Link>
        ) : (
          <SignInButton mode="redirect">
            <button
              id="hero-cta"
              style={{
                marginTop: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                background: 'var(--amber)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = '1')
              }
            >
              Start designing →
            </button>
          </SignInButton>
        )}
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '20px 32px',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Design My Plot
        </p>
      </footer>
    </div>
  );
}
