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
} from 'lucide-react';

const AdminMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [editingItem, setEditingItem] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Form State for Editing Membership
  const [formData, setFormData] = useState({
    membershipType: 'Annual Member',
    status: 'Active',
    validTo: '',
    feePaid: 0,
    paymentStatus: 'Paid',
    remarks: '',
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

  const closeEditModal = () => {
    setEditingItem(null);
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
        message: `Membership for ${editingItem.user?.name || editingItem.membershipNumber} successfully updated in database.`,
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

  // Calculate dynamic stats matching reference
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
      {/* 1. Header Matching Reference Image */}
      <div className="ref-members-header">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <Users size={24} />
          </div>
          <div className="ref-header-text">
            <h2>Membership Management</h2>
            <p>Oversee membership tiers, validity dates, renewal status, and fee records.</p>
          </div>
        </div>

        <div className="ref-header-actions">
          <button
            onClick={fetchMemberships}
            className="ref-btn-refresh"
            disabled={loading}
            title="Reload latest records from MongoDB"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh Database</span>
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
        {/* Card 1: Total Memberships */}
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

        {/* Card 2: Active Members */}
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

        {/* Card 3: Pending Approval */}
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

        {/* Card 4: Life Members */}
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

      {/* 5. Table Header Meta */}
      <div className="ref-table-meta-text">
        Showing {filtered.length} of {memberships.length} membership records
      </div>

      {/* 6. Memberships Data Table Card (Zero Horizontal Overflow) */}
      <div className="ref-table-card">
        {loading ? (
          <div className="p-12 text-center text-muted">
            <RefreshCw size={28} className="animate-spin inline mb-3 text-blue-600" />
            <p className="font-semibold text-slate-700">Loading membership records from database...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-muted">
            <Users size={36} className="mx-auto mb-3 opacity-40 text-slate-500" />
            <p className="font-semibold text-base text-slate-700 mb-1">
              No membership records matched your filters.
            </p>
          </div>
        ) : (
          <table className="ref-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>MEMBER NAME</th>
                <th style={{ width: '14%' }}>MEMBER ID</th>
                <th style={{ width: '14%' }}>TIER / TYPE</th>
                <th style={{ width: '10%' }}>STATUS</th>
                <th style={{ width: '10%' }}>VALID UNTIL</th>
                <th style={{ width: '10%' }}>FEE PAID</th>
                <th style={{ width: '10%' }}>PAYMENT</th>
                <th style={{ width: '12%', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item._id}>
                  {/* 1. Member Name */}
                  <td>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">
                        {item.user?.name || 'Unknown'}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {item.user?.email || 'No email registered'}
                      </div>
                    </div>
                  </td>

                  {/* 2. Member ID */}
                  <td>
                    <span className="ref-id-pill">
                      {item.user?.memberId || 'N/A'}
                    </span>
                  </td>

                  {/* 3. Tier / Type */}
                  <td>
                    <span className={`ref-tier-badge ${getTierBadgeClass(item.membershipType)}`}>
                      <User size={12} />
                      <span>{item.membershipType}</span>
                    </span>
                  </td>

                  {/* 4. Status */}
                  <td>
                    <span
                      className={`ref-status-item ${
                        item.status === 'Active' ? 'ref-status-active' : 'ref-status-suspended'
                      }`}
                    >
                      <span className="ref-status-dot"></span>
                      <span>{item.status}</span>
                    </span>
                  </td>

                  {/* 5. Valid Until */}
                  <td>
                    <span className="text-xs font-medium text-slate-700">
                      {item.validTo
                        ? new Date(item.validTo).toLocaleDateString()
                        : '1/1/2051'}
                    </span>
                  </td>

                  {/* 6. Fee Paid */}
                  <td>
                    <span className="font-bold text-slate-900 text-sm">
                      ₹{(item.feePaid || 0).toLocaleString()}
                    </span>
                  </td>

                  {/* 7. Payment */}
                  <td>
                    <span className="ref-payment-paid">
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span>{item.paymentStatus || 'Paid'}</span>
                    </span>
                  </td>

                  {/* 8. Action - Centered Alignment */}
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => openEditModal(item)}
                      className="ref-btn-edit"
                      title="Edit Membership Record"
                    >
                      <Edit2 size={13} />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
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

      {/* 8. Refined Edit Membership Modal with Fixed Header & Footer */}
      {editingItem && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            {/* Fixed Modal Header */}
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Edit Membership</h3>
                <span className="ref-modal-badge">
                  {editingItem.membershipNumber}
                </span>
              </div>
              <button
                onClick={closeEditModal}
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
              {/* Scrollable Modal Body */}
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

              {/* Fixed Modal Footer with Perfect Padding & Royal Blue Button */}
              <div className="ref-modal-footer">
                <button
                  type="button"
                  onClick={closeEditModal}
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
    </div>
  );
};

export default AdminMemberships;
