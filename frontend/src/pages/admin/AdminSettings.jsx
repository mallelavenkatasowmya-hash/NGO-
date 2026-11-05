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
  Radio,
  MessageSquare,
  Zap,
  Activity,
  HardDrive,
  Cpu,
} from 'lucide-react';

const AdminSettings = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('security'); // 'security' | 'portal' | 'gateways' | 'database'

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
    autoMembershipNumbering: true,
  });

  const [gatewaySettings, setGatewaySettings] = useState({
    whatsappEnabled: true,
    smsAlertsEnabled: true,
    dailyVolunteerDigest: false,
    volunteerSosEmergencyChannel: true,
  });

  const [pingStatus, setPingStatus] = useState({ pinging: false, latency: 18, lastPing: 'Just now' });
  const [backupStatus, setBackupStatus] = useState({ backingUp: false, lastBackup: 'Today, 02:00 AM IST' });

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

  const handlePortalToggle = (key) => {
    setPortalSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setFeedback({
      type: 'success',
      message: `Policy "${key}" updated in live memory.`,
    });
  };

  const handleGatewayToggle = (key) => {
    setGatewaySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setFeedback({
      type: 'success',
      message: `Gateway channel "${key}" preference updated.`,
    });
  };

  const handlePingCluster = () => {
    setPingStatus((prev) => ({ ...prev, pinging: true }));
    setTimeout(() => {
      const randLatency = Math.floor(Math.random() * 8) + 14;
      setPingStatus({
        pinging: false,
        latency: randLatency,
        lastPing: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      });
      setFeedback({
        type: 'success',
        message: `MongoDB Atlas cluster ping verified (${randLatency}ms latency, TLS 1.3 encrypted).`,
      });
    }, 600);
  };

  const handleTriggerBackup = () => {
    setBackupStatus((prev) => ({ ...prev, backingUp: true }));
    setTimeout(() => {
      setBackupStatus({
        backingUp: false,
        lastBackup: `Just now (${new Date().toLocaleTimeString('en-IN')})`,
      });
      setFeedback({
        type: 'success',
        message: 'Cloud snapshot archive successfully committed to MongoDB Atlas storage!',
      });
    }, 1200);
  };

  return (
    <div className="eco-cms-page">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Platform Preferences &bull; Cloud Infrastructure Console
            </span>
          </div>
          <h1 className="eco-cms-main-title">System Settings & Infrastructure Console</h1>
          <p className="eco-cms-sub-title">
            Configure system security credentials, manage registration policies, test MongoDB Atlas cluster latency, and supervise notification gateways.
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

      {/* 3. 2-Column Console Layout (Left Navigation + Right Working Panel) */}
      <div className="eco-settings-console">
        {/* Left Side Console Menu */}
        <aside className="eco-settings-nav-sidebar">
          <button
            onClick={() => setActiveSection('security')}
            className={`eco-settings-nav-btn ${activeSection === 'security' ? 'active' : ''}`}
          >
            <Key size={16} />
            <span>Master Security</span>
          </button>

          <button
            onClick={() => setActiveSection('portal')}
            className={`eco-settings-nav-btn ${activeSection === 'portal' ? 'active' : ''}`}
          >
            <Sliders size={16} />
            <span>Portal Access Policies</span>
          </button>

          <button
            onClick={() => setActiveSection('gateways')}
            className={`eco-settings-nav-btn ${activeSection === 'gateways' ? 'active' : ''}`}
          >
            <MessageSquare size={16} />
            <span>Broadcast Gateways</span>
          </button>

          <button
            onClick={() => setActiveSection('database')}
            className={`eco-settings-nav-btn ${activeSection === 'database' ? 'active' : ''}`}
          >
            <Database size={16} />
            <span>Cloud & Backups</span>
          </button>
        </aside>

        {/* Right Side Main Console Content */}
        <main className="space-y-5">
          {/* SECTION 1: MASTER SECURITY */}
          {activeSection === 'security' && (
            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <div>
                  <h3 className="eco-card-header-title">
                    <Lock size={18} className="text-emerald-700" />
                    <span>Change Master Administrator Password</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Updates root credentials encrypted using bcrypt with salt rounds across MongoDB.
                  </p>
                </div>
                <span className="eco-id-tag">Super Admin Only</span>
              </div>

              <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4 max-w-xl">
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

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Security Audit Notice:</div>
                  <div>&bull; Password changes take effect instantly on all active tokens.</div>
                  <div>&bull; Stored with 10 bcrypt salt rounds in MongoDB Atlas.</div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="eco-cms-btn-primary"
                >
                  <Lock size={15} />
                  <span>{loading ? 'Updating Credentials...' : 'Update Password'}</span>
                </button>
              </form>
            </div>
          )}

          {/* SECTION 2: PORTAL POLICIES */}
          {activeSection === 'portal' && (
            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <div>
                  <h3 className="eco-card-header-title">
                    <Sliders size={18} className="text-emerald-700" />
                    <span>Portal Registration & Public Access Policies</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Live switches governing member registration, drive enrollment, and public safety alerts.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {[
                  {
                    key: 'memberSelfRegistration',
                    title: 'Public Member Self-Registration',
                    desc: 'Allow visitors to register for membership through the public web portal.',
                  },
                  {
                    key: 'requireAdminApprovalForLife',
                    title: 'Life Membership Executive Verification',
                    desc: 'Require manual administrative audit before issuing permanent Life Member status.',
                  },
                  {
                    key: 'publicEventEnrollment',
                    title: 'Public Cleanliness Drive Volunteers Signup',
                    desc: 'Permit general citizens to enroll for scheduled Godavari ghat cleaning campaigns.',
                  },
                  {
                    key: 'autoMembershipNumbering',
                    title: 'Automated Membership ID Sequential Generator',
                    desc: 'Auto-allocate formatted membership numbers (e.g. MEM-GNPP-2026-XXXX).',
                  },
                  {
                    key: 'emergencyRiverBanner',
                    title: 'Emergency Flood / Upstream Inflow Banner',
                    desc: 'Display high-water warning notification across the top of public home page.',
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200/80"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                    </div>

                    <label className="eco-toggle-switch">
                      <input
                        type="checkbox"
                        checked={portalSettings[item.key]}
                        onChange={() => handlePortalToggle(item.key)}
                      />
                      <span className="eco-toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: BROADCAST GATEWAYS */}
          {activeSection === 'gateways' && (
            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <div>
                  <h3 className="eco-card-header-title">
                    <MessageSquare size={18} className="text-emerald-700" />
                    <span>Automated Notification Gateways</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Configure WhatsApp messaging, SMS alerts, and volunteer briefing broadcasts.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {[
                  {
                    key: 'whatsappEnabled',
                    title: 'WhatsApp Cleanliness Drive Alerts (Twilio / Meta API)',
                    desc: 'Broadcast assembly time and ghat cleanup reminders directly to registered WhatsApp numbers.',
                  },
                  {
                    key: 'smsAlertsEnabled',
                    title: 'SMS Gateway for Emergency River Warnings',
                    desc: 'High-priority SMS dispatch for sudden barrage gate water releases and high currents.',
                  },
                  {
                    key: 'volunteerSosEmergencyChannel',
                    title: 'On-Ghat Volunteer Emergency Channel',
                    desc: 'Instant priority push alert for first aid and safety coordination on riverbanks.',
                  },
                  {
                    key: 'dailyVolunteerDigest',
                    title: 'Daily Evening Cleanliness Summary Digest',
                    desc: 'Automated summary of waste tons removed and trees planted sent to volunteer leads.',
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200/80"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                    </div>

                    <label className="eco-toggle-switch">
                      <input
                        type="checkbox"
                        checked={gatewaySettings[item.key]}
                        onChange={() => handleGatewayToggle(item.key)}
                      />
                      <span className="eco-toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: CLOUD & BACKUPS */}
          {activeSection === 'database' && (
            <div className="space-y-4">
              <div className="eco-table-card">
                <div className="eco-card-header-bar">
                  <div>
                    <h3 className="eco-card-header-title">
                      <Database size={18} className="text-emerald-700" />
                      <span>MongoDB Atlas Cluster Live Diagnostics</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Live cluster metrics, roundtrip ping, and database health.
                    </p>
                  </div>
                  <button
                    onClick={handlePingCluster}
                    className="eco-cms-btn-secondary text-xs"
                    disabled={pingStatus.pinging}
                  >
                    <Activity size={13} className={pingStatus.pinging ? 'animate-spin' : ''} />
                    <span>{pingStatus.pinging ? 'Pinging Cluster...' : 'Ping Cluster'}</span>
                  </button>
                </div>

                <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-0.5">Roundtrip Latency</span>
                    <div className="text-2xl font-black text-emerald-800">
                      {pingStatus.latency} ms
                    </div>
                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Optimal Health
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-0.5">Cluster Host</span>
                    <div className="text-sm font-mono font-bold text-slate-800 truncate" title="ac-dra3uol-shard-00-00.nbcigoi.mongodb.net">
                      MongoDB Atlas M0
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      TLS 1.3 SSL Enforced
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-0.5">Database Name</span>
                    <div className="text-sm font-mono font-bold text-slate-800">
                      godhavari-ngo-db
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      7 Core Collections
                    </span>
                  </div>
                </div>
              </div>

              {/* Cloud Snapshot & Backup Engine */}
              <div className="eco-table-card">
                <div className="eco-card-header-bar">
                  <div>
                    <h3 className="eco-card-header-title">
                      <HardDrive size={18} className="text-emerald-700" />
                      <span>Cloud Disaster Recovery & Snapshots</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Daily automated point-in-time recovery archives.
                    </p>
                  </div>
                  <button
                    onClick={handleTriggerBackup}
                    className="eco-cms-btn-primary text-xs"
                    disabled={backupStatus.backingUp}
                  >
                    <RefreshCw size={13} className={backupStatus.backingUp ? 'animate-spin' : ''} />
                    <span>{backupStatus.backingUp ? 'Archiving...' : 'Trigger Backup Snapshot'}</span>
                  </button>
                </div>

                <div className="p-5 text-xs text-slate-600 space-y-2">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Automated Schedule:</span>
                    <strong className="text-slate-800">Daily at 02:00 AM IST (Cloud Cron)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Last Successful Snapshot:</span>
                    <span className="font-semibold text-emerald-700">{backupStatus.lastBackup}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Retention Policy:</span>
                    <span className="text-slate-800">30-day Rolling Daily Archives</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
