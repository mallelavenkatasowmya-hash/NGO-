import AuditLog from '../models/AuditLog.js';

// Seed initial logs if collection is empty
const defaultLogs = [
  {
    admin: 'Dr. K. V. Subba Rao',
    adminEmail: 'admin@gmail.com',
    action: 'Authorized Life Membership for MEM-GNPP-1002',
    category: 'Membership',
    ip: '106.51.24.18 (Rajahmundry)',
    severity: 'success',
    createdAt: new Date(Date.now() - 1000 * 60 * 12), // 12 mins ago
  },
  {
    admin: 'Dr. K. V. Subba Rao',
    adminEmail: 'admin@gmail.com',
    action: 'Published single-use plastic ban circular to homepage',
    category: 'CMS',
    ip: '106.51.24.18 (Rajahmundry)',
    severity: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 34), // 34 mins ago
  },
  {
    admin: 'Smt. P. Lakshmi Devi',
    adminEmail: 'lakshmi@example.com',
    action: 'Created Cleanliness Drive Phase V at Kotilingala Ghat',
    category: 'Events',
    ip: '49.207.182.90 (Kakinada)',
    severity: 'success',
    createdAt: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
  },
  {
    admin: 'Sri M. Ramu Naidu',
    adminEmail: 'ramu.coordinator@godhavari.org',
    action: 'Dispatched push reminder to 88 volunteers',
    category: 'Announcements',
    ip: '157.48.91.12 (Rajahmundry)',
    severity: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 300), // 5 hours ago
  },
  {
    admin: 'K. Satyanarayana',
    adminEmail: 'satyanarayana@godhavari.org',
    action: 'Exported environmental impact audit CSV spreadsheet',
    category: 'System',
    ip: '117.216.32.75 (Vijayawada)',
    severity: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18), // 18 hours ago
  },
];

// @desc    Get all audit logs
// @route   GET /api/v1/admin/audit-logs
// @access  Private (Admin)
export const getAuditLogs = async (req, res, next) => {
  try {
    let count = await AuditLog.countDocuments();
    if (count === 0) {
      await AuditLog.insertMany(defaultLogs);
    }

    const { category, limit = 50 } = req.query;
    const filter = {};
    if (category && category !== 'All') {
      filter.category = category;
    }

    const logs = await AuditLog.find(filter)
      .sort({ createdAt: -1 })
      .limit(Number(limit));

    res.json({
      status: 'success',
      count: logs.length,
      logs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new audit log
// @route   POST /api/v1/admin/audit-logs
// @access  Private (Admin)
export const createAuditLog = async (req, res, next) => {
  try {
    const { action, category = 'General', ip, severity = 'info', metadata } = req.body;

    const log = await AuditLog.create({
      admin: req.user?.name || 'Dr. K. V. Subba Rao',
      adminEmail: req.user?.email || 'admin@gmail.com',
      action,
      category,
      ip: ip || '106.51.24.18 (Rajahmundry)',
      severity,
      metadata: metadata || {},
    });

    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};

