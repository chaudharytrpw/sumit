"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const setField = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return alert("Name, Email & Message are required");

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      console.log(res);
      
      if (res.ok) setSent(true);
      else alert("Message failed to send");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  if (sent) return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: "52px", marginBottom: "16px" }}>✅</div>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Message Sent!</div>
      <div style={{ fontSize: "14px", color: "rgba(232,234,240,0.5)", lineHeight: 1.7 }}>
        धन्यवाद! हम जल्द से जल्द आपसे संपर्क करेंगे।
      </div>
      <button onClick={() => { setSent(false); setForm({ name:"",email:"",subject:"",message:"" }); }}
        style={{ marginTop: "20px", background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.3)", color: "#22d3ee", padding: "9px 22px", borderRadius: "100px", cursor: "pointer" }}>
        Send Another
      </button>
    </div>
  );

  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "13px 16px", color: "#e8eaf0", fontSize: "14px", outline: "none" };
  const labelStyle = { fontSize: "12px", fontWeight: 600, color: "rgba(232,234,240,0.5)", marginBottom: "7px", display: "block" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>आपका नाम *</label>
          <input value={form.name} onChange={setField("name")} placeholder="Full Name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input value={form.email} onChange={setField("email")} placeholder="your@email.com" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>विषय (Subject)</label>
        <input value={form.subject} onChange={setField("subject")} placeholder="आप किस बारे में लिखना चाहते हैं?" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>संदेश (Message) *</label>
        <textarea value={form.message} onChange={setField("message")} placeholder="अपना सवाल, सुझाव या संदेश यहाँ लिखें..." rows={5} style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <button onClick={submit} style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: "12px", border: "none", cursor: "pointer", width: "100%" }}>
        📨 संदेश भेजें (Send Message)
      </button>
    </div>
  );
}