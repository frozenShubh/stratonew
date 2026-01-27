import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CaseStudiesScrollSlideshow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const cases = [
    {
      title: 'Global SaaS Platform Scaling',
      challenge: 'Rapid growth requiring 10x traffic capacity',
      approach: 'Redesigned distributed architecture, implemented event-driven processing, and established SRE practices for a growth-stage B2B SaaS company.',
      outcome: '10x traffic handled seamlessly. 99.99% uptime achieved. Infrastructure costs reduced by 35% through architecture optimization.',
      tags: ['Scale', 'SRE', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      metrics: ['10x Scale', '99.99% Uptime', '35% Cost Cut'],
      color: 'from-[#0D4669] to-[#033051]',
    },
    {
      title: 'AI Product Strategy & Implementation',
      challenge: 'Building production LLM platform for enterprise customers',
      approach: 'Designed secure inference pipeline with model governance, compliance framework, and multi-tenant architecture for enterprise AI deployment.',
      outcome: 'AI product launched in 4 months. SOC 2 compliant from day one. Processing 1M+ AI requests daily with sub-second latency.',
      tags: ['AI', 'Compliance', 'Product'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
      metrics: ['4 Month Launch', '1M+ Requests/Day', 'SOC 2 Ready'],
      color: 'from-[#235D94] to-[#0D4669]',
    },
    {
      title: 'Technology Leadership Transition',
      challenge: 'Interim CTO needed during leadership change',
      approach: 'Stabilized engineering organization, shipped critical product features, established delivery metrics, and successfully hired permanent CTO.',
      outcome: 'Zero delivery disruption during 6-month transition. Engineering velocity increased 40%. Seamless CTO handoff completed.',
      tags: ['Leadership', 'Team Building', 'Delivery'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      metrics: ['0 Disruption', '+40% Velocity', 'Successful Hire'],
      color: 'from-[#539AC1] to-[#235D94]',
    },
    {
      title: 'Platform Modernization',
      challenge: 'Legacy monolith blocking innovation and scaling',
      approach: 'Phased migration to microservices with API-first architecture, cloud-native infrastructure, and comprehensive testing strategy.',
      outcome: 'Deployment frequency increased 20x. Time-to-market reduced by 60%. Zero downtime during migration.',
      tags: ['Modernization', 'Architecture', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      metrics: ['20x Deployments', '60% Faster TTM', 'Zero Downtime'],
      color: 'from-[#0D4669] to-[#539AC1]',
    },
  ];

  // Transform scroll progress to horizontal position
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section id="impact" ref={containerRef} className="py-24 md:py-32 bg-[#0A0D10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Impact & Outcomes
          </h2>
          <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto mb-4">
            Real challenges, pragmatic solutions, measurable results
          </p>
          <p className="text-sm text-[#539AC1]">
            ⟵ Scroll to explore our case studies ⟶
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative h-[600px]">
        <motion.div
          style={{ x }}
          className="flex gap-8 absolute left-0"
        >
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[90vw] md:w-[600px] lg:w-[700px]"
            >
              <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#539AC1]/50 transition-all duration-500 group">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-40 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020507] via-transparent to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-[#0D4669]/90 backdrop-blur-sm text-[#A5C7E0] text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {caseStudy.title}
                      </h3>

                      <div>
                        <h4 className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                          Challenge
                        </h4>
                        <p className="text-[#D9EAF6]/80 text-sm leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                          Approach
                        </h4>
                        <p className="text-[#D9EAF6]/80 text-sm leading-relaxed line-clamp-2">
                          {caseStudy.approach}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                          Outcome
                        </h4>
                        <p className="text-white font-semibold text-sm leading-relaxed">
                          {caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div 
                          key={idx} 
                          className={`text-center p-3 bg-gradient-to-br ${caseStudy.color} rounded-lg border border-white/10`}
                        >
                          <div className="text-base md:text-lg font-bold text-white">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* End spacer */}
          <div className="flex-shrink-0 w-[5vw]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D1117]/50 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-[#539AC1] rounded-full animate-pulse" />
          <span className="text-[#D9EAF6]/70 text-sm">Keep scrolling to see all case studies</span>
        </div>
      </div>
    </section>
  );
};