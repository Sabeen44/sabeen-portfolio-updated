'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'Email', value: 'craftedstack@gmail.com', href: 'mailto:craftedstack@gmail.com' },
  { label: 'GitHub', value: '@Sabeen44', href: 'https://github.com/Sabeen44' },
  { label: 'LinkedIn', value: '@Sabeen', href: 'https://www.linkedin.com/in/sabeen-chaudhry/' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111111] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28"
    >
      {/* Top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E84545]" />

      {/* Horizontal editorial rule lines */}
      {[25, 55, 80].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: '0.5px', background: 'rgba(255,255,255,0.04)' }}
        />
      ))}

      {/* Cross marks — lighter on dark bg */}
      {[
        { top: '12%', right: '6%' },
        { bottom: '22%', left: '3%' },
        { top: '55%', right: '18%' },
      ].map((pos, i) => (
        <div key={i} className="absolute pointer-events-none opacity-[0.12]" style={pos}>
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
          <span className="uppercase tracking-widest font-medium font-dm text-[#E84545]" style={{ fontSize: '11px' }}>
            05 — Contact
          </span>
          <div className="flex-1" style={{ height: '0.5px', background: 'rgba(255,255,255,0.1)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2
              className="leading-tight font-display italic text-[#F8F6F0] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
            >
              Let&apos;s build<br />
              something<br />
              <span className="text-[#E84545]">together.</span>
            </h2>

            {/* Red underline accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
              className="h-[3px] bg-[#E84545] rounded-sm mb-6 origin-left"
              style={{ width: 'clamp(60px,8vw,100px)' }}
            />

            <p
              className="leading-relaxed text-[#888880] font-dm max-w-[360px]"
              style={{ fontSize: 'clamp(0.75rem,0.95vw,0.9rem)' }}
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
                className="flex items-center justify-between group rounded-sm
                  px-[clamp(18px,2vw,28px)] py-4 sm:py-[clamp(14px,1.5vw,20px)]
                  transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: '4px 4px 0px transparent',
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
                <span className="uppercase tracking-widest font-dm text-[#888880]" style={{ fontSize: '9px' }}>
                  {link.label}
                </span>
                <span
                  className="font-dm text-[#F8F6F0] group-hover:text-[#E84545] transition-colors"
                  style={{ fontSize: 'clamp(0.75rem,0.95vw,0.875rem)' }}
                >
                  {link.value} ↗
                </span>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
