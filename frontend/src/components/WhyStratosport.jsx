import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Target, Users, CheckCircle2, TrendingUp } from 'lucide-react';

export const WhyStratosport = () => {
  const differentiators = [
    {
      icon: Users,
      title: 'Senior-Only Consulting',
      description:
        'Every engagement is led by experienced technology leaders — no junior staff, no delegation.',
    },
    {
      icon: Zap,
      title: 'Deep Hands-On Experience',
      description:
        'Real-world engineering at scale. We\'ve built, shipped, and operated production systems.',
    },
    {
      icon: TrendingUp,
      title: 'Proven at Real Scale',
      description:
        'Experience with millions of users, billions in revenue, and complex global platforms.',
    },
    {
      icon: Target,
      title: 'Product + Engineering + AI',
      description:
        'Integrated expertise across product strategy, platform engineering, and AI systems.',
    },
    {
      icon: Award,
      title: 'Execution Over Slideware',
      description:
        'Pragmatic, actionable solutions. We deliver working systems, not just recommendations.',
    },
    {
      icon: CheckCircle2,
      title: 'Trusted by Leaders',
      description:
        'Engaged by founders, CEOs, CTOs, and boards who demand excellence and accountability.',
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
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Stratosport
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We bring discipline, depth, and a track record of building systems that matter.
            Our approach is rooted in real-world experience, not theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-lg group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                  <item.icon className="text-slate-700 group-hover:text-white transition-colors" size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-10 bg-slate-50 border border-slate-200 rounded-lg"
        >
          <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic">
            "Stratosport operates with the discipline of an engineering team and the strategic
            clarity of a trusted advisor. We're brought in for high-stakes decisions — and we
            deliver."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};