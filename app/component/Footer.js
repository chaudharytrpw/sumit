import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f2f2f2] py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-900 font-medium">
          <Link href="/disclaimer" className="hover:text-blue-600 transition-colors">
            Disclaimer
          </Link>
          <Link href="/privacypolicy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About us
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact us
          </Link>
        </nav>

        {/* Copyright Text */}
        <div className="text-gray-900 font-medium text-center md:text-right">
          Copyright © 2026 <span className="hover:underline cursor-pointer">sevaupdates.com/</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;