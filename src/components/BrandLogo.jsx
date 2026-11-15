import React from 'react';

export default function BrandLogo({ size = "default", showSubtitle = true }) {
  // Dimension classes based on size prop
  const iconHeight = size === "small" ? "h-7 sm:h-8" : size === "large" ? "h-11 sm:h-12" : "h-9 sm:h-10";
  const titleText = size === "small" ? "text-sm sm:text-base" : size === "large" ? "text-xl sm:text-2xl" : "text-base sm:text-xl";
  const subText = size === "small" ? "text-[7px] sm:text-[8px]" : "text-[8px] sm:text-[9px]";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 group">
      {/* Pristine Gold Architectural Emblem (Exact Reference Shape - No Circle/No Blob) */}
      <div className={`${iconHeight} aspect-[87/145] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="144 84 87 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
        >
          <path
            d="M 150.695312 169.078125 L 151.207031 199 L 151.722656 228.921875 L 149.660156 228.921875 L 150.171875 199 Z M 156.144531 165.597656 L 156.65625 197.261719 L 157.171875 228.921875 L 155.109375 228.921875 L 155.628906 197.261719 Z M 166.527344 102.089844 L 167.042969 165.507812 L 167.558594 228.921875 L 165.496094 228.921875 L 166.011719 165.507812 Z M 171.664062 99.808594 L 172.175781 164.363281 L 172.691406 228.921875 L 170.628906 228.921875 L 171.144531 164.363281 Z M 176.800781 96.609375 L 177.3125 162.765625 L 177.828125 228.921875 L 175.765625 228.921875 L 176.277344 162.765625 Z M 181.9375 94.554688 L 182.449219 161.738281 L 182.964844 228.921875 L 180.902344 228.921875 L 181.414062 161.738281 Z M 187.070312 91.816406 L 187.582031 160.371094 L 188.097656 228.921875 L 186.035156 228.921875 L 186.546875 160.371094 Z M 208.75 139.40625 L 209.261719 184.164062 L 209.777344 228.921875 L 207.714844 228.921875 L 208.226562 184.164062 Z M 213.996094 142.605469 L 214.511719 185.761719 L 215.023438 228.921875 L 212.960938 228.921875 L 213.476562 185.761719 Z M 219.246094 145.457031 L 219.761719 187.191406 L 220.273438 228.925781 L 218.210938 228.925781 L 218.726562 187.191406 Z M 224.496094 147.738281 L 225.007812 188.328125 L 225.523438 228.921875 L 223.460938 228.921875 L 223.972656 188.328125 Z M 229.746094 149.566406 L 230.261719 189.246094 L 230.773438 228.925781 L 228.714844 228.925781 L 229.226562 189.246094 Z M 193.03125 89.433594 L 194.0625 146.902344 L 191.996094 146.902344 L 192.511719 118.167969 Z M 198.253906 86.640625 L 199.285156 144.25 L 197.222656 144.25 L 197.734375 115.445312 Z M 203.476562 84.527344 L 203.988281 112.933594 L 204.503906 141.335938 L 202.445312 141.335938 L 202.957031 112.933594 Z M 145.246094 171.390625 L 145.757812 200.15625 L 146.273438 228.921875 L 144.214844 228.921875 L 144.726562 200.15625 Z M 145.246094 171.390625"
            fill="#D4AF37"
            fillRule="evenodd"
          />
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

