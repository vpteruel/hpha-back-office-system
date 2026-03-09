import type { ClosedPosition } from "@shared/index";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Column } from "../../../components/DataTable";
import { DataTable } from "../../../components/DataTable";
import "../../pages.css";
import "../Automations.css";

export function ClosedPositionsList() {
  const [closedPositions, setClosedPositions] = useState<ClosedPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClosedPositions = async () => {
      try {
        const response = await fetch("http://localhost:5000/automations/closed-positions");
        if (!response.ok) {
          throw new Error("Failed to fetch closed positions");
        }
        const data = await response.json();
        setClosedPositions(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchClosedPositions();
  }, []);

  const columns: Column<ClosedPosition>[] = [
    { key: "id", header: "ID", sortable: true },
    { key: "title", header: "Title", sortable: true },
    { key: "requisition", header: "Requisition", sortable: true },
    { key: "location", header: "Location", sortable: true },
    { 
      key: "postedDate", 
      header: "Posted Date", 
      sortable: true,
      render: (item) => item.postedDate || "-"
    },
    { 
      key: "closedDate", 
      header: "Closed Date", 
      sortable: true,
      render: (item) => item.closedDate || "-"
    },
    { 
      key: "applicationsCount", 
      header: "Applications", 
      sortable: true 
    },
    {
        key: "actions",
        header: "Actions",
        render: (item) => (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link
                to="/automations/closed-positions/$id"
                params={{ id: item.id.toString() }}
                style={{
                    color: "var(--accent-color)",
                    textDecoration: "none",
                    fontWeight: 500,
                }}
                >
                Details
              </Link>
            </div>
        )
    }
  ];

  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Closed Positions List</h1>
        <p>View and manage closed positions</p>
      </div>
      <div className="list-container">
        {loading && <div className="loading">Loading closed positions...</div>}
        {error && <div className="error-message">Error: {error}</div>}
        {!loading && !error && (
          <DataTable data={closedPositions} columns={columns} itemsPerPage={10} />
        )}
      </div>
    </div>
  );
}
