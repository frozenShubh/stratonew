import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Using the provided GA Measurement ID
const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-FYKEMNMV3X';

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 only if tracking ID is present and it hasn't been initialized
    if (TRACKING_ID && !ReactGA.isInitialized) {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (TRACKING_ID) {
      // Send pageview with a custom path
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};
