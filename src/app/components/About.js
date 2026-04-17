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

// Decorative cross — geometric, keep inline styles
function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none opacity-15" style={style}>
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
      <div className="flex flex-col items-center gap-2 min-w-[48px]">
        <span className="uppercase tracking-widest font-dm text-[#E84545] whitespace-nowrap" style={{ fontSize: '9px' }}>
          {item.year}
        </span>
        <motion.div
          animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          className="w-1.5 h-1.5 rounded-full bg-[#E84545] shrink-0"
        />
        <div className="group-last:hidden w-px flex-1 bg-[#DEDAD2]" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3
          className="font-display italic text-[#111111] tracking-[-0.01em] mb-2"
          style={{ fontSize: 'clamp(1rem,1.4vw,1.25rem)' }}
        >
          {item.title}
        </h3>
        <p
          className="leading-relaxed text-[#888880] font-dm"
          style={{ fontSize: 'clamp(0.75rem,0.9vw,0.875rem)' }}
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
      className="relative overflow-hidden bg-[#f5f4f2] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28"
    >
      {/* Horizontal editorial rule lines */}
      {[25, 55, 80].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
        />
      ))}

      <CrossMark style={{ top: '10%', right: '6%' }} />
      <CrossMark style={{ bottom: '20%', left: '3%' }} />
      <CrossMark style={{ top: '52%', right: '20%' }} />

      <div className="max-w-6xl w-full mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

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
            <span className="uppercase tracking-widest font-medium font-dm text-[#E84545]" style={{ fontSize: '11px' }}>
              04 — About
            </span>
            <div className="flex-1 bg-[#DEDAD2]" style={{ height: '0.5px' }} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="leading-tight font-display italic text-[#111111] tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)' }}
          >
            From student affairs<br />
            to{' '}
            <span className="text-[#E84545]">web developer</span>
          </motion.h2>

          {/* Red underline accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="h-[3px] bg-[#E84545] rounded-sm mb-6 origin-left"
            style={{ width: 'clamp(60px,8vw,100px)' }}
          />

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="leading-relaxed text-[#888880] font-dm max-w-[420px]"
            style={{ fontSize: 'clamp(0.75rem,0.95vw,0.9rem)' }}
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
            className="flex flex-col mt-10"
          >
            {[
              { num: '01', title: 'Custom Web Solutions', desc: 'Tailored websites that meet your unique needs and goals.' },
              { num: '02', title: 'User-Centered Design', desc: 'Websites designed with a focus on usability and experience.' },
              { num: '03', title: 'Continuous Improvement', desc: 'Committed to staying current with industry trends.' },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-5 py-5 group cursor-default border-t border-[#DEDAD2]"
              >
                <span
                  className="font-display italic text-[#DEDAD2] shrink-0 transition-colors duration-200 hover:text-[#E84545]"
                  style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', lineHeight: 1 }}
                >
                  {item.num}
                </span>
                <div>
                  <h4
                    className="font-medium font-dm text-[#111111] mb-1"
                    style={{ fontSize: 'clamp(0.75rem,0.95vw,0.875rem)' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="leading-relaxed text-[#888880] font-dm"
                    style={{ fontSize: 'clamp(0.7rem,0.8vw,0.8rem)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#DEDAD2]" />
          </motion.div>
        </div>

        {/* ── RIGHT — timeline ── */}
        <div className="flex flex-col md:pt-16">

          {/* Timeline header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="uppercase tracking-widest font-dm text-[#BBBBB0]" style={{ fontSize: '9px' }}>
              Journey
            </span>
            <div className="flex-1 bg-[#DEDAD2]" style={{ height: '0.5px' }} />
          </motion.div>

          {journey.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>

      </div>

      {/* Editorial folio */}
      <div className="uppercase tracking-widest mt-16 hidden md:block font-dm text-[#BBBBB0] max-w-6xl mx-auto pl-6 sm:pl-10 lg:pl-20" style={{ fontSize: '9px' }}>
        Folio — 04
      </div>
    </section>
  );
}
