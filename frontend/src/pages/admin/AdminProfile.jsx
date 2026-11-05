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
  Sparkles,
} from 'lucide-react';

const AdminProfile = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || 'Dr. K. V. Subba Rao',
    email: user?.email || 'admin@gmail.com',
    phone: user?.phone || '+91 944 012 3456',
    designation: 'President & Executive Trustee',
    officeLocation: 'Godavari Bund Road, Near Kotilingala Ghat, Rajahmundry',
    bio: 'Dedicated environmentalist leading the cleanup and revival of the sacred River Godavari since 2018. Coordinating community riverfront cleanliness drives, plastic waste interception, and ecological reforestation.',
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
        message: 'Administrator executive profile successfully updated in MongoDB database!',
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

  return (
    <div className="eco-cms-page">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Super Admin Session Active &bull; Verified Credentials
            </span>
          </div>
          <h1 className="eco-cms-main-title">Executive Profile & Credentials</h1>
          <p className="eco-cms-sub-title">
            Manage your personal administrative contact details, designation, official biography, and platform access standing.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            type="submit"
            form="profile-form"
            className="eco-cms-btn-primary"
            disabled={saving}
          >
            <Save size={15} />
            <span>{saving ? 'Saving...' : 'Save Profile Changes'}</span>
          </button>
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

      {/* 3. Hero Executive Identity Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-[#063b2c] text-white flex items-center justify-center font-bold text-3xl shadow-md border-2 border-[#10b981]">
              {formData.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-xl font-extrabold text-slate-900">{formData.name}</h2>
                <span className="eco-tier-pill eco-tier-life text-xs">
                  <ShieldCheck size={13} />
                  Super Admin
                </span>
                <span className="eco-status-pill status-active text-xs">
                  <span className="status-dot-indicator"></span>
                  Active Session
                </span>
              </div>
              <p className="text-slate-600 font-semibold text-sm mt-0.5">
                {formData.designation} &bull; Godhavari Nadhi Paryavarana Parishubratha
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-emerald-700" />
                  {formData.email}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-emerald-700" />
                  {formData.phone}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-emerald-700" />
                  Rajahmundry, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Two-Column Layout: Profile Form (Left) & Platform Authority (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column (2 spans): Edit Profile Form */}
        <div className="lg:col-span-2">
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <h3 className="eco-card-header-title">
                <User size={18} className="text-emerald-700" />
                <span>Edit Executive Profile Details</span>
              </h3>
              <span className="text-xs text-slate-400">Updates live MongoDB record</span>
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
                  <label className="eco-field-label">Official Executive Title</label>
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
                  <label className="eco-field-label">Administrator Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="eco-field-input"
                  />
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Official Contact Phone *</label>
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
                <label className="eco-field-label">Executive Bio & Public Mandate</label>
                <textarea
                  rows="4"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="eco-field-textarea"
                  placeholder="Outline your environmental mission and executive focus..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="eco-cms-btn-primary"
                >
                  <Save size={15} />
                  <span>{saving ? 'Updating MongoDB...' : 'Save Profile Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column (1 span): Administrative Privileges & Session Log */}
        <div className="space-y-4">
          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <h3 className="eco-card-header-title">
                <Award size={18} className="text-emerald-700" />
                <span>Executive Privileges</span>
              </h3>
            </div>
            <div className="p-5 space-y-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Database Access:</span>
                <span className="font-bold text-emerald-700">Full Read & Write</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Member Registrations:</span>
                <span className="font-bold text-emerald-700">Audit & Approval</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Public Portal Content:</span>
                <span className="font-bold text-emerald-700">Publishing Authority</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Emergency Alerts:</span>
                <span className="font-bold text-emerald-700">Broadcast Priority</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-600">Security Clearance:</span>
                <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  Tier-1 Super Admin
                </span>
              </div>
            </div>
          </div>

          <div className="eco-table-card">
            <div className="eco-card-header-bar">
              <h3 className="eco-card-header-title">
                <Clock size={18} className="text-emerald-700" />
                <span>Current Session Info</span>
              </h3>
            </div>
            <div className="p-5 space-y-2 text-xs text-slate-600">
              <p>
                <strong>Session Location:</strong> Rajahmundry, Andhra Pradesh
              </p>
              <p>
                <strong>Authentication:</strong> JWT Secure Http Bearer
              </p>
              <p>
                <strong>Role:</strong> Root Super Administrator
              </p>
              <p className="text-emerald-700 font-semibold pt-1">
                &bull; Session secured with MongoDB Atlas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
