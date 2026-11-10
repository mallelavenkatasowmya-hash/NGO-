import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import {
  Calendar,
  Clock,
  Plus,
  Trash2,
  Video,
  MapPin,
  X,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Users,
  Eye,
  Edit2,
  Droplet,
  Megaphone,
  Award,
  ChevronRight,
  ShieldCheck,
  Save,
  Globe,
  Lock,
} from 'lucide-react';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  // Filters & Search
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Modals for CRUD operations
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingEvent, setDeletingEvent] = useState(null);

  // Form State: Add Event
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    eventType: 'Cleanliness Drive',
    date: '',
    time: '06:30 AM - 10:00 AM',
    venue: 'Kotilingala Ghat, Riverbank Reach',
    riverGhat: 'Kotilingala Ghat',
    city: 'Rajahmundry',
    isPublic: true,
    isMemberOnly: false,
    targetVolunteers: 100,
  });

  // Form State: Edit Event
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    eventType: 'Cleanliness Drive',
    date: '',
    time: '',
    venue: '',
    riverGhat: '',
    city: 'Rajahmundry',
    isPublic: true,
    isMemberOnly: false,
    targetVolunteers: 100,
    enrolledVolunteersCount: 0,
    status: 'Upcoming',
  });

  // Fetch all events from API
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

  // Helper: Format date for input[type="date"]
  const formatDateForInput = (dateVal) => {
    if (!dateVal) return '';
    try {
      const d = new Date(dateVal);
      if (isNaN(d.getTime())) return '';
      return d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  // Helper: Category badge CSS class
  const getCategoryBadgeClass = (type) => {
    switch (type) {
      case 'Cleanliness Drive':
        return 'ref-tier-volunteer';
      case 'Awareness Program':
        return 'ref-tier-life';
      case 'Workshop':
        return 'ref-tier-annual';
      case 'Tree Plantation':
        return 'ref-tier-volunteer';
      case 'Riverfront Rally':
        return 'ref-tier-patron';
      default:
        return 'ref-tier-volunteer';
    }
  };

  // Helper: Category Icon
  const getCategoryIcon = (type) => {
    switch (type) {
      case 'Cleanliness Drive':
        return <Droplet size={13} />;
      case 'Awareness Program':
        return <Users size={13} />;
      case 'Workshop':
        return <Award size={13} />;
      case 'Tree Plantation':
        return <Droplet size={13} />;
      case 'Riverfront Rally':
        return <Megaphone size={13} />;
      default:
        return <Calendar size={13} />;
    }
  };

  // ---------------------------------------------------------------------------
  // CRUD 1: CREATE
  // ---------------------------------------------------------------------------
  const openAddModal = () => {
    setFormData({
      title: '',
      description: '',
      eventType: 'Cleanliness Drive',
      date: new Date().toISOString().split('T')[0],
      time: '06:30 AM - 10:00 AM',
      venue: 'Kotilingala Ghat, Riverbank Reach',
      riverGhat: 'Kotilingala Ghat',
      city: 'Rajahmundry',
      isPublic: true,
      isMemberOnly: false,
      targetVolunteers: 100,
    });
    setShowAddModal(true);
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: '', text: '' });

    try {
      await API.post('/admin/events', {
        title: formData.title.trim(),
        description: formData.description.trim(),
        eventType: formData.eventType,
        date: new Date(formData.date),
        time: formData.time.trim(),
        location: {
          venue: formData.venue.trim(),
          riverGhat: formData.riverGhat.trim(),
          city: formData.city.trim() || 'Rajahmundry',
        },
        isPublic: formData.isPublic,
        isMemberOnly: formData.isMemberOnly,
        targetVolunteers: Number(formData.targetVolunteers) || 50,
      });

      setFeedback({
        type: 'success',
        text: `Event "${formData.title}" scheduled successfully!`
      });
      setShowAddModal(false);
      fetchEvents();
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err.response?.data?.message || 'Failed to create event'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // CRUD 2: READ (View Details)
  // ---------------------------------------------------------------------------
  const openViewModal = (evt) => {
    setViewingEvent(evt);
  };

  // ---------------------------------------------------------------------------
  // CRUD 3: UPDATE (Edit Event)
  // ---------------------------------------------------------------------------
  const openEditModal = (evt) => {
    setEditingEvent(evt);
    setEditFormData({
      title: evt.title || '',
      description: evt.description || '',
      eventType: evt.eventType || 'Cleanliness Drive',
      date: formatDateForInput(evt.date),
      time: evt.time || '06:30 AM - 10:00 AM',
      venue: evt.location?.venue || '',
      riverGhat: evt.location?.riverGhat || '',
      city: evt.location?.city || 'Rajahmundry',
      isPublic: evt.isPublic !== undefined ? evt.isPublic : true,
      isMemberOnly: evt.isMemberOnly !== undefined ? evt.isMemberOnly : false,
      targetVolunteers: evt.targetVolunteers || 100,
      enrolledVolunteersCount: evt.enrolledVolunteersCount || 0,
      status: evt.status || (new Date(evt.date) >= new Date() ? 'Upcoming' : 'Completed'),
    });
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    if (!editingEvent) return;
    setSubmitting(true);
    setFeedback({ type: '', text: '' });

    try {
      const payload = {
        title: editFormData.title.trim(),
        description: editFormData.description.trim(),
        eventType: editFormData.eventType,
        date: new Date(editFormData.date),
        time: editFormData.time.trim(),
        location: {
          venue: editFormData.venue.trim(),
          riverGhat: editFormData.riverGhat.trim(),
          city: editFormData.city.trim() || 'Rajahmundry',
        },
        status: editFormData.status,
        isPublic: editFormData.isPublic,
        isMemberOnly: editFormData.isMemberOnly,
        targetVolunteers: Number(editFormData.targetVolunteers) || 50,
        enrolledVolunteersCount: Number(editFormData.enrolledVolunteersCount) || 0,
      };

      await API.patch(`/admin/events/${editingEvent._id}`, payload);
      setFeedback({
        type: 'success',
        text: `Event "${editFormData.title}" updated successfully!`
      });
      setEditingEvent(null);
      fetchEvents();
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err.response?.data?.message || 'Failed to update event'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // CRUD 4: DELETE (Confirmation Modal)
  // ---------------------------------------------------------------------------
  const openDeleteModal = (evt) => {
    setDeletingEvent(evt);
  };

  const handleConfirmDelete = async () => {
    if (!deletingEvent) return;
    setSubmitting(true);
    try {
      await API.delete(`/admin/events/${deletingEvent._id}`);
      setFeedback({
        type: 'success',
        text: `Event "${deletingEvent.title}" removed successfully.`
      });
      setDeletingEvent(null);
      fetchEvents();
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err.response?.data?.message || 'Failed to delete event'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // Filter & Search Logic
  // ---------------------------------------------------------------------------
  const filteredEvents = events.filter((evt) => {
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = (evt.title || '').toLowerCase().includes(q);
      const matchVenue = (evt.location?.venue || '').toLowerCase().includes(q);
      const matchGhat = (evt.location?.riverGhat || '').toLowerCase().includes(q);
      const matchDesc = (evt.description || '').toLowerCase().includes(q);
      if (!matchTitle && !matchVenue && !matchGhat && !matchDesc) return false;
    }
    if (filterType !== 'All') {
      if (evt.eventType !== filterType) return false;
    }
    if (filterStatus !== 'All') {
      const isUp = new Date(evt.date) >= new Date();
      if (filterStatus === 'Upcoming' && !isUp) return false;
      if (filterStatus === 'Past' && isUp) return false;
    }
    return true;
  });

  // Dynamic Metrics
  const totalEvents = events.length;
  const cleanlinessCount = events.filter((e) => e.eventType === 'Cleanliness Drive').length;
  const awarenessCount = events.filter(
    (e) => e.eventType === 'Awareness Program' || e.eventType === 'Workshop' || e.eventType === 'Riverfront Rally'
  ).length;
  const totalTargetVolunteers = events.reduce((acc, cur) => acc + (cur.targetVolunteers || 0), 0);

  return (
    <div className="ref-events-page">
      {/* 1. Header Row */}
      <div className="ref-header-row">
        <div className="ref-header-left">
          <div className="ref-header-icon-box">
            <Calendar size={22} />
          </div>
          <div className="ref-header-text">
            <h2>Drives & Events</h2>
            <p>Schedule, manage, and coordinate community riverfront cleanliness drives and awareness events.</p>
          </div>
        </div>

        <div className="ref-header-actions">
          {/* Subnav switcher matching second image */}
          <div className="eco-subnav-tabs">
            <Link
              to="/admin/events"
              className="eco-subnav-tab active"
              title="Active: Riverfront Drives & Events"
            >
              <Calendar size={15} />
              <span>Drives & Events</span>
            </Link>
            <Link
              to="/admin/meetings"
              className="eco-subnav-tab"
              title="Switch to Meetings & Sessions"
            >
              <Clock size={15} className="text-emerald-700" />
              <span>Meetings</span>
            </Link>
          </div>

          <button
            onClick={fetchEvents}
            className="ref-btn-refresh"
            disabled={loading}
            title="Reload latest records from database"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={openAddModal}
            className="ref-btn-enroll"
            title="Schedule a new drive or event"
          >
            <Plus size={14} />
            <span>Schedule Event</span>
          </button>
        </div>
      </div>

      {/* 2. Alert Feedback Banner */}
      {feedback.text && (
        <div className="ref-alert-banner">
          <div className="ref-alert-left">
            {feedback.type === 'error' ? (
              <AlertTriangle size={18} className="text-red-600 flex-shrink-0" />
            ) : (
              <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
            )}
            <span>{feedback.text}</span>
          </div>
          <button
            onClick={() => setFeedback({ type: '', text: '' })}
            className="ref-alert-dismiss"
            title="Dismiss notification"
          >
            Dismiss &times;
          </button>
        </div>
      )}

      {/* 3. 4-Card KPI Stat Strip */}
      <div className="ref-kpi-grid">
        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-blue">
            <Calendar size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Total Events</span>
            <span className="ref-kpi-value">{totalEvents}</span>
            <span className="ref-kpi-sub text-blue-600">All Scheduled</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-green">
            <Droplet size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Cleanliness Drives</span>
            <span className="ref-kpi-value">{cleanlinessCount}</span>
            <span className="ref-kpi-sub text-emerald-600">Riverfront Cleanup</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-orange">
            <Megaphone size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Awareness & Rallies</span>
            <span className="ref-kpi-value">{awarenessCount}</span>
            <span className="ref-kpi-sub text-orange-600">Community Outreach</span>
          </div>
        </div>

        <div className="ref-kpi-card">
          <div className="ref-kpi-icon-bubble ref-bubble-purple">
            <Users size={20} />
          </div>
          <div className="ref-kpi-details">
            <span className="ref-kpi-label">Target Volunteers</span>
            <span className="ref-kpi-value">{totalTargetVolunteers}</span>
            <span className="ref-kpi-sub text-purple-600">Total Enrolled Reach</span>
          </div>
        </div>
      </div>

      {/* 4. Filter & Search Bar Card */}
      <div className="ref-filter-card">
        <div className="ref-search-wrap">
          <Search size={15} className="text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by event title, location, ghat, or description..."
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
            <span className="ref-select-label">CATEGORY:</span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="ref-select-input"
            >
              <option value="All">All Categories</option>
              <option value="Cleanliness Drive">Cleanliness Drive</option>
              <option value="Awareness Program">Awareness Program</option>
              <option value="Workshop">Workshop</option>
              <option value="Tree Plantation">Tree Plantation</option>
              <option value="Riverfront Rally">Riverfront Rally</option>
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
              <option value="Upcoming">Upcoming</option>
              <option value="Past">Past Events</option>
            </select>
          </div>
        </div>
      </div>

      {/* 5. Section Header */}
      <div className="ref-section-header">
        <h3 className="ref-section-title">
          Upcoming Drives & Events ({filteredEvents.length})
        </h3>
        {(search || filterType !== 'All' || filterStatus !== 'All') && (
          <button
            onClick={() => {
              setSearch('');
              setFilterType('All');
              setFilterStatus('All');
            }}
            className="ref-section-link"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 6. Events Cards List */}
      {loading ? (
        <div className="ref-table-card p-12 text-center text-muted">
          <RefreshCw size={28} className="animate-spin inline mb-2 text-blue-600" />
          <p className="font-semibold text-slate-700 text-sm">Loading events from database...</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="ref-table-card p-12 text-center text-muted">
          <Calendar size={36} className="mx-auto mb-2 opacity-40 text-slate-500" />
          <p className="font-semibold text-sm text-slate-700 mb-1">
            No events found matching your search.
          </p>
          <button
            onClick={openAddModal}
            className="ref-btn-enroll mt-3"
          >
            <Plus size={15} />
            <span>Schedule New Event</span>
          </button>
        </div>
      ) : (
        <div className="ref-events-list">
          {filteredEvents.map((evt) => {
            const enrolled = evt.enrolledVolunteersCount || (evt.eventType === 'Cleanliness Drive' ? 42 : 88);
            const target = evt.targetVolunteers || (evt.eventType === 'Cleanliness Drive' ? 100 : 200);
            const percent = Math.min(100, Math.round((enrolled / target) * 100));
            const eventDate = new Date(evt.date || Date.now());
            const isUpcoming = eventDate >= new Date();

            const formattedDate = eventDate.toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });

            return (
              <div key={evt._id} className="ref-event-card">
                {/* Top Row: Category Badge + Title + Status Pill */}
                <div className="ref-event-top-row">
                  <div className="ref-event-badge-title">
                    <span className={`ref-tier-badge ${getCategoryBadgeClass(evt.eventType)}`}>
                      {getCategoryIcon(evt.eventType)}
                      <span>{evt.eventType}</span>
                    </span>
                    <h3 className="ref-event-title" title={evt.title}>
                      {evt.title}
                    </h3>
                  </div>

                  <span
                    className={`ref-event-status-pill ${
                      isUpcoming ? 'ref-status-upcoming' : 'ref-status-past'
                    }`}
                  >
                    <span className="ref-status-dot"></span>
                    <span>{isUpcoming ? 'Upcoming' : 'Past Event'}</span>
                  </span>
                </div>

                {/* Middle Row: Schedule Info + Description + 3 CRUD Actions */}
                <div className="ref-event-mid-row">
                  {/* Left: Schedule Information */}
                  <div className="ref-event-schedule-col">
                    <div className="ref-event-schedule-item">
                      <Calendar size={13} className="text-emerald-600 flex-shrink-0" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="ref-event-schedule-item">
                      <Clock size={13} className="text-slate-400 flex-shrink-0" />
                      <span>{evt.time || '06:30 AM - 10:00 AM'}</span>
                    </div>
                    <div className="ref-event-schedule-item" title={`${evt.location?.venue || 'Kotilingala Ghat'}${evt.location?.riverGhat ? ` (${evt.location.riverGhat})` : ''}`}>
                      <MapPin size={13} className="text-rose-500 flex-shrink-0" />
                      <span>
                        {evt.location?.venue || 'Kotilingala Ghat, Riverbank Reach'}
                        {evt.location?.riverGhat && ` (${evt.location.riverGhat})`}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Description */}
                  <div className="ref-event-desc-col">
                    <p>{evt.description}</p>
                  </div>

                  {/* Right: Actions (View Details, Labeled Edit, Delete) */}
                  <div className="ref-event-actions-col">
                    {/* READ */}
                    <button
                      type="button"
                      onClick={() => openViewModal(evt)}
                      className="ref-btn-view-action"
                      title="View complete event details"
                    >
                      <Eye size={12} />
                      <span>View Details</span>
                      <ChevronRight size={12} className="text-slate-400" />
                    </button>

                    {/* UPDATE */}
                    <button
                      type="button"
                      onClick={() => openEditModal(evt)}
                      className="ref-btn-edit-action"
                      title="Edit Event Details"
                    >
                      <Edit2 size={11} />
                      <span>Edit</span>
                    </button>

                    {/* DELETE */}
                    <button
                      type="button"
                      onClick={() => openDeleteModal(evt)}
                      className="ref-act-btn delete"
                      title="Delete event record"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Bottom Row: Volunteer Progress Bar */}
                <div className="ref-event-bottom-row">
                  <div className="ref-event-volunteers-text">
                    <Users size={13} className="text-slate-400" />
                    <span>
                      {enrolled} / {target} Volunteers Enrolled ({percent}%)
                    </span>
                  </div>
                  <div className="ref-event-progress-track">
                    <div
                      className="ref-event-progress-bar"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          MODAL 1: SCHEDULE NEW EVENT (CREATE)
          ========================================================================= */}
      {showAddModal && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Schedule New Drive / Event</h3>
                <span className="ref-modal-badge">Godavari Riverfront</span>
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
              onSubmit={handleCreateEvent}
              style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
            >
              <div className="ref-modal-body">
                <div className="ref-form-field">
                  <label className="ref-form-label">Event Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maha Godavari Ghat Cleanliness Drive - Phase IV"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="ref-form-input"
                  />
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Event Category *</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="ref-form-select"
                    >
                      <option value="Cleanliness Drive">Cleanliness Drive</option>
                      <option value="Awareness Program">Awareness Program</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Tree Plantation">Tree Plantation</option>
                      <option value="Riverfront Rally">Riverfront Rally</option>
                    </select>
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Target Volunteers</label>
                    <input
                      type="number"
                      min="10"
                      value={formData.targetVolunteers}
                      onChange={(e) =>
                        setFormData({ ...formData, targetVolunteers: e.target.value })
                      }
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Time Window *</label>
                    <input
                      type="text"
                      required
                      placeholder="06:30 AM - 10:00 AM"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Venue / Meeting Point</label>
                    <input
                      type="text"
                      placeholder="Kotilingala Ghat, Riverbank Reach"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Ghat Location</label>
                    <input
                      type="text"
                      placeholder="Kotilingala Ghat / Pushkar Ghat"
                      value={formData.riverGhat}
                      onChange={(e) => setFormData({ ...formData, riverGhat: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Campaign Description *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe initiative goals, volunteer equipment required, reporting point, and briefing details..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="ref-form-textarea"
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
                  disabled={submitting}
                  className="ref-modal-btn-save"
                >
                  {submitting ? 'Scheduling...' : 'Schedule Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: VIEW EVENT DETAILS (READ)
          ========================================================================= */}
      {viewingEvent && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '640px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Event Overview & Schedule</h3>
                <span className={`ref-tier-badge ${getCategoryBadgeClass(viewingEvent.eventType)}`}>
                  {getCategoryIcon(viewingEvent.eventType)}
                  <span>{viewingEvent.eventType}</span>
                </span>
              </div>
              <button
                onClick={() => setViewingEvent(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              {/* Event Official Banner Card */}
              <div className="ref-id-card-wrap">
                <div className="ref-id-card-header">
                  <div className="ref-id-card-title">
                    <Droplet size={14} className="text-emerald-400" />
                    <span>GODAVARI RIVERFRONT INITIATIVE</span>
                  </div>
                  <span className="ref-id-card-cat">{viewingEvent.eventType}</span>
                </div>
                <div className="p-3 bg-white border border-t-0 border-slate-200 rounded-b-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1">{viewingEvent.title}</h4>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{viewingEvent.location?.venue || 'Kotilingala Ghat'}</span>
                    <span>&bull;</span>
                    <span>{viewingEvent.time}</span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Details Grid */}
              <div className="ref-details-grid">
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Date of Event</span>
                  <span className="ref-detail-value">
                    {new Date(viewingEvent.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Time Window</span>
                  <span className="ref-detail-value">{viewingEvent.time || '06:30 AM - 10:00 AM'}</span>
                </div>

                <div className="ref-detail-item">
                  <span className="ref-detail-label">Venue / Meeting Point</span>
                  <span className="ref-detail-value">{viewingEvent.location?.venue || 'Kotilingala Ghat'}</span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">River Ghat Location</span>
                  <span className="ref-detail-value">{viewingEvent.location?.riverGhat || 'Kotilingala Ghat'}</span>
                </div>

                <div className="ref-detail-item">
                  <span className="ref-detail-label">Volunteer Capacity</span>
                  <span className="ref-detail-value font-semibold text-emerald-700">
                    {viewingEvent.enrolledVolunteersCount || 0} Enrolled / {viewingEvent.targetVolunteers || 100} Target
                  </span>
                </div>
                <div className="ref-detail-item">
                  <span className="ref-detail-label">Event Status</span>
                  <span className="ref-detail-value">
                    {new Date(viewingEvent.date) >= new Date() ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
              </div>

              {/* Full Description Callout */}
              <div className="ref-form-field mt-3">
                <label className="ref-form-label">Full Campaign Description</label>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {viewingEvent.description}
                </p>
              </div>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setViewingEvent(null)}
                className="ref-modal-btn-cancel"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const target = viewingEvent;
                  setViewingEvent(null);
                  openDeleteModal(target);
                }}
                className="ref-modal-btn-cancel"
                style={{ color: '#dc2626', borderColor: '#fca5a5' }}
              >
                <Trash2 size={13} />
                <span>Delete Event</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const target = viewingEvent;
                  setViewingEvent(null);
                  openEditModal(target);
                }}
                className="ref-modal-btn-save"
              >
                <Edit2 size={13} />
                <span>Edit Event Details</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: EDIT EVENT (UPDATE)
          ========================================================================= */}
      {editingEvent && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Edit Event / Drive Details</h3>
                <span className={`ref-tier-badge ${getCategoryBadgeClass(editFormData.eventType)}`}>
                  {editFormData.eventType}
                </span>
              </div>
              <button
                onClick={() => setEditingEvent(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleUpdateEvent}
              style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
            >
              <div className="ref-modal-body">
                <div className="ref-form-field">
                  <label className="ref-form-label">Event Title *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.title}
                    onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                    className="ref-form-input"
                  />
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Event Category *</label>
                    <select
                      value={editFormData.eventType}
                      onChange={(e) => setEditFormData({ ...editFormData, eventType: e.target.value })}
                      className="ref-form-select"
                    >
                      <option value="Cleanliness Drive">Cleanliness Drive</option>
                      <option value="Awareness Program">Awareness Program</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Tree Plantation">Tree Plantation</option>
                      <option value="Riverfront Rally">Riverfront Rally</option>
                    </select>
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Status</label>
                    <select
                      value={editFormData.status}
                      onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                      className="ref-form-select"
                    >
                      <option value="Upcoming">Upcoming</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Date *</label>
                    <input
                      type="date"
                      required
                      value={editFormData.date}
                      onChange={(e) => setEditFormData({ ...editFormData, date: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Time Window *</label>
                    <input
                      type="text"
                      required
                      value={editFormData.time}
                      onChange={(e) => setEditFormData({ ...editFormData, time: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Venue / Meeting Point</label>
                    <input
                      type="text"
                      value={editFormData.venue}
                      onChange={(e) => setEditFormData({ ...editFormData, venue: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Ghat Location</label>
                    <input
                      type="text"
                      value={editFormData.riverGhat}
                      onChange={(e) => setEditFormData({ ...editFormData, riverGhat: e.target.value })}
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-grid-2">
                  <div className="ref-form-field">
                    <label className="ref-form-label">Target Volunteers</label>
                    <input
                      type="number"
                      min="1"
                      value={editFormData.targetVolunteers}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, targetVolunteers: e.target.value })
                      }
                      className="ref-form-input"
                    />
                  </div>

                  <div className="ref-form-field">
                    <label className="ref-form-label">Enrolled Volunteers</label>
                    <input
                      type="number"
                      min="0"
                      value={editFormData.enrolledVolunteersCount}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, enrolledVolunteersCount: e.target.value })
                      }
                      className="ref-form-input"
                    />
                  </div>
                </div>

                <div className="ref-form-field">
                  <label className="ref-form-label">Campaign Description *</label>
                  <textarea
                    rows={3}
                    required
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                    className="ref-form-textarea"
                  />
                </div>
              </div>

              <div className="ref-modal-footer">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
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
          MODAL 4: DELETE CONFIRMATION (DELETE)
          ========================================================================= */}
      {deletingEvent && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog" style={{ maxWidth: '480px' }}>
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="ref-modal-title text-red-600">Delete Event Record</h3>
              </div>
              <button
                onClick={() => setDeletingEvent(null)}
                className="ref-modal-close-btn"
                title="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ref-modal-body">
              <p className="text-slate-700 text-sm leading-relaxed">
                Are you sure you want to permanently delete the following scheduled event?
              </p>

              <div className="bg-red-50/70 border border-red-200 rounded-xl p-3.5 flex items-start gap-3 mt-2">
                <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trash2 size={16} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {deletingEvent.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {deletingEvent.eventType} &bull; {new Date(deletingEvent.date).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    {deletingEvent.location?.venue || 'Kotilingala Ghat'}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                This will remove the event, scheduled agenda, and volunteer enrollment records from MongoDB.
              </p>
            </div>

            <div className="ref-modal-footer">
              <button
                type="button"
                onClick={() => setDeletingEvent(null)}
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
                {submitting ? 'Removing...' : 'Delete Event'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
