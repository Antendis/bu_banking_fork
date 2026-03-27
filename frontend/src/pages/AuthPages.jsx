import { Link } from 'react-router-dom'
import { useState } from 'react'

function BrandMark() {
  return (
    <div className="brand" aria-label="bu banking">
      <div className="logo" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shield-grad" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#39d0c6" />
              <stop offset="1" stopColor="#9a86ff" />
            </linearGradient>
          </defs>
          <path d="M32 6C20 6 12 10 12 10v18c0 14.5 16 26.5 20 30 4-3.5 20-15.5 20-30V10s-8-4-20-4z" fill="url(#shield-grad)" fillOpacity="0.2" stroke="url(#shield-grad)" strokeWidth="2" strokeLinejoin="round" />
          <path className="bu-inner" d="M26 22v12c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h3c2.8 0 5-2.2 5-5s-2.2-5-5-5h-3v-2h-8zm6 3h2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v-6z" fill="white" />
        </svg>
      </div>
      <div className="brand-text">
        <strong>bu banking</strong>
        <small>SIMPLE. SECURE. YOURS.</small>
      </div>
    </div>
  )
}

function AuthShell({ title, description, children }) {
  return (
    <main className="page">
      <div className="shell">
        <section className="hero" aria-labelledby="welcome-heading">
          <div className="hero-topbar">
            <BrandMark />
          </div>

          <div className="hero-copy">
            <div className="tagline">Distinctive digital banking</div>
            <h1 id="welcome-heading">{title}</h1>
            <p>{description}</p>
          </div>

          <div className="hero-spacer" aria-hidden="true" />
        </section>

        <section className="card-wrap" aria-label="Auth panel">
          <div className="card">{children}</div>
        </section>
      </div>
    </main>
  )
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <AuthShell
      title="Secure banking with a calmer, clearer feel."
      description=""
    >
      <span className="eyebrow" aria-label="Security notice">✦ Secure login</span>
      <h2>Welcome back</h2>
      <p className="card-intro">Sign in with your email or customer ID. The page stays laptop-first, one-screen, and consistent with the bu banking brand language.</p>

      <div className="shortcut-row" aria-label="Secondary actions">
        <Link className="shortcut" to="/signup">Create account</Link>
        <Link className="shortcut" to="/forgot-password">Reset password</Link>
        <span className="shortcut">Distinct bu branding</span>
      </div>

      <form className="form-grid">
        <div className="field">
          <label htmlFor="identity">Email or customer ID</label>
          <span className="hint" id="identity-hint">Example: alex@email.com or 12345678</span>
          <input id="identity" type="text" autoComplete="username" aria-describedby="identity-hint" placeholder="Enter your email or customer ID" />
        </div>

        <div className="field">
          <div className="inline-row">
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <div className="password-wrapper">
            <input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              autoComplete="current-password" 
              placeholder="Enter your password" 
            />
            <button 
              className="password-toggle" 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </button>
          </div>
        </div>

        <div className="inline-row">
          <label className="check" htmlFor="remember-me">
            <input id="remember-me" type="checkbox" />
            <span>Remember this device for 30 days</span>
          </label>
          <a href="#">Security tips</a>
        </div>

        <button className="btn btn-primary" type="button">Log in securely</button>
        <div className="or">or</div>
        <button className="btn btn-secondary" type="button">Use Face ID / Fingerprint</button>
        <span className="hint">Available on supported devices and browsers.</span>
      </form>

      <div className="support-box" role="note" aria-label="Help and support">
        <strong>Need help getting in?</strong>
        Recover your account, unlock access, or report suspicious activity right away.
        <div className="sub-links">
          <Link to="/signup">Open a new account</Link>
          <Link to="/forgot-password">Recover account</Link>
          <a href="#">Report fraud</a>
        </div>
      </div>

      <p className="legal">By continuing, you agree to secure device checks and fraud monitoring designed to protect your account.</p>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}

export function SignupPage() {
  return (
    <AuthShell
      title="Open your account in minutes."
      description="A cleaner onboarding flow with the same bu banking look carried through every step."
    >
      <Link className="back-link" to="/">← Back to login</Link>
      <span className="eyebrow">✦ Distinctive onboarding</span>
      <h2>Create account</h2>
      <p className="card-intro">Use this page as the first step in the bu banking onboarding flow.</p>

      <form className="form-grid">
        <div className="split-two">
          <div className="field">
            <label htmlFor="first">First name</label>
            <input id="first" type="text" placeholder="Alex" />
          </div>
          <div className="field">
            <label htmlFor="last">Last name</label>
            <input id="last" type="text" placeholder="Taylor" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="alex@email.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" placeholder="07123 456789" />
        </div>
        <div className="split-two">
          <div className="field">
            <label htmlFor="pass">Create password</label>
            <input id="pass" type="password" placeholder="Create a secure password" />
          </div>
          <div className="field">
            <label htmlFor="confirm">Confirm password</label>
            <input id="confirm" type="password" placeholder="Repeat password" />
          </div>
        </div>
        <button className="btn btn-primary" type="button">Continue</button>
      </form>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}

export function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset access without the stress."
      description="A straightforward recovery flow for customers who need to get back into their account quickly and securely."
    >
      <Link className="back-link" to="/">← Back to login</Link>
      <span className="eyebrow">Password recovery</span>
      <h2>Reset your password</h2>
      <p className="card-intro">Enter the email or customer ID linked to your bu banking account and we’ll guide you through a secure reset flow.</p>

      <form className="form-grid">
        <div className="field">
          <label htmlFor="recover-identity">Email or customer ID</label>
          <input id="recover-identity" type="text" placeholder="alex@email.com or 12345678" />
        </div>
        <button className="btn btn-primary" type="button">Send recovery link</button>
      </form>

      <div className="support-box">
        <strong>Locked out or noticed suspicious activity?</strong>
        Show support options, device verification, or fraud-call actions here in the real product flow.
      </div>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}
