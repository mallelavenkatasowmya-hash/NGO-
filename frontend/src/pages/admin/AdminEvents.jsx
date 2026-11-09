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
  X,
  Droplet,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Megaphone,
  Award,
  ChevronRight,
  Video,
} from 'lucide-react';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });
  const [filterType, setFilterType] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    eventType: 'Cleanliness Drive',
    date: '',
    time: '06:30 AM - 10:00 AM',
    venue: 'Kotilingala Ghat',
    riverGhat: 'Kotilingala Ghat',
    isPublic: true,
    isMemberOnly: false,
    targetVolunteers: 100,
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

      setFeedback({ type: 'success', text: `Event "${formData.title}" scheduled successfully!` });
      setShowAddModal(false);
      setFormData({
        title: '',
        description: '',
        eventType: 'Cleanliness Drive',
        date: '',
        time: '06:30 AM - 10:00 AM',
        venue: 'Kotilingala Ghat',
        riverGhat: 'Kotilingala Ghat',
        isPublic: true,
        isMemberOnly: false,
        targetVolunteers: 100,
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

  // Filtered Events
  const displayedEvents = events.filter((evt) => {
    if (filterType === 'Cleanliness') return evt.eventType === 'Cleanliness Drive';
    if (filterType === 'Awareness') return evt.eventType === 'Awareness Program' || evt.eventType === 'Workshop';
    return true;
  });

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
        return 'ref-tier-volunteer';
      case 'Awareness Program':
        return 'ref-tier-life';
      case 'Workshop':
        return 'ref-tier-annual';
      default:
        return 'ref-tier-volunteer';
    }
  };

  return (
    <div className="ref-events-page">
      {/* 1. Header with Tab Toggles and Schedule Button */}
      <div className="ref-events-header">
        <div className="ref-events-title-box">
          <h2>Meetings & Events</h2>
          <p>View and manage your meetings, events and campaigns.</p>
        </div>

        <div className="ref-events-header-actions">
          <Link to="/admin/meetings" className="ref-toggle-tab inactive">
            <Video size={15} />
            <span>Meetings</span>
          </Link>
          <Link to="/admin/events" className="ref-toggle-tab active">
            <Calendar size={15} />
            <span>Events</span>
          </Link>
          <button
            onClick={() => setShowAddModal(true)}
            className="ref-btn-enroll"
            title="Schedule a new drive or event"
          >
            <Plus size={16} />
            <span>Schedule New Drive / Event</span>
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
          >
            Dismiss &times;
          </button>
        </div>
      )}

      {/* 3. 4 KPI Stat Cards with "View All ->" Link */}
      <div className="ref-kpi-grid">
        {/* Card 1: Total Events */}
        <div className="ref-events-kpi-card">
          <div className="ref-events-kpi-icon ref-bubble-blue">
            <Calendar size={22} />
          </div>
          <div className="ref-events-kpi-details">
            <span className="ref-events-kpi-label">Total Events</span>
            <span className="ref-events-kpi-value">{totalEvents}</span>
            <button
              onClick={() => setFilterType('All')}
              className="ref-events-kpi-link"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Card 2: Cleanliness Drives */}
        <div className="ref-events-kpi-card">
          <div className="ref-events-kpi-icon ref-bubble-green">
            <Droplet size={22} />
          </div>
          <div className="ref-events-kpi-details">
            <span className="ref-events-kpi-label">Cleanliness Drives</span>
            <span className="ref-events-kpi-value">{cleanlinessCount}</span>
            <button
              onClick={() => setFilterType('Cleanliness')}
              className="ref-events-kpi-link"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Card 3: Awareness & Workshops */}
        <div className="ref-events-kpi-card">
          <div className="ref-events-kpi-icon ref-bubble-orange">
            <Megaphone size={22} />
          </div>
          <div className="ref-events-kpi-details">
            <span className="ref-events-kpi-label">Awareness & Workshops</span>
            <span className="ref-events-kpi-value">{awarenessCount}</span>
            <button
              onClick={() => setFilterType('Awareness')}
              className="ref-events-kpi-link"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Card 4: Target Volunteers */}
        <div className="ref-events-kpi-card">
          <div className="ref-events-kpi-icon ref-bubble-purple">
            <Users size={22} />
          </div>
          <div className="ref-events-kpi-details">
            <span className="ref-events-kpi-label">Target Volunteers</span>
            <span className="ref-events-kpi-value">{totalTargetVolunteers}</span>
            <button
              onClick={() => setFilterType('All')}
              className="ref-events-kpi-link"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Section Title Bar */}
      <div className="ref-section-header">
        <h3 className="ref-section-title">Upcoming Meetings & Events</h3>
        <button
          onClick={() => setFilterType('All')}
          className="ref-section-link"
        >
          <span>View All</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* 5. Horizontal Event Cards List (100% Matching Reference Image 1) */}
      {loading ? (
        <div className="ref-table-card p-12 text-center text-muted">
          <RefreshCw size={28} className="animate-spin inline mb-2 text-blue-600" />
          <p className="font-semibold text-slate-700 text-sm">Loading events from database...</p>
        </div>
      ) : displayedEvents.length === 0 ? (
        <div className="ref-table-card p-12 text-center text-muted">
          <Calendar size={36} className="mx-auto mb-2 opacity-40 text-slate-500" />
          <p className="font-semibold text-sm text-slate-700 mb-1">
            No events found.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="ref-btn-enroll mt-3"
          >
            <Plus size={15} />
            <span>Schedule New Event</span>
          </button>
        </div>
      ) : (
        <div className="ref-events-list">
          {displayedEvents.map((evt) => {
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
                {/* Top Row: Category Pill + Title + Status Pill */}
                <div className="ref-event-top-row">
                  <div className="ref-event-badge-title">
                    <span className={`ref-tier-badge ${getCategoryBadgeClass(evt.eventType)}`}>
                      {evt.eventType === 'Cleanliness Drive' && <Droplet size={13} />}
                      {evt.eventType === 'Awareness Program' && <Users size={13} />}
                      {evt.eventType === 'Workshop' && <Award size={13} />}
                      <span>{evt.eventType}</span>
                    </span>
                    <h3 className="ref-event-title">{evt.title}</h3>
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

                {/* Middle Row: Schedule Info + Description + Actions */}
                <div className="ref-event-mid-row">
                  {/* Left: Schedule Information */}
                  <div className="ref-event-schedule-col">
                    <div className="ref-event-schedule-item">
                      <Calendar size={14} className="text-slate-400 flex-shrink-0" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="ref-event-schedule-item">
                      <Clock size={14} className="text-slate-400 flex-shrink-0" />
                      <span>{evt.time || '06:30 AM - 10:00 AM'}</span>
                    </div>
                    <div className="ref-event-schedule-item">
                      <MapPin size={14} className="text-slate-400 flex-shrink-0" />
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

                  {/* Right: Actions */}
                  <div className="ref-event-actions-col">
                    <button
                      onClick={() => setViewingEvent(evt)}
                      className="ref-btn-view-details"
                      title="View complete event details"
                    >
                      <span>View Details</span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(evt._id, evt.title)}
                      className="ref-btn-trash"
                      title="Delete event"
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

      {/* 6. View Details Modal */}
      {viewingEvent && (
        <div className="modal-backdrop">
          <div className="ref-modal-dialog">
            <div className="ref-modal-header">
              <div className="ref-modal-title-wrap">
                <h3 className="ref-modal-title">Event Overview</h3>
                <span className={`ref-tier-badge ${getCategoryBadgeClass(viewingEvent.eventType)}`}>
                  {viewingEvent.eventType}
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
              <div className="ref-modal-member-card">
                <div className="ref-modal-member-info">
                  <div className="ref-modal-member-name">{viewingEvent.title}</div>
                  <div className="ref-modal-member-sub">
                    <span>{viewingEvent.location?.venue}</span>
                    <span>&bull;</span>
                    <span>{viewingEvent.time}</span>
                  </div>
                </div>
              </div>

              <div className="ref-form-field">
                <label className="ref-form-label">Full Campaign Description</label>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {viewingEvent.description}
                </p>
              </div>

              <div className="ref-form-grid-2">
                <div className="ref-form-field">
                  <label className="ref-form-label">Date</label>
                  <div className="text-sm font-semibold text-slate-800">
                    {new Date(viewingEvent.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="ref-form-field">
                  <label className="ref-form-label">Target Volunteers</label>
                  <div className="text-sm font-semibold text-slate-800">
                    {viewingEvent.targetVolunteers || 100} Volunteers
                  </div>
                </div>
              </div>
            </div>

            <div className="ref-modal-footer">
              <button
                onClick={() => setViewingEvent(null)}
                className="ref-modal-btn-cancel"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDelete(viewingEvent._id, viewingEvent.title);
                  setViewingEvent(null);
                }}
                className="ref-modal-btn-cancel"
                style={{ color: '#dc2626', borderColor: '#fca5a5' }}
              >
                Remove Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Schedule New Event Modal */}
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
                    placeholder="Describe the initiative goals, volunteer gears required, and reporting point..."
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
    </div>
  );
};

export default AdminEvents;
