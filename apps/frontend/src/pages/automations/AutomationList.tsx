import type { Automation } from "@shared/index";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Column } from "../../components/DataTable";
import { DataTable } from "../../components/DataTable";
import "../pages.css";
import "./Automations.css";

export function AutomationList() {
  const navigate = useNavigate();
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAutomations = async () => {
      try {
        const response = await fetch("http://localhost:5000/automations");
        if (!response.ok) {
          throw new Error("Failed to fetch automations");
        }
        const data = await response.json();
        setAutomations(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchAutomations();
  }, []);

  const columns: Column<Automation>[] = [
    { key: "id", header: "ID", sortable: true },
    { key: "name", header: "Name", sortable: true },
    { key: "description", header: "Description", sortable: true },
    { 
      key: "isActive", 
      header: "Status", 
      sortable: true,
      render: (item) => (
        <span className={`status-badge ${item.isActive ? "status-active" : "status-inactive"}`}>
          {item.isActive ? "Active" : "Inactive"}
        </span>
      )
    },
    {
      key: "lastRunStatus",
      header: "Last Run",
      sortable: true,
      render: (item) => (
        item.lastRunAt ? (
          <div className="last-run-info">
            <span className={`status-badge status-${item.lastRunStatus?.toLowerCase()}`}>
              {item.lastRunStatus}
            </span>
            <small className="timestamp">{new Date(item.lastRunAt).toLocaleString()}</small>
          </div>
        ) : <span className="text-secondary">Never run</span>
      )
    },
    {
        key: "actions",
        header: "Actions",
        render: (item) => (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link
                to="/automations/$id"
                params={{ id: item.id }}
                style={{
                    color: "var(--accent-color)",
                    textDecoration: "none",
                    fontWeight: 500,
                }}
                >
                Details
              </Link>
              |
              <Link
                to="/automations/$id/runs"
                params={{ id: item.id }}
                style={{
                    color: "var(--accent-color)",
                    textDecoration: "none",
                    fontWeight: 500,
                }}
                >
                Run Now
              </Link>
            </div>
        )
    }
  ];

  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Automation List</h1>
        <p>View and manage automated processes</p>
      </div>
      <div className="list-container">
        {loading && <div className="loading">Loading automations...</div>}
        {error && <div className="error-message">Error: {error}</div>}
        {!loading && !error && (
          <DataTable data={automations} columns={columns} itemsPerPage={10} />
        )}
      </div>
    </div>
  );
}
