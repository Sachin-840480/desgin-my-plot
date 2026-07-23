'use client';

import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const features = [
  {
    title: 'Draw boundaries',
    description: 'Create the outer shape of a plot before adding structures or notes.',
  },
  {
    title: 'Place structures',
    description: 'Lay out buildings, paths, open space, and practical plot elements.',
  },
  {
    title: 'Work with measurements',
    description: 'Keep dimensions visible so decisions are based on actual space.',
  },
  {
    title: 'Share the plan',
    description: 'Prepare a clear layout that can be reviewed, printed, or discussed.',
  },
];

export default function Home() {
  const { isSignedIn } = useUser();

  return (
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

      <main className="container page-main">
        <section className="page-title-row" aria-labelledby="home-title">
          <div>
            <h1 id="home-title" className="page-title">
              Design practical plot layouts.
            </h1>
            <p className="page-description">
              DesignMyPlot helps you sketch land boundaries, arrange structures, and reason about
              dimensions before you commit to a plan.
            </p>
          </div>

          {isSignedIn ? (
            <Link href="/dashboard" id="home-open-dashboard" className="button-primary">
              Open dashboard
            </Link>
          ) : (
            <SignInButton mode="redirect">
              <button id="home-start-designing" className="button-primary" type="button">
                Start designing
              </button>
            </SignInButton>
          )}
        </section>

        <section className="section" aria-labelledby="how-it-works-title">
          <h2 id="how-it-works-title" className="section-title">
            Plan the layout before the work starts
          </h2>
          <p className="section-text">
            The product is focused on ordinary planning tasks: defining boundaries, placing the
            important elements, checking dimensions, and producing a layout that is easy to review.
          </p>

          <div className="plot-preview" aria-label="Example plot layout preview">
            <div className="plot-preview-header">
              <span>Example plot</span>
              <span>meters</span>
            </div>
            <PlotPreviewSVG />
          </div>
        </section>

        <section className="section" aria-labelledby="features-title">
          <h2 id="features-title" className="section-title">
            What the tool supports
          </h2>

          <div className="simple-grid">
            {features.map((feature) => (
              <article className="simple-grid-item" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <span className="brand">
            Design<span className="brand-mark">My</span>Plot
          </span>
          <span>© {new Date().getFullYear()} Design My Plot</span>
        </div>
      </footer>
    </div>
  );
}

function PlotPreviewSVG() {
  return (
    <svg
      className="plot-preview-canvas"
      viewBox="0 0 960 540"
      role="img"
      aria-labelledby="plot-preview-title plot-preview-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="plot-preview-title">A simple plot layout drawing</title>
      <desc id="plot-preview-desc">
        A measured plot boundary with a house footprint, garage, path, and tree markers.
      </desc>
      <defs>
        <pattern id="plot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e0d8ca" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="960" height="540" fill="url(#plot-grid)" />
      <polygon
        points="130,96 760,82 830,438 100,456"
        fill="none"
        stroke="#b86f2d"
        strokeWidth="4"
      />

      <line x1="130" y1="68" x2="760" y2="54" stroke="#8c8378" strokeWidth="2" />
      <text x="445" y="42" fill="#6d655b" fontSize="18" textAnchor="middle">
        24.6 m
      </text>
      <line x1="76" y1="100" x2="48" y2="456" stroke="#8c8378" strokeWidth="2" />
      <text
        x="34"
        y="278"
        fill="#6d655b"
        fontSize="18"
        textAnchor="middle"
        transform="rotate(-90 34 278)"
      >
        18.4 m
      </text>

      <rect x="220" y="160" width="270" height="170" fill="#ffffff" stroke="#5f8c68" strokeWidth="3" />
      <text x="355" y="252" fill="#6d655b" fontSize="18" textAnchor="middle">
        House
      </text>

      <rect
        x="590"
        y="286"
        width="140"
        height="90"
        fill="#ffffff"
        stroke="#5f8c68"
        strokeWidth="3"
        strokeDasharray="10 8"
      />
      <text x="660" y="338" fill="#6d655b" fontSize="17" textAnchor="middle">
        Garage
      </text>

      <path
        d="M 355 330 L 355 410 C 356 432 380 440 418 444 L 552 450"
        fill="none"
        stroke="#c8bdad"
        strokeWidth="24"
        strokeLinecap="round"
      />

      {[
        [154, 378],
        [176, 318],
        [760, 352],
        [734, 414],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="19" fill="#ffffff" stroke="#5f8c68" strokeWidth="3" />
          <circle cx={cx} cy={cy} r="7" fill="#5f8c68" />
        </g>
      ))}

      {[
        [220, 160],
        [490, 160],
        [220, 330],
        [490, 330],
      ].map(([cx, cy]) => (
        <rect key={`${cx}-${cy}`} x={cx - 6} y={cy - 6} width="12" height="12" fill="#b86f2d" />
      ))}
    </svg>
  );
}
