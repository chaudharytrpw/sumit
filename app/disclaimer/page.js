"use client"
import { useState, useEffect, useRef } from "react";

const paragraphs = [
  {
    id: 1,
    icon: "📋",
    label: "General Purpose",
    text: "The information provided on Sevaupdates.com is published for general informational and educational purposes only. Our website shares updates related to government jobs, online forms, admit cards, results, government schemes, CSC services and other digital services to help users stay informed.",
  },
  {
    id: 2,
    icon: "⚖️",
    label: "Accuracy & Liability",
    text: "While we try our best to keep the information accurate, complete and updated, Sevaupdates.com does not guarantee the completeness, reliability or accuracy of any information available on this website. Any action you take upon the information found on this website is strictly at your own risk.",
    accent: "warning",
  },
  {
    id: 3,
    icon: "🛡️",
    label: "No Responsibility",
    text: "Sevaupdates.com will not be responsible for any loss, damage or inconvenience caused as a result of using the information available on this website.",
    accent: "danger",
  },
  {
    id: 4,
    icon: "📰",
    label: "Sources of Information",
    text: "All information published on this website is collected from various official websites, government notifications, newspapers and other reliable sources. However, users are strongly advised to verify the information from the official website of the respective department before making any decision or taking any action.",
  },
  {
    id: 5,
    icon: "🏛️",
    label: "Not a Government Website",
    text: "This website is not a government website and has no direct or indirect connection with any government department, ministry or organization.",
    accent: "info",
  },
  {
    id: 6,
    icon: "✉️",
    label: "Report Incorrect Information",
    text: "The content available on this website is only for reference and informational purposes. If you find any incorrect, outdated or inappropriate information on this website, please inform us through the Contact Us page, and we will try to correct it as soon as possible.",
  },
];

const accentMap = {
  warning: { bar: "#e8a020", bg: "rgba(232,160,32,0.07)", border: "rgba(232,160,32,0.25)" },
  danger:  { bar: "#d94040", bg: "rgba(217,64,64,0.06)",  border: "rgba(217,64,64,0.22)"  },
  info:    { bar: "#2a6dd9", bg: "rgba(42,109,217,0.06)", border: "rgba(42,109,217,0.22)" },
  default: { bar: "#c8a55a", bg: "rgba(200,165,90,0.05)", border: "rgba(200,165,90,0.18)" },
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function ParagraphCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const accent = accentMap[item.accent] || accentMap.default;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "0",
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${accent.border}`,
        background: accent.bg,
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 18px rgba(0,0,0,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
    >
      {/* Accent bar */}
      <div style={{ width: "4px", background: accent.bar, flexShrink: 0 }} />

      <div style={{ padding: "22px 26px", flex: 1 }}>
        {/* Label row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"
        }}>
          <span style={{ fontSize: "18px", lineHeight: 1 }}>{item.icon}</span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "16px",
            fontWeight: 700,
            color: accent.bar,
            letterSpacing: "0.3px",
          }}>{item.label}</span>
          <span style={{
            marginLeft: "auto",
            fontFamily: "monospace",
            fontSize: "10px",
            color: "rgba(100,90,70,0.4)",
            letterSpacing: "1px",
          }}>§ {String(item.id).padStart(2,"0")}</span>
        </div>

        {/* Text */}
        <p style={{
          fontFamily: "'Lora', serif",
          fontSize: "15px",
          lineHeight: "1.85",
          color: "#3a3020",
          margin: 0,
        }}>{item.text}</p>
      </div>
    </div>
  );
}

export default function DisclaimerPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #eee8de; }

        .dp-root {
          min-height: 100vh;
          background:
            radial-gradient(ellipse 70% 50% at 90% 10%, rgba(200,165,90,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 10% 80%, rgba(42,109,217,0.07) 0%, transparent 60%),
            linear-gradient(160deg, #f5f0e8 0%, #ede5d6 60%, #e5dac8 100%);
          padding: 48px 20px 72px;
          position: relative;
        }

        .dp-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(180,150,80,0.06) 39px, rgba(180,150,80,0.06) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(180,150,80,0.04) 39px, rgba(180,150,80,0.04) 40px);
          pointer-events: none;
          z-index: 0;
        }

        .dp-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        /* ---- Hero ---- */
        .dp-hero {
          text-align: center;
          margin-bottom: 44px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .dp-hero.show { opacity: 1; transform: translateY(0); }

        .dp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(200,165,90,0.15);
          border: 1px solid rgba(200,165,90,0.35);
          color: #a07a2a;
          font-family: 'Lora', serif;
          font-size: 11px;
          font-style: italic;
          letter-spacing: 2px;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .dp-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 58px);
          font-weight: 700;
          color: #1c1a14;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }

        .dp-headline em {
          color: #c8a55a;
          font-style: italic;
        }

        .dp-tagline {
          font-family: 'Lora', serif;
          font-size: 15px;
          color: #7a6e56;
          font-style: italic;
          letter-spacing: 0.2px;
        }

        /* ---- Ornament ---- */
        .dp-ornament {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 0 0 36px;
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }
        .dp-ornament.show { opacity: 1; }
        .dp-ornament-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,165,90,0.5), rgba(200,165,90,0.5), transparent);
        }
        .dp-ornament-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #c8a55a;
        }
        .dp-ornament-diamond {
          width: 8px; height: 8px;
          background: #c8a55a;
          transform: rotate(45deg);
        }

        /* ---- Cards ---- */
        .dp-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ---- Footer note ---- */
        .dp-foot {
          margin-top: 44px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.6s ease 0.7s;
        }
        .dp-foot.show { opacity: 1; }

        .dp-foot-inner {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(28,26,20,0.88);
          border: 1px solid rgba(200,165,90,0.3);
          border-radius: 16px;
          padding: 20px 32px;
          backdrop-filter: blur(10px);
        }

        .dp-foot-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: #c8a55a;
          letter-spacing: 1px;
        }

        .dp-foot-note {
          font-family: 'Lora', serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-style: italic;
          letter-spacing: 0.5px;
        }

        .dp-foot-badges {
          display: flex;
          gap: 10px;
          margin-top: 4px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dp-badge {
          font-family: 'Lora', serif;
          font-size: 10px;
          color: rgba(200,165,90,0.75);
          border: 1px solid rgba(200,165,90,0.25);
          border-radius: 100px;
          padding: 3px 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 560px) {
          .dp-root { padding: 32px 14px 56px; }
        }
      `}</style>

      <div className="dp-root">
        <div className="dp-inner">

          {/* Hero */}
          <header className={`dp-hero ${mounted ? "show" : ""}`}>
            <div className="dp-eyebrow">Legal Notice · Sevaupdates.com</div>
            <h1 className="dp-headline">
              Disclaimer &amp; <em>Liability</em>
            </h1>
            <p className="dp-tagline">Please read carefully before using this website</p>
          </header>

          {/* Ornament */}
          <div className={`dp-ornament ${mounted ? "show" : ""}`}>
            <div className="dp-ornament-line" />
            <div className="dp-ornament-dot" />
            <div className="dp-ornament-diamond" />
            <div className="dp-ornament-dot" />
            <div className="dp-ornament-line" />
          </div>

          {/* Cards */}
          <div className="dp-cards">
            {paragraphs.map((item, i) => (
              <ParagraphCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Footer */}
          <div className={`dp-foot ${mounted ? "show" : ""}`}>
            <div className="dp-foot-inner">
              <div className="dp-foot-brand">Sevaupdates.com</div>
              <div className="dp-foot-note">Private Digital Information Portal · Not a Government Website</div>
              <div className="dp-foot-badges">
                <span className="dp-badge">Informational Only</span>
                <span className="dp-badge">No Official Affiliation</span>
                <span className="dp-badge">Verify Before Acting</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}