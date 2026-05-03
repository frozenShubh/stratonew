"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  TrendingUp,
  Search,
  Target,
  Layers,
  AlertTriangle,
  Database,
  GitBranch,
  Lock,
} from 'lucide-react';

export const StrategicServices = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'M&A Technology Due Diligence',
      description: 'Technology assessments for M&A, PE, and VC investments',
    },
    {
      icon: Search,
      title: 'Build vs Buy Assessments',
      description: 'Strategic platform decisions and vendor evaluations',
    },
    {
      icon: Target,
      title: 'AI Readiness & Maturity',
      description: 'AI capability assessments and readiness roadmaps',
    },
    {
      icon: Layers,
      title: 'Operating Model Design',
      description: 'Engineering organization and delivery model optimization',
    },
    {
      icon: AlertTriangle,
      title: 'Technical Debt Management',
      description: 'Assessment and remediation planning for legacy systems',
    },
    {
      icon: Lock,
      title: 'Security Reviews',
      description: 'Platform security audits and threat modeling',
    },
    {
      icon: Database,
      title: 'Data Platform Foundations',
      description: 'Data infrastructure and analytics platform design',
    },
    {
      icon: GitBranch,
      title: 'Modernization Roadmaps',
      description: 'Legacy system transformation and migration planning',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0D10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic & Specialized Services
          </h2>
          <p className="text-xl text-[#D9EAF6]/80 leading-relaxed">
            Advanced capabilities for complex challenges — from due diligence to
            modernization, security to platform strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-[#0D1117]/50 border-white/5 hover:shadow-2xl transition-all duration-300 hover:border-[#539AC1]/30 group backdrop-blur-sm">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#539AC1]/20 transition-colors duration-300"
                  >
                    <service.icon className="text-[#539AC1] group-hover:text-white transition-colors duration-300" size={24} />
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#D9EAF6]/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};