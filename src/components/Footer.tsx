import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,245,255,0.1)] bg-[#020b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d81295b8-eb8c-4d53-b96c-216f0dbb5e4c/MAH-Quantum-Updated-Logo-1771820128736.jpeg?width=8000&height=8000&resize=contain"
                  alt="MAH Quantum Logo"
                  width={52}
                  height={52}
                  className="rounded-xl object-contain"
                  unoptimized
                />
                <div className="leading-tight">
                  <span
                    className="block text-base font-black tracking-wider text-white"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    MAH <span className="text-[#00f5ff]">QUANTUM</span>
                  </span>
                  <span className="block text-[9px] tracking-[0.2em] text-slate-400 uppercase">
                    Talent Showcase
                  </span>
                </div>
              </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building the bridge between real-world AI &amp; GPU engineering
              talent and the companies that need them most. Where projects prove
              potential.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[rgba(0,245,255,0.3)] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[rgba(0,245,255,0.3)] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[rgba(0,245,255,0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/talent", label: "Talent Gallery" },
                { href: "/submit", label: "Submit Project" },
                { href: "/industry", label: "For Recruiters" },
                { href: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-[#00f5ff] text-sm transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              For Companies
            </h4>
            <ul className="space-y-3">
              {[
                "Browse Talent",
                "Post a Challenge",
                "Partner with Us",
                "Contact Talent",
                "Verification Process",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00f5ff] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(0,245,255,0.07)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 MAH Quantum. Founded by{" "}
            <span className="text-[#00f5ff]">Niroop H</span>. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#76b900] inline-block animate-pulse" />
            Platform live &mdash; accepting submissions
          </div>
        </div>
      </div>
    </footer>
  );
}
