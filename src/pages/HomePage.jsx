import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AdvisoryPillars from '../components/AdvisoryPillars';
import CoreVerticals from '../components/CoreVerticals';
import { projectsData } from '../data/mockData';

export default function HomePage() {
  const navigate = useNavigate();
  const flagship = projectsData[0]; // Nirvana Valley

  return (
    <div>
      {/* 1. Hero Video Section */}
      <HeroSection />

      {/* 2. Advisory Pillars */}
      <AdvisoryPillars onLearnMore={() => navigate('/about')} />

      {/* 3. Core Verticals Infinite Marquee */}
      <CoreVerticals />

      {/* 4. Flagship Project Highlight Banner */}
      <section className="relative min-h-[500px] sm:min-h-[600px] py-20 sm:py-28 flex items-center overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img
            src={flagship.heroImage}
            alt={flagship.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45 dark:bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-black/30 dark:from-black dark:via-transparent dark:to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full grid md:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <p className="text-emerald-400 dark:text-emerald uppercase tracking-widest text-[11px] sm:text-sm font-bold drop-shadow">
                Flagship Project
              </p>
              <span className="text-white/60 hidden sm:inline">|</span>
              <p className="text-gray-200 uppercase tracking-widest text-[11px] sm:text-sm font-medium drop-shadow">
                Client: {flagship.client}
              </p>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-6 sm:mb-8 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {flagship.title}
            </h2>

            <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-8 sm:mb-10">
              <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-black/40 backdrop-blur-md rounded-full text-xs sm:text-sm text-white border border-emerald/40 shadow-sm">
                200 Acres
              </div>
              <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-black/40 backdrop-blur-md rounded-full text-xs sm:text-sm text-white border border-emerald/40 shadow-sm">
                Nilambur
              </div>
            </div>

            <Link
              to={`/projects/${flagship.id}`}
              className="bg-emerald text-white px-6 sm:px-8 py-3.5 sm:py-4 uppercase tracking-widest text-xs sm:text-sm font-bold hover:bg-emerald-dark transition-colors shadow-lg shadow-emerald/25 inline-block"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

