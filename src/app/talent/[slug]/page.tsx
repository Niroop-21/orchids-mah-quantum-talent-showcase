import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Award,
  Star,
  Play,
  FileText,
  BookOpen,
  Cpu,
} from "lucide-react";
import { profileData, allTalent } from "@/lib/data";

const badgeBg: Record<string, string> = {
  "Verified Project": "bg-[rgba(0,245,255,0.1)] border-[rgba(0,245,255,0.3)] text-[#00f5ff]",
  "Industry Ready": "bg-[rgba(118,185,0,0.1)] border-[rgba(118,185,0,0.3)] text-[#76b900]",
  "Patent Holder": "bg-[rgba(168,85,247,0.1)] border-[rgba(168,85,247,0.3)] text-purple-400",
};
const badgeIcons: Record<string, React.ReactNode> = {
  "Verified Project": <ShieldCheck className="w-4 h-4" />,
  "Industry Ready": <Star className="w-4 h-4" />,
  "Patent Holder": <Award className="w-4 h-4" />,
};

export async function generateStaticParams() {
  return allTalent.map((p) => ({ slug: p.slug }));
}

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = profileData[params.slug];
  const talentEntry = allTalent.find((p) => p.slug === params.slug);

  if (!profile) {
    // Generic profile for entries without full data
    if (!talentEntry) return notFound();
    return <GenericProfile talent={talentEntry} />;
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/talent"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#00f5ff] text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Talent Gallery
        </Link>

        {/* Profile Header */}
        <div className="glass rounded-3xl p-8 border border-[rgba(0,245,255,0.12)] mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,245,255,0.04)_0%,transparent_60%)] pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-6 relative">
            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black text-[#020b14] flex-shrink-0 glow-cyan"
              style={{ background: profile.avatarColor }}
            >
              {profile.initials}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1
                    className="text-3xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {profile.name}
                  </h1>
                  <p className="text-[#00f5ff] font-medium mb-1">{profile.role}</p>
                  <p className="text-slate-400 text-sm mb-2">{profile.institution}</p>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <MapPin className="w-3 h-3" />
                    {profile.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-[rgba(0,245,255,0.2)] text-[#00f5ff] text-sm font-medium hover:bg-[rgba(0,245,255,0.1)] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <button className="px-4 py-2 rounded-lg btn-solid text-sm font-bold">
                    Contact
                  </button>
                </div>
              </div>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {profile.badges.map((b) => (
                  <span
                    key={b}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${badgeBg[b]}`}
                  >
                    {badgeIcons[b]}
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6 pt-6 border-t border-[rgba(0,245,255,0.08)]">
            <div className="section-label mb-3">Skills & Tools</div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-[rgba(0,245,255,0.12)] text-[#00f5ff] text-xs font-semibold">
                  <Cpu className="w-3 h-3" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="section-label mb-4">Projects</div>
              <div className="space-y-6">
                {profile.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl overflow-hidden border border-[rgba(0,245,255,0.08)] hover:border-[rgba(0,245,255,0.2)] transition-all"
                  >
                    {/* Banner */}
                    <div
                      className="h-36 flex items-center justify-center relative"
                      style={{ background: proj.gradient }}
                    >
                      <span
                        className="text-5xl font-black opacity-20"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {proj.initials}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e] via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 flex gap-2">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-[rgba(0,245,255,0.2)] text-[#00f5ff] text-xs font-medium hover:bg-[rgba(0,245,255,0.1)] transition-all"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(118,185,0,0.15)] border border-[rgba(118,185,0,0.3)] text-[#76b900] text-xs font-medium"
                          >
                            <Play className="w-3 h-3" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-white font-bold text-lg mb-3">{proj.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techStack.map((t) => (
                          <span key={t} className="tag text-[11px]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publications */}
            {profile.publications.length > 0 && (
              <div className="glass rounded-2xl p-6 border border-[rgba(168,85,247,0.12)]">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <div className="section-label text-purple-400">Publications</div>
                </div>
                <div className="space-y-4">
                  {profile.publications.map((pub, i) => (
                    <div key={i} className="pb-4 border-b border-[rgba(168,85,247,0.08)] last:border-0 last:pb-0">
                      <h4 className="text-white font-semibold text-sm mb-1 leading-snug">{pub.title}</h4>
                      <p className="text-purple-400 text-xs mb-0.5">{pub.venue}</p>
                      <p className="text-slate-500 text-xs">{pub.year}</p>
                      {pub.link && (
                        <a href={pub.link} className="flex items-center gap-1 text-xs text-slate-400 hover:text-purple-400 mt-1 transition-colors">
                          Read Paper <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Patents */}
            {profile.patents.length > 0 && (
              <div className="glass rounded-2xl p-6 border border-[rgba(118,185,0,0.12)]">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-[#76b900]" />
                  <div className="section-label text-[#76b900]">Patents</div>
                </div>
                <div className="space-y-4">
                  {profile.patents.map((pat, i) => (
                    <div key={i} className="pb-4 border-b border-[rgba(118,185,0,0.08)] last:border-0 last:pb-0">
                      <h4 className="text-white font-semibold text-sm mb-1 leading-snug">{pat.title}</h4>
                      {pat.number && (
                        <p className="text-slate-500 text-xs font-mono mb-0.5">{pat.number}</p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-[rgba(118,185,0,0.1)] border border-[rgba(118,185,0,0.2)] text-[#76b900] text-[10px] font-semibold">
                          {pat.status}
                        </span>
                        <span className="text-slate-500 text-xs">{pat.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* For Recruiters */}
            <div className="glass rounded-2xl p-6 border border-[rgba(0,245,255,0.12)]">
              <FileText className="w-5 h-5 text-[#00f5ff] mb-3" />
              <h4 className="text-white font-bold mb-2">For Recruiters</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                This profile has been verified by MAH Quantum. All projects,
                publications, and patents are authentic.
              </p>
              <button className="w-full py-2.5 rounded-xl btn-solid text-sm font-bold">
                Request Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericProfile({ talent }: { talent: (typeof allTalent)[0] }) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/talent"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#00f5ff] text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Talent Gallery
        </Link>

        <div className="glass rounded-3xl p-8 border border-[rgba(0,245,255,0.12)] mb-8">
          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-[#020b14]"
              style={{ background: talent.avatarColor }}
            >
              {talent.authorInitials}
            </div>
            <div>
              <h1 className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
                {talent.author}
              </h1>
              <p className="text-slate-400 text-sm">{talent.role}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {talent.badges.map((b) => (
                  <span key={b} className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold ${badgeBg[b]}`}>
                    {badgeIcons[b]}{b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl h-48 flex items-center justify-center mb-6 relative overflow-hidden"
            style={{ background: talent.gradient }}
          >
            <span className="text-8xl font-black opacity-20" style={{ fontFamily: "var(--font-orbitron)" }}>
              {talent.initials}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="tag">{talent.domain}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-3">{talent.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-5">{talent.description}</p>
          <div className="flex flex-wrap gap-2">
            {talent.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-[rgba(0,245,255,0.1)] text-center">
          <p className="text-slate-400 text-sm mb-4">Full profile coming soon. Contact for more details.</p>
          <button className="px-6 py-2.5 rounded-xl btn-solid text-sm font-bold">Request Contact</button>
        </div>
      </div>
    </div>
  );
}
