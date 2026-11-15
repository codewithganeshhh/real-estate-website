import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mockData';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenPolicy }) {
  return (
    <div className="transition-colors duration-300">
      {/* Work with us CTA Banner */}
      <section className="py-20 sm:py-28 md:py-36 bg-gray-50 dark:bg-[#050505] text-center px-4 sm:px-6 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-[11px] sm:text-xs mb-3 sm:mb-4 font-mono font-medium">
          Work with us
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif text-gray-950 dark:text-white mb-6 sm:mb-8 max-w-3xl mx-auto">
          Ready to structure the future?
        </h2>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald border-b border-emerald-700 dark:border-emerald pb-1 text-sm sm:text-lg hover:text-emerald-900 dark:hover:text-white hover:border-emerald-900 dark:hover:border-white transition-colors font-medium"
        >
          <span>Explore our services</span>
          <span>→</span>
        </Link>
      </section>

      {/* Main Footer */}
      <footer className="bg-white dark:bg-[#050505] text-gray-900 dark:text-white pt-16 sm:pt-20 pb-10 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Column 1: Brand Statement */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="mb-4 sm:mb-6">
                <BrandLogo size="default" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
                Specialist turnkey construction, infrastructure development, and engineering consultation services. Guiding clients from concept to completion since 2023.
              </p>
            </div>

            {/* Column 2: Navigation Menu */}
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-dark dark:text-gold font-semibold mb-4 sm:mb-6 font-mono">
                Menu
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link to="/" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold-dark dark:hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-dark dark:text-gold font-semibold mb-4 sm:mb-6 font-mono">
                Contact
              </h4>
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                <p>{companyInfo.address}</p>
                <p>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-gold-dark dark:hover:text-gold transition-colors break-all">
                    {companyInfo.email}
                  </a>
                </p>
                <p>
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-gold-dark dark:hover:text-gold transition-colors font-mono font-medium">
                    {companyInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            <p>© 2026 Kumar Construction. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button onClick={() => onOpenPolicy('privacy')} className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => onOpenPolicy('terms')} className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                Terms &amp; Conditions
              </button>
              <button onClick={() => onOpenPolicy('refund')} className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                Refund Policy
              </button>
              <button onClick={() => onOpenPolicy('cancellation')} className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
