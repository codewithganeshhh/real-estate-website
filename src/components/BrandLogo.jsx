import React from 'react';

export default function BrandLogo({ size = "default", showSubtitle = true }) {
  // Dimension classes based on size prop
  const iconSize = size === "small" ? "w-7 h-7 sm:w-8 sm:h-8" : size === "large" ? "w-11 h-11 sm:w-12 sm:h-12" : "w-9 h-9 sm:w-10 sm:h-10";
  const titleText = size === "small" ? "text-sm sm:text-base" : size === "large" ? "text-xl sm:text-2xl" : "text-base sm:text-xl";
  const subText = size === "small" ? "text-[7px] sm:text-[8px]" : "text-[8px] sm:text-[9px]";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 group">
      {/* Bespoke Architectural "K" Monogram Emblem */}
      <div className={`${iconSize} shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
        >
          <defs>
            <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#AA820A" />
              <stop offset="100%" stopColor="#6E5005" />
            </linearGradient>
            <linearGradient id="brandGoldFacet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFBE6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="brandEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* 1. Left Vertical Monolithic Pillar (Foundational Column) */}
          <path d="M 18 26 L 34 10 L 34 90 L 18 90 Z" fill="url(#brandGoldGrad)" />
          {/* 3D Bevel Facet on Pillar */}
          <path d="M 34 10 L 40 16 L 40 90 L 34 90 Z" fill="url(#brandGoldFacet)" opacity="0.9" />

          {/* 2. Upper Soaring Tower Wing (Upper Arm of "K") */}
          <path d="M 46 48 L 78 14 L 90 24 L 58 60 Z" fill="url(#brandGoldGrad)" />
          {/* Bevel Facet on Upper Wing */}
          <path d="M 78 14 L 90 24 L 90 16 Z" fill="#FFF9D6" />

          {/* 3. Lower Foundation Strut (Lower Arm of "K") */}
          <path d="M 52 56 L 88 90 L 72 90 L 42 64 Z" fill="url(#brandGoldGrad)" />

          {/* 4. Central Emerald Keystone (IGBC Gold Sustainable Engineering) */}
          <polygon points="45,53 51,47 57,53 51,59" fill="url(#brandEmeraldGrad)" />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold ${titleText} tracking-wider sm:tracking-widest leading-none`}
          style={{ color: '#D4AF37' }}
        >
          KUMAR CONSTRUCTION
        </span>
        {showSubtitle && (
          <span className={`${subText} uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gray-500 dark:text-gray-400 font-mono font-medium mt-1`}>
            Infrastructure &amp; Developments
          </span>
        )}
      </div>
    </div>
  );
}
