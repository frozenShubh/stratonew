import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AIGlobeBackground } from './AIGlobeBackground';

export const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020507] via-[#033051] to-[#0D4669]">
      {/* Three.js AI Globe Animation */}
      <AIGlobeBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,5,7,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0D4669]/40 border border-[#539AC1]/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="text-[#A5C7E0]" size={16} />
            <span className="text-[#D9EAF6] text-sm font-medium">AI-Powered Technology Leadership</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering
            <span className="block mt-2 gradient-text">
              Technology & AI
            </span>
            <span className="block mt-2">
              Systems That Scale
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-[#A5C7E0] mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Partner with Stratosport to build resilient platforms, AI-powered products, 
            and high-performing engineering organizations that drive real business outcomes.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-8 mb-14"
          >
            <div className="flex items-center space-x-3 bg-[#0D4669]/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#539AC1]/20">
              <Zap className="text-[#539AC1]" size={20} />
              <span className="text-[#D9EAF6] font-medium">Senior-Only Consulting</span>
            </div>
            <div className="flex items-center space-x-3 bg-[#0D4669]/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#539AC1]/20">
              <TrendingUp className="text-[#539AC1]" size={20} />
              <span className="text-[#D9EAF6] font-medium">Proven at Scale</span>
            </div>
            <div className="flex items-center space-x-3 bg-[#0D4669]/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#539AC1]/20">
              <Sparkles className="text-[#539AC1]" size={20} />
              <span className="text-[#D9EAF6] font-medium">Production-Grade Systems</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white px-10 py-7 text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(83,154,193,0.5)] hover:shadow-[0_0_50px_rgba(83,154,193,0.8)] group border-0 rounded-xl"
                >
                  <span className="flex items-center">
                    Engage Stratosport
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={22} />
                  </span>
                </Button>
              </motion.div>
            </Link>
            <a href="#capabilities">
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#539AC1] text-[#A5C7E0] hover:bg-[#0D4669] hover:border-[#A5C7E0] px-10 py-7 text-lg font-bold transition-all duration-300 backdrop-blur-sm rounded-xl"
                >
                  Explore Capabilities
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#539AC1] mb-2">50+</div>
              <div className="text-sm text-[#A5C7E0]">Systems Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#539AC1] mb-2">10M+</div>
              <div className="text-sm text-[#A5C7E0]">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#539AC1] mb-2">99.9%</div>
              <div className="text-sm text-[#A5C7E0]">Uptime</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020507] to-transparent" />
    </section>
  );
};
