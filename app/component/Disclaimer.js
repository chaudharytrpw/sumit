"use client";
import { useState, useEffect } from "react";

const Disclaimer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      icon: "🔎",
      title: "Source of Information",
      subtitle: "सूचना का स्रोत",
      type: "list",
      items: [
        "संबंधित विभाग की Official Website",
        "आधिकारिक नोटिफिकेशन / विज्ञापन (Official Notification / Advertisement)",
        "सरकारी प्रेस रिलीज़ (Government Press Release)",
        "प्रमाणित समाचार पत्र (Trusted News Papers)",
        "अन्य विश्वसनीय और प्रमाणित स्रोत",
      ],
      footer:
        "हम प्रत्येक महत्वपूर्ण लेख के अंत में Official Website Link या Quick Links देते हैं ताकि पाठक सीधे मूल स्रोत तक पहुँच सकें।",
    },
    {
      icon: "⚠️",
      title: "Important Notice",
      subtitle: "महत्वपूर्ण सूचना",
      type: "text",
      content:
        "Sevaupdates.com किसी भी प्रकार का आवेदन शुल्क (Application Fee) या सेवा शुल्क (Service Charge) स्वयं नहीं लेता है। यह वेबसाइट केवल Information Provider Platform है। यदि कोई व्यक्ति या संस्था Sevaupdates.com के नाम पर आपसे पैसे मांगता है, तो वह पूरी तरह फर्जी (Fraud) है।",
      highlight: true,
    },
    {
      icon: "📌",
      title: "Liability",
      subtitle: "जिम्मेदारी",
      type: "text",
      content:
        "हमारा उद्देश्य सही और प्रमाणित जानकारी प्रदान करना है। फिर भी, किसी भी आवेदन, निर्णय या अन्य कार्रवाई से पहले जानकारी की स्वतंत्र रूप से जांच अवश्य करें। Sevaupdates.com किसी भी प्रकार की हानि, नुकसान या गलत निर्णय के लिए जिम्मेदार नहीं होगा।",
    },
    {
      icon: "🎯",
      title: "Our Mission",
      subtitle: "हमारा उद्देश्य",
      type: "list",
      items: [
        "लोगों तक सही और प्रमाणित जानकारी पहुंचाना",
        "फर्जी अपडेट और गलत लिंक से लोगों को बचाना",
        "सरकारी सेवाओं की जानकारी सरल भाषा में उपलब्ध कराना",
        "डिजिटल जागरूकता (Digital Awareness) बढ़ाना",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white p-6 md:p-10">
      {/* Background Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-radial from-yellow-200/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-radial from-green-200/15 to-transparent pointer-events-none" />

      {/* Card */}
      <div
        className={`w-full max-w-6xl mx-auto flex flex-col flex-1 bg-white border border-yellow-200/40 rounded-2xl shadow-xl transform transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 p-10 rounded-t-2xl overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-500 font-semibold text-xs uppercase px-4 py-1 rounded-full mb-4">
            Private Information Portal
          </div>
          <h2 className="text-white font-playfair text-3xl md:text-4xl font-bold mb-1">
            📜 Disclaimer – <span className="text-yellow-400">Sevaupdates.com</span>
          </h2>
          <p className="text-white/60 text-sm">Last updated: 2025 &nbsp;|&nbsp; Hindi / English</p>
        </div>

        {/* Intro */}
        <div className="px-8 md:px-12 py-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent my-6" />
          <p className="border-l-4 border-yellow-400 bg-yellow-50/20 p-4 text-gray-700 text-sm md:text-base rounded-r-md">
            <strong>प्रिय पाठकगण,</strong>
            <br />
            Sevaupdates.com एक निजी (Private) डिजिटल सूचना पोर्टल है। इस वेबसाइट का किसी भी सरकारी मंत्रालय, विभाग, बोर्ड, आयोग या सरकारी संस्था से कोई प्रत्यक्ष या अप्रत्यक्ष संबंध नहीं है। यह किसी भी सरकारी वेबसाइट का आधिकारिक (Official) भाग नहीं है।
            <br />
            <br />
            यह वेबसाइट सरकारी नौकरियों, ऑनलाइन फॉर्म, एडमिट कार्ड, रिजल्ट, सरकारी योजनाओं, CSC सेवाओं तथा अन्य डिजिटल सेवाओं से संबंधित जानकारी सरल और स्पष्ट भाषा में लोगों तक पहुंचाने के उद्देश्य से बनाई गई है।
          </p>
        </div>

        {/* Sections */}
        <div className="px-8 md:px-12 py-6 flex flex-col gap-6 flex-1">
          {sections.map((sec, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden bg-white ${
                sec.highlight ? "border-red-200 bg-red-50" : "border-yellow-200"
              } transform transition-all duration-500`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${0.2 + i * 0.1}s`,
              }}
            >
              <div
                className={`flex items-center gap-4 px-4 py-3 ${
                  sec.highlight ? "bg-red-50/30 border-b border-red-100" : "bg-yellow-50/20 border-b border-yellow-200/30"
                }`}
              >
                <span className="text-2xl">{sec.icon}</span>
                <div>
                  <div className={`font-playfair font-bold text-gray-800 ${sec.highlight ? "text-red-600" : ""}`}>
                    {sec.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{sec.subtitle}</div>
                </div>
              </div>

              <div className="px-4 py-3 text-gray-700 text-sm md:text-base">
                {sec.type === "list" ? (
                  <>
                    <ul className="flex flex-col gap-2 list-none pl-3">
                      {sec.items.map((item, j) => (
                        <li key={j} className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {sec.footer && <p className="mt-2 text-xs italic text-gray-500">{sec.footer}</p>}
                  </>
                ) : (
                  <>
                    <p>{sec.content}</p>
                    {sec.highlight && (
                      <div className="mt-2 inline-flex items-center gap-2 bg-red-100 border border-red-200 text-red-600 text-xs font-semibold uppercase px-2 py-1 rounded">
                        ⛔ Fraud Alert — कोई शुल्क न दें
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 text-white px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-b-2xl">
          <p className="text-sm md:text-base text-white/80 max-w-md text-center md:text-left">
            किसी भी महत्वपूर्ण प्रक्रिया से पहले संबंधित विभाग की Official Website अवश्य देखें। धन्यवाद।
            <br />
            <strong className="text-yellow-400">Team – Sevaupdates.com</strong>
          </p>
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border-2 border-yellow-400/50 flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
            <span className="text-xs text-yellow-400 tracking-widest uppercase">Verified Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;