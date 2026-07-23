'use client';

import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

/* ──────────────────────────────────────────────────────────
   DesignMyPlot Landing Page
   Layout rationale:
   - User goal: understand what DesignMyPlot is and start using it
   - First notice: product name + what it does (left-aligned headline)
   - Second notice: visual context — a simple plot diagram (right side)
   - Primary action: Start designing / Go to Dashboard
   - Supporting: what the product helps with (short, honest copy)
   - Below fold: brief product description section
   - No fake stats, no testimonials, no gradient blobs
   - Asymmetric: copy left, product visual right
────────────────────────────────────────────────────────── */

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* ── Navigation ─────────────────────────────────── */}
      <header
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '0 40px',
        }}
      >
        <nav
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
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
                    padding: '6px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-2)',
                    background: 'transparent',
                    color: 'var(--text)',
                    fontSize: '13px',
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

      {/* ── Hero — asymmetric two-column ─────────────────── */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '88px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div>
          <p
            style={{
              margin: '0 0 20px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
            }}
          >
            Plot design tool
          </p>

          <h1
            style={{
              margin: '0 0 20px',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.12,
              color: 'var(--text)',
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
              margin: '0 0 32px',
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              maxWidth: '400px',
            }}
          >
            Lay out boundaries, place structures, set dimensions. A drafting
            tool built for people planning their own land.
          </p>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {isSignedIn ? (
              <Link
                href="/dashboard"
                id="hero-goto-dashboard"
                style={{
                  padding: '11px 24px',
                  borderRadius: '7px',
                  background: 'var(--amber)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')
                }
              >
                Open dashboard →
              </Link>
            ) : (
              <SignInButton mode="redirect">
                <button
                  id="hero-cta"
                  style={{
                    padding: '11px 24px',
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
                  Start designing →
                </button>
              </SignInButton>
            )}

            <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
              Free to start
            </span>
          </div>
        </div>

        {/* Right: plot visualization — product-specific SVG */}
        <div
          aria-hidden="true"
          style={{
            position: 'relative',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            backgroundColor: 'var(--surface)',
            aspectRatio: '4/3',
          }}
        >
          <PlotPreviewSVG />
        </div>
      </section>

      {/* ── Divider visible, invites scroll ──────────────── */}
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* ── What you can do — product-specific, honest ───── */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '64px 40px 80px',
        }}
      >
        <h2
          style={{
            margin: '0 0 40px',
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.3px',
          }}
        >
          What you can do
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}
        >
          {[
            {
              id: 'feat-boundaries',
              label: 'Draw plot boundaries',
              desc: 'Define the outer shape of your land precisely.',
            },
            {
              id: 'feat-structures',
              label: 'Place structures',
              desc: 'Add buildings, walls, gates, and pathways.',
            },
            {
              id: 'feat-dimensions',
              label: 'Set dimensions',
              desc: 'Label distances and areas with real measurements.',
            },
            {
              id: 'feat-export',
              label: 'Export your plan',
              desc: 'Download a clean layout to share or print.',
            },
          ].map(({ id, label, desc }, i, arr) => (
            <div
              key={id}
              id={id}
              style={{
                padding: '28px 28px 28px 0',
                borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                paddingRight: i < arr.length - 1 ? '28px' : '0',
                paddingLeft: i > 0 ? '28px' : '0',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  letterSpacing: '-0.2px',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1120px',
          margin: '0 auto',
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: '13px',
            color: 'var(--text-dim)',
            letterSpacing: '-0.2px',
          }}
        >
          Design<span style={{ color: 'var(--amber)' }}>My</span>Plot
        </span>
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Design My Plot
        </p>
      </footer>
    </div>
  );
}

/* ── Plot preview SVG — represents the actual product ──── */
function PlotPreviewSVG() {
  return (
    <svg
      viewBox="0 0 520 390"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid lines — drafting paper feel */}
      <defs>
        <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path
            d="M 26 0 L 0 0 0 26"
            fill="none"
            stroke="#2C2720"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="520" height="390" fill="url(#grid)" />

      {/* Plot boundary — main parcel */}
      <polygon
        points="60,60 420,48 460,320 40,340"
        fill="none"
        stroke="#C4873F"
        strokeWidth="1.5"
        strokeDasharray="none"
      />

      {/* Dimension labels */}
      {/* Top edge */}
      <line x1="60" y1="44" x2="420" y2="32" stroke="#9A8D80" strokeWidth="0.75" />
      <text x="240" y="26" fill="#9A8D80" fontSize="10" textAnchor="middle" fontFamily="monospace">
        24.6 m
      </text>
      {/* Left edge */}
      <line x1="44" y1="60" x2="24" y2="340" stroke="#9A8D80" strokeWidth="0.75" />
      <text x="12" y="200" fill="#9A8D80" fontSize="10" textAnchor="middle" fontFamily="monospace" transform="rotate(-90, 12, 200)">
        18.4 m
      </text>

      {/* Corner marks */}
      {[[60,60],[420,48],[460,320],[40,340]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="none" stroke="#C4873F" strokeWidth="1.5" />
      ))}

      {/* Main building footprint */}
      <rect
        x="100"
        y="110"
        width="200"
        height="140"
        fill="#1C1915"
        stroke="#7EA88B"
        strokeWidth="1.25"
      />
      <text x="200" y="185" fill="#5C5249" fontSize="9" textAnchor="middle" fontFamily="monospace">
        House
      </text>
      <text x="200" y="197" fill="#5C5249" fontSize="9" textAnchor="middle" fontFamily="monospace">
        12 × 8 m
      </text>

      {/* Side structure */}
      <rect
        x="330"
        y="200"
        width="80"
        height="60"
        fill="#1C1915"
        stroke="#5E8A6E"
        strokeWidth="1"
        strokeDasharray="4 2"
      />
      <text x="370" y="234" fill="#5C5249" fontSize="8" textAnchor="middle" fontFamily="monospace">
        Garage
      </text>

      {/* Path / driveway */}
      <path
        d="M 200,250 L 200,310 Q 200,330 220,335 L 300,338"
        fill="none"
        stroke="#3A3229"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Tree markers */}
      {[[80, 280], [88, 240], [420, 260], [410, 300]].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="#1C1915" stroke="#5E8A6E" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="4" fill="none" stroke="#5E8A6E" strokeWidth="0.75" strokeDasharray="2 1" />
        </g>
      ))}

      {/* Selection handles on house — implies active editing */}
      {[[100,110],[300,110],[100,250],[300,250]].map(([cx,cy],i) => (
        <rect key={i} x={cx-3} y={cy-3} width="6" height="6" fill="#C4873F" />
      ))}

      {/* Compass rose — small, top right */}
      <g transform="translate(468, 72)">
        <circle cx="0" cy="0" r="14" fill="#1C1915" stroke="#2C2720" strokeWidth="1" />
        <text x="0" y="-16" fill="#9A8D80" fontSize="8" textAnchor="middle" fontFamily="monospace">N</text>
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#C4873F" strokeWidth="1" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#5C5249" strokeWidth="1" />
        <polygon points="0,-10 -3,0 3,0" fill="#C4873F" />
      </g>

      {/* Scale bar */}
      <g transform="translate(60, 360)">
        <line x1="0" y1="0" x2="52" y2="0" stroke="#5C5249" strokeWidth="1" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#5C5249" strokeWidth="1" />
        <line x1="52" y1="-4" x2="52" y2="4" stroke="#5C5249" strokeWidth="1" />
        <text x="26" y="-6" fill="#5C5249" fontSize="8" textAnchor="middle" fontFamily="monospace">5 m</text>
      </g>
    </svg>
  );
}
