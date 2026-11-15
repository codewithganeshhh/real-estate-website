import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 hover:text-emerald transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 flex-1">
          {/* Title Header */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest text-emerald font-bold px-2 py-0.5 rounded bg-emerald/10 border border-emerald/20">
                {project.stage}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {project.category}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 text-sm">
              {project.location} • <span className="text-gray-300">Client: {project.client}</span>
            </p>
          </div>

          {/* Large Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10">
            <img
              src={project.gallery[selectedImage] || project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Overview & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-serif text-white">
                Overview
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 md:border-l md:border-white/10 md:pl-8">
              <h3 className="text-xl font-serif text-white">
                Key Features
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 space-y-1">
                <p>Location: <strong className="text-white font-normal">{project.location}</strong></p>
                <p>Type: <strong className="text-white font-normal">{project.category}</strong></p>
                <p>Client: <strong className="text-white font-normal">{project.client}</strong></p>
              </div>
            </div>
          </div>

          {/* Project Gallery Thumbnails */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-xl font-serif text-white">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-emerald' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
