import { Link } from "@tanstack/react-router";
import type { Column } from "../../../components/DataTable";
import { DataTable } from "../../../components/DataTable";
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
  {
    id: "CAT-013",
    event_name: "Strategy Meeting",
    event_date: "2026-03-01",
    event_time: "10:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-014",
    event_name: "Department Lunch",
    event_date: "2026-03-05",
    event_time: "12:30 PM",
    status: "Rejected",
  },
  {
    id: "CAT-015",
    event_name: "Vendor Presentation",
    event_date: "2026-03-10",
    event_time: "03:00 PM",
    status: "Pending",
  },
  {
    id: "CAT-016",
    event_name: "Board Meeting",
    event_date: "2026-03-15",
    event_time: "09:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-017",
    event_name: "Team Outing",
    event_date: "2026-03-20",
    event_time: "01:00 PM",
    status: "Pending",
  },
  {
    id: "CAT-018",
    event_name: "Project Review",
    event_date: "2026-04-01",
    event_time: "11:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-019",
    event_name: "Client Workshop",
    event_date: "2026-04-05",
    event_time: "02:00 PM",
    status: "Rejected",
  },
  {
    id: "CAT-020",
    event_name: "Holiday Celebration",
    event_date: "2026-04-10",
    event_time: "06:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-021",
    event_name: "Team Meeting",
    event_date: "2026-04-15",
    event_time: "10:00 AM",
    status: "Pending",
  },
  {
    id: "CAT-022",
    event_name: "Budget Planning",
    event_date: "2026-04-20",
    event_time: "09:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-023",
    event_name: "Executive Briefing",
    event_date: "2026-04-25",
    event_time: "11:00 AM",
    status: "Pending",
  },
  {
    id: "CAT-024",
    event_name: "Sales Meeting",
    event_date: "2026-05-01",
    event_time: "02:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-025",
    event_name: "Product Demo",
    event_date: "2026-05-05",
    event_time: "03:00 PM",
    status: "Rejected",
  },
  {
    id: "CAT-026",
    event_name: "Marketing Strategy Session",
    event_date: "2026-05-10",
    event_time: "01:00 PM",
    status: "Pending",
  },
  {
    id: "CAT-027",
    event_name: "Client Appreciation Event",
    event_date: "2026-05-15",
    event_time: "07:00 PM",
    status: "Approved",
  },
  {
    id: "CAT-028",
    event_name: "Annual Review Meeting",
    event_date: "2026-05-20",
    event_time: "09:00 AM",
    status: "Pending",
  },
  {
    id: "CAT-029",
    event_name: "Team Training Session",
    event_date: "2026-06-01",
    event_time: "10:00 AM",
    status: "Approved",
  },
  {
    id: "CAT-030",
    event_name: "Company Picnic",
    event_date: "2026-06-05",
    event_time: "12:00 PM",
    status: "Rejected",
  },
  {
    id: "CAT-031",
    event_name: "Innovation Workshop",
    event_date: "2026-06-10",
    event_time: "02:00 PM",
    status: "Pending",
  },
];

export function CateringList() {
  const columns: Column<CateringRequest>[] = [
    { key: "id", header: "ID", sortable: true },
    { key: "event_name", header: "Event Name", sortable: true },
    { key: "event_date", header: "Date", sortable: true },
    { key: "event_time", header: "Time", sortable: true },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (item) => (
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
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (item) => (
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
      ),
    },
  ];

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
        <DataTable data={mockData} columns={columns} itemsPerPage={10} />
      </div>
    </div>
  );
}
