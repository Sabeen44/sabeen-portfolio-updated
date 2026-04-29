'use client';

import { useState, useEffect, useRef } from 'react';

const C = {
  bg: '#0D0D0D',
  surface: '#161616',
  border: '#2A2A2A',
  borderFocus: '#C9A870',
  gold: '#C9A870',
  goldLight: '#E8D5B0',
  muted: '#666660',
  light: '#F8F6F0',
  placeholder: '#444440',
  error: '#E84545',
};

const inputBase = {
  width: '100%',
  background: '#111111',
  border: `1px solid ${C.border}`,
  borderRadius: '2px',
  padding: '12px 14px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  color: C.light,
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};

function Field({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, fontWeight: 500 }}>
        {label}{required && <span style={{ color: C.gold, marginLeft: '3px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function FocusInput({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputBase, ...style, borderColor: focused ? C.borderFocus : C.border }}
    />
  );
}

function FocusSelect({ style, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase, ...style,
        borderColor: focused ? C.borderFocus : C.border,
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666660' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 14px center',
        paddingRight: '36px',
        cursor: 'pointer',
      }}
    >
      {children}
    </select>
  );
}

function FocusTextarea({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputBase, ...style, borderColor: focused ? C.borderFocus : C.border, resize: 'vertical', minHeight: '80px' }}
    />
  );
}

/* ── Success Screen ── */
function SuccessScreen({ onClose }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      padding: 'clamp(40px, 6vw, 64px) clamp(28px, 4vw, 48px)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    }}>
      {/* Animated checkmark */}
      <div style={{
        width: '72px', height: '72px', borderRadius: '50%',
        border: `2px solid ${C.gold}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(201,168,112,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.7)',
        transition: 'opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 16l6 6 10-12"
            stroke={C.gold}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: visible ? 0 : 30,
              transition: 'stroke-dashoffset 0.5s ease 0.35s',
            }}
          />
        </svg>
      </div>

      <div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 500, margin: '0 0 10px 0' }}>
          Request Received
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400, fontStyle: 'italic', color: C.light, margin: '0 0 12px 0', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
          Your tour is being scheduled.
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.7, color: C.muted, margin: 0, maxWidth: '320px' }}>
          Meena will reach out within 24 hours to confirm your tour details.
        </p>
      </div>

      <div style={{ width: '40px', height: '1px', background: C.border }} />

      <button
        onClick={onClose}
        style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.1em',
          textTransform: 'uppercase', fontWeight: 500, color: C.gold,
          background: 'transparent', border: `1px solid ${C.gold}`,
          borderRadius: '2px', padding: '10px 28px', cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.bg; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.gold; }}
      >
        Done
      </button>
    </div>
  );
}

/* ── Form Content ── */
function FormContent({ form, onChange, onSubmit, onClose, status }) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={onSubmit} style={{ padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3vw, 40px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 500, margin: '0 0 6px 0' }}>
            HomesByMeena
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', fontWeight: 400, fontStyle: 'italic', color: C.light, margin: 0, lineHeight: 1.15, letterSpacing: '-0.01em' }}>
            Schedule a Tour
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            background: 'transparent', border: `1px solid ${C.border}`, borderRadius: '2px',
            width: '32px', height: '32px', cursor: 'pointer', color: C.muted,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', flexShrink: 0, marginTop: '4px',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.error; e.currentTarget.style.color = C.error; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
        >
          ×
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Name + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Full Name" required>
            <FocusInput name="name" type="text" value={form.name} onChange={onChange} placeholder="Jane Smith" required />
          </Field>
          <Field label="Email" required>
            <FocusInput name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@email.com" required />
          </Field>
        </div>

        {/* Phone */}
        <Field label="Phone" required>
          <FocusInput name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="(425) 555-0100" required />
        </Field>

        {/* Date + Time */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Preferred Date" required>
            <FocusInput name="date" type="date" value={form.date} onChange={onChange} min={today} required
              style={{ colorScheme: 'dark' }}
            />
          </Field>
          <Field label="Preferred Time">
            <FocusSelect name="time" value={form.time} onChange={onChange}>
              <option value="">Any time</option>
              <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
              <option value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</option>
              <option value="Evening (5pm – 7pm)">Evening (5pm – 7pm)</option>
            </FocusSelect>
          </Field>
        </div>

        {/* Property */}
        <Field label="Property of Interest">
          <FocusInput name="property" type="text" value={form.property} onChange={onChange} placeholder="Address or MLS # (optional)" />
        </Field>

        {/* Message */}
        <Field label="Additional Notes">
          <FocusTextarea name="message" value={form.message} onChange={onChange} placeholder="Any questions or details you'd like Meena to know..." />
        </Field>

        {status === 'error' && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: C.error, margin: 0 }}>
            Something went wrong — please try again.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            marginTop: '4px',
            width: '100%', padding: '14px',
            fontFamily: "'DM Sans', sans-serif", fontSize: '12px', letterSpacing: '0.1em',
            textTransform: 'uppercase', fontWeight: 600,
            background: status === 'loading' ? '#2A2200' : C.gold,
            color: status === 'loading' ? C.gold : C.bg,
            border: 'none', borderRadius: '2px', cursor: status === 'loading' ? 'wait' : 'pointer',
            transition: 'all 0.25s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
          onMouseEnter={(e) => { if (status !== 'loading') { e.currentTarget.style.background = '#E8D5B0'; } }}
          onMouseLeave={(e) => { if (status !== 'loading') { e.currentTarget.style.background = C.gold; } }}
        >
          {status === 'loading' ? (
            <>
              <span style={{ display: 'inline-block', width: '14px', height: '14px', border: `2px solid ${C.gold}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              Sending Request…
            </>
          ) : (
            <>Request a Tour <span style={{ fontSize: '14px' }}>→</span></>
          )}
        </button>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: C.muted, textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
          No commitment required. Meena will confirm within 24 hours.
        </p>
      </div>
    </form>
  );
}

/* ── Modal Root ── */
export default function TourModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', property: '', message: '' });
  const [status, setStatus] = useState('idle');
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/schedule-tour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setForm({ name: '', email: '', phone: '', date: '', time: '', property: '', message: '' }); setStatus('idle'); }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          animation: 'fadeIn 0.2s ease',
        }}
      >
        <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
        <div style={{
          background: C.bg,
          border: `1px solid ${C.border}`,
          borderRadius: '4px',
          width: '100%',
          maxWidth: '520px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 32px 100px rgba(0,0,0,0.7)',
          animation: 'slideUp 0.3s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
          {/* Gold top bar */}
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight}, ${C.gold})`, borderRadius: '4px 4px 0 0' }} />

          {status === 'success'
            ? <SuccessScreen onClose={handleClose} />
            : <FormContent form={form} onChange={handleChange} onSubmit={handleSubmit} onClose={handleClose} status={status} />
          }
        </div>
      </div>
    </>
  );
}
