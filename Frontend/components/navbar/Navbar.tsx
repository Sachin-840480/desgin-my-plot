'use client';

import Link from 'next/link';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import styles from './Navbar.module.css';

type NavbarProps = {
  context: 'landing' | 'dashboard';
};

export function Navbar({ context }: NavbarProps) {
  const { isSignedIn } = useUser();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label={context === 'dashboard' ? 'Dashboard navigation' : 'Main navigation'}>
        <Link href="/" className={styles.brand}>
          Design<span>My</span>Plot
        </Link>

        <div className={styles.actions}>
          {context === 'dashboard' ? (
            <>
              <UserButton />
              <SignOutButton redirectUrl="/">
                <button className={styles.secondaryAction} type="button">
                  Sign out
                </button>
              </SignOutButton>
            </>
          ) : isSignedIn ? (
            <>
              <Link href="/dashboard" className={styles.navLink}>
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <SignInButton mode="redirect">
              <button className={styles.secondaryAction} type="button">
                Sign in
              </button>
            </SignInButton>
          )}
        </div>
      </nav>
    </header>
  );
}
