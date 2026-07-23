export default function Loading() {
  return (
    <div className="loading-page" role="status" aria-label="Loading">
      <div className="loading-box">
        <div className="loading-spinner" aria-hidden="true" />
        <p className="loading-label">Loading...</p>
      </div>
    </div>
  );
}
