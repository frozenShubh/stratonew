"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeroThreeBackground } from './HeroThreeBackground';

export const SubPageHero = ({ badge, title, description, children }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#020507] pt-24">
      {/* Three.js Background Animation */}
      <HeroThreeBackground />
      
      {/* Background with subtle gradient - same as HeroAccenture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D4669]/20 via-[#020507]/50 to-[#033051]/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          {/* Badge/Overline */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Main Headline - Matches HeroAccenture style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-[#D9EAF6]/80 mb-12 leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>
          )}

          {/* Extra content (buttons, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
