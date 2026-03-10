import { useNavigate } from "@tanstack/react-router";
import "./Login.css";

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials against the backend API here.
    // For now, simply navigate to the root dashboard route.
    navigate({ to: "/" });
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
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="login-input" 
                placeholder="name@company.com" 
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

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
