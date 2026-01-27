import React from 'react';
import { Header } from '../components/Header';
import { HeroAccenture } from '../components/HeroAccenture';
import { WhatStratosportCreative } from '../components/WhatStratosportCreative';
import { CapabilitiesDetailed } from '../components/CapabilitiesDetailed';
import { CaseStudiesClickSlideshow } from '../components/CaseStudiesClickSlideshow';
import { WhyStratosport } from '../components/WhyStratosport';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePageAccenture = () => {
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