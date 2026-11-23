import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  X, 
  MessageSquare, 
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const ContactToggleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Listen for global toggle event from header or other components
  useEffect(() => {
    const handleToggleEvent = () => {
      setIsOpen(prev => !prev);
    };

    window.addEventListener('toggle-contact-widget', handleToggleEvent);
    return () => window.removeEventListener('toggle-contact-widget', handleToggleEvent);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <aside 
      ref={widgetRef}
      aria-label="Secretariat Quick Contact Toggle Widget"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        fontFamily: 'inherit'
      }}
    >
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '68px',
            right: 0,
            width: '320px',
            maxWidth: 'calc(100vw - 32px)',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.22s ease-out',
            zIndex: 10000
          }}
        >
          {/* Card Header */}
          <div style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
            color: '#ffffff',
            padding: '1.1rem 1.25rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Contact Widget"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#ffffff',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
            >
              <X size={15} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <ShieldCheck size={16} color="#86efac" />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#86efac' }}>
                Secretariat Helplines
              </span>
            </div>
            <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
              Connect with Our Team
            </h4>
            <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#ecfdf5', opacity: 0.9 }}>
              Direct access to Godavari riverfront coordinators.
            </p>
          </div>

          {/* Quick Channels List */}
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            
            {/* Phone Helpline */}
            <a 
              href="tel:+919440123456" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                textDecoration: 'none',
                color: '#1e293b',
                transition: 'all 0.2s'
              }}
            >
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase' }}>
                  Ghat Emergency Helpline
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                  +91 944 012 3456
                </div>
              </div>
            </a>

            {/* Email Channel */}
            <a 
              href="mailto:contact@godhavari.org" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                textDecoration: 'none',
                color: '#1e293b',
                transition: 'all 0.2s'
              }}
            >
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#f0fdf4',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>
                  Official Secretariat Email
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  contact@godhavari.org
                </div>
              </div>
            </a>

            {/* Office Location */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#334155'
            }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <MapPin size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase' }}>
                  Secretariat Office
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
                  Godavari Bund Road, Opp. Kotilingala Ghat Temple, Rajahmundry
                </div>
              </div>
            </div>

            {/* Action Link to Full Page */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.7rem 1rem',
                borderRadius: '10px',
                background: '#047857',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.86rem',
                marginTop: '4px',
                boxShadow: '0 4px 12px rgba(4, 120, 87, 0.25)',
                transition: 'background 0.2s'
              }}
            >
              <span>Open Full Contact Page</span>
              <ArrowRight size={15} />
            </Link>

          </div>
        </div>
      )}

      {/* Floating Toggle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Quick Contact Options"
        title="Contact Us"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: isOpen ? '0.75rem 1.15rem' : '0.75rem 1.25rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 8px 24px rgba(5, 150, 105, 0.38), 0 2px 6px rgba(0, 0, 0, 0.08)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: 700,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'scale(0.98)' : 'scale(1)'
        }}
      >
        {isOpen ? (
          <>
            <X size={18} />
            <span>Close</span>
          </>
        ) : (
          <>
            <Phone size={17} />
            <span>Contact Us</span>
          </>
        )}
      </button>
    </aside>
  );
};

export default ContactToggleWidget;
