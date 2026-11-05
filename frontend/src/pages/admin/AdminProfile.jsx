import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Save,
  MapPin,
  Calendar,
  Award,
  Building,
  Key,
  Clock,
  QrCode,
  Download,
  Printer,
  Sparkles,
  Check,
  Waves,
  Briefcase,
} from 'lucide-react';

const AdminProfile = () => {
  const { user } = useAuth();
  const [profileTab, setProfileTab] = useState('details'); // 'details' | 'oversight' | 'pass'

  const [formData, setFormData] = useState({
    name: user?.name || 'Dr. K. V. Subba Rao',
    email: user?.email || 'admin@gmail.com',
    phone: user?.phone || '+91 944 012 3456',
    designation: 'President & Executive Trustee',
    officeLocation: 'Godavari Bund Road, Near Kotilingala Ghat, Rajahmundry',
    bio: 'Dedicated environmentalist leading the cleanup and revival of the sacred River Godavari since 2018. Coordinating community riverfront cleanliness drives, plastic waste interception, and ecological reforestation.',
    emergencyContact: '+91 883 245 7890 (Main Secretariat)',
    tenureStart: '15 January 2018',
    idNumber: 'GNPP-EXEC-001',
  });

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFeedback({ type: '', message: '' });

    try {
      await api.patch('/admin/settings', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      });

      setFeedback({
        type: 'success',
        message: 'Executive profile details successfully synced with MongoDB Atlas!',
      });
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to update profile details.',
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePrintPass = () => {
    window.print();
  };

  return (
    <div className="eco-cms-page">
      {/* 1. Profile Hero Card with Cover Banner & Avatar */}
      <div className="eco-profile-cover-card">
        {/* Scenic Gradient Cover Photo */}
        <div className="eco-profile-cover-photo">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-semibold px-3 py-1 rounded-full">
              Sacred Godavari River Guardian
            </span>
          </div>
        </div>

        {/* Avatar & Action Button Row */}
        <div className="eco-profile-avatar-row">
          <div className="eco-profile-avatar-large">
            {formData.name.charAt(0).toUpperCase()}
            <span className="eco-avatar-online-dot" title="Active Executive Session"></span>
          </div>

          <div className="flex items-center gap-2 pb-2">
            <button
              onClick={() => setProfileTab('pass')}
              className="eco-cms-btn-secondary text-xs"
              title="View Digital Executive Pass"
            >
              <QrCode size={14} />
              <span>Digital Executive Pass</span>
            </button>
            <button
              type="submit"
              form="profile-form"
              className="eco-cms-btn-primary text-xs"
              disabled={saving}
            >
              <Save size={14} />
              <span>{saving ? 'Saving...' : 'Save Profile'}</span>
            </button>
          </div>
        </div>

        {/* Profile Details Header Bar */}
        <div className="eco-profile-main-meta">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">{formData.name}</h1>
                <span className="eco-tier-pill eco-tier-life text-xs">
                  <ShieldCheck size={13} />
                  Super Admin
                </span>
                <span className="eco-status-pill status-active text-xs">
                  <span className="status-dot-indicator"></span>
                  Verified Executive
                </span>
              </div>
              <p className="text-emerald-800 font-semibold text-sm mt-0.5">
                {formData.designation} &bull; Godhavari Nadhi Paryavarana Parishubratha
              </p>
            </div>

            <div className="text-xs text-slate-500 text-left sm:text-right">
              <div><strong>Pass ID:</strong> <span className="font-mono text-slate-700">{formData.idNumber}</span></div>
              <div className="text-slate-400">Serving since {formData.tenureStart}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Mail size={13} className="text-emerald-700" />
              {formData.email}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Phone size={13} className="text-emerald-700" />
              {formData.phone}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin size={13} className="text-emerald-700" />
              Rajahmundry, Andhra Pradesh
            </span>
          </div>
        </div>
      </div>

      {/* 2. Subnav Navigation Pills (Details vs Oversight vs ID Pass) */}
      <div className="eco-subnav-tabs">
        <button
          onClick={() => setProfileTab('details')}
          className={`eco-subnav-tab ${profileTab === 'details' ? 'active' : ''}`}
        >
          <User size={14} />
          <span>Executive Information</span>
        </button>
        <button
          onClick={() => setProfileTab('oversight')}
          className={`eco-subnav-tab ${profileTab === 'oversight' ? 'active' : ''}`}
        >
          <Waves size={14} />
          <span>Ghat Oversight & Mandates</span>
        </button>
        <button
          onClick={() => setProfileTab('pass')}
          className={`eco-subnav-tab ${profileTab === 'pass' ? 'active' : ''}`}
        >
          <QrCode size={14} />
          <span>Official Executive ID Pass</span>
        </button>
      </div>

      {/* 3. Feedback Alert */}
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

      {/* TAB 1: EXECUTIVE DETAILS */}
      {profileTab === 'details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <h3 className="eco-card-header-title">
                  <User size={18} className="text-emerald-700" />
                  <span>Personal Executive Details</span>
                </h3>
                <span className="text-xs text-slate-400">Live MongoDB Profile</span>
              </div>

              <form id="profile-form" onSubmit={handleProfileSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Executive Title / Designation</label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Primary Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Head Secretariat Physical Address</label>
                  <input
                    type="text"
                    value={formData.officeLocation}
                    onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                    className="eco-field-input"
                  />
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Executive Bio & Environmental Mission</label>
                  <textarea
                    rows="4"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="eco-field-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="eco-cms-btn-primary"
                >
                  <Save size={15} />
                  <span>{saving ? 'Updating Database...' : 'Save Profile Changes'}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <h3 className="eco-card-header-title">
                  <Award size={18} className="text-emerald-700" />
                  <span>Executive Clearance</span>
                </h3>
              </div>
              <div className="p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Executive Tier:</span>
                  <span className="font-bold text-purple-700">Tier-1 Root Super Admin</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Database Access:</span>
                  <span className="font-bold text-emerald-700">Full Direct Read & Write</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Emergency Protocol:</span>
                  <span className="font-bold text-emerald-700">Flood Inflow Sign-off</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-600">Financial Sign-off:</span>
                  <span className="font-bold text-slate-800">Direct Trustee Authorization</span>
                </div>
              </div>
            </div>

            <div className="eco-table-card">
              <div className="eco-card-header-bar">
                <h3 className="eco-card-header-title">
                  <Clock size={18} className="text-emerald-700" />
                  <span>Session Security</span>
                </h3>
              </div>
              <div className="p-5 space-y-2 text-xs text-slate-600">
                <p><strong>Device:</strong> Windows 11 Chrome Desktop</p>
                <p><strong>Network:</strong> Rajahmundry Local Gateway</p>
                <p><strong>Protocol:</strong> Bearer Token SSL Encrypted</p>
                <p className="text-emerald-700 font-semibold pt-1">&bull; MongoDB Atlas Connection Verified</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GHAT OVERSIGHT & MANDATES */}
      {profileTab === 'oversight' && (
        <div className="eco-table-card">
          <div className="eco-card-header-bar">
            <div>
              <h3 className="eco-card-header-title">
                <Waves size={18} className="text-emerald-700" />
                <span>Assigned Godavari River Reach Oversight</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Primary riverbanks and cleanliness campaigns directly stewarded by Dr. K. V. Subba Rao.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Kotilingala Temple Ghat Reach</h4>
                <span className="eco-status-pill status-active text-xs">Primary Lead</span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Oversees daily municipal waste interception, segregated bio-waste collection, and devotee awareness booths.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
                <span>Drives Conducted: 48</span>
                <span className="text-emerald-700">96% Cleanliness Score</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Pushkar Ghat Pilgrimage Reach</h4>
                <span className="eco-status-pill status-active text-xs">Stewardship Lead</span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Directs mass festival cleanliness drives, clay idol distribution counters, and volunteer deployment.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
                <span>Drives Conducted: 38</span>
                <span className="text-emerald-700">92% Cleanliness Score</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: OFFICIAL DIGITAL EXECUTIVE PASS */}
      {profileTab === 'pass' && (
        <div className="max-w-md mx-auto">
          <div className="eco-exec-id-pass">
            {/* Pass Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-emerald-300 block">
                  Official Executive Credential
                </span>
                <h3 className="text-base font-extrabold tracking-tight">Godhavari Nadhi NGO</h3>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-400/30">
                {formData.idNumber}
              </span>
            </div>

            <div className="eco-id-hologram-strip"></div>

            {/* Pass Body */}
            <div className="flex items-center gap-4 my-4">
              <div className="w-16 h-16 rounded-xl bg-white text-[#063b2c] flex items-center justify-center font-black text-2xl shadow-inner border border-emerald-300">
                {formData.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white leading-tight">{formData.name}</h4>
                <div className="text-xs text-emerald-300 font-semibold">{formData.designation}</div>
                <div className="text-[11px] text-slate-300 mt-1">Super Admin &bull; Rajahmundry Reach</div>
              </div>
            </div>

            {/* Pass Meta */}
            <div className="p-2.5 bg-black/25 rounded-xl border border-white/10 text-[11px] text-slate-300 space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Authority:</span>
                <strong className="text-white">Full Executive Trustee</strong>
              </div>
              <div className="flex justify-between">
                <span>Issued Date:</span>
                <span className="text-white">15 Jan 2018</span>
              </div>
              <div className="flex justify-between">
                <span>Security Token:</span>
                <span className="font-mono text-emerald-300">GNPP-AUTH-VERIFIED</span>
              </div>
            </div>

            {/* Pass Action */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                <CheckCircle2 size={12} /> Live Verified Pass
              </span>
              <button
                onClick={handlePrintPass}
                className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all border border-white/25 cursor-pointer"
              >
                <Printer size={12} /> Print Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
