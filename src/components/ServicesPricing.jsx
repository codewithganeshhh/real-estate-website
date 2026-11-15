import React, { useState } from 'react';
import { servicesData } from '../data/mockData';

export default function ServicesPricing({ onSelectService }) {
  const [selectedDurations, setSelectedDurations] = useState({
    'infrastructure-advisory': '1 Month',
    'feasibility-advisory': '1 Month',
    'investment-capital': '1 Month',
    'market-entry': '1 Month',
    'corporate-structuring': '1 Month'
  });

  const durationOptions = ['1 Month', '3 Months', '6 Months', '1 Year'];

  const handleDurationChange = (serviceId, duration) => {
    setSelectedDurations(prev => ({
      ...prev,
      [serviceId]: duration
    }));
  };

  return (
    <section id="services" className="py-28 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-2">
          Advisory & Consultation
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white">
          Our Services
        </h2>
      </div>

      <div className="space-y-12">
        {servicesData.map((service) => {
          const activeDuration = selectedDurations[service.id] || '1 Month';
          const price = service.pricing[activeDuration];

          return (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                  Engagement Duration
                </p>
                <div className="flex flex-wrap gap-2">
                  {durationOptions.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => handleDurationChange(service.id, dur)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeDuration === dur
                          ? 'bg-emerald text-white font-bold'
                          : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                      }`}
                    >
                      <span>{dur}</span>
                      <span className="block text-[10px] opacity-75">{service.pricing[dur]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:border-l md:border-white/10 md:pl-10">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Fee</span>
                  <span className="text-3xl font-serif font-bold text-white">
                    {price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service.title, activeDuration)}
                  className="px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold text-black bg-gold hover:bg-gold-light transition-all"
                >
                  Select Service
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
