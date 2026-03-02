"use client";

import { useState } from "react";
import {
  Upload,
  Github,
  FileText,
  User,
  Cpu,
  Award,
  CheckCircle,
  Send,
  Plus,
  X,
} from "lucide-react";

const techOptions = [
  "CUDA", "TensorRT", "PyTorch", "LLM", "LangChain", "RAG", "Docker",
  "Kubernetes", "ROS2", "SLAM", "YOLOv8", "OpenCV", "Triton", "vLLM",
  "AWS", "GCP", "Jetson", "IsaacSim", "Diffusion Models", "GNN",
];

const domains = [
  "Computer Vision",
  "Natural Language Processing",
  "Robotics",
  "Generative AI",
  "Edge AI",
  "Systems AI",
  "Cloud & MLOps",
  "HPC",
];

export default function SubmitPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    domain: "",
    projectTitle: "",
    description: "",
    github: "",
    demo: "",
    patentTitle: "",
    patentNumber: "",
    publicationTitle: "",
    publicationVenue: "",
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags((prev) => [...prev, customTag.trim()]);
      setCustomTag("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center glass rounded-3xl p-12 border border-[rgba(118,185,0,0.2)]">
          <div className="w-20 h-20 rounded-full bg-[rgba(118,185,0,0.15)] border border-[rgba(118,185,0,0.3)] flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#76b900]" />
          </div>
          <h2
            className="text-3xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Submission Received!
          </h2>
          <p className="text-slate-400 mb-2">
            Thank you, <span className="text-white font-semibold">{formData.name || "builder"}</span>!
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Your project is under review. The MAH Quantum team will verify your
            submission and assign badges within 5–7 business days. You&apos;ll
            receive an email once your profile goes live.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 rounded-xl btn-neon text-sm font-semibold"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="section-label mb-3">Submission Portal</div>
          <h1
            className="text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Submit Your{" "}
            <span className="text-[#00f5ff]">Project</span>
          </h1>
          <p className="text-slate-400">
            Share your real AI &amp; GPU work. Get verified. Get hired. All
            fields marked * are required.
          </p>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { icon: <CheckCircle className="w-3.5 h-3.5" />, label: "Free to submit", color: "green" },
            { icon: <Award className="w-3.5 h-3.5" />, label: "Verification in 5-7 days", color: "cyan" },
            { icon: <User className="w-3.5 h-3.5" />, label: "Profile goes live after review", color: "purple" },
          ].map((b) => (
            <span
              key={b.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${
                b.color === "cyan"
                  ? "tag"
                  : b.color === "green"
                    ? "tag-green"
                    : "tag-purple"
              }`}
            >
              {b.icon}
              {b.label}
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <section className="glass rounded-2xl p-7 border border-[rgba(0,245,255,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-[#00f5ff]" />
              <h2 className="text-white font-bold text-lg">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Aryan Mehta"
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="aryan@iitb.ac.in"
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Institution / Organization *
                </label>
                <input
                  type="text"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="IIT Bombay"
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Role / Designation *
                </label>
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="AI/ML Engineer · MTech"
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                />
              </div>
            </div>
            {/* Photo upload placeholder */}
            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Profile Photo
              </label>
              <div className="border-2 border-dashed border-[rgba(0,245,255,0.2)] rounded-xl p-6 text-center hover:border-[rgba(0,245,255,0.4)] transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-slate-500 text-sm">
                  Drop your photo here or{" "}
                  <span className="text-[#00f5ff]">browse</span>
                </p>
                <p className="text-slate-600 text-xs mt-1">JPG, PNG up to 5MB</p>
              </div>
            </div>
          </section>

          {/* Project Info */}
          <section className="glass rounded-2xl p-7 border border-[rgba(0,245,255,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-[#76b900]" />
              <h2 className="text-white font-bold text-lg">Project Details</h2>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  required
                  value={formData.projectTitle}
                  onChange={handleChange}
                  placeholder="Real-Time Crowd Density Estimation on Edge GPU"
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Domain *
                </label>
                <select
                  name="domain"
                  required
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-[#0a1a2e] text-white focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                >
                  <option value="" className="bg-[#0a1a2e]">Select domain...</option>
                  {domains.map((d) => (
                    <option key={d} value={d} className="bg-[#0a1a2e]">{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project in detail — what it does, how you built it, key results, benchmarks..."
                  className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm resize-none"
                />
              </div>

              {/* Tech tags */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Technologies Used *
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {techOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTag(t)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        selectedTags.includes(t)
                          ? "bg-[rgba(0,245,255,0.15)] border-[rgba(0,245,255,0.4)] text-[#00f5ff]"
                          : "glass border-[rgba(255,255,255,0.08)] text-slate-400 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customTag}
                    onChange={(e) => setCustomTag(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomTag())}
                    placeholder="Add custom tag..."
                    className="flex-1 px-3 py-2 rounded-lg glass border border-[rgba(0,245,255,0.1)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.3)] text-xs"
                  />
                  <button
                    type="button"
                    onClick={addCustomTag}
                    className="px-3 py-2 rounded-lg btn-neon text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                {selectedTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedTags.map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-1 tag text-[11px]"
                      >
                        {t}
                        <button type="button" onClick={() => toggleTag(t)}>
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    GitHub Repository *
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="url"
                      name="github"
                      required
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Demo / Video Link
                  </label>
                  <input
                    type="url"
                    name="demo"
                    value={formData.demo}
                    onChange={handleChange}
                    placeholder="https://youtube.com/..."
                    className="w-full px-4 py-3 rounded-xl glass border border-[rgba(0,245,255,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(0,245,255,0.4)] text-sm"
                  />
                </div>
              </div>

              {/* Document upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Upload Documents (Reports, Papers, Screenshots)
                </label>
                <div className="border-2 border-dashed border-[rgba(0,245,255,0.15)] rounded-xl p-6 text-center hover:border-[rgba(0,245,255,0.35)] transition-colors cursor-pointer">
                  <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">
                    Drop files here or{" "}
                    <span className="text-[#00f5ff]">browse</span>
                  </p>
                  <p className="text-slate-600 text-xs mt-1">PDF, PNG, JPG up to 20MB each</p>
                </div>
              </div>
            </div>
          </section>

          {/* Patents & Publications */}
          <section className="glass rounded-2xl p-7 border border-[rgba(168,85,247,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-purple-400" />
              <h2 className="text-white font-bold text-lg">
                Patents, Copyrights & Publications
              </h2>
              <span className="text-slate-500 text-xs ml-1">(Optional)</span>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Patent / Copyright Title
                  </label>
                  <input
                    type="text"
                    name="patentTitle"
                    value={formData.patentTitle}
                    onChange={handleChange}
                    placeholder="Method for Real-Time..."
                    className="w-full px-4 py-3 rounded-xl glass border border-[rgba(168,85,247,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(168,85,247,0.4)] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="patentNumber"
                    value={formData.patentNumber}
                    onChange={handleChange}
                    placeholder="IN202441012345"
                    className="w-full px-4 py-3 rounded-xl glass border border-[rgba(168,85,247,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(168,85,247,0.4)] text-sm"
                  />
                </div>
              </div>

              {/* Patent upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Upload Proof (Patent Certificate, Copyright Registration)
                </label>
                <div className="border-2 border-dashed border-[rgba(168,85,247,0.15)] rounded-xl p-5 text-center hover:border-[rgba(168,85,247,0.35)] transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                  <p className="text-slate-500 text-xs">Upload PDF document</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Publication Title
                  </label>
                  <input
                    type="text"
                    name="publicationTitle"
                    value={formData.publicationTitle}
                    onChange={handleChange}
                    placeholder="Edge-Optimized Crowd Analytics..."
                    className="w-full px-4 py-3 rounded-xl glass border border-[rgba(168,85,247,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(168,85,247,0.4)] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Venue / Conference / Journal
                  </label>
                  <input
                    type="text"
                    name="publicationVenue"
                    value={formData.publicationVenue}
                    onChange={handleChange}
                    placeholder="IEEE CVPR 2024"
                    className="w-full px-4 py-3 rounded-xl glass border border-[rgba(168,85,247,0.15)] bg-transparent text-white placeholder-slate-600 focus:outline-none focus:border-[rgba(168,85,247,0.4)] text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="glass rounded-2xl p-6 border border-[rgba(0,245,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              By submitting, you confirm all information is accurate and your work is original.
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl btn-solid font-bold text-sm flex-shrink-0"
            >
              <Send className="w-4 h-4" />
              Submit for Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
