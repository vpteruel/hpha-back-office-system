import type { ReactNode } from "react";
import { useState } from "react";
import "./ModernAdminLayout.css";
import { ModernSidebar } from "./ModernSidebar";

interface ModernAdminLayoutProps {
  children: ReactNode;
}

export function ModernAdminLayout({ children }: ModernAdminLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="modern-admin-layout">
      <ModernSidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div
        className={`modern-main-content ${isSidebarCollapsed ? "expanded" : ""}`}
      >
        <header className="modern-header">
          <div className="modern-header-content">
            <div className="modern-search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="modern-header-actions">
              <button className="modern-icon-btn" title="Notifications">
                <span className="notification-badge">3</span>
                🔔
              </button>
              <button className="modern-icon-btn" title="Messages">
                <span className="message-badge">5</span>
                💬
              </button>
              <div className="modern-user-menu">
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
                  alt="User"
                  className="user-avatar"
                />
                <div className="user-info">
                  <span className="user-name">Admin User</span>
                  <span className="user-role">Administrator</span>
                </div>
                <span className="dropdown-icon">▼</span>
              </div>
            </div>
          </div>
        </header>
        <main className="modern-content">{children}</main>
      </div>
    </div>
  );
}
