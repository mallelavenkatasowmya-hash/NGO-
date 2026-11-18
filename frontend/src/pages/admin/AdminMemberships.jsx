import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Users,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle,
  Edit2,
  X,
  RefreshCw,
  Star,
  User,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2,
  Pause,
  Plus,
  ShieldCheck,
  Sparkles,
  Award,
} from 'lucide-react';

const AdminMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Modal States for Full CRUD Operations
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  const [saveLoading, setSaveLoading] = useState(false);
  const [allMembers, setAllMembers] = useState([]);
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

  // Form State for Editing Membership (Update)
  const [formData, setFormData] = useState({
    membershipType: 'Annual Member',
    status: 'Active',
    validTo: '',
    feePaid: 0,
    paymentStatus: 'Paid',
    remarks: '',
  });

  // Form State for Granting New Membership (Create)
  const [addFormData, setAddFormData] = useState({
    userId: '',
    membershipType: 'Annual Member',
    status: 'Active',
    feePaid: 500,
    paymentStatus: 'Paid',
    validTo: '2027-03-31',
  });

  const fetchMemberships = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/memberships');
      setMemberships(res.data);
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: 'Failed to fetch membership records from database.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  const getInitials = (name) => {
    if (!name) return 'M';
    const clean = name.replace(/^(Sri|Smt\.|Smt|Dr\.|Dr|Mr\.|Mr|Mrs\.|Mrs)\s+/i, '').trim();
    return (clean || name).charAt(0).toUpperCase();
  };

  // 1. CREATE: Open Add / Grant Membership Modal
  const openAddModal = async () => {
    try {
      const res = await api.get('/admin/members');
      setAllMembers(res.data);
      if (res.data.length > 0) {
        setAddFormData((prev) => ({ ...prev, userId: res.data[0]._id }));
      }
    } catch (err) {
      console.error(err);
    }
    setShowAddModal(true);
  };

  const handleGrantMembership = async (e) => {
    e.preventDefault();
    if (!addFormData.userId) return;

    try {
      setSaveLoading(true);
      await api.patch(`/admin/members/${addFormData.userId}/membership`, {
        membershipType: addFormData.membershipType,
        status: addFormData.status,
        feePaid: addFormData.feePaid,
        paymentStatus: addFormData.paymentStatus,
        validTo: addFormData.validTo,
      });
      setFeedback({
        type: 'success',
        message: 'New membership record successfully created and saved to database.',
      });
      setShowAddModal(false);
      fetchMemberships();
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to grant membership.',
      });
    } finally {
      setSaveLoading(false);
    }
  };

  // 2. READ: Open Full Details Modal
  const openViewModal = (item) => {
    setViewingItem(item);
  };

  // 3. UPDATE: Open Edit Modal
  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      membershipType: item.membershipType || 'Annual Member',
      status: item.status || 'Active',
      validTo: item.validTo ? new Date(item.validTo).toISOString().split('T')[0] : '',
      feePaid: item.feePaid || 0,
      paymentStatus: item.paymentStatus || 'Paid',
      remarks: item.remarks || '',
    });
    setFeedback({ type: '', message: '' });
  };

  const handleSaveMembership = async (e) => {
    e.preventDefault();
    if (!editingItem) return;

    try {
      setSaveLoading(true);
      const res = await api.patch(`/admin/memberships/${editingItem._id}`, formData);
      setMemberships((prev) =>
        prev.map((m) => (m._id === editingItem._id ? res.data : m))
      );
      setFeedback({
        type: 'success',
        message: `Membership for ${editingItem.user?.name || editingItem.membershipNumber} successfully updated.`,
      });
      setEditingItem(null);
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to update membership in database.',
      });
    } finally {
      setSaveLoading(false);
    }
  };

  // 4. UPDATE (Quick): Suspend / Activate Status Toggle
  const handleStatusToggle = async (item) => {
    const nextStatus = item.status === 'Active' ? 'Suspended' : 'Active';
    try {
      const res = await api.patch(`/admin/memberships/${item._id}`, { status: nextStatus });
      setMemberships((prev) =>
        prev.map((m) => (m._id === item._id ? res.data : m))
      );
      setFeedback({
        type: 'success',
        message: `Membership status for "${item.user?.name || item.membershipNumber}" changed to ${nextStatus}.`,
      });
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to update membership status.',
      });
    }
  };

  // 5. DELETE: Remove Membership Record
  const openDeleteModal = (item) => {
    setDeletingItem(item);
  };

  const handleConfirmDelete = async () => {
    if (!deletingItem) return;

    try {
      setSaveLoading(true);
      await api.delete(`/admin/memberships/${deletingItem._id}`);
      setMemberships((prev) => prev.filter((m) => m._id !== deletingItem._id));
      setFeedback({
        type: 'success',
        message: `Membership record for "${deletingItem.user?.name || deletingItem.membershipNumber}" successfully removed.`,
      });
      setDeletingItem(null);
    } catch (err) {
      setFeedback({
        type: 'danger',
        message: err.response?.data?.message || 'Failed to delete membership record.',
      });
    } finally {
      setSaveLoading(false);
    }
  };

  // Filter & Search Logic
  const filtered = memberships.filter((m) => {
    const matchesSearch =
      !search ||
      m.membershipNumber?.toLowerCase().includes(search.toLowerCase()) ||
      m.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      m.user?.memberId?.toLowerCase().includes(search.toLowerCase()) ||
      m.user?.email?.toLowerCase().includes(search.toLowerCase());

    const matchesType = filterType === 'All' || m.membershipType === filterType;
    const matchesStatus = filterStatus === 'All' || m.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  // Dynamic Statistics
  const totalCount = memberships.length;
  const activeCount = memberships.filter((m) => m.status === 'Active').length;
  const pendingCount = memberships.filter((m) => m.status === 'Pending Approval').length;
  const lifeCount = memberships.filter((m) => m.membershipType === 'Life Member').length;

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

  return (
    <div className="ref-members-page">
      {/* 1. Header with Refresh and Grant Actions */}
      <div className="ref-members-header">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <Users size={24} />
          </div>
          <div className="ref-header-text">
            <h2>Tiers & Renewals</h2>
            <p>Oversee tier levels, validity dates, renewal status, and fee records.</p>
          </div>
        </div>

        <div className="ref-header-actions">
          <button
            onClick={openAddModal}
            className="ref-btn-enroll"
            title="Grant new membership to a member"
          >
            <Plus size={14} />
            <span>Grant Membership</span>
          </button>
        </div>
      </div>

      {/* 2. Feedback Alert Banner */}
      {feedback.message && (
        <div className="ref-alert-banner">
          <div className="ref-alert-left">
            {feedback.type === 'success' ? (
              <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertTriangle size={18} className="text-red-600 flex-shrink-0" />
            )}
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
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-blue">
            <Users size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Total Memberships</span>
            <span className="ref-kpi-value">{totalCount}</span>
            <span className="ref-kpi-sub text-blue-600">Registered</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <CheckCircle size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Active Members</span>
            <span className="ref-kpi-value">{activeCount}</span>
            <span className="ref-kpi-sub text-emerald-600">Verified & Current</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-orange">
            <Clock size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Pending Approval</span>
            <span className="ref-kpi-value">{pendingCount}</span>
            <span className="ref-kpi-sub text-orange-600">
              {pendingCount > 0 ? 'Action Needed' : 'All Cleared'}
            </span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-purple">
            <Star size={18} fill="#a855f7" />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Life Members</span>
            <span className="ref-kpi-value">{lifeCount}</span>
            <span className="ref-kpi-sub text-purple-600">Lifetime Tier</span>
          </div>
        </div>
      </div>

      {/* 4. Filter Bar Card */}
      <div className="ref-filter-card">
        <div className="ref-search-wrap">
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by Member Name, ID, or Membership No..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="btn-close"
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="ref-filter-actions">
          <div className="ref-select-item">
            <Filter size={13} className="text-slate-500" />
            <span className="ref-select-label">TIER:</span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="ref-select-input"
            >
              <option value="All">All Tiers</option>
              <option value="Life Member">Life Member</option>
              <option value="Annual Member">Annual Member</option>
              <option value="Volunteer Member">Volunteer Member</option>
              <option value="Patron">Patron</option>
              <option value="Student Member">Student Member</option>
            </select>
          </div>

          <div className="ref-select-item">
            <span className="ref-select-label">STATUS:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="ref-select-input"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Expired">Expired</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* 5. Memberships Data Table Card (Zero Horizontal Overflow, Compact & Professional) */}
      <div className="ref-table-card">
        {loading ? (
          <div className="p-12 text-center text-muted">
            <RefreshCw size={26} className="animate-spin inline mb-2 text-blue-600" />
            <p className="font-semibold text-slate-700 text-sm">Loading records...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-muted">
            <Users size={32} className="mx-auto mb-2 opacity-40 text-slate-500" />
            <p className="font-semibold text-sm text-slate-700 mb-1">
              No membership records matched your filters.
            </p>
          </div>
        ) : (
          <div className="ref-table-responsive">
            <table className="ref-table">
              <thead>
                <tr>
                  <th style={{ width: '23%' }}>MEMBER NAME</th>
                  <th style={{ width: '11%' }}>MEMBER ID</th>
                  <th style={{ width: '13%' }}>TIER / TYPE</th>
                  <th style={{ width: '12%' }}>STATUS</th>
                  <th style={{ width: '8%' }}>VALID UNTIL</th>
                  <th style={{ width: '6%' }}>FEE PAID</th>
                  <th style={{ width: '8%' }}>PAYMENT</th>
                  <th style={{ width: '19%', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item._id}>
                    {/* 1. Member Name with Avatar Circle */}
                    <td>
                      <div
                        className="ref-profile-cell cursor-pointer"
                        onClick={() => openViewModal(item)}
                        title="Click to view full membership details"
                      >
                        <div className="ref-avatar-circle">
                          {getInitials(item.user?.name)}
                        </div>
                        <div className="ref-profile-info">
                          <div className="ref-name-row">
                            <span className="ref-member-name hover:text-emerald-700 transition">
                              {item.user?.name || 'Unknown Member'}
                            </span>
                            {item.user?.bloodGroup && (
                              <span className="ref-tag-pill">{item.user.bloodGroup}</span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 truncate" title={item.user?.email}>
                            {item.user?.email || 'No email registered'}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* 2. Member ID */}
                    <td>
                      <span className="ref-id-pill">
                        {item.user?.memberId || item.membershipNumber || 'N/A'}
                      </span>
                    </td>

                    {/* 3. Tier / Type */}
                    <td>
                      <span className={`ref-tier-badge ${getTierBadgeClass(item.membershipType)}`}>
                        {item.membershipType === 'Life Member' ? (
                          <Star size={11} fill="#9333ea" />
                        ) : (
                          <User size={11} />
                        )}
                        <span>{item.membershipType}</span>
                      </span>
                    </td>

                    {/* 4. Status (Interactive Status Toggle with Inner Dot) */}
                    <td>
                      <button
                        type="button"
                        onClick={() => handleStatusToggle(item)}
                        className={`ref-status-badge ${
                          item.status === 'Active' ? 'active' : 'suspended'
                        }`}
                        title={`Status is ${item.status}. Click to ${
                          item.status === 'Active' ? 'Suspend' : 'Activate'
                        }`}
                      >
                        <span className="ref-status-dot-inner"></span>
                        <span>{item.status}</span>
                      </button>
                    </td>

                    {/* 5. Valid Until */}
                    <td>
                      <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        {item.validTo
                          ? new Date(item.validTo).toLocaleDateString()
                          : item.membershipType === 'Life Member'
                          ? 'Lifetime'
                          : '1/1/2051'}
                      </span>
                    </td>

                    {/* 6. Fee Paid */}
                    <td>
                      <span className="font-bold text-slate-900 text-xs whitespace-nowrap">
                        ₹{(item.feePaid || 0).toLocaleString()}
                      </span>
                    </td>

                    {/* 7. Payment */}
                    <td>
                      <span className="ref-payment-paid text-xs">
                        <CheckCircle size={13} className="text-emerald-500" />
                        <span>{item.paymentStatus || 'Paid'}</span>
                      </span>
                    </td>

                    {/* 8. Full CRUD Actions: View, Labeled Edit, Delete */}
                    <td style={{ textAlign: 'right' }}>
                      <div className="ref-actions-container">
                        {/* READ: View Membership & ID Card */}
                        <button
                          type="button"
                          onClick={() => openViewModal(item)}
                          className="ref-act-btn view"
                          title="View Membership Details & Card"
                          aria-label="View Details"
                        >
                          <Eye size={13} />
                        </button>

                        {/* UPDATE: Edit Profile */}
                        <button
                          type="button"
                          onClick={() => openEditModal(item)}
                          className="ref-btn-edit-action"
                          title="Edit Membership Record"
                          aria-label="Edit Record"
                        >
                          <Edit2 size={11} />
                          <span>Edit</span>
                        </button>

                        {/* DELETE: Remove Membership Record (Icon Only) */}
                        <button
                          type="button"
                          onClick={() => openDeleteModal(item)}
                          className="ref-act-btn delete"
                          title="Delete Membership Record"
                          aria-label="Delete Record"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 6. Table Card Footer: Clean Pagination */}
        <div className="ref-table-footer">
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
          MODAL 1: CREATE (Grant New Membership)
          ========================================================================= */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Grant Membership</h3>
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

            <form
              onSubmit={handleGrantMembership}
              style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
            >
              <div className="ref-modal-body">
                <div className="ref-form-field">
                  <label className="ref-form-label">Select Registered Member *</label>
                  <select
                    value={addFormData.userId}
                    onChange={(e) =>
                      setAddFormData({ ...addFormData, userId: e.target.value })
                    }
                    className="ref-form-select"
                    required
                  >
                    {allMembers.map((m) => (
                      <option key={m._id} value={m._id}>
                        {m.name} ({m.memberId || 'Pending ID'}) &bull; {m.email}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Membership Tier *</label>
                    <select
                      value={addFormData.membershipType}
                      onChange={(e) =>
                        setAddFormData({ ...addFormData, membershipType: e.target.value })
                      }
                      className="ref-form-select"
                      required
                    >
                      <option value="Life Member">Life Member (₹5,000)</option>
                      <option value="Annual Member">Annual Member (₹500)</option>
                      <option value="Volunteer Member">Volunteer Member (₹0)</option>
                      <option value="Student Member">Student Member (₹200)</option>
                      <option value="Patron">Patron (₹10,000)</option>
                    </select>
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Status *</label>
                    <select
                      value={addFormData.status}
                      onChange={(e) =>
                        setAddFormData({ ...addFormData, status: e.target.value })
                      }
                      className="ref-form-select"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Pending Approval">Pending Approval</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Fee Paid (₹)</label>
                    <input
                      type="number"
                      min="0"
                      value={addFormData.feePaid}
                      onChange={(e) =>
                        setAddFormData({ ...addFormData, feePaid: Number(e.target.value) })
                      }
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Payment Status</label>
                    <select
                      value={addFormData.paymentStatus}
                      onChange={(e) =>
                        setAddFormData({ ...addFormData, paymentStatus: e.target.value })
                      }
                      className="ref-form-select"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Waived">Waived</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Valid Until</label>
                  <input
                    type="date"
                    value={addFormData.validTo}
                    onChange={(e) =>
                      setAddFormData({ ...addFormData, validTo: e.target.value })
                    }
                    className="ref-form-input"
                  />
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
                  disabled={saveLoading}
                  className="ref-modal-btn-save"
                >
                  {saveLoading ? 'Granting...' : 'Grant Membership'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: UPDATE (Edit Membership)
          ========================================================================= */}
      {editingItem && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Edit Membership</h3>
                <span className="ref-modal-badge">
                  {editingItem.membershipNumber}
                </span>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSaveMembership}
              style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
            >
              <div className="ref-modal-body">
                {/* Member Identity Banner */}
                <div className="ref-modal-member-card">
                  <div className="ref-modal-member-info">
                    <div className="ref-modal-member-name">
                      {editingItem.user?.name || 'Member Profile'}
                    </div>
                    <div className="ref-modal-member-sub">
                      <span><strong>ID:</strong> {editingItem.user?.memberId || 'N/A'}</span>
                      <span>&bull;</span>
                      <span>{editingItem.user?.email || 'No email registered'}</span>
                      {editingItem.user?.phone && (
                        <>
                          <span>&bull;</span>
                          <span>{editingItem.user?.phone}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Membership Tier *</label>
                  <select
                    value={formData.membershipType}
                    onChange={(e) =>
                      setFormData({ ...formData, membershipType: e.target.value })
                    }
                    className="ref-form-select"
                    required
                  >
                    <option value="Life Member">Life Member</option>
                    <option value="Annual Member">Annual Member</option>
                    <option value="Volunteer Member">Volunteer Member</option>
                    <option value="Patron">Patron</option>
                    <option value="Student Member">Student Member</option>
                  </select>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Status *</label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                      className="ref-form-select"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Pending Approval">Pending Approval</option>
                      <option value="Expired">Expired</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Valid Until</label>
                    <input
                      type="date"
                      value={formData.validTo}
                      onChange={(e) =>
                        setFormData({ ...formData, validTo: e.target.value })
                      }
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Fee Paid (₹)</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.feePaid}
                      onChange={(e) =>
                        setFormData({ ...formData, feePaid: Number(e.target.value) })
                      }
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Payment Status</label>
                    <select
                      value={formData.paymentStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentStatus: e.target.value })
                      }
                      className="ref-form-select"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Waived">Waived</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Admin Notes / Remarks</label>
                  <textarea
                    rows={2}
                    placeholder="Enter any administrative notes or renewal remarks..."
                    value={formData.remarks}
                    onChange={(e) =>
                      setFormData({ ...formData, remarks: e.target.value })
                    }
                    className="ref-form-textarea"
                  />
                </div>
              </div>

              <div className="ref-modal-footer">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="ref-modal-btn-cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveLoading}
                  className="ref-modal-btn-save"
                >
                  {saveLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: READ (View Membership Details & Card)
          ========================================================================= */}
      {viewingItem && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '620px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Membership Details</h3>
                <span className="ref-modal-badge">{viewingItem.membershipNumber}</span>
              </div>
              <button
                onClick={() => setViewingItem(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              {/* Green Header Banner */}
              <div className="ref-id-card-banner">
                <div className="ref-id-banner-left">
                  <ShieldCheck size={16} className="ref-id-banner-icon" />
                  <span className="ref-id-banner-title">Official NGO Membership Record</span>
                </div>
                <div className="ref-id-banner-tier-pill">
                  <Sparkles size={12} className="ref-id-banner-sparkle" />
                  <span>{viewingItem.membershipType || 'Annual Member'}</span>
                </div>
              </div>

              {/* Member Profile Identity Header */}
              <div className="ref-view-member-card">
                <div className="ref-avatar-circle" style={{ width: '48px', height: '48px', fontSize: '1.1rem' }}>
                  {getInitials(viewingItem.user?.name)}
                </div>
                <div className="ref-view-member-info">
                  <div className="ref-view-name-row">
                    <span className="ref-view-member-name">{viewingItem.user?.name || 'Member'}</span>
                    {viewingItem.user?.bloodGroup && (
                      <span className="ref-tag-pill">{viewingItem.user.bloodGroup}</span>
                    )}
                  </div>
                  <div className="ref-view-member-sub">
                    <span className="ref-view-designation">
                      {viewingItem.user?.designation || 'General Member'}
                    </span>
                    <span className="ref-view-dot">&bull;</span>
                    <span className="ref-view-org">Godhavari Nadhi Paryavarana Parishubratha</span>
                  </div>
                </div>
                <div className="ref-view-status-wrap">
                  <span
                    className={`ref-status-badge ${
                      viewingItem.status === 'Active' ? 'active' : 'suspended'
                    }`}
                  >
                    <span className="ref-status-dot-inner"></span>
                    <span>{viewingItem.status}</span>
                  </span>
                </div>
              </div>

              {/* Comprehensive Details Grid - Symmetrical 2-Column Pairs */}
              <div className="ref-details-grid">
                {/* Pair 1 */}
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Membership Number</span>
                  <span className="ref-detail-value">{viewingItem.membershipNumber}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Official Member ID</span>
                  <span className="ref-detail-value">{viewingItem.user?.memberId || 'N/A'}</span>
                </div>

                {/* Pair 2 */}
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Email Address</span>
                  <span className="ref-detail-value">{viewingItem.user?.email || 'N/A'}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Phone Number</span>
                  <span className="ref-detail-value">{viewingItem.user?.phone || 'Not provided'}</span>
                </div>

                {/* Pair 3 */}
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Fee Paid</span>
                  <span className="ref-detail-value font-bold text-emerald-700">
                    ₹{(viewingItem.feePaid || 0).toLocaleString()}{' '}
                    <span className="text-xs font-normal text-emerald-600">
                      ({viewingItem.paymentStatus || 'Paid'})
                    </span>
                  </span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Valid Until</span>
                  <span className="ref-detail-value">
                    {viewingItem.validTo
                      ? new Date(viewingItem.validTo).toLocaleDateString()
                      : viewingItem.membershipType === 'Life Member'
                      ? 'Lifetime Membership'
                      : 'Active (2026 - 2027)'}
                  </span>
                </div>

                {/* Pair 4 */}
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Membership Status</span>
                  <span className="ref-detail-value">{viewingItem.status}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Admin Remarks</span>
                  <span className="ref-detail-value">{viewingItem.remarks || 'Standard verified member'}</span>
                </div>
              </div>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setViewingItem(null)}
                className="ref-modal-btn-cancel"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleStatusToggle(viewingItem);
                  setViewingItem(null);
                }}
                className={
                  viewingItem.status === 'Active'
                    ? 'ref-btn-suspend-modal'
                    : 'ref-btn-activate-modal'
                }
              >
                {viewingItem.status === 'Active' ? (
                  <>
                    <Pause size={13} strokeWidth={2.4} />
                    <span>Suspend Membership</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={13} strokeWidth={2.4} />
                    <span>Activate Membership</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewingItem(null);
                  openEditModal(viewingItem);
                }}
                className="ref-modal-btn-save"
              >
                <Edit2 size={13} />
                <span>Edit Membership</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 4: DELETE (Confirmation Dialog)
          ========================================================================= */}
      {deletingItem && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '480px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="ref-modal-title text-red-600">Delete Membership</h3>
              </div>
              <button
                onClick={() => setDeletingItem(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              <p className="text-slate-700 text-sm leading-relaxed">
                Are you sure you want to delete the membership record for:
              </p>

              <div className="bg-red-50/70 border border-red-200 rounded-xl p-3.5 flex items-center gap-3">
                <div className="ref-avatar-circle" style={{ backgroundColor: '#dc2626' }}>
                  {getInitials(deletingItem.user?.name)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {deletingItem.user?.name || 'Member'}
                  </div>
                  <div className="text-xs text-slate-500">
                    No: {deletingItem.membershipNumber} &bull; {deletingItem.membershipType}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                This will delete the active membership tier and validity dates associated with this record.
              </p>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setDeletingItem(null)}
                className="ref-modal-btn-cancel"
                disabled={saveLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={saveLoading}
                className="ref-modal-btn-danger"
              >
                {saveLoading ? 'Removing...' : 'Delete Membership'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMemberships;