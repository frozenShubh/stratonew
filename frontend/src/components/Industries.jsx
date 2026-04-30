import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Tv, Users, Globe } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'SaaS & B2B Platforms',
      description: 'Multi-tenant platforms, API ecosystems, and enterprise software',
      color: 'from-[#0D4669] to-[#033051]',
    },
    {
      icon: Globe,
      title: 'AI-Native Products',
      description: 'LLM applications, intelligent automation, and AI-powered platforms',
      color: 'from-[#235D94] to-[#0D4669]',
    },
    {
      icon: Tv,
      title: 'Media & Digital Platforms',
      description: 'Content delivery, streaming, and high-traffic digital experiences',
      color: 'from-[#539AC1] to-[#235D94]',
    },
    {
      icon: ShoppingBag,
      title: 'Consumer Internet',
      description: 'Consumer-facing platforms, marketplaces, and mobile applications',
      color: 'from-[#0D4669] to-[#539AC1]',
    },
    {
      icon: Users,
      title: 'Enterprise Modernization',
      description: 'Legacy transformation, platform modernization, and cloud migration',
      color: 'from-[#033051] to-[#235D94]',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#020507] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse, #539AC1, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
              Industries
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Industries & Use Cases
          </h2>
          <p className="text-xl text-[#D9EAF6]/70 leading-relaxed max-w-2xl">
            We work across diverse sectors where technology, scale, and innovation are critical
            to success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 3).map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0D4669]/50 rounded-xl group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                      <industry.icon className="text-[#539AC1] group-hover:text-[#A5C7E0] transition-colors" size={28} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {industry.title}
                  </h3>
                  <p className="text-[#D9EAF6]/60 leading-relaxed">{industry.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#539AC1]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {industries.slice(3).map((industry, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0D4669]/50 rounded-xl group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                      <industry.icon className="text-[#539AC1] group-hover:text-[#A5C7E0] transition-colors" size={28} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {industry.title}
                  </h3>
                  <p className="text-[#D9EAF6]/60 leading-relaxed">{industry.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#539AC1]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};