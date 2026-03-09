import type { AutomationDetails, Run } from "@shared/index";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../pages.css";

export function AutomationDetail() {
  const { id } = useParams({ from: '/automations/$id' });
  const [automation, setAutomation] = useState<AutomationDetails | null>(null);
  const [runs, setRuns] = useState<Run[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [autoRes, runsRes] = await Promise.all([
          fetch(`http://localhost:5000/automations/${id}`),
          fetch(`http://localhost:5000/automations/${id}/runs`)
        ]);

        if (!autoRes.ok || !runsRes.ok) {
          throw new Error("Failed to fetch automation details");
        }

        const autoData = await autoRes.json();
        const runsData = await runsRes.json();

        setAutomation(autoData[0] || null);
        setRuns(runsData);
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
  if (!automation) return <div className="error-message">Automation not found</div>;

  return (
    <div className="detail-page">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/automations" style={{ color: "var(--accent-color)", textDecoration: "none", fontWeight: 600 }}>← Back to Automations</Link>
          <h1 style={{ margin: 0 }}>{automation.name}</h1>
        </div>
        <p style={{ marginTop: '0.5rem' }}>{automation.description || "No description provided."}</p>
      </div>

      <div className="dashboard-layout">
        {/* KPI Statistics */}
        <div className="stats-grid">
           <div className="stat-card">
            <span className="stat-label">Total Runs</span>
            <span className="stat-value highlight">{runs.length}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Created At</span>
            <span className="stat-value">{new Date(automation.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Status</span>
            <span className="stat-value">
              <span className={`status-badge ${automation.isActive ? 'status-active' : 'status-inactive'}`}>
                {automation.isActive ? "Active" : "Inactive"}
              </span>
            </span>
          </div>
        </div>

        <section className="dashboard-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
             <h2 style={{ borderBottom: 'none', paddingBottom: 0, margin: 0 }}>Run History</h2>
          </div>
          <div className="table-wrapper">
            <table className="modern-data-table">
              <thead>
                <tr>
                  <th>Run ID</th>
                  <th>Status</th>
                  <th>Started At</th>
                  <th>Duration</th>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                {runs.length === 0 ? (
                  <tr><td colSpan={5} style={{ textAlign: 'center' }}>No runs recorded yet</td></tr>
                ) : (
                  runs.map(run => (
                    <tr key={run.id}>
                      <td>#{run.id}</td>
                      <td>
                        <span className={`status-badge status-${run.status.toLowerCase()}`}>
                          {run.status}
                        </span>
                      </td>
                      <td>{new Date(run.startedAt).toLocaleString()}</td>
                      <td>{run.durationMs ? `${(run.durationMs / 1000).toFixed(2)}s` : "N/A"}</td>
                      <td>
                        {run.summary}
                        {run.errorMessage && (
                          <div className="error-text" style={{ fontSize: '0.8rem', color: 'var(--error-text)', marginTop: '0.25rem' }}>
                            {run.errorMessage}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
