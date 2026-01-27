import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeBackground } from './ThreeBackground';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Three.js Animated Background */}
      <ThreeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Engineering Technology & AI Systems That
              <span className="gradient-text"> Scale</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Stratosport partners with leadership teams to build resilient platforms,
            AI-powered products, and high-performing engineering organizations.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-600"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Senior-only consulting</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Startup to enterprise experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Production-grade systems</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-2xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Engage Stratosport
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-slate-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </Link>
            <a href="#capabilities">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-6 text-lg transition-all duration-300 hover:border-slate-500 hover:shadow-lg"
                >
                  Explore Capabilities
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};