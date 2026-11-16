import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  FileCheck, 
  Award, 
  Compass, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/mockData';

const serviceMeta = {
  'infrastructure-advisory': {
    index: '01',
    category: 'Masterplanning & Civil',
    icon: Building2,
    description: 'Full-cycle strategic governance, statutory clearances, and capital structuring for large-scale township and masterplanned developments.',
    cardHover: 'hover:border-amber-400/50 hover:shadow-[0_15px_35px_rgba(245,158,11,0.18)]',
    iconBoxHover: 'group-hover:border-amber-400/70 group-hover:bg-amber-400/15 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]',
    iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:fill-amber-400/60'
  },
  'feasibility-advisory': {
    index: '02',
    category: 'Due Diligence & Site Diligence',
    icon: FileCheck,
    description: 'Comprehensive geotechnical review, site diligence, municipal zoning verification, and economic viability modeling before land acquisition.',
    cardHover: 'hover:border-emerald-400/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]',
    iconBoxHover: 'group-hover:border-emerald-400/70 group-hover:bg-emerald-400/15 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:fill-emerald-400/60'
  },
  'investment-capital': {
    index: '03',
    category: 'Capital Advisory & Syndication',
    icon: Award,
    description: 'Structuring private equity participation, institutional debt syndication, and structured financial stacks designed for commercial and high-density assets.',
    cardHover: 'hover:border-gold/50 hover:shadow-[0_15px_35px_rgba(212,175,55,0.18)]',
    iconBoxHover: 'group-hover:border-gold/70 group-hover:bg-gold/15 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]',
    iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:text-gold-dark dark:group-hover:text-gold group-hover:fill-gold/60'
  },
  'market-entry': {
    index: '04',
    category: 'Strategic Expansion',
    icon: Compass,
    description: 'Market expansion roadmaps, regional joint ventures, and municipal navigation for national builders, regional consortiums, and NRI developers.',
    cardHover: 'hover:border-sky-400/50 hover:shadow-[0_15px_35px_rgba(14,165,233,0.18)]',
    iconBoxHover: 'group-hover:border-sky-400/70 group-hover:bg-sky-400/15 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:fill-sky-400/60'
  },
  'corporate-structuring': {
    index: '05',
    category: 'Governance & Legal Frameworks',
    icon: Layers,
    description: 'Special Purpose Vehicle (SPV) formation, joint development agreements (JDA), equity waterfall structuring, and statutory governance for partnerships.',
    cardHover: 'hover:border-purple-400/50 hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)]',
    iconBoxHover: 'group-hover:border-purple-400/70 group-hover:bg-purple-400/15 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:fill-purple-400/60'
  }
};

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedDurations, setSelectedDurations] = useState({
    'infrastructure-advisory': '1 Month',
    'feasibility-advisory': '1 Month',
    'investment-capital': '1 Month',
    'market-entry': '1 Month',
    'corporate-structuring': '1 Month'
  });

  const durationOptions = ['1 Month', '3 Months', '6 Months', '1 Year'];

  const handleDurationChange = (serviceId, duration) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [serviceId]: duration
    }));
  };

  const handleSelectService = (serviceTitle, duration) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}&duration=${encodeURIComponent(duration)}`);
  };

  return (
    <div className="pt-20 pb-20 transition-colors duration-300">
      {/* Page Header Banner */}
      <section className="relative h-[48vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Services - Kumar Construction"
            className="w-full h-full object-cover animate-hero-zoom-out"
          />
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight animate-hero-title drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Services
            </h1>
            <div className="flex items-center gap-4 animate-hero-subtitle">
              <div className="w-12 h-px bg-gold inline-block" />
              <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Advisory Retainers, Feasibility &amp; Project Management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Box Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold dark:text-gold font-mono font-semibold mb-2">
            Advisory Retainers &amp; Mandates
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-950 dark:text-white leading-tight mb-4">
            Specialist Engagements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Institutional-grade advisory, geotechnical feasibility, and capital structuring engagements designed for land owners, infrastructure developers, and institutional investors.
          </p>
        </div>

        {/* 2-Column Modern Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const activeDuration = selectedDurations[service.id] || '1 Month';
            const price = service.pricing[activeDuration];
            const meta = serviceMeta[service.id] || {
              index: `0${idx + 1}`,
              category: 'Advisory',
              icon: Building2,
              description: 'Specialist civil and infrastructure consulting.',
              cardHover: 'hover:border-gold/40 hover:shadow-xl',
              iconBoxHover: 'group-hover:border-gold/60 group-hover:bg-gold/15',
              iconColor: 'text-gray-600 dark:text-gray-400 fill-transparent group-hover:fill-gold group-hover:text-gold'
            };
            const Icon = meta.icon;
            const isLast = idx === servicesData.length - 1;

            return (
              <div
                key={service.id}
                className={`p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm ${meta.cardHover} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isLast ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full' : ''
                }`}
              >
                <div>
                  {/* Card Top: Index, Category & Interactive Fillable Logo */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-xs font-bold text-gold">
                        {meta.index}
                      </span>
                      <span className="text-gray-300 dark:text-white/20">•</span>
                      <span className="text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
                        {meta.category}
                      </span>
                    </div>

                    {/* Logo/Icon Container with Color Fill Hover Effect */}
                    <div
                      className={`w-12 h-12 rounded-2xl border border-gray-200 bg-gray-50 dark:border-white/15 dark:bg-white/[0.04] ${meta.iconBoxHover} transition-all duration-300 flex items-center justify-center shrink-0`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className={`transition-all duration-300 group-hover:scale-110 ${meta.iconColor}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-gray-950 dark:text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {meta.description}
                  </p>

                  {/* Engagement Duration Selector (Original Pill Style) */}
                  <div className="mb-6">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 font-semibold font-mono">
                      Engagement Duration
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {durationOptions.map((dur) => {
                        const isSelected = activeDuration === dur;
                        return (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => handleDurationChange(service.id, dur)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald text-white font-bold shadow-md shadow-emerald/25 scale-[1.02]'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200/80 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:border-white/5'
                            }`}
                          >
                            <span className="block font-semibold leading-tight">{dur}</span>
                            <span className="block text-[10px] opacity-80 font-mono mt-0.5">
                              {service.pricing[dur]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Fee Display & Select Service Button */}
                <div className="pt-5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 block mb-0.5 font-mono">
                      Fee
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 dark:text-white">
                      {price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelectService(service.title, activeDuration)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs uppercase tracking-widest font-bold text-black bg-gold hover:bg-gold-light shadow-lg shadow-gold/20 transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer group/btn"
                  >
                    <span>Select Service</span>
                    <ArrowRight size={13} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
