import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, FileCheck, Award, Compass, Layers, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mockData';

const serviceIconMap = {
  'infrastructure-advisory': {
    icon: Building2,
    color: 'amber',
    borderHover: 'hover:border-amber-400/50',
    glow: 'hover:shadow-[0_15px_35px_rgba(245,158,11,0.2)]',
    iconHover: 'group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:fill-amber-400/50 group-hover:bg-amber-400/15 group-hover:border-amber-400/70 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]'
  },
  'feasibility-advisory': {
    icon: FileCheck,
    color: 'emerald',
    borderHover: 'hover:border-emerald-400/50',
    glow: 'hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]',
    iconHover: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:fill-emerald-400/50 group-hover:bg-emerald-400/15 group-hover:border-emerald-400/70 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]'
  },
  'investment-capital': {
    icon: Award,
    color: 'gold',
    borderHover: 'hover:border-gold/50',
    glow: 'hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)]',
    iconHover: 'group-hover:text-gold-dark dark:group-hover:text-gold group-hover:fill-gold/50 group-hover:bg-gold/15 group-hover:border-gold/70 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]'
  },
  'market-entry': {
    icon: Compass,
    color: 'sky',
    borderHover: 'hover:border-sky-400/50',
    glow: 'hover:shadow-[0_15px_35px_rgba(14,165,233,0.2)]',
    iconHover: 'group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:fill-sky-400/50 group-hover:bg-sky-400/15 group-hover:border-sky-400/70 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]'
  },
  'corporate-structuring': {
    icon: Layers,
    color: 'purple',
    borderHover: 'hover:border-purple-400/50',
    glow: 'hover:shadow-[0_15px_35px_rgba(168,85,247,0.2)]',
    iconHover: 'group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:fill-purple-400/50 group-hover:bg-purple-400/15 group-hover:border-purple-400/70 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]'
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
      {/* Page Header Banner (Cinematic Ease-in Zoom-Out Effect) */}
      <section className="relative h-[48vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        {/* Cinematic Zoom-Out Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Services - Kumar Construction"
            className="w-full h-full object-cover animate-hero-zoom-out"
          />
          {/* Crisp, rich contrast overlays - NO washed-out white fog */}
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent dark:from-[#050505] z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight animate-hero-title drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Services
            </h1>
            <div className="flex items-center gap-4 animate-hero-subtitle">
              <div className="w-12 h-px bg-gold inline-block" />
              <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Advisory, Turnkey Engineering &amp; PMO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="space-y-6 sm:space-y-10">
          {servicesData.map((service) => {
            const activeDuration = selectedDurations[service.id] || '1 Month';
            const price = service.pricing[activeDuration];
            const meta = serviceIconMap[service.id] || {
              icon: Building2,
              borderHover: 'hover:border-gold/40',
              glow: 'hover:shadow-xl',
              iconHover: 'group-hover:text-gold group-hover:fill-gold/40 group-hover:bg-gold/15 group-hover:border-gold'
            };
            const Icon = meta.icon;

            return (
              <div
                key={service.id}
                className={`p-5 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm ${meta.borderHover} ${meta.glow} hover:-translate-y-1.5 hover:bg-gray-50 dark:hover:bg-[#121212] transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 group relative overflow-hidden`}
              >
                {/* Ambient hover light */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-gold/5 dark:bg-white/[0.02] group-hover:bg-gold/10 dark:group-hover:bg-white/[0.06] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="flex items-start gap-4 sm:gap-6 max-w-xl">
                  {/* Outline icon box that fills and becomes colorful on hover */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 ${meta.iconHover} transition-all duration-300 flex items-center justify-center shrink-0 mt-1`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="transition-all duration-300 fill-transparent group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-950 dark:text-white mb-3 sm:mb-4 group-hover:text-amber-700 dark:group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 sm:mb-3 font-semibold">
                      Engagement Duration
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {durationOptions.map((dur) => (
                        <button
                          key={dur}
                          onClick={() => handleDurationChange(service.id, dur)}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                            activeDuration === dur
                              ? 'bg-emerald text-white font-bold shadow-md shadow-emerald/20'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:border-white/5'
                          }`}
                        >
                          <span>{dur}</span>
                          <span className="block text-[9px] sm:text-[10px] opacity-75">{service.pricing[dur]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:border-l lg:border-gray-200 dark:lg:border-white/10 lg:pl-8 xl:pl-10 w-full lg:w-auto justify-between lg:justify-start pt-4 lg:pt-0 border-t border-gray-100 dark:border-white/5 lg:border-t-0">
                  <div>
                    <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 block mb-0.5">Fee</span>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 dark:text-white">
                      {price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelectService(service.title, activeDuration)}
                    className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold text-black bg-gold hover:bg-gold-light shadow-lg shadow-gold/20 transition-all inline-flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Select Service</span>
                    <ArrowRight size={13} />
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
