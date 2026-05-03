"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';

// Using the provided GA Measurement ID
const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-FYKEMNMV3X';

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GA4 only if tracking ID is present and it hasn't been initialized
    if (TRACKING_ID && !ReactGA.isInitialized) {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (TRACKING_ID) {
      // Send pageview with a custom path
      const url = pathname + searchParams.toString();
      ReactGA.send({ hitType: 'pageview', page: url });
    }
  }, [pathname, searchParams]);

  return null;
};
