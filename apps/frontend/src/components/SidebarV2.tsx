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

interface MenuGroup {
  id: string;
  title: string;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    id: "main",
    title: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: "📊", path: "/" },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    items: [
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
    ],
  },
  {
    id: "automations-group",
    title: "Automations",
    items: [
      {
        id: "automations",
        label: "Automations",
        icon: "🤖",
        path: "/automations",
      },
      {
        id: "closed-positions",
        label: "Closed Positions",
        icon: "⏳",
        path: "/automations/closed-positions",
        badge: "2",
      },
    ],
  },
  {
    id: "system",
    title: "System",
    items: [
      { id: "users", label: "Users", icon: "👥", path: "/users" },
      { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
    ],
  },
];

interface ModernSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function ModernSidebar({ isCollapsed, onToggle }: ModernSidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activeItemId = (() => {
    let bestMatch: string | null = null;
    let longestPathLength = -1;

    for (const group of menuGroups) {
      for (const item of group.items) {
        if (currentPath === item.path || currentPath.startsWith(item.path + "/")) {
          if (item.path.length > longestPathLength) {
            longestPathLength = item.path.length;
            bestMatch = item.id;
          }
        }
      }
    }
    return bestMatch;
  })();

  return (
    <aside className={`modern-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="modern-sidebar-header">
        <div className="modern-logo">
          <div className="logo-icon">{isCollapsed ? "🏥" : "🏥"}</div>
          {!isCollapsed && (
            <div className="logo-text">
              <span className="logo-title">Back Office</span>
              <span className="logo-subtitle">System</span>
            </div>
          )}
        </div>
        <button className="modern-toggle-btn" onClick={onToggle}>
          {isCollapsed ? "❯" : "❮"}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="modern-sidebar-nav">
        {menuGroups.map((group) => (
          <div key={group.id} className="modern-sidebar-group">
            {!isCollapsed && (
              <h3 className="modern-sidebar-group-title">{group.title}</h3>
            )}
            {isCollapsed && <div className="modern-sidebar-group-divider" />}
            <ul>
              {group.items.map((item) => {
                const isActive = activeItemId === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      activeProps={{}} 
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
          </div>
        ))}
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
