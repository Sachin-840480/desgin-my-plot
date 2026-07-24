'use client';

import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="app-ui">
      <div className="page">
        <header className="site-header">
          <nav className="container site-nav" aria-label="Main navigation">
            <Link href="/" className="brand">
              Design<span className="brand-mark">My</span>Plot
            </Link>

            <div className="nav-actions">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard" id="nav-dashboard" className="link-muted">
                    Dashboard
                  </Link>
                  <UserButton />
                </>
              ) : (
                <SignInButton mode="redirect">
                  <button id="nav-signin" className="button-secondary" type="button">
                    Sign in
                  </button>
                </SignInButton>
              )}
            </div>
          </nav>
        </header>

      
      </div>
    </div>
  );
}
