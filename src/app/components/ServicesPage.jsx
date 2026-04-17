'use client';

import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "SaaS UI/UX\nDesign & Build",
    description:
      "From landing pages to full dashboard interfaces — I design and build pixel-perfect SaaS products that convert visitors into users.",
    deliverables: [
      "Landing page design & dev",
      "Dashboard UI components",
      "Interactive prototypes",
      "Responsive implementation",
    ],
  },
  {
    number: "02",
    title: "Modern Website\nRedesigns",
    description:
      "Your business deserves more than a template. I take outdated websites and transform them into fast, modern experiences that build trust.",
    deliverables: [
      "Full-site audit & UX review",
      "Modern responsive redesign",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
  },
  {
    number: "03",
    title: "Portfolio &\nBrand Sites",
    description:
      "For creatives and professionals who need a digital home that feels as premium as their work. Editorial layouts, smooth interactions, lasting impressions.",
    deliverables: [
      "Custom portfolio design",
      "Content strategy & layout",
      "Animation & micro-interactions",
      "CMS integration",
    ],
  },
  {
    number: "04",
    title: "Landing Pages\n& Conversion",
    description:
      "Single-purpose pages engineered to convert. Whether you're launching a product, capturing leads, or running a campaign — every pixel earns its place.",
    deliverables: [
      "Conversion-focused design",
      "A/B test-ready variants",
      "Analytics integration",
      "Fast load performance",
    ],
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
function CTAButton({ variant = "primary" }) {
  if (variant === "primary") {
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
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2.5 font-dm text-[12px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-300 rounded-[2px] bg-transparent text-ink hover:bg-red hover:text-cream border border-line hover:border-red"
      style={{ padding: "clamp(9px,0.9vw,13px) clamp(16px,2vw,28px)" }}
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

/* ─── Service Card — hover via CSS group ─── */
function ServiceCard({ service, index }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div
        className="group relative bg-transparent border border-line rounded-[2px] transition-all duration-[350ms] cursor-default overflow-hidden hover:bg-[rgba(237,234,226,0.7)] hover:border-[rgba(17,17,17,0.1)]"
        style={{ padding: "clamp(28px,3vw,40px)" }}
      >
        {/* Corner bracket */}
        <div className="absolute -top-px -left-px w-6 h-6 border-t-[3px] border-l-[3px] border-red rounded-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]" />

        <div className="font-dm text-[11px] tracking-[0.1em] text-red font-medium mb-4">
          {service.number}
        </div>

        <h3
          className="font-display font-normal italic text-ink leading-[1.15] tracking-[-0.02em] mb-[14px] whitespace-pre-line"
          style={{ fontSize: "clamp(22px,2.8vw,30px)" }}
        >
          {service.title}
        </h3>

        {/* Underline — expands on hover */}
        <div className="h-[2.5px] bg-red rounded-[1px] mb-4 transition-all duration-[350ms] w-9 group-hover:w-[60px]" />

        <p className="font-dm text-[14px] leading-[1.7] text-muted mb-5">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {service.deliverables.map((d) => (
            <span
              key={d}
              className="font-dm text-[11px] tracking-[0.04em] font-medium text-warm border border-line rounded-full px-3 py-[5px] uppercase"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── PAGE ─── */
export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen text-ink font-dm relative">
      <div className="relative overflow-hidden">

        <CrossMark style={{ top: "8%", right: "12%" }} />
        <CrossMark style={{ top: "52%", left: "5%" }} />
        <CrossMark style={{ bottom: "15%", right: "8%" }} />
        <EditorialRule topPct="30%" />
        <EditorialRule topPct="70%" />

        {/* Decorative rings */}
        <div
          className="absolute rounded-full border border-[rgba(17,17,17,0.05)] pointer-events-none"
          style={{ width: "clamp(200px,28vw,400px)", height: "clamp(200px,28vw,400px)", top: "5%", right: "-8%" }}
        />
        <div
          className="absolute rounded-full border border-[rgba(232,69,69,0.1)] pointer-events-none"
          style={{ width: "clamp(120px,16vw,240px)", height: "clamp(120px,16vw,240px)", bottom: "12%", left: "-4%" }}
        />
        <div
          className="absolute rounded-full bg-red pointer-events-none"
          style={{ width: "clamp(7px,0.7vw,11px)", height: "clamp(7px,0.7vw,11px)", top: "12%", left: "18%" }}
        />

        {/* Hero */}
        <div
          className="max-w-[1080px] mx-auto"
          style={{ padding: "clamp(48px,6vw,80px) clamp(16px,4vw,40px) clamp(40px,5vw,64px)" }}
        >
          <FadeUp><SectionLabel text="What I Do" /></FadeUp>

          <FadeUp delay={0.1}>
            <h1
              className="font-display font-normal leading-[1.05] tracking-[-0.02em] text-ink mb-2"
              style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
            >
              Design & development
            </h1>
            <h1
              className="font-display font-normal italic leading-[1.05] tracking-[-0.02em] text-ink mb-3"
              style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
            >
              that <span className="text-red">actually</span> converts.
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
              I help startups and small businesses ship beautiful, fast websites
              and SaaS interfaces — built with React, Tailwind, and a relentless
              focus on user experience.
            </p>
          </FadeUp>
        </div>

        {/* Service cards */}
        <div
          className="max-w-[1080px] mx-auto grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            padding: "0 clamp(16px,4vw,40px) clamp(48px,6vw,80px)",
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>

        {/* Free Mockup CTA */}
        <FadeUp>
          <div
            className="max-w-[1080px] mx-auto"
            style={{ padding: "0 clamp(16px,4vw,40px) clamp(48px,6vw,80px)" }}
          >
            <div className="border border-line rounded-[2px] overflow-hidden relative">
              <div className="h-[3px] bg-red" />
              <div
                className="grid items-center bg-cream"
                style={{
                  gridTemplateColumns: "minmax(0,1fr) auto",
                  gap: "clamp(24px,4vw,48px)",
                  padding: "clamp(32px,4vw,48px) clamp(24px,4vw,44px)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-[14px]">
                    <div className="w-7 h-7 rounded-full border-[1.5px] border-red flex items-center justify-center text-[13px] text-red shrink-0">
                      ✦
                    </div>
                    <span className="font-dm text-[11px] tracking-[0.1em] uppercase font-medium text-red">
                      Free — No strings attached
                    </span>
                  </div>

                  <h2
                    className="font-display font-normal italic text-ink leading-[1.15] tracking-[-0.01em] mb-2.5"
                    style={{ fontSize: "clamp(22px,3vw,34px)" }}
                  >
                    Request a free homepage<br />redesign mockup.
                  </h2>

                  <div className="w-12 h-[2.5px] bg-red rounded-[1px] mb-[14px]" />

                  <p className="font-dm text-[14px] leading-[1.7] text-muted m-0 max-w-[440px]">
                    Send me your current website and I'll create a free redesign concept
                    for your homepage — so you can see exactly what's possible before
                    committing to anything.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 shrink-0">
                  <CTAButton variant="primary" />
                  <span className="font-dm text-[11px] text-faint tracking-[0.04em]">
                    Delivered in 48 hours
                  </span>
                </div>
              </div>

              {/* Bottom cross mark */}
              <div className="absolute bottom-4 left-4 opacity-10 pointer-events-none">
                <div style={{ position: "absolute", width: "14px", height: "1px", background: "#bd0f0f", top: 0, left: "-7px" }} />
                <div style={{ position: "absolute", width: "1px", height: "14px", background: "#792020", top: "-7px", left: 0 }} />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* General CTA Banner */}
        <FadeUp>
          <div
            className="max-w-[1080px] mx-auto"
            style={{ margin: "0 auto clamp(48px,6vw,80px)", padding: "0 clamp(16px,4vw,40px)" }}
          >
            <div
              className="bg-ivory rounded-[2px] border border-line text-center relative overflow-hidden"
              style={{ padding: "clamp(36px,4vw,56px) clamp(24px,4vw,48px)" }}
            >
              <div className="absolute top-3 left-3 w-7 h-7 border-t-[3px] border-l-[3px] border-red rounded-[1px]" />
              <div className="absolute bottom-3 right-3 w-7 h-7 border-b-[3px] border-r-[3px] border-red rounded-[1px]" />

              <FolioLabel text="Ready to start?" className="mb-4 !text-red tracking-[0.15em]" />

              <h2
                className="font-display font-normal italic text-ink tracking-[-0.01em] mb-3"
                style={{ fontSize: "clamp(24px,3.5vw,38px)" }}
              >
                Let's build something great together.
              </h2>

              <p className="text-[14px] text-muted leading-[1.65] mb-7 max-w-[380px] mx-auto">
                Every project starts with a conversation — no pressure, no
                commitment. Just a chance to see if we're a good fit.
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
          <FolioLabel text="Folio — 02" />
          <FolioLabel text="Services" />
        </div>

      </div>
    </div>
  );
}
