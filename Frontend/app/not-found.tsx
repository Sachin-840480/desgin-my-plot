import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="app-ui">
      <main className="not-found-page">
        <div className="not-found-content">
          <p className="not-found-code">404</p>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link href="/" id="not-found-home-link" className="button-secondary">
            Return home
          </Link>
        </div>
      </main>
    </div>
  );
}
