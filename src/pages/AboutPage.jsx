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
            alt="The Firm - Kumar Construction"
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

      {/* 2. Editorial Narrative Section (Redesigned: High-End Architectural Suite) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Philosophy, Headline & Luxury Quote Box */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold dark:text-gold font-mono font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-gold inline-block animate-pulse" />
                Institutional Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-950 dark:text-white leading-[1.18] tracking-tight">
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 italic font-serif">
                  Real Value.
                </span>
              </h2>
            </div>

            {/* Architectural Pull Quote Box */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D0D0D] border-l-4 border-l-gold border-y border-r border-gray-200 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <Quote className="w-8 h-8 text-gold/30 mb-3" />
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-serif italic leading-relaxed mb-4">
                &quot;We recognized that true real estate value isn&#x27;t just in land acquisition, but in the intelligent, disciplined development of enduring communities.&quot;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-white/10 text-xs font-mono">
                <span className="font-bold text-gray-950 dark:text-white uppercase tracking-wider">Praful Kumar Sahu</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-emerald-600 dark:text-emerald-400">Founder &amp; MD</span>
              </div>
            </div>

            {/* Quick Trust Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-light">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>Direct single-source developer accountability across Jharkhand</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-light">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>Zero hidden escalations — milestone-governed stage BOQs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-light">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>Certified seismic-resilient structural engineering standards</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Structured Architectural Origins & Vision Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1: Origins & Corporate Headquarters */}
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-gold">
                  <Building2 size={24} strokeWidth={1.8} />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                  Ranchi HQ • Jharkhand
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-950 dark:text-white mb-2 group-hover:text-gold transition-colors">
                Our Origins &amp; Foundation
              </h3>
              
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4">
                <MapPin size={13} />
                <span>301, Prathna Heights, Ratu Road Chowk, Ranchi – 834001</span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-5">
                Established in 2026, <strong className="text-gray-950 dark:text-white font-medium">Kumar Construction</strong> operates with an unyielding mandate: <strong className="text-gray-950 dark:text-white font-medium">real value creation</strong>. Founded by sole owner and Managing Director <strong className="text-gray-950 dark:text-white font-medium">Praful Kumar Sahu</strong>, we bridge strategic capital syndication with boots-on-the-ground turnkey engineering, guiding client projects from site feasibility through full commissioning.
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/5">
                  Turnkey Infrastructure
                </span>
                <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/5">
                  RERA Compliant Masterplans
                </span>
                <span className="px-2.5 py-1 rounded bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/5">
                  Civil Contracting
                </span>
              </div>
            </div>

            {/* Card 2: Technical Vision */}
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                  <Compass size={24} strokeWidth={1.8} />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  Disciplined Engineering
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-950 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                The Technical Vision
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-5">
                By combining advanced structural engineering with disciplined project governance, we empower institutional and private developers to execute landmark developments with absolute certainty. We do not provide abstract reports; we deliver physical structural excellence, transparent BOQ stage billing, and end-to-end statutory approvals.
              </p>

              {/* 4 Key Milestone Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-gray-100 dark:border-white/5">
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif font-bold text-gray-950 dark:text-white">
                    2026
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                    Established
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif font-bold text-emerald-600 dark:text-emerald-400">
                    RNC
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                    Ranchi HQ
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif font-bold text-amber-500 dark:text-gold">
                    100%
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                    Milestone BOQs
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-serif font-bold text-teal-600 dark:text-teal-400">
                    Zero
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                    Compromise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Governance / Leadership (Grand Executive Suite) */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-gray-50/70 dark:bg-black/60 border-b border-gray-200 dark:border-white/5">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold dark:text-gold font-mono font-bold mb-3">
              <Award size={14} className="text-gold" />
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gray-950 dark:text-white leading-tight mb-4">
              Leadership
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Guided by the hands-on vision and structural engineering commitment of Founder &amp; Sole Owner Praful Kumar Sahu.
            </p>
          </div>

          {/* Full-Width Executive Profile Card Suite */}
          <div className="rounded-3xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-12 items-stretch">
              {/* Left Column (5 Cols): Executive Visual Badge & Key Credentials */}
              <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#111111] dark:via-[#0c0c0c] dark:to-[#080808] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/10 flex flex-col justify-between">
                <div>
                  {/* Executive Monogram & Active Status Pill */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/40 flex items-center justify-center text-gold font-serif text-2xl sm:text-3xl font-bold shadow-md">
                      PKS
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Active Site Supervision
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-950 dark:text-white mb-2">
                    Praful Kumar Sahu
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-bold mb-6">
                    Founder, Sole Owner &amp; Managing Director
                  </p>

                  <div className="w-14 h-1 bg-gold mb-6" />

                  {/* Verified Credentials Pills */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-gray-700 dark:text-gray-300">
                      <ShieldCheck size={16} className="text-gold flex-shrink-0" />
                      <span>Sole Ownership &amp; Direct Executive Authority</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-mono text-gray-700 dark:text-gray-300">
                      <Building2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Turnkey Civil Infrastructure Specialist</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-mono text-gray-700 dark:text-gray-300">
                      <Award size={16} className="text-teal-500 flex-shrink-0" />
                      <span>RERA &amp; Municipal Diligence Authority</span>
                    </div>
                  </div>
                </div>

                {/* Direct Executive Contact Bar */}
                <div className="pt-8 mt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500 dark:text-gray-400">Headquarters</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Ranchi, Jharkhand</span>
                </div>
              </div>

              {/* Right Column (7 Cols): Executive Narrative & 3 Core Commitments */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-mono font-bold mb-4">
                    Founder&#x27;s Profile &amp; Governance Mandate
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8">
                    Praful Kumar Sahu is the visionary founder and sole owner of Kumar Construction, leading the firm with uncompromising dedication to engineering excellence, structural integrity, and transparent project delivery. Based in Ranchi, Jharkhand, his hands-on leadership spans turnkey civil engineering, high-rise residential &amp; commercial developments, and sustainable infrastructure across the region.
                  </p>

                  <h5 className="text-xs uppercase tracking-[0.2em] text-gold dark:text-gold font-mono font-bold mb-4">
                    Three Non-Negotiable Commitments
                  </h5>

                  {/* 3 Interactive Commitment Mini-Cards */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/5 hover:border-gold/40 transition-colors">
                      <div className="text-gold font-mono text-xs font-bold mb-1">01</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Direct Oversight</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        Personal site supervision with certified third-party material testing.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/5 hover:border-emerald-500/40 transition-colors">
                      <div className="text-emerald-500 font-mono text-xs font-bold mb-1">02</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Zero Escalation</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        Itemized BOQs with milestone stage disbursements and zero surprises.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/5 hover:border-teal-500/40 transition-colors">
                      <div className="text-teal-500 font-mono text-xs font-bold mb-1">03</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Structural Rigor</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        Seismic-resilient RCC frameworks built to endure across generations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature / Connect Row */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-serif font-bold text-sm">
                      KC
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold text-gray-950 dark:text-white">
                        Executive Office of the Sole Owner
                      </span>
                      <span className="block text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                        Kumar Construction • Ranchi, Jharkhand
                      </span>
                    </div>
                  </div>

                  <a
                    href="#/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-gold dark:hover:bg-gold hover:text-black dark:hover:text-black transition-all shadow-md group cursor-pointer"
                  >
                    <span>Consult with Leadership</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
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
