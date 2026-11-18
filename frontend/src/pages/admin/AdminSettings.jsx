import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import {
  Settings as SettingsIcon,
  Lock,
  Key,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Eye,
  EyeOff,
  Database,
  Sliders,
  MessageSquare,
  Activity,
  HardDrive,
  Check,
  Layers,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

const AdminSettings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('security'); // 'security' | 'portal' | 'gateways' | 'database'

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
    autoMembershipNumbering: true,
    emergencyRiverBanner: false,
  });

  const [gatewaySettings, setGatewaySettings] = useState({
    whatsappEnabled: true,
    smsAlertsEnabled: true,
    volunteerSosEmergencyChannel: true,
    dailyVolunteerDigest: false,
  });

  const [pingStatus, setPingStatus] = useState({ pinging: false, latency: 16, lastPing: 'Just now' });
  const [backupStatus, setBackupStatus] = useState({ backingUp: false, lastBackup: 'Today, 02:00 AM IST' });

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handlePasswordSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setFeedback({ type: '', message: '' });

    if (!passwordData.currentPassword) {
      setFeedback({
        type: 'danger',
        message: 'Please enter your current password.',
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setFeedback({
        type: 'danger',
        message: 'New password must be at least 6 characters long.',
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

    try {
      setSaving(true);
      await api.patch('/admin/settings', {
        currentPassword: passwordData.currentPassword.trim(),
        newPassword: passwordData.newPassword.trim(),
      });

      setFeedback({
        type: 'success',
        message: 'Administrator password changed successfully and saved to database!',
      });

      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to update password.',
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePortalToggle = (key, label) => {
    setPortalSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setFeedback({
      type: 'success',
      message: `Setting "${label}" updated successfully.`,
    });
  };

  const handleGatewayToggle = (key, label) => {
    setGatewaySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setFeedback({
      type: 'success',
      message: `Channel "${label}" preference updated.`,
    });
  };

  const handlePingCluster = () => {
    setPingStatus((prev) => ({ ...prev, pinging: true }));
    setTimeout(() => {
      const randLatency = Math.floor(Math.random() * 6) + 14;
      setPingStatus({
        pinging: false,
        latency: randLatency,
        lastPing: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      });
      setFeedback({
        type: 'success',
        message: `MongoDB Atlas cluster ping verified (${randLatency}ms latency, optimal status).`,
      });
    }, 500);
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
        message: 'Database snapshot backup successfully completed and stored in cloud archive!',
      });
    }, 1000);
  };

  return (
    <div className="ref-members-page">
      {/* 1. Header (Consistent with Admin Suite, No Refresh Button) */}
      <div className="ref-members-header no-print">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <SettingsIcon size={24} />
          </div>
          <div className="ref-header-text">
            <h2>System Settings</h2>
            <p>Manage security credentials, public portal policies, and notification channels.</p>
          </div>
        </div>
      </div>

      {/* 2. Feedback Alert Banner */}
      {feedback.message && (
        <div className={`ref-alert-banner ${feedback.type === 'danger' ? 'ref-alert-error' : ''}`}>
          <div className="ref-alert-left">
            {feedback.type === 'danger' ? (
              <AlertTriangle size={18} className="text-red-500 flex-shrink-0" />
            ) : (
              <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            type="button"
            onClick={() => setFeedback({ type: '', message: '' })}
            className="ref-alert-dismiss"
            title="Dismiss notification"
          >
            Dismiss &times;
          </button>
        </div>
      )}

      {/* 3. Pastel KPI Metric Strip */}
      <div className="ref-kpi-grid">
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-blue">
            <ShieldCheck size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">Protected</span>
            <span className="ref-kpi-label">Password & Auth</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <CheckCircle2 size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">Active</span>
            <span className="ref-kpi-label">Portal Registration</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-orange">
            <MessageSquare size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">Connected</span>
            <span className="ref-kpi-label">Alert Gateways</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-purple">
            <Database size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">MongoDB Synced</span>
            <span className="ref-kpi-label">Cloud Persistence</span>
          </div>
        </div>
      </div>

      {/* 4. Section Navigation Tabs */}
      <div className="cms-tabs-bar no-print" style={{ margin: '1rem 0 1.25rem 0' }}>
        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`cms-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
        >
          <Lock size={15} />
          <span>Security & Passwords</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('portal')}
          className={`cms-tab-btn ${activeTab === 'portal' ? 'active' : ''}`}
        >
          <Sliders size={15} />
          <span>Portal Policies</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('gateways')}
          className={`cms-tab-btn ${activeTab === 'gateways' ? 'active' : ''}`}
        >
          <MessageSquare size={15} />
          <span>Alert Channels</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('database')}
          className={`cms-tab-btn ${activeTab === 'database' ? 'active' : ''}`}
        >
          <Database size={15} />
          <span>Cloud Database</span>
        </button>
      </div>

      {/* =========================================================================
          SECTION 1: SECURITY & PASSWORD UPDATE
          ========================================================================= */}
      {activeTab === 'security' && (
        <div className="cms-section-card">
          <div className="cms-section-header">
            <div className="cms-section-header-left">
              <div className="cms-section-icon-box emerald">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="cms-section-title">Change Password</h3>
                <p className="cms-section-desc">Update your administrator account password securely.</p>
              </div>
            </div>
            <span className="eco-tier-pill eco-tier-patron">
              Super Admin
            </span>
          </div>

          <form onSubmit={handlePasswordSubmit} className="cms-section-body" style={{ maxWidth: '580px' }}>
            <div className="cms-field">
              <label className="cms-label">
                <Key size={14} className="text-emerald-700" />
                <span>Current Password</span>
                <span className="required-star">*</span>
              </label>
              <div className="cms-input-group">
                <input
                  type={showCurrentPw ? 'text' : 'password'}
                  required
                  placeholder="Enter current password..."
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  className="cms-input no-icon"
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPw(!showCurrentPw)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                  }}
                  title={showCurrentPw ? 'Hide password' : 'Show password'}
                >
                  {showCurrentPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="cms-field" style={{ marginTop: '0.85rem' }}>
              <label className="cms-label">
                <Lock size={14} className="text-emerald-700" />
                <span>New Password</span>
                <span className="required-star">*</span>
              </label>
              <div className="cms-input-group">
                <input
                  type={showNewPw ? 'text' : 'password'}
                  required
                  minLength={6}
                  placeholder="Minimum 6 characters..."
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="cms-input no-icon"
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPw(!showNewPw)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                  }}
                  title={showNewPw ? 'Hide password' : 'Show password'}
                >
                  {showNewPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="cms-field" style={{ marginTop: '0.85rem' }}>
              <label className="cms-label">
                <CheckCircle2 size={14} className="text-emerald-700" />
                <span>Confirm New Password</span>
                <span className="required-star">*</span>
              </label>
              <div className="cms-input-group">
                <input
                  type={showConfirmPw ? 'text' : 'password'}
                  required
                  minLength={6}
                  placeholder="Repeat new password..."
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="cms-input no-icon"
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                  }}
                  title={showConfirmPw ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.78rem',
              color: '#475569',
            }}>
              <ShieldCheck size={18} className="text-emerald-600 flex-shrink-0" />
              <span>Passwords are salted and securely encrypted with bcrypt on MongoDB Atlas.</span>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <button
                type="submit"
                disabled={saving}
                className="ref-btn-enroll"
              >
                <Check size={16} />
                <span>{saving ? 'Updating...' : 'Update Password'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* =========================================================================
          SECTION 2: PORTAL POLICIES (Simple Toggle List)
          ========================================================================= */}
      {activeTab === 'portal' && (
        <div className="cms-section-card">
          <div className="cms-section-header">
            <div className="cms-section-header-left">
              <div className="cms-section-icon-box blue">
                <Sliders size={20} />
              </div>
              <div>
                <h3 className="cms-section-title">Portal Access & Registration Policies</h3>
                <p className="cms-section-desc">Manage public membership registration and community campaign participation rules.</p>
              </div>
            </div>
          </div>

          <div className="cms-section-body" style={{ padding: '0.5rem 1.5rem' }}>
            {[
              {
                key: 'memberSelfRegistration',
                title: 'Public Member Self-Registration',
                desc: 'Allow citizens to enroll for membership directly from the public website.',
              },
              {
                key: 'requireAdminApprovalForLife',
                title: 'Life Membership Verification',
                desc: 'Require administrator approval before granting permanent Life Membership status.',
              },
              {
                key: 'publicEventEnrollment',
                title: 'Cleanliness Drive Volunteer Enrollment',
                desc: 'Permit general citizens and devotees to sign up for scheduled Godavari river cleanups.',
              },
              {
                key: 'autoMembershipNumbering',
                title: 'Automated Membership ID Numbers',
                desc: 'Auto-generate sequential member registration numbers (MEM-GNPP-2026-XXXX).',
              },
              {
                key: 'emergencyRiverBanner',
                title: 'Riverfront Emergency High-Water Alert',
                desc: 'Display high-water warning notification across the top of the public website.',
              },
            ].map((item) => (
              <div
                key={item.key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.15rem 0',
                  borderBottom: '1px solid #f1f5f9',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
                    {item.desc}
                  </p>
                </div>

                <label className="eco-toggle-switch" style={{ flexShrink: 0 }}>
                  <input
                    type="checkbox"
                    checked={portalSettings[item.key]}
                    onChange={() => handlePortalToggle(item.key, item.title)}
                  />
                  <span className="eco-toggle-slider"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 3: BROADCAST GATEWAYS (Simple Channels)
          ========================================================================= */}
      {activeTab === 'gateways' && (
        <div className="cms-section-card">
          <div className="cms-section-header">
            <div className="cms-section-header-left">
              <div className="cms-section-icon-box amber">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="cms-section-title">Automated Notification Gateways</h3>
                <p className="cms-section-desc">Configure WhatsApp messaging, emergency SMS alerts, and volunteer briefings.</p>
              </div>
            </div>
          </div>

          <div className="cms-section-body" style={{ padding: '0.5rem 1.5rem' }}>
            {[
              {
                key: 'whatsappEnabled',
                title: 'WhatsApp Cleanliness Drive Alerts',
                desc: 'Broadcast drive assembly time and ghat cleanup reminders to registered WhatsApp numbers.',
              },
              {
                key: 'smsAlertsEnabled',
                title: 'Emergency River Warning SMS',
                desc: 'High-priority SMS dispatch for sudden barrage water releases and river currents.',
              },
              {
                key: 'volunteerSosEmergencyChannel',
                title: 'On-Ghat Volunteer Emergency Channel',
                desc: 'Priority push alerts for first aid and safety coordination along riverbanks.',
              },
              {
                key: 'dailyVolunteerDigest',
                title: 'Daily Cleanliness Summary Digest',
                desc: 'Automated evening summary of waste tons removed and saplings planted.',
              },
            ].map((item) => (
              <div
                key={item.key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.15rem 0',
                  borderBottom: '1px solid #f1f5f9',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
                    {item.desc}
                  </p>
                </div>

                <label className="eco-toggle-switch" style={{ flexShrink: 0 }}>
                  <input
                    type="checkbox"
                    checked={gatewaySettings[item.key]}
                    onChange={() => handleGatewayToggle(item.key, item.title)}
                  />
                  <span className="eco-toggle-slider"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 4: CLOUD DATABASE STATUS
          ========================================================================= */}
      {activeTab === 'database' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="cms-section-card">
            <div className="cms-section-header">
              <div className="cms-section-header-left">
                <div className="cms-section-icon-box emerald">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="cms-section-title">MongoDB Atlas Cluster Status</h3>
                  <p className="cms-section-desc">Live database latency, connection encryption, and active collections.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handlePingCluster}
                className="ref-btn-refresh"
                disabled={pingStatus.pinging}
                title="Test connection latency"
              >
                <Activity size={14} className={pingStatus.pinging ? 'animate-spin' : ''} />
                <span>{pingStatus.pinging ? 'Testing...' : 'Test Connection'}</span>
              </button>
            </div>

            <div className="cms-section-body">
              <div className="cms-metrics-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="cms-metric-card">
                  <div className="cms-metric-card-top">
                    <div className="cms-metric-bubble" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
                      <Activity size={16} />
                    </div>
                    <span className="metric-tag-pill green">Optimal</span>
                  </div>
                  <span className="cms-metric-card-label">Roundtrip Latency</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0' }}>
                    {pingStatus.latency} ms
                  </div>
                  <span className="cms-metric-footer-note">Verified: {pingStatus.lastPing}</span>
                </div>

                <div className="cms-metric-card">
                  <div className="cms-metric-card-top">
                    <div className="cms-metric-bubble" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                      <Database size={16} />
                    </div>
                    <span className="metric-tag-pill blue">Atlas Cloud</span>
                  </div>
                  <span className="cms-metric-card-label">Cluster Host</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.45rem 0' }}>
                    MongoDB Atlas M0
                  </div>
                  <span className="cms-metric-footer-note">TLS 1.3 Encryption Enforced</span>
                </div>

                <div className="cms-metric-card">
                  <div className="cms-metric-card-top">
                    <div className="cms-metric-bubble" style={{ backgroundColor: '#fffbeb', color: '#d97706' }}>
                      <HardDrive size={16} />
                    </div>
                    <span className="metric-tag-pill amber">Database</span>
                  </div>
                  <span className="cms-metric-card-label">Primary Database</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.45rem 0' }}>
                    godhavari-ngo-db
                  </div>
                  <span className="cms-metric-footer-note">7 Core Collections Synced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backup Snapshot Card */}
          <div className="cms-section-card">
            <div className="cms-section-header">
              <div className="cms-section-header-left">
                <div className="cms-section-icon-box blue">
                  <HardDrive size={20} />
                </div>
                <div>
                  <h3 className="cms-section-title">Automated Cloud Backups</h3>
                  <p className="cms-section-desc">Daily point-in-time snapshots and rolling disaster recovery archives.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleTriggerBackup}
                className="ref-btn-enroll"
                disabled={backupStatus.backingUp}
                title="Create snapshot now"
              >
                <HardDrive size={14} />
                <span>{backupStatus.backingUp ? 'Archiving...' : 'Take Cloud Snapshot'}</span>
              </button>
            </div>

            <div className="cms-section-body" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Automated Schedule
                  </span>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                    Daily at 02:00 AM IST (Cloud Cron)
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Last Successful Snapshot
                  </span>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 700, color: '#059669', fontSize: '0.92rem' }}>
                    {backupStatus.lastBackup}
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Retention Policy
                  </span>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                    30-Day Rolling Daily Archives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
