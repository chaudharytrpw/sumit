"use client";
import { useState } from "react";

const latestUpdates = [
  {
    id: 1,
    text: "Bihar Police Exam Calendar 2026 : How to Check Constable, Driver, Forest Guard Exam & PET Dates?",
  },
  {
    id: 2,
    text: "Bihar Udyami Yojana Project List 2025-26 Download – बिहार सरकार ने उद्यमी योजना के तहत किस रोजगार पर कितना पैसा मिलेगी प्रोजेक्ट लिस्ट हुआ जारी?",
  },
  {
    id: 3,
    text: "BSSC Exam Calendar 2026 Out | Bihar SSC Inter Level, CGL-4, BSO, Parichari Exam Date Out",
  },
  {
    id: 4,
    text: "NCET Integrated B.ed Form 2026 : Apply for 4-Year ITEP (B.A+B.Ed./B.Sc.+B.Ed./B.Com.+B.Ed.), Check Dates, Eligibility, Fee",
  },
  {
    id: 5,
    text: "Bihar Jeevika Answer Key 2025 : How to Check & Download Bihar Jeevika Answer Key 2025?",
  },
  {
    id: 6,
    text: "UP BEd Online Form 2026 Notification, Eligibility & Last Date to Apply?",
  },
  {
    id: 7,
    text: "JEE Mains 2026 Session 2 Form 2026 : जेईई मेन्स 2026 सेशन 2 के लिए ऑनलाइन शुरू ऐसे करें आवेदन?",
  },
  {
    id: 8,
    text: "Tata Pankh Scholarship 2025-26 : टाटा दे रही है 10वीं, 12वीं के छात्रवृत्ति योजना शुरू, ऐसे करें आवेदन?",
  },
  {
    id: 9,
    text: "Railway Group D Syllabus 2026 : Exam Pattern, PET Syllabus & Selection Process?",
  },
  {
    id: 10,
    text: "CTET Feb Admit Card 2026 Kaise Download Kare | How to Download Ctet admit card 2026?",
  },
  {
    id: 11,
    text: "CTET February 2026 City Intimation Slip 2026 Download Link (Out) – परीक्षा सिटी जरूरी, जाने कब होगी परीक्षा, Admit Card ऐसे करें उठानलोड?",
  },
  {
    id: 12,
    text: "Parimarjan Kaise kare – पुराना से पुराना जमीन को दुरस्त पर कैसे उठाएं",
  },
];

const latestJobs = [
  {
    id: 1,
    text: "RRB Group D Vacancy 2026 : Apply Online for 21997 Vacancies, Check Eligibility, Age Limit, Selection Process & Salary?",
  },
  {
    id: 2,
    text: "Central Bank of India SO Vacancy 2026: Online Apply For 275 Posts, Qualification, Apply Date, Eligibility, Fee & Selection Process?",
  },
  {
    id: 3,
    text: "Bihar Police Constable Operator Vacancy 2026 Online Apply For 993 Posts, age, apply date, Eligibility & Selection Process?",
  },
  {
    id: 4,
    text: "BTSC Dairy Field Officer Vacancy 2026 Online Apply For 92 Posts, age, apply date, Eligibility & Selection Process?",
  },
  {
    id: 5,
    text: "RRC WR Apprentice Vacancy 2026 Online Apply For 5349 Posts, Apply Date, Eligibility, Fee & Selection Process?",
  },
  {
    id: 6,
    text: "Delhi IHE DU Non Teaching Vacancy 2026: Online Apply for 10th, 12th & Graduates Pass Students?",
  },
  {
    id: 7,
    text: "RBI Assistant Vacancy 2026 Online Apply For 650 Posts, Apply Date, Eligibility, Fee & Selection Process?",
  },
  {
    id: 8,
    text: "India Post GDS Vacancy 2026 Form Correction For 28635 Posts – Notification (Out), Eligibility, Salary & Selection Process?",
  },
  {
    id: 9,
    text: "Indian Army Agniveer Vacancy 2026 Online Apply for 25,000 Posts, age, apply date, Eligibility & Selection Process?",
  },
  {
    id: 10,
    text: "Bihar District Court Attender Vacancy 2026 : 10वीं पास के लिए बिहार जिला कोर्ट में आई अटेन्डर की नई भर्ती, ऑनलाइन शुरू?",
  },
];

function NewsItem({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      className={`
        flex items-start gap-2 px-3 py-2.5 rounded-md cursor-pointer
        transition-all duration-200 group border-b border-gray-100 last:border-b-0
        ${hovered ? "bg-orange-50" : "bg-white hover:bg-orange-50"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400 group-hover:bg-orange-600 transition-colors duration-200" />
      <span className="text-sm text-gray-700 group-hover:text-orange-700 leading-snug transition-colors duration-200">
        {item.text}
      </span>
    </a>
  );
}

function SectionCard({ title, items, accentColor }) {
  const isUpdate = accentColor === "update";

  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white h-full">
      {/* Header */}
      <div
        className={`
          px-4 py-3 flex items-center gap-2
          ${isUpdate
            ? "bg-gradient-to-r from-blue-700 to-blue-500"
            : "bg-gradient-to-r from-green-700 to-green-500"
          }
        `}
      >
        <span className="text-white text-lg">
          {isUpdate ? "🔔" : "💼"}
        </span>
        <h2 className="text-white font-bold text-base tracking-wide uppercase">
          {title}
        </h2>
        <span className="ml-auto bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {items.length} new
        </span>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto max-h-[520px] divide-y divide-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
        {items.map((item, index) => (
          <NewsItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div
        className={`
          px-4 py-2 text-center border-t border-gray-100
          ${isUpdate ? "bg-blue-50" : "bg-green-50"}
        `}
      >
        <a
          href="#"
          className={`
            text-xs font-semibold hover:underline
            ${isUpdate ? "text-blue-600 hover:text-blue-800" : "text-green-600 hover:text-green-800"}
          `}
        >
          View All {isUpdate ? "Updates" : "Jobs"} →
        </a>
      </div>
    </div>
  );
}

export default function Disclaimerpage() {
  return (
    <section className="w-full bg-gray-50 py-6 px-3 sm:px-6 lg:px-8">
      

      {/* Two-column grid (stacks on mobile) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <SectionCard
          title="Latest Update"
          items={latestUpdates}
          accentColor="update"
        />
        <SectionCard
          title="Latest Jobs"
          items={latestJobs}
          accentColor="jobs"
        />
      </div>
    </section>
  );
}