"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, ExternalLink, ShieldCheck, Award, Star, X } from "lucide-react";
import { allTalent } from "@/lib/data";

const domains = ["All", "Computer Vision", "Natural Language Processing", "Robotics", "Generative AI", "Edge AI", "Systems AI"];
const techFilters = ["All Tech", "CUDA", "LLM", "Docker", "ROS2", "PyTorch", "Kubernetes", "TensorRT"];

const badgeBg: Record<string, string> = {
  "Verified Project": "bg-[rgba(0,245,255,0.08)] border-[rgba(0,245,255,0.2)] text-[#00f5ff]",
  "Industry Ready": "bg-[rgba(118,185,0,0.08)] border-[rgba(118,185,0,0.2)] text-[#76b900]",
  "Patent Holder": "bg-[rgba(168,85,247,0.08)] border-[rgba(168,85,247,0.2)] text-purple-400",
};

const badgeIcons: Record<string, React.ReactNode> = {
  "Verified Project": <ShieldCheck className="w-3 h-3" />,
  "Industry Ready": <Star className="w-3 h-3" />,
  "Patent Holder": <Award className="w-3 h-3" />,
};

export default function TalentPage() {
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeTech, setActiveTech] = useState("All Tech");

  const filtered = allTalent.filter((p) => {
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchDomain = activeDomain === "All" || p.domain === activeDomain;
    const matchTech =
      activeTech === "All Tech" || p.tags.includes(activeTech);
    return matchSearch && matchDomain && matchTech;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="section-label mb-3">Platform</div>
        <h1
          className="text-5xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Talent <span className="text-[#00f5ff]">Gallery</span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Browse verified AI, GPU, and systems engineers. Every project has been
          reviewed. Every badge is earned.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
        {/* Search bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name, project, or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-500 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Domain filter */}
        <div className="flex flex-wrap gap-2">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDomain(d)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeDomain === d
                  ? "bg-[rgba(0,245,255,0.15)] border-[rgba(0,245,255,0.4)] text-[#00f5ff]"
                  : "glass border-[rgba(255,255,255,0.08)] text-slate-400 hover:text-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Tech filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          {techFilters.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTech(t)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                activeTech === t
                  ? "bg-[rgba(118,185,0,0.15)] border-[rgba(118,185,0,0.4)] text-[#76b900]"
                  : "glass border-[rgba(255,255,255,0.06)] text-slate-500 hover:text-slate-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <span className="text-slate-500 text-sm">
          Showing{" "}
          <span className="text-[#00f5ff] font-semibold">{filtered.length}</span>{" "}
          verified profiles
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">No results found</p>
            <p className="text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/talent/${project.slug}`}
                className="group glass rounded-2xl overflow-hidden border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.25)] transition-all duration-300 gradient-border hover:shadow-[0_0_40px_rgba(0,245,255,0.07)]"
              >
                {/* Image */}
                <div
                  className="relative h-44 overflow-hidden"
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
                  <div className="absolute top-3 left-3">
                    <span className="tag text-[10px]">{project.domain}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
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
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-[#020b14] flex-shrink-0"
                      style={{ background: project.avatarColor }}
                    >
                      {project.authorInitials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{project.author}</div>
                      <div className="text-slate-500 text-xs">{project.role}</div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#00f5ff] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag text-[10px]">{tag}</span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tag text-[10px]">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-end pt-3 border-t border-[rgba(0,245,255,0.07)]">
                    <span className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-[#00f5ff] transition-colors">
                      View Profile
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
