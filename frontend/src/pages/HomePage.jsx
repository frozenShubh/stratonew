import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WhatWeDo } from '../components/WhatWeDo';
import { Capabilities } from '../components/Capabilities';
import { StrategicServices } from '../components/StrategicServices';
import { EngagementModels } from '../components/EngagementModels';
import { Industries } from '../components/Industries';
import { WhyStratosport } from '../components/WhyStratosport';
import { CaseStudies } from '../components/CaseStudies';
import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <Capabilities />
      <StrategicServices />
      <EngagementModels />
      <Industries />
      <WhyStratosport />
      <CaseStudies />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;