import React from 'react';
import { leadershipData } from '../data/mockData';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-2">
          The Firm
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald mb-4">
          Bridging Capital & Execution
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-8">
          Redefining Real Value.
        </h2>
        <blockquote className="border-l-2 border-gold pl-6 py-2 text-lg sm:text-2xl font-serif italic text-gray-300 leading-relaxed max-w-3xl">
          "We recognized that true real estate value isn't just in land acquisition, but in the intelligent development of enduring communities."
        </blockquote>
      </div>

      {/* Origins & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h3 className="text-2xl font-serif text-white mb-4">
            Our Origins
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Established in 2026, <strong className="text-white font-medium">Kumar Developers</strong> is headquartered in Ranchi, Jharkhand. We operate with a singular focus: <strong className="text-white font-medium">value creation</strong>. We are a specialist infrastructure and turnkey construction firm, guiding clients through every stage of development — from concept to completion.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-white mb-4">
            The Vision
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
            By combining deep technical engineering expertise with strategic advisory capabilities, we help clients plan, structure, and execute infrastructure projects with confidence. We deliver guidance and disciplined execution, not just reports.
          </p>
          <div className="flex items-center gap-10 font-mono text-xs">
            <div>
              <span className="block text-2xl font-serif font-bold text-white">2026</span>
              <span className="text-gray-400">Established</span>
            </div>
            <div className="border-l border-white/10 pl-10">
              <span className="block text-2xl font-serif font-bold text-emerald">RNC</span>
              <span className="text-gray-400">Ranchi Headquarters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div>
        <div className="mb-12">
          <h3 className="text-3xl sm:text-4xl font-serif text-white mb-2">
            Leadership
          </h3>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Guided by decades of experience in finance, real estate, and construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((leader, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-gold/30 transition-all"
            >
              <h4 className="text-2xl font-serif text-white mb-1">
                {leader.name}
              </h4>
              <p className="text-xs uppercase tracking-wider text-emerald font-semibold mb-4">
                {leader.role}
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
