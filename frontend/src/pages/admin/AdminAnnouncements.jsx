import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import {
  Megaphone,
  Plus,
  Trash2,
  X,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Search,
  Filter,
  Calendar,
  Lock,
  Eye,
  Globe,
  Bell,
  Sparkles,
} from 'lucide-react';

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });
  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterAudience, setFilterAudience] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General Update',
    priority: 'Normal',
    visibility: 'All',
  });

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('/admin/announcements');
      setAnnouncements(data || []);
    } catch (err) {
      setFeedback({ type: 'error', text: 'Failed to load announcements from database.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await API.post('/admin/announcements', formData);
      setFeedback({ type: 'success', text: `Announcement "${formData.title}" published successfully!` });
      setShowAddModal(false);
      setFormData({
        title: '',
        content: '',
        category: 'General Update',
        priority: 'Normal',
        visibility: 'All',
      });
      fetchAnnouncements();
    } catch (err) {
      setFeedback({ type: 'error', text: err.response?.data?.message || 'Failed to publish announcement.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to remove announcement "${title}"?`)) return;
    try {
      await API.delete(`/admin/announcements/${id}`);
      setFeedback({ type: 'success', text: `Announcement "${title}" removed successfully.` });
      fetchAnnouncements();
    } catch (err) {
      setFeedback({ type: 'error', text: 'Failed to delete announcement.' });
    }
  };

  // Filter & Search Logic
  const filteredAnnouncements = announcements.filter((a) => {
    const matchesSearch =
      !search ||
      a.title?.toLowerCase().includes(search.toLowerCase()) ||
      a.content?.toLowerCase().includes(search.toLowerCase()) ||
      a.category?.toLowerCase().includes(search.toLowerCase());

    const matchesPriority = filterPriority === 'All' || a.priority === filterPriority;
    const matchesCategory = filterCategory === 'All' || a.category === filterCategory;
    const matchesAudience = filterAudience === 'All' || a.visibility === filterAudience;

    return matchesSearch && matchesPriority && matchesCategory && matchesAudience;
  });

  const resetFilters = () => {
    setSearch('');
    setFilterPriority('All');
    setFilterCategory('All');
    setFilterAudience('All');
  };

  const hasActiveFilters =
    search !== '' || filterPriority !== 'All' || filterCategory !== 'All' || filterAudience !== 'All';

  // Dynamic KPI Stats
  const totalCount = announcements.length;
  const urgentCount = announcements.filter((a) => a.priority === 'Urgent').length;
  const updateCount = announcements.filter((a) => a.category === 'General Update').length;
  const memberOnlyCount = announcements.filter((a) => a.visibility === 'Members Only').length;

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Urgent':
        return 'eco-priority-urgent';
      case 'Important':
        return 'eco-priority-important';
      default:
        return 'eco-priority-normal';
    }
  };

  const getCategoryBadgeClass = (cat) => {
    switch (cat) {
      case 'Cleanliness Alert':
        return 'eco-tier-volunteer';
      case 'General Update':
        return 'eco-tier-annual';
      case 'Meeting Circular':
        return 'eco-tier-patron';
      case 'Event Notice':
        return 'eco-tier-student';
      case 'Press Release':
        return 'eco-tier-life';
      default:
        return 'eco-tier-annual';
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
              Official Bulletins & Circulars &bull; MongoDB Live
            </span>
          </div>
          <h1 className="eco-cms-main-title">Announcements & Circulars</h1>
          <p className="eco-cms-sub-title">
            Publish official river cleanliness alerts, ecological notices, and executive circulars for citizens and members.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={fetchAnnouncements}
            className="eco-cms-btn-secondary"
            disabled={loading}
            title="Reload latest announcements from MongoDB"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="eco-cms-btn-primary"
          >
            <Plus size={16} />
            <span>New Announcement</span>
          </button>
        </div>
      </div>

      {/* 2. Feedback Alert */}
      {feedback.text && (
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
            <span>{feedback.text}</span>
          </div>
          <button
            onClick={() => setFeedback({ type: '', text: '' })}
            className="text-xs opacity-70 hover:opacity-100 font-semibold cursor-pointer border-none bg-transparent"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* 3. 4-Card Pastel KPI Metric Strip */}
      <section className="eco-kpi-4-strip">
        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <Megaphone size={20} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Total Bulletins</span>
            <div className="eco-stat-number">{totalCount}</div>
            <span className="eco-stat-trend text-blue-icon">Published Circulars</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-orange">
          <div className="eco-stat-icon-bubble bg-orange-bubble">
            <AlertTriangle size={20} className="text-orange-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Urgent Alerts</span>
            <div className="eco-stat-number">{urgentCount}</div>
            <span className="eco-stat-trend text-orange-icon">High Priority</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-green">
          <div className="eco-stat-icon-bubble bg-green-bubble">
            <CheckCircle size={20} className="text-green-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">General Updates</span>
            <div className="eco-stat-number">{updateCount}</div>
            <span className="eco-stat-trend text-trend-green">Regular Notices</span>
          </div>
        </div>

        <div className="eco-stat-card eco-stat-purple">
          <div className="eco-stat-icon-bubble bg-purple-bubble">
            <Lock size={20} className="text-purple-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Members Only</span>
            <div className="eco-stat-number">{memberOnlyCount}</div>
            <span className="eco-stat-trend text-purple-icon">Internal Circulars</span>
          </div>
        </div>
      </section>

      {/* 4. Filter & Search Bar */}
      <section className="eco-memberships-filter-card">
        <div className="eco-filter-left">
          <div className="eco-search-bar">
            <Search size={16} className="eco-search-icon" />
            <input
              type="text"
              placeholder="Search by title, keyword, or category..."
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
            <label className="eco-filter-label">Priority:</label>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Priorities</option>
              <option value="Urgent">Urgent</option>
              <option value="Important">Important</option>
              <option value="Normal">Normal</option>
            </select>
          </div>

          <div className="eco-filter-group">
            <label className="eco-filter-label">Category:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Categories</option>
              <option value="General Update">General Update</option>
              <option value="Cleanliness Alert">Cleanliness Alert</option>
              <option value="Meeting Circular">Meeting Circular</option>
              <option value="Event Notice">Event Notice</option>
              <option value="Press Release">Press Release</option>
            </select>
          </div>

          <div className="eco-filter-group">
            <label className="eco-filter-label">Audience:</label>
            <select
              value={filterAudience}
              onChange={(e) => setFilterAudience(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Audiences</option>
              <option value="All">All (Public & Members)</option>
              <option value="Public">Public Only</option>
              <option value="Members Only">Members Only</option>
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

      {/* 5. Announcements List */}
      {loading ? (
        <div className="eco-table-card p-12 text-center text-muted">
          <RefreshCw size={28} className="animate-spin inline mb-3 text-emerald-700" />
          <p className="font-semibold text-slate-700">Loading announcements from database...</p>
        </div>
      ) : filteredAnnouncements.length === 0 ? (
        <div className="eco-table-card p-12 text-center text-muted">
          <Megaphone size={36} className="mx-auto mb-3 opacity-40 text-slate-500" />
          <p className="font-semibold text-base text-slate-700 mb-1">
            No announcements matched your search or filters.
          </p>
          <span className="text-sm text-slate-500">
            Publish a new announcement or reset your active filters.
          </span>
          <div className="mt-4 flex justify-center gap-2">
            {hasActiveFilters && (
              <button onClick={resetFilters} className="eco-reset-filters-btn">
                Reset Filters
              </button>
            )}
            <button
              onClick={() => setShowAddModal(true)}
              className="eco-cms-btn-primary"
            >
              <Plus size={15} /> New Announcement
            </button>
          </div>
        </div>
      ) : (
        <div className="eco-announcements-list">
          {filteredAnnouncements.map((a) => (
            <div key={a._id} className="eco-announcement-card">
              {/* Card Header: Badges & Actions */}
              <div className="eco-announcement-card-header">
                <div className="eco-announcement-badges">
                  {/* Priority Tag */}
                  <span
                    className={`eco-tier-pill ${getPriorityBadgeClass(a.priority)}`}
                  >
                    {a.priority === 'Urgent' && <AlertTriangle size={12} />}
                    {a.priority}
                  </span>

                  {/* Category Tag */}
                  <span
                    className={`eco-tier-pill ${getCategoryBadgeClass(a.category)}`}
                  >
                    {a.category}
                  </span>

                  {/* Audience Tag */}
                  <span
                    className={`eco-visibility-badge ${
                      a.visibility === 'Members Only'
                        ? 'eco-visibility-members'
                        : 'eco-visibility-public'
                    }`}
                  >
                    {a.visibility === 'Members Only' ? (
                      <>
                        <Lock size={12} />
                        <span>Audience: Members Only</span>
                      </>
                    ) : (
                      <>
                        <Globe size={12} />
                        <span>Audience: {a.visibility || 'All'}</span>
                      </>
                    )}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(a._id, a.title)}
                  className="eco-btn-delete-card"
                  title="Remove this announcement"
                >
                  <Trash2 size={13} />
                  <span>Delete</span>
                </button>
              </div>

              {/* Title & Content */}
              <h3 className="eco-announcement-title">{a.title}</h3>
              <p className="eco-announcement-body">{a.content}</p>

              {/* Footer: Published Date */}
              <div className="eco-announcement-card-footer">
                <span className="flex items-center gap-1.5 font-medium text-slate-500">
                  <Calendar size={13} className="text-emerald-700" />
                  Published:{' '}
                  {new Date(a.publishedAt || a.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-xs text-slate-400">Official Bulletin</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 6. Create Announcement Modal */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Publish New Announcement
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Distribute official circulars, urgent alerts, and general notices.
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

            <form onSubmit={handleCreateAnnouncement}>
              <div className="modal-body">
                <div className="eco-form-field">
                  <label className="eco-field-label">Announcement Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Single-Use Plastic Ban on River Ghats"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="eco-field-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="eco-field-select"
                    >
                      <option value="General Update">General Update</option>
                      <option value="Cleanliness Alert">Cleanliness Alert</option>
                      <option value="Meeting Circular">Meeting Circular</option>
                      <option value="Event Notice">Event Notice</option>
                      <option value="Press Release">Press Release</option>
                    </select>
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="eco-field-select"
                    >
                      <option value="Normal">Normal</option>
                      <option value="Important">Important</option>
                      <option value="Urgent">Urgent Alert</option>
                    </select>
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Target Audience</label>
                    <select
                      value={formData.visibility}
                      onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                      className="eco-field-select"
                    >
                      <option value="All">All Audiences</option>
                      <option value="Public">Public Only</option>
                      <option value="Members Only">Members Only</option>
                    </select>
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Announcement Details & Content *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Provide full description, guidelines, or instructions for this announcement..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="eco-field-textarea"
                  ></textarea>
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
                  {submitting ? 'Publishing...' : 'Publish Announcement'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncements;
