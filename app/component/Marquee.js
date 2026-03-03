const marqueeItems = [
  "CSC ID REGISTRATION 2025 ऑनलाइन आवेदन करें",
  "जाति,निवास,आय यहाँ से APPLY & DOWNLOAD करें",
  "बिहार राशन कार्ड 2025 ऑनलाइन अप्लाई ऐसे करें",
  "BIHAR POST MATRIC SCHOLARSHIP 2025 APPLY",
  "VOTER ENUMERATION 2025 ONLINE APPLY",
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