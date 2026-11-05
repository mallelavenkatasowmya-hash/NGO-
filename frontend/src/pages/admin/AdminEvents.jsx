import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import {
  Calendar,
  Plus,
  Trash2,
  MapPin,
  Clock,
  Users,
  Eye,
  Lock,
  X,
  Droplet,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Megaphone,
  Award,
  TreePine,
  Sparkles,
} from 'lucide-react';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterVisibility, setFilterVisibility] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    eventType: 'Cleanliness Drive',
    date: '',
    time: '06:30 AM - 09:30 AM',
    venue: 'Kotilingala Ghat',
    riverGhat: 'Kotilingala Ghat',
    isPublic: true,
    isMemberOnly: false,
    targetVolunteers: 50,
  });

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('/admin/events');
      setEvents(data || []);
    } catch (err) {
      setFeedback({ type: 'error', text: 'Failed to load events from database.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: '', text: '' });

    try {
      await API.post('/admin/events', {
        title: formData.title,
        description: formData.description,
        eventType: formData.eventType,
        date: formData.date,
        time: formData.time,
        location: {
          venue: formData.venue,
          riverGhat: formData.riverGhat,
          city: 'Rajahmundry',
        },
        isPublic: formData.isPublic,
        isMemberOnly: formData.isMemberOnly,
        targetVolunteers: Number(formData.targetVolunteers),
      });

      setFeedback({ type: 'success', text: `Event "${formData.title}" scheduled and saved to MongoDB!` });
      setShowAddModal(false);
      setFormData({
        title: '',
        description: '',
        eventType: 'Cleanliness Drive',
        date: '',
        time: '06:30 AM - 09:30 AM',
        venue: 'Kotilingala Ghat',
        riverGhat: 'Kotilingala Ghat',
        isPublic: true,
        isMemberOnly: false,
        targetVolunteers: 50,
      });
      fetchEvents();
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err.response?.data?.message || 'Failed to create event',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to remove event "${title}"?`)) return;
    try {
      await API.delete(`/admin/events/${id}`);
      setFeedback({ type: 'success', text: `Event "${title}" successfully removed.` });
      fetchEvents();
    } catch (err) {
      setFeedback({ type: 'error', text: 'Failed to delete event.' });
    }
  };

  // Filter & Search Logic
  const filteredEvents = events.filter((evt) => {
    const matchesSearch =
      !search ||
      evt.title?.toLowerCase().includes(search.toLowerCase()) ||
      evt.location?.venue?.toLowerCase().includes(search.toLowerCase()) ||
      evt.location?.riverGhat?.toLowerCase().includes(search.toLowerCase()) ||
      evt.description?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = filterCategory === 'All' || evt.eventType === filterCategory;

    const matchesVisibility =
      filterVisibility === 'All' ||
      (filterVisibility === 'Public' && evt.isPublic) ||
      (filterVisibility === 'Members Only' && evt.isMemberOnly);

    return matchesSearch && matchesCategory && matchesVisibility;
  });

  const resetFilters = () => {
    setSearch('');
    setFilterCategory('All');
    setFilterVisibility('All');
  };

  const hasActiveFilters = search !== '' || filterCategory !== 'All' || filterVisibility !== 'All';

  // Dynamic Metrics
  const totalEvents = events.length;
  const cleanlinessCount = events.filter((e) => e.eventType === 'Cleanliness Drive').length;
  const awarenessCount = events.filter(
    (e) => e.eventType === 'Awareness Program' || e.eventType === 'Workshop'
  ).length;
  const totalTargetVolunteers = events.reduce((acc, cur) => acc + (cur.targetVolunteers || 0), 0);

  const getCategoryBadgeClass = (type) => {
    switch (type) {
      case 'Cleanliness Drive':
        return 'eco-tier-volunteer';
      case 'Awareness Program':
        return 'eco-tier-annual';
      case 'Workshop':
        return 'eco-tier-life';
      case 'Tree Plantation':
        return 'eco-tier-volunteer';
      case 'Riverfront Rally':
        return 'eco-tier-patron';
      default:
        return 'eco-tier-annual';
    }
  };

  return (
    <div className="eco-cms-page">
      {/* 1. Sub-navigation tabs (Drives & Events vs Member Meetings) */}
      <div className="eco-subnav-tabs">
        <Link to="/admin/events" className="eco-subnav-tab active">
          <Calendar size={15} />
          <span>Drives & Events</span>
        </Link>
        <Link to="/admin/meetings" className="eco-subnav-tab">
          <Clock size={15} />
          <span>Meetings</span>
        </Link>
      </div>

      {/* 2. Top Header Row with Actions */}
      <div className="eco-cms-header-row">
        <div className="eco-cms-header-info">
          <div className="eco-cms-badge-row">
            <span className="eco-cms-live-badge">
              <span className="live-dot-pulse"></span>
              Active Campaigns &bull; MongoDB Live
            </span>
          </div>
          <h1 className="eco-cms-main-title">Cleanliness Drives & Awareness Events</h1>
          <p className="eco-cms-sub-title">
            Organize riverfront cleanliness campaigns, environmental awareness rallies, and ecological workshops along the sacred Godavari River.
          </p>
        </div>

        <div className="eco-cms-header-actions">
          <button
            onClick={fetchEvents}
            className="eco-cms-btn-secondary"
            disabled={loading}
            title="Reload latest events from MongoDB"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="eco-cms-btn-primary"
          >
            <Plus size={16} />
            <span>Schedule New Drive / Event</span>
          </button>
        </div>
      </div>

      {/* 3. Feedback Alert */}
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

      {/* 4. Four Pastel Metric KPI Cards */}
      <section className="eco-kpi-4-strip">
        {/* Card 1: Total Events */}
        <div className="eco-stat-card eco-stat-blue">
          <div className="eco-stat-icon-bubble bg-blue-bubble">
            <Calendar size={20} className="text-blue-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Total Events</span>
            <div className="eco-stat-number">{totalEvents}</div>
            <span className="eco-stat-trend text-blue-icon">Scheduled Campaigns</span>
          </div>
        </div>

        {/* Card 2: Cleanliness Drives */}
        <div className="eco-stat-card eco-stat-green">
          <div className="eco-stat-icon-bubble bg-green-bubble">
            <Droplet size={20} className="text-green-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Cleanliness Drives</span>
            <div className="eco-stat-number">{cleanlinessCount}</div>
            <span className="eco-stat-trend text-trend-green">Ghat Cleanups</span>
          </div>
        </div>

        {/* Card 3: Awareness & Workshops */}
        <div className="eco-stat-card eco-stat-orange">
          <div className="eco-stat-icon-bubble bg-orange-bubble">
            <Megaphone size={20} className="text-orange-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Awareness & Workshops</span>
            <div className="eco-stat-number">{awarenessCount}</div>
            <span className="eco-stat-trend text-orange-icon">Community Outreach</span>
          </div>
        </div>

        {/* Card 4: Target Volunteers */}
        <div className="eco-stat-card eco-stat-purple">
          <div className="eco-stat-icon-bubble bg-purple-bubble">
            <Users size={20} className="text-purple-icon" />
          </div>
          <div className="eco-stat-details">
            <span className="eco-stat-label">Target Volunteers</span>
            <div className="eco-stat-number">{totalTargetVolunteers}</div>
            <span className="eco-stat-trend text-purple-icon">Cumulative Capacity</span>
          </div>
        </div>
      </section>

      {/* 5. Filter & Search Bar */}
      <section className="eco-events-filter-bar">
        <div className="eco-filter-left">
          <div className="eco-search-bar">
            <Search size={16} className="eco-search-icon" />
            <input
              type="text"
              placeholder="Search by event title, ghat, or venue..."
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
              <Filter size={12} className="inline mr-1" /> Category:
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Categories</option>
              <option value="Cleanliness Drive">Cleanliness Drive</option>
              <option value="Awareness Program">Awareness Program</option>
              <option value="Workshop">Workshop</option>
              <option value="Tree Plantation">Tree Plantation</option>
              <option value="Riverfront Rally">Riverfront Rally</option>
            </select>
          </div>

          <div className="eco-filter-group">
            <label className="eco-filter-label">Visibility:</label>
            <select
              value={filterVisibility}
              onChange={(e) => setFilterVisibility(e.target.value)}
              className="eco-filter-select"
            >
              <option value="All">All Visibility</option>
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

      {/* 6. Events Cards Grid */}
      {loading ? (
        <div className="eco-table-card p-12 text-center text-muted">
          <RefreshCw size={28} className="animate-spin inline mb-3 text-emerald-700" />
          <p className="font-semibold text-slate-700">Loading events from database...</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="eco-table-card p-12 text-center text-muted">
          <Calendar size={36} className="mx-auto mb-3 opacity-40 text-slate-500" />
          <p className="font-semibold text-base text-slate-700 mb-1">
            No events matched your search or filters.
          </p>
          <span className="text-sm text-slate-500">
            Schedule a new drive or reset your active filters.
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
              <Plus size={15} /> Schedule Event
            </button>
          </div>
        </div>
      ) : (
        <div className="eco-events-grid">
          {filteredEvents.map((evt) => {
            const enrolled = evt.enrolledVolunteersCount || 0;
            const target = evt.targetVolunteers || 50;
            const percent = Math.min(100, Math.round((enrolled / target) * 100));
            const eventDate = new Date(evt.date);
            const isUpcoming = eventDate >= new Date();

            return (
              <div key={evt._id} className="eco-event-card">
                <div>
                  {/* Card Header: Category & Visibility badges */}
                  <div className="eco-event-card-header">
                    <span className={`eco-tier-pill ${getCategoryBadgeClass(evt.eventType)}`}>
                      {evt.eventType === 'Cleanliness Drive' && <Droplet size={12} />}
                      {evt.eventType === 'Awareness Program' && <Megaphone size={12} />}
                      {evt.eventType === 'Workshop' && <Award size={12} />}
                      {evt.eventType === 'Tree Plantation' && <TreePine size={12} />}
                      {evt.eventType}
                    </span>

                    <span
                      className={`eco-visibility-badge ${
                        evt.isPublic ? 'eco-visibility-public' : 'eco-visibility-members'
                      }`}
                    >
                      {evt.isPublic ? (
                        <>
                          <Eye size={12} />
                          <span>Public</span>
                        </>
                      ) : (
                        <>
                          <Lock size={12} />
                          <span>Members Only</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="eco-event-title">{evt.title}</h3>
                  <p className="eco-event-desc">{evt.description}</p>

                  {/* Metadata Box */}
                  <div className="eco-event-meta-box">
                    <div className="eco-meta-row">
                      <Calendar size={14} className="eco-meta-icon text-emerald-700" />
                      <span>
                        {eventDate.toLocaleDateString('en-IN', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    <div className="eco-meta-row">
                      <Clock size={14} className="eco-meta-icon text-amber-600" />
                      <span>{evt.time}</span>
                    </div>

                    <div className="eco-meta-row">
                      <MapPin size={14} className="eco-meta-icon text-blue-600" />
                      <span>
                        {evt.location?.venue || 'Kotilingala Ghat'}
                        {evt.location?.riverGhat && ` (${evt.location.riverGhat})`}
                      </span>
                    </div>
                  </div>

                  {/* Volunteer Enrollment Progress Bar */}
                  <div className="eco-progress-box">
                    <div className="eco-progress-header">
                      <span className="flex items-center gap-1">
                        <Users size={12} /> Volunteers Enrolled
                      </span>
                      <span>
                        {enrolled} / {target} ({percent}%)
                      </span>
                    </div>
                    <div className="eco-progress-track">
                      <div
                        className="eco-progress-bar"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="eco-event-card-footer">
                  <span
                    className={`eco-status-pill ${
                      isUpcoming ? 'status-active' : 'status-suspended'
                    }`}
                  >
                    <span className="status-dot-indicator"></span>
                    {isUpcoming ? 'Upcoming Drive' : 'Past Event'}
                  </span>

                  <button
                    onClick={() => handleDelete(evt._id, evt.title)}
                    className="eco-btn-delete-card"
                    title="Delete this event from MongoDB"
                  >
                    <Trash2 size={13} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 7. Schedule New Event Modal */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <div>
                <h3 className="modal-title font-bold text-slate-900 text-lg">
                  Schedule Cleanliness Drive / Event
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publish a new campaign to MongoDB and showcase it on the public portal.
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

            <form onSubmit={handleCreateEvent}>
              <div className="modal-body">
                <div className="eco-form-field">
                  <label className="eco-field-label">Event / Campaign Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maha Godavari Ghat Cleanliness Drive - Phase V"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="eco-field-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Event Category *</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="eco-field-select"
                    >
                      <option value="Cleanliness Drive">Cleanliness Drive</option>
                      <option value="Awareness Program">Awareness Program</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Tree Plantation">Tree Plantation</option>
                      <option value="Riverfront Rally">Riverfront Rally</option>
                    </select>
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Target Volunteers *</label>
                    <input
                      type="number"
                      min="5"
                      max="2000"
                      value={formData.targetVolunteers}
                      onChange={(e) =>
                        setFormData({ ...formData, targetVolunteers: e.target.value })
                      }
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">Timing / Schedule *</label>
                    <input
                      type="text"
                      required
                      placeholder="06:30 AM - 09:30 AM"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="eco-form-field">
                    <label className="eco-field-label">Ghat / Venue Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kotilingala Ghat Steps"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>

                  <div className="eco-form-field">
                    <label className="eco-field-label">River Ghat Reach</label>
                    <input
                      type="text"
                      placeholder="Kotilingala Ghat"
                      value={formData.riverGhat}
                      onChange={(e) => setFormData({ ...formData, riverGhat: e.target.value })}
                      className="eco-field-input"
                    />
                  </div>
                </div>

                <div className="eco-form-field">
                  <label className="eco-field-label">Description & Scope of Activity *</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Outline the area of cleaning, safety equipment provided, and target waste materials..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="eco-field-textarea"
                  ></textarea>
                </div>

                <div className="eco-modal-card-box flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.isPublic}
                      onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                      className="accent-[#063b2c] w-4 h-4 rounded"
                    />
                    <span>Display on Public Website Portal</span>
                  </label>

                  <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.isMemberOnly}
                      onChange={(e) =>
                        setFormData({ ...formData, isMemberOnly: e.target.checked })
                      }
                      className="accent-[#063b2c] w-4 h-4 rounded"
                    />
                    <span>Members-Only Access</span>
                  </label>
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
                  {submitting ? 'Publishing to MongoDB...' : 'Publish Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
