import express from 'express';
import { protect, requireAdmin } from '../middlewares/authMiddleware.js';
import {
  getAllMembers,
  createMemberByAdmin,
  getMemberById,
  updateMemberById,
  updateMembershipStatus,
  deleteMemberById,
  getAllMemberships,
  updateMembershipById,
  deleteMembershipById,
} from '../controllers/memberController.js';
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getMemberEvents,
} from '../controllers/eventController.js';
import {
  getAllMeetings,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} from '../controllers/meetingController.js';
import {
  getAllAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcementController.js';
import {
  sendNotification,
  getAllNotifications,
} from '../controllers/notificationController.js';
import {
  getAuditLogs,
  createAuditLog,
} from '../controllers/auditController.js';
import {
  getRbacOverview,
  assignUserAccess,
  updateUserStatus,
} from '../controllers/rbacController.js';
import {
  getAdminStats,
  getWebsiteContent,
  updateWebsiteContent,
} from '../controllers/websiteController.js';
import { updateAdminSettings } from '../controllers/authController.js';

const router = express.Router();

// Enforce Admin protection on all routes in this file
router.use(protect, requireAdmin);

// Dashboard Metrics & Settings
router.get('/stats', getAdminStats);
router.patch('/settings', updateAdminSettings);

// Website CMS Management (stored in database)
router.route('/website').get(getWebsiteContent).patch(updateWebsiteContent);
router.patch('/content', updateWebsiteContent);

// Members CRUD
router.route('/members').get(getAllMembers).post(createMemberByAdmin);
router
  .route('/members/:id')
  .get(getMemberById)
  .put(updateMemberById)
  .patch(updateMemberById)
  .delete(deleteMemberById);
router.patch('/members/:id/membership', updateMembershipStatus);

// Memberships Management
router.route('/memberships').get(getAllMemberships);
router.route('/memberships/:id').patch(updateMembershipById).delete(deleteMembershipById);

// Events CRUD
router.route('/events').get(getMemberEvents).post(createEvent);
router.route('/events/:id').patch(updateEvent).delete(deleteEvent);

// Meetings CRUD
router.route('/meetings').get(getAllMeetings).post(createMeeting);
router.route('/meetings/:id').patch(updateMeeting).delete(deleteMeeting);

// Announcements CRUD
router.route('/announcements').get(getAllAnnouncements).post(createAnnouncement);
router.route('/announcements/:id').patch(updateAnnouncement).put(updateAnnouncement).delete(deleteAnnouncement);

// Notifications
router.route('/notifications').get(getAllNotifications).post(sendNotification);

// Live Audit Logs (Real-time admin actions)
router.route('/audit-logs').get(getAuditLogs).post(createAuditLog);

// Role-Based Access Control (RBAC) System
router.get('/rbac/overview', getRbacOverview);
router.post('/rbac/assign', assignUserAccess);
router.patch('/rbac/users/:id/status', updateUserStatus);

export default router;
