"use client";
import { useState, useEffect } from "react";
import { ContactForm } from "./components/ContactForm";

const topics = [
  { icon: "📝", label: "ऑनलाइन फॉर्म और आवेदन प्रक्रिया" },
  { icon: "💼", label: "लेटेस्ट नौकरी और सरकारी भर्ती अपडेट" },
  { icon: "📊", label: "रिजल्ट और एडमिट कार्ड जानकारी" },
  { icon: "🏛️", label: "सरकारी योजनाओं की जानकारी" },
  { icon: "🖥️", label: "Cyber Cafe और Online Services अपडेट" },
  { icon: "🎓", label: "University और Education Updates" },
  { icon: "⚡", label: "अन्य उपयोगी डिजिटल सेवाएं" },
];

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "40px 24px", background: "#060b14", color: "#e8eaf0" }}>
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px" }}>हमसे <em>संपर्क करें</em></h1>
        <p>स्वागत है <strong style={{ color: "#22d3ee" }}>sevaupdates.com</strong> के Contact Us पेज पर!</p>
      </section>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px", background: "rgba(255,255,255,0.03)", padding: "28px", borderRadius: "20px" }}>
          <h3>हम किन विषयों पर जानकारी देते हैं</h3>
          {topics.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", margin: "8px 0", padding: "10px", background: "rgba(34,211,238,0.04)", borderRadius: "10px" }}>
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, minWidth: "280px", background: "rgba(255,255,255,0.03)", padding: "28px", borderRadius: "20px" }}>
          <h3>संदेश भेजें</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}