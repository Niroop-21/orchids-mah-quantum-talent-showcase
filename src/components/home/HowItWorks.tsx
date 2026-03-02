import { Upload, Search, BadgeCheck, Handshake } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-7 h-7 text-[#00f5ff]" />,
    step: "01",
    title: "Submit Your Work",
    description:
      "Upload your project — code, demos, patents, publications, or GitHub links. Fill out the structured submission form.",
    color: "cyan",
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-[#76b900]" />,
    step: "02",
    title: "Get Verified",
    description:
      "Our team reviews your submission. Real projects earn Verified badges. Patent holders and publications get special recognition.",
    color: "green",
  },
  {
    icon: <Search className="w-7 h-7 text-purple-400" />,
    step: "03",
    title: "Get Discovered",
    description:
      "Recruiters and companies browse by skill — CUDA, LLM, Vision, Cloud — and find exactly the talent they need.",
    color: "purple",
  },
  {
    icon: <Handshake className="w-7 h-7 text-[#00f5ff]" />,
    step: "04",
    title: "Get Hired",
    description:
      "Industry contacts you directly. No resume fluff. Your work speaks for itself. Projects become job offers.",
    color: "cyan",
  },
];

const colorBorder: Record<string, string> = {
  cyan: "border-[rgba(0,245,255,0.2)]",
  green: "border-[rgba(118,185,0,0.2)]",
  purple: "border-[rgba(168,85,247,0.2)]",
};

const colorBg: Record<string, string> = {
  cyan: "bg-[rgba(0,245,255,0.06)]",
  green: "bg-[rgba(118,185,0,0.06)]",
  purple: "bg-[rgba(168,85,247,0.06)]",
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="section-label mb-3">The Process</div>
        <h2
          className="text-4xl sm:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          How It Works
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          Four steps from student project to industry hire. No fluff. No fake
          credentials. Just real work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent pointer-events-none" />

        {steps.map((step, i) => (
          <div
            key={step.step}
            className={`relative glass rounded-2xl p-6 border ${colorBorder[step.color]} ${colorBg[step.color]} hover:scale-105 transition-transform duration-300`}
          >
            {/* Step number */}
            <div
              className="absolute -top-3 left-6 text-xs font-black px-2 py-0.5 rounded-full bg-[#020b14] border border-[rgba(0,245,255,0.2)] text-[#00f5ff]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {step.step}
            </div>

            <div className="mt-4 mb-4">{step.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
