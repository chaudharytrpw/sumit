import { FaYoutube, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  { 
    label: "Our YouTube Channel", 
    icon: <FaYoutube />, 
    color: "bg-red-600 hover:bg-red-700", 
    border: "border-red-700",
    href: "https://youtube.com/@sumitdigitalcreators?si=BPeYHjrCmCXPvQbT"
  },
  { 
    label: "Join Whatsapp Channel", 
    icon: <FaWhatsapp />, 
    color: "bg-green-600 hover:bg-green-700", 
    border: "border-green-700",
    href: "https://whatsapp.com/channel/0029VafJ8IOCXC3KtwtNqE1P"
  },
  { 
    label: "Follow Us On Facebook", 
    icon: <FaFacebookF />, 
    color: "bg-blue-600 hover:bg-blue-700", 
    border: "border-blue-700",
    href: "https://www.facebook.com/share/1AiBsAgKuc/"
  },
];

export default function SocialButtons() {
  return (
    <div className="bg-amber-50 py-4 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={`flex items-center gap-2 ${s.color} text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-md border-b-4 ${s.border} transition-transform hover:-translate-y-1`}
          >
            <span className="text-lg">
              {s.icon}
            </span>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}