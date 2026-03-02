import Link from "next/link";
import { Github, ExternalLink, ShieldCheck, Award, Star } from "lucide-react";
import { featuredProjects } from "@/lib/data";

const domainColors: Record<string, string> = {
  "Computer Vision": "tag",
  "Natural Language Processing": "tag-purple",
  Robotics: "tag-green",
  "Systems AI": "tag",
  "Generative AI": "tag-purple",
  "Edge AI": "tag-green",
};

const badgeIcons: Record<string, React.ReactNode> = {
  "Verified Project": (
    <ShieldCheck className="w-3 h-3 text-[#00f5ff]" />
  ),
  "Industry Ready": <Star className="w-3 h-3 text-[#76b900]" />,
  "Patent Holder": <Award className="w-3 h-3 text-purple-400" />,
};

const badgeBg: Record<string, string> = {
  "Verified Project": "bg-[rgba(0,245,255,0.08)] border-[rgba(0,245,255,0.2)] text-[#00f5ff]",
  "Industry Ready": "bg-[rgba(118,185,0,0.08)] border-[rgba(118,185,0,0.2)] text-[#76b900]",
  "Patent Holder": "bg-[rgba(168,85,247,0.08)] border-[rgba(168,85,247,0.2)] text-purple-400",
};

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="section-label mb-3">Featured Talent</div>
        <h2
          className="text-4xl sm:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Top Projects This Month
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          Verified work from builders who ship real AI &amp; GPU-powered
          products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/talent/${project.slug}`}
            className="group glass rounded-2xl overflow-hidden border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.25)] transition-all duration-300 gradient-border hover:shadow-[0_0_40px_rgba(0,245,255,0.08)]"
          >
            {/* Project image placeholder */}
            <div
              className="relative h-48 overflow-hidden"
              style={{ background: project.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl font-black opacity-20 select-none"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {project.initials}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e] via-transparent to-transparent" />
              {/* Domain badge */}
              <div className="absolute top-3 left-3">
                <span className={`tag text-[10px] ${domainColors[project.domain] || "tag"}`}>
                  {project.domain}
                </span>
              </div>
              {/* Badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-1">
                {project.badges.map((b) => (
                  <span
                    key={b}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold ${badgeBg[b]}`}
                  >
                    {badgeIcons[b]}
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5">
              {/* Author */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-[#020b14] flex-shrink-0"
                  style={{ background: project.avatarColor }}
                >
                  {project.authorInitials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {project.author}
                  </div>
                  <div className="text-slate-500 text-xs">{project.role}</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#00f5ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-3 border-t border-[rgba(0,245,255,0.07)]">
                <span className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#00f5ff] transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#76b900] transition-colors ml-auto">
                  View Profile
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/talent"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl btn-neon text-sm font-semibold"
        >
          View All Talent
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
