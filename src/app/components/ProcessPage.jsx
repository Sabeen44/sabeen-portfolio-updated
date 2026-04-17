'use client';

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding the real problem",
    description:
      "We start with a free consultation to understand your business, goals, audience, and timeline. No jargon — just a real conversation about what success looks like for you.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Planning before pixels",
    description:
      "I map out the sitemap, user flows, and content structure. You'll see wireframes and a clear project roadmap before any design work begins.",
    duration: "2–3 days",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Where vision takes shape",
    description:
      "High-fidelity mockups in Figma with your feedback baked into every iteration. You'll see exactly what your site will look like — no surprises at launch.",
    duration: "3–5 days",
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Clean code, real performance",
    description:
      "Built with React, Tailwind CSS, and modern tooling. Every component is responsive, accessible, and optimized for speed. You get clean repos with meaningful commits.",
    duration: "5–10 days",
  },
  {
    number: "05",
    title: "Launch & Support",
    subtitle: "Go live with confidence",
    description:
      "Deployed on Vercel with DNS configured, analytics connected, and a walkthrough so you own every piece. I stick around for 2 weeks of post-launch support.",
    duration: "1–2 days",
  },
];

/* ─── Animation wrapper — matches Hero/Skills pattern ─── */
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Cross mark — pixel-precise geometry, stays inline ─── */
function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none opacity-15" style={style}>
      <div style={{ position: "absolute", width: "14px", height: "1px", background: "#bd0f0f", top: 0, left: "-7px" }} />
      <div style={{ position: "absolute", width: "1px", height: "14px", background: "#792020", top: "-7px", left: 0 }} />
    </div>
  );
}

/* ─── Thin horizontal rule — percentage top stays inline ─── */
function EditorialRule({ topPct }) {
  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{ top: topPct, height: "0.5px", background: "rgba(17,17,17,0.06)" }}
    />
  );
}

/* ─── CTA Button ─── */
function CTAButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2.5 font-dm text-[12px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-300 rounded-[2px] border-0 bg-ink text-cream hover:bg-red"
      style={{ padding: "clamp(10px,1vw,14px) clamp(20px,2.5vw,36px)" }}
    >
      Book a Free Consultation
      <span className="text-sm">→</span>
    </a>
  );
}

/* ─── Section label ─── */
function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-[7px] h-[7px] rounded-full bg-red shrink-0" />
      <span className="font-dm text-[12px] tracking-[0.12em] uppercase font-medium text-red">
        {text}
      </span>
    </div>
  );
}

/* ─── Folio label ─── */
function FolioLabel({ text, className = "" }) {
  return (
    <div className={`font-dm text-[10px] tracking-[0.12em] uppercase text-faint ${className}`}>
      {text}
    </div>
  );
}

/* ─── Process Step — slide-in via Framer Motion, hover via CSS group ─── */
function ProcessStep({ step, index, total }) {
  return (
    <motion.div
      className="group flex relative"
      style={{ gap: "clamp(20px,3vw,36px)" }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
    >
      {/* Timeline node */}
      <div className="flex flex-col items-center min-w-[44px]">
        <div className="w-11 h-11 rounded-full border-[1.5px] border-line flex items-center justify-center font-dm text-[12px] font-semibold text-muted bg-transparent transition-all duration-[350ms] shrink-0 group-hover:border-red group-hover:text-red group-hover:bg-[rgba(232,69,69,0.04)]">
          {step.number}
        </div>
        {index < total - 1 && (
          <div className="w-px flex-1 min-h-8 bg-gradient-to-b from-line to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${index < total - 1 ? "pb-11" : ""}`}>
        <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
          <span className="font-dm text-[10px] tracking-[0.1em] uppercase font-medium text-red bg-[rgba(232,69,69,0.06)] px-2.5 py-[3px] rounded-[2px]">
            ~ {step.duration}
          </span>
        </div>

        <h3
          className="font-display font-normal italic text-ink leading-[1.2] tracking-[-0.01em] mb-1"
          style={{ fontSize: "clamp(22px,2.5vw,28px)" }}
        >
          {step.title}
        </h3>

        <p className="font-dm text-[12px] text-faint italic mb-2.5">
          {step.subtitle}
        </p>

        <p className="font-dm text-[14px] leading-[1.7] text-muted m-0 max-w-[480px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─── */
export default function ProcessPage() {
  return (
    <div className="bg-cream min-h-screen text-ink font-dm relative">
      <div className="relative overflow-hidden">

        <CrossMark style={{ top: "6%", left: "8%" }} />
        <CrossMark style={{ top: "40%", right: "10%" }} />
        <CrossMark style={{ bottom: "18%", left: "12%" }} />
        <EditorialRule topPct="25%" />
        <EditorialRule topPct="60%" />

        {/* Decorative rings */}
        <div
          className="absolute rounded-full border border-[rgba(17,17,17,0.04)] pointer-events-none"
          style={{ width: "clamp(180px,24vw,360px)", height: "clamp(180px,24vw,360px)", top: "10%", left: "-6%" }}
        />
        <div
          className="absolute rounded-full border border-[rgba(232,69,69,0.08)] pointer-events-none"
          style={{ width: "clamp(100px,14vw,200px)", height: "clamp(100px,14vw,200px)", bottom: "20%", right: "-3%" }}
        />

        {/* Accent dots */}
        <div
          className="absolute rounded-full bg-red pointer-events-none"
          style={{ width: "clamp(7px,0.7vw,11px)", height: "clamp(7px,0.7vw,11px)", top: "14%", right: "18%" }}
        />
        <div
          className="absolute rounded-full bg-red opacity-35 pointer-events-none"
          style={{ width: "clamp(4px,0.4vw,7px)", height: "clamp(4px,0.4vw,7px)", bottom: "30%", left: "15%" }}
        />

        {/* Hero */}
        <div
          className="max-w-[1080px] mx-auto"
          style={{ padding: "clamp(48px,6vw,80px) clamp(16px,4vw,40px) clamp(40px,5vw,64px)" }}
        >
          <FadeUp><SectionLabel text="How I Work" /></FadeUp>

          <FadeUp delay={0.1}>
            <h1
              className="font-display font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-2"
              style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
            >
              A process built on
            </h1>
            <h1
              className="font-display font-normal italic leading-[1.05] tracking-[-0.02em] text-ink mb-3"
              style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
            >
              <span className="text-red">clarity</span> &{" "}
              <span className="text-red">communication.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="h-[3px] bg-red rounded-[1px] mb-6"
              style={{ width: "clamp(100px,14vw,180px)" }}
            />
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              className="text-[14px] leading-[1.7] text-muted m-0"
              style={{ maxWidth: "clamp(260px,28vw,420px)" }}
            >
              No black boxes. You'll know exactly what's happening at every
              stage — from our first call to the day your site goes live.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div
          className="max-w-[680px] mx-auto"
          style={{ padding: "0 clamp(16px,4vw,40px) clamp(48px,6vw,80px)" }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} total={PROCESS_STEPS.length} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp>
          <div
            className="max-w-[680px] mx-auto"
            style={{ margin: "0 auto clamp(48px,6vw,80px)", padding: "0 clamp(16px,4vw,40px)" }}
          >
            <div
              className="border-t border-line flex flex-col items-center text-center"
              style={{ paddingTop: "clamp(36px,4vw,56px)" }}
            >
              <FolioLabel text="Typical timeline: 2–3 weeks" className="mb-5" />

              <h2
                className="font-display font-normal italic text-ink tracking-[-0.01em] mb-2"
                style={{ fontSize: "clamp(24px,3.5vw,34px)" }}
              >
                Step one is just a conversation.
              </h2>

              <p className="text-[14px] text-muted max-w-[360px] leading-[1.65] mb-6">
                Tell me about your project and I'll tell you exactly how I can
                help — no strings attached.
              </p>

              <CTAButton />
            </div>
          </div>
        </FadeUp>

        {/* Bottom folio */}
        <div
          className="max-w-[1080px] mx-auto flex justify-between"
          style={{ padding: "0 clamp(16px,4vw,40px) 32px" }}
        >
          <FolioLabel text="Folio — 03" />
          <FolioLabel text="Process" />
        </div>

      </div>
    </div>
  );
}
