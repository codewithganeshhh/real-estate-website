import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Building, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/mockData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald transition-colors font-medium font-mono"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Title & Metadata */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald font-bold px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald/10 border border-emerald-300 dark:border-emerald/20 font-mono">
              {project.stage}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-mono">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-gray-950 dark:text-white mb-2 sm:mb-3">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap items-center gap-2">
            <MapPin size={15} className="text-emerald-700 dark:text-emerald shrink-0" />
            <span>{project.location}</span>
            <span className="text-gray-300 dark:text-white/20 hidden sm:inline">•</span>
            <span>Client: <strong className="text-gray-950 dark:text-white">{project.client}</strong></span>
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="space-y-4 mb-16">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black shadow-lg">
            <img
              src={project.gallery[selectedImage] || project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover animate-hero-zoom-out"
            />
          </div>

          {/* Thumbnail selector */}
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-28 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  selectedImage === idx ? 'border-emerald-600 dark:border-emerald scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Overview & Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-gray-200 dark:border-white/10 mb-16">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-serif text-gray-950 dark:text-white">
              Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div className="space-y-6 md:border-l md:border-gray-200 dark:md:border-white/10 md:pl-8">
            <div>
              <h2 className="text-xl font-serif text-gray-950 dark:text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-700 dark:text-emerald shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <p>Location: <strong className="text-gray-950 dark:text-white font-medium">{project.location}</strong></p>
              <p>Type: <strong className="text-gray-950 dark:text-white font-medium">{project.category}</strong></p>
              <p>Client: <strong className="text-gray-950 dark:text-white font-medium">{project.client}</strong></p>
            </div>
          </div>
        </div>

        {/* Project Gallery Full Grid */}
        <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-gray-200 dark:border-white/10 mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-serif text-gray-950 dark:text-white">
            Project Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm bg-gray-100 dark:bg-black">
                <img src={img} alt={`${project.title} gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-gray-950 dark:text-white mb-1">
              Interested in {project.title}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light">
              Connect with our advisory desk for confidential masterplan briefs and partnership terms.
            </p>
          </div>
          <Link
            to={`/contact?project=${encodeURIComponent(project.title)}`}
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 rounded-lg text-xs uppercase tracking-widest font-bold text-black bg-gold hover:bg-gold-light transition-all shrink-0 shadow-md shadow-gold/20"
          >
            Inquire For This Project
          </Link>
        </div>
      </div>
    </div>
  );
}
