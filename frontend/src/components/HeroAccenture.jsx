import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroAccenture = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#020507]">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #539AC1 1px, transparent 1px), radial-gradient(circle at 75% 75%, #A5C7E0 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#539AC1] text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Together We Engineer
          </motion.div>

          {/* Main Headline - Accenture style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Shaping Technology,
            <br />
            Powering Tomorrow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#D9EAF6]/80 mb-12 leading-relaxed max-w-3xl"
          >
            In a world of rapid technological evolution, adaptation is continuous. 
            That's why we partner with organizations to architect scalable systems, 
            implement production AI, and build engineering excellence.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#539AC1] hover:bg-[#A5C7E0] text-white px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0 rounded-md"
              >
                <span className="flex items-center">
                  See What We Do
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};