import Link from 'next/link';
import { Globe, Mail } from 'lucide-react'; // 🌍 Replaces Language with Globe

export default function Navbar() {
  return (
    <header className="w-full px-8 py-4 shadow-md bg-white flex items-center">
        {/* Left: Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-800 mr-12 hover:text-black transition">
            SergeAI
        </Link>

      {/* Center: Nav Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="#about" className="text-gray-600 hover:text-black transition">About</Link>
        <Link href="#services" className="text-gray-600 hover:text-black transition">Services</Link>
        <Link href="#innovation" className="text-gray-600 hover:text-black transition">Innovation</Link>
      </nav>

      {/* Right: Language & Contact */}
      <div className="ml-auto flex space-x-8 items-center">
        {/* 🌍 Language */}
        <Link href="#language" className="flex flex-col items-center text-sm hover:text-black transition">
          <Globe className="h-4 w-4 text-gray-600 mb-1" />
          <span className="text-gray-800">Language</span>
        </Link>

        {/* ✉️ Contact */}
        <Link href="#contact" className="flex flex-col items-center text-sm hover:text-black transition">
          <Mail className="h-4 w-4 text-gray-600 mb-1" />
          <span className="text-gray-800">Contact</span>
        </Link>
      </div>
    </header>
  );
}
