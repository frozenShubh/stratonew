import React from 'react';
import { Header } from '../components/Header';
import { HeroAccenture } from '../components/HeroAccenture';
import { WhatStratosportCreative } from '../components/WhatStratosportCreative';
import { InsightsGrid } from '../components/InsightsGrid';
import { CaseStudiesScrollSlideshow } from '../components/CaseStudiesScrollSlideshow';
import { WhyStratosport } from '../components/WhyStratosport';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePageAccenture = () => {
  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />
      <HeroAccenture />
      <WhatStratosportCreative />
      <InsightsGrid />
      <CaseStudiesScrollSlideshow />
      <WhyStratosport />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePageAccenture;