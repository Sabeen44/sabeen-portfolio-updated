'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const projects = [
  {
    number: '01',
    title: 'DigiReach',
    description: 'Redesigned and rebuilt a client\'s site into a modern SaaS-style platform with subscription-based access, scalable architecture, and a polished user‑first interface.',
    tags: ['React/Vite', 'Node.js', 'Supabase'],
    liveUrl: 'https://github.com/Sabeen44/digiReach',
    githubUrl: 'https://github.com/Sabeen44/digiReach',
    caseStudyUrl: '/case-study/digireach',
  },
  {
    number: '02',
    title: 'PickFlick',
    description: 'Fun, interactive app that recommends movies based on the user\'s mood — expressed through emojis. Integrates the Streaming Availability API to surface real‑time movie info and where to watch.',
    tags: ['React', 'Tailwind', 'REST API'],
    liveUrl: 'https://pick-flick-three.vercel.app/',
    githubUrl: 'https://github.com/Sabeen44/PickFlick-updated',
  },
  {
    number: '03',
    title: 'Noted',
    description: 'Google Docs lite — users create notebooks, write notes, and collaborate in real time. Features online presence indicators, a rich text editor, and an AI writing assistant.',
    tags: ['Next.js', 'Supabase', 'Claude API', 'TipTap'],
    liveUrl: 'https://github.com/Sabeen44/Noted',
    githubUrl: 'https://github.com/Sabeen44/Noted',
  },
];

// Decorative cross — geometric, keep inline styles
function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none opacity-15" style={style}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#111111', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#111111', top: '-7px', left: 0 }} />
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
      className="relative flex flex-col gap-5 bg-white border border-[#DEDAD2] rounded-sm
        p-6 lg:p-9 shadow-[6px_6px_0px_#111111]
        hover:shadow-[6px_6px_0px_#E84545] hover:border-[#E84545] transition-all duration-200"
    >
      {/* Red corner bracket */}
      <div
        className="absolute -top-2 -left-2 w-6 h-6 rounded-[1px]"
        style={{ borderTop: '2px solid #E84545', borderLeft: '2px solid #E84545' }}
      />

      {/* Top row — number + links */}
      <div className="flex items-center justify-between">
        <span className="uppercase tracking-widest font-dm text-[#BBBBB0]" style={{ fontSize: '9px' }}>
          {project.number}
        </span>
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest font-dm text-[#888880] text-[15px] hover:text-[#E84545] transition-colors"
          >
            GitHub
          </a>
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-widest font-dm text-[#888880] text-[15px] hover:text-[#E84545] transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#EDEAE2]" style={{ height: '0.5px' }} />

      {/* Title */}
      <h3
        className="font-display italic text-[#111111] tracking-[-0.01em] transition-colors"
        style={{ fontSize: 'clamp(1.1rem,1.5vw,1.35rem)' }}
      >
        {project.title}
      </h3>

      {/* Red underline accent */}
      <div className="w-8 h-0.5 bg-[#E84545] rounded-sm -mt-3" />

      {/* Description */}
      <p
        className="leading-relaxed text-[#888880] font-dm"
        style={{ fontSize: 'clamp(0.75rem,0.9vw,0.875rem)' }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="uppercase tracking-widest font-medium font-dm cursor-default
              border border-[#DEDAD2] text-[#444444] rounded-full px-3 py-1
              hover:bg-[#111111] hover:border-[#111111] hover:text-[#F8F6F0] transition-all"
            style={{ fontSize: '9px' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#EDEAE2]">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-[#E84545] shrink-0"
          />
          <span className="uppercase tracking-widest font-dm text-[#BBBBB0]" style={{ fontSize: '9px' }}>
            {project.tags.length} technologies
          </span>
        </div>
        {project.caseStudyUrl && (
          <Link
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1.5 uppercase tracking-widest font-dm font-medium text-[#E84545] hover:text-[#111111] transition-colors"
            style={{ fontSize: '9px' }}
          >
            Case Study <span className="text-[11px]">→</span>
          </Link>
        )}
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
      className="relative bg-[#EDEAE2] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28"
    >
      {/* Horizontal editorial rule lines */}
      {[20, 50, 80].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
        />
      ))}

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
          className="flex items-center gap-4 mb-16 flex-wrap"
        >
          <span className="uppercase tracking-widest font-medium font-dm text-[#E84545]" style={{ fontSize: '11px' }}>
            03 — Projects
          </span>
          <div className="flex-1 bg-[#DEDAD2]" style={{ height: '0.5px' }} />
          <h2
            className="font-display italic text-[#111111] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
          >
            My Work
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* Editorial folio */}
        <div className="uppercase tracking-widest mt-5 hidden md:block font-dm text-[#BBBBB0]" style={{ fontSize: '10px' }}>
          Folio — 03
        </div>

      </div>
    </section>
  );
}
