"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Users, TrendingUp, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroFinal = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
          alt="Professional consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020507]/95 via-[#020507]/85 to-[#020507]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            You're More Than a Consultant.
            <br />
            <span className="text-[#A5C7E0]">You're a Technology Partner.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-[#D9EAF6]/80 mb-10 leading-relaxed max-w-2xl"
          >
            Helping you turn complex technology challenges into scalable solutions
            through expert engineering and AI systems.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-[#020507] px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0 rounded-lg"
              >
                <span className="flex items-center">
                  Request a Call
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-[#020507]/80 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#0D4669]/50 flex items-center justify-center">
                <Users className="text-[#A5C7E0]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-[#D9EAF6]/70">Successful Projects</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#0D4669]/50 flex items-center justify-center">
                <TrendingUp className="text-[#A5C7E0]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-sm text-[#D9EAF6]/70">Users Served</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#0D4669]/50 flex items-center justify-center">
                <Award className="text-[#A5C7E0]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-[#D9EAF6]/70">Satisfied Clients</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#0D4669]/50 flex items-center justify-center">
                <Briefcase className="text-[#A5C7E0]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-[#D9EAF6]/70">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};