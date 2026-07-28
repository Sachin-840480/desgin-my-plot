import Link from 'next/link';
import { SignInButton } from '@clerk/nextjs';
import styles from './Hero.module.css';

interface HeroProps {
  isSignedIn: boolean;
}

export default function Hero({ isSignedIn }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Design My Plot hero section">
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>Land planning made faster</span>
        <h1 className={styles.heroTitle}>Build better plots with confidence, from survey to site plan.</h1>
        <p className={styles.heroText}>
          Design My Plot gives you a modern planning studio for mapping property lines, placing structures, and previewing landscape layouts with real-world context and instant export-ready plans.
        </p>

        <div className={styles.heroActions}>
          {isSignedIn ? (
            <Link href="/dashboard" className={styles.primaryButton}>
              Open your workspace
            </Link>
          ) : (
            <SignInButton mode="redirect">
              <button type="button" className={styles.primaryButton}>
                Start designing
              </button>
            </SignInButton>
          )}
          <a href="#workflow" className={styles.secondaryButton}>
            See the workflow
          </a>
        </div>

        <div className={styles.featureRow}>
          <div className={styles.featurePill}>
            <strong>240+</strong> parcels organized
          </div>
          <div className={styles.featurePill}>
            <strong>4x faster</strong> conceptual layout cycles
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.visualPanel}>
          <div className={styles.mapHeader}>
            <div>
              <span className={styles.mapLabel}>Property zone</span>
              <h2 className={styles.mapTitle}>Oak Ridge parcel</h2>
            </div>
            <div className={styles.mapBadge}>Residential</div>
          </div>

          <div className={styles.mapGraph}>
            <div className={styles.mapGrid} />
            <div className={styles.plotShape} />
            <div className={styles.plotPin} />
          </div>

          <dl className={styles.mapStats}>
            <div>
              <dt>Lot size</dt>
              <dd>1.2 acres</dd>
            </div>
            <div>
              <dt>Setback</dt>
              <dd>15 ft</dd>
            </div>
            <div>
              <dt>Structures</dt>
              <dd>3 planned</dd>
            </div>
          </dl>
        </div>

        <div className={styles.glowSphere} />
        <div className={styles.accentShape} />
      </div>
    </section>
  );
}
