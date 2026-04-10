'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'Email', value: 'craftedstack@gmail.com', href: 'mailto:craftedstack@gmail.com' },
  { label: 'GitHub', value: '@Sabeen44', href: 'https://github.com/Sabeen44' },
  { label: 'LinkedIn', value: '@Sabeen', href: 'https://www.linkedin.com/in/sabeen-chaudhry/' },
];

function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none" style={{ opacity: 0.15, ...style }}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#111111', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#111111', top: '-7px', left: 0 }} />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: '#111111',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Top red accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#E84545' }} />

      {/* Horizontal editorial rule lines */}
      {[25, 55, 80].map((pct) => (
        <div
          key={pct}
          className="absolute pointer-events-none"
          style={{
            left: 0, right: 0,
            top: `${pct}%`,
            height: '0.5px',
            background: 'rgba(255,255,255,0.04)',
          }}
        />
      ))}

      {/* Cross marks — lighter on dark bg */}
      {[
        { top: '12%', right: '6%' },
        { bottom: '22%', left: '3%' },
        { top: '55%', right: '18%' },
      ].map((pos, i) => (
        <div key={i} className="absolute pointer-events-none" style={{ opacity: 0.12, ...pos }}>
          <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#F8F6F0', top: 0, left: '-7px' }} />
          <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#F8F6F0', top: '-7px', left: 0 }} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative">

        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="uppercase tracking-widest font-medium"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#E84545' }}
          >
            05 — Contact
          </span>
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,255,255,0.1)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: '#F8F6F0',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Let&apos;s build<br />
              something<br />
              <span style={{ color: '#E84545' }}>together.</span>
            </h2>

            {/* Red underline accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
              style={{
                width: 'clamp(60px, 8vw, 100px)',
                height: '3px',
                background: '#E84545',
                borderRadius: '2px',
                marginBottom: '1.5rem',
                transformOrigin: 'left',
              }}
            />

            <p
              className="leading-relaxed"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)',
                color: '#888880',
                maxWidth: '360px',
              }}
            >
              I&apos;m always open to new opportunities, collaborations,
              and interesting projects. Feel free to reach out.
            </p>
          </motion.div>

          {/* Right — contact links */}
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                className="flex items-center justify-between group transition-all"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  padding: 'clamp(14px, 1.5vw, 20px) clamp(18px, 2vw, 28px)',
                  borderRadius: '2px',
                  boxShadow: '4px 4px 0px transparent',
                  transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E84545';
                  e.currentTarget.style.boxShadow = '4px 4px 0px #E84545';
                  e.currentTarget.style.background = 'rgba(232,69,69,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px transparent';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <span
                  className="uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: '#888880' }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(0.75rem, 0.95vw, 0.875rem)',
                    color: '#F8F6F0',
                    transition: 'color 0.2s',
                  }}
                  className="group-hover:text-[#E84545]"
                >
                  {link.value} ↗
                </span>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-between"
          style={{
            marginTop: '6rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span
            className="uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#5c5b5b' }}
          >
            © 2026 Sabeen. All rights reserved.
          </span>
          <span
            className="uppercase tracking-widest hidden md:block"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#5d5c5c' }}
          >
            Folio — 05
          </span>
        </motion.div>

      </div>
    </section>
  );
}