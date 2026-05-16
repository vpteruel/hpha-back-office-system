import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate({ to: "/" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-layout">
      {/* Left Panel: Branding & Theme Visuals */}
      <div className="login-brand-panel">
        <div className="login-brand-content">
          <div className="login-brand-icon">
            ⚛️
          </div>
          <h1 className="login-brand-title">Back Office System</h1>
          <p className="login-brand-description">
            Securely access your enterprise tools, automated workflows, and corporate forms in one seamlessly integrated Material Design experience.
          </p>
        </div>
      </div>

      {/* Right Panel: Glassmorphic Forms */}
      <div className="login-form-panel">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Please enter your details to sign in.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="login-input" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="login-input" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-row">
              <label className="checkbox-group">
                <input type="checkbox" id="remember" />
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
