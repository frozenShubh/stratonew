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
    <section className="py-24 md:py-32 bg-[#0A0D10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6\">
            What Stratosport Does
          </h2>
          <p className=\"text-xl text-[#D9EAF6]/70 leading-relaxed\">
            Stratosport provides end-to-end technology and AI leadership — from strategy
            and architecture to execution, governance, and optimization — for organizations
            operating at scale.
          </p>
        </motion.div>

        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12\">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className=\"group bg-[#0D1117]/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-[#539AC1]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#539AC1]/10\"
            >
              <div className=\"mb-6\">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className=\"inline-flex items-center justify-center w-14 h-14 bg-[#0D4669]/50 rounded-lg group-hover:bg-[#539AC1]/20 transition-colors duration-300\"
                >
                  <feature.icon className=\"text-[#A5C7E0]\" size={28} />
                </motion.div>
              </div>
              <h3 className=\"text-2xl font-semibold text-white mb-3\">
                {feature.title}
              </h3>
              <p className=\"text-[#D9EAF6]/70 leading-relaxed\">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};