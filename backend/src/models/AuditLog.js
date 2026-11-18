import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
      default: 'Dr. K. V. Subba Rao',
    },
    adminEmail: {
      type: String,
      default: 'admin@gmail.com',
    },
    action: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Membership', 'Events', 'Announcements', 'CMS', 'Security', 'System', 'General'],
      default: 'General',
    },
    ip: {
      type: String,
      default: '106.51.24.18 (Rajahmundry)',
    },
    severity: {
      type: String,
      enum: ['info', 'success', 'warning', 'danger'],
      default: 'info',
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
export default AuditLog;

