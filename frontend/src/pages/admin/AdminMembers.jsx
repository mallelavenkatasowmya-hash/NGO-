import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import {
  Users,
  Search,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  RefreshCw,
  X,
  CreditCard,
  Mail,
  Phone,
  Award,
  ShieldCheck,
  AlertTriangle,
  Filter,
} from 'lucide-react';

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tierFilter, setTierFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

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

  const resetFilters = () => {
    setSearchKeyword('');
    setStatusFilter('All');
    setTierFilter('All');
  };

  const hasActiveFilters = searchKeyword !== '' || statusFilter !== 'All' || tierFilter !== 'All';

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

  // Dynamic stats
  const totalCount = members.length;
  const activeCount = members.filter((m) => (m.membership?.status || 'Active') === 'Active').length;
  const lifeCount = members.filter(
    (m) => (m.membership?.membershipType || m.membershipType) === 'Life Member'
  ).length;
  const volunteerCount = members.filter(
    (m) =>
      m.role === 'volunteer' ||
      (m.membership?.membershipType || '').toLowerCase().includes('volunteer') ||
      (m.designation || '').toLowerCase().includes('coordinator') ||
      (m.designation || '').toLowerCase().includes('volunteer')
  ).length;

  const getTierBadgeClass = (tier) => {
    switch (tier) {
      case 'Life Member':
        return 'eco-tier-life';
      case 'Annual Member':
        return 'eco-tier-annual';
      case 'Volunteer Member':
        return 'eco-tier-volunteer';
      case 'Patron':
        return 'eco-tier-patron';
      case 'Student Member':
        return 'eco-tier-student';
      default:
        return 'eco-tier-annual';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Pending Approval':
        return 'status-pending';
      case 'Expired':
        return 'status-expired';
      case 'Suspended':
        return 'status-suspended';
      default:
        return 'status-active';
    }
  };

  const getInitials = (name) => {
    if (!name) return 'M';
    const clean = name.replace(/^(Sri|Smt\.|Smt|Dr\.|Dr|Mr\.|Mr|Mrs\.|Mrs)\s+/i, '').trim();
    return (clean || name).charAt(0).toUpperCase();
  };

  return (
    <div className="eco-cms-page">
      {/* 1. Header Row */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Verified Directory &bull; NGO Central Registry
            </span>
          </div>
          <h1 className="eco-cms-main-title">Members & Volunteers Directory</h1>
          <p className="eco-cms-sub-title">
            Maintain verified membership profiles, registration IDs, contact details, and validity statuses.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={fetchMembers}
            className="eco-cms-btn-secondary"
            disabled={loading}
            title="Reload latest records from MongoDB"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh Database</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="eco-cms-btn-primary"
            title="Enroll a new member"
          >
            <Plus size={15} />
            <span>Enroll New Member</span>
          </button>
        </div>
      </div>

      {/* 2. Alert Feedback Banner */}
      {feedback.message && (
        <div
          className={`eco-cms-alert-banner ${
            feedback.type === 'error' ? 'alert-danger' : 'alert-success'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'error' ? (
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

      {/* 3. Responsive 4-Card KPI Strip */}
      <section className="eco-kpi-4-strip">
        {/* Card 1: Total Enrolled */}
        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <Users size={20} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Total Enrolled</span>
            <div className="eco-stat-number">{totalCount}</div>
            <span className="eco-stat-trend text-blue-icon">Registered Members</span>
          </div>
        </div>

        {/* Card 2: Active Members */}
        <div className="eco-stat-card eco-stat-green">
          <div className="eco-stat-icon-bubble bg-green-bubble">
            <CheckCircle size={20} className="text-green-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Active Members</span>
            <div className="eco-stat-number">{activeCount}</div>
            <span className="eco-stat-trend text-trend-green">Current & Verified</span>
          </div>
        </div>

        {/* Card 3: Volunteers & Leads */}
        <div className="eco-stat-card eco-stat-orange">
          <div className="eco-stat-icon-bubble bg-orange-bubble">
            <ShieldCheck size={20} className="text-orange-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Volunteers & Leads</span>
            <div className="eco-stat-number">{volunteerCount}</div>
            <span className="eco-stat-trend text-orange-icon">Riverfront Field Force</span>
          </div>
        </div>

        {/* Card 4: Life Members */}
        <div className="eco-stat-card eco-stat-purple">
          <div className="eco-stat-icon-bubble bg-purple-bubble">
            <Award size={20} className="text-purple-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Life Members</span>
            <div className="eco-stat-number">{lifeCount}</div>
            <span className="eco-stat-trend text-purple-icon">Honorary Lifetime Tier</span>
          </div>
        </div>
      </section>

      {/* 4. Filter & Search Card */}
      <section className="eco-memberships-filter-card">
        <div className="eco-filter-left">
          <div className="eco-filter-search-box">
            <Search size={16} className="eco-search-input-icon" />
            <input
              type="text"
              placeholder="Search by name, email, phone, or Member ID..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="eco-filter-input"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="eco-clear-search-btn"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="eco-filter-right">
          <div className="eco-filter-group">
            <label className="eco-filter-label">Tier:</label>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Tiers</option>
              <option value="Life Member">Life Member</option>
              <option value="Annual Member">Annual Member</option>
              <option value="Volunteer Member">Volunteer Member</option>
              <option value="Patron">Patron</option>
              <option value="Student Member">Student Member</option>
            </select>
          </div>

          <div className="eco-filter-group">
            <label className="eco-filter-label">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active Only</option>
              <option value="Suspended">Suspended</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="eco-reset-filters-btn"
              title="Reset all filters"
            >
              <X size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </section>

      {/* 5. Members Data Table Card */}
      <section className="eco-table-card">
        <div className="eco-table-meta-bar">
          <div>
            Showing <span className="eco-table-record-count">{filteredMembers.length}</span> of{' '}
            <span className="eco-table-record-count">{totalCount}</span> registered members
          </div>
          {filteredMembers.length !== totalCount && (
            <span className="text-xs text-amber-600 font-medium">
              Filtered records active
            </span>
          )}
        </div>

        {loading ? (
          <div className="p-12 text-center text-muted">
            <RefreshCw size={28} className="animate-spin inline mb-3 text-emerald-700" />
            <p className="font-semibold text-slate-700">Loading directory from database...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="p-12 text-center text-muted">
            <Users size={36} className="mx-auto mb-3 opacity-40 text-slate-500" />
            <p className="font-semibold text-base text-slate-700 mb-1">
              No members found matching your search.
            </p>
            <span className="text-sm text-slate-500">
              Try adjusting your search criteria or reset filters.
            </span>
            {hasActiveFilters && (
              <div className="mt-3">
                <button onClick={resetFilters} className="eco-reset-filters-btn">
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="eco-table-scroll">
            <table className="eco-data-table">
              <thead>
                <tr>
                  <th>Member Details</th>
                  <th>Member ID</th>
                  <th>Contact Information</th>
                  <th>Membership Tier</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((m) => {
                  const status = m.membership?.status || 'Active';
                  const tier = m.membership?.membershipType || m.membershipType || 'Annual Member';

                  return (
                    <tr key={m._id}>
                      {/* 1. Member Profile Cell with Avatar Circle and Distinct Lines */}
                      <td>
                        <div className="eco-member-profile-cell">
                          <div className="eco-member-avatar-circle">
                            {getInitials(m.name)}
                          </div>
                          <div className="eco-member-text-meta">
                            <div className="eco-member-name">
                              {m.name}
                              {m.bloodGroup && (
                                <span className="eco-blood-badge" title={`Blood Group: ${m.bloodGroup}`}>
                                  {m.bloodGroup}
                                </span>
                              )}
                            </div>
                            <div className="eco-member-designation">
                              {m.designation || 'General Member'}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 2. Member ID Code */}
                      <td>
                        <span className="eco-id-tag">
                          {m.memberId || 'N/A'}
                        </span>
                      </td>

                      {/* 3. Contact Cell with Mail & Phone Icons */}
                      <td>
                        <div className="eco-member-contact-cell">
                          <div className="eco-contact-line">
                            <Mail size={12} className="text-slate-400 flex-shrink-0" />
                            <span>{m.email}</span>
                          </div>
                          <div className="eco-contact-line eco-contact-sub">
                            <Phone size={12} className="text-slate-400 flex-shrink-0" />
                            <span>{m.phone || 'No phone'}</span>
                          </div>
                        </div>
                      </td>

                      {/* 4. Membership Tier Badge */}
                      <td>
                        <span className={`eco-tier-pill ${getTierBadgeClass(tier)}`}>
                          {tier === 'Life Member' && <Award size={12} />}
                          {tier}
                        </span>
                      </td>

                      {/* 5. Status Badge */}
                      <td>
                        <span className={`eco-status-pill ${getStatusClass(status)}`}>
                          <span className="status-dot-indicator"></span>
                          {status}
                        </span>
                      </td>

                      {/* 6. Clean Actions */}
                      <td style={{ textAlign: 'right' }}>
                        <div className="eco-table-action-group" style={{ justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => handleStatusToggle(m._id, status)}
                            className={status === 'Active' ? 'eco-btn-action-suspend' : 'eco-btn-action-activate'}
                            title={status === 'Active' ? 'Suspend Member Privileges' : 'Activate Member Privileges'}
                          >
                            {status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                          {m.role !== 'admin' && (
                            <button
                              onClick={() => handleDeleteMember(m._id, m.name)}
                              className="eco-btn-action-delete"
                              title="Delete Member Record"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 6. Enroll New Member Modal */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Enroll New Member / Volunteer
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
                      placeholder="e.g. Sri / Smt. Full Name"
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
                  className="eco-cms-btn-primary"
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
