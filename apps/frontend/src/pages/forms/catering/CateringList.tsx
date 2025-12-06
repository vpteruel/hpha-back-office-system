import { Link } from "@tanstack/react-router";
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
];

export function CateringList() {
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
                <th>ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
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
      </div>
    </div>
  );
}
