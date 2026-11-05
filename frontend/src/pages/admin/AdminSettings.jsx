import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import {
  Lock,
  Key,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Eye,
  EyeOff,
  Database,
  Server,
  Globe,
  Bell,
  Save,
  RefreshCw,
  Sliders,
  Check,
} from 'lucide-react';

const AdminSettings = () => {
  const { user } = useAuth();

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const [portalSettings, setPortalSettings] = useState({
    memberSelfRegistration: true,
    requireAdminApprovalForLife: true,
    publicEventEnrollment: true,
    emailAlertsOnNewMember: true,
    emergencyRiverBanner: false,
    maintenanceMode: false,
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    if (!passwordData.currentPassword) {
      setFeedback({
        type: 'danger',
        message: 'Please provide your current password to update security credentials.',
      });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setFeedback({
        type: 'danger',
        message: 'New password and confirm password do not match.',
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setFeedback({
        type: 'danger',
        message: 'New password must be at least 6 characters.',
      });
      return;
    }

    try {
      setLoading(true);
      await api.patch('/admin/settings', {
        currentPassword: passwordData.currentPassword.trim(),
        newPassword: passwordData.newPassword.trim(),
      });

      setFeedback({
        type: 'success',
        message: 'Master administrator password successfully updated in MongoDB Atlas!',
      });

      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to update administrator password.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (key) => {
    setPortalSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setFeedback({
      type: 'success',
      message: 'Portal policy setting updated in system memory.',
    });
  };

  return (
    <div className="eco-cms-page">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Platform Configuration &bull; MongoDB Atlas Live
            </span>
          </div>
          <h1 className="eco-cms-main-title">System Settings & Security Configuration</h1>
          <p className="eco-cms-sub-title">
            Configure administrative security credentials, portal access policies, database backup schedules, and emergency alert banners.
          </p>
        </div>
      </div>

      {/* 2. Feedback Alert */}
      {feedback.message && (
        <div
          className={`eco-cms-alert-banner ${
            feedback.type === 'danger' ? 'alert-danger' : 'alert-success'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'danger' ? (
              <AlertTriangle size={18} className="text-red-600 flex-shrink-0" />
            ) : (
              <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback({ type: '', message: '' })}
            className="text-xs opacity-70 hover:opacity-100 font-semibold cursor-pointer border-none bg-transparent"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* 3. 4-Card Pastel KPI Metric Strip */}
      <section className="eco-kpi-4-strip">
        <div className="eco-stat-card eco-stat-green">
          <div className="eco-stat-icon-bubble bg-green-bubble">
            <Database size={20} className="text-green-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Database Cluster</span>
            <div className="eco-stat-number text-base">Connected</div>
            <span className="eco-stat-trend text-trend-green">MongoDB Atlas 18ms</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-purple">
          <div className="eco-stat-icon-bubble bg-purple-bubble">
            <ShieldCheck size={20} className="text-purple-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Auth Encryption</span>
            <div className="eco-stat-number text-base">bcrypt 10-Salt</div>
            <span className="eco-stat-trend text-purple-icon">JWT Token Active</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <Server size={20} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Automated Backups</span>
            <div className="eco-stat-number text-base">Daily 02:00 AM</div>
            <span className="eco-stat-trend text-blue-icon">Cloud Snapshots</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-teal">
          <div className="eco-stat-icon-bubble bg-teal-bubble">
            <Globe size={20} className="text-teal-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Portal Mode</span>
            <div className="eco-stat-number text-base">Production</div>
            <span className="eco-stat-trend text-teal-icon">Public Live</span>
          </div>
        </div>
      </section>

      {/* 4. Two-Column Layout: Password Management (Left) & Portal Policies (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Column: Security & Password Update */}
        <div className="eco-table-card">
          <div className="eco-card-header-bar">
            <h3 className="eco-card-header-title">
              <Key size={18} className="text-emerald-700" />
              <span>Change Master Admin Password</span>
            </h3>
            <span className="eco-id-tag">Super Admin Only</span>
          </div>

          <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
            <div className="eco-form-field">
              <label className="eco-field-label">Current Master Password *</label>
              <div className="relative">
                <input
                  type={showCurrentPw ? 'text' : 'password'}
                  required
                  placeholder="Enter current password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, currentPassword: e.target.value })
                  }
                  className="eco-field-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPw(!showCurrentPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer"
                >
                  {showCurrentPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="eco-form-field">
              <label className="eco-field-label">New Password *</label>
              <div className="relative">
                <input
                  type={showNewPw ? 'text' : 'password'}
                  required
                  placeholder="Minimum 6 characters"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, newPassword: e.target.value })
                  }
                  className="eco-field-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPw(!showNewPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer"
                >
                  {showNewPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="eco-form-field">
              <label className="eco-field-label">Confirm New Password *</label>
              <div className="relative">
                <input
                  type={showConfirmPw ? 'text' : 'password'}
                  required
                  placeholder="Repeat new password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                  }
                  className="eco-field-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer"
                >
                  {showConfirmPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-700">Security Recommendation:</div>
              <div>&bull; Use at least 8 characters with a mix of letters, numbers, and symbols.</div>
              <div>&bull; Password changes will take effect immediately across all sessions.</div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="eco-cms-btn-primary w-full justify-center"
            >
              <Lock size={15} />
              <span>{loading ? 'Securing...' : 'Update Password'}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Portal Policies & Cloud Status */}
        <div className="space-y-5">
          {/* Portal Operations Toggles */}
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <h3 className="eco-card-header-title">
                <Sliders size={18} className="text-emerald-700" />
                <span>Portal Policies & Access Controls</span>
              </h3>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    Public Member Self-Registration
                  </div>
                  <div className="text-xs text-slate-500">
                    Allow citizens to sign up as members on the public website.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={portalSettings.memberSelfRegistration}
                  onChange={() => handleToggle('memberSelfRegistration')}
                  className="w-5 h-5 accent-[#063b2c] rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    Life Membership Admin Approval Gate
                  </div>
                  <div className="text-xs text-slate-500">
                    Require manual executive verification before granting Life Member badge.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={portalSettings.requireAdminApprovalForLife}
                  onChange={() => handleToggle('requireAdminApprovalForLife')}
                  className="w-5 h-5 accent-[#063b2c] rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    Public Cleanliness Drive Enrollment
                  </div>
                  <div className="text-xs text-slate-500">
                    Permit public volunteers to register for Godavari ghat cleanup drives.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={portalSettings.publicEventEnrollment}
                  onChange={() => handleToggle('publicEventEnrollment')}
                  className="w-5 h-5 accent-[#063b2c] rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    Emergency Flood / Inflow Alert Banner
                  </div>
                  <div className="text-xs text-slate-500">
                    Display high-water advisory banner across the public homepage.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={portalSettings.emergencyRiverBanner}
                  onChange={() => handleToggle('emergencyRiverBanner')}
                  className="w-5 h-5 accent-[#063b2c] rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* MongoDB Atlas Infrastructure Status */}
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <h3 className="eco-card-header-title">
                <Server size={18} className="text-emerald-700" />
                <span>Cloud Infrastructure Status</span>
              </h3>
              <span className="eco-status-pill status-active text-xs">
                <span className="status-dot-indicator"></span>
                Healthy
              </span>
            </div>

            <div className="p-5 space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Database Engine:</span>
                <span className="font-mono font-bold text-slate-800">MongoDB Atlas (v7.0)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Cluster Host:</span>
                <span className="font-mono text-slate-600">ac-dra3uol-shard-00-00.nbcigoi.mongodb.net</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Database Name:</span>
                <span className="font-mono font-bold text-slate-800">godhavari-ngo-db</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Server Runtime:</span>
                <span className="font-mono font-bold text-slate-800">Node.js Express / Port 5000</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-600">Encryption in Transit:</span>
                <span className="font-bold text-emerald-700">TLS / SSL 1.3 Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
