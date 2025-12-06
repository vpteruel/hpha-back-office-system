import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import "./ModernSidebar.css";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "📊", path: "/" },
  { id: "users", label: "Users", icon: "👥", path: "/users" },
  {
    id: "catering",
    label: "Catering",
    icon: "🍽️",
    path: "/forms/catering",
    badge: "2",
  },
  {
    id: "surveillance",
    label: "Surveillance",
    icon: "📹",
    path: "/forms/surveillance",
  },
  {
    id: "purchase",
    label: "Purchase",
    icon: "🛒",
    path: "/forms/purchase",
    badge: "5",
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
  { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
];

interface ModernSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function ModernSidebar({ isCollapsed, onToggle }: ModernSidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className={`modern-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="modern-sidebar-header">
        <div className="modern-logo">
          <div className="logo-icon">{isCollapsed ? "📋" : "📋"}</div>
          {!isCollapsed && (
            <div className="logo-text">
              <span className="logo-title">Forms</span>
              <span className="logo-subtitle">Anywhere</span>
            </div>
          )}
        </div>
        <button className="modern-toggle-btn" onClick={onToggle}>
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="modern-sidebar-nav">
        <ul>
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            const isHovered = hoveredItem === item.id;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`modern-nav-item ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="modern-nav-icon">{item.icon}</span>
                  {!isCollapsed && (
                    <>
                      <span className="modern-nav-label">{item.label}</span>
                      {item.badge && (
                        <span className="modern-nav-badge">{item.badge}</span>
                      )}
                    </>
                  )}
                  {isCollapsed && isHovered && (
                    <div className="modern-tooltip">{item.label}</div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="modern-sidebar-footer">
        <button
          className="modern-nav-item logout-btn"
          onMouseEnter={() => setHoveredItem("logout")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className="modern-nav-icon">🚪</span>
          {!isCollapsed && <span className="modern-nav-label">Logout</span>}
          {isCollapsed && hoveredItem === "logout" && (
            <div className="modern-tooltip">Logout</div>
          )}
        </button>
      </div>
    </aside>
  );
}
