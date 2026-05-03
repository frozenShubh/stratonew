"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroAccenture } from '@/components/HeroAccenture';
import { WhatStratosportCreative } from '@/components/WhatStratosportCreative';
import { CapabilitiesDetailed } from '@/components/CapabilitiesDetailed';
import { CaseStudiesClickSlideshow } from '@/components/CaseStudiesClickSlideshow';
import { WhyStratosport } from '@/components/WhyStratosport';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';



export function HomeClient() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stratosport",
            "url": "https://stratosport.in",
            "description": "AI-first technology consulting and digital transformation for enterprises.",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contactus@stratosport.in",
              "contactType": "sales"
            }
          })
        }}
      />
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
}

