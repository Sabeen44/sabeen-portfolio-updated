'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    number: '01',
    title: 'Project One',
    description: 'modern SaaS-style platform that provides subscription-based access to core features, built with a scalable architecture and a polished, user‑first interface.',
    tags: ['React/Vite', 'Node.js', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '02',
    title: 'Project Two',
    description: 'fun, interactive web app that recommends movies based on the user’s mood—expressed through emojis. integrates the Streaming Availability API to surface real‑time movie info and where to watch them.', 
    tags: ['React', 'Tailwind', 'RESTapi'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '03',
    title: 'Project Three',
    description: ' think Google Docs lite — users can create notebooks, write notes, and can share/collaborate with others in real time.Features include: online presence indicators, rich text editor, AI writing assistant.',
    tags: ['Next.js', 'Supabase', 'Claude API', 'TipTap'],
    liveUrl: '#',
    githubUrl: '#',
  },
];
function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none" style={{ opacity: 0.15, ...style }}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#1111', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#1111', top: '-7px', left: 0 }} />
    </div>
  );
}






function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative flex flex-col gap-5"
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
      {/* Red corner bracket */}
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

      {/* Top row — number + links */}
      <div className="flex items-center justify-between">
        <span
          className="uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: '#BBBBB0' }}
        >
          {project.number}
        </span>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            className="uppercase tracking-widest transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#888880' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E84545')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888880')}
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            className="uppercase tracking-widest transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#888880' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E84545')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888880')}
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '0.5px', background: '#EDEAE2' }} />

      {/* Title */}
      <h3
        className="transition-colors"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
          color: '#111111',
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </h3>

      {/* Red underline accent */}
      <div style={{ width: '32px', height: '2px', background: '#E84545', borderRadius: '2px', marginTop: '-12px' }} />

      {/* Description */}
      <p
        className="leading-relaxed"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
          color: '#888880',
        }}
      >
        {project.description}
      </p>

      {/* Tags — pill style matching Skills */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="uppercase tracking-widest font-medium cursor-default transition-all"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '9px',
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
            {tag}
          </span>
        ))}
      </div>

      {/* Footer — tech count like Skills */}
      <div
        className="flex items-center gap-2 pt-4"
        style={{ borderTop: '1px solid #EDEAE2' }}
      >
        <motion.div
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E84545', flexShrink: 0 }}
        />
        <span
          className="uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: '#BBBBB0' }}
        >
          {project.tags.length} technologies
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section 
      id="projects"
      className="justify-items-center"
      style={{
        background: '#EDEAE2',
        padding: 'clamp(4rem, 8vw, 12rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Horizontal editorial rule lines */}
      {[20, 50, 80].map((pct) => (
        <div
          key={pct}
          className="absolute pointer-events-none"
          style={{ left: 0, right: 0, top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
        />
      ))}

      {/* Cross marks */}
      <CrossMark style={{ top: '10%', right: '6%' }} />
      <CrossMark style={{ bottom: '15%', left: '6%' }} />
      <CrossMark style={{ top: '58%', right: '20%' }} />

      <div className="max-w-7xl w-full mx-auto relative">

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
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#E84545' }}
          >
            03 — Projects
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
            My Work
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* Editorial folio */}
        <div
          className="uppercase tracking-widest mt-16 hidden md:block"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#BBBBB0', marginTop:'20px' }}
        >
          Folio — 03
        </div>

      </div>
    </section>
  );
}

