'use client';

import Link from 'next/link';
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import Loading from '@/app/loading';

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  const firstName = user?.firstName || user?.username || 'there';
  const plots: null[] = [];

  return (
    <div className="page">
      <header className="site-header">
        <nav className="container site-nav" aria-label="Dashboard navigation">
          <Link href="/" id="dash-logo" className="brand">
            Design<span className="brand-mark">My</span>Plot
          </Link>

          <div className="nav-actions">
            <UserButton />
            <SignOutButton redirectUrl="/">
              <button id="dash-signout" className="button-secondary" type="button">
                Sign out
              </button>
            </SignOutButton>
          </div>
        </nav>
      </header>

      <main className="container page-main">
        <section className="page-title-row" aria-labelledby="dashboard-title">
          <div>
            <h1 id="dashboard-title" className="page-title">
              My plots
            </h1>
            <p className="page-description">
              {firstName}&apos;s workspace for saved plot layouts.
            </p>
          </div>

          <button id="qa-new-plot" className="button-primary" type="button">
            New plot
          </button>
        </section>

        {plots.length === 0 ? (
          <EmptyState />
        ) : (
          <section className="section" aria-label="Saved plots">
            <div className="simple-grid">{/* Saved plot rows or cards will be rendered here. */}</div>
          </section>
        )}
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <section className="empty-state" aria-labelledby="empty-plots-title">
      <EmptyPlotIcon />

      <h2 id="empty-plots-title">No plots yet</h2>
      <p>
        Create your first plot when you are ready to define boundaries, place structures, and keep
        the layout organized around real measurements.
      </p>

      <button id="empty-new-plot" className="button-primary" type="button">
        Create plot
      </button>
    </section>
  );
}

function EmptyPlotIcon() {
  return (
    <svg
      className="empty-state-icon"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      role="img"
      aria-labelledby="empty-plot-icon-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="empty-plot-icon-title">Empty plot drawing</title>
      <rect x="1" y="1" width="50" height="50" rx="6" fill="#ffffff" stroke="#ddd6ca" strokeWidth="1.5" />
      <polygon points="10,10 40,8 43,38 8,40" fill="none" stroke="#b86f2d" strokeWidth="1.5" />
      <rect x="17" y="17" width="18" height="14" fill="none" stroke="#5f8c68" strokeWidth="1.25" />
      <line x1="9" y1="10" x2="9" y2="40" stroke="#c8bdad" strokeWidth="1" />
    </svg>
  );
}
