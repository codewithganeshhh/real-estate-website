import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { companyInfo } from '../data/mockData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // On home page when not scrolled, navbar sits directly over the dark video hero
  const isTransparentOverDark = !scrolled && location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || location.pathname !== '/'
            ? 'py-4 bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-md dark:shadow-2xl'
            : 'py-6 sm:py-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left"
          >
            <BrandLogo lightOnDark={isTransparentOverDark} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              const linkClasses = isTransparentOverDark
                ? active
                  ? 'text-white font-bold'
                  : 'text-white/80 hover:text-gold'
                : active
                  ? 'text-gray-950 dark:text-white font-bold'
                  : 'text-gray-700 dark:text-white/80 hover:text-gold-dark dark:hover:text-gold';

              const indicatorClasses = isTransparentOverDark
                ? 'bg-gold'
                : 'bg-emerald';

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 px-3 py-1 ${linkClasses}`}
                >
                  <div className="flex flex-col items-center">
                    <span>{link.label}</span>
                    <span
                      className={`h-[2px] ${indicatorClasses} mt-1 transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-1/2'
                      }`}
                    />
                  </div>
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ml-2 ${
                isTransparentOverDark
                  ? 'text-white hover:text-gold hover:bg-white/10'
                  : 'text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-lg transition-colors ${
                isTransparentOverDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none p-1.5 rounded-lg transition-colors ${
                isTransparentOverDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-black/95 text-gray-900 dark:text-white backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-fade-in">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold">
                Navigation
              </span>
              <span className="text-[10px] text-emerald font-mono">
                Kumar Construction
              </span>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left text-2xl font-serif py-2.5 border-b border-gray-200 dark:border-white/5 transition-colors flex items-center justify-between ${
                    active ? 'text-gold font-medium' : 'text-gray-900 dark:text-white hover:text-gold'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </div>

          {/* Quick Contact Desk on Mobile */}
          <div className="pt-6 border-t border-gray-200 dark:border-white/10 space-y-3 mt-6">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold block mb-2 font-mono">
              Quick Support Desk:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-center text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                Call Desk
              </a>
              <a
                href="https://wa.me/919071279996"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald/15 border border-emerald/30 text-xs text-center text-emerald font-semibold hover:bg-emerald/25 transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-[11px] text-gray-500 text-center font-mono pt-2">
              Corporate Headquarters • Ranchi, Jharkhand
            </p>
          </div>
        </div>
      )}
    </>
  );
}
