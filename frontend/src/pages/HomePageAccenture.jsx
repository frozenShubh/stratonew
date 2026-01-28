import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroAccenture } from '../components/HeroAccenture';
import { WhatStratosportCreative } from '../components/WhatStratosportCreative';
import { CapabilitiesDetailed } from '../components/CapabilitiesDetailed';
import { CaseStudiesClickSlideshow } from '../components/CaseStudiesClickSlideshow';
import { WhyStratosport } from '../components/WhyStratosport';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePageAccenture = () => {
  useEffect(() => {
    // Handle hash scrolling for navigation links
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />
      <HeroAccenture />
      <WhatStratosportCreative />
      <CapabilitiesDetailed />
      <CaseStudiesClickSlideshow />
      <WhyStratosport />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePageAccenture;