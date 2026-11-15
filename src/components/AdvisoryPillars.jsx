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
      topBorder: "border-t-4 border-t-emerald-600 dark:border-t-emerald-400",
      iconBox: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-black",
      titleColor: "text-emerald-950 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-200",
      tagColor: "text-emerald-900 border-emerald-300 bg-emerald-100 dark:text-emerald-300 dark:border-emerald-400/30 dark:bg-emerald-500/15",
      borderHover: "hover:border-emerald-500 dark:hover:border-emerald-400/60",
      glow: "hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)]",
      footerColor: "text-emerald-800 dark:text-emerald-400 font-semibold"
    },
    {
      id: "client",
      title: "Client-Focused",
      desc: "We build long-term partnerships with our clients, delivering honest counsel, transparent BOQs, and disciplined execution strategies at every stage.",
      footer: "100% Milestone Delivery",
      icon: Handshake,
      topBorder: "border-t-4 border-t-amber-600 dark:border-t-gold",
      iconBox: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-gold group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-black",
      titleColor: "text-amber-950 dark:text-amber-300 group-hover:text-amber-700 dark:group-hover:text-amber-200",
      tagColor: "text-amber-950 border-amber-300 bg-amber-100 dark:text-gold dark:border-gold/30 dark:bg-amber-500/15",
      borderHover: "hover:border-amber-500 dark:hover:border-gold/60",
      glow: "hover:shadow-[0_20px_45px_rgba(217,119,6,0.18)]",
      footerColor: "text-amber-800 dark:text-gold font-semibold"
    },
    {
      id: "standards",
      title: "Sustainable Standards",
      desc: "Next-generation engineering combining seismic-resilient structural frameworks, smart MEP planning, and IGBC Gold sustainable construction.",
      footer: "IGBC Gold Pre-Certified",
      icon: Leaf,
      topBorder: "border-t-4 border-t-teal-600 dark:border-t-teal-400",
      iconBox: "border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-black",
      titleColor: "text-teal-950 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-200",
      tagColor: "text-teal-950 border-teal-300 bg-teal-100 dark:text-teal-300 dark:border-teal-400/30 dark:bg-teal-500/15",
      borderHover: "hover:border-teal-500 dark:hover:border-teal-400/60",
      glow: "hover:shadow-[0_20px_45px_rgba(13,148,136,0.18)]",
      footerColor: "text-teal-800 dark:text-teal-300 font-semibold"
    }
  ];

  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 md:px-12 relative bg-gray-50/80 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        {/* Editorial Headline matching the authentic typography hierarchy */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.3] text-gray-700 dark:text-gray-300 mb-10 md:mb-16 max-w-5xl">
          <span className="text-gray-950 dark:text-white font-bold">Kumar Construction</span> delivers{' '}
          <span className="text-emerald-800 dark:text-emerald font-semibold">turnkey engineering</span>,{' '}
          <span className="text-amber-800 dark:text-gold font-semibold">specialist advisory</span>, and{' '}
          <span className="text-teal-800 dark:text-teal-400 font-semibold">technical consultation</span> for landmark infrastructure development projects.
        </h2>

        {/* 3 Refined Architectural Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isLast = idx === 2;

            return (
              <div
                key={card.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 ${card.topBorder} shadow-sm hover:shadow-2xl ${card.borderHover} ${card.glow} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Top row: Colored Icon Box + Pillar Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl border ${card.iconBox} transition-all duration-300 flex items-center justify-center shadow-sm`}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${card.tagColor}`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-serif font-bold mb-3 transition-colors ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-light text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${card.footerColor}`}>
                    {card.footer}
                  </span>

                  {isLast ? (
                    <button
                      onClick={onLearnMore}
                      className="group/btn inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-teal-800 dark:text-gold hover:text-teal-950 dark:hover:text-white transition-colors font-bold font-mono cursor-pointer"
                    >
                      <span>The Firm</span>
                      <ArrowRight size={13} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <ArrowUpRight size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-emerald-700 dark:group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
