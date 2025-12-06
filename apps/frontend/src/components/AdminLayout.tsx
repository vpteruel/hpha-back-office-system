import type { ReactNode } from "react";
import { useState } from "react";
import "./AdminLayout.css";
import { Sidebar } from "./Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`main-content ${isSidebarCollapsed ? "expanded" : ""}`}>
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <button
                className="toggle-btn"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              >
                {isSidebarCollapsed ? "→" : "←"}
              </button>
              <h1>Back Office System</h1>
            </div>
            <div className="header-actions">
              <button className="notification-btn">🔔</button>
              <div className="user-profile">
                <span className="avatar">👤</span>
                <span className="user-name">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
