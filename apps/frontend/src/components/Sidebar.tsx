import { Link, useRouterState } from "@tanstack/react-router";
import "./Sidebar.css";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "📊", path: "/" },
  {
    id: "catering",
    label: "Catering Requisition",
    icon: "🍽️",
    path: "/forms/catering",
  },
  {
    id: "purchase",
    label: "Purchase Requisition",
    icon: "🛒",
    path: "/forms/purchase",
  },
  {
    id: "personal-expense",
    label: "Personal Expense",
    icon: "💳",
    path: "/forms/personal-expense",
  },
  {
    id: "travel-expense",
    label: "Travel Expense",
    icon: "✈️",
    path: "/forms/travel-expense",
  },
  {
    id: "surveillance",
    label: "Video Surveillance",
    icon: "📹",
    path: "/forms/surveillance",
  },
  { id: "users", label: "Users", icon: "👥", path: "/users" },
  { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
];

interface SidebarProps {
  isCollapsed: boolean;
}

export function Sidebar({ isCollapsed }: SidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">{isCollapsed ? "🏢" : "🏢 Forms Anyware"}</div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`nav-item ${currentPath === item.path ? "active" : ""}`}
                title={isCollapsed ? item.label : undefined}
              >
                <span className="icon">{item.icon}</span>
                {!isCollapsed && <span className="label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item" title={isCollapsed ? "Logout" : undefined}>
          <span className="icon">🚪</span>
          {!isCollapsed && <span className="label">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
