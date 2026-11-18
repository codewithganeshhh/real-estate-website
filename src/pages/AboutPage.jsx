import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Quote, 
  MapPin, 
  HardHat, 
  Leaf, 
  Briefcase, 
  ArrowUpRight,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';
import { leadershipData, companyInfo } from '../data/mockData';

export default function AboutPage() {
  const pillars = [
    {
      num: "01",
      title: "Turnkey Civil Engineering",
      desc: "Full-cycle construction from earthwork and seismic foundations to superstructure handover with zero compromise on safety.",
      icon: HardHat,
      colorClasses: {
        borderHover: "hover:border-amber-400/50",
        glow: "hover:shadow-[0_15px_35px_rgba(245,158,11,0.2)]",
        iconBoxHover: "group-hover:bg-gradient-to-br group-hover:from-amber-400/25 group-hover:to-amber-600/10 group-hover:border-amber-400/70 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
        iconColor: "group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:fill-amber-400/50",
        numColor: "text-amber-600 dark:text-amber-400",
        badgeBg: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25"
      },
      tag: "Civil & Structural"
    },
    {
      num: "02",
      title: "Statutory & RERA Diligence",
      desc: "Impeccable regulatory track record across municipal town planning, environmental impact clearances, and statutory approvals.",
      icon: ShieldCheck,
      colorClasses: {
        borderHover: "hover:border-emerald-400/50",
        glow: "hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]",
        iconBoxHover: "group-hover:bg-gradient-to-br group-hover:from-emerald-400/25 group-hover:to-emerald-600/10 group-hover:border-emerald-400/70 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
        iconColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:fill-emerald-400/50",
        numColor: "text-emerald-600 dark:text-emerald-400",
        badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25"
      },
      tag: "100% RERA Diligent"
    },
    {
      num: "03",
      title: "Sustainable Construction",
      desc: "IGBC Gold certified sustainable building techniques, net-zero water recycling, green concrete, and smart energy grids.",
      icon: Leaf,
      colorClasses: {
        borderHover: "hover:border-teal-400/50",
        glow: "hover:shadow-[0_15px_35px_rgba(20,184,166,0.2)]",
        iconBoxHover: "group-hover:bg-gradient-to-br group-hover:from-teal-400/25 group-hover:to-teal-600/10 group-hover:border-teal-400/70 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.35)]",
        iconColor: "group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:fill-teal-400/50",
        numColor: "text-teal-600 dark:text-teal-400",
        badgeBg: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/25"
      },
      tag: "IGBC Gold Standards"
    },
    {
      num: "04",
      title: "Transparent Project PMO",
      desc: "Milestone-driven project governance with transparent BOQs, continuous site audits, and rigorous cost management.",
      icon: Compass,
      colorClasses: {
        borderHover: "hover:border-sky-400/50",
        glow: "hover:shadow-[0_15px_35px_rgba(14,165,233,0.2)]",
        iconBoxHover: "group-hover:bg-gradient-to-br group-hover:from-sky-400/25 group-hover:to-sky-600/10 group-hover:border-sky-400/70 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]",
        iconColor: "group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:fill-sky-400/50",
        numColor: "text-sky-600 dark:text-sky-400",
        badgeBg: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25"
      },
      tag: "Transparent PMO"
    }
  ];

  return (
    <div className="pt-20 pb-20 transition-colors duration-300">
      {/* 1. Hero Header Banner (Exact Greenwich Layout + Cinematic Ease-in Zoom-Out Effect) */}
      <section className="relative h-[48vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        {/* Cinematic Zoom-Out Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="The Firm - Kumar Developers"
            className="w-full h-full object-cover animate-hero-zoom-out"
          />
          {/* Crisp, rich contrast overlays - pure dark cinematic gradient without washed-out white fog */}
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight animate-hero-title drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              The Firm
            </h1>
            <div className="flex items-center gap-4 animate-hero-subtitle">
              <div className="w-12 h-px bg-gold inline-block" />
              <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Bridging Capital &amp; Execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Narrative Section (Clean Split Alignment) */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* Left Column: Redefining Real Value */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-950 dark:text-white leading-tight mb-6">
              Redefining <br />
              <span className="text-emerald-700 dark:text-emerald italic font-serif">Real Value.</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-6" />
            <blockquote className="text-lg sm:text-xl text-gray-800 dark:text-white/80 font-serif italic leading-relaxed">
              &quot;We recognized that true real estate value isn&#x27;t just in land acquisition, but in the intelligent development of communities.&quot;
            </blockquote>
          </div>

          {/* Right Column: OUR ORIGINS & THE VISION & STATS */}
          <div className="space-y-8 sm:space-y-10 text-base sm:text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-gold-dark dark:text-gold uppercase tracking-widest text-xs sm:text-sm mb-3 font-bold font-mono">
                OUR ORIGINS
              </h3>
              <p className="leading-relaxed">
                Established in 2026, <strong className="text-gray-950 dark:text-white font-medium">Kumar Developers</strong> is headquartered in Ranchi, Jharkhand at 301, Prathna Heights, Ratu Road Chowk. Founded by sole owner and Managing Director <strong className="text-gray-950 dark:text-white font-medium">Praful Kumar Sahu</strong>, we operate with a singular focus: <span className="text-gray-950 dark:text-white font-medium">value creation</span>. We are a specialist infrastructure and turnkey civil engineering firm, guiding clients through every stage of development — from concept to completion.
              </p>
            </div>

            <div>
              <h3 className="text-gold-dark dark:text-gold uppercase tracking-widest text-xs sm:text-sm mb-3 font-bold font-mono">
                THE VISION
              </h3>
              <p className="leading-relaxed">
                By combining deep technical engineering expertise with disciplined execution capabilities, we help clients plan, structure, and execute landmark infrastructure projects with confidence. We deliver quality construction and honest guidance, not just reports.
              </p>
            </div>

            {/* Credential Checkpoints Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-gray-200 dark:border-white/10 font-mono">
              <div>
                <span className="block text-3xl sm:text-4xl font-serif text-gray-950 dark:text-white mb-1.5 font-bold">
                  2026
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Established
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-serif text-emerald-700 dark:text-emerald mb-1.5 font-bold">
                  RNC
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Ranchi Headquarters
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Governance / Leadership (Clean 2-Column Split Alignment) */}
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-950 dark:text-white mb-4 sm:mb-6">
                Leadership
              </h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                Guided by the hands-on vision and structural engineering commitment of Founder &amp; Sole Owner Praful Kumar Sahu.
              </p>
            </div>

            {/* Right Column: Praful Kumar Sahu Profile Card (Fills right side, perfectly balanced) */}
            <div className="lg:col-span-7">
              {leadershipData.map((leader, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-12 bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-sm hover:border-gold/30 transition-colors"
                >
                  <div className="w-12 h-1 bg-gold mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-serif text-gray-950 dark:text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-6 font-mono">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Operational Pillars (Interactive Hover-Outline Icon Boxes - Requested in Req 7) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-gray-200 dark:border-white/5">
        <div className="mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold mb-2 font-mono">
            Execution Standards
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-950 dark:text-white">
            Core Operational Pillars
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light max-w-xl mt-2">
            Disciplined execution frameworks delivering zero safety compromises, rigorous compliance, and transparent PMO milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm ${item.colorClasses.borderHover} ${item.colorClasses.glow} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:bg-gray-50/80 dark:hover:bg-[#121212] overflow-hidden`}
              >
                {/* Ambient hover glow spot */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-gold/5 dark:bg-white/[0.03] group-hover:bg-gold/10 dark:group-hover:bg-white/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top: Outline Icon Badge + Pillar Number */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    {/* Outline icon box that fills and becomes colorful on hover */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 ${item.colorClasses.iconBoxHover} transition-all duration-300 flex items-center justify-center`}
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className={`transition-all duration-300 fill-transparent ${item.colorClasses.iconColor} group-hover:scale-110`}
                      />
                    </div>

                    <span className={`text-xs font-mono font-bold tracking-widest ${item.colorClasses.numColor}`}>
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif text-gray-950 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider border ${item.colorClasses.badgeBg}`}>
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                    <span className="text-[10px] sm:text-[11px] font-medium">Standard</span>
                    <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
