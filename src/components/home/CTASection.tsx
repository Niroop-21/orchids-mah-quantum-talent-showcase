import Link from "next/link";
import { ArrowRight, Users, Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* For Students */}
          <div className="relative glass rounded-3xl p-10 border border-[rgba(0,245,255,0.15)] overflow-hidden group hover:border-[rgba(0,245,255,0.35)] transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,245,255,0.06)_0%,transparent_60%)] pointer-events-none" />
            <Send className="w-10 h-10 text-[#00f5ff] mb-5" />
            <div className="section-label mb-2">For Students & Builders</div>
            <h3
              className="text-3xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Submit Your Project
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Stop letting your work collect dust in a GitHub repo. Put it in
              front of the engineers and founders who matter. Build a verified
              portfolio that stands out.
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-solid font-bold"
            >
              Submit Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* For Companies */}
          <div className="relative glass rounded-3xl p-10 border border-[rgba(118,185,0,0.15)] overflow-hidden group hover:border-[rgba(118,185,0,0.35)] transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(118,185,0,0.06)_0%,transparent_60%)] pointer-events-none" />
            <Users className="w-10 h-10 text-[#76b900] mb-5" />
            <div className="section-label mb-2 text-[#76b900]">
              For Industry & Recruiters
            </div>
            <h3
              className="text-3xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Discover Verified Talent
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Filter by CUDA, LLMs, Docker, ROS, and more. Every candidate on
              this platform ships real products. No bootcamp graduates with no
              experience.
            </p>
            <Link
              href="/industry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border border-[rgba(118,185,0,0.4)] text-[#76b900] hover:bg-[rgba(118,185,0,0.1)] transition-all"
            >
              Partner with Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 glass rounded-2xl p-6 border border-[rgba(0,245,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-white font-bold mb-1">
              Ready to bridge academia and industry?
            </div>
            <div className="text-slate-400 text-sm">
              MAH Quantum. Founded by Niroop H. Building product engineers since 2023.
            </div>
          </div>
          <Link
            href="/about"
            className="flex-shrink-0 px-6 py-2.5 rounded-xl btn-neon text-sm font-semibold"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
