import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users } from 'lucide-react';

export const WhatWeDo = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategic Vision',
      description: 'Technology vision, strategy, and roadmaps aligned with business outcomes',
    },
    {
      icon: Code2,
      title: 'Real-World Systems',
      description: 'Production-grade platforms built for scale, reliability, and performance',
    },
    {
      icon: Users,
      title: 'Long-Term Thinking',
      description: 'Durable systems and sustainable engineering practices that endure',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Stratosport Does
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Stratosport provides end-to-end technology and AI leadership — from strategy
            and architecture to execution, governance, and optimization — for organizations
            operating at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                  <feature.icon className="text-slate-700" size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};