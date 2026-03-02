"use client";

import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

// Pre-seeded stable particle data (avoids hydration mismatch)
const PARTICLES = Array.from({ length: 60 }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  const r1 = ((seed ^ (seed >> 16)) * 0x45d9f3b) >>> 0;
  const r2 = ((r1 ^ (r1 >> 16)) * 0x45d9f3b) >>> 0;
  const r3 = ((r2 ^ (r2 >> 16)) * 0x45d9f3b) >>> 0;
  const r4 = ((r3 ^ (r3 >> 16)) * 0x45d9f3b) >>> 0;
  const r5 = ((r4 ^ (r4 >> 16)) * 0x45d9f3b) >>> 0;
  const r6 = ((r5 ^ (r5 >> 16)) * 0x45d9f3b) >>> 0;
  return {
    left: (r1 / 0xffffffff) * 100,
    top: (r2 / 0xffffffff) * 100,
    delay: (r3 / 0xffffffff) * 4,
    duration: 2 + (r4 / 0xffffffff) * 3,
    opacity: (r5 / 0xffffffff) * 0.7 + 0.1,
    size: (r6 / 0xffffffff) > 0.8 ? "3px" : "2px",
    color: i % 3 === 0 ? "#00f5ff" : i % 3 === 1 ? "#76b900" : "#a855f7",
  };
});

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

const floatingBadges = [
  {
    label: "GPU Accelerated",
    color: "cyan",
    top: "20%",
    left: "8%",
    delay: "0s",
  },
  {
    label: "CUDA Expert",
    color: "green",
    top: "35%",
    right: "6%",
    delay: "0.8s",
  },
  {
    label: "LLM Trained",
    color: "purple",
    top: "65%",
    left: "5%",
    delay: "1.6s",
  },
  {
    label: "NVIDIA Certified",
    color: "green",
    top: "72%",
    right: "8%",
    delay: "2.4s",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg pt-16">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(118,185,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <ParticleField />

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.label}
          className="absolute hidden lg:flex items-center gap-2 glass px-3 py-2 rounded-full text-xs font-semibold"
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            animation: `float 4s ease-in-out infinite`,
            animationDelay: badge.delay,
            borderColor:
              badge.color === "cyan"
                ? "rgba(0,245,255,0.3)"
                : badge.color === "green"
                  ? "rgba(118,185,0,0.3)"
                  : "rgba(168,85,247,0.3)",
            color:
              badge.color === "cyan"
                ? "#00f5ff"
                : badge.color === "green"
                  ? "#76b900"
                  : "#c084fc",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background:
                badge.color === "cyan"
                  ? "#00f5ff"
                  : badge.color === "green"
                    ? "#76b900"
                    : "#c084fc",
            }}
          />
          {badge.label}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-[#00f5ff] border border-[rgba(0,245,255,0.2)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#76b900] animate-pulse" />
          Powered by MAH Quantum &mdash; Real Projects. Real Impact.
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="block text-white">Where Real</span>
          <span className="block bg-gradient-to-r from-[#00f5ff] via-cyan-300 to-[#76b900] bg-clip-text text-transparent">
            Projects
          </span>
          <span className="block text-white">Become Real</span>
          <span className="block text-glow-green text-[#76b900]">Careers</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Showcase your work. Prove your impact. Get hired by industry. The
          platform where AI &amp; GPU engineers with{" "}
          <span className="text-[#00f5ff]">real product experience</span> meet
          the companies that need them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/talent"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl btn-solid text-base font-bold transition-all"
          >
            Explore Talent
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/submit"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl btn-neon text-base font-semibold"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Submit Your Project
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500">
          {[
            { val: "50+", label: "Verified Projects" },
            { val: "20+", label: "Industry Partners" },
            { val: "100%", label: "Real Work" },
            { val: "0%", label: "Fake Portfolios" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-2xl font-black text-[#00f5ff] text-glow-cyan"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {item.val}
              </div>
              <div className="mt-1 tracking-wider uppercase text-[10px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
