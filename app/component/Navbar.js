"use client";
import { useState } from "react";

const menuItems = ["Home", "Latest Jobs", "Admit Card", "Results", "University Update", "Sarkari Yojana", "Scholarship"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center divide-x divide-gray-700">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className="block px-4 py-3 text-white font-semibold text-sm hover:text-yellow-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav toggle */}
        <div className="flex md:hidden items-center justify-between py-3">
          <span className="text-white font-bold text-sm uppercase">Menu</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden pb-4 flex flex-col divide-y divide-gray-800">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="block py-3 text-white font-semibold text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}