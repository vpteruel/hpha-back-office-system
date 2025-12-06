import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "../../pages.css";

interface CateringRequest {
  id: string;
  event_name: string;
  event_date: string;
  event_time: string;
  status: "Pending" | "Approved" | "Rejected";
}

const mockData: CateringRequest[] = [
  {
    id: "CAT-001",
    event_name: "Quarterly Board Meeting",
    event_date: "2025-12-15",
    event_time: "09:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-002",
    event_name: "Team Building Lunch",
    event_date: "2025-12-20",
    event_time: "12:30 PM",
    status: "Pending",
  },
  {
    id: "CAT-003",
    event_name: "Client Presentation",
    event_date: "2025-12-22",
    event_time: "02:00 PM",
    status: "Pending",
  },
  {
    id: "CAT-004",
    event_name: "Holiday Party",
    event_date: "2025-12-24",
    event_time: "06:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-005",
    event_name: "Project Kickoff",
    event_date: "2026-01-05",
    event_time: "10:00 AM",
    status: "Rejected",
  },
  {
    id: "CAT-006",
    event_name: "Annual General Meeting",
    event_date: "2026-01-10",
    event_time: "09:00 AM",
    status: "Pending",
  },
  {
    id: "CAT-007",
    event_name: "Marketing Workshop",
    event_date: "2026-01-15",
    event_time: "01:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-008",
    event_name: "Sales Training",
    event_date: "2026-01-20",
    event_time: "08:30 AM",
    status: "Pending",
  },
  {
    id: "CAT-009",
    event_name: "Product Launch",
    event_date: "2026-02-01",
    event_time: "06:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-010",
    event_name: "Executive Retreat",
    event_date: "2026-02-10",
    event_time: "12:00 PM",
    status: "Rejected",
  },
  {
    id: "CAT-011",
    event_name: "New Hire Orientation",
    event_date: "2026-02-15",
    event_time: "09:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-012",
    event_name: "Client Dinner",
    event_date: "2026-02-20",
    event_time: "07:00 PM",
    status: "Pending",
  },
];

export function CateringList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CateringRequest | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const itemsPerPage = 5;

  const handleSort = (key: keyof CateringRequest) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...mockData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderSortIcon = (key: keyof CateringRequest) => {
    if (sortConfig.key !== key) return <span style={{ opacity: 0.3 }}>↕</span>;
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div className="list-page">
      <div className="page-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Catering Requisitions</h1>
            <p>View and manage all catering requests</p>
          </div>
          <Link
            to="/forms/catering/new"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            + New Request
          </Link>
        </div>
      </div>
      <div className="list-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSort("id")}
                  style={{ cursor: "pointer" }}
                >
                  ID {renderSortIcon("id")}
                </th>
                <th
                  onClick={() => handleSort("event_name")}
                  style={{ cursor: "pointer" }}
                >
                  Event Name {renderSortIcon("event_name")}
                </th>
                <th
                  onClick={() => handleSort("event_date")}
                  style={{ cursor: "pointer" }}
                >
                  Date {renderSortIcon("event_date")}
                </th>
                <th
                  onClick={() => handleSort("event_time")}
                  style={{ cursor: "pointer" }}
                >
                  Time {renderSortIcon("event_time")}
                </th>
                <th
                  onClick={() => handleSort("status")}
                  style={{ cursor: "pointer" }}
                >
                  Status {renderSortIcon("status")}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.event_name}</td>
                  <td>{item.event_date}</td>
                  <td>{item.event_time}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Approved"
                          ? "success"
                          : item.status === "Pending"
                            ? "warning"
                            : "error"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <Link
                      to="/forms/catering/$id"
                      params={{ id: item.id }}
                      style={{
                        color: "var(--accent-color)",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="pagination-controls"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, mockData.length)} of{" "}
            {mockData.length} entries
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--border-color)",
                borderRadius: "0.5rem",
                background: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border-color)",
                  borderRadius: "0.5rem",
                  background:
                    currentPage === page
                      ? "var(--accent-color)"
                      : "var(--bg-tertiary)",
                  color: currentPage === page ? "white" : "var(--text-primary)",
                  cursor: "pointer",
                }}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--border-color)",
                borderRadius: "0.5rem",
                background: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                opacity: currentPage === totalPages ? 0.5 : 1,
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
