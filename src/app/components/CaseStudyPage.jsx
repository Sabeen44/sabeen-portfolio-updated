'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─────────────────── DESIGN TOKENS ─────────────────── */
const T = {
  bg: "#F8F6F0",
  surface: "#EDEAE2",
  dark: "#111111",
  red: "#E84545",
  muted: "#888880",
  border: "#DEDAD2",
  faint: "#BBBBB0",
  chip: "#444444",
};

/* ─────────────────── UTILITIES ─────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeUp({ children, delay = 0, className = "", style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function CrossMark({ top, left, right, bottom }) {
  return (
    <div style={{ position: "absolute", pointerEvents: "none", top, left, right, bottom, opacity: 0.15 }}>
      <div style={{ position: "absolute", width: "14px", height: "1px", background: "#bd0f0f", top: 0, left: "-7px" }} />
      <div style={{ position: "absolute", width: "1px", height: "14px", background: "#792020", top: "-7px", left: 0 }} />
    </div>
  );
}

function EditorialRule({ top }) {
  return <div style={{ position: "absolute", left: 0, right: 0, top, height: "0.5px", background: "rgba(17,17,17,0.06)", pointerEvents: "none" }} />;
}


function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: T.red, flexShrink: 0 }} />
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, color: T.red }}>{text}</span>
    </div>
  );
}

function FolioLabel({ text, s = {} }) {
  return <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.faint, ...s }}>{text}</div>;
}

/* ─────────────────── BEFORE / AFTER SLIDER ─────────────────── */
function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updatePos(clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const panelBase = {
    position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
    display: "flex", flexDirection: "column", justifyContent: "center",
    padding: "clamp(24px, 4vw, 48px)",
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      style={{
        position: "relative", width: "100%", height: "clamp(320px, 44vw, 480px)",
        borderRadius: "2px", overflow: "hidden", border: `1px solid ${T.border}`,
        cursor: "ew-resize", userSelect: "none",
      }}
    >
      {/* AFTER (full background) */}
      <div style={{ ...panelBase, background: T.bg, zIndex: 1 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.red, fontWeight: 500, marginBottom: "16px" }}>After</span>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontStyle: "italic", color: T.dark, lineHeight: 1.1, marginBottom: "12px", letterSpacing: "-0.02em" }}>
          Modern. Clear.<br />Conversion-ready.
        </div>
        <div style={{ width: "48px", height: "2.5px", background: T.red, borderRadius: "1px", marginBottom: "14px" }} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.65, color: T.muted, maxWidth: "340px" }}>
          Clean editorial layout with strong typography, clear CTAs, fast performance, and full mobile responsiveness.
        </p>
        <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
          {["98 Performance", "Mobile-first", "2s Load Time"].map((t) => (
            <span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, color: T.chip, border: `1px solid ${T.border}`, borderRadius: "100px", padding: "4px 10px" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* BEFORE (clipped) */}
      <div style={{ ...panelBase, background: "#2A2A28", zIndex: 2, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 500, marginBottom: "16px" }}>Before</span>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.2, marginBottom: "12px" }}>
          Outdated. Cluttered.<br />Hard to navigate.
        </div>
        <div style={{ width: "48px", height: "2px", background: "rgba(255,255,255,0.15)", borderRadius: "1px", marginBottom: "14px" }} />
        <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.3)", maxWidth: "340px" }}>
          Legacy layout with poor mobile UX, slow load times, weak messaging, and inconsistent branding.
        </p>
        <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
          {["42 Performance", "Not responsive", "8s Load Time"].map((t) => (
            <span key={t} style={{ fontFamily: "Georgia, serif", fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "4px 10px" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Slider handle */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, transform: "translateX(-50%)", width: "2px", background: T.red, zIndex: 10, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "36px", height: "36px", borderRadius: "50%", background: T.red,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 12px rgba(232,69,69,0.3)", pointerEvents: "none",
        }}>
          <span style={{ color: "#fff", fontSize: "14px", letterSpacing: "2px" }}>⟨ ⟩</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── CASE STUDY SECTION BLOCK ─────────────────── */
function CaseStudySection({ number, label, title, children, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: T.red, fontWeight: 500 }}>{number}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.faint }}>{label}</span>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, fontStyle: "italic", color: T.dark, margin: "0 0 8px 0", lineHeight: 1.15, letterSpacing: "-0.01em" }}>{title}</h2>
        <div style={{ width: "36px", height: "2.5px", background: T.red, borderRadius: "1px", marginBottom: "20px" }} />
        {children}
      </div>
    </FadeUp>
  );
}

function CaseBullet({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: T.red, marginTop: "7px", flexShrink: 0 }} />
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: T.muted }}>{text}</span>
    </div>
  );
}

function ToolChip({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <span onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.06em",
        textTransform: "uppercase", fontWeight: 500,
        color: hov ? T.bg : T.chip,
        background: hov ? T.dark : "transparent",
        border: `1px solid ${hov ? T.dark : T.border}`,
        borderRadius: "100px", padding: "7px 16px",
        transition: "all 0.25s ease", cursor: "default",
      }}
    >
      {label}
    </span>
  );
}

/* ─────────────────── PAGE ─────────────────── */
export default function CaseStudyPage() {
  return (
    <div style={{ background: T.bg, minHeight: "100vh", color: T.dark, fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Editorial decoration */}
        <CrossMark top="5%" right="10%" />
        <CrossMark top="28%" left="6%" />
        <CrossMark top="55%" right="8%" />
        <CrossMark bottom="12%" left="10%" />
        <EditorialRule top="18%" />
        <EditorialRule top="45%" />
        <EditorialRule top="75%" />

        <div style={{ position: "absolute", width: "clamp(220px, 30vw, 420px)", height: "clamp(220px, 30vw, 420px)", borderRadius: "50%", border: "1px solid rgba(17,17,17,0.04)", top: "3%", right: "-10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "clamp(140px, 18vw, 260px)", height: "clamp(140px, 18vw, 260px)", borderRadius: "50%", border: "1px solid rgba(232,69,69,0.08)", bottom: "15%", left: "-5%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "clamp(7px,0.7vw,11px)", height: "clamp(7px,0.7vw,11px)", borderRadius: "50%", background: T.red, top: "8%", left: "16%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "clamp(4px,0.4vw,7px)", height: "clamp(4px,0.4vw,7px)", borderRadius: "50%", background: T.red, opacity: 0.35, bottom: "22%", right: "14%", pointerEvents: "none" }} />

        {/* ── Hero ── */}
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(48px,6vw,80px) clamp(16px,4vw,40px) clamp(24px,3vw,40px)" }}>
          <FadeUp><SectionLabel text="Case Study" /></FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 8px 0", letterSpacing: "-0.02em", color: T.dark }}>
              Homepage redesign for
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.05, margin: "0 0 12px 0", letterSpacing: "-0.02em", color: T.dark }}>
              a <span style={{ color: T.red }}>local business.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ width: "clamp(100px,14vw,180px)", height: "3px", background: T.red, borderRadius: "1px", marginBottom: "24px" }} />
          </FadeUp>

          {/* Meta chips */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", gap: "clamp(12px, 2vw, 24px)", flexWrap: "wrap", marginBottom: "8px" }}>
              {[
                { label: "Client", value: "Local Business" },
                { label: "Timeline", value: "2 Weeks" },
                { label: "Role", value: "Design & Dev" },
                { label: "Year", value: "2026" },
              ].map((m) => (
                <div key={m.label} style={{
                  display: "flex", flexDirection: "column", gap: "2px",
                  background: "rgba(7,7,7,0.87)", borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "clamp(8px,0.8vw,11px) clamp(14px,1.6vw,22px)",
                  minWidth: "clamp(90px, 9vw, 130px)",
                }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfdfd4" }}>{m.label}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(12px,1.1vw,15px)", fontWeight: 500, color: "#F8F6F0" }}>{m.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ── Content ── */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(24px, 4vw, 48px) clamp(16px,4vw,40px) 0" }}>

          <CaseStudySection number="01" label="Overview" title="Project Overview">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: T.muted, margin: 0 }}>
              A modern homepage redesign for a local business to improve clarity, mobile UX, and overall brand presence. The client needed a site that felt professional and trustworthy — one that would actually convert visitors into customers instead of bouncing them.
            </p>
          </CaseStudySection>

          <CaseStudySection number="02" label="Challenge" title="The Problem" delay={0.05}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: T.muted, margin: "0 0 16px 0" }}>
              The existing website had several critical issues that were actively hurting the business:
            </p>
            <CaseBullet text="Outdated layout that felt stuck in 2015 — no visual hierarchy or clear user flow" />
            <CaseBullet text="Poor mobile experience with broken layouts, tiny tap targets, and horizontal scrolling" />
            <CaseBullet text="Weak messaging that didn't communicate the business's value proposition" />
            <CaseBullet text="Slow performance with an 8-second load time and a Lighthouse score of 42" />
          </CaseStudySection>

          <CaseStudySection number="03" label="Approach" title="The Solution" delay={0.05}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: T.muted, margin: "0 0 16px 0" }}>
              I rebuilt the homepage from scratch with a focus on clarity, speed, and conversion:
            </p>
            <CaseBullet text="Clean, editorial UI with intentional whitespace and visual breathing room" />
            <CaseBullet text="Strong typography system using a display serif + clean sans-serif pairing" />
            <CaseBullet text="Clear hero section with a focused headline, supporting copy, and a single strong CTA" />
            <CaseBullet text="Faster load times — brought Lighthouse performance from 42 to 98" />
            <CaseBullet text="Improved information architecture with logical content flow and clear navigation" />
          </CaseStudySection>

          <CaseStudySection number="04" label="Technical" title="Key Features" delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: `1px solid ${T.border}`, borderRadius: "2px", overflow: "hidden" }}>
              {[
                { title: "React + Tailwind UI", desc: "Component-based architecture with utility-first styling for rapid, consistent development." },
                { title: "Responsive Layout", desc: "Mobile-first design that adapts fluidly across all breakpoints and devices." },
                { title: "API Routes", desc: "Server-side endpoints for form handling, email delivery, and third-party integrations." },
                { title: "Authentication", desc: "Secure user authentication flow with protected routes and session management." },
                { title: "Database Integration", desc: "Supabase-powered data layer for dynamic content, form submissions, and analytics." },
                { title: "Serverless Functions", desc: "Edge-deployed functions on Vercel for fast, scalable backend operations." },
              ].map((f, i) => (
                <div key={f.title} style={{
                  padding: "clamp(20px, 2.5vw, 28px)",
                  borderBottom: i < 4 ? `1px solid ${T.border}` : "none",
                  borderRight: i % 2 === 0 ? `1px solid ${T.border}` : "none",
                  background: T.bg,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: T.red, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: T.dark }}>{f.title}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.6, color: T.muted, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection number="05" label="Comparison" title="Before & After" delay={0.05}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: T.faint, fontStyle: "italic", margin: "0 0 16px 0" }}>
              Drag the slider to compare — replace with your actual screenshots.
            </p>
            <BeforeAfterSlider />
          </CaseStudySection>

          <CaseStudySection number="06" label="Stack" title="Tools Used" delay={0.05}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React", "Next.js", "Tailwind CSS", "Supabase", "Node.js", "Vercel", "Figma", "GitHub"].map((t) => (
                <ToolChip key={t} label={t} />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection number="07" label="Links" title="View the Project" delay={0.05}>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://github.com/Sabeen44/digiReach" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.08em",
                  textTransform: "uppercase", fontWeight: 500, color: T.bg,
                  background: T.dark, border: "none", borderRadius: "2px",
                  padding: "clamp(10px,1vw,14px) clamp(20px,2.5vw,36px)",
                  textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = T.red; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = T.dark; }}
              >
                Live Site
                <span style={{ fontSize: "14px" }}>↗</span>
              </a>
              <a href="https://github.com/Sabeen44/digiReach" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.08em",
                  textTransform: "uppercase", fontWeight: 500, color: T.dark,
                  border: `1px solid ${T.border}`, borderRadius: "2px",
                  padding: "clamp(9px,0.9vw,13px) clamp(16px,2vw,28px)",
                  textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.red; e.currentTarget.style.color = T.red; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.dark; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub Repo
                <span style={{ fontSize: "14px" }}>→</span>
              </a>
            </div>
          </CaseStudySection>
        </div>

        {/* Bottom CTA */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(48px,6vw,80px) clamp(16px,4vw,40px) clamp(32px,4vw,56px)" }}>
          <FadeUp>
            <div style={{
              background: T.dark, borderRadius: "2px", padding: "clamp(36px,5vw,64px) clamp(24px,4vw,56px)",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", width: "280px", height: "280px", borderRadius: "50%", border: "1px solid rgba(232,69,69,0.12)", top: "-80px", right: "-80px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", width: "160px", height: "160px", borderRadius: "50%", border: "1px solid rgba(232,69,69,0.08)", bottom: "-40px", left: "-40px", pointerEvents: "none" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.red, fontWeight: 500 }}>Ready to work together?</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 400, fontStyle: "italic", color: T.bg, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Let's build something great.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: "rgba(248,246,240,0.55)", maxWidth: "400px", margin: 0 }}>
                Have a project in mind? I'd love to hear about it — reach out and let's talk.
              </p>
              <Link href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "8px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.08em",
                  textTransform: "uppercase", fontWeight: 500, color: T.dark,
                  background: T.bg, border: "none", borderRadius: "2px",
                  padding: "clamp(12px,1.2vw,16px) clamp(28px,3vw,44px)",
                  textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = T.red; e.currentTarget.style.color = T.bg; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = T.bg; e.currentTarget.style.color = T.dark; }}
              >
                Book a Free Consultation
                <span style={{ fontSize: "14px" }}>→</span>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Bottom folio */}
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(16px,4vw,40px) 32px", display: "flex", justifyContent: "space-between" }}>
          <FolioLabel text="Folio — 04" />
          <FolioLabel text="Case Study" />
        </div>
      </div>
    </div>
  );
}