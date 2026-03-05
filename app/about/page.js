"use client"
import { useState, useEffect, useRef } from "react";

const services = [
  { icon: "📣", label: "Latest Exam Notifications" },
  { icon: "🪪", label: "Admit Card Release Updates" },
  { icon: "📊", label: "Result Announcements" },
  { icon: "📝", label: "Online Application Procedures" },
  { icon: "🗝️", label: "Answer Keys & Exam Patterns" },
  { icon: "📚", label: "Study Notes & Preparation Tips" },
  { icon: "🎓", label: "University & Academic Notices" },
  { icon: "🏛️", label: "Government Job Updates" },
];

const stats = [
  { value: "100%", label: "Official Sources" },
  { value: "24/7", label: "Always Updated" },
  { value: "Free", label: "No Cost, No Login" },
];

function useInView(ref, threshold = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}

function FadeIn({ children, delay = 0, dir = "up", style = {} }) {
  const ref = useRef(null);
  const v = useInView(ref);
  const trans = dir === "up" ? "translateY(22px)" : dir === "left" ? "translateX(-22px)" : "translateX(22px)";
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : trans,
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Fraunces:ital,wght@0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #060b14; }

        :root {
          --cyan: #22d3ee;
          --cyan2: #06b6d4;
          --indigo: #6366f1;
          --surface: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.08);
          --text: #e8eaf0;
          --muted: rgba(232,234,240,0.45);
        }

        .ab-root {
          min-height: 100vh;
          background:
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(34,211,238,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 0% 70%, rgba(99,102,241,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 100% 90%, rgba(34,211,238,0.06) 0%, transparent 50%),
            linear-gradient(180deg, #060b14 0%, #08101a 100%);
          font-family: 'Sora', sans-serif;
          color: var(--text);
          overflow: hidden;
        }

        /* ── HERO ── */
        .ab-hero {
          position: relative;
          padding: 72px 24px 80px;
          text-align: center;
          overflow: hidden;
        }

        .ab-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .ab-hero-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 520px; height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(34,211,238,0.08);
          pointer-events: none;
        }
        .ab-hero-ring::before {
          content: '';
          position: absolute;
          inset: 40px;
          border-radius: 50%;
          border: 1px solid rgba(34,211,238,0.05);
        }

        .ab-hero-inner {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ab-hero-inner.show { opacity: 1; transform: none; }

        .ab-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34,211,238,0.1);
          border: 1px solid rgba(34,211,238,0.25);
          color: var(--cyan);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .ab-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan);
          animation: ab-pulse 2s infinite;
        }
        @keyframes ab-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(1.4); }
        }

        .ab-headline {
          font-family: 'Fraunces', serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 12px;
        }
        .ab-headline em {
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(135deg, var(--cyan), var(--indigo));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ab-hero-sub {
          font-size: 15.5px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 32px;
        }

        /* stats row */
        .ab-stats {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ab-stat {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 16px 28px;
          text-align: center;
          min-width: 110px;
          backdrop-filter: blur(10px);
        }
        .ab-stat-val {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--cyan);
          line-height: 1;
        }
        .ab-stat-label {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.5px;
          margin-top: 5px;
          font-weight: 400;
        }

        /* ── BODY ── */
        .ab-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px 80px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Intro card */
        .ab-intro-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 36px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }
        .ab-intro-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cyan), var(--indigo), var(--cyan));
        }
        .ab-section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ab-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(34,211,238,0.2);
        }
        .ab-intro-text {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(232,234,240,0.75);
          font-weight: 300;
        }

        /* Services grid */
        .ab-services-wrap {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 36px;
          backdrop-filter: blur(12px);
        }
        .ab-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
          margin-top: 20px;
        }
        .ab-service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(34,211,238,0.05);
          border: 1px solid rgba(34,211,238,0.12);
          border-radius: 12px;
          padding: 13px 16px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .ab-service-item:hover {
          background: rgba(34,211,238,0.1);
          border-color: rgba(34,211,238,0.3);
          transform: translateY(-2px);
        }
        .ab-service-icon {
          font-size: 18px;
          width: 36px; height: 36px;
          background: rgba(34,211,238,0.08);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ab-service-label {
          font-size: 13px;
          font-weight: 500;
          color: rgba(232,234,240,0.85);
          line-height: 1.3;
        }

        /* Two column cards */
        .ab-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .ab-info-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px 30px;
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
        }

        .ab-info-card.accent-indigo::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--indigo), var(--cyan));
        }
        .ab-info-card.accent-cyan::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--cyan), #34d399);
        }

        .ab-info-icon {
          font-size: 28px;
          margin-bottom: 14px;
          display: block;
        }
        .ab-info-title {
          font-family: 'Fraunces', serif;
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .ab-info-text {
          font-size: 13.5px;
          line-height: 1.8;
          color: var(--muted);
          font-weight: 300;
        }

        /* CTA */
        .ab-cta {
          background: linear-gradient(135deg, rgba(34,211,238,0.1), rgba(99,102,241,0.1));
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 20px;
          padding: 40px 36px;
          text-align: center;
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
        }
        .ab-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--cyan), var(--indigo), var(--cyan));
        }
        .ab-cta-title {
          font-family: 'Fraunces', serif;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .ab-cta-sub {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 24px;
          font-weight: 300;
        }
        .ab-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--cyan2), var(--indigo));
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: 0.3px;
          box-shadow: 0 6px 24px rgba(34,211,238,0.25);
          transition: opacity 0.2s, transform 0.2s;
          cursor: pointer;
          border: none;
        }
        .ab-cta-btn:hover { opacity: 0.88; transform: translateY(-2px); }

        @media (max-width: 600px) {
          .ab-two-col { grid-template-columns: 1fr; }
          .ab-intro-card, .ab-services-wrap, .ab-info-card, .ab-cta { padding: 24px 20px; }
          .ab-body { padding: 0 14px 60px; }
          .ab-hero { padding: 52px 16px 60px; }
        }
      `}</style>

      <div className="ab-root">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-ring" />
          <div className={`ab-hero-inner ${mounted ? "show" : ""}`}>
            <div className="ab-badge">
              <div className="ab-badge-dot" />
              About Us
            </div>
            <h1 className="ab-headline">
              Your Trusted Hub for<br /><em>Education & Cyber Cafe</em>
            </h1>
            <p className="ab-hero-sub">
              OnlineUpdates.com is the perfect platform for students and cyber cafe users looking for education and job-related updates — all in one place.
            </p>
            <div className="ab-stats">
              {stats.map((s, i) => (
                <div className="ab-stat" key={i}>
                  <div className="ab-stat-val">{s.value}</div>
                  <div className="ab-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="ab-body">

          {/* Intro */}
          <FadeIn delay={0}>
            <div className="ab-intro-card">
              <div className="ab-section-label">Who We Are</div>
              <p className="ab-intro-text">
                We provide the latest information on educational news, online forms, exam updates, and career opportunities. Our website helps students and cyber cafe visitors with clear, accurate, and easy-to-understand guidance so they can complete their online procedures without difficulty.
              </p>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={0.05}>
            <div className="ab-services-wrap">
              <div className="ab-section-label">What We Cover</div>
              <div className="ab-services-grid">
                {services.map((s, i) => (
                  <div className="ab-service-item" key={i}
                    style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "scale(0.95)",
                      transition: `opacity 0.4s ease ${0.1 + i * 0.05}s, transform 0.4s ease ${0.1 + i * 0.05}s` }}
                  >
                    <div className="ab-service-icon">{s.icon}</div>
                    <span className="ab-service-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Two col */}
          <div className="ab-two-col">
            <FadeIn delay={0.05} dir="left">
              <div className="ab-info-card accent-indigo">
                <span className="ab-info-icon">🖥️</span>
                <div className="ab-info-title">Supporting Cyber Cafes</div>
                <p className="ab-info-text">
                  Cyber cafes play an important role in helping students and job seekers complete online applications and access important information. We provide step-by-step, easy-to-follow guidance tailored for this purpose.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} dir="right">
              <div className="ab-info-card accent-cyan">
                <span className="ab-info-icon">✅</span>
                <div className="ab-info-title">Trusted Information</div>
                <p className="ab-info-text">
                  All information on our website is collected from official sources and publicly available notices. We do not create or publish false information. Users are advised to verify details from official websites.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={0.1}>
            <div className="ab-cta">
              <div className="ab-cta-title">Stay Connected With Us</div>
              <p className="ab-cta-sub">Get regular updates on exams, results, admit cards, and government jobs — all for free.</p>
              <button className="ab-cta-btn">🔔 Get Latest Updates</button>
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
}