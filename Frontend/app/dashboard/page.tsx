'use client';

import Link from 'next/link';
import { useUser, SignOutButton, UserButton } from '@clerk/nextjs';
import { Suspense } from 'react';
import Loading from '@/app/loading';

/* ─── Stat Card ──────────────────────────────── */
function StatCard({
  label,
  value,
  sub,
  accent,
  icon,
}: {
  label: string;
  value: string;
  sub: string;
  accent: string;
  icon: string;
}) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: '14px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>
          {label}
        </p>
        <span style={{ fontSize: '20px' }}>{icon}</span>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '28px', fontWeight: 800, color: accent }}>
          {value}
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-dim)' }}>{sub}</p>
      </div>
    </div>
  );
}

/* ─── Activity Item ──────────────────────────── */
function ActivityItem({
  action,
  plot,
  time,
  dot,
}: {
  action: string;
  plot: string;
  time: string;
  dot: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '16px 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: dot,
          marginTop: '5px',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>
          {action}
        </p>
        <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>{plot}</p>
      </div>
      <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
        {time}
      </p>
    </div>
  );
}

/* ─── Dashboard Sidebar ──────────────────────── */
function Sidebar() {
  const { user } = useUser();

  return (
    <aside
      className="glass-strong"
      style={{
        width: '240px',
        flexShrink: 0,
        borderRadius: '16px',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        height: 'fit-content',
        position: 'sticky',
        top: '24px',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', marginBottom: '8px' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--amber) 0%, var(--sienna) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          ⬡
        </div>
        <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text)' }}>
          Design<span style={{ color: 'var(--amber)' }}>My</span>Plot
        </span>
      </div>

      {/* Nav items */}
      {[
        { icon: '⊞', label: 'Overview', active: true, id: 'nav-overview' },
        { icon: '🗺️', label: 'My Plots', active: false, id: 'nav-plots' },
        { icon: '📐', label: 'Tools', active: false, id: 'nav-tools' },
        { icon: '📤', label: 'Exports', active: false, id: 'nav-exports' },
        { icon: '⚙️', label: 'Settings', active: false, id: 'nav-settings' },
      ].map(({ icon, label, active, id }) => (
        <button
          key={label}
          id={id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '14px',
            fontWeight: active ? 600 : 400,
            transition: 'all 0.2s ease',
            background: active ? 'rgba(196,135,63,0.12)' : 'transparent',
            color: active ? 'var(--amber)' : 'var(--text-muted)',
            width: '100%',
            textAlign: 'left',
          }}
          onMouseEnter={(e) => {
            if (!active) {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-2)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)';
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
            }
          }}
        >
          <span>{icon}</span>
          {label}
        </button>
      ))}

      {/* Spacer */}
      <div style={{ flex: 1, minHeight: '24px' }} />
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>

        {/* User profile strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', marginBottom: '8px' }}>
          <UserButton
            appearance={{ elements: { avatarBox: { width: '32px', height: '32px' } } }}
          />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user?.firstName || user?.username || 'User'}
            </p>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user?.primaryEmailAddress?.emailAddress || ''}
            </p>
          </div>
        </div>

        {/* Sign out */}
        <SignOutButton redirectUrl="/">
          <button
            id="sidebar-signout-btn"
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '10px',
              border: '1px solid var(--border-2)',
              background: 'transparent',
              color: 'var(--text-muted)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
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
    </aside>
  );
}

/* ─── Main Dashboard Content ─────────────────── */
function DashboardContent() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  const firstName = user?.firstName || user?.username || 'there';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>

      {/* Welcome Banner */}
      <div
        className="glass"
        style={{
          borderRadius: '16px',
          padding: '28px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'rgba(196,135,63,0.07)',
            filter: 'blur(50px)',
            right: '-30px',
            top: '-60px',
            pointerEvents: 'none',
          }}
        />
        <p
          style={{
            margin: '0 0 6px',
            fontSize: '13px',
            color: 'var(--sage)',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          {greeting} ☀️
        </p>
        <h1
          style={{
            margin: '0 0 10px',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.5px',
          }}
        >
          Welcome back,{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--amber) 0%, var(--sienna) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {firstName}
          </span>
        </h1>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          You have <strong style={{ color: 'var(--amber)' }}>3 active plots</strong>. Your latest design was updated 2 hours ago.
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
          <button
            id="dashboard-new-plot-btn"
            className="shimmer-btn"
            style={{
              padding: '10px 22px',
              borderRadius: '8px',
              border: 'none',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: '0 2px 14px rgba(196,135,63,0.3)',
            }}
          >
            + New Plot
          </button>
          <button
            id="dashboard-view-all-btn"
            style={{
              padding: '10px 22px',
              borderRadius: '8px',
              border: '1px solid var(--border-2)',
              color: 'var(--text-muted)',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              background: 'transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)';
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            }}
          >
            View all plots
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        <StatCard
          label="Total Plots"
          value="3"
          sub="+1 this month"
          accent="var(--amber)"
          icon="🗺️"
        />
        <StatCard
          label="Area Planned"
          value="1.4 ac"
          sub="Across all plots"
          accent="var(--sage)"
          icon="📐"
        />
        <StatCard
          label="Exports Made"
          value="12"
          sub="PDF, PNG, DXF"
          accent="var(--sienna)"
          icon="📤"
        />
        <StatCard
          label="Saved Versions"
          value="38"
          sub="Auto-versioned"
          accent="var(--amber-lt)"
          icon="🔄"
        />
      </div>

      {/* Recent activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Activity feed */}
        <div
          className="glass"
          style={{ borderRadius: '14px', padding: '24px' }}
        >
          <h2 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>
            Recent Activity
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: '12px', color: 'var(--text-dim)' }}>
            Your last 5 actions
          </p>

          <div>
            <ActivityItem action="Edited boundary" plot="Plot A — Riverside" time="2h ago" dot="var(--amber)" />
            <ActivityItem action="Exported to PDF" plot="Plot B — Hilltop" time="Yesterday" dot="var(--sage)" />
            <ActivityItem action="Added vegetation zone" plot="Plot A — Riverside" time="2d ago" dot="var(--sage)" />
            <ActivityItem action="Created new plot" plot="Plot C — Farmland" time="4d ago" dot="var(--sienna)" />
            <ActivityItem action="Measured setbacks" plot="Plot B — Hilltop" time="6d ago" dot="var(--amber-lt)" />
          </div>
        </div>

        {/* Quick actions */}
        <div
          className="glass"
          style={{ borderRadius: '14px', padding: '24px' }}
        >
          <h2 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>
            Quick Actions
          </h2>
          <p style={{ margin: '0 0 20px', fontSize: '12px', color: 'var(--text-dim)' }}>
            Jump right back in
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Continue editing Plot A', icon: '✏️', accent: 'var(--amber)', id: 'qa-continue-plot-a' },
              { label: 'Export Plot B to PDF', icon: '📄', accent: 'var(--sage)', id: 'qa-export-plot-b' },
              { label: 'Run sun analysis', icon: '☀️', accent: 'var(--sienna)', id: 'qa-sun-analysis' },
              { label: 'Compare versions', icon: '🔄', accent: 'var(--amber-lt)', id: 'qa-compare-versions' },
            ].map(({ label, icon, accent, id }) => (
              <button
                key={id}
                id={id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-2)',
                  color: 'var(--text)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = accent;
                  (e.currentTarget as HTMLButtonElement).style.background = `${accent}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-2)';
                }}
              >
                <span style={{ fontSize: '18px' }}>{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Page ─────────────────────────── */
export default function DashboardPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        padding: '24px',
        gap: '24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Sidebar */}
      <Suspense fallback={<Loading />}>
        <Sidebar />
      </Suspense>

      {/* Main content */}
      <Suspense fallback={<Loading />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
