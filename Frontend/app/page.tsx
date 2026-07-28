'use client';

import Link from 'next/link';
import { SignInButton, useUser } from '@clerk/nextjs';
import Hero from '@/app/components/landing/Hero';
import FeatureCard from '@/app/components/landing/FeatureCard';
import styles from './page.module.css';

const features = [
  {
    title: 'Survey-grade plot creation',
    description:
      'Trace boundary lines, mark setbacks, and lock in acreage with clean controls designed for planning and land-use review.',
    accentLabel: 'Precise mapping',
  },
  {
    title: 'Smart placement and layout rules',
    description:
      'Place structures, gardens, and driveway options with automatic spacing guidance for buildability and zoning compliance.',
    accentLabel: 'Layout intelligence',
  },
  {
    title: 'Export-ready site plans',
    description:
      'Generate downloadable CAD-ready outlines, annotated labels, and concise plot summaries for team review or consultant handoff.',
    accentLabel: 'Professional delivery',
  },
];

const steps = [
  {
    title: 'Import or sketch your plot',
    description:
      'Begin with an aerial image, PDF survey, or hand-drawn outline so the boundaries and context stay accurate from the first draft.',
  },
  {
    title: 'Layer structures and zones',
    description:
      'Add buildings, gardens, access points, and utility zones while the interface enforces setbacks and spacing automatically.',
  },
  {
    title: 'Refine, share, and export',
    description:
      'Save working versions, collaborate with stakeholders, and export a polished plan that moves directly into permitting or construction review.',
  },
];

export default function Home() {
  const { isSignedIn: maybeSignedIn } = useUser();
  const isSignedIn = maybeSignedIn ?? false;

  return (
    <main className={`${styles.landingPage} app-ui`}>
      <div className={styles.pageShell}>
        <header className={styles.pageHeader}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.brandMark}>Design</span>My Plot
          </Link>

          <nav className={styles.navigation} aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#insights">Why it works</a>
          </nav>

          <div className={styles.headerActions}>
            {isSignedIn ? (
              <Link href="/dashboard" className={styles.dashboardLink}>
                Open workspace
              </Link>
            ) : (
              <SignInButton mode="redirect">
                <button type="button" className={styles.startButton}>
                  Start designing
                </button>
              </SignInButton>
            )}
          </div>
        </header>

        <Hero isSignedIn={isSignedIn} />

        <section id="features" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2 className={styles.sectionTitle}>Everything you need to plan, verify, and finalize a plot layout.</h2>
            <p className={styles.sectionDescription}>
              A planning-first interface that keeps land design grounded in property lines, zoning constraints, and practical site decisions.
            </p>
          </div>

          <div className={styles.gridList}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section id="workflow" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Workflow</span>
            <h2 className={styles.sectionTitle}>A guided process for fast, shareable site planning.</h2>
            <p className={styles.sectionDescription}>
              Move from a rough property sketch to an investment-ready plan without losing the detail that matters to engineers, architects, and landowners.
            </p>
          </div>

          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepTile}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Designed for teams</span>
            <h2 className={styles.sectionTitle}>Keep site decisions visible, verifiable, and easy to share.</h2>
            <p className={styles.sectionDescription}>
              Create consistent plans that let collaborators focus on build strategy and cost, not on recreating the same boundaries again and again.
            </p>
          </div>

          <div className={styles.storyPanel}>
            <article className={styles.storyCard}>
              <h3 className={styles.storyCardTitle}>Consistent plot controls</h3>
              <p className={styles.storyCardText}>
                Every layer, setback, and lot ratio is captured in a single workspace so design decisions remain measurable and easy to compare.
              </p>
            </article>
            <article className={styles.storyCard}>
              <h3 className={styles.storyCardTitle}>Clear handoff-ready output</h3>
              <p className={styles.storyCardText}>
                Export clean annotations and site summaries so architects, surveyors, and permitting teams can act quickly on your work.
              </p>
            </article>
          </div>

          <div className={styles.accentBanner}>
            <h3 className={styles.bannerTitle}>Start every plot with the right context.</h3>
            <p className={styles.bannerText}>
              If your next plan needs real-world accuracy, collaborative visibility, and a polished deliverable, this landing page is just the beginning.
            </p>
            <div className={styles.bannerActions}>
              <a href="#features" className={styles.secondaryCta}>
                Explore features
              </a>
              <Link href="/dashboard" className={styles.startButton}>
                View example plans
              </Link>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div>© 2026 Design My Plot</div>
          <div>
            <a href="#features" className={styles.footerLink}>
              Features
            </a>
            {' · '}
            <a href="#workflow" className={styles.footerLink}>
              Workflow
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
