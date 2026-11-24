import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ContactToggleWidget = () => {
  const location = useLocation();

  // If already on the Contact page, do not show the floating trigger
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <aside 
      aria-label="Direct Full Page Contact Link"
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        zIndex: 9999,
      }}
    >
      <Link
        to="/contact"
        aria-label="Contact Us - Open Full Secretariat Page"
        title="Contact Us"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.35rem 0.75rem 1.15rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#ffffff',
          boxShadow: '0 8px 25px rgba(5, 150, 105, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12)',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(5, 150, 105, 0.55), 0 4px 12px rgba(0, 0, 0, 0.16)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(5, 150, 105, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12)';
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MessageCircle size={22} strokeWidth={2.2} />
          <span 
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: '#86efac',
              border: '2px solid #047857',
              boxShadow: '0 0 8px #86efac'
            }} 
          />
        </div>
        <span style={{
          fontSize: '0.94rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          color: '#ffffff',
          whiteSpace: 'nowrap',
          lineHeight: 1
        }}>
          Contact Us
        </span>
      </Link>
    </aside>
  );
};

export default ContactToggleWidget;
