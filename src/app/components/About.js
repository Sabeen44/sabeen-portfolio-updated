'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const journey = [
  {
    year: '2020',
    title: 'Student Affairs',
    description: 'Started my career in higher education, supporting students and developing a deep understanding of user needs.',
  },
  {
    year: '2022',
    title: 'Self-Taught',
    description: 'Discovered my passion for web development. Began teaching myself HTML, CSS, and JavaScript.',
  },
  {
    year: '2023',
    title: 'Coding Bootcamp',
    description: 'Enrolled in an intensive bootcamp, immersing myself in full-stack development — React, Node.js, and more.',
  },
  {
    year: '2024',
    title: 'Web Developer',
    description: 'Today I bring a unique perspective to every project, combining technical skills with a user-centered mindset.',
  },
];

function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none" style={{ opacity: 0.15, ...style }}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#111111', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#111111', top: '-7px', left: 0 }} />
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="flex gap-8 group"
    >
      {/* Year + vertical line */}
      <div className="flex flex-col items-center gap-2" style={{ minWidth: '48px' }}>
        <span
          className="uppercase tracking-widest"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '9px',
            color: '#E84545',
            whiteSpace: 'nowrap',
          }}
        >
          {item.year}
        </span>
        {/* Dot */}
        <motion.div
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#E84545',
            flexShrink: 0,
          }}
        />
        {/* Line */}
        <div
          className="group-last:hidden"
          style={{ width: '1px', flex: 1, background: '#DEDAD2' }}
        />
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '2.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            color: '#111111',
            letterSpacing: '-0.01em',
            marginBottom: '8px',
          }}
        >
          {item.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
            color: '#888880',
          }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}


export default function About() {
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: '#f5f4f2',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Horizontal editorial rule lines */}
      {[25, 55, 80].map((pct) => (
        <div
          key={pct}
          className="absolute pointer-events-none"
          style={{
            left: 0, right: 0,
            top: `${pct}%`,
            height: '0.5px',
            background: 'rgba(17,17,17,0.06)',
          }}
        />
      ))}

      {/* Cross marks */}
      <CrossMark style={{ top: '10%', right: '6%' }} />
      <CrossMark style={{ bottom: '20%', left: '3%' }} />
      <CrossMark style={{ top: '52%', right: '20%' }} />

      <div className="max-w-6xl w-full mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* ── LEFT — header + bio + offerings ── */}
        <div>

          {/* Section label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span
              className="uppercase tracking-widest font-medium"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#E84545' }}
            >
              04 — About
            </span>
            <div style={{ flex: 1, height: '0.5px', background: '#DEDAD2' }} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="leading-tight"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            From student affairs<br />
            to{' '}
            <span style={{ color: '#E84545' }}>web developer</span>
          </motion.h2>

          {/* Red underline accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            style={{
              width: 'clamp(60px, 8vw, 100px)',
              height: '3px',
              background: '#E84545',
              borderRadius: '2px',
              marginBottom: '1.5rem',
              transformOrigin: 'left',
            }}
          />

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="leading-relaxed"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)',
              color: '#888880',
              maxWidth: '420px',
            }}
          >
            My journey into web development started in an unexpected place.
            My background in student affairs gave me a deep understanding of
            user needs and a commitment to creating accessible, intuitive
            digital experiences.
          </motion.p>

          {/* What I offer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col gap-0 mt-10"
          >
            {[
              { num: '01', title: 'Custom Web Solutions', desc: 'Tailored websites that meet your unique needs and goals.' },
              { num: '02', title: 'User-Centered Design', desc: 'Websites designed with a focus on usability and experience.' },
              { num: '03', title: 'Continuous Improvement', desc: 'Committed to staying current with industry trends.' },
            ].map((item, i) => (
              <div
                key={item.num}
                className="flex items-start gap-5 py-5 group cursor-default"
                style={{ borderTop: '1px solid #DEDAD2' }}
              >
                {/* Big faint number */}
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    color: '#DEDAD2',
                    lineHeight: 1,
                    flexShrink: 0,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E84545')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#DEDAD2')}
                >
                  {item.num}
                </span>
                <div>
                  <h4
                    className="font-medium"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'clamp(0.75rem, 0.95vw, 0.875rem)',
                      color: '#111111',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'clamp(0.7rem, 0.8vw, 0.8rem)',
                      color: '#888880',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom border to close the list */}
            <div style={{ borderTop: '1px solid #DEDAD2' }} />
          </motion.div>
        </div>

        {/* ── RIGHT — timeline ── */}
        <div className="flex flex-col" style={{ paddingTop: '4rem' }}>

          {/* Timeline header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              className="uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: '#BBBBB0' }}
            >
              Journey
            </span>
            <div style={{ flex: 1, height: '0.5px', background: '#DEDAD2' }} />
          </motion.div>

          {journey.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>

      </div>

      {/* Editorial folio */}
      <div
        className="uppercase tracking-widest mt-16 hidden md:block"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '9px',
          color: '#BBBBB0',
          maxWidth: '72rem',
          margin: '4rem auto 0',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        Folio — 04
      </div>
    </section>
  );
}