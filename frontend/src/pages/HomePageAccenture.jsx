import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Stratosport | AI-First Technology Consulting & Digital Transformation</title>
        <meta name="description" content="Stratosport partners with enterprises to build AI-first technology platforms, set up Global Capability Centers (GCCs), and deliver production-grade AI systems. Senior-only consulting for organizations that demand excellence." />
        <meta property="og:title" content="Stratosport | AI-First Technology Consulting & Digital Transformation" />
        <meta property="og:description" content="Senior-only technology consulting for AI transformation, GCC setup, and production-grade platform engineering." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://stratosport.in" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stratosport",
            "url": "https://stratosport.in",
            "description": "AI-first technology consulting and digital transformation for enterprises.",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contact@stratosport.in",
              "contactType": "sales"
            }
          }
        `}</script>
      </Helmet>
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