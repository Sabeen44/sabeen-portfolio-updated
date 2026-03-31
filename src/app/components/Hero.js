'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Hero() {
  return (
    <section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20"
      style={{ background: '#FAF7F2' }}
    >

      {/* LEFT — Name & intro */}
      <div className="flex flex-col justify-center px-12 py-16 gap-6">

        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-3"
        >
          <div style={{ width: '2rem', height: '1px', background: '#C9625F' }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#C9625F', fontFamily: 'var(--font-dm-sans)' }}
          >
            Available for work
          </span>
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="leading-none"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
            color: '#1A1714',
            letterSpacing: '-0.02em',
          }}
        >
          Hello, I'm<br />
          <em style={{ color: '#C9625F' }}>Sabeen</em>
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-sm leading-relaxed max-w-sm"
          style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
        >
          A passionate web developer with a knack for creating dynamic,
          responsive websites that deliver exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-4 flex-wrap items-center"
        >
          <a
            href="#projects"
            className="text-xs tracking-widest uppercase px-6 py-3 transition-all"
            style={{
              background: '#1A1714',
              color: '#FAF7F2',
              fontFamily: 'var(--font-dm-sans)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#C9625F'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#1A1714'}>
          
            View Projects
          </a>
          
          <a
            href="#"
            className="text-xs tracking-widest uppercase transition-colors"
            style={{
              color: '#7A736C',
              fontFamily: 'var(--font-dm-sans)',
              borderBottom: '1px solid #E0D8CF',
              paddingBottom: '2px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C9625F'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#7A736C'}></a>
          <a>
            Download Resume
          </a>
        </motion.div>

        {/* Trait tags */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-3 flex-wrap mt-2"
        >
          {['Collaboration', 'Empathy', 'Problem-Solving'].map((trait) => (
            <span
              key={trait}
              className="text-xs tracking-widest uppercase px-4 py-2"
              style={{
                border: '1px solid #E0D8CF',
                color: '#7A736C',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              {trait}
            </span>
          ))}
        </motion.div>

      </div>

      {/* RIGHT — Photo panel */}
      <motion.div
        custom={2} variants={fadeUp} initial="hidden" animate="show"
        className="relative flex items-end justify-center overflow-hidden"
        style={{ background: '#F2EDE6', minHeight: '500px' }}
      >

        {/* Decorative circle */}
        <div
          className="absolute"
          style={{
            top: '2rem', right: '2rem',
            width: '80px', height: '80px',
            borderRadius: '50%',
            border: '2px solid #E8A09E',
            opacity: 0.5,
          }}
        />

        {/* Small dot */}
        <div
          className="absolute"
          style={{
            bottom: '10rem', left: '2rem',
            width: '40px', height: '40px',
            borderRadius: '50%',
            background: '#C9625F',
            opacity: 0.15,
          }}
        />

        {/* Photo placeholder — replace with your actual photo */}
        <div
          style={{
            width: '75%',
            maxWidth: '340px',
            height: '420px',
            background: '#E0D0C8',
            borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#C9625F', fontSize: '0.75rem', fontFamily: 'var(--font-dm-sans)' }}>
            Your Photo Here
          </span>
        </div>

        {/* Stat card */}
        <div
          className="absolute"
          style={{
            bottom: '2.5rem', right: '2.5rem',
            background: 'white',
            padding: '1rem 1.5rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-1"
            style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
          >
            Stack
          </div>
          <div
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#1A1714',
            }}
          >
            Full Stack
          </div>
        </div>

      </motion.div>

    </section>
  );
}