import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function ContactSection({ prefillData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: prefillData?.serviceTitle || 'General Inquiry',
    message: prefillData?.message || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
          Contact Us
        </h2>
        <p className="text-sm text-gray-400 font-light max-w-xl">
          Whether you are looking for construction partnerships, turnkey engineering, or development advisory, our team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0D0D] border border-white/10">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <CheckCircle2 size={40} className="text-emerald mx-auto" />
              <h3 className="text-2xl font-serif text-white">
                Inquiry Received
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Thank you for reaching out to Kumar Developers. Our team will review your message and respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 text-xs uppercase tracking-wider text-gold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Inquiry Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  <option value="General Inquiry" className="bg-[#111]">General Inquiry</option>
                  <option value="Infrastructure Development Advisory" className="bg-[#111]">Infrastructure Development Advisory</option>
                  <option value="Project Feasibility & Pre-Development Advisory" className="bg-[#111]">Project Feasibility & Pre-Development</option>
                  <option value="Investment & Capital Advisory" className="bg-[#111]">Investment & Capital Advisory</option>
                  <option value="International Market Entry & Expansion" className="bg-[#111]">International Market Entry & Expansion</option>
                  <option value="Business Structuring & Corporate Advisory" className="bg-[#111]">Business Structuring & Corporate Advisory</option>
                  <option value="Turnkey Construction Partnership" className="bg-[#111]">Turnkey Construction Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  About Project / Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.18em] font-bold text-black bg-gradient-to-r from-gold via-gold-light to-gold hover:opacity-95 active:scale-[0.99] shadow-lg shadow-gold/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <Send size={15} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Office Details */}
        <div className="space-y-8 flex flex-col justify-between py-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white">
              Kumar Developers
            </h3>
            
            <div className="space-y-4 text-sm text-gray-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-gold transition-colors font-mono">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-gold transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400">
            <p className="font-semibold text-gray-300 mb-1">Corporate Registration</p>
            <p>Kumar Developers • Registered under the Ministry of Corporate Affairs, India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
