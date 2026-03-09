import type { ClosedPosition } from "@shared/index";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../../pages.css";

export function ClosedPositionDetails() {
  const { id } = useParams({ from: '/automations/closed-positions/$id' });
  const [position, setPosition] = useState<ClosedPosition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/automations/closed-positions/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch closed position details");
        }
        const data = await response.json();
        setPosition(data[0] || null);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading details...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!position) return <div className="error-message">Position not found</div>;

  return (
    <div className="detail-page">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/automations/closed-positions" style={{ color: "var(--accent-color)", textDecoration: "none", fontWeight: 500 }}>← Back</Link>
          <h1>{position.title}</h1>
        </div>
        <p>Requisition: {position.requisition || "N/A"}</p>
      </div>

      <div className="detail-container">
        <section className="detail-section">
          <h2>Position Information</h2>
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div className="info-item">
              <strong>Location:</strong> {position.location || "N/A"}
            </div>
            <div className="info-item">
              <strong>Applications Count:</strong> {position.applicationsCount}
            </div>
            <div className="info-item">
              <strong>Posted Date:</strong> {position.postedDate || "N/A"}
            </div>
            <div className="info-item">
              <strong>Closed Date:</strong> {position.closedDate || "N/A"}
            </div>
            <div className="info-item">
              <strong>Run ID:</strong> {position.runId}
            </div>
            <div className="info-item">
              <strong>Database ID:</strong> {position.id}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
