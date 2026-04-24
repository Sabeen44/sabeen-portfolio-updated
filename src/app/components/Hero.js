'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const traits = ['Collaboration', 'Empathy', 'Problem-Solving'];
const chips = [
  { label: 'Focus', value: 'Frontend' },
  { label: 'Stack', value: 'Full Stack' },
];

// Decorative cross / registration mark — geometric, precise values kept as inline
function CrossMark({ style }) {
  return (
    <div className="absolute opacity-15" style={style}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#bd0f0f', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#792020', top: '-7px', left: 0 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F8F6F0]">

      {/* ── LEFT — Name & intro ── */}
      <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-20">

        {/* Mobile-only circular photo — shows before the name on small screens */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex md:hidden justify-center mb-2"
        >
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#E84545] shadow-[4px_4px_0px_#111111]">
            <Image
              src="/profile-pic.jpeg"
              alt="Sabeen Chaudhry, web developer"
              fill
              sizes="112px"
              className="object-cover object-top"
              style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              priority
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[7px] h-[7px] rounded-full bg-[#E84545] shrink-0"
          />
          <span className="text-xs tracking-widest uppercase font-medium text-[#E84545] font-dm">
            Available for work
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show">
          <div className="leading-none font-light font-dm text-[#111111] text-[clamp(2.25rem,5vw,5.5rem)] tracking-[-0.02em]">
            Hello, I&apos;m
          </div>
          <div
            className="leading-none font-display italic text-[#111111] tracking-[-0.03em] mt-1"
            style={{ fontSize: 'clamp(3.5rem,9vw,8.75rem)', lineHeight: 0.88 }}
          >
            Sabeen
          </div>
          {/* Red underline accent */}
          <div
            className="h-[3px] bg-[#E84545] rounded-sm mt-3"
            style={{ width: 'clamp(100px,14vw,180px)' }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="text-sm leading-relaxed text-[#888880] font-dm max-w-[clamp(260px,28vw,380px)]"
        >
          A passionate web developer with a knack for creating dynamic,
          responsive websites that deliver exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-4 flex-wrap items-center"
        >
          <a
            href="#projects"
            className="text-xs tracking-widest uppercase font-medium font-dm bg-[#111111] text-[#F8F6F0]
              px-[clamp(20px,2.5vw,36px)] py-[clamp(10px,1vw,14px)] rounded-sm
              hover:bg-[#E84545] transition-colors"
          >
            View Projects
          </a>
          <a
            href="/resume.html"
            className="text-xs tracking-widest uppercase font-medium font-dm text-[#111111]
              border border-[#BBBBB0] px-[clamp(16px,2vw,28px)] py-[clamp(9px,0.9vw,13px)] rounded-sm
              hover:border-[#E84545] hover:text-[#E84545] transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Trait tags */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-2 flex-wrap"
        >
          {traits.map((trait) => (
            <span
              key={trait}
              className="text-xs tracking-widest uppercase font-medium font-dm cursor-default
                border border-[#DEDAD2] text-[#444444] rounded-full
                px-[clamp(10px,1.2vw,16px)] py-[clamp(5px,0.5vw,7px)]
                hover:bg-[#111111] hover:border-[#111111] hover:text-[#F8F6F0] transition-all"
            >
              {trait}
            </span>
          ))}
        </motion.div>

        {/* Scroll-down cue — desktop only, sits at bottom of left panel */}
        <motion.a
          href="#skills"
          custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="hidden md:flex items-center gap-2 mt-4 text-[#BBBBB0] hover:text-[#E84545] transition-colors self-start"
          aria-label="Scroll down"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-lg leading-none"
          >
            ↓
          </motion.span>
          <span className="text-[10px] uppercase tracking-widest font-dm">Scroll</span>
        </motion.a>
      </div>

      {/* ── RIGHT — Photo panel ── */}
      <motion.div
        custom={2} variants={fadeUp} initial="hidden" animate="show"
        className="relative hidden md:flex items-center justify-center overflow-hidden min-h-[500px]"
      >
        {/* Diagonal surface background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            width: '115%',
            background: '#EDEAE2',
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />

        {/* Horizontal editorial rule lines */}
        {[18, 36, 54, 72].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 pointer-events-none z-[1]"
            style={{ top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)' }}
          />
        ))}

        {/* Large decorative ring */}
        <div
          className="absolute pointer-events-none rounded-full z-[1]"
          style={{
            width: 'clamp(260px,32vw,460px)', height: 'clamp(260px,32vw,460px)',
            border: '1px solid rgba(17,17,17,0.10)',
            top: '50%', left: '50%', transform: 'translate(-48%,-52%)',
          }}
        />

        {/* Smaller red-tinted ring */}
        <div
          className="absolute pointer-events-none rounded-full z-[1]"
          style={{
            width: 'clamp(160px,20vw,290px)', height: 'clamp(160px,20vw,290px)',
            border: '1px solid rgba(232,69,69,0.20)',
            top: '50%', left: '50%', transform: 'translate(-28%,-18%)',
          }}
        />

        {/* Red accent dot — top right */}
        <div
          className="absolute rounded-full bg-[#E84545] z-[2]"
          style={{ width: 'clamp(7px,0.7vw,11px)', height: 'clamp(7px,0.7vw,11px)', top: '14%', right: '26%' }}
        />

        {/* Faint dot — bottom left */}
        <div
          className="absolute rounded-full bg-[#E84545] opacity-35 z-[2]"
          style={{ width: 'clamp(4px,0.4vw,7px)', height: 'clamp(4px,0.4vw,7px)', bottom: '24%', left: '20%' }}
        />

        <CrossMark style={{ top: '20%', left: '22%', zIndex: 2 }} />
        <CrossMark style={{ bottom: '28%', right: '20%', zIndex: 2 }} />
        <CrossMark style={{ top: '60%', left: '14%', zIndex: 2 }} />

        {/* ── Photo wrap ── */}
        <div
          className="relative z-[3]"
          style={{ width: 'clamp(220px,26vw,360px)', height: 'clamp(270px,32vw,440px)' }}
        >
          {/* Red corner bracket */}
          <div
            className="absolute z-[4]"
            style={{
              top: 'clamp(-20px,-1vw,-12px)', left: 'clamp(-20px,-1vw,-12px)',
              width: 'clamp(26px,2.5vw,60px)', height: 'clamp(26px,2.5vw,60px)',
              borderTop: '5px solid #E84545', borderLeft: '5px solid #E84545',
              borderRadius: '2px',
            }}
          />

          {/* Photo frame */}
          <div
            className="relative overflow-hidden w-full h-full"
            style={{
              borderRadius: 'clamp(8px,1vw,8px) clamp(8px,1vw,8px) clamp(60px,8vw,110px) clamp(8px,1vw,8px)',
              boxShadow: 'clamp(12px,1.5vw,22px) clamp(12px,1.5vw,22px) 0px #111111',
            }}
          >
            <Image
              src="/profile-pic.jpeg"
              alt="Sabeen Chaudhry, web developer"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
              style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              priority
            />
          </div>

          {/* Watermark letter */}
          <div
            className="absolute pointer-events-none select-none font-display italic font-bold z-[2]"
            style={{
              fontSize: 'clamp(100px,14vw,170px)',
              color: 'rgba(17,17,17,0.055)',
              lineHeight: 1,
              bottom: 'clamp(-14px,-1.5vw,-20px)',
              left: 'clamp(-10px,-1vw,-16px)',
            }}
          >
            S
          </div>
        </div>

        {/* Editorial folio number */}
        <div
          className="absolute uppercase tracking-widest text-[10px] text-[#BBBBB0] font-dm z-[5]"
          style={{ bottom: 'clamp(20px,2.5vw,36px)', left: 'clamp(24px,5vw,80px)' }}
        >
          Folio — 01
        </div>

        {/* Info chips — bottom right */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="absolute flex gap-2 flex-wrap justify-end z-[5]"
          style={{ bottom: 'clamp(60px,7vw,100px)', right: 'clamp(24px,4vw,60px)' }}
        >
          {chips.map((chip) => (
            <div
              key={chip.label}
              className="inline-flex flex-col rounded-[4px] backdrop-blur-sm"
              style={{
                background: 'rgba(7,7,7,0.87)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(8px,0.8vw,11px) clamp(14px,1.6vw,22px)',
                minWidth: 'clamp(100px,9vw,140px)',
              }}
            >
              <span className="uppercase tracking-widest font-dm text-[10px] text-[#dfdfd4] mb-0.5">
                {chip.label}
              </span>
              <span
                className="font-medium font-dm text-[#F8F6F0]"
                style={{ fontSize: 'clamp(12px,1.1vw,15px)' }}
              >
                {chip.value}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
