const techItems = [
  { label: "CUDA", category: "GPU", color: "cyan" },
  { label: "TensorRT", category: "GPU", color: "cyan" },
  { label: "NVIDIA Jetson", category: "Edge", color: "green" },
  { label: "IsaacSim", category: "Robotics", color: "green" },
  { label: "LLaMA 3", category: "LLM", color: "purple" },
  { label: "GPT-4", category: "LLM", color: "purple" },
  { label: "LangChain", category: "AI Stack", color: "cyan" },
  { label: "Triton", category: "GPU", color: "cyan" },
  { label: "Docker", category: "DevOps", color: "green" },
  { label: "Kubernetes", category: "Cloud", color: "green" },
  { label: "PyTorch", category: "ML", color: "purple" },
  { label: "Hugging Face", category: "LLM", color: "purple" },
  { label: "vLLM", category: "Inference", color: "cyan" },
  { label: "ROS2", category: "Robotics", color: "green" },
  { label: "SLAM", category: "Robotics", color: "green" },
  { label: "AWS EC2", category: "Cloud", color: "purple" },
  { label: "Pinecone", category: "VectorDB", color: "cyan" },
  { label: "DeepSpeed", category: "Training", color: "cyan" },
];

const colorCls: Record<string, string> = {
  cyan: "tag",
  green: "tag-green",
  purple: "tag-purple",
};

export default function TechStack() {
  return (
    <section className="py-20 border-y border-[rgba(0,245,255,0.07)] bg-[rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-label mb-3">Technologies We Feature</div>
          <h2
            className="text-3xl sm:text-4xl font-black text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The Real-World AI &amp; GPU Stack
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
            Projects on this platform use the same tools powering NVIDIA,
            Google DeepMind, OpenAI, and top AI labs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl glass border hover:scale-105 transition-all duration-200 cursor-default ${
                item.color === "cyan"
                  ? "border-[rgba(0,245,255,0.15)] hover:border-[rgba(0,245,255,0.35)]"
                  : item.color === "green"
                    ? "border-[rgba(118,185,0,0.15)] hover:border-[rgba(118,185,0,0.35)]"
                    : "border-[rgba(168,85,247,0.15)] hover:border-[rgba(168,85,247,0.35)]"
              }`}
            >
              <span className={`text-sm font-semibold ${colorCls[item.color]}`} style={{padding:0,background:'none',border:'none'}}>
                {item.label}
              </span>
              <span className="text-[10px] text-slate-600">{item.category}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "GPU-Native Projects",
              desc: "Every GPU project is verified to run real CUDA kernels — not just torch.cuda.is_available().",
              accent: "#00f5ff",
            },
            {
              title: "Production-Grade Code",
              desc: "Projects must demonstrate real deployments, benchmarks, or published results.",
              accent: "#76b900",
            },
            {
              title: "No Portfolio Fakers",
              desc: "Our verification process ensures every badge represents genuine engineering work.",
              accent: "#a855f7",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass rounded-xl p-6 border"
              style={{ borderColor: `${card.accent}25` }}
            >
              <div
                className="w-1 h-8 rounded-full mb-4"
                style={{ background: card.accent }}
              />
              <h3 className="text-white font-bold mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
