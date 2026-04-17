'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    number: '01',
    category: 'Front-End',
    items: ['Next.js', 'React', 'Vite', 'Tailwind', 'Framer Motion', 'TipTap'],
  },
  {
    number: '02',
    category: 'Back-End',
    items: ['Node.js', 'Express.js', 'RESTful API', 'Supabase', 'Claude API', 'Stripe'],
  },
  {
    number: '03',
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Figma', 'Postman', 'Zustand'],
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

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative flex flex-col gap-6 bg-white border border-[#DEDAD2] rounded-sm
        p-6 lg:p-9 shadow-[6px_6px_0px_#111111]
        hover:shadow-[6px_6px_0px_#E84545] hover:border-[#E84545] transition-all duration-200"
    >
      {/* Corner bracket */}
      <div
        className="absolute -top-2 -left-2 w-6 h-6 rounded-[1px]"
        style={{ borderTop: '2px solid #E84545', borderLeft: '2px solid #E84545' }}
      />

      {/* Card header */}
      <div className="flex items-center justify-between">
        <span
          className="font-display italic text-[#111111] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(1.1rem,1.5vw,1.35rem)' }}
        >
          {skill.category}
        </span>
        <span className="uppercase tracking-widest font-dm text-[#BBBBB0]" style={{ fontSize: '9px' }}>
          {skill.number}
        </span>
      </div>

      {/* Red underline accent */}
      <div className="w-8 h-0.5 bg-[#E84545] rounded-sm -mt-4" />

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-xs uppercase tracking-widest font-medium font-dm cursor-default
              border border-[#DEDAD2] text-[#444444] rounded-full px-3 py-1
              hover:bg-[#111111] hover:border-[#111111] hover:text-[#F8F6F0] transition-all"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[#EDEAE2]">
        <motion.div
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          className="w-1.5 h-1.5 rounded-full bg-[#E84545] shrink-0"
        />
        <span className="uppercase tracking-widest font-dm text-[#BBBBB0]" style={{ fontSize: '9px' }}>
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
      className="relative overflow-hidden bg-[#F8F6F0] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28"
    >
      {/* Horizontal editorial rule lines */}
      {[20, 50, 80].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
        />
      ))}

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
          <span className="uppercase tracking-widest font-medium font-dm text-[#E84545]" style={{ fontSize: '11px' }}>
            02 — Skills
          </span>
          <div className="flex-1 bg-[#DEDAD2]" style={{ height: '0.5px' }} />
          <h2
            className="font-display italic text-[#111111] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
          >
            My Skills
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

        {/* Editorial folio number */}
        <div className="uppercase tracking-widest mt-3 hidden md:block font-dm text-[#BBBBB0]" style={{ fontSize: '10px' }}>
          Folio — 02
        </div>

      </div>
    </section>
  );
}
