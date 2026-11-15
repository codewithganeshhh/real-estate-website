import React from 'react';
import { ArrowRight, Building2, Handshake, Leaf, ArrowUpRight } from 'lucide-react';

export default function AdvisoryPillars({ onLearnMore }) {
  const cards = [
    {
      id: "expertise",
      title: "Deep Expertise",
      desc: "Technical consulting and turnkey civil construction backed by decades of infrastructure development experience — from site feasibility to full project delivery.",
      footer: "20+ Years Track Record",
      icon: Building2,
      accentBorder: "border-emerald",
      borderHover: "hover:border-emerald-400/50",
      glow: "hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]",
      iconHover: "group-hover:text-emerald-400 group-hover:fill-emerald-400/50 group-hover:bg-emerald-400/15 group-hover:border-emerald-400/70 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      titleColor: "text-emerald group-hover:text-emerald-300",
      tagColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
    },
    {
      id: "client",
      title: "Client-Focused",
      desc: "We build long-term partnerships with our clients, delivering honest counsel, transparent BOQs, and disciplined execution strategies at every stage.",
      footer: "100% Milestone Delivery",
      icon: Handshake,
      accentBorder: "border-gold",
      borderHover: "hover:border-amber-400/50",
      glow: "hover:shadow-[0_15px_35px_rgba(245,158,11,0.2)]",
      iconHover: "group-hover:text-amber-400 group-hover:fill-amber-400/50 group-hover:bg-amber-400/15 group-hover:border-amber-400/70 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
      titleColor: "text-gold group-hover:text-amber-300",
      tagColor: "text-amber-400 border-amber-400/20 bg-amber-400/10"
    },
    {
      id: "standards",
      title: "Sustainable Standards",
      desc: "Next-generation engineering combining seismic-resilient structural frameworks, smart MEP planning, and IGBC Gold sustainable construction.",
      footer: "IGBC Gold Pre-Certified",
      icon: Leaf,
      accentBorder: "border-teal-400",
      borderHover: "hover:border-teal-400/50",
      glow: "hover:shadow-[0_15px_35px_rgba(20,184,166,0.2)]",
      iconHover: "group-hover:text-teal-400 group-hover:fill-teal-400/50 group-hover:bg-teal-400/15 group-hover:border-teal-400/70 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.35)]",
      titleColor: "text-teal-400 group-hover:text-teal-300",
      tagColor: "text-teal-400 border-teal-400/20 bg-teal-400/10"
    }
  ];

  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 md:px-12 relative bg-slate-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        {/* Editorial Headline matching the authentic typography hierarchy */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.3] text-gray-600 dark:text-gray-400 mb-10 md:mb-16 max-w-5xl">
          <span className="text-gray-950 dark:text-white">Kumar Construction</span> delivers{' '}
          <span className="text-gray-950 dark:text-white font-medium">turnkey engineering</span>,{' '}
          <span className="text-gray-950 dark:text-white font-medium">specialist advisory</span>, and{' '}
          <span className="text-gray-950 dark:text-white font-medium">technical consultation</span> for landmark infrastructure development projects.
        </h2>

        {/* 3 Refined Architectural Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isLast = idx === 2;

            return (
              <div
                key={card.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm ${card.borderHover} ${card.glow} hover:-translate-y-2 hover:bg-gray-50 dark:hover:bg-[#121212] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Subtle ambient light spot */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/5 dark:bg-white/[0.03] group-hover:bg-gold/10 dark:group-hover:bg-white/[0.08] rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top row: Outline icon box + top accent bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl border border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 ${card.iconHover} transition-all duration-300 flex items-center justify-center`}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="transition-all duration-300 fill-transparent group-hover:scale-110"
                      />
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider border ${card.tagColor}`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-serif mb-3 transition-colors ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                    {card.footer}
                  </span>

                  {isLast ? (
                    <button
                      onClick={onLearnMore}
                      className="group/btn inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-dark dark:text-gold hover:text-emerald dark:hover:text-white transition-colors font-semibold"
                    >
                      <span>The Firm</span>
                      <ArrowRight size={13} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <ArrowUpRight size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-emerald dark:group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
