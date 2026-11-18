import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/mockData';

export default function ProjectsPage() {
  return (
    <div className="pt-20 pb-20">
      {/* Page Header Banner (Cinematic Ease-in Zoom-Out Effect) */}
      <section className="relative h-[48vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        {/* Cinematic Zoom-Out Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Portfolio - Kumar Developers"
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
              Portfolio
            </h1>
            <div className="flex items-center gap-4 animate-hero-subtitle">
              <div className="w-12 h-px bg-gold inline-block" />
              <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Landmark Infrastructure &amp; Masterplans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm hover:border-gold/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-black/65 backdrop-blur-md text-gold-light border border-gold/40">
                  {project.scale}
                </div>
              </div>

              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-gray-950 dark:text-white mb-1 group-hover:text-gold-dark dark:group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {project.location} • <span className="text-gray-700 dark:text-gray-300">Client: {project.client}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald group-hover:text-gold-dark dark:group-hover:text-gold transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase">
                    {project.scale}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

