import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhatStratosportCreative = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Vision',
      description: 'Technology roadmaps aligned with business outcomes — not vendor hype.',
      number: '01',
    },
    {
      icon: Code2,
      title: 'Platform Engineering',
      description: 'Production-grade systems designed for 10x scale from day one.',
      number: '02',
    },
    {
      icon: Zap,
      title: 'AI Systems',
      description: 'LLM applications, agentic workflows, and intelligent automation that ships.',
      number: '03',
    },
    {
      icon: Shield,
      title: 'Reliability & SRE',
      description: '99.99% uptime and resilient architectures for mission-critical platforms.',
      number: '04',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Building and scaling high-performing engineering orgs and GCCs.',
      number: '05',
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'FinOps and architecture-led efficiency — cut costs without cutting capability.',
      number: '06',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#020507] overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#539AC1 1px, transparent 1px), linear-gradient(90deg, #539AC1 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #539AC1, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — left aligned for more editorial feel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What we
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                bring to the table
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-end"
          >
            <p className="text-lg text-[#D9EAF6]/50 leading-relaxed">
              End-to-end technology and AI leadership — from strategy to production,
              architecture to optimization. Every engagement is led by senior operators
              who've done this at scale.
            </p>
          </motion.div>
        </div>

        {/* Service rows — horizontal cards with number, divider, content */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="group border-t border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-500">
                <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-center">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[#539AC1]/30 group-hover:text-[#539AC1]/70 text-sm font-mono transition-colors duration-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="col-span-3 md:col-span-1">
                    <div className="w-12 h-12 bg-[#0D4669]/30 group-hover:bg-[#539AC1]/15 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <service.icon className="text-[#539AC1]/60 group-hover:text-[#A5C7E0] transition-colors duration-300" size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-span-7 md:col-span-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p className="text-[#D9EAF6]/40 group-hover:text-[#D9EAF6]/70 text-sm md:text-base leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex col-span-1 justify-end">
                    <ArrowRight className="text-[#539AC1]/0 group-hover:text-[#539AC1]/60 transition-all duration-300 group-hover:translate-x-1" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#D9EAF6]/40 text-lg">
            Ready to transform your technology landscape?
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(83,154,193,0.3)]">
            Start a Conversation
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};