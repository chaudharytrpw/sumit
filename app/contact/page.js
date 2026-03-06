"use client"
import { useState, useEffect, useRef } from "react";

const topics = [
  { icon: "📝", label: "ऑनलाइन फॉर्म और आवेदन प्रक्रिया" },
  { icon: "💼", label: "लेटेस्ट नौकरी और सरकारी भर्ती अपडेट" },
  { icon: "📊", label: "रिजल्ट और एडमिट कार्ड जानकारी" },
  { icon: "🏛️", label: "सरकारी योजनाओं की जानकारी" },
  { icon: "🖥️", label: "Cyber Cafe और Online Services अपडेट" },
  { icon: "🎓", label: "University और Education Updates" },
  { icon: "⚡", label: "अन्य उपयोगी डिजिटल सेवाएं" },
];

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}

function FadeIn({ children, delay = 0, dir = "up" }) {
  const ref = useRef(null);
  const v = useInView(ref);
  const t = dir === "up" ? "translateY(20px)" : dir === "left" ? "translateX(-20px)" : "translateX(20px)";
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : t, transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));
  const submit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  if (sent) return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: "52px", marginBottom: "16px" }}>✅</div>
      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
        Message Sent!
      </div>
      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "14px", color: "rgba(232,234,240,0.5)", lineHeight: 1.7 }}>
        धन्यवाद! हम जल्द से जल्द आपसे संपर्क करेंगे।
      </div>
      <button onClick={() => { setSent(false); setForm({ name:"",email:"",subject:"",message:"" }); }}
        style={{ marginTop: "20px", background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.3)", color: "#22d3ee",
          fontFamily: "'Sora',sans-serif", fontSize: "13px", padding: "9px 22px", borderRadius: "100px", cursor: "pointer" }}>
        Send Another
      </button>
    </div>
  );

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px", padding: "13px 16px", color: "#e8eaf0", fontFamily: "'Sora',sans-serif",
    fontSize: "14px", outline: "none", transition: "border-color 0.2s",
  };
  const labelStyle = { fontFamily: "'Sora',sans-serif", fontSize: "12px", fontWeight: 600,
    color: "rgba(232,234,240,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "7px", display: "block" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>आपका नाम *</label>
          <input value={form.name} onChange={set("name")} placeholder="Full Name" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input value={form.email} onChange={set("email")} placeholder="your@email.com" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>विषय (Subject)</label>
        <input value={form.subject} onChange={set("subject")} placeholder="आप किस बारे में लिखना चाहते हैं?" style={inputStyle}
          onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.5)"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
      </div>
      <div>
        <label style={labelStyle}>संदेश (Message) *</label>
        <textarea value={form.message} onChange={set("message")} placeholder="अपना सवाल, सुझाव या संदेश यहाँ लिखें..."
          rows={5} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
          onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.5)"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
      </div>
      <button onClick={submit} style={{
        background: "linear-gradient(135deg, #06b6d4, #6366f1)", color: "#fff",
        fontFamily: "'Sora',sans-serif", fontSize: "14px", fontWeight: 700,
        padding: "14px 32px", borderRadius: "12px", border: "none", cursor: "pointer",
        letterSpacing: "0.3px", boxShadow: "0 6px 24px rgba(34,211,238,0.25)",
        transition: "opacity 0.2s, transform 0.2s", width: "100%",
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
        📨 संदेश भेजें (Send Message)
      </button>
    </div>
  );
}

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Fraunces:ital,wght@0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #060b14; }

        .ct-root {
          min-height: 100vh;
          background:
            radial-gradient(ellipse 80% 50% at 50% -5%, rgba(34,211,238,0.09) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 5% 60%, rgba(99,102,241,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 95% 85%, rgba(34,211,238,0.06) 0%, transparent 50%),
            linear-gradient(180deg, #060b14 0%, #07101b 100%);
          font-family: 'Sora', sans-serif;
          color: #e8eaf0;
          padding-bottom: 80px;
        }

        /* HERO */
        .ct-hero {
          position: relative;
          padding: 64px 24px 56px;
          text-align: center;
          overflow: hidden;
        }
        .ct-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .ct-hero-inner {
          position: relative; max-width: 680px; margin: 0 auto;
          opacity: 0; transform: translateY(-20px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .ct-hero-inner.show { opacity: 1; transform: none; }

        .ct-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.25);
          color: #22d3ee; font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 7px 18px; border-radius: 100px; margin-bottom: 22px;
        }
        .ct-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22d3ee;
          animation: cpulse 2s infinite;
        }
        @keyframes cpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }

        .ct-headline {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5.5vw, 58px);
          font-weight: 700; line-height: 1.1; letter-spacing: -0.5px;
          color: #fff; margin-bottom: 10px;
        }
        .ct-headline em {
          font-style: italic; font-weight: 400;
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-hero-sub {
          font-size: 15px; font-weight: 300; color: rgba(232,234,240,0.5);
          line-height: 1.75; max-width: 500px; margin: 0 auto;
        }

        /* BODY */
        .ct-body { max-width: 1000px; margin: 0 auto; padding: 0 24px; display: flex; flex-direction: column; gap: 24px; }

        /* Intro block */
        .ct-intro {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 28px 32px;
          position: relative; overflow: hidden;
        }
        .ct-intro::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #22d3ee, #6366f1, #22d3ee);
        }
        .ct-intro-text {
          font-size: 15px; line-height: 1.85; color: rgba(232,234,240,0.7); font-weight: 300;
        }
        .ct-intro-text strong { color: #22d3ee; font-weight: 600; }

        /* Main grid */
        .ct-main-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 20px; }

        /* Topics card */
        .ct-topics-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 28px 28px;
        }
        .ct-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
          color: #22d3ee; margin-bottom: 18px;
          display: flex; align-items: center; gap: 10px;
        }
        .ct-section-label::after { content: ''; flex: 1; height: 1px; background: rgba(34,211,238,0.2); }

        .ct-topic-list { display: flex; flex-direction: column; gap: 10px; }
        .ct-topic-item {
          display: flex; align-items: center; gap: 12px;
          background: rgba(34,211,238,0.04); border: 1px solid rgba(34,211,238,0.1);
          border-radius: 10px; padding: 11px 14px;
          transition: background 0.2s, border-color 0.2s;
        }
        .ct-topic-item:hover { background: rgba(34,211,238,0.09); border-color: rgba(34,211,238,0.25); }
        .ct-topic-icon { font-size: 16px; flex-shrink: 0; }
        .ct-topic-label { font-size: 13px; font-weight: 400; color: rgba(232,234,240,0.8); line-height: 1.3; }

        /* Form card */
        .ct-form-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 28px 28px;
          position: relative; overflow: hidden;
        }
        .ct-form-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #22d3ee);
        }

        /* Contact info row */
        .ct-info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ct-info-pill {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 20px 22px;
          display: flex; align-items: center; gap: 14px;
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-info-pill:hover { border-color: rgba(34,211,238,0.25); background: rgba(34,211,238,0.04); }
        .ct-info-pill-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .ct-info-pill-icon.email { background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25); }
        .ct-info-pill-icon.loc   { background: rgba(34,211,238,0.1);  border: 1px solid rgba(34,211,238,0.2);  }
        .ct-info-pill-title { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(232,234,240,0.4); margin-bottom: 4px; }
        .ct-info-pill-val   { font-size: 13.5px; font-weight: 600; color: #e8eaf0; word-break: break-all; }

        /* Thank you */
        .ct-thankyou {
          background: linear-gradient(135deg, rgba(34,211,238,0.08), rgba(99,102,241,0.08));
          border: 1px solid rgba(34,211,238,0.18);
          border-radius: 20px; padding: 28px 32px;
          text-align: center;
        }
        .ct-thankyou-text { font-size: 15px; line-height: 1.8; color: rgba(232,234,240,0.65); font-weight: 300; }
        .ct-thankyou-text strong { color: #22d3ee; font-weight: 600; }

        @media (max-width: 700px) {
          .ct-main-grid, .ct-info-row { grid-template-columns: 1fr; }
          .ct-body { padding: 0 14px; }
          .ct-intro, .ct-topics-card, .ct-form-card, .ct-thankyou { padding: 22px 18px; }
        }
      `}</style>

      <div className="ct-root">

        {/* HERO */}
        <section className="ct-hero">
          <div className={`ct-hero-inner ${mounted ? "show" : ""}`}>
            <div className="ct-badge"><div className="ct-badge-dot" />Contact Us</div>
            <h1 className="ct-headline">हमसे <em>संपर्क करें</em></h1>
            <p className="ct-hero-sub">
              नमस्कार दोस्तों, स्वागत है <strong style={{ color: "#22d3ee" }}>sevaupdates.com</strong> के Contact Us पेज पर!
            </p>
          </div>
        </section>

        {/* BODY */}
        <div className="ct-body">

          {/* Intro */}
          <FadeIn delay={0}>
            <div className="ct-intro">
              <p className="ct-intro-text">
                हमारी वेबसाइट का मुख्य उद्देश्य <strong>Cyber Cafe और Online Services</strong> से जुड़े लोगों तथा <strong>Job एवं सरकारी योजनाओं</strong> की जानकारी चाहने वालों को 100% सही और अपडेटेड जानकारी प्रदान करना है। अगर आपको हमारी वेबसाइट से संबंधित कोई सवाल, सुझाव, या विज्ञापन के लिए संपर्क करना हो — हम यहाँ हैं!
              </p>
            </div>
          </FadeIn>

          {/* Main grid: topics + form */}
          <div className="ct-main-grid">
            <FadeIn delay={0.05} dir="left">
              <div className="ct-topics-card">
                <div className="ct-section-label">हम किन विषयों पर जानकारी देते हैं</div>
                <div className="ct-topic-list">
                  {topics.map((t, i) => (
                    <div className="ct-topic-item" key={i}
                      style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateX(-12px)",
                        transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s` }}>
                      <span className="ct-topic-icon">{t.icon}</span>
                      <span className="ct-topic-label">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} dir="right">
              <div className="ct-form-card">
                <div className="ct-section-label">संदेश भेजें</div>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Contact info pills */}
          <FadeIn delay={0.1}>
            <div className="ct-info-row">
              <div className="ct-info-pill">
                <div className="ct-info-pill-icon email">📧</div>
                <div>
                  <div className="ct-info-pill-title">Email</div>
                  <div className="ct-info-pill-val">Sumitraza35@gmail.com</div>
                </div>
              </div>
              <div className="ct-info-pill">
                <div className="ct-info-pill-icon loc">📍</div>
                <div>
                  <div className="ct-info-pill-title">Location</div>
                  <div className="ct-info-pill-val">West Champaran, Bihar</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Thank you note */}
          <FadeIn delay={0.12}>
            <div className="ct-thankyou">
              <p className="ct-thankyou-text">
                हम आपके सवालों का जवाब <strong>जल्द से जल्द</strong> देने की कोशिश करेंगे।<br />
                sevaupdates.com के साथ जुड़े रहें और सही जानकारी पाते रहें। <strong>धन्यवाद! 🙏</strong>
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
}