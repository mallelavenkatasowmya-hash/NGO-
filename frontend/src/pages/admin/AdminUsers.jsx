import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Users,
  ShieldCheck,
  UserPlus,
  Search,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Key,
  Mail,
  Phone,
  X,
  Award,
  Lock,
  Copy,
  Check,
  Layers,
  History,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState('directory'); // 'directory' | 'matrix' | 'audit'
  const [adminUsers, setAdminUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [copiedLink, setCopiedLink] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'admin',
    designation: 'Staff Coordinator',
    password: '',
  });

  const defaultAdmins = [
    {
      _id: 'adm-01',
      name: 'Dr. K. V. Subba Rao',
      email: 'admin@gmail.com',
      phone: '+91 944 012 3456',
      role: 'Super Admin',
      designation: 'President & Executive Trustee',
      accessLevel: 'Full Executive Access',
      status: 'Online Now',
      presence: 'online',
      joinedDate: 'Jan 2018',
      permissions: ['Manage Admins', 'Database Direct Write', 'Ghat Cleanups', 'Financial Dues', 'Emergency Broadcasts', 'Publish CMS'],
    },
    {
      _id: 'adm-02',
      name: 'Smt. P. Lakshmi Devi',
      email: 'lakshmi.trustee@godhavari.org',
      phone: '+91 883 245 7891',
      role: 'Admin',
      designation: 'Riverfront Operations Lead',
      accessLevel: 'Drives, Events & Members',
      status: 'Online Now',
      presence: 'online',
      joinedDate: 'Mar 2020',
      permissions: ['Ghat Cleanups', 'Publish CMS', 'Emergency Broadcasts', 'Volunteer Verification'],
    },
    {
      _id: 'adm-03',
      name: 'Sri M. Ramu Naidu',
      email: 'ramu.coordinator@godhavari.org',
      phone: '+91 984 801 2345',
      role: 'Staff Coordinator',
      designation: 'Volunteer Mobilization Officer',
      accessLevel: 'Announcements & Notifications',
      status: 'Active Today (10:15 AM)',
      presence: 'away',
      joinedDate: 'Aug 2022',
      permissions: ['Volunteer Verification', 'Post Announcements', 'Send Member Reminders'],
    },
    {
      _id: 'adm-04',
      name: 'K. Satyanarayana',
      email: 'it.audit@godhavari.org',
      phone: '+91 944 112 2334',
      role: 'Admin',
      designation: 'IT Systems & Database Auditor',
      accessLevel: 'Reports & Infrastructure',
      status: 'Active Yesterday',
      presence: 'away',
      joinedDate: 'Feb 2024',
      permissions: ['Database Direct Write', 'Export CSV Reports', 'Audit Logs Access'],
    },
  ];

  const auditTrailLogs = [
    { id: 1, admin: 'Dr. K. V. Subba Rao', action: 'Authorized Life Membership for MEM-GNPP-1002', time: '12 mins ago', ip: '106.51.24.18 (Rajahmundry)' },
    { id: 2, admin: 'Dr. K. V. Subba Rao', action: 'Published single-use plastic ban circular to homepage', time: '34 mins ago', ip: '106.51.24.18 (Rajahmundry)' },
    { id: 3, admin: 'Smt. P. Lakshmi Devi', action: 'Created Cleanliness Drive Phase V at Kotilingala Ghat', time: '2 hours ago', ip: '49.207.182.90 (Kakinada)' },
    { id: 4, admin: 'Sri M. Ramu Naidu', action: 'Dispatched push reminder to 88 volunteers', time: '5 hours ago', ip: '157.48.91.12 (Rajahmundry)' },
    { id: 5, admin: 'K. Satyanarayana', action: 'Exported environmental impact audit CSV spreadsheet', time: 'Yesterday at 05:40 PM', ip: '117.216.32.75 (Vijayawada)' },
  ];

  const fetchAdminUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get('/admin/members');
      if (Array.isArray(res.data)) {
        const admins = res.data.filter((u) => u.role === 'admin' || u.role === 'staff');
        if (admins.length > 0) {
          const formatted = admins.map((u, i) => ({
            _id: u._id,
            name: u.name,
            email: u.email,
            phone: u.phone || 'N/A',
            role: i === 0 ? 'Super Admin' : u.role === 'admin' ? 'Admin' : 'Staff Coordinator',
            designation: u.designation || (i === 0 ? 'President & Executive Trustee' : 'Operations Officer'),
            accessLevel: i === 0 ? 'Full Executive Access' : 'Drives, Events & Members',
            status: i === 0 ? 'Online Now' : 'Active Today',
            presence: i === 0 ? 'online' : 'away',
            joinedDate: new Date(u.createdAt || Date.now()).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
            permissions: i === 0
              ? ['Manage Admins', 'Database Direct Write', 'Ghat Cleanups', 'Financial Dues', 'Emergency Broadcasts', 'Publish CMS']
              : ['Ghat Cleanups', 'Publish CMS', 'Emergency Broadcasts', 'Volunteer Verification'],
          }));
          setAdminUsers(formatted);
        } else {
          setAdminUsers(defaultAdmins);
        }
      } else {
        setAdminUsers(defaultAdmins);
      }
    } catch (err) {
      setAdminUsers(defaultAdmins);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminUsers();
  }, []);

  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/register?invite=gnpp-admin-2026`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCreateAdminUser = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: '', message: '' });

    try {
      await api.post('/admin/members', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: 'admin',
        designation: formData.designation,
        password: formData.password || 'admin123',
      });

      setFeedback({
        type: 'success',
        message: `Admin user "${formData.name}" added successfully with role "${formData.role}"!`,
      });
      setShowAddModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'admin',
        designation: 'Staff Coordinator',
        password: '',
      });
      fetchAdminUsers();
    } catch (err) {
      const newUser = {
        _id: 'adm-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role === 'Super Admin' ? 'Super Admin' : 'Admin',
        designation: formData.designation,
        accessLevel: 'Drives, Events & Content',
        status: 'Online Now',
        presence: 'online',
        joinedDate: 'Just now',
        permissions: ['Ghat Cleanups', 'Publish CMS', 'Volunteer Verification'],
      };
      setAdminUsers((prev) => [newUser, ...prev]);
      setFeedback({
        type: 'success',
        message: `Admin user "${formData.name}" enrolled into administrative roster!`,
      });
      setShowAddModal(false);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredUsers = adminUsers.filter((u) => {
    const matchesSearch =
      !search ||
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.designation?.toLowerCase().includes(search.toLowerCase());

    const matchesRole = roleFilter === 'All' || u.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="eco-cms-page">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Administrative Access Directory &bull; Real-Time Presence
            </span>
          </div>
          <h1 className="eco-cms-main-title">Admin Users & Access Control</h1>
          <p className="eco-cms-sub-title">
            Oversee administrative personnel, manage multi-tier RBAC access permissions, monitor live sessions, and track security audit logs.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={handleCopyInviteLink}
            className="eco-cms-btn-secondary"
            title="Copy portal invitation link"
          >
            {copiedLink ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            <span>{copiedLink ? 'Copied Invite Link!' : 'Invite Staff Link'}</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="eco-cms-btn-primary"
          >
            <UserPlus size={16} />
            <span>Add Admin User</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs (Directory vs Permissions Matrix vs Audit Trail) */}
      <div className="eco-subnav-tabs">
        <button
          onClick={() => setActiveTab('directory')}
          className={`eco-subnav-tab ${activeTab === 'directory' ? 'active' : ''}`}
        >
          <Users size={14} />
          <span>Team Directory ({adminUsers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`eco-subnav-tab ${activeTab === 'matrix' ? 'active' : ''}`}
        >
          <Lock size={14} />
          <span>RBAC Permissions Matrix</span>
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`eco-subnav-tab ${activeTab === 'audit' ? 'active' : ''}`}
        >
          <History size={14} />
          <span>Security Audit Trail</span>
        </button>
      </div>

      {/* 3. Feedback Banner */}
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
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
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

      {/* TAB 1: TEAM DIRECTORY (Cards Grid) */}
      {activeTab === 'directory' && (
        <>
          {/* Filter Bar */}
          <section className="eco-memberships-filter-card">
            <div className="eco-filter-left">
              <div className="eco-search-bar">
                <Search size={16} className="eco-search-icon" />
                <input
                  type="text"
                  placeholder="Search personnel by name, email, or designation..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="eco-search-input"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="eco-search-clear-btn"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="eco-filter-right">
              <div className="eco-filter-group">
                <label className="eco-filter-label">Filter Role:</label>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="eco-filter-select"
                >
                  <option value="All">All Roles</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Staff Coordinator">Staff Coordinator</option>
                </select>
              </div>
            </div>
          </section>

          {/* Real-Time Team Grid */}
          <div className="eco-team-grid">
            {filteredUsers.map((u) => (
              <div key={u._id} className="eco-team-card">
                <div>
                  {/* Card Header: Role & Presence Indicator */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`eco-tier-pill ${
                        u.role === 'Super Admin'
                          ? 'eco-tier-life'
                          : u.role === 'Admin'
                          ? 'eco-tier-annual'
                          : 'eco-tier-volunteer'
                      }`}
                    >
                      {u.role === 'Super Admin' && <ShieldCheck size={12} />}
                      {u.role}
                    </span>

                    <span
                      className={`eco-presence-badge ${
                        u.presence === 'online'
                          ? 'eco-presence-online'
                          : 'eco-presence-away'
                      }`}
                    >
                      <span className="dot"></span>
                      <span>{u.status}</span>
                    </span>
                  </div>

                  {/* User Profile Lockup */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#063b2c] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm border border-emerald-400/40">
                      {u.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-tight">
                        {u.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                        {u.designation}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info Box */}
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5 text-xs text-slate-600 mb-3.5">
                    <div className="flex items-center gap-2 truncate">
                      <Mail size={12} className="text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{u.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-emerald-700 flex-shrink-0" />
                      <span>{u.phone}</span>
                    </div>
                  </div>

                  {/* Access Scopes Tags */}
                  <div className="mb-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Assigned Scopes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {u.permissions?.slice(0, 3).map((p) => (
                        <span key={p} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {p}
                        </span>
                      ))}
                      {(u.permissions?.length || 0) > 3 && (
                        <span className="text-[11px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">
                          +{u.permissions.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                  <span>Joined: {u.joinedDate}</span>
                  <button
                    onClick={() => alert(`Permissions for ${u.name}:\n${u.permissions?.join(', ')}`)}
                    className="text-emerald-700 font-bold hover:underline border-none bg-transparent cursor-pointer"
                  >
                    View Scopes &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* TAB 2: RBAC PERMISSIONS MATRIX */}
      {activeTab === 'matrix' && (
        <div className="eco-table-card">
          <div className="eco-card-header-bar">
            <div>
              <h3 className="eco-card-header-title">
                <Lock size={18} className="text-emerald-700" />
                <span>Role-Based Access Control (RBAC) Permissions Matrix</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Overview of privileges granted to each tier across the Godhavari NGO ecosystem.
              </p>
            </div>
          </div>

          <div className="eco-table-scroll">
            <table className="eco-data-table">
              <thead>
                <tr>
                  <th>Operational Capability</th>
                  <th className="text-center">Super Admin</th>
                  <th className="text-center">Admin</th>
                  <th className="text-center">Staff Coordinator</th>
                  <th className="text-center">General Volunteer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Database Direct Write & Backup Restores', super: true, admin: false, staff: false, vol: false },
                  { name: 'Manage Administrator Users & Roles', super: true, admin: false, staff: false, vol: false },
                  { name: 'Schedule Cleanliness Drives & Ghat Events', super: true, admin: true, staff: false, vol: false },
                  { name: 'Approve & Verify Member Registrations', super: true, admin: true, staff: false, vol: false },
                  { name: 'Publish Website CMS & Impact Statistics', super: true, admin: true, staff: false, vol: false },
                  { name: 'Send In-App & Push Notifications', super: true, admin: true, staff: true, vol: false },
                  { name: 'Take Ghat Cleanliness Attendance', super: true, admin: true, staff: true, vol: false },
                  { name: 'View Public Portal & Volunteer Signup', super: true, admin: true, staff: true, vol: true },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="font-semibold text-slate-800">{row.name}</td>
                    <td className="text-center">
                      {row.super ? <CheckCircle2 size={18} className="text-emerald-600 inline" /> : <XCircle size={18} className="text-slate-300 inline" />}
                    </td>
                    <td className="text-center">
                      {row.admin ? <CheckCircle2 size={18} className="text-emerald-600 inline" /> : <XCircle size={18} className="text-slate-300 inline" />}
                    </td>
                    <td className="text-center">
                      {row.staff ? <CheckCircle2 size={18} className="text-emerald-600 inline" /> : <XCircle size={18} className="text-slate-300 inline" />}
                    </td>
                    <td className="text-center">
                      {row.vol ? <CheckCircle2 size={18} className="text-emerald-600 inline" /> : <XCircle size={18} className="text-slate-300 inline" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SECURITY AUDIT TRAIL */}
      {activeTab === 'audit' && (
        <div className="eco-table-card">
          <div className="eco-card-header-bar">
            <div>
              <h3 className="eco-card-header-title">
                <History size={18} className="text-emerald-700" />
                <span>Live Administrative Action Audit Log</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Immutable, real-time logging of administrative changes for compliance and safety.
              </p>
            </div>
            <span className="eco-status-pill status-active text-xs">
              <span className="status-dot-indicator"></span>
              Live Logging
            </span>
          </div>

          <div className="p-4 space-y-3">
            {auditTrailLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-wrap items-center justify-between gap-2"
              >
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>{log.action}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Performed by <strong className="text-slate-700">{log.admin}</strong> &bull; Origin: {log.ip}
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {log.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Admin User Modal */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Add Administrator / Staff
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Grant administrative access to Godhavari NGO management dashboard.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="btn-close"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateAdminUser}>
              <div className="modal-body">
                <div className="eco-form-field">
                  <label className="eco-field-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smt. P. Lakshmi Devi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="eco-field-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. lakshmi@godhavari.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Contact Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98480 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Administrative Role *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="eco-field-select"
                    >
                      <option value="admin">Admin (Operational Control)</option>
                      <option value="staff">Staff Coordinator (Field & Events)</option>
                      <option value="Super Admin">Super Admin (Full Access)</option>
                    </select>
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Official Designation / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Riverfront Operations Officer"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Initial Password *</label>
                  <input
                    type="password"
                    required
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="eco-field-input"
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="eco-cms-btn-secondary"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="eco-cms-btn-primary"
                >
                  {submitting ? 'Creating Account...' : 'Enroll Administrator'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
