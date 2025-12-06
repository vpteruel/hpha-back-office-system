import { useTheme } from "../../context/ThemeContext";
import "../pages.css";
import "./SettingsPage.css";

export function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Configure system settings</p>
      </div>
      <div className="list-container">
        <div className="settings-section">
          <h2>Appearance</h2>
          <p className="settings-description">
            Customize how the application looks on your device.
          </p>

          <div className="theme-selector">
            <button
              className={`theme-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
            >
              <span className="theme-icon">☀️</span>
              <span className="theme-label">Light</span>
            </button>
            <button
              className={`theme-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
            >
              <span className="theme-icon">🌙</span>
              <span className="theme-label">Dark</span>
            </button>
            <button
              className={`theme-btn ${theme === "system" ? "active" : ""}`}
              onClick={() => setTheme("system")}
            >
              <span className="theme-icon">💻</span>
              <span className="theme-label">System</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
