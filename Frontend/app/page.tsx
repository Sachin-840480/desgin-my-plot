'use client';

import Link from 'next/link';
import {
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

/* ─── Navbar ──────────────────────────────────────────── */
function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <header
      className="glass-strong"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
      }}
    >
      <nav
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--amber) 0%, var(--sienna) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
            }}
          >
            ⬡
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: '17px',
              color: 'var(--text)',
              letterSpacing: '-0.3px',
            }}
          >
            Design<span style={{ color: 'var(--amber)' }}>My</span>Plot
          </span>
        </div>

        {/* Auth controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {!isSignedIn ? (
            <SignInButton mode="redirect">
              <button
                id="navbar-signin-btn"
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-2)',
                  background: 'transparent',
                  color: 'var(--text)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
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
                Sign In
              </button>
            </SignInButton>
          ) : (
            <>
              <Link
                href="/dashboard"
                id="navbar-dashboard-link"
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-2)',
                  color: 'var(--text-muted)',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--sage)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-2)';
                }}
              >
                Dashboard
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: { width: '34px', height: '34px' },
                  },
                }}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

/* ─── Feature Card ────────────────────────────────────── */
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accent: string;
  delay: string;
}

function FeatureCard({ icon, title, description, accent, delay }: FeatureCardProps) {
  return (
    <div
      className="glass fade-up"
      style={{
        borderRadius: '16px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        animationDelay: delay,
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${accent}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: `${accent}18`,
          border: `1px solid ${accent}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
      >
        {icon}
      </div>
      <div>
        <h3 style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 600, color: 'var(--text)' }}>
          {title}
        </h3>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── Stat Pill ───────────────────────────────────────── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--amber)', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <>
      <Navbar />

      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>

        {/* ── Hero ─────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 24px 80px',
            textAlign: 'center',
          }}
        >
          {/* Background orbs */}
          <div
            className="orb"
            style={{
              width: '480px',
              height: '480px',
              backgroundColor: 'rgba(196,135,63, 0.12)',
              top: '-80px',
              right: '-100px',
              animationDuration: '24s',
            }}
          />
          <div
            className="orb"
            style={{
              width: '360px',
              height: '360px',
              backgroundColor: 'rgba(126,168,139, 0.10)',
              bottom: '0px',
              left: '-60px',
              animationDuration: '18s',
              animationDelay: '-8s',
            }}
          />
          <div
            className="orb"
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'rgba(212,132,90, 0.08)',
              top: '30%',
              left: '10%',
              animationDuration: '30s',
              animationDelay: '-14s',
            }}
          />

          {/* Badge */}
          <div
            className="glass fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '99px',
              marginBottom: '28px',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--amber)',
              letterSpacing: '0.06em',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--sage)', display: 'inline-block' }} />
            NOW IN EARLY ACCESS
          </div>

          {/* Headline */}
          <h1
            className="fade-up-1"
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              margin: '0 0 24px',
              maxWidth: '820px',
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

          {/* Subheadline */}
          <p
            className="fade-up-2"
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 0 40px',
              fontWeight: 400,
            }}
          >
            Visualise, plan, and bring your land to life — with tools built for people who care about their space.
          </p>

          {/* CTA buttons */}
          <div
            className="fade-up-3"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {!isSignedIn ? (
              <>
                <SignInButton mode="redirect">
                  <button
                    id="hero-cta-btn"
                    className="shimmer-btn"
                    style={{
                      padding: '14px 32px',
                      borderRadius: '10px',
                      border: 'none',
                      color: '#fff',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      boxShadow: '0 4px 20px rgba(196,135,63,0.35)',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(196,135,63,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(196,135,63,0.35)';
                    }}
                  >
                    Start Designing →
                  </button>
                </SignInButton>

                <a
                  href="#features"
                  id="hero-learn-more-btn"
                  style={{
                    padding: '14px 32px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-2)',
                    color: 'var(--text-muted)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-2)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--surface)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-2)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  See how it works
                </a>
              </>
            ) : (
              <Link
                href="/dashboard"
                id="hero-dashboard-cta"
                className="shimmer-btn"
                style={{
                  padding: '14px 32px',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 20px rgba(196,135,63,0.35)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(196,135,63,0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(196,135,63,0.35)';
                }}
              >
                Go to Dashboard →
              </Link>
            )}
          </div>

          {/* Stats row */}
          <div
            className="glass fade-up-3"
            style={{
              display: 'flex',
              gap: '40px',
              padding: '20px 40px',
              borderRadius: '14px',
              marginTop: '64px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <StatPill value="2,400+" label="Plots designed" />
            <div style={{ width: '1px', backgroundColor: 'var(--border-2)' }} />
            <StatPill value="98%" label="Happy users" />
            <div style={{ width: '1px', backgroundColor: 'var(--border-2)' }} />
            <StatPill value="< 5min" label="First design" />
          </div>
        </section>

        {/* ── Features ─────────────────────────────── */}
        <section
          id="features"
          style={{
            padding: '80px 24px 100px',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
        >
          {/* Section label */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '12px',
              }}
            >
              What you get
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                letterSpacing: '-0.8px',
                color: 'var(--text)',
                margin: 0,
              }}
            >
              Everything in one place
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                marginTop: '12px',
                maxWidth: '440px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Built with the tools and workflows that real people actually use.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <FeatureCard
              icon="🗺️"
              title="Intuitive Plot Editor"
              description="Draw boundaries, mark zones, and annotate your land with a simple, precise canvas that just works."
              accent="var(--amber)"
              delay="0s"
            />
            <FeatureCard
              icon="🌿"
              title="Vegetation & Zoning"
              description="Plan green areas, structures, and utility paths using smart zoning layers that respect your plot constraints."
              accent="var(--sage)"
              delay="0.1s"
            />
            <FeatureCard
              icon="📐"
              title="Measurement Tools"
              description="Get accurate area calculations, setback checks, and dimension readouts without leaving your browser."
              accent="var(--sienna)"
              delay="0.2s"
            />
            <FeatureCard
              icon="☀️"
              title="Sun & Shadow Analysis"
              description="Understand how sunlight hits your plot across seasons so you can place structures and gardens optimally."
              accent="var(--amber-lt)"
              delay="0.3s"
            />
            <FeatureCard
              icon="🔄"
              title="Version History"
              description="Never lose a design. Every save is versioned so you can revisit, compare, and restore at any point."
              accent="var(--sage-dk)"
              delay="0.4s"
            />
            <FeatureCard
              icon="📤"
              title="Export & Share"
              description="Export your designs to PDF, PNG, or DXF formats. Share with your architect, contractor, or municipality."
              accent="var(--sienna)"
              delay="0.5s"
            />
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────── */}
        <section style={{ padding: '0 24px 100px' }}>
          <div
            style={{
              maxWidth: '1120px',
              margin: '0 auto',
              borderRadius: '20px',
              background: `linear-gradient(135deg, var(--surface) 0%, rgba(196,135,63,0.08) 50%, var(--surface) 100%)`,
              border: '1px solid var(--border-2)',
              padding: '64px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(196,135,63,0.06)',
                filter: 'blur(60px)',
                top: '-80px',
                right: '-40px',
                pointerEvents: 'none',
              }}
            />
            <p
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '16px',
              }}
            >
              Ready to start?
            </p>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                color: 'var(--text)',
                margin: '0 0 16px',
              }}
            >
              Your plot, your vision.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                margin: '0 0 36px',
                maxWidth: '420px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.7,
              }}
            >
              Sign up in seconds and start bringing your land design to life today.
            </p>

            {!isSignedIn ? (
              <SignInButton mode="redirect">
                <button
                  id="cta-section-btn"
                  className="shimmer-btn"
                  style={{
                    padding: '14px 36px',
                    borderRadius: '10px',
                    border: 'none',
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: '0 4px 24px rgba(196,135,63,0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(196,135,63,0.55)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(196,135,63,0.4)';
                  }}
                >
                  Create your free account →
                </button>
              </SignInButton>
            ) : (
              <Link
                href="/dashboard"
                id="cta-section-dashboard-link"
                className="shimmer-btn"
                style={{
                  display: 'inline-block',
                  padding: '14px 36px',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(196,135,63,0.4)',
                }}
              >
                Open your Dashboard →
              </Link>
            )}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────── */}
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            padding: '32px 24px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Design My Plot. Crafted with intention.
          </p>
        </footer>
      </main>
    </>
  );
}
