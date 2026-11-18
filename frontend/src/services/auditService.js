import api from './api';

// Broadcast channel / Custom event for instant cross-component updates
const AUDIT_EVENT_NAME = 'ngo_audit_log_updated';

// Helper to calculate live relative time
export const getRelativeTimeString = (dateInput) => {
  if (!dateInput) return 'Just now';
  const now = Date.now();
  const past = new Date(dateInput).getTime();
  const diffSec = Math.max(0, Math.floor((now - past) / 1000));

  if (diffSec < 45) return 'Just now';
  if (diffSec < 90) return '1 min ago';
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} mins ago`;
  if (diffSec < 7200) return '1 hour ago';
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hours ago`;
  if (diffSec < 172800) {
    const timeStr = new Date(dateInput).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `Yesterday at ${timeStr}`;
  }
  return new Date(dateInput).toLocaleDateString([], { month: 'short', day: 'numeric' });
};

// Record an administrative action in real-time
export const recordAdminAction = async ({
  action,
  category = 'General',
  severity = 'info',
  adminName = 'Dr. K. V. Subba Rao',
  ip = '106.51.24.18 (Rajahmundry)',
}) => {
  const newLog = {
    _id: 'local-' + Date.now(),
    admin: adminName,
    action,
    category,
    severity,
    ip,
    createdAt: new Date().toISOString(),
    isNew: true,
  };

  // 1. Dispatch immediate custom event for instant UI update
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(AUDIT_EVENT_NAME, { detail: newLog })
    );

    // Save to localStorage as quick fallback
    try {
      const stored = JSON.parse(localStorage.getItem('ngo_live_audit_logs') || '[]');
      stored.unshift(newLog);
      localStorage.setItem('ngo_live_audit_logs', JSON.stringify(stored.slice(0, 50)));
    } catch (e) {
      // ignore
    }
  }

  // 2. Persist to MongoDB backend asynchronously
  try {
    const res = await api.post('/admin/audit-logs', {
      action,
      category,
      severity,
      ip,
    });
    return res.data;
  } catch (err) {
    console.warn('Backend audit log save fallback to local:', err?.message);
    return newLog;
  }
};

export { AUDIT_EVENT_NAME };

