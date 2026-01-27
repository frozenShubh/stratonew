import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Tv, Users, Globe } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'SaaS & B2B Platforms',
      description: 'Multi-tenant platforms, API ecosystems, and enterprise software',
    },
    {
      icon: Globe,
      title: 'AI-Native Products',
      description: 'LLM applications, intelligent automation, and AI-powered platforms',
    },
    {
      icon: Tv,
      title: 'Media & Digital Platforms',
      description: 'Content delivery, streaming, and high-traffic digital experiences',
    },
    {
      icon: ShoppingBag,
      title: 'Consumer Internet',
      description: 'Consumer-facing platforms, marketplaces, and mobile applications',
    },
    {
      icon: Users,
      title: 'Enterprise Modernization',
      description: 'Legacy transformation, platform modernization, and cloud migration',
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
            Industries & Use Cases
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We work across diverse sectors where technology, scale, and innovation are critical
            to success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.slice(0, 3).map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-slate-50 border border-slate-200 rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-lg group-hover:bg-slate-800 transition-colors duration-300">
                  <industry.icon className="text-slate-700 group-hover:text-white transition-colors" size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {industries.slice(3).map((industry, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="p-8 bg-slate-50 border border-slate-200 rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-lg group-hover:bg-slate-800 transition-colors duration-300">
                  <industry.icon className="text-slate-700 group-hover:text-white transition-colors" size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};