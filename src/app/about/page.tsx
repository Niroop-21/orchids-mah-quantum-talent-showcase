import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Users,
  Award,
  Rocket,
  Cpu,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: <Cpu className="w-6 h-6 text-[#00f5ff]" />,
    title: "Product Over Paper",
    desc: "We measure engineers by what they ship, not what they studied. Real deployments over resume keywords.",
    color: "cyan",
  },
  {
    icon: <Award className="w-6 h-6 text-[#76b900]" />,
    title: "Verification is Sacred",
    desc: "Every badge, every verified tag is earned through genuine technical review. We protect the integrity of the platform.",
    color: "green",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Bridge, Not Barrier",
    desc: "MAH Quantum exists to dissolve the gap between academics and industry — not to gatekeep talent.",
    color: "purple",
  },
  {
    icon: <Target className="w-6 h-6 text-[#00f5ff]" />,
    title: "GPU-First Thinking",
    desc: "We specialize in the NVIDIA stack, CUDA, distributed AI, and inference optimization — the backbone of modern AI infrastructure.",
    color: "cyan",
  },
];

const colorBorder: Record<string, string> = {
  cyan: "border-[rgba(0,245,255,0.15)]",
  green: "border-[rgba(118,185,0,0.15)]",
  purple: "border-[rgba(168,85,247,0.15)]",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 border-b border-[rgba(0,245,255,0.07)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,245,255,0.05)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="flex justify-center mb-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d81295b8-eb8c-4d53-b96c-216f0dbb5e4c/MAH-Quantum-Updated-Logo-1771820128736.jpeg?width=8000&height=8000&resize=contain"
                alt="MAH Quantum Logo"
                width={320}
                height={320}
                className="object-contain"
                unoptimized
              />
            </div>
          <div className="section-label mb-3">About MAH Quantum</div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Building the Engineers{" "}
            <span className="text-[#00f5ff]">Industry Needs</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            MAH Quantum is a talent showcase platform that bridges the gap
            between academia and the AI industry by spotlighting engineers who
            build real, verified, GPU-native products.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-3">Our Mission</div>
            <h2
              className="text-4xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Product-Based Engineers for a Product-Driven Industry
            </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Born from an idea at Chaitanya Techno School by Niroop H and Devashri, MAH Quantum grew into a platform backed by academia — with the support of RVCE Principal Dr. K.N. Subramanya — and evolved into an independent, autonomous force in AI and GPU engineering.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                From Project AURORA (handed to CHRIST University for AGI-integrated Humanoid Robots) to an encrypted AGI Simulation built on LLMs, Claude Opus 4.6, Grok, and custom algorithms — MAH Quantum ships real systems, not slide decks.
              </p>
            <p className="text-[#00f5ff] font-semibold">
                MAH Quantum showcases real work, verifies it, and puts it in front of the people who matter — globally.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Mission", text: "Build product-based engineers who are industry-ready from day one.", color: "cyan" },
              { label: "Vision", text: "A world where engineering talent is discovered by what it ships, not where it studied.", color: "green" },
              { label: "Focus", text: "AI, GPU computing, NVIDIA stack, LLMs, robotics, and edge systems.", color: "purple" },
            ].map((item) => (
              <div
                key={item.label}
                className={`glass rounded-2xl p-5 border ${
                  item.color === "cyan"
                    ? "border-[rgba(0,245,255,0.15)]"
                    : item.color === "green"
                      ? "border-[rgba(118,185,0,0.15)]"
                      : "border-[rgba(168,85,247,0.15)]"
                }`}
              >
                <div className={`section-label mb-2 ${
                  item.color === "cyan"
                    ? "text-[#00f5ff]"
                    : item.color === "green"
                      ? "text-[#76b900]"
                      : "text-purple-400"
                }`}>
                  {item.label}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-[rgba(0,245,255,0.07)] bg-[rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Principles</div>
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`glass rounded-2xl p-7 border ${colorBorder[v.color]} hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-10 border border-[rgba(0,245,255,0.12)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.04)_0%,transparent_70%)] pointer-events-none" />
          <Rocket className="w-10 h-10 text-[#00f5ff] mx-auto mb-5 relative" />
          <h2
            className="text-3xl font-black text-white mb-4 relative"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Ready to Join the Showcase?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 relative">
            Whether you&apos;re a builder with something to prove, or a company
            looking for the engineers who actually ship — MAH Quantum is where
            you belong.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <Link
              href="/submit"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl btn-solid font-bold"
            >
              Submit Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industry"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl btn-neon font-semibold"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
