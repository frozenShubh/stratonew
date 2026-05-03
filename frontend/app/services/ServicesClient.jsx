"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StrategicServices } from '@/components/StrategicServices';
import { EngagementModels } from '@/components/EngagementModels';


import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function ServicesClient() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const serviceHighlights = [
    'Senior-only consulting with 15+ years experience',
    'End-to-end delivery from strategy to production',
    'Proven at scale (10M+ users, 99.9% uptime)',
    'No junior staff, no delegation - direct access to experts',
    'Flexible engagement models for any organization size',
    'Technology + AI + Engineering integrated expertise'
  ];

  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #539AC1 1px, transparent 1px), radial-gradient(circle at 75% 75%, #A5C7E0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>


        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Strategic Technology
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Services & Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed mb-8">
              From strategic advisory to full-stack implementation, we provide comprehensive technology
              services designed for organizations that demand excellence and measurable results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-[#539AC1] flex-shrink-0" size={20} />
                  <span className="text-[#D9EAF6]/90">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Services Section */}
      <StrategicServices />

      {/* Engagement Models Section */}
      <EngagementModels />

      {/* Process Overview */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Process
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful outcomes, from initial consultation to long-term support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your challenges, goals, and current technology landscape. We develop a comprehensive understanding and strategic roadmap.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Architect scalable, secure solutions tailored to your specific needs. We consider technical, operational, and business requirements.'
              },
              {
                step: '03',
                title: 'Implementation & Delivery',
                description: 'Execute with precision using senior-level expertise. We handle everything from development to deployment and testing.'
              },
              {
                step: '04',
                title: 'Optimization & Support',
                description: 'Monitor, optimize, and provide ongoing support. We ensure your solution continues to deliver value as your needs evolve.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#539AC1] to-[#0D4669] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {phase.title}
                </h3>
                <p className="text-[#D9EAF6]/70 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your technology goals.
              Every engagement starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center px-8 py-4 border border-[#539AC1]/30 text-[#539AC1] hover:bg-[#539AC1]/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
