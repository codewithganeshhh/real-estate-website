import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AdvisoryPillars from '../components/AdvisoryPillars';
import CoreVerticals from '../components/CoreVerticals';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 1. Hero Video Section */}
      <HeroSection />

      {/* 2. Advisory Pillars */}
      <AdvisoryPillars onLearnMore={() => navigate('/about')} />

      {/* 3. Core Verticals Infinite Marquee */}
      <CoreVerticals />

      {/* 4. Signature Projects Grid (3x2 Columns) */}
      <FeaturedProjects />

      {/* 5. Client Testimonials Infinite Marquee */}
      <TestimonialsMarquee />

      {/* 6. Frequently Asked Questions Accordion */}
      <FAQSection />
    </div>
  );
}

