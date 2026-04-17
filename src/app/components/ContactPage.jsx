'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "Email", value: "craftedstack@gmail.com", href: "mailto:craftedstack@gmail.com" },
  { label: "GitHub", value: "@Sabeen44", href: "https://github.com/Sabeen44" },
  { label: "LinkedIn", value: "@Sabeen", href: "https://www.linkedin.com/in/sabeen-chaudhry/" },
];

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

function CrossMark({ style }) {
  return (
    <div className="absolute pointer-events-none opacity-[0.12]" style={style}>
      <div style={{ position: "absolute", width: "14px", height: "1px", background: "#F8F6F0", top: 0, left: "-7px" }} />
      <div style={{ position: "absolute", width: "1px", height: "14px", background: "#F8F6F0", top: "-7px", left: 0 }} />
    </div>
  );
}

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [focusedField, setFocusedField] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-[rgba(255,255,255,0.04)] border rounded-[2px] font-dm text-[14px] text-[#F8F6F0] placeholder-[#888880] transition-all duration-200 outline-none";

  return (
    <div className="bg-[#111111] min-h-screen text-[#F8F6F0] font-dm relative overflow-hidden">

      {/* Top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E84545]" />

      {/* Editorial rule lines */}
      {[22, 55, 82].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: "0.5px", background: "rgba(255,255,255,0.04)" }}
        />
      ))}

      <CrossMark style={{ top: "10%", right: "6%" }} />
      <CrossMark style={{ bottom: "20%", left: "4%" }} />
      <CrossMark style={{ top: "52%", right: "20%" }} />

      {/* Decorative rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: "clamp(200px,28vw,400px)", height: "clamp(200px,28vw,400px)", border: "1px solid rgba(255,255,255,0.03)", top: "5%", right: "-8%" }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: "clamp(120px,16vw,240px)", height: "clamp(120px,16vw,240px)", border: "1px solid rgba(232,69,69,0.08)", bottom: "10%", left: "-4%" }}
      />

      <div
        className="max-w-[1080px] mx-auto"
        style={{ padding: "clamp(48px,6vw,80px) clamp(16px,4vw,40px) clamp(48px,6vw,80px)" }}
      >
        {/* Section label */}
        <FadeUp className="flex items-center gap-3 mb-16">
          <div className="w-[7px] h-[7px] rounded-full bg-[#E84545] shrink-0" />
          <span className="font-dm text-[12px] tracking-[0.12em] uppercase font-medium text-[#E84545]">
            Get In Touch
          </span>
          <div className="flex-1" style={{ height: "0.5px", background: "rgba(255,255,255,0.1)" }} />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: heading + contact links ── */}
          <div>
            <FadeUp delay={0.05}>
              <h1
                className="font-display font-normal leading-[1.05] tracking-[-0.02em] text-[#F8F6F0] mb-2"
                style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
              >
                Let&apos;s build
              </h1>
              <h1
                className="font-display font-normal italic leading-[1.05] tracking-[-0.02em] mb-4"
                style={{ fontSize: "clamp(2.25rem,5vw,5rem)" }}
              >
                something{" "}
                <span className="text-[#E84545]">great.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="h-[3px] bg-[#E84545] rounded-[1px] mb-6 origin-left"
                style={{ width: "clamp(80px,10vw,140px)" }}
              />
            </FadeUp>

            <FadeUp delay={0.15}>
              <p
                className="leading-[1.7] text-[#888880] font-dm mb-12"
                style={{ fontSize: "clamp(0.8rem,1vw,0.925rem)", maxWidth: "360px" }}
              >
                I&apos;m always open to new projects, collaborations, and
                interesting ideas. Drop me a message and I&apos;ll get back
                to you within 24 hours.
              </p>
            </FadeUp>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <FadeUp key={s.label} delay={0.2 + i * 0.08}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[2px] px-5 py-3.5 transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#E84545";
                      e.currentTarget.style.background = "rgba(232,69,69,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <span className="font-dm text-[10px] tracking-[0.12em] uppercase text-[#888880]">
                      {s.label}
                    </span>
                    <span className="font-dm text-[13px] text-[#F8F6F0] group-hover:text-[#E84545] transition-colors">
                      {s.value} ↗
                    </span>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <FadeUp delay={0.15}>
            <div
              className="rounded-[2px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Form header strip */}
              <div className="px-7 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <span className="font-dm text-[11px] tracking-[0.12em] uppercase text-[#888880]">
                  Send a message
                </span>
              </div>

              <div className="px-7 py-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <div className="w-12 h-12 rounded-full border-[1.5px] border-[#E84545] flex items-center justify-center text-[#E84545] text-xl">
                      ✓
                    </div>
                    <h3 className="font-display italic text-[#F8F6F0] text-[22px] tracking-[-0.01em]">
                      Message sent.
                    </h3>
                    <p className="font-dm text-[13px] text-[#888880] leading-[1.7] max-w-[260px]">
                      Thanks for reaching out — I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-dm text-[11px] tracking-[0.1em] uppercase text-[#E84545] hover:text-[#F8F6F0] transition-colors mt-2"
                    >
                      Send another →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="font-dm text-[10px] tracking-[0.12em] uppercase text-[#888880]">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="you@example.com"
                        className={`${inputBase} px-4 py-3`}
                        style={{
                          borderColor: focusedField === "email" ? "#E84545" : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-dm text-[10px] tracking-[0.12em] uppercase text-[#888880]">
                        Message
                      </label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className={`${inputBase} px-4 py-3 resize-none`}
                        style={{
                          borderColor: focusedField === "message" ? "#E84545" : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>

                    {status === "error" && (
                      <p className="font-dm text-[12px] text-[#E84545]">
                        Something went wrong — please try again or email directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2.5 font-dm text-[12px] tracking-[0.08em] uppercase font-medium transition-all duration-300 rounded-[2px] border-0 bg-[#E84545] text-[#F8F6F0] hover:bg-[#F8F6F0] hover:text-[#111111] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ padding: "clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)" }}
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      {status !== "submitting" && <span className="text-sm">→</span>}
                    </button>

                  </form>
                )}
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Bottom folio */}
        <div
          className="flex justify-between mt-20 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="font-dm text-[10px] tracking-[0.12em] uppercase text-[#888880]">Folio — 05</span>
          <span className="font-dm text-[10px] tracking-[0.12em] uppercase text-[#888880]">Contact</span>
        </div>

      </div>
    </div>
  );
}
