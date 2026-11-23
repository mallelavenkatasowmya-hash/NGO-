import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  X, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

const ContactToggleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('message'); // 'message' | 'channels'
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const widgetRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', contact: '', message: '' });
    }, 600);
  };

  return (
    <aside 
      ref={widgetRef}
      aria-label="Secretariat Live Support & Contact Widget"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        fontFamily: 'inherit'
      }}
    >
      {/* Real-time Website Chat & Contact Card */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '68px',
            right: 0,
            width: '360px',
            maxWidth: 'calc(100vw - 32px)',
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10000,
            animation: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header Bar */}
          <div style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
            color: '#ffffff',
            padding: '1.25rem 1.25rem 1rem',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat Widget"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.16)',
                border: 'none',
                color: '#ffffff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <X size={16} />
            </button>

            {/* Online Status Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              padding: '3px 10px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#86efac',
              marginBottom: '8px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#86efac',
                boxShadow: '0 0 8px #86efac',
                animation: 'pulse 1.8s infinite'
              }} />
              <span>Active Secretariat Desk</span>
            </div>

            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              How can we help you?
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#ecfdf5', opacity: 0.9 }}>
              Send a quick message or call our riverfront coordinator directly.
            </p>

            {/* Quick Switch Tabs */}
            <div style={{
              display: 'flex',
              gap: '6px',
              marginTop: '12px',
              background: 'rgba(0, 0, 0, 0.15)',
              padding: '3px',
              borderRadius: '10px'
            }}>
              <button
                type="button"
                onClick={() => { setActiveTab('message'); setIsSubmitted(false); }}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeTab === 'message' ? '#ffffff' : 'transparent',
                  color: activeTab === 'message' ? '#047857' : '#e2e8f0',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
              >
                <MessageCircle size={13} />
                <span>Quick Message</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('channels')}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeTab === 'channels' ? '#ffffff' : 'transparent',
                  color: activeTab === 'channels' ? '#047857' : '#e2e8f0',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
              >
                <Phone size={13} />
                <span>Direct Helplines</span>
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div style={{ padding: '1rem', maxHeight: '360px', overflowY: 'auto' }}>
            {activeTab === 'message' ? (
              isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                    Message Received!
                  </h4>
                  <p style={{ margin: '0 0 16px', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                    Thank you for reaching out. Our river conservation coordinator will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      border: '1px solid #d1fae5',
                      background: '#ecfdf5',
                      color: '#047857',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.84rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone or Email (for reply)"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.84rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.84rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                        resize: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '9px 16px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: '0 2px 8px rgba(4, 120, 87, 0.25)'
                    }}
                  >
                    <Send size={14} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Emergency Phone */}
                <a
                  href="tel:+919440123456"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: '#1e293b'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#047857',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase' }}>
                      Helpline (Call Now)
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                      +91 944 012 3456
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@godhavari.org"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: '#1e293b'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#f0fdf4',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>
                      Official Secretariat Email
                    </div>
                    <div style={{ fontSize: '0.83rem', fontWeight: 600, color: '#0f172a' }}>
                      contact@godhavari.org
                    </div>
                  </div>
                </a>

                {/* Office */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#334155'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#047857',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <MapPin size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase' }}>
                      Secretariat Address
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.35 }}>
                      Godavari Bund Road, Opp. Kotilingala Ghat Temple, Rajahmundry
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Link to Full Contact Page */}
          <div style={{
            padding: '0.65rem 1rem',
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#047857',
                textDecoration: 'none'
              }}
            >
              <span>View Full Office &amp; Secretariat Page</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      )}

      {/* Real-time Website Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Quick Message Support"
        title={isOpen ? "Close Message Widget" : "Send us a Message / Contact Us"}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          padding: isOpen ? '0.75rem 1.15rem' : '0.75rem 1.35rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 8px 25px rgba(5, 150, 105, 0.42), 0 2px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          fontSize: '0.92rem',
          fontWeight: 700,
          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isOpen ? 'scale(0.96)' : 'scale(1)',
          letterSpacing: '-0.01em'
        }}
      >
        {isOpen ? (
          <>
            <X size={19} />
            <span>Close</span>
          </>
        ) : (
          <>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <MessageCircle size={20} strokeWidth={2.3} />
              <span style={{
                position: 'absolute',
                top: '-3px',
                right: '-4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#86efac',
                border: '1.5px solid #047857',
                boxShadow: '0 0 6px #86efac'
              }} />
            </div>
            <span>Contact Us</span>
          </>
        )}
      </button>
    </aside>
  );
};

export default ContactToggleWidget;
