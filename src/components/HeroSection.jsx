import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[100vh] w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Video Canvas - Crisp, Bright & Vivid (No washed-out white fog) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-video.mp4"
          className="w-full h-full object-cover scale-[1.22] sm:scale-[1.25] pointer-events-none"
          style={{
            transformOrigin: 'center 25%',
          }}
        />

        {/* Cinematic dark scrim overlays so the video is deep, vivid, and crystal clear */}
        <div className="absolute inset-0 bg-black/35 dark:bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 z-10" />
        {/* Soft bottom transition into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent dark:from-[#050505] z-10" />
      </div>

      {/* Main Center Content with crisp high-contrast luxury typography */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
        {/* Established Tag */}
        <p className="text-emerald-400 dark:text-[#4ADE80] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-sm mb-4 sm:mb-6 font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Est. 2023 • Bengaluru
        </p>

        {/* Majestic Headline */}
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-none tracking-tight mb-6 sm:mb-8 select-none">
          <span className="block overflow-hidden">
            <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              BUILDING
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-emerald drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              LEGACY
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] font-medium text-sm sm:text-lg md:text-xl leading-relaxed px-2">
          Building Future-Ready Infrastructure. Creating Enduring Value.
        </p>
      </div>

      {/* Bottom Scroll to Explore Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-12 md:left-20 z-20 flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs uppercase tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        <div className="w-8 sm:w-12 h-px bg-current" />
        <button
          onClick={scrollToExplore}
          className="hover:text-gold transition-colors flex items-center gap-2"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
