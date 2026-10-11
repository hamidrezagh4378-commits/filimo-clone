"use client";
import { Search, User, Bell } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [q, setQ] = useState("");
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
        <Link href="/" className="text-2xl font-black text-red-500">
          FILIMO<span className="text-white">CLONE</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">خانه</Link>
          <Link href="/movies" className="hover:text-white">فیلم‌ها</Link>
          <Link href="/movies" className="hover:text-white">سریال‌ها</Link>
          <Link href="/movies" className="hover:text-white">لیست من</Link>
        </div>
        <div className="flex-1" />
        <div className="relative hidden md:block">
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="جستجو..."
            className="bg-black/60 border border-gray-700 rounded-full pr-10 pl-4 py-2 text-sm w-64 focus:outline-none focus:border-red-500"
          />
        </div>
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center cursor-pointer">
          <User className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
}
