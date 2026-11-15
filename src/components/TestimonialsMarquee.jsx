import React from 'react';
import { Star, Quote, MapPin, Sparkles, User } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

export default function TestimonialsMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeCards = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-[#070707] relative overflow-hidden w-full max-w-full border-t border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-gold-dark dark:text-gold" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold font-mono">
              Client Endorsements
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-950 dark:text-white tracking-tight">
            Voices of Trust
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light max-w-xl mt-2 leading-relaxed">
            From premier commercial infrastructure in Ranchi to landmark residential developments across Jharkhand and beyond.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-end">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <p className="text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs uppercase tracking-widest font-mono">
            Auto-scrolling • Hover to pause
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track Container with vertical padding to prevent hover top cut-off */}
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Soft edge blur fades on left & right adapting to light and dark theme */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-gray-50 dark:from-[#070707] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-gray-50 dark:from-[#070707] to-transparent z-10" />

        {/* Marquee Track: pt-6 pb-8 gives ample headroom so cards NEVER get clipped when hovered */}
        <div className="animate-marquee-track flex gap-4 sm:gap-6 pt-6 pb-8">
          {marqueeCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[300px] sm:w-[380px] md:w-[420px] rounded-2xl bg-white dark:bg-[#0E0E0E] border border-gray-200/80 dark:border-white/10 p-6 sm:p-7 shrink-0 shadow-sm hover:shadow-2xl hover:border-gold/70 dark:hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative cursor-default"
            >
              {/* Subtle elegant quotation mark in top-right */}
              <div className="absolute top-6 right-6 text-gray-200 dark:text-white/10 pointer-events-none transition-colors group-hover:text-gold/25">
                <Quote size={32} className="stroke-[1.5]" />
              </div>

              <div>
                {/* 5 Gold Rating Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-amber-400 text-amber-400 shrink-0"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info with Default Character Avatar */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-3.5">
                {/* Default Character Avatar Icon */}
                <div className="w-11 h-11 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-300 dark:border-white/15 group-hover:border-gold/70 dark:group-hover:border-gold/60 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-gold-dark dark:group-hover:text-gold transition-all duration-300 shrink-0 shadow-sm">
                  <User size={20} className="stroke-[1.8]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-serif font-semibold text-gray-950 dark:text-white truncate group-hover:text-gold-dark dark:group-hover:text-gold transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light truncate">
                    {item.role} • <span className="text-gray-700 dark:text-gray-300">{item.company}</span>
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 dark:text-emerald mt-0.5">
                    <MapPin size={11} className="shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
