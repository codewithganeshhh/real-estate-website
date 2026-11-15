import React from 'react';
import { coreVerticals } from '../data/mockData';

export default function CoreVerticals() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeCards = [...coreVerticals, ...coreVerticals];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A] relative overflow-hidden w-full max-w-full border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-8 md:mb-12 flex flex-col sm:flex-row justify-between sm:items-end gap-3 sm:gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold mb-1.5 font-mono">
            Practice Areas
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white">
            Expertise
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <p className="text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs uppercase tracking-widest font-mono">
            Auto-scrolling • Hover to pause
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Soft edge blur fades on left & right adapting to light and dark */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-28 bg-gradient-to-r from-white dark:from-[#0A0A0A] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-28 bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent z-10" />

        {/* Marquee Track with predictable card sizes */}
        <div className="animate-marquee-track flex gap-4 sm:gap-6 pb-4">
          {marqueeCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[260px] sm:w-[320px] md:w-[360px] h-[380px] sm:h-[440px] md:h-[460px] relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 shrink-0"
            >
              {/* Copyright-free Unsplash photography */}
              <img
                src={item.image}
                alt={`${item.title} ${item.subtitle}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop";
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                <span className="text-xs font-mono text-emerald tracking-widest font-bold">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-emerald transition-colors drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-serif text-white/80 italic mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-300 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Accent */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 rounded-xl transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
