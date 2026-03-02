import Link from "next/link";
import {
  Search,
  Filter,
  BadgeCheck,
  Handshake,
  Users,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle,
  Building2,
} from "lucide-react";

const skillFilters = [
  { label: "CUDA / GPU", color: "cyan" },
  { label: "LLMs", color: "purple" },
  { label: "Computer Vision", color: "cyan" },
  { label: "Robotics / ROS", color: "green" },
  { label: "Cloud / K8s", color: "green" },
  { label: "Edge AI", color: "cyan" },
  { label: "Generative AI", color: "purple" },
  { label: "Systems Engineering", color: "green" },
];

const benefits = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-[#00f5ff]" />,
    title: "Verified Work Only",
    desc: "Every project is reviewed by our technical team. No tutorial repos. No faked projects. Real engineering demonstrated.",
  },
  {
    icon: <Filter className="w-6 h-6 text-[#76b900]" />,
    title: "Filter by Real Skills",
    desc: "Search by CUDA, LLMs, Docker, ROS2, TensorRT, and more. Find engineers who actually know the stack you need.",
  },
  {
    icon: <Search className="w-6 h-6 text-purple-400" />,
    title: "Browse Patents & Publications",
    desc: "Surface candidates with original IP, research publications, and proof of innovation beyond coursework.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-[#00f5ff]" />,
    title: "Direct Contact",
    desc: "Partner accounts get direct access to candidate profiles, contact forms, and priority introductions from the MAH Quantum team.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#76b900]" />,
    title: "GPU & AI-Native Talent",
    desc: "Specialized in NVIDIA stack, distributed training, inference optimization — the engineers who move AI from research to production.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Cohort-Based Hiring",
    desc: "Get quarterly briefings on new verified talent entering the platform. Build your pipeline before talent goes to market.",
  },
];

const partners = [
  "NVIDIA", "Qualcomm", "Samsung R&D", "Wipro AI", "Infosys AI Lab",
  "ISRO Startup", "IIT-Industry Connect", "StartupIndia",
];

const steps = [
  {
    n: "01",
    label: "Create Partner Account",
    desc: "Sign up as an industry partner to unlock full profiles and contact details.",
    color: "cyan",
  },
  {
    n: "02",
    label: "Browse & Filter Talent",
    desc: "Use our skill and domain filters to find verified candidates matching your requirements.",
    color: "green",
  },
  {
    n: "03",
    label: "Request Introductions",
    desc: "Shortlist candidates and request direct contact. The MAH Quantum team facilitates all introductions.",
    color: "purple",
  },
  {
    n: "04",
    label: "Hire with Confidence",
    desc: "Every hire comes with full project verification documentation — no surprises in technical rounds.",
    color: "cyan",
  },
];

const colorBorder: Record<string, string> = {
  cyan: "border-[rgba(0,245,255,0.2)]",
  green: "border-[rgba(118,185,0,0.2)]",
  purple: "border-[rgba(168,85,247,0.2)]",
};

export default function IndustryPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 border-b border-[rgba(0,245,255,0.07)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(118,185,0,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-[#76b900] border border-[rgba(118,185,0,0.2)] mb-8">
            <Building2 className="w-3.5 h-3.5" />
            For Industry & Recruiters
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Hire Engineers Who{" "}
            <span className="bg-gradient-to-r from-[#76b900] to-[#00f5ff] bg-clip-text text-transparent">
              Actually Ship
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Browse a curated pool of AI and GPU engineers with verified,
            real-world projects. Not resumes. Not LinkedIn profiles. Actual
            products built with NVIDIA, LLMs, CUDA, and cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/talent"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl btn-solid font-bold"
            >
              Browse Talent Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#partner"
              className="flex items-center gap-2 px-8 py-4 rounded-xl btn-neon font-semibold"
            >
              Partner with MAH Quantum
            </a>
          </div>
        </div>
      </section>

      {/* Skill filters preview */}
      <section className="py-16 border-b border-[rgba(0,245,255,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-label mb-3">Filter Capabilities</div>
            <h2
              className="text-3xl font-black text-white"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Find Exactly the Skill Set You Need
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skillFilters.map((s) => (
              <div
                key={s.label}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl glass border cursor-pointer transition-all hover:scale-105 ${
                  s.color === "cyan"
                    ? "border-[rgba(0,245,255,0.2)] hover:border-[rgba(0,245,255,0.5)] hover:bg-[rgba(0,245,255,0.06)]"
                    : s.color === "green"
                      ? "border-[rgba(118,185,0,0.2)] hover:border-[rgba(118,185,0,0.5)] hover:bg-[rgba(118,185,0,0.06)]"
                      : "border-[rgba(168,85,247,0.2)] hover:border-[rgba(168,85,247,0.5)] hover:bg-[rgba(168,85,247,0.06)]"
                }`}
              >
                <Cpu
                  className={`w-4 h-4 ${
                    s.color === "cyan"
                      ? "text-[#00f5ff]"
                      : s.color === "green"
                        ? "text-[#76b900]"
                        : "text-purple-400"
                  }`}
                />
                <span
                  className={`font-semibold text-sm ${
                    s.color === "cyan"
                      ? "text-[#00f5ff]"
                      : s.color === "green"
                        ? "text-[#76b900]"
                        : "text-purple-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/talent" className="text-sm text-slate-400 hover:text-[#00f5ff] transition-colors flex items-center justify-center gap-1">
              Search all talent with full filters
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why MAH Quantum */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Why Partner with Us</div>
          <h2
            className="text-4xl font-black text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The Anti-Resume Platform
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Traditional hiring filters on degrees and keywords. We filter on
            shipped products and verified skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass rounded-2xl p-6 border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.2)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-white font-bold mb-2">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to hire */}
      <section className="py-20 border-y border-[rgba(0,245,255,0.07)] bg-[rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Process</div>
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              How to Hire via MAH Quantum
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className={`glass rounded-2xl p-6 border ${colorBorder[step.color]} relative`}
              >
                <div
                  className="absolute -top-3 left-5 text-xs font-black px-2 py-0.5 rounded-full bg-[#020b14] border border-[rgba(0,245,255,0.2)] text-[#00f5ff]"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {step.n}
                </div>
                <h3 className="text-white font-bold mt-3 mb-2">{step.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-label mb-3">Industry Network</div>
          <h2
            className="text-3xl font-black text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Organizations That Trust MAH Quantum
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p) => (
            <div
              key={p}
              className="glass px-6 py-3 rounded-xl border border-[rgba(0,245,255,0.08)] text-slate-300 font-semibold text-sm hover:border-[rgba(0,245,255,0.25)] hover:text-white transition-all"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-10 border border-[rgba(118,185,0,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(118,185,0,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative text-center">
            <Handshake className="w-12 h-12 text-[#76b900] mx-auto mb-5" />
            <h2
              className="text-4xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Partner with MAH Quantum
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Get priority access to verified AI &amp; GPU talent. Co-host
              challenges. Build your engineering pipeline. For companies serious
              about hiring product-grade engineers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                "Access full candidate profiles",
                "Direct contact capability",
                "Quarterly talent briefings",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[rgba(118,185,0,0.06)] border border-[rgba(118,185,0,0.15)] text-sm text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-[#76b900] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <button className="px-10 py-4 rounded-xl font-bold border border-[rgba(118,185,0,0.4)] text-[#76b900] hover:bg-[rgba(118,185,0,0.1)] text-base transition-all hover:scale-105">
              Contact Us to Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
