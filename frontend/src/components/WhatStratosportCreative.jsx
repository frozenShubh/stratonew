import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap, Shield, TrendingUp } from 'lucide-react';

export const WhatStratosportCreative = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Vision',
      description: 'Technology roadmaps aligned with business outcomes',
      color: 'from-[#539AC1] to-[#0D4669]',
    },
    {
      icon: Code2,
      title: 'Platform Engineering',
      description: 'Production-grade systems built for scale',
      color: 'from-[#0D4669] to-[#033051]',
    },
    {
      icon: Zap,
      title: 'AI Systems',
      description: 'LLM platforms and intelligent automation',
      color: 'from-[#539AC1] to-[#235D94]',
    },
    {
      icon: Shield,
      title: 'Reliability & SRE',
      description: '99.99% uptime and resilient architectures',
      color: 'from-[#235D94] to-[#0D4669]',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Building high-performing engineering teams',
      color: 'from-[#0D4669] to-[#539AC1]',
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'FinOps and architecture-led efficiency',
      color: 'from-[#033051] to-[#235D94]',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#020507] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#539AC1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D4669]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What Stratosport
            <br />
            <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
              Brings to Life
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#D9EAF6]/70 max-w-3xl mx-auto leading-relaxed">
            End-to-end technology and AI leadership — from strategy to execution, 
            governance to optimization.
          </p>
        </motion.div>

        {/* Hexagon Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Card with gradient border */}
              <div className="relative h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-[#539AC1]/50 transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-flex"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative w-16 h-16 bg-[#0D4669]/50 rounded-xl flex items-center justify-center group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                      <service.icon className="text-[#A5C7E0] group-hover:text-[#539AC1] transition-colors" size={32} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A5C7E0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#D9EAF6]/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#539AC1] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#D9EAF6]/60">
            Ready to transform your technology landscape?
          </p>
        </motion.div>
      </div>
    </section>
  );
};