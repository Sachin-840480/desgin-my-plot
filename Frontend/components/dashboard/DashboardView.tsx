'use client';

import { Navbar } from '@/components/navbar/Navbar';
import Loading from '@/app/loading';
import { useUser } from '@clerk/nextjs';
import shared from '@/components/common/SharedStyles.module.css';
import styles from './DashboardView.module.css';

const plotRecords = [
  {
    title: 'East-facing family plot',
    dimensions: '30 ft x 50 ft',
    blocker: 'Parking position',
    updated: 'Today',
  },
  {
    title: 'Corner rental study',
    dimensions: '36 ft x 54 ft',
    blocker: 'Garden vs unit depth',
    updated: 'Yesterday',
  },
];

export function DashboardView() {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className={shared.page}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={shared.page}>
      <Navbar context="dashboard" />

      <main className={shared.main}>
        <section className={styles.heading} aria-labelledby="dashboard-heading">
          <div>
            <p className={shared.kicker}>Planning dashboard</p>
            <h1 id="dashboard-heading">Continue from the decision that needs attention.</h1>
            <p>
              The dashboard keeps plot records scannable. Start with facts, continue
              from blockers, and avoid adding widgets before the core workflow exists.
            </p>
          </div>

          <button className={shared.primaryButton} type="button">
            New plot brief
          </button>
        </section>

        <section className={shared.controls} aria-label="Planning record controls">
          <label>
            Search records
            <input type="search" placeholder="Plot name or blocker" />
          </label>

          <label>
            View
            <select defaultValue="active">
              <option value="active">Active records</option>
              <option value="all">All records</option>
              <option value="blocked">Needs decision</option>
            </select>
          </label>
        </section>

        <section className={styles.records} aria-labelledby="records-heading">
          <div className={shared.sectionIntro}>
            <h2 id="records-heading" className={shared.sectionHeading}>Saved plot records</h2>
            <p>Sample records for testing the dashboard structure.</p>
          </div>

          <table className={shared.table}>
            <thead>
              <tr>
                <th>Plot</th>
                <th>Dimensions</th>
                <th>Current blocker</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {plotRecords.map((record) => (
                <tr key={record.title}>
                  <td>{record.title}</td>
                  <td>{record.dimensions}</td>
                  <td>{record.blocker}</td>
                  <td>{record.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={styles.nextStep} aria-labelledby="next-step-heading">
          <h2 id="next-step-heading" className={shared.sectionHeading}>Next screen to build</h2>
          <p>
            The next useful implementation is a plot brief form. It should collect
            dimensions, road position, setbacks, fixed constraints, and planning
            priorities before any layout generation is attempted.
          </p>
          <button className={shared.secondaryButton} type="button">
            Define plot brief form
          </button>
        </section>
      </main>
    </div>
  );
}
