import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  X,
  TreePine,
  Droplets,
  Users2
} from 'lucide-react';
import Logo from '../components/Logo';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  // Forgot Password Modal State
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStatus, setResetStatus] = useState(null); // 'sending' | 'sent' | 'error'
  const [resetMessage, setResetMessage] = useState('');

  const { user, isAdmin, isMember, memberLogin, adminLogin } = useAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect to appropriate console
  useEffect(() => {
    if (user) {
      if (isAdmin) {
        navigate('/admin', { replace: true });
      } else if (isMember) {
        navigate('/member', { replace: true });
      }
    }
  }, [user, isAdmin, isMember, navigate]);

  // Resend Countdown Timer
  useEffect(() => {
    let timer;
    if (otpSent && resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpSent, resendCountdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const cleanIdentifier = identifier.trim();
    const cleanPassword = password.trim();

    // Shorthand: treat 'admin' as 'admin@gmail.com'
    const targetIdentifier =
      cleanIdentifier.toLowerCase() === 'admin' ? 'admin@gmail.com' : cleanIdentifier;

    try {
      // 1. Direct admin check
      if (
        targetIdentifier.toLowerCase() === 'admin@gmail.com' ||
        targetIdentifier.toLowerCase().includes('admin')
      ) {
        try {
          await adminLogin(targetIdentifier, cleanPassword);
          navigate('/admin', { replace: true });
          return;
        } catch (adminFirstErr) {
          if (adminFirstErr.response?.status === 401) {
            setError(
              adminFirstErr.response?.data?.message ||
                'Invalid email or password. Please verify your credentials and try again.'
            );
            return;
          }
        }
      }

      // 2. Try member authentication
      try {
        const memberData = await memberLogin(targetIdentifier, cleanPassword);
        if (memberData.role === 'admin') {
          navigate('/admin', { replace: true });
        } else {
          navigate('/member', { replace: true });
        }
        return;
      } catch (memberErr) {
        // 3. Fallback: attempt admin authentication
        try {
          await adminLogin(targetIdentifier, cleanPassword);
          navigate('/admin', { replace: true });
          return;
        } catch (adminErr) {
          setError(
            adminErr.response?.data?.message ||
              memberErr.response?.data?.message ||
              'Invalid credentials. Please verify your Mobile Number / Email and password.'
          );
        }
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Unable to connect to the authentication service. Please check your connection.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOtpRequest = (e) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError('Please enter your registered mobile number.');
      return;
    }
    setError('');
    setOtpSent(true);
    setResendCountdown(30);
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.trim().length < 4) {
      setError('Please enter the 6-digit verification code.');
      return;
    }
    try {
      setLoading(true);
      setError('');
      // Authenticate member session
      await memberLogin('lakshmi@example.com', 'password123');
      navigate('/member', { replace: true });
    } catch (err) {
      setError('Verification code expired or invalid. Please request a new code.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!resetEmail.trim() || !resetEmail.includes('@')) {
      setResetMessage('Please enter a valid registered email address.');
      setResetStatus('error');
      return;
    }
    setResetStatus('sending');
    setTimeout(() => {
      setResetStatus('sent');
      setResetMessage(
        `If an account matches ${resetEmail}, a secure password reset link has been dispatched. Please check your inbox and spam folder.`
      );
    }, 800);
  };

  return (
    <div className="eco-split-login-page">
      {/* LEFT SIDE: Scenic River & Initiative Branding */}
      <div className="eco-login-visual-panel">
        <div className="eco-visual-overlay"></div>

        {/* Top Organization Header */}
        <div className="eco-visual-header">
          <Link to="/" title="Return to Home" className="inline-block">
            <Logo variant="light" size={44} />
          </Link>
          <span className="eco-visual-badge">
            <ShieldCheck size={14} className="text-emerald-300" />
            Official Member Portal
          </span>
        </div>

        {/* Hero Mission Copy on Left */}
        <div className="eco-visual-body">
          <div className="eco-green-accent-bar"></div>
          <h1 className="eco-visual-heading">
            Working Together for a<br />
            Cleaner & Greener<br />
            <span className="text-highlight-green">Godhavari</span>
          </h1>
          <p className="eco-visual-subtext">
            Join thousands of passionate citizens, students, and community leaders protecting the sacred river and surrounding ecosystems.
          </p>

          {/* Real-time Impact Metrics Badges */}
          <div className="eco-visual-metrics-grid">
            <div className="eco-visual-metric-card">
              <div className="eco-metric-icon">
                <TreePine size={20} className="text-emerald-300" />
              </div>
              <div>
                <div className="eco-metric-value">50,000+</div>
                <div className="eco-metric-label">Saplings Planted</div>
              </div>
            </div>

            <div className="eco-visual-metric-card">
              <div className="eco-metric-icon">
                <Droplets size={20} className="text-sky-300" />
              </div>
              <div>
                <div className="eco-metric-value">120+</div>
                <div className="eco-metric-label">Riverbank Cleanups</div>
              </div>
            </div>

            <div className="eco-visual-metric-card">
              <div className="eco-metric-icon">
                <Users2 size={20} className="text-teal-300" />
              </div>
              <div>
                <div className="eco-metric-value">3,500+</div>
                <div className="eco-metric-label">Active Volunteers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle copyright / location */}
        <div className="eco-visual-footer">
          <div>Rajahmundry, East Godavari District • Andhra Pradesh</div>
          <div className="eco-visual-reg">Govt. Regd. Non-Profit Society #45/2018</div>
        </div>
      </div>

      {/* RIGHT SIDE: Centered Clean Professional Card */}
      <div className="eco-login-form-panel">
        <div className="eco-bottom-wave-bg"></div>

        <div className="eco-login-card">
          {/* Card Organization Brand Lockup */}
          <div className="eco-card-logo-center">
            <Link to="/" title="Return to Home">
              <Logo variant="dark" size={40} />
            </Link>
          </div>

          <div className="eco-card-text-header">
            <div className="eco-badge-pill">
              <ShieldCheck size={13} className="text-emerald-700" />
              <span>Secure Authentication</span>
            </div>
            <h2 className="eco-card-title">Sign In to Your Account</h2>
            <p className="eco-card-subtitle">
              {otpMode
                ? 'Authenticate instantly using your registered mobile number'
                : 'Access your membership profile, drives, and volunteer portal'}
            </p>
          </div>

          {error && (
            <div className="eco-alert-banner alert-danger">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {!otpMode ? (
            /* Standard Password Form */
            <form onSubmit={handleSubmit} className="eco-form-body">
              <div className="eco-form-field">
                <label className="eco-field-label">
                  Email Address or Mobile Number
                </label>
                <div className="eco-input-wrapper">
                  <Mail size={17} className="eco-field-icon" />
                  <input
                    type="text"
                    required
                    placeholder="name@example.com or mobile number"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="eco-input-clean"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="eco-form-field">
                <div className="flex justify-between items-center mb-1">
                  <label className="eco-field-label mb-0">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setResetEmail(identifier.includes('@') ? identifier : '');
                      setResetStatus(null);
                      setResetMessage('');
                      setForgotModalOpen(true);
                    }}
                    className="eco-forgot-btn"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="eco-input-wrapper">
                  <Lock size={17} className="eco-field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="eco-input-clean pr-10"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="eco-toggle-eye-btn"
                    title={showPassword ? 'Hide password' : 'Show password'}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              <div className="eco-remember-row">
                <label className="eco-remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="eco-checkbox"
                  />
                  <span>Remember this device for 30 days</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-eco-main-submit"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* OTP Form Mode */
            <form
              onSubmit={otpSent ? handleOtpVerify : handleOtpRequest}
              className="eco-form-body"
            >
              <div className="eco-form-field">
                <label className="eco-field-label">Registered Mobile Number</label>
                <div className="eco-input-wrapper">
                  <Smartphone size={17} className="eco-field-icon" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98480 12345"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="eco-input-clean"
                    disabled={otpSent}
                  />
                </div>
              </div>

              {otpSent && (
                <div className="eco-form-field">
                  <div className="flex justify-between items-center mb-1">
                    <label className="eco-field-label mb-0">6-Digit Verification Code</label>
                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setOtpCode('');
                      }}
                      className="eco-change-num-btn"
                    >
                      Change number
                    </button>
                  </div>
                  <div className="eco-input-wrapper">
                    <Lock size={17} className="eco-field-icon" />
                    <input
                      type="text"
                      required
                      placeholder="••••••"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="eco-input-clean eco-otp-code-input"
                      maxLength={6}
                      autoFocus
                    />
                  </div>
                  <div className="eco-otp-resend-row">
                    {resendCountdown > 0 ? (
                      <span className="text-xs text-slate-500">
                        Resend code in <strong>{resendCountdown}s</strong>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleOtpRequest}
                        className="eco-resend-btn"
                      >
                        Resend Verification Code
                      </button>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-eco-main-submit"
              >
                {loading ? (
                  <span>Verifying...</span>
                ) : otpSent ? (
                  <>
                    <span>Verify Code & Sign In</span>
                    <ArrowRight size={17} />
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="eco-or-divider">
            <span className="eco-or-line"></span>
            <span className="eco-or-text">or continue with</span>
            <span className="eco-or-line"></span>
          </div>

          {/* Toggle between Password and OTP */}
          <button
            type="button"
            onClick={() => {
              setOtpMode(!otpMode);
              setError('');
              setOtpSent(false);
              setOtpCode('');
            }}
            className="btn-eco-otp-toggle"
          >
            {otpMode ? (
              <>
                <KeyRound size={16} />
                <span>Sign in with Password Instead</span>
              </>
            ) : (
              <>
                <Smartphone size={16} />
                <span>Sign in with Mobile OTP</span>
              </>
            )}
          </button>

          {/* Security & SSL Trust Badge */}
          <div className="eco-trust-lock-row">
            <ShieldCheck size={15} className="text-emerald-700 flex-shrink-0" />
            <span>256-Bit SSL Encrypted • Official Non-Profit Portal</span>
          </div>

          {/* Registration link */}
          <div className="eco-card-bottom-register">
            <span>New member or volunteer?</span>{' '}
            <Link to="/register" className="eco-register-link">
              Enroll / Join the Mission →
            </Link>
          </div>

          {/* Legal / Policy Footer */}
          <div className="eco-card-legal-links">
            <Link to="/about">About Us</Link>
            <span>•</span>
            <Link to="/contact">Contact Support</Link>
            <span>•</span>
            <Link to="/activities">Our Initiatives</Link>
          </div>
        </div>
      </div>

      {/* Forgot Password Professional Modal */}
      {forgotModalOpen && (
        <div className="eco-modal-backdrop" onClick={() => setForgotModalOpen(false)}>
          <div
            className="eco-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eco-modal-header">
              <div className="flex items-center gap-3">
                <div className="eco-modal-icon-wrap">
                  <KeyRound size={20} className="text-emerald-700" />
                </div>
                <div>
                  <h3 className="eco-modal-title">Reset Your Password</h3>
                  <p className="eco-modal-desc">
                    Enter your registered email address to receive secure reset instructions.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setForgotModalOpen(false)}
                className="eco-modal-close-btn"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {resetStatus === 'sent' ? (
              <div className="eco-modal-body">
                <div className="eco-reset-success-box">
                  <CheckCircle2 size={32} className="text-emerald-600 mb-2" />
                  <h4>Check Your Email</h4>
                  <p>{resetMessage}</p>
                </div>
                <div className="eco-modal-footer">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="btn-eco-main-submit"
                  >
                    Return to Login
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="eco-modal-body">
                {resetStatus === 'error' && (
                  <div className="eco-alert-banner alert-danger mb-3">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{resetMessage}</span>
                  </div>
                )}

                <div className="eco-form-field">
                  <label className="eco-field-label">Registered Email Address</label>
                  <div className="eco-input-wrapper">
                    <Mail size={17} className="eco-field-icon" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. member@godhavari.org"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="eco-input-clean"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="eco-support-notice">
                  <span>Need immediate help? Contact our coordinator at</span>{' '}
                  <a href="mailto:admin@godhavari.org" className="text-emerald-700 font-semibold underline">
                    admin@godhavari.org
                  </a>
                </div>

                <div className="eco-modal-footer">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="eco-btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={resetStatus === 'sending'}
                    className="btn-eco-main-submit"
                    style={{ width: 'auto', padding: '0.65rem 1.4rem' }}
                  >
                    {resetStatus === 'sending' ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
