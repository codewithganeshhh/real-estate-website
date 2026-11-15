import React from 'react';
import { projectsData } from '../data/mockData';

export default function ProjectsSection({ onOpenCaseStudy }) {
  const flagship = projectsData[0]; // Nirvana Valley
  const otherProject = projectsData[1]; // Skygarden Villas

  return (
    <div id="projects">
      {/* 1. Flagship Section (Identical to live site) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={flagship.heroImage}
            alt={flagship.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full grid md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-emerald uppercase tracking-widest text-xs sm:text-sm font-bold drop-shadow-lg">
                Flagship Project
              </p>
              <span className="text-white/40">|</span>
              <p className="text-white/70 uppercase tracking-widest text-xs sm:text-sm drop-shadow-lg">
                Client: {flagship.client}
              </p>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white mb-8">
              {flagship.title}
            </h2>

            <div className="flex gap-4 mb-10">
              <div className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white border border-emerald/30">
                200 Acres
              </div>
              <div className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white border border-emerald/30">
                Nilambur
              </div>
            </div>

            <button
              onClick={() => onOpenCaseStudy(flagship)}
              className="bg-emerald text-white px-8 py-4 uppercase tracking-widest text-xs sm:text-sm font-bold hover:bg-emerald-dark transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] inline-block"
            >
              View Case Study
            </button>
          </div>
        </div>
      </section>

      {/* 2. Portfolio / Landmark Developments Section */}
      <section className="py-28 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white">
            Landmark Developments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/10 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald border border-emerald/30">
                    {project.stage}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md text-gray-300 border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    {project.location} • <span className="text-gray-300">Client: {project.client}</span>
                  </p>
                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feat, fidx) => (
                      <span key={fidx} className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="text-xs uppercase tracking-widest font-bold text-emerald hover:text-white transition-colors"
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
