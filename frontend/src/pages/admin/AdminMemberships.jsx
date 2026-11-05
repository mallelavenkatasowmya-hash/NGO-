import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  CreditCard,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle,
  Edit2,
  Calendar,
  X,
  RefreshCw,
  Award,
  DollarSign,
  ShieldCheck,
  User,
  Sparkles,
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

  const resetFilters = () => {
    setSearch('');
    setFilterType('All');
    setFilterStatus('All');
  };

  const hasActiveFilters = search !== '' || filterType !== 'All' || filterStatus !== 'All';

  // Calculate dynamic stats
  const totalCount = memberships.length;
  const activeCount = memberships.filter((m) => m.status === 'Active').length;
  const pendingCount = memberships.filter((m) => m.status === 'Pending Approval').length;
  const lifeCount = memberships.filter((m) => m.membershipType === 'Life Member').length;
  const totalFees = memberships.reduce((acc, cur) => acc + (cur.feePaid || 0), 0);

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

  return (
    <div className="eco-cms-page">
      {/* 1. Page Header with Title, Badge, and Refresh Button */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Verified Membership Registry &bull; MongoDB Live
            </span>
          </div>
          <h1 className="eco-cms-main-title">Membership Management</h1>
          <p className="eco-cms-sub-title">
            Oversee membership tiers, validity dates, renewal status, and fee records directly in MongoDB.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={fetchMemberships}
            className="eco-cms-btn-secondary"
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
        <div
          className={`eco-cms-alert-banner ${
            feedback.type === 'success' ? 'alert-success' : 'alert-danger'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'success' ? (
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
            ) : (
              <AlertTriangle size={18} className="text-red-600 flex-shrink-0" />
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

      {/* 3. 5-Column Sleek Horizontal KPI Stat Cards */}
      <section className="eco-kpi-5-strip">
        {/* Card 1: Total Memberships */}
        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <CreditCard size={20} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Total Memberships</span>
            <div className="eco-stat-number">{totalCount}</div>
            <span className="eco-stat-trend text-blue-icon">Registered</span>
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
            <span className="eco-stat-trend text-trend-green">Verified & Current</span>
          </div>
        </div>

        {/* Card 3: Pending Approval */}
        <div className="eco-stat-card eco-stat-orange">
          <div className="eco-stat-icon-bubble bg-orange-bubble">
            <Clock size={20} className="text-orange-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Pending Approval</span>
            <div className="eco-stat-number">{pendingCount}</div>
            <span className="eco-stat-trend text-orange-icon">
              {pendingCount > 0 ? 'Action Needed' : 'All Cleared'}
            </span>
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
            <span className="eco-stat-trend text-purple-icon">Lifetime Tier</span>
          </div>
        </div>

        {/* Card 5: Fees Collected */}
        <div className="eco-stat-card eco-stat-teal">
          <div className="eco-stat-icon-bubble bg-teal-bubble">
            <DollarSign size={20} className="text-teal-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Fees Collected</span>
            <div className="eco-stat-number">₹{totalFees.toLocaleString()}</div>
            <span className="eco-stat-trend text-teal-icon">Received Total</span>
          </div>
        </div>
      </section>

      {/* 4. Modern Filter & Search Bar */}
      <section className="eco-memberships-filter-card">
        <div className="eco-filter-left">
          <div className="eco-search-bar">
            <Search size={16} className="eco-search-icon" />
            <input
              type="text"
              placeholder="Search by Member Name, ID, or Membership No..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="eco-search-input"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="eco-search-clear-btn"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="eco-filter-right">
          <div className="eco-filter-group">
            <label className="eco-filter-label">
              <Filter size={12} className="inline mr-1" /> Tier:
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
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
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Expired">Expired</option>
              <option value="Suspended">Suspended</option>
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

      {/* 5. Memberships Data Table Card */}
      <section className="eco-table-card">
        <div className="eco-table-meta-bar">
          <div>
            Showing <span className="eco-table-record-count">{filtered.length}</span> of{' '}
            <span className="eco-table-record-count">{totalCount}</span> membership records
          </div>
          {filtered.length !== totalCount && (
            <span className="text-xs text-amber-600 font-medium">
              Filtered results active
            </span>
          )}
        </div>

        {loading ? (
          <div className="p-12 text-center text-muted">
            <RefreshCw size={28} className="animate-spin inline mb-3 text-emerald-700" />
            <p className="font-semibold text-slate-700">Loading membership records from database...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-muted">
            <CreditCard size={36} className="mx-auto mb-3 opacity-40 text-slate-500" />
            <p className="font-semibold text-base text-slate-700 mb-1">
              No membership records matched your filters.
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
                  <th>Membership No</th>
                  <th>Member Name</th>
                  <th>Member ID</th>
                  <th>Tier / Type</th>
                  <th>Status</th>
                  <th>Valid Until</th>
                  <th>Fee Paid</th>
                  <th>Payment</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <span className="eco-no-pill">
                        {item.membershipNumber}
                      </span>
                    </td>
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
                    <td>
                      <span className="eco-id-tag">
                        {item.user?.memberId || 'N/A'}
                      </span>
                    </td>
                    <td>
                      <span className={`eco-tier-pill ${getTierBadgeClass(item.membershipType)}`}>
                        {item.membershipType === 'Life Member' && <Award size={12} />}
                        {item.membershipType}
                      </span>
                    </td>
                    <td>
                      <span className={`eco-status-pill ${getStatusClass(item.status)}`}>
                        <span className="status-dot-indicator"></span>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <span className="text-xs font-medium text-slate-700">
                        {item.validTo
                          ? new Date(item.validTo).toLocaleDateString()
                          : 'Lifetime'}
                      </span>
                    </td>
                    <td>
                      <span className="font-bold text-slate-900">
                        ₹{(item.feePaid || 0).toLocaleString()}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`eco-payment-indicator ${
                          item.paymentStatus === 'Paid'
                            ? 'eco-payment-paid'
                            : item.paymentStatus === 'Pending'
                            ? 'eco-payment-pending'
                            : 'eco-payment-waived'
                        }`}
                      >
                        {item.paymentStatus === 'Paid' ? (
                          <CheckCircle size={13} />
                        ) : (
                          <Clock size={13} />
                        )}
                        {item.paymentStatus}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => openEditModal(item)}
                        className="eco-btn-table-edit"
                        title="Edit Membership"
                      >
                        <Edit2 size={13} />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 6. Edit Membership Modal */}
      {editingItem && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Edit Membership
                </h3>
                <span className="eco-no-pill text-xs mt-1">
                  {editingItem.membershipNumber}
                </span>
              </div>
              <button
                onClick={closeEditModal}
                className="btn-close"
                title="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveMembership}>
              <div className="modal-body">
                {/* Member Identity Banner */}
                <div className="eco-modal-card-box">
                  <div className="font-bold text-slate-800 text-sm">
                    {editingItem.user?.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    <span>
                      <strong>Member ID:</strong> {editingItem.user?.memberId || 'N/A'}
                    </span>
                    <span>&bull;</span>
                    <span>
                      <strong>Email:</strong> {editingItem.user?.email || 'N/A'}
                    </span>
                    <span>&bull;</span>
                    <span>
                      <strong>Phone:</strong> {editingItem.user?.phone || 'N/A'}
                    </span>
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Membership Tier *</label>
                  <select
                    value={formData.membershipType}
                    onChange={(e) =>
                      setFormData({ ...formData, membershipType: e.target.value })
                    }
                    className="eco-field-select"
                    required
                  >
                    <option value="Life Member">Life Member</option>
                    <option value="Annual Member">Annual Member</option>
                    <option value="Volunteer Member">Volunteer Member</option>
                    <option value="Patron">Patron</option>
                    <option value="Student Member">Student Member</option>
                  </select>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Membership Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="eco-field-select"
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Pending Approval">Pending Approval</option>
                    <option value="Expired">Expired</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Valid Until</label>
                    <input
                      type="date"
                      value={formData.validTo}
                      onChange={(e) => setFormData({ ...formData, validTo: e.target.value })}
                      className="eco-field-input"
                    />
                    <small className="text-xs text-slate-500 mt-1 block">
                      Leave blank for Lifetime membership
                    </small>
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Fee Paid (₹)</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.feePaid}
                      onChange={(e) =>
                        setFormData({ ...formData, feePaid: Number(e.target.value) })
                      }
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Payment Status</label>
                  <select
                    value={formData.paymentStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentStatus: e.target.value })
                    }
                    className="eco-field-select"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Waived">Waived</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Admin Remarks / Notes</label>
                  <textarea
                    rows={2}
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    className="eco-field-textarea"
                    placeholder="e.g. Life membership approved by executive committee on 2026-03-01."
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="eco-cms-btn-secondary"
                  disabled={saveLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="eco-cms-btn-primary"
                  disabled={saveLoading}
                >
                  {saveLoading ? 'Saving to Database...' : 'Save Changes'}
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
