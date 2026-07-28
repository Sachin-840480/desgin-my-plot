'use client';

import Link from 'next/link';
import { SignInButton, useUser } from '@clerk/nextjs';
import { Navbar } from '@/components/navbar/Navbar';
import shared from '@/components/common/SharedStyles.module.css';
import styles from './LandingPage.module.css';

export function LandingPage() {
  const { isSignedIn } = useUser();

  return (
    <div className={shared.page}>
      <Navbar context="landing" />

      <main>
        <section className={styles.intro} aria-labelledby="landing-heading">
          <div className={styles.introText}>
            <p className={shared.kicker}>Plot decisions before layout drawings</p>
            <h1 id="landing-heading">Build a clear brief before you design the plot.</h1>
            <p>
              Capture dimensions, road access, constraints, and priorities in a planning
              workspace so the next layout decision has context.
            </p>

            <div className={styles.primaryPath}>
              {isSignedIn ? (
                <Link href="/dashboard" className={shared.primaryButton}>
                  Go to dashboard
                </Link>
              ) : (
                <SignInButton mode="redirect">
                  <button className={shared.primaryButton} type="button">
                    Sign in to open dashboard
                  </button>
                </SignInButton>
              )}
              <span>Landing page to sign in to dashboard.</span>
            </div>
          </div>

          <PlanningBrief />
        </section>

        <section className={styles.workflow} aria-labelledby="workflow-heading">
          <div>
            <h2 id="workflow-heading">A narrow workflow is the point.</h2>
            <p>
              This landing page should only explain the first useful action: sign in and
              create a plot brief. More sections should wait until the product has real
              screens behind them.
            </p>
          </div>

          <ol>
            <li>Record the site facts that cannot be ignored.</li>
            <li>Write the tradeoffs the layout must handle.</li>
            <li>Continue in the dashboard with saved planning records.</li>
          </ol>
        </section>

        <section className={styles.comparison} aria-labelledby="comparison-heading">
          <div>
            <h2 id="comparison-heading">What users need to compare</h2>
            <p>Planning questions fit a table better than decorative feature cards.</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Planning question</th>
                <th>Why it belongs in the product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Where should parking sit?</td>
                <td>It changes entry, open area, and usable frontage.</td>
              </tr>
              <tr>
                <td>Which constraints are fixed?</td>
                <td>It prevents unrealistic layout versions.</td>
              </tr>
              <tr>
                <td>What option is worth revisiting?</td>
                <td>It keeps decision history attached to the plot.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function PlanningBrief() {
  return (
    <aside className={styles.brief} aria-label="Example plot brief">
      <div className={styles.briefHeader}>
        <span>Brief snapshot</span>
        <strong>Draft</strong>
      </div>

      <dl>
        <div>
          <dt>Plot</dt>
          <dd>30 ft x 50 ft, road facing east</dd>
        </div>
        <div>
          <dt>Fixed</dt>
          <dd>Rear setback, entry gate, existing tree</dd>
        </div>
        <div>
          <dt>Priority</dt>
          <dd>Parking without reducing daylight</dd>
        </div>
      </dl>
    </aside>
  );
}
