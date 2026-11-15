import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LegalModal from './components/LegalModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePolicy, setActivePolicy] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 overflow-x-hidden w-full max-w-full ${
          darkMode ? 'bg-[#050505] text-[#FAFAFA]' : 'bg-[#F8F9FA] text-[#111827]'
        }`}
      >
        {/* Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Dynamic Route View */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenPolicy={(policy) => setActivePolicy(policy)} />

        {/* Legal Policies Modal */}
        <LegalModal
          policyKey={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      </div>
    </Router>
  );
}
