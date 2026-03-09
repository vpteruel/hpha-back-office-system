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
          <Link to="/automations/closed-positions" style={{ color: "var(--accent-color)", textDecoration: "none", fontWeight: 600 }}>← Back to List</Link>
          <h1 style={{ margin: 0 }}>{position.title}</h1>
        </div>
        <p style={{ marginTop: '0.5rem' }}>Requisition: {position.requisition || "N/A"}</p>
      </div>

      <div className="dashboard-layout">
        {/* KPI Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Applications</span>
            <span className="stat-value highlight">{position.applicationsCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Location</span>
            <span className="stat-value">{position.location || "N/A"}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Posted Date</span>
            <span className="stat-value">{position.postedDate ? new Date(position.postedDate).toLocaleDateString() : "N/A"}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Closed Date</span>
            <span className="stat-value">{position.closedDate ? new Date(position.closedDate).toLocaleDateString() : "N/A"}</span>
          </div>
        </div>

        {/* Detailed System Info */}
        <section className="dashboard-panel">
          <h2>System Information</h2>
          <div className="panel-info-grid">
            <div className="panel-info-item">
              <span className="panel-info-label">Run ID</span>
              <span className="panel-info-value">#{position.runId}</span>
            </div>
            <div className="panel-info-item">
              <span className="panel-info-label">Database ID</span>
              <span className="panel-info-value">{position.id}</span>
            </div>
            <div className="panel-info-item">
              <span className="panel-info-label">Requisition</span>
              <span className="panel-info-value">{position.requisition || "N/A"}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
