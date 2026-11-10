import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import { useAuth } from '../../context/AuthContext';
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
  Edit2,
  Eye,
  Shield,
  MapPin,
  Calendar,
  AlertTriangle,
  Award,
} from 'lucide-react';

const AdminMembers = () => {
  const { user: currentUser } = useAuth();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tierFilter, setTierFilter] = useState('All');

  // Modal States for Full CRUD Operations
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Auto-dismiss feedback after 4.5 seconds
  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(() => {
        setFeedback({ type: '', message: '' });
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Form State for Adding New Member (Create)
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

  // Form State for Editing Existing Member (Update)
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'member',
    designation: 'General Member',
    membershipType: 'Annual Member',
    status: 'Active',
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

  // 1. CREATE: Handle Enrolling a New Member
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

  // 2. READ: Open Full Details Modal
  const openViewModal = (member) => {
    setSelectedMember(member);
    setShowViewModal(true);
  };

  // 3. UPDATE: Open Edit Modal with Pre-populated Data
  const openEditModal = (member) => {
    setSelectedMember(member);
    setEditFormData({
      name: member.name || '',
      email: member.email || '',
      phone: member.phone || '',
      role: member.role || 'member',
      designation: member.designation || 'General Member',
      membershipType: member.membership?.membershipType || member.membershipType || 'Annual Member',
      status: member.membership?.status || 'Active',
      bloodGroup: member.bloodGroup || 'B+',
      street: member.address?.street || '',
      city: member.address?.city || 'Rajahmundry',
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!selectedMember) return;

    setSubmitting(true);
    setFeedback({ type: '', message: '' });

    try {
      await API.patch(`/admin/members/${selectedMember._id}`, {
        name: editFormData.name,
        email: editFormData.email,
        phone: editFormData.phone,
        role: editFormData.role,
        designation: editFormData.designation,
        membershipType: editFormData.membershipType,
        status: editFormData.status,
        bloodGroup: editFormData.bloodGroup,
        address: { street: editFormData.street, city: editFormData.city },
      });

      setFeedback({
        type: 'success',
        message: `Member record for "${editFormData.name}" successfully updated!`,
      });
      setShowEditModal(false);
      setSelectedMember(null);
      fetchMembers();
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'Failed to update member record',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // 4. UPDATE (Quick): Suspend / Activate Toggle
  const handleStatusToggle = async (userId, currentStatus, memberName) => {
    const nextStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
    try {
      await API.patch(`/admin/members/${userId}/membership`, { status: nextStatus });
      setFeedback({
        type: 'success',
        message: `Membership status for "${memberName}" updated to ${nextStatus}`,
      });
      fetchMembers();
    } catch (err) {
      setFeedback({ type: 'error', message: 'Failed to update membership status' });
    }
  };

  // 5. DELETE: Open Confirmation Modal and Confirm Delete
  const openDeleteModal = (member) => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedMember) return;

    setSubmitting(true);
    try {
      await API.delete(`/admin/members/${selectedMember._id}`);
      setFeedback({
        type: 'success',
        message: `Member record for "${selectedMember.name}" successfully removed.`,
      });
      setShowDeleteModal(false);
      setSelectedMember(null);
      fetchMembers();
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'Failed to remove member record',
      });
    } finally {
      setSubmitting(false);
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

  // Calculate dynamic stats matching reference
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
        <div className={`ref-alert-banner ${feedback.type === 'error' ? 'ref-alert-error' : ''}`}>
          <div className="ref-alert-left">
            {feedback.type === 'error' ? (
              <AlertTriangle size={18} className="text-red-500 flex-shrink-0" />
            ) : (
              <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback({ type: '', message: '' })}
            className="ref-alert-dismiss"
            title="Dismiss notification"
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

      {/* 5. Members Data Table Card */}
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
          <div className="ref-table-responsive">
            <table className="ref-table">
              <thead>
                <tr>
                  <th className="ref-col-details">Member Details</th>
                  <th className="ref-col-id">Member ID</th>
                  <th className="ref-col-contact">Contact Information</th>
                  <th className="ref-col-tier">Membership Tier</th>
                  <th className="ref-col-status">Status</th>
                  <th className="ref-col-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((m) => {
                  const status = m.membership?.status || 'Active';
                  const tier = m.membership?.membershipType || m.membershipType || 'Annual Member';
                  const isSelf = currentUser?._id && currentUser._id.toString() === m._id.toString();

                  return (
                    <tr key={m._id}>
                      {/* 1. Member Details */}
                      <td className="ref-col-details">
                        <div
                          className="ref-profile-cell cursor-pointer"
                          onClick={() => openViewModal(m)}
                          title="Click to view full member card"
                        >
                          <div className="ref-avatar-circle">
                            {getInitials(m.name)}
                          </div>
                          <div className="ref-profile-info">
                            <div className="ref-name-row">
                              <span className="ref-member-name hover:text-emerald-700 transition">
                                {m.name}
                              </span>
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
                      <td className="ref-col-id">
                        <span className="ref-id-pill">
                          {m.memberId || 'N/A'}
                        </span>
                      </td>

                      {/* 3. Contact Information */}
                      <td className="ref-col-contact">
                        <div className="ref-contact-col">
                          <div className="ref-contact-item" title={m.email}>
                            <Mail size={13} className="text-slate-400 flex-shrink-0" />
                            <span>{m.email}</span>
                          </div>
                          <div className="ref-contact-item ref-contact-sub" title={m.phone || 'No phone'}>
                            <Phone size={13} className="text-slate-400 flex-shrink-0" />
                            <span>{m.phone || 'No phone'}</span>
                          </div>
                        </div>
                      </td>

                      {/* 4. Membership Tier */}
                      <td className="ref-col-tier">
                        <span className={`ref-tier-badge ${getTierBadgeClass(tier)}`}>
                          {tier === 'Life Member' && <Star size={11} fill="#9333ea" />}
                          {tier}
                        </span>
                      </td>

                      {/* 5. Status */}
                      <td className="ref-col-status">
                        <button
                          type="button"
                          onClick={() => handleStatusToggle(m._id, status, m.name)}
                          className={`ref-status-badge ${
                            status === 'Active' ? 'active' : 'suspended'
                          }`}
                          title={`Status is ${status}. Click to ${
                            status === 'Active' ? 'Suspend' : 'Activate'
                          }`}
                        >
                          <span className="ref-status-dot-inner"></span>
                          <span>{status}</span>
                        </button>
                      </td>

                      {/* 6. Actions (Full CRUD Controls - View, Labeled Edit, Delete) */}
                      <td className="ref-col-actions">
                        <div className="ref-actions-container">
                          {/* READ: View Details & ID Card */}
                          <button
                            type="button"
                            onClick={() => openViewModal(m)}
                            className="ref-act-btn view"
                            title="View Member Profile & ID Card"
                            aria-label="View Details"
                          >
                            <Eye size={14} />
                          </button>

                          {/* UPDATE: Edit Profile (Labeled Edit Button) */}
                          <button
                            type="button"
                            onClick={() => openEditModal(m)}
                            className="ref-btn-edit-action"
                            title="Edit Member Profile"
                            aria-label="Edit Profile"
                          >
                            <Edit2 size={12} />
                            <span>Edit</span>
                          </button>

                          {/* DELETE: Remove Member Record */}
                          {!isSelf ? (
                            <button
                              type="button"
                              onClick={() => openDeleteModal(m)}
                              className="ref-act-btn delete"
                              title="Delete Member Record"
                              aria-label="Delete Record"
                            >
                              <Trash2 size={13} />
                            </button>
                          ) : (
                            <span
                              className="ref-act-placeholder"
                              title="Current logged-in administrator account"
                              aria-hidden="true"
                            />
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

        {/* 6. Table Card Footer: Meta Info & Pagination */}
        <div className="ref-table-footer">
          <div className="ref-table-meta-text">
            Showing <span className="font-semibold">{filteredMembers.length}</span> of{' '}
            <span className="font-semibold">{members.length}</span> registered members
          </div>
          <div className="ref-table-pagination">
            <button className="ref-page-btn" title="Previous Page" disabled>
              <ChevronLeft size={14} />
            </button>
            <button className="ref-page-btn active">1</button>
            <button className="ref-page-btn" title="Next Page" disabled>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODAL 1: CREATE (Enroll New Member)
          ========================================================================= */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Enroll New Member</h3>
                <span className="ref-modal-badge">Registration</span>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddMember}>
              <div className="ref-modal-body">
                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Sri / Smt. Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98480 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="member@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Membership Category</label>
                    <select
                      value={formData.membershipType}
                      onChange={(e) =>
                        setFormData({ ...formData, membershipType: e.target.value })
                      }
                      className="ref-form-select"
                    >
                      <option value="Annual Member">Annual Member (₹500/yr)</option>
                      <option value="Life Member">Life Member (₹5,000)</option>
                      <option value="Volunteer Member">Volunteer Member (Free)</option>
                      <option value="Student Member">Student Member</option>
                      <option value="Patron">Patron</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Official Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Ghat Coordinator / Volunteer Lead"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Blood Group</label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="ref-form-select"
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

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">City / Region</label>
                    <input
                      type="text"
                      placeholder="Rajahmundry / Kovvur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Street / Location Address</label>
                    <input
                      type="text"
                      placeholder="Pushkar Ghat Rd / Main St"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="ref-modal-footer">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="ref-modal-btn-cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="ref-modal-btn-save"
                >
                  {submitting ? 'Enrolling...' : 'Enroll Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: UPDATE (Edit Member Details)
          ========================================================================= */}
      {showEditModal && selectedMember && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Edit Member Profile</h3>
                <span className="ref-modal-badge">{selectedMember.memberId || 'ID Pending'}</span>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit}>
              <div className="ref-modal-body">
                {/* Member Identity Summary Card */}
                <div className="ref-modal-member-card">
                  <div className="ref-modal-member-info">
                    <span className="ref-modal-member-name">{selectedMember.name}</span>
                    <span className="ref-modal-member-sub">
                      <span>ID: {selectedMember.memberId || 'N/A'}</span>
                      <span>&bull;</span>
                      <span>{selectedMember.email}</span>
                    </span>
                  </div>
                  <span className={`ref-tier-badge ${getTierBadgeClass(editFormData.membershipType)}`}>
                    {editFormData.membershipType === 'Life Member' && <Star size={12} fill="#9333ea" />}
                    {editFormData.membershipType}
                  </span>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={editFormData.name}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={editFormData.phone}
                      onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={editFormData.email}
                      onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Official Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Ghat Coordinator / General Secretary"
                      value={editFormData.designation}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, designation: e.target.value })
                      }
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Membership Category (Tier)</label>
                    <select
                      value={editFormData.membershipType}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, membershipType: e.target.value })
                      }
                      className="ref-form-select"
                    >
                      <option value="Annual Member">Annual Member (₹500/yr)</option>
                      <option value="Life Member">Life Member (₹5,000)</option>
                      <option value="Volunteer Member">Volunteer Member (Free)</option>
                      <option value="Student Member">Student Member</option>
                      <option value="Patron">Patron</option>
                    </select>
                  </div>
                  <div className="ref-form-field">
                    <label className="ref-form-label">Membership Status</label>
                    <select
                      value={editFormData.status}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, status: e.target.value })
                      }
                      className="ref-form-select"
                    >
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                      <option value="Pending Approval">Pending Approval</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Blood Group</label>
                    <select
                      value={editFormData.bloodGroup}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, bloodGroup: e.target.value })
                      }
                      className="ref-form-select"
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
                  <div className="ref-form-field">
                    <label className="ref-form-label">City / Region</label>
                    <input
                      type="text"
                      value={editFormData.city}
                      onChange={(e) => setEditFormData({ ...editFormData, city: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Street / Location Address</label>
                  <input
                    type="text"
                    value={editFormData.street}
                    onChange={(e) => setEditFormData({ ...editFormData, street: e.target.value })}
                    className="ref-form-input"
                  />
                </div>
              </div>

              <div className="ref-modal-footer">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="ref-modal-btn-cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="ref-modal-btn-save"
                >
                  {submitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: READ (View Member ID Card & Full Profile)
          ========================================================================= */}
      {showViewModal && selectedMember && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '620px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Member Profile & Identification</h3>
                <span className="ref-modal-badge">{selectedMember.memberId || 'ID Pending'}</span>
              </div>
              <button
                onClick={() => setShowViewModal(false)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              {/* Digital NGO ID Card Preview */}
              <div className="ref-id-card-wrap">
                <div className="ref-id-card-top">
                  <div>
                    <span className="ref-id-card-title">Official Member Identification</span>
                    <div className="ref-id-card-org">Godhavari Nadhi Paryavarana Parishubratha</div>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                    {selectedMember.membership?.membershipType || selectedMember.membershipType || 'Member'}
                  </span>
                </div>

                <div className="ref-id-card-mid">
                  <div className="ref-id-card-avatar">
                    {getInitials(selectedMember.name)}
                  </div>
                  <div className="ref-id-card-info">
                    <span className="ref-id-card-name">{selectedMember.name}</span>
                    <span className="ref-id-card-designation">
                      {selectedMember.designation || 'General Member'}
                    </span>
                  </div>
                </div>

                <div className="ref-id-card-bottom">
                  <div className="ref-id-card-meta">
                    <span className="ref-id-card-meta-lbl">Registration ID</span>
                    <span className="ref-id-card-meta-val">{selectedMember.memberId || 'Pending'}</span>
                  </div>
                  <div className="ref-id-card-meta">
                    <span className="ref-id-card-meta-lbl">Blood Group</span>
                    <span className="ref-id-card-meta-val">{selectedMember.bloodGroup || 'N/A'}</span>
                  </div>
                  <div className="ref-id-card-meta">
                    <span className="ref-id-card-meta-lbl">Status</span>
                    <span className="ref-id-card-meta-val">
                      {selectedMember.membership?.status || 'Active'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Details Grid */}
              <div className="ref-details-grid">
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Email Address</span>
                  <span className="ref-detail-value">{selectedMember.email}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Phone Number</span>
                  <span className="ref-detail-value">{selectedMember.phone || 'Not provided'}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Designation / Role</span>
                  <span className="ref-detail-value">{selectedMember.designation || 'General Member'}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Membership Category</span>
                  <span className="ref-detail-value">
                    {selectedMember.membership?.membershipType || selectedMember.membershipType || 'Annual Member'}
                  </span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">City / Region</span>
                  <span className="ref-detail-value">
                    {selectedMember.address?.city || 'Rajahmundry'}
                  </span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Street Address</span>
                  <span className="ref-detail-value">
                    {selectedMember.address?.street || 'Not provided'}
                  </span>
                </div>
                {selectedMember.membership?.validTo && (
                  <div className="ref-detail-item">
                    <span className="ref-detail-label">Valid Until</span>
                    <span className="ref-detail-value">
                      {new Date(selectedMember.membership.validTo).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {selectedMember.membership?.feePaid !== undefined && (
                  <div className="ref-detail-item">
                    <span className="ref-detail-label">Fee Paid</span>
                    <span className="ref-detail-value font-bold text-emerald-700">
                      ₹{selectedMember.membership.feePaid.toLocaleString()} ({selectedMember.membership.paymentStatus || 'Paid'})
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setShowViewModal(false)}
                className="ref-modal-btn-cancel"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const curStatus = selectedMember.membership?.status || 'Active';
                  handleStatusToggle(selectedMember._id, curStatus, selectedMember.name);
                  setShowViewModal(false);
                }}
                className={
                  (selectedMember.membership?.status || 'Active') === 'Active'
                    ? 'ref-btn-suspend'
                    : 'ref-btn-activate'
                }
                style={{ padding: '0.45rem 0.9rem' }}
                title="Quick status toggle"
              >
                <Pause size={12} strokeWidth={2.5} />
                <span>
                  {(selectedMember.membership?.status || 'Active') === 'Active'
                    ? 'Suspend Member'
                    : 'Activate Member'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowViewModal(false);
                  openEditModal(selectedMember);
                }}
                className="ref-modal-btn-save"
              >
                Edit Member Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 4: DELETE (Confirmation Dialog)
          ========================================================================= */}
      {showDeleteModal && selectedMember && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '480px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="ref-modal-title text-red-600">Delete Member Record</h3>
              </div>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              <p className="text-slate-700 text-sm leading-relaxed">
                Are you sure you want to permanently remove the member record for:
              </p>

              <div className="bg-red-50/70 border border-red-200 rounded-xl p-3.5 flex items-center gap-3">
                <div className="ref-avatar-circle" style={{ backgroundColor: '#dc2626' }}>
                  {getInitials(selectedMember.name)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{selectedMember.name}</div>
                  <div className="text-xs text-slate-500">
                    ID: {selectedMember.memberId || 'N/A'} &bull; {selectedMember.email}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                This action will delete their login credentials, member registration history, and active membership record from the NGO database. This cannot be undone.
              </p>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="ref-modal-btn-cancel"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={submitting}
                className="ref-modal-btn-danger"
              >
                {submitting ? 'Removing...' : 'Delete Member'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMembers;
