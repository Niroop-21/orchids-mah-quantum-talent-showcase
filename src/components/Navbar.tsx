"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/talent", label: "Talent Gallery" },
  { href: "/industry", label: "For Recruiters" },
  { href: "/submit", label: "Submit Project" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-[rgba(0,245,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d81295b8-eb8c-4d53-b96c-216f0dbb5e4c/MAH-Quantum-Updated-Logo-1771820128736.jpeg?width=8000&height=8000&resize=contain"
                alt="MAH Quantum Logo"
                width={42}
                height={42}
                className="rounded-lg object-contain"
                unoptimized
              />
              <div className="leading-tight">
                <span
                  className="block text-sm font-black tracking-wider text-white"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  MAH <span className="text-[#00f5ff]">QUANTUM</span>
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-slate-400 uppercase">
                  Talent Showcase
                </span>
              </div>
            </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? "text-[#00f5ff] bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.2)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/submit"
              className="ml-3 px-5 py-2 rounded-lg btn-solid text-sm font-bold"
            >
              Submit Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-[rgba(0,245,255,0.1)] px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                pathname === l.href
                  ? "text-[#00f5ff] bg-[rgba(0,245,255,0.1)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
