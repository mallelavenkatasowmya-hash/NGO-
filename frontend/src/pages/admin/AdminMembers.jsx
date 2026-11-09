import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import {
  Users,
  Search,
  Plus,
  Trash2,
  CheckCircle,
  RefreshCw,
  X,
  Mail,
  Phone,
  Star,
  Pause,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tierFilter, setTierFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: 'success',
    message: 'Member record for "Sri M. Ramu Naidu" removed',
  });

  // Form State for Adding New Member
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'member',
    designation: 'General Member',
    membershipType: 'Annual Member',
    bloodGroup: 'B+',
    street: '',
    city: 'Rajahmundry',
  });

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('/admin/members');
      setMembers(data.members || []);
    } catch (err) {
      setFeedback({ type: 'error', message: 'Failed to load member records from database' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleAddMember = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: '', message: '' });

    try {
      await API.post('/admin/members', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        designation: formData.designation,
        membershipType: formData.membershipType,
        bloodGroup: formData.bloodGroup,
        address: { street: formData.street, city: formData.city },
      });

      setFeedback({ type: 'success', message: `Member "${formData.name}" successfully enrolled!` });
      setShowAddModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'member',
        designation: 'General Member',
        membershipType: 'Annual Member',
        bloodGroup: 'B+',
        street: '',
        city: 'Rajahmundry',
      });
      fetchMembers();
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'Failed to create member record',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatusToggle = async (userId, currentStatus) => {
    const nextStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
    try {
      await API.patch(`/admin/members/${userId}/membership`, { status: nextStatus });
      setFeedback({ type: 'success', message: `Membership status updated to ${nextStatus}` });
      fetchMembers();
    } catch (err) {
      setFeedback({ type: 'error', message: 'Failed to update membership status' });
    }
  };

  const handleDeleteMember = async (userId, memberName) => {
    if (!window.confirm(`Are you sure you want to remove member record for "${memberName}"?`)) {
      return;
    }
    try {
      await API.delete(`/admin/members/${userId}`);
      setFeedback({ type: 'success', message: `Member record for "${memberName}" removed` });
      fetchMembers();
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'Failed to remove member record',
      });
    }
  };

  // Dynamic filter logic
  const filteredMembers = members.filter((m) => {
    const kw = searchKeyword.toLowerCase().trim();
    const matchesSearch =
      !kw ||
      (m.name && m.name.toLowerCase().includes(kw)) ||
      (m.email && m.email.toLowerCase().includes(kw)) ||
      (m.phone && m.phone.toLowerCase().includes(kw)) ||
      (m.memberId && m.memberId.toLowerCase().includes(kw)) ||
      (m.designation && m.designation.toLowerCase().includes(kw));

    const memType = m.membership?.membershipType || m.membershipType || 'Annual Member';
    const matchesTier = tierFilter === 'All' || memType === tierFilter;

    const status = m.membership?.status || 'Active';
    const matchesStatus = statusFilter === 'All' || status === statusFilter;

    return matchesSearch && matchesTier && matchesStatus;
  });

  // Calculate dynamic stats
  const totalCount = members.length;
  const activeCount = members.filter((m) => (m.membership?.status || 'Active') === 'Active').length;
  const suspendedCount = members.filter((m) => (m.membership?.status || 'Active') === 'Suspended').length;
  const lifeCount = members.filter(
    (m) => (m.membership?.membershipType || m.membershipType) === 'Life Member'
  ).length;

  const getTierBadgeClass = (tier) => {
    switch (tier) {
      case 'Life Member':
        return 'ref-tier-life';
      case 'Annual Member':
        return 'ref-tier-annual';
      case 'Volunteer Member':
        return 'ref-tier-volunteer';
      default:
        return 'ref-tier-annual';
    }
  };

  const getInitials = (name) => {
    if (!name) return 'M';
    const clean = name.replace(/^(Sri|Smt\.|Smt|Dr\.|Dr|Mr\.|Mr|Mrs\.|Mrs)\s+/i, '').trim();
    return (clean || name).charAt(0).toUpperCase();
  };

  return (
    <div className="ref-members-page">
      {/* 1. Header Matching Reference Image */}
      <div className="ref-members-header">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <Users size={24} />
          </div>
          <div className="ref-header-text">
            <h2>Members</h2>
            <p>Manage membership profiles, registration IDs and validity statuses.</p>
          </div>
        </div>

        <div className="ref-header-actions">
          <button
            onClick={fetchMembers}
            className="ref-btn-refresh"
            disabled={loading}
            title="Refresh records"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="ref-btn-enroll"
            title="Enroll a new member"
          >
            <Plus size={16} />
            <span>Enroll New Member</span>
          </button>
        </div>
      </div>

      {/* 2. Success Alert Banner */}
      {feedback.message && (
        <div className="ref-alert-banner">
          <div className="ref-alert-left">
            <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback({ type: '', message: '' })}
            className="ref-alert-dismiss"
          >
            Dismiss &times;
          </button>
        </div>
      )}

      {/* 3. 4-Card KPI Stat Strip */}
      <div className="ref-kpi-grid">
        {/* Card 1: Total Members */}
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-blue">
            <Users size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{totalCount}</span>
            <span className="ref-kpi-label">Total Members</span>
          </div>
        </div>

        {/* Card 2: Active Members */}
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <CheckCircle size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{activeCount}</span>
            <span className="ref-kpi-label">Active Members</span>
          </div>
        </div>

        {/* Card 3: Suspended Members */}
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-orange">
            <Pause size={18} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{suspendedCount}</span>
            <span className="ref-kpi-label">Suspended Members</span>
          </div>
        </div>

        {/* Card 4: Life Members */}
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-purple">
            <Star size={18} fill="#a855f7" />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-value">{lifeCount}</span>
            <span className="ref-kpi-label">Life Members</span>
          </div>
        </div>
      </div>

      {/* 4. Filter Bar Card */}
      <div className="ref-filter-card">
        <div className="ref-search-wrap">
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by name, email, phone, or Member ID..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          {searchKeyword && (
            <button
              onClick={() => setSearchKeyword('')}
              className="btn-close"
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="ref-filter-actions">
          <div className="ref-select-item">
            <span className="ref-select-label">Tier:</span>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="ref-select-input"
            >
              <option value="All">All Tiers</option>
              <option value="Volunteer Member">Volunteer Member</option>
              <option value="Life Member">Life Member</option>
              <option value="Annual Member">Annual Member</option>
              <option value="Patron">Patron</option>
              <option value="Student Member">Student Member</option>
            </select>
          </div>

          <div className="ref-select-item">
            <span className="ref-select-label">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="ref-select-input"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* 5. Table Header Meta */}
      <div className="ref-table-meta-text">
        Showing {filteredMembers.length} of {members.length} registered members
      </div>

      {/* 6. Members Data Table Card */}
      <div className="ref-table-card">
        {loading ? (
          <div className="p-12 text-center text-muted">
            <RefreshCw size={26} className="animate-spin inline mb-2 text-blue-600" />
            <p className="font-semibold text-slate-700 text-sm">Loading records...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="p-12 text-center text-muted">
            <Users size={32} className="mx-auto mb-2 opacity-40 text-slate-500" />
            <p className="font-semibold text-sm text-slate-700 mb-1">
              No members found matching your search.
            </p>
          </div>
        ) : (
          <table className="ref-table">
            <thead>
              <tr>
                <th style={{ width: '27%' }}>Member Details</th>
                <th style={{ width: '13%' }}>Member ID</th>
                <th style={{ width: '23%' }}>Contact Information</th>
                <th style={{ width: '14%' }}>Membership Tier</th>
                <th style={{ width: '10%' }}>Status</th>
                <th style={{ width: '13%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((m) => {
                const status = m.membership?.status || 'Active';
                const tier = m.membership?.membershipType || m.membershipType || 'Annual Member';

                return (
                  <tr key={m._id}>
                    {/* 1. Member Details */}
                    <td>
                      <div className="ref-profile-cell">
                        <div className="ref-avatar-circle">
                          {getInitials(m.name)}
                        </div>
                        <div>
                          <div className="ref-name-row">
                            <span className="ref-member-name">{m.name}</span>
                            {m.bloodGroup && (
                              <span className="ref-tag-pill">{m.bloodGroup}</span>
                            )}
                          </div>
                          <div className="ref-member-role">
                            {m.designation || 'General Member'}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* 2. Member ID */}
                    <td>
                      <span className="ref-id-pill">
                        {m.memberId || 'N/A'}
                      </span>
                    </td>

                    {/* 3. Contact Information */}
                    <td>
                      <div className="ref-contact-col">
                        <div className="ref-contact-item">
                          <Mail size={13} className="text-slate-400 flex-shrink-0" />
                          <span>{m.email}</span>
                        </div>
                        <div className="ref-contact-item ref-contact-sub">
                          <Phone size={13} className="text-slate-400 flex-shrink-0" />
                          <span>{m.phone || 'No phone'}</span>
                        </div>
                      </div>
                    </td>

                    {/* 4. Membership Tier */}
                    <td>
                      <span className={`ref-tier-badge ${getTierBadgeClass(tier)}`}>
                        {tier === 'Life Member' && <Star size={12} fill="#9333ea" />}
                        {tier}
                      </span>
                    </td>

                    {/* 5. Status */}
                    <td>
                      <span
                        className={`ref-status-item ${
                          status === 'Active' ? 'ref-status-active' : 'ref-status-suspended'
                        }`}
                      >
                        <span className="ref-status-dot"></span>
                        {status}
                      </span>
                    </td>

                    {/* 6. Actions */}
                    <td style={{ textAlign: 'center' }}>
                      <div className="ref-action-group" style={{ justifyContent: 'center' }}>
                        <button
                          onClick={() => handleStatusToggle(m._id, status)}
                          className={status === 'Active' ? 'ref-btn-suspend' : 'ref-btn-activate'}
                          title={status === 'Active' ? 'Suspend' : 'Activate'}
                        >
                          <Pause size={10} strokeWidth={3} />
                          <span>{status === 'Active' ? 'Suspend' : 'Activate'}</span>
                        </button>
                        {m.role !== 'admin' ? (
                          <button
                            onClick={() => handleDeleteMember(m._id, m.name)}
                            className="ref-btn-trash"
                            title="Delete Member Record"
                          >
                            <Trash2 size={13} />
                          </button>
                        ) : (
                          <span style={{ width: '32px', display: 'inline-block' }} aria-hidden="true" />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {/* 7. Pagination Footer */}
        <div className="ref-table-pagination">
          <button className="ref-page-btn" title="Previous Page">
            <ChevronLeft size={14} />
          </button>
          <button className="ref-page-btn active">1</button>
          <button className="ref-page-btn" title="Next Page">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* 8. Enroll New Member Modal */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Enroll New Member
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Register official profile details into the NGO database.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="btn-close"
                title="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddMember}>
              <div className="modal-body">
                <div className="eco-form-grid-2">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Sri / Smt. Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                  <div className="eco-form-field">
                    <label className="eco-field-label">Phone Number *</label>
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

                <div className="eco-form-grid-2">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="member@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                  <div className="eco-form-field">
                    <label className="eco-field-label">Membership Category</label>
                    <select
                      value={formData.membershipType}
                      onChange={(e) =>
                        setFormData({ ...formData, membershipType: e.target.value })
                      }
                      className="eco-field-select"
                    >
                      <option value="Annual Member">Annual Member (₹500/yr)</option>
                      <option value="Life Member">Life Member (₹5,000)</option>
                      <option value="Volunteer Member">Volunteer Member</option>
                      <option value="Student Member">Student Member</option>
                      <option value="Patron">Patron</option>
                    </select>
                  </div>
                </div>

                <div className="eco-form-grid-2">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Official Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Ghat Coordinator / Volunteer Lead"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                  <div className="eco-form-field">
                    <label className="eco-field-label">Blood Group</label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="eco-field-select"
                    >
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="O+">O+</option>
                      <option value="AB+">AB+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="O-">O-</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>

                <div className="eco-form-grid-2">
                  <div className="eco-form-field">
                    <label className="eco-field-label">City / Region</label>
                    <input
                      type="text"
                      placeholder="Rajahmundry / Kovvur / Godavari"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                  <div className="eco-form-field">
                    <label className="eco-field-label">Street / Location Address</label>
                    <input
                      type="text"
                      placeholder="Pushkar Ghat Rd / Main St"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="eco-cms-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="ref-btn-enroll"
                >
                  {submitting ? 'Enrolling...' : 'Enroll Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMembers;
