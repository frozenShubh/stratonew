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
    <section className="py-24 md:py-32 bg-[#0A0D10] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
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
              Why Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Stratosport
          </h2>
          <p className="text-xl text-[#D9EAF6]/70 leading-relaxed max-w-2xl">
            We bring discipline, depth, and a track record of building systems that matter.
            Our approach is rooted in real-world experience, not theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#539AC1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0D4669]/50 rounded-xl group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                      <item.icon className="text-[#539AC1] group-hover:text-[#A5C7E0] transition-colors" size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#D9EAF6]/60 leading-relaxed text-sm">{item.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#539AC1]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 md:p-10 bg-gradient-to-br from-[#0D4669]/20 to-[#033051]/10 border border-[#539AC1]/15 rounded-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#539AC1]/60 via-[#539AC1]/20 to-transparent" />
          <blockquote className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed font-medium italic pl-6">
            "Stratosport operates with the discipline of an engineering team and the strategic
            clarity of a trusted advisor. We're brought in for high-stakes decisions — and we
            deliver."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};