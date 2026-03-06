const marqueeItems = [
  "जाति प्रमाण पत्र ऑनलाइन आवेदन और डाउनलोड करें",
  "निवास प्रमाण पत्र ऑनलाइन APPLY & DOWNLOAD",
  "आय प्रमाण पत्र ऑनलाइन आवेदन कैसे करें",
  "PAN CARD APPLY, CORRECTION और DOWNLOAD",
  "VOTER ID CARD ONLINE APPLY और STATUS CHECK",
  "CSC TEC REGISTRATION 2026 ऑनलाइन आवेदन करें",
  "आयुष्मान भारत कार्ड ऑनलाइन बनाएं",
  "आधार कार्ड UPDATE और DOWNLOAD प्रक्रिया",
  "बिहार राशन कार्ड 2026 ऑनलाइन आवेदन करें",
];

export default function Marquee() {
  return (
    <div className="bg-gray-900 py-2 overflow-hidden border-b border-gray-700">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((text, i) => (
          <span key={i} className="text-gray-300 text-sm font-semibold px-8 hover:text-yellow-400 cursor-pointer">
            ● {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}