import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter - counts up from 0 to the target value when scrolled into view.
 * 
 * @param {string} value - The final value to display (e.g., "87%", "1.5M+", "14 wks")
 * @param {string} className - Additional CSS classes
 */
export const AnimatedCounter = ({ value, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([0-9,.]+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericStr = match[1].replace(/,/g, '');
    const suffix = match[2];
    const target = parseFloat(numericStr);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = target * progress;

      if (target >= 100) {
        setDisplayValue(Math.round(current).toLocaleString() + suffix);
      } else if (target >= 1) {
        setDisplayValue(parseFloat(current.toFixed(1)) + suffix);
      } else {
        setDisplayValue(parseFloat(current.toFixed(2)) + suffix);
      }

      if (step >= steps) {
        setDisplayValue(match[1] + suffix);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
