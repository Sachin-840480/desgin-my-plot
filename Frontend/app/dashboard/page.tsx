'use client';

import Link from 'next/link';
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import Loading from '@/app/loading';

export default function DashboardPage() {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="app-ui">
        <Loading />
      </div>
    );
  }

  const plots: null[] = [];

  return (
    <div className="app-ui">
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

      </div>
    </div>
  );
}
