"use client"
import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "01",
    icon: "🔐",
    title: "Introduction",
    accent: "blue",
    content: [
      {
        type: "text",
        text: "At OnlineUpdates.com, the privacy of our visitors is extremely important to us. This Privacy Policy document outlines the types of information that are collected and recorded by OnlineUpdates.com and how we use it.",
      },
      {
        type: "text",
        text: "This Privacy Policy applies to our website and all products and services offered through OnlineUpdates.com.",
      },
    ],
  },
  {
    id: "02",
    icon: "👤",
    title: "Personal Identification Information",
    accent: "gold",
    content: [
      {
        type: "text",
        text: "We may collect personal identification information from users in several ways, including but not limited to when users visit our site, fill out a form, subscribe to a newsletter, or engage with other activities, services, features, or resources we make available on our website.",
      },
      {
        type: "text",
        text: "Users may visit our website anonymously. We will collect personal identification information from users only if they voluntarily provide such information. Users can always refuse to provide personal identification information, except that it may prevent them from engaging in certain website-related activities.",
      },
    ],
  },
  {
    id: "03",
    icon: "📊",
    title: "Non-Personal Identification Information",
    accent: "teal",
    content: [
      {
        type: "text",
        text: "We may collect non-personal identification information about users whenever they interact with our website. Non-personal identification information may include the browser name, the type of computer or device, technical information about users' means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.",
      },
    ],
  },
  {
    id: "04",
    icon: "🍪",
    title: "Web Browser Cookies",
    accent: "amber",
    content: [
      {
        type: "text",
        text: "Our website may use 'cookies' to enhance the user experience. Users' web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent.",
      },
      {
        type: "highlight",
        text: "If they do so, note that some parts of the website may not function properly.",
      },
    ],
  },
  {
    id: "05",
    icon: "🔍",
    title: "How We Use Collected Information",
    accent: "blue",
    content: [
      {
        type: "text",
        text: "OnlineUpdates.com collects and uses users' personal information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "To improve customer service and respond to user queries more effectively.",
          "To personalize user experience and understand how our users use the services and resources provided on our site.",
          "To improve our website based on information and feedback we receive from users.",
          "To send periodic emails including updates, news, and related product or service information.",
        ],
      },
    ],
  },
  {
    id: "06",
    icon: "🛡️",
    title: "How We Protect Your Information",
    accent: "green",
    content: [
      {
        type: "text",
        text: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our website.",
      },
    ],
  },
  {
    id: "07",
    icon: "🔗",
    title: "Third-Party Websites",
    accent: "gold",
    content: [
      {
        type: "text",
        text: "Users may find advertising or other content on our website that links to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our website.",
      },
      {
        type: "highlight",
        text: "Browsing and interaction on any other website, including websites which have a link to our website, is subject to that website's own terms and policies.",
      },
    ],
  },
  {
    id: "08",
    icon: "📢",
    title: "Advertising",
    accent: "amber",
    content: [
      {
        type: "text",
        text: "Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to deliver targeted advertisements that they believe will be of most interest to you.",
      },
    ],
  },
  {
    id: "09",
    icon: "✏️",
    title: "Changes to This Privacy Policy",
    accent: "teal",
    content: [
      {
        type: "text",
        text: "OnlineUpdates.com has the discretion to update this Privacy Policy at any time. When we do, we will post a notification on the main page of our website. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.",
      },
      {
        type: "text",
        text: "You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.",
      },
    ],
  },
  {
    id: "10",
    icon: "✉️",
    title: "Contacting Us",
    accent: "green",
    content: [
      {
        type: "text",
        text: "If you have any questions about this Privacy Policy, the practices of this website, or your dealings with this website, please contact us through our Contact Us page.",
      },
      {
        type: "cta",
        label: "Go to Contact Page",
        href: "/contact",
      },
    ],
  },
];

const accents = {
  blue:  { bar: "#2563eb", bg: "rgba(37,99,235,0.06)",  border: "rgba(37,99,235,0.18)",  pill: "rgba(37,99,235,0.12)",  text: "#1d4ed8" },
  gold:  { bar: "#b8860b", bg: "rgba(184,134,11,0.06)", border: "rgba(184,134,11,0.2)",  pill: "rgba(184,134,11,0.12)", text: "#92690a" },
  teal:  { bar: "#0d9488", bg: "rgba(13,148,136,0.06)", border: "rgba(13,148,136,0.18)", pill: "rgba(13,148,136,0.12)", text: "#0f766e" },
  amber: { bar: "#d97706", bg: "rgba(217,119,6,0.06)",  border: "rgba(217,119,6,0.18)",  pill: "rgba(217,119,6,0.12)",  text: "#b45309" },
  green: { bar: "#16a34a", bg: "rgba(22,163,74,0.06)",  border: "rgba(22,163,74,0.18)",  pill: "rgba(22,163,74,0.12)",  text: "#15803d" },
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function SectionCard({ section, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const a = accents[section.accent];

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${a.border}`,
        background: `${a.bg}`,
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`,
      }}
    >
      {/* Left accent bar */}
      <div style={{ width: "4px", background: a.bar, flexShrink: 0 }} />

      <div style={{ flex: 1, padding: "24px 28px" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{
            width: "38px", height: "38px",
            borderRadius: "10px",
            background: a.pill,
            border: `1px solid ${a.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", flexShrink: 0,
          }}>{section.icon}</div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}>{section.title}</div>
          </div>

          <div style={{
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: 700,
            color: a.text,
            background: a.pill,
            border: `1px solid ${a.border}`,
            padding: "3px 9px",
            borderRadius: "100px",
            letterSpacing: "1px",
          }}>§ {section.id}</div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: `${a.border}`, marginBottom: "16px", opacity: 0.7 }} />

        {/* Content blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {section.content.map((block, i) => {
            if (block.type === "text") return (
              <p key={i} style={{
                fontFamily: "'Mulish', sans-serif",
                fontSize: "14.5px",
                lineHeight: "1.82",
                color: "#2d2d3a",
                margin: 0,
              }}>{block.text}</p>
            );

            if (block.type === "highlight") return (
              <div key={i} style={{
                background: a.pill,
                border: `1px solid ${a.border}`,
                borderRadius: "10px",
                padding: "12px 16px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "14px", marginTop: "1px" }}>💡</span>
                <p style={{
                  fontFamily: "'Mulish', sans-serif",
                  fontSize: "13.5px",
                  lineHeight: "1.75",
                  color: a.text,
                  margin: 0,
                  fontStyle: "italic",
                }}>{block.text}</p>
              </div>
            );

            if (block.type === "list") return (
              <ul key={i} style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", margin: 0, padding: 0 }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: a.pill, border: `1px solid ${a.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: "1px",
                    }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: a.bar }} />
                    </div>
                    <span style={{
                      fontFamily: "'Mulish', sans-serif",
                      fontSize: "14px", lineHeight: "1.75", color: "#2d2d3a",
                    }}>{item}</span>
                  </li>
                ))}
              </ul>
            );

            if (block.type === "cta") return (
              <a key={i} href={block.href} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: a.bar, color: "#fff",
                fontFamily: "'Mulish', sans-serif",
                fontSize: "13px", fontWeight: 700,
                padding: "10px 20px", borderRadius: "8px",
                textDecoration: "none", letterSpacing: "0.4px",
                width: "fit-content", marginTop: "4px",
                boxShadow: `0 4px 14px ${a.border}`,
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{block.label} →</a>
            );

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Mulish:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0f1117; }

        .pp-root {
          min-height: 100vh;
          background:
            radial-gradient(ellipse 80% 50% at 20% 0%, rgba(37,99,235,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 85% 90%, rgba(13,148,136,0.09) 0%, transparent 50%),
            linear-gradient(160deg, #0f1117 0%, #131620 50%, #0d1014 100%);
          padding: 52px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        .pp-root::before {
          content: 'PRIVACY';
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          font-family: 'DM Serif Display', serif;
          font-size: 22vw;
          color: rgba(255,255,255,0.018);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          z-index: 0;
        }

        .pp-inner {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
        }

        .pp-hero {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(-24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .pp-hero.show { opacity: 1; transform: translateY(0); }

        .pp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(37,99,235,0.3);
          color: #60a5fa;
          font-family: 'Mulish', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 100px;
          margin-bottom: 22px;
        }

        .pp-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }

        .pp-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(38px, 6vw, 62px);
          font-weight: 400;
          color: #f0f0f8;
          line-height: 1.1;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .pp-headline span {
          background: linear-gradient(135deg, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pp-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .pp-meta-item {
          font-family: 'Mulish', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 5px;
          letter-spacing: 0.3px;
        }

        .pp-meta-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }

        .pp-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
          opacity: 0;
          transition: opacity 0.6s ease 0.35s;
        }
        .pp-divider.show { opacity: 1; }

        .pp-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.4), rgba(52,211,153,0.3), transparent);
        }

        .pp-divider-icon {
          font-size: 16px;
          opacity: 0.6;
        }

        .pp-cards { display: flex; flex-direction: column; gap: 14px; }

        .pp-footer {
          margin-top: 52px;
          opacity: 0;
          transition: opacity 0.6s ease 0.8s;
        }
        .pp-footer.show { opacity: 1; }

        .pp-footer-inner {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          backdrop-filter: blur(12px);
        }

        .pp-footer-brand {
          font-family: 'DM Serif Display', serif;
          font-size: 24px;
          color: #f0f0f8;
          letter-spacing: 0.5px;
        }

        .pp-footer-brand span {
          background: linear-gradient(135deg, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pp-footer-note {
          font-family: 'Mulish', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          margin-top: 4px;
          letter-spacing: 0.3px;
        }

        .pp-footer-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pp-footer-tag {
          font-family: 'Mulish', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(96,165,250,0.7);
          border: 1px solid rgba(96,165,250,0.2);
          border-radius: 100px;
          padding: 4px 12px;
        }

        @media (max-width: 560px) {
          .pp-root { padding: 32px 14px 60px; }
          .pp-footer-inner { flex-direction: column; text-align: center; }
          .pp-footer-tags { justify-content: center; }
        }
      `}</style>

      <div className="pp-root">
        <div className="pp-inner">

          {/* Hero */}
          <header className={`pp-hero ${mounted ? "show" : ""}`}>
            <div className="pp-eyebrow">Legal Document</div>
            <h1 className="pp-headline">
              Privacy <span>Policy</span>
            </h1>
            <div className="pp-meta">
              <span className="pp-meta-item">🌐 OnlineUpdates.com</span>
              <div className="pp-meta-dot" />
              <span className="pp-meta-item">📅 Effective 2025</span>
              <div className="pp-meta-dot" />
              <span className="pp-meta-item">10 Sections</span>
            </div>
          </header>

          {/* Divider */}
          <div className={`pp-divider ${mounted ? "show" : ""}`}>
            <div className="pp-divider-line" />
            <span className="pp-divider-icon">🔒</span>
            <div className="pp-divider-line" />
          </div>

          {/* Cards */}
          <div className="pp-cards">
            {sections.map((sec, i) => (
              <SectionCard key={sec.id} section={sec} index={i} />
            ))}
          </div>

          {/* Footer */}
          <div className={`pp-footer ${mounted ? "show" : ""}`}>
            <div className="pp-footer-inner">
              <div>
                <div className="pp-footer-brand">Online<span>Updates</span>.com</div>
                <div className="pp-footer-note">Your privacy is important to us. We are committed to protecting it.</div>
              </div>
              <div className="pp-footer-tags">
                <span className="pp-footer-tag">Data Protection</span>
                <span className="pp-footer-tag">No Spam</span>
                <span className="pp-footer-tag">Secure</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}