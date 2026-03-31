'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    number: '01',
    category: 'Front-End',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Tailwind CSS'],
  },
  {
    number: '02',
    category: 'Back-End',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MySQL'],
  },
  {
    number: '03',
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
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

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative flex flex-col gap-6"
      style={{
        background: '#FFFFFF',
        border: '1px solid #DEDAD2',
        borderRadius: '2px',
        padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        boxShadow: '6px 6px 0px #111111',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '6px 6px 0px #E84545';
        e.currentTarget.style.borderColor = '#E84545';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '6px 6px 0px #111111';
        e.currentTarget.style.borderColor = '#DEDAD2';
      }}
    >
      {/* Corner bracket */}
      <div style={{
        position: 'absolute',
        top: '-8px',
        left: '-8px',
        width: '24px',
        height: '24px',
        borderTop: '2px solid #E84545',
        borderLeft: '2px solid #E84545',
        borderRadius: '1px',
      }} />

      {/* Card header */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
            color: '#111111',
            letterSpacing: '-0.01em',
          }}
        >
          {skill.category}
        </span>
        <span
          className="uppercase tracking-widest"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '9px',
            color: '#BBBBB0',
          }}
        >
          {skill.number}
        </span>
      </div>

      {/* Red underline accent */}
      <div style={{ width: '32px', height: '2px', background: '#E84545', borderRadius: '2px', marginTop: '-16px' }} />

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-xs uppercase tracking-widest font-medium cursor-default transition-all"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              border: '1px solid #DEDAD2',
              color: '#444444',
              padding: '5px 12px',
              borderRadius: '100px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#111111';
              e.currentTarget.style.borderColor = '#111111';
              e.currentTarget.style.color = '#F8F6F0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#DEDAD2';
              e.currentTarget.style.color = '#444444';
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center gap-2 mt-auto pt-4"
        style={{ borderTop: '1px solid #EDEAE2' }}
      >
        {/* Pulsing dot */}
        <motion.div
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E84545', flexShrink: 0 }}
        />
        <span
          className="uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: '#BBBBB0' }}
        >
          {skill.items.length} technologies
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{
        background: '#F8F6F0',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Horizontal editorial rule lines (echoes Hero right panel) */}
      {[20, 50, 80].map((pct) => (
        <div
          key={pct}
          className="absolute pointer-events-none"
          style={{ left: 0, right: 0, top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
        />
      ))}

      {/* Cross marks scattered */}
      <CrossMark style={{ top: '12%', right: '8%' }} />
      <CrossMark style={{ bottom: '18%', left: '4%' }} />
      <CrossMark style={{ top: '55%', right: '22%' }} />

      <div className="max-w-6xl w-full mx-auto relative">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="uppercase tracking-widest font-medium"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              color: '#E84545',
            }}
          >
            02 — Skills
          </span>
          <div style={{ flex: 1, height: '0.5px', background: '#DEDAD2' }} />
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            My Skills
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

        {/* Editorial folio number */}
        <div
          className="uppercase tracking-widest mt-16 hidden md:block"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '9px',
            color: '#BBBBB0',
          }}
        >
          Folio — 02
        </div>

      </div>
    </section>
  );
}