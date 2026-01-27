import React from 'react';
import { Header } from '../components/Header';
import { HeroAccenture } from '../components/HeroAccenture';
import { InsightsGrid } from '../components/InsightsGrid';
import { CaseStudies } from '../components/CaseStudies';
import { WhyStratosport } from '../components/WhyStratosport';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePageAccenture = () => {
  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />
      <HeroAccenture />
      <InsightsGrid />
      <CaseStudies />
      <WhyStratosport />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePageAccenture;