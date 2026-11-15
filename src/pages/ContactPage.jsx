import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, Clock, Building2, ExternalLink, Send } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function ContactPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialService = searchParams.get('service') || 'General Inquiry';
  const initialProject = searchParams.get('project');
  const initialDuration = searchParams.get('duration');

  let defaultMessage = '';
  if (initialProject) {
    defaultMessage = `I would like to inquire regarding ${initialProject}.`;
  } else if (initialService !== 'General Inquiry') {
    defaultMessage = `I would like to discuss ${initialService}${initialDuration ? ` (${initialDuration} engagement)` : ''}.`;
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: initialService,
    message: defaultMessage
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialService,
        message: defaultMessage || prev.message
      }));
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Kumar Construction Team, I would like to inquire about ${formData.serviceType}.`
    );
    window.open(`https://wa.me/919071279996?text=${text}`, '_blank');
  };

  return (
    <div className="pt-20 pb-20 transition-colors duration-300">
      {/* Page Header Banner (Cinematic Ease-in Zoom-Out Effect) */}
      <section className="relative h-[48vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        {/* Cinematic Zoom-Out Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Contact - Kumar Construction"
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
              Contact
            </h1>
            <div className="flex items-center gap-4 animate-hero-subtitle">
              <div className="w-12 h-px bg-gold inline-block" />
              <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Corporate Headquarters: Ratu Road Chowk, Ranchi, Jharkhand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Location Cards */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <CheckCircle2 size={48} className="text-emerald mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-serif text-gray-950 dark:text-white">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-950 dark:text-white">{formData.name}</strong>. An executive partner from Kumar Construction will review your requirements for <strong className="text-gold-dark dark:text-gold">{formData.serviceType}</strong> and reach out within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-gold hover:bg-gold-light transition-all shadow-md shadow-gold/20"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-gray-950 dark:text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light">
                    Please provide your project scope, location, or consultation requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-700 dark:text-gray-400 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Kumar"
                      className="w-full bg-gray-50 dark:bg-[#141414] border border-gray-300 dark:border-white/10 focus:border-gold focus:bg-white dark:focus:bg-[#141414] rounded-xl px-4 py-3 text-sm text-gray-950 dark:text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-700 dark:text-gray-400 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 dark:bg-[#141414] border border-gray-300 dark:border-white/10 focus:border-gold focus:bg-white dark:focus:bg-[#141414] rounded-xl px-4 py-3 text-sm text-gray-950 dark:text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-700 dark:text-gray-400 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 dark:bg-[#141414] border border-gray-300 dark:border-white/10 focus:border-gold focus:bg-white dark:focus:bg-[#141414] rounded-xl px-4 py-3 text-sm text-gray-950 dark:text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-700 dark:text-gray-400 font-semibold mb-2">
                    Inquiry Classification
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-[#141414] border border-gray-300 dark:border-white/10 focus:border-gold focus:bg-white dark:focus:bg-[#141414] rounded-xl px-4 py-3 text-sm text-gray-950 dark:text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="General Inquiry" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">General Inquiry</option>
                    <option value="Infrastructure Development Advisory" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">Infrastructure Development Advisory</option>
                    <option value="Project Feasibility & Pre-Development Advisory" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">Project Feasibility &amp; Pre-Development</option>
                    <option value="Investment & Capital Advisory" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">Investment &amp; Capital Advisory</option>
                    <option value="International Market Entry & Expansion" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">International Market Entry &amp; Expansion</option>
                    <option value="Turnkey Construction Mandate" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">Turnkey Construction Mandate</option>
                    <option value="Ranchi & Regional Infrastructure Project" className="bg-white dark:bg-[#141414] text-gray-900 dark:text-white">Ranchi &amp; Regional Infrastructure Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-700 dark:text-gray-400 font-semibold mb-2">
                    Project Synopsis / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the site location, acreage, built-up area, or construction specifications..."
                    className="w-full bg-gray-50 dark:bg-[#141414] border border-gray-300 dark:border-white/10 focus:border-gold focus:bg-white dark:focus:bg-[#141414] rounded-xl px-4 py-3 text-sm text-gray-950 dark:text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-xs uppercase tracking-[0.25em] font-bold text-black bg-gradient-to-r from-gold via-gold-light to-gold hover:opacity-95 shadow-lg shadow-gold/20 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Inquiry to Kumar Construction</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Cards & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Ranchi Corporate Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D0D0D] border-2 border-gold/40 hover:border-gold shadow-sm hover:shadow-xl relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Outline icon that fills and glows on hover */}
                <div className="w-13 h-13 rounded-2xl border border-gray-200 bg-gray-100/80 text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 group-hover:bg-gradient-to-br group-hover:from-amber-400/25 group-hover:to-amber-600/10 group-hover:border-amber-400 group-hover:text-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center justify-center shrink-0 transition-all duration-300">
                  <Building2 size={22} className="fill-transparent group-hover:fill-amber-400/50 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark dark:text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/30">
                      Corporate Headquarters
                    </span>
                  </div>
                  <h4 className="text-xl font-serif text-gray-950 dark:text-white mb-2 group-hover:text-gold-dark dark:group-hover:text-gold transition-colors">
                    Ranchi Head Office
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-snug mb-3">
                    {companyInfo.address}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <span className="text-gray-500 dark:text-gray-400 font-normal">Founder & Managing Director: </span>
                    <strong className="text-gray-900 dark:text-white font-medium">{companyInfo.owner}</strong>
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Prathna+Heights+Ratu+Road+Chowk+Ranchi+Jharkhand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-dark dark:text-gold hover:underline font-medium"
                  >
                    <span>View Ranchi Map</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-white/10 shadow-sm space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-3">
                Direct Communication Channels
              </h4>

              <div className="space-y-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-gray-950 dark:text-white transition-all text-sm group/ch hover:border hover:border-emerald-400/40 border border-gray-200/60 dark:border-transparent"
                >
                  <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 group-hover/ch:bg-emerald-400/15 group-hover/ch:border-emerald-400 group-hover/ch:text-emerald-500 flex items-center justify-center shrink-0 transition-all">
                    <Phone size={17} className="fill-transparent group-hover/ch:fill-emerald-400/40 transition-all" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 block">Phone Desk</span>
                    <span className="font-mono text-gray-900 dark:text-white font-medium">{companyInfo.phone}</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 dark:bg-emerald/10 dark:border-emerald/25 dark:hover:bg-emerald/20 text-gray-950 dark:text-white transition-all text-sm text-left group/wa"
                >
                  <div className="w-10 h-10 rounded-lg border border-emerald-400 bg-emerald-100 text-emerald-800 dark:border-emerald/40 dark:bg-emerald/20 dark:text-emerald group-hover/wa:bg-emerald-500 group-hover/wa:text-white flex items-center justify-center shrink-0 transition-all">
                    <MessageSquare size={17} className="fill-transparent group-hover/wa:fill-white/30 transition-all" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-800 dark:text-emerald-light block font-medium">Instant Connect</span>
                    <span className="font-medium text-emerald-900 dark:text-emerald">WhatsApp Consultation Desk</span>
                  </div>
                </button>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-gray-950 dark:text-white transition-all text-sm group/ml hover:border hover:border-gold/40 border border-gray-200/60 dark:border-transparent"
                >
                  <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-400 group-hover/ml:bg-gold/15 group-hover/ml:border-gold group-hover/ml:text-gold-dark dark:group-hover/ml:text-gold flex items-center justify-center shrink-0 transition-all">
                    <Mail size={17} className="fill-transparent group-hover/ml:fill-gold/40 transition-all" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 block">Corporate Email</span>
                    <span className="text-xs sm:text-sm break-all font-medium text-gray-900 dark:text-white">{companyInfo.email}</span>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Clock size={14} className="text-gray-400 dark:text-gray-500" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ranchi Google Map Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold font-mono">
                Corporate Headquarters
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-950 dark:text-white">
              Ranchi Head Office Map
            </h2>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Prathna+Heights+Ratu+Road+Chowk+Ranchi+Jharkhand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald hover:underline transition-colors font-medium"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Embedded Map Frame */}
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 dark:border-white/15 shadow-xl bg-gray-100 dark:bg-[#111]">
          <iframe
            title="Kumar Construction Ranchi Head Office Map"
            src="https://maps.google.com/maps?q=Ratu%20Road%20Chowk,%20Ranchi,%20Jharkhand,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-100 dark:contrast-125 dark:grayscale-[60%] dark:hover:grayscale-0 transition-all duration-700"
          />

          {/* Floating Location Badge on Map */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 max-w-xs p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-black/85 backdrop-blur-md border border-gray-200 dark:border-gold/40 shadow-xl hidden sm:block pointer-events-auto">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark dark:text-gold font-bold">
                Kumar Construction
              </span>
            </div>
            <p className="text-xs text-gray-950 dark:text-white font-medium mb-1">
              Ranchi Corporate Headquarters
            </p>
            <p className="text-[11px] text-gray-600 dark:text-gray-300 font-light leading-snug">
              301, Prathna Heights, Ratu Road Chowk, Ranchi, Jharkhand – 834001
            </p>
          </div>
        </div>

        {/* Mobile Address Pill below Map */}
        <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-black/80 border border-gray-200 dark:border-gold/30 shadow-sm flex items-center gap-2.5 sm:hidden">
          <MapPin size={16} className="text-gold-dark dark:text-gold shrink-0" />
          <span className="text-xs text-gray-800 dark:text-gray-300 font-light">301, Prathna Heights, Ratu Road Chowk, Ranchi, Jharkhand – 834001</span>
        </div>
      </section>
    </div>
  );
}
