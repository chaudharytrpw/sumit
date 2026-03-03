"use client";
import DisclaimerPage from "./component/Disclaimerpage";
import Header from "./component/Header";
import Marquee from "./component/Marquee";
// import Navbar from "./component/Navbar";
import SocialButtons from "./component/SocialButtons";

const gridLinks = [
  {
    text: "पैन कार्ड बनाना (Pan Card Apply)",
    href: "#",
    btn: "Apply Now / अभी आवेदन करें",
  },
  { text: "आधार DBT करें", href: "#", btn: "Apply Now" },
  {
    text: "पैन कार्ड सुधार (Pan Card Correction)",
    href: "#",
    btn: "Apply Now / अभी आवेदन करें",
  },
  {
    text: "पैन कार्ड डाउनलोड (Pan Card Download)",
    href: "#",
    btn: "Download / डाउनलोड करें",
  },
  {
    text: "आयुष्मान कार्ड बनाना (Ayushman Card Apply)",
    href: "#",
    btn: "Apply Now / अभी आवेदन करें",
  },
  {
    text: "वोटर कार्ड बनाना (Voter Card Apply)",
    href: "#",
    btn: "Apply Now / अभी आवेदन करें",
  },
  {
    text: "रेलवे टिकट बुकिंग (IRCTC Train Booking)",
    href: "https://www.irctc.co.in/nget/train-search",
    btn: "Book Now / अभी बुक करें",
  },
];

export default function OnlineUpdateSTM() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Header />
      {/* <Navbar /> */}
      <SocialButtons />
      <Marquee />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4  rounded overflow-hidden shadow-lg">
          {gridLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`font-semibold text-white text-center text-xs sm:text-sm px-4 py-6 border border-gray-700 transition-all hover:bg-gray-800 hover:scale-[1.02] flex items-center justify-center bg-blue-600`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </main>
      <DisclaimerPage />
    </div>
  );
}
