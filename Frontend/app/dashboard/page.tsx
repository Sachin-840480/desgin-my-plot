'use client';

import Link from 'next/link';
import { useUser, SignOutButton, UserButton } from '@clerk/nextjs';
import Loading from '@/app/loading';

/* ──────────────────────────────────────────────────────────
   Dashboard — task-focused, not marketing
   Layout rationale:
   - User goal: pick up where they left off / start something new
   - First notice: their plots (the actual work objects)
   - Primary action: New plot (only when no plots exist — empty state)
   - No greeting cards, no KPI tiles, no "recent activity" sections
   - Header: logo + user — compact, not dominant
   - Empty state: honest, focused on next step
────────────────────────────────────────────────────────── */

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  const firstName = user?.firstName || user?.username || 'there';

  /* Placeholder — no plots yet */
  const plots: null[] = [];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── Header ─────────────────────────────────────── */}
      <header
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '0 40px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'var(--bg)',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/" id="dash-logo" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: '15px',
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
                  padding: '5px 14px',
                  borderRadius: '6px',
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

      {/* ── Main ───────────────────────────────────────── */}
      <main
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '40px 40px 80px',
        }}
      >
        {/* Page title row — left-aligned, action on right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--text)',
                letterSpacing: '-0.4px',
              }}
            >
              My plots
            </h1>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: '13px',
                color: 'var(--text-muted)',
              }}
            >
              {firstName}&apos;s workspace
            </p>
          </div>

          <button
            id="qa-new-plot"
            style={{
              padding: '9px 20px',
              borderRadius: '7px',
              background: 'var(--amber)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
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
            + New plot
          </button>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '40px' }} />

        {/* Plots grid / empty state */}
        {plots.length === 0 ? (
          <EmptyState />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Plot cards would go here */}
          </div>
        )}
      </main>
    </div>
  );
}

/* ── Empty state — product-specific, focused ─────────────── */
function EmptyState() {
  return (
    <div
      style={{
        padding: '64px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        maxWidth: '480px',
      }}
    >
      {/* Small plot icon — SVG, not an illustration */}
      <EmptyPlotIcon />

      <h2
        style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text)',
          letterSpacing: '-0.3px',
        }}
      >
        No plots yet
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: '14px',
          lineHeight: 1.65,
          color: 'var(--text-muted)',
        }}
      >
        Create your first plot to start laying out your space — add
        boundaries, place structures, and set dimensions.
      </p>

      <button
        id="empty-new-plot"
        style={{
          marginTop: '8px',
          padding: '10px 22px',
          borderRadius: '7px',
          background: 'var(--amber)',
          color: '#fff',
          fontWeight: 600,
          fontSize: '14px',
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
        Create plot
      </button>
    </div>
  );
}

function EmptyPlotIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="50" height="50" rx="6" stroke="#2C2720" strokeWidth="1.5" />
      {/* Plot outline */}
      <polygon
        points="10,10 40,8 43,38 8,40"
        fill="none"
        stroke="#C4873F"
        strokeWidth="1.25"
      />
      {/* Corner dots */}
      {[[10,10],[40,8],[43,38],[8,40]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#C4873F" />
      ))}
      {/* Simple structure inside */}
      <rect x="17" y="17" width="18" height="14" fill="none" stroke="#7EA88B" strokeWidth="1" />
      {/* Dimension tick */}
      <line x1="9" y1="10" x2="9" y2="40" stroke="#3A3229" strokeWidth="0.75" />
    </svg>
  );
}
