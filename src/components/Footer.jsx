import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare
} from 'lucide-react';
import { companyInfo } from '../data/mockData';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenPolicy }) {
  return (
    <div className="transition-colors duration-300">
      {/* 1. Cinematic Pre-Footer Call to Action Banner */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#080808] dark:via-[#0D0D0D] dark:to-[#050505] border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold mb-2 font-mono">
            Corporate Advisory
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-950 dark:text-white mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
            Ready to build your next landmark development?
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Partner with Ranchi's specialist turnkey civil engineering firm. From institutional masterplanning and statutory diligence to high-rise execution, we deliver enduring value.
          </p>

          {/* Key Trust Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs text-gray-700 dark:text-gray-300 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold-dark dark:text-gold shrink-0" />
              <span>100% RERA &amp; Diligence</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald shrink-0" />
              <span>Seismic Zone-III/IV RCC</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold-dark dark:text-gold shrink-0" />
              <span>Milestone-Linked Escrow</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-bold text-black bg-gradient-to-r from-gold via-gold-light to-gold hover:opacity-95 shadow-lg shadow-gold/25 transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-bold text-gray-900 dark:text-white bg-white dark:bg-white/5 border border-gray-300 dark:border-white/15 hover:border-gold dark:hover:border-gold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Rich Multi-Column Footer */}
      <footer className="bg-white dark:bg-[#050505] text-gray-900 dark:text-white pt-16 sm:pt-20 pb-10 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-14 sm:mb-16">
            {/* Column 1: Brand & Credibility (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-5">
              <BrandLogo size="default" />

              <p className="text-gray-600 dark:text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-md">
                Kumar Construction is a premier turnkey civil engineering and infrastructure development firm. Guided by structural precision, transparent milestone accounting, and institutional engineering benchmarks.
              </p>

              {/* Founder & Leadership Badge */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 max-w-md space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-dark dark:text-gold block font-semibold">
                  Executive Governance
                </span>
                <p className="text-xs text-gray-900 dark:text-white font-medium">
                  Praful Kumar Sahu <span className="text-gray-500 font-normal">| Founder &amp; Managing Director</span>
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-light">
                  Headquartered at 301, Prathna Heights, Ratu Road Chowk, Ranchi
                </p>
              </div>

              {/* Quick WhatsApp Connect Pill */}
              <div className="pt-1">
                <a
                  href="https://wa.me/919071279996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald/10 border border-emerald/30 text-emerald-700 dark:text-emerald text-xs font-semibold hover:bg-emerald/20 transition-all font-mono"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Consultation Desk</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols on lg) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-widest text-gold-dark dark:text-gold font-bold mb-5 font-mono">
                Explore
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link to="/" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    The Firm &amp; Origins
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Signature Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Practice Verticals
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Executive Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Practice Verticals (2 cols on lg) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-widest text-gold-dark dark:text-gold font-bold mb-5 font-mono">
                Verticals
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-400 font-light">
                <li>Infrastructure Advisory</li>
                <li>Technical Diligence</li>
                <li>Turnkey Civil PMO</li>
                <li>Commercial Plazas</li>
                <li>High-Rise Residences</li>
                <li>Industrial Logistics</li>
              </ul>
            </div>

            {/* Column 4: Corporate Headquarters & Desk (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-gold-dark dark:text-gold font-bold mb-5 font-mono">
                Corporate HQ
              </h4>

              <div className="space-y-3.5 text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-emerald shrink-0 mt-0.5" />
                  <span>301, Prathna Heights, Ratu Road Chowk, Ranchi, Jharkhand – 834001</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-emerald shrink-0" />
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="hover:text-gold-dark dark:hover:text-gold transition-colors font-mono font-medium text-gray-900 dark:text-white"
                  >
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-emerald shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-gold-dark dark:hover:text-gold transition-colors break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Clock size={15} className="text-gray-400 shrink-0" />
                  <span className="text-[11px] font-mono">{companyInfo.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            <div>
              <p>© 2026 Kumar Construction. All rights reserved.</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                Headquartered in Ranchi, Jharkhand. Jurisdiction: Ranchi.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs">
              <button
                onClick={() => onOpenPolicy('privacy')}
                className="hover:text-gold-dark dark:hover:text-gold transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenPolicy('terms')}
                className="hover:text-gold-dark dark:hover:text-gold transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <button
                onClick={() => onOpenPolicy('refund')}
                className="hover:text-gold-dark dark:hover:text-gold transition-colors cursor-pointer"
              >
                Refund Policy
              </button>
              <button
                onClick={() => onOpenPolicy('cancellation')}
                className="hover:text-gold-dark dark:hover:text-gold transition-colors cursor-pointer"
              >
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
