const stats = [
  {
    value: "50+",
    label: "Verified Projects",
    sub: "Across AI, Robotics & Systems",
    color: "cyan",
  },
  {
    value: "12",
    label: "Patents Filed",
    sub: "By student innovators",
    color: "green",
  },
  {
    value: "20+",
    label: "Industry Partners",
    sub: "Actively hiring from platform",
    color: "purple",
  },
  {
    value: "98%",
    label: "Verification Rate",
    sub: "Real work, no fakery",
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    text: "text-[#00f5ff]",
    glow: "text-glow-cyan",
    border: "border-[rgba(0,245,255,0.15)]",
    bg: "bg-[rgba(0,245,255,0.05)]",
    dot: "bg-[#00f5ff]",
  },
  green: {
    text: "text-[#76b900]",
    glow: "text-glow-green",
    border: "border-[rgba(118,185,0,0.15)]",
    bg: "bg-[rgba(118,185,0,0.05)]",
    dot: "bg-[#76b900]",
  },
  purple: {
    text: "text-purple-400",
    glow: "",
    border: "border-[rgba(168,85,247,0.15)]",
    bg: "bg-[rgba(168,85,247,0.05)]",
    dot: "bg-purple-400",
  },
};

export default function StatsSection() {
  return (
    <section className="py-16 border-y border-[rgba(0,245,255,0.07)] bg-[rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const c = colorMap[stat.color as keyof typeof colorMap];
            return (
              <div
                key={stat.label}
                className={`rounded-2xl p-6 ${c.bg} border ${c.border} text-center group hover:scale-105 transition-transform duration-300`}
              >
                <div
                  className={`text-4xl font-black mb-2 ${c.text} ${c.glow}`}
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
