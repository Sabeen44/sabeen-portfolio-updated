// 'use client';

// import { motion } from 'framer-motion';

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
//   })
// };

// export default function Hero() {
//   return (
//     <section
//       className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20"
//       style={{ background: '#FAF7F2' }}
//     >

//       {/* LEFT — Name & intro */}
//       <div className="flex flex-col justify-center px-12 py-16 gap-6">

//         <motion.div
//           custom={0} variants={fadeUp} initial="hidden" animate="show"
//           className="flex items-center gap-3"
//         >
//           <div style={{ width: '2rem', height: '1px', background: '#C9625F' }} />
//           <span
//             className="text-xs tracking-widest uppercase"
//             style={{ color: '#C9625F', fontFamily: 'var(--font-dm-sans)' }}
//           >
//             Available for work
//           </span>
//         </motion.div>

//         <motion.h1
//           custom={1} variants={fadeUp} initial="hidden" animate="show"
//           className="leading-none"
//           style={{
//             fontFamily: 'var(--font-playfair)',
//             fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
//             color: '#1A1714',
//             letterSpacing: '-0.02em',
//           }}
//         >
//           Hello, I'm<br />
//           <em style={{ color: '#C9625F' }}>Sabeen</em>
//         </motion.h1>

//         <motion.p
//           custom={2} variants={fadeUp} initial="hidden" animate="show"
//           className="text-sm leading-relaxed max-w-sm"
//           style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
//         >
//           A passionate web developer with a knack for creating dynamic,
//           responsive websites that deliver exceptional digital experiences.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           custom={3} variants={fadeUp} initial="hidden" animate="show"
//           className="flex gap-4 flex-wrap items-center"
//         >
//           <a
//             href="#projects"
//             className="text-xs tracking-widest uppercase px-6 py-3 transition-all"
//             style={{
//               background: '#1A1714',
//               color: '#FAF7F2',
//               fontFamily: 'var(--font-dm-sans)',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.background = '#C9625F'}
//             onMouseLeave={(e) => e.currentTarget.style.background = '#1A1714'}>
          
//             View Projects
//           </a>
          
//           <a
//             href="#"
//             className="text-xs tracking-widest uppercase transition-colors"
//             style={{
//               color: '#7A736C',
//               fontFamily: 'var(--font-dm-sans)',
//               borderBottom: '1px solid #E0D8CF',
//               paddingBottom: '2px',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.color = '#C9625F'}
//             onMouseLeave={(e) => e.currentTarget.style.color = '#7A736C'}></a>
//           <a>
//             Download Resume
//           </a>
//         </motion.div>

//         {/* Trait tags */}
//         <motion.div
//           custom={4} variants={fadeUp} initial="hidden" animate="show"
//           className="flex gap-3 flex-wrap mt-2"
//         >
//           {['Collaboration', 'Empathy', 'Problem-Solving'].map((trait) => (
//             <span
//               key={trait}
//               className="text-xs tracking-widest uppercase px-4 py-2"
//               style={{
//                 border: '1px solid #E0D8CF',
//                 color: '#7A736C',
//                 fontFamily: 'var(--font-dm-sans)',
//               }}
//             >
//               {trait}
//             </span>
//           ))}
//         </motion.div>

//       </div>

//       {/* RIGHT — Photo panel */}
//       <motion.div
//         custom={2} variants={fadeUp} initial="hidden" animate="show"
//         className="relative flex items-end justify-center overflow-hidden"
//         style={{ background: '#F2EDE6', minHeight: '500px' }}
//       >

//         {/* Decorative circle */}
//         <div
//           className="absolute"
//           style={{
//             top: '2rem', right: '2rem',
//             width: '80px', height: '80px',
//             borderRadius: '50%',
//             border: '2px solid #E8A09E',
//             opacity: 0.5,
//           }}
//         />

//         {/* Small dot */}
//         <div
//           className="absolute"
//           style={{
//             bottom: '10rem', left: '2rem',
//             width: '40px', height: '40px',
//             borderRadius: '50%',
//             background: '#C9625F',
//             opacity: 0.15,
//           }}
//         />

//         {/* Photo placeholder — replace with your actual photo */}
//         <div
//           style={{
//             width: '75%',
//             maxWidth: '340px',
//             height: '420px',
//             background: '#E0D0C8',
//             borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <span style={{ color: '#C9625F', fontSize: '0.75rem', fontFamily: 'var(--font-dm-sans)' }}>
//             Your Photo Here
//           </span>
//         </div>

//         {/* Stat card */}
//         <div
//           className="absolute"
//           style={{
//             bottom: '2.5rem', right: '2.5rem',
//             background: 'white',
//             padding: '1rem 1.5rem',
//             boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
//           }}
//         >
//           <div
//             className="text-xs tracking-widest uppercase mb-1"
//             style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
//           >
//             Stack
//           </div>
//           <div
//             style={{
//               fontFamily: 'var(--font-playfair)',
//               fontSize: '1.6rem',
//               fontWeight: 700,
//               color: '#1A1714',
//             }}
//           >
//             Full Stack
//           </div>
//         </div>

//       </motion.div>

//     </section>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
//   }),
// };

// const traits = ['Collaboration', 'Empathy', 'Problem-Solving'];
// const chips = [
//   { label: 'Focus', value: 'Frontend' },
//   { label: 'Stack', value: 'Full Stack' },
// ];

// export default function Hero() {
//   return (
//     <section
//       className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20"
//       style={{ background: '#FAF7F2' }}
//     >

//       {/* ── LEFT — Name & intro ── */}
//       <div className="flex flex-col justify-center px-12 py-16 gap-6">

//         {/* Available badge */}
//         <motion.div
//           custom={0} variants={fadeUp} initial="hidden" animate="show"
//           className="flex items-center gap-3"
//         >
//           <div style={{ width: '2rem', height: '1px', background: '#C9625F' }} />
//           <span
//             className="text-xs tracking-widest uppercase"
//             style={{ color: '#C9625F', fontFamily: 'var(--font-dm-sans)' }}
//           >
//             Available for work
//           </span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           custom={1} variants={fadeUp} initial="hidden" animate="show"
//           className="leading-none"
//           style={{
//             fontFamily: 'var(--font-playfair)',
//             fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
//             color: '#1A1714',
//             letterSpacing: '-0.02em',
//           }}
//         >
//           Hello, I'm<br />
//           <em style={{ color: '#C9625F' }}>Sabeen</em>
//         </motion.h1>

//         {/* Bio */}
//         <motion.p
//           custom={2} variants={fadeUp} initial="hidden" animate="show"
//           className="text-sm leading-relaxed max-w-sm"
//           style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
//         >
//           A passionate web developer with a knack for creating dynamic,
//           responsive websites that deliver exceptional digital experiences.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           custom={3} variants={fadeUp} initial="hidden" animate="show"
//           className="flex gap-4 flex-wrap items-center"
//         >
//           <a
//             href="#projects"
//             className="text-xs tracking-widest uppercase px-6 py-3 transition-all"
//             style={{ background: '#1A1714', color: '#FAF7F2', fontFamily: 'var(--font-dm-sans)' }}
//             onMouseEnter={(e) => (e.currentTarget.style.background = '#C9625F')}
//             onMouseLeave={(e) => (e.currentTarget.style.background = '#1A1714')}
//           >
//             View Projects
//           </a>

//           <a
//             href="#"
//             className="text-xs tracking-widest uppercase transition-colors"
//             style={{
//               color: '#7A736C',
//               fontFamily: 'var(--font-dm-sans)',
//               borderBottom: '1px solid #E0D8CF',
//               paddingBottom: '2px',
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.color = '#C9625F')}
//             onMouseLeave={(e) => (e.currentTarget.style.color = '#7A736C')}
//           >
//             Download Resume
//           </a>
//         </motion.div>

//         {/* Trait tags */}
//         <motion.div
//           custom={4} variants={fadeUp} initial="hidden" animate="show"
//           className="flex gap-3 flex-wrap mt-2"
//         >
//           {traits.map((trait) => (
//             <span
//               key={trait}
//               className="text-xs tracking-widest uppercase px-4 py-2 cursor-default"
//               style={{
//                 border: '1px solid #E0D8CF',
//                 color: '#7A736C',
//                 fontFamily: 'var(--font-dm-sans)',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = '#C9625F';
//                 e.currentTarget.style.color = '#C9625F';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = '#E0D8CF';
//                 e.currentTarget.style.color = '#7A736C';
//               }}
//             >
//               {trait}
//             </span>
//           ))}
//         </motion.div>

//       </div>

//       {/* ── RIGHT — Photo panel ── */}
//       <motion.div
//         custom={2} variants={fadeUp} initial="hidden" animate="show"
//         className="relative flex items-center justify-center overflow-hidden"
//         style={{ background: '#F2EDE6', minHeight: '500px' }}
//       >

//         {/* Large decorative ring */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             width: 'clamp(260px, 34vw, 440px)',
//             height: 'clamp(260px, 34vw, 440px)',
//             borderRadius: '50%',
//             border: '1px solid #E8A09E',
//             opacity: 0.45,
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-52%, -52%)',
//           }}
//         />

//         {/* Smaller inner ring */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             width: 'clamp(120px, 16vw, 220px)',
//             height: 'clamp(120px, 16vw, 220px)',
//             borderRadius: '50%',
//             border: '1px solid #E8A09E',
//             opacity: 0.3,
//             top: '28%',
//             right: '12%',
//           }}
//         />

//         {/* Top-left rose dot */}
//         <div
//           className="absolute"
//           style={{
//             top: '2.5rem',
//             left: '2.5rem',
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             background: '#C9625F',
//             opacity: 0.5,
//           }}
//         />

//         {/* Bottom-left muted dot */}
//         <div
//           className="absolute"
//           style={{
//             bottom: '10rem',
//             left: '2rem',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             background: '#C9625F',
//             opacity: 0.1,
//           }}
//         />

//         {/* ── Photo ── */}
//         <div
//           className="relative z-10 overflow-hidden"
//           style={{
//             width: 'clamp(200px, 24vw, 300px)',
//             height: 'clamp(200px, 24vw, 300px)',
//             borderRadius: '50%',
//             boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
//           }}
//         >
//           <Image
//             src="/profile-pic.jpeg"
//             alt="Sabeen"
//             fill
//             className="object-cover object-top"
//             priority
//           />
//         </div>

//         {/* ── Floating stat chips ── */}
//         {chips.map((chip, i) => (
//           <motion.div
//             key={chip.label}
//             custom={4 + i} variants={fadeUp} initial="hidden" animate="show"
//             className="absolute"
//             style={{
//               right: '2.5rem',
//               bottom: i === 0 ? '9rem' : '2.5rem',
//               background: 'white',
//               padding: '1rem 1.5rem',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
//             }}
//           >
//             <div
//               className="text-xs tracking-widest uppercase mb-1"
//               style={{ color: '#7A736C', fontFamily: 'var(--font-dm-sans)' }}
//             >
//               {chip.label}
//             </div>
//             <div
//               style={{
//                 fontFamily: 'var(--font-playfair)',
//                 fontSize: '1.5rem',
//                 fontWeight: 700,
//                 color: '#1A1714',
//               }}
//             >
//               {chip.value}
//             </div>
//           </motion.div>
//         ))}

//       </motion.div>

//     </section>
//   );
// }
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

// Small editorial cross / registration mark
function CrossMark({ style }) {
  return (
    <div className="absolute" style={{ opacity: 0.15, ...style }}>
      <div style={{ position: 'absolute', width: '14px', height: '1px', background: '#111111', top: 0, left: '-7px' }} />
      <div style={{ position: 'absolute', width: '1px', height: '14px', background: '#111111', top: '-7px', left: 0 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2"
      style={{ background: '#F8F6F0' }}
    >

      {/* ── LEFT — Name & intro ── */}
      <div
        className="flex flex-col justify-center gap-6"
        style={{ padding: 'clamp(2rem, 4vw, 5rem) clamp(1.5rem, 3vw, 3.75rem) clamp(2rem, 4vw, 5rem) clamp(1.5rem, 5vw, 5rem)' }}
      >

        {/* Available badge */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-3"
        >
          {/* Pulsing dot */}
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E84545', flexShrink: 0 }}
          />
          <span
            className="text-xs tracking-widest uppercase font-medium"
            style={{ color: '#E84545', fontFamily: 'var(--font-dm-sans)' }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div
          custom={1} variants={fadeUp} initial="hidden" animate="show"
        >
          <div
            className="leading-none font-light"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(2.25rem, 5vw, 5.5rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            Hello, I&apos;m
          </div>
          <div
            className="leading-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontSize: 'clamp(3.5rem, 9vw, 8.75rem)',
              color: '#111111',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              marginTop: '4px',
            }}
          >
            Sabeen
          </div>
          {/* Red underline accent */}
          <div style={{
            width: 'clamp(100px, 14vw, 180px)',
            height: '3px',
            background: '#E84545',
            marginTop: 'clamp(12px, 1.5vw, 20px)',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* Bio */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-sm leading-relaxed"
          style={{
            color: '#888880',
            fontFamily: 'var(--font-dm-sans)',
            maxWidth: 'clamp(260px, 28vw, 380px)',
          }}
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
            className="text-xs tracking-widest uppercase font-medium transition-all"
            style={{
              background: '#111111',
              color: '#F8F6F0',
              fontFamily: 'var(--font-dm-sans)',
              padding: 'clamp(10px, 1vw, 14px) clamp(20px, 2.5vw, 36px)',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#E84545')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#111111')}
          >
            View Projects
          </a>

          <a
            href="#"
            className="text-xs tracking-widest uppercase font-medium transition-colors"
            style={{
              color: '#111111',
              fontFamily: 'var(--font-dm-sans)',
              border: '1px solid #BBBBB0',
              padding: 'clamp(9px, 0.9vw, 13px) clamp(16px, 2vw, 28px)',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E84545';
              e.currentTarget.style.color = '#E84545';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#BBBBB0';
              e.currentTarget.style.color = '#111111';
            }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Trait tags */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-2 flex-wrap"
        >
          {traits.map((trait) => (
            <span
              key={trait}
              className="text-xs tracking-widest uppercase font-medium cursor-default"
              style={{
                border: '1px solid #DEDAD2',
                color: '#444444',
                fontFamily: 'var(--font-dm-sans)',
                padding: 'clamp(5px, 0.5vw, 7px) clamp(10px, 1.2vw, 16px)',
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
              {trait}
            </span>
          ))}
        </motion.div>

        {/* Info chips */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-2 flex-wrap"
        >
          {chips.map((chip) => (
            <div
              key={chip.label}
              style={{
                background: '#111111',
                padding: 'clamp(8px, 0.8vw, 11px) clamp(14px, 1.6vw, 22px)',
                borderRadius: '4px',
                minWidth: 'clamp(110px, 10vw, 150px)',
                display: 'inline-flex',
                flexDirection: 'column',
              }}
            >
              <span
                className="uppercase tracking-widest"
                style={{ fontSize: '9px', color: '#666660', fontFamily: 'var(--font-dm-sans)', marginBottom: '2px' }}
              >
                {chip.label}
              </span>
              <span
                className="font-medium"
                style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', color: '#F8F6F0', fontFamily: 'var(--font-dm-sans)' }}
              >
                {chip.value}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── RIGHT — Photo panel ── */}
      <motion.div
        custom={2} variants={fadeUp} initial="hidden" animate="show"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '500px' }}
      >

        {/* Diagonal surface background */}
        <div
          className="absolute"
          style={{
            inset: 0,
            width: '115%',
            background: '#EDEAE2',
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
            zIndex: 0,
          }}
        />

        {/* Horizontal editorial rule lines */}
        {[18, 36, 54, 72].map((pct) => (
          <div
            key={pct}
            className="absolute pointer-events-none"
            style={{ left: 0, right: 0, top: `${pct}%`, height: '0.5px', background: 'rgba(17,17,17,0.06)', zIndex: 1 }}
          />
        ))}

        {/* Large decorative ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 'clamp(260px, 32vw, 460px)',
            height: 'clamp(260px, 32vw, 460px)',
            borderRadius: '50%',
            border: '1px solid rgba(17,17,17,0.10)',
            top: '50%', left: '50%',
            transform: 'translate(-48%, -52%)',
            zIndex: 1,
          }}
        />

        {/* Smaller red-tinted ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 'clamp(160px, 20vw, 290px)',
            height: 'clamp(160px, 20vw, 290px)',
            borderRadius: '50%',
            border: '1px solid rgba(232,69,69,0.20)',
            top: '50%', left: '50%',
            transform: 'translate(-28%, -18%)',
            zIndex: 1,
          }}
        />

        {/* Red accent dot — top right */}
        <div
          className="absolute"
          style={{
            width: 'clamp(7px, 0.7vw, 11px)',
            height: 'clamp(7px, 0.7vw, 11px)',
            borderRadius: '50%',
            background: '#E84545',
            top: '14%', right: '26%',
            zIndex: 2,
          }}
        />

        {/* Faint dot — bottom left */}
        <div
          className="absolute"
          style={{
            width: 'clamp(4px, 0.4vw, 7px)',
            height: 'clamp(4px, 0.4vw, 7px)',
            borderRadius: '50%',
            background: '#E84545',
            opacity: 0.35,
            bottom: '24%', left: '20%',
            zIndex: 2,
          }}
        />

        {/* Cross marks */}
        <CrossMark style={{ top: '20%', left: '22%', zIndex: 2 }} />
        <CrossMark style={{ bottom: '28%', right: '20%', zIndex: 2 }} />
        <CrossMark style={{ top: '60%', left: '14%', zIndex: 2 }} />

        {/* ── Photo wrap ── */}
        <div
          className="relative"
          style={{
            width: 'clamp(220px, 26vw, 360px)',
            height: 'clamp(270px, 32vw, 440px)',
            zIndex: 3,
          }}
        >
          {/* Red corner bracket */}
          <div style={{
            position: 'absolute',
            top: 'clamp(-8px, -0.8vw, -12px)',
            left: 'clamp(-8px, -0.8vw, -12px)',
            width: 'clamp(26px, 2.5vw, 40px)',
            height: 'clamp(26px, 2.5vw, 40px)',
            borderTop: '3px solid #E84545',
            borderLeft: '3px solid #E84545',
            borderRadius: '2px',
            zIndex: 4,
          }} />

          {/* Photo frame — asymmetric radius + ink offset shadow */}
          <div
            className="relative overflow-hidden"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 'clamp(8px,1vw,8px) clamp(8px,1vw,8px) clamp(60px,8vw,110px) clamp(8px,1vw,8px)',
              boxShadow: 'clamp(12px,1.5vw,22px) clamp(12px,1.5vw,22px) 0px #111111',
            }}
          >
            <Image
              src="/profile-pic.jpeg"
              alt="Sabeen"
              fill
              className="object-cover object-top"
              style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              priority
            />
          </div>

          {/* Watermark letter */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(100px, 14vw, 170px)',
              color: 'rgba(17,17,17,0.055)',
              lineHeight: 1,
              bottom: 'clamp(-14px,-1.5vw,-20px)',
              left: 'clamp(-10px,-1vw,-16px)',
              zIndex: 2,
            }}
          >
            S
          </div>
        </div>

        {/* Editorial folio number */}
        <div
          className="absolute uppercase tracking-widest hidden md:block"
          style={{
            bottom: 'clamp(20px, 2.5vw, 36px)',
            left: 'clamp(24px, 5vw, 80px)',
            fontSize: 'clamp(8px, 0.6vw, 10px)',
            color: '#BBBBB0',
            fontFamily: 'var(--font-dm-sans)',
            zIndex: 5,
          }}
        >
          Folio — 01
        </div>

      </motion.div>

    </section>
  );
}