import { useTheme } from "../../context/ThemeContext";
import "../pages.css";
import "./SettingsPage.css";

export function SettingsPage() {
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme();

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

        <div className="settings-section">
          <h2>Color Theme</h2>
          <p className="settings-description">
            Choose a Material Design 3 accent color palette.
          </p>

          <div className="theme-selector" style={{ gap: '1.5rem', padding: '0.5rem 0', flexWrap: 'wrap' }}>
            {[
              { id: 'indigo', label: 'Indigo' },
              { id: 'rose', label: 'Rose' },
              { id: 'teal', label: 'Teal' },
              { id: 'amber', label: 'Amber' },
              { id: 'emerald', label: 'Emerald' },
              { id: 'violet', label: 'Violet' },
              { id: 'sky', label: 'Sky' },
            ].map((t) => (
              <div
                key={t.id}
                className="color-swatch-wrapper"
                onClick={() => setColorTheme(t.id as any)}
              >
                <button
                  className={`color-swatch-btn swatch-${t.id} ${colorTheme === t.id ? "active" : ""}`}
                  title={t.label}
                  aria-label={`Select ${t.label} theme`}
                />
                <span className={`color-swatch-label ${colorTheme === t.id ? "active" : ""}`}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
