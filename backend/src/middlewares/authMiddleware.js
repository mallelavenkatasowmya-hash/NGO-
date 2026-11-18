import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_ngo_jwt_token_key_2026_xyz');
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        return res.status(401).json({ message: 'User not found or deleted' });
      }
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, invalid or expired token' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, authorization token missing' });
  }
};

export const requireAdmin = (req, res, next) => {
  const adminRoles = [
    'admin',
    'super_admin',
    'staff_coordinator',
    'staff',
    'Super Admin',
    'Admin',
    'Staff Coordinator',
    'General Volunteer',
    'volunteer',
  ];
  if (req.user && adminRoles.includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Administrator privileges required' });
  }
};

export const requireSuperAdmin = (req, res, next) => {
  const isSuper =
    req.user &&
    (req.user.role === 'super_admin' ||
      req.user.role === 'Super Admin' ||
      req.user.email === 'admin@gmail.com');
  if (isSuper) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Super Admin privileges required' });
  }
};

export const requireMember = (req, res, next) => {
  if (req.user && ['admin', 'member', 'volunteer', 'staff'].includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Active NGO Member account required' });
  }
};

export const optionalAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_ngo_jwt_token_key_2026_xyz');
      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      // Continue without req.user
    }
  }
  next();
};
