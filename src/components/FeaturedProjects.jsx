import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import { projectsData } from '../data/mockData';

export default function FeaturedProjects() {
  // 6 Projects in total (3x2 grid in 3 columns)
  const featured = projectsData.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-gold-dark dark:text-gold" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold font-mono">
              Signature Portfolio
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-950 dark:text-white tracking-tight">
            Landmark Developments
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light max-w-xl mt-2 leading-relaxed">
            Institutional civil infrastructure, turnkey commercial complexes, and luxury residential projects across Jharkhand and flagship destinations.
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald hover:text-gold-dark dark:hover:text-gold transition-colors font-mono self-start md:self-end"
        >
          <span>Explore All Projects</span>
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {/* 3-Column Grid (3-3 krke 6 projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featured.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group rounded-2xl overflow-hidden bg-white dark:bg-[#0E0E0E] border border-gray-200/90 dark:border-white/10 shadow-sm hover:border-gold/70 dark:hover:border-gold/60 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Project Image Banner */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black/40">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Top-Left Floating Stage & Category Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-400/30 font-mono">
                  {project.stage}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md text-gray-200 border border-white/15 font-mono">
                  {project.category}
                </span>
              </div>

              {/* Top-Right Scale Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-medium bg-black/65 backdrop-blur-md text-gold-light border border-gold/40">
                {project.scale}
              </div>

              {/* Bottom Project Title overlay on image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white group-hover:text-gold-light transition-colors drop-shadow-md font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald font-mono mb-2.5">
                  <MapPin size={12} className="shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>

                {/* Brief Tagline */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Key Features Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.features.slice(0, 3).map((feat, fidx) => (
                    <span
                      key={fidx}
                      className="text-[10px] sm:text-[11px] text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/5 font-mono"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold-dark dark:text-gold group-hover:text-emerald-700 dark:group-hover:text-emerald transition-colors font-mono">
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-light truncate max-w-[130px]">
                  {project.client}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
