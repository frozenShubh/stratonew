import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CaseStudiesScrollSlideshow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.3', 'end 0.8'],
  });

  const cases = [
    {
      title: 'Global SaaS Platform Scaling',
      challenge: 'Rapid growth requiring 10x traffic capacity',
      approach: 'Redesigned distributed architecture, implemented event-driven processing, and established SRE practices.',
      outcome: '10x traffic handled seamlessly. 99.99% uptime achieved. 35% cost reduction.',
      tags: ['Scale', 'SRE', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      metrics: ['10x Scale', '99.99% Uptime', '35% Cost Cut'],
      color: 'from-[#0D4669] to-[#033051]',
    },
    {
      title: 'AI Product Strategy',
      challenge: 'Building production LLM platform for enterprise',
      approach: 'Designed secure inference pipeline with model governance and compliance framework.',
      outcome: 'AI product launched in 4 months. SOC 2 compliant. 1M+ requests daily.',
      tags: ['AI', 'Compliance', 'Product'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
      metrics: ['4 Month Launch', '1M+ Daily', 'SOC 2 Ready'],
      color: 'from-[#235D94] to-[#0D4669]',
    },
    {
      title: 'Technology Leadership',
      challenge: 'Interim CTO during leadership transition',
      approach: 'Stabilized engineering organization and shipped critical features.',
      outcome: 'Zero disruption during 6-month transition. 40% velocity increase.',
      tags: ['Leadership', 'Team Building', 'Delivery'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      metrics: ['0 Disruption', '+40% Velocity', 'Successful Hire'],
      color: 'from-[#539AC1] to-[#235D94]',
    },
    {
      title: 'Platform Modernization',
      challenge: 'Legacy monolith blocking innovation',
      approach: 'Phased migration to microservices with API-first architecture.',
      outcome: '20x deployment frequency. 60% faster time-to-market.',
      tags: ['Modernization', 'Architecture', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      metrics: ['20x Deploys', '60% Faster', 'Zero Downtime'],
      color: 'from-[#0D4669] to-[#539AC1]',
    },
  ];

  // Transform scroll progress to show all 4 cards
  // Total width = 4 cards * 700px + gaps = ~3200px
  // To show all, we need to move -2500px (100vw visible)
  const x = useTransform(scrollYProgress, [0, 1], ['0px', '-2800px']);

  return (
    <section 
      id="impact" 
      ref={containerRef} 
      className="py-24 md:py-32 bg-[#0A0D10] overflow-hidden"
      style={{ minHeight: '200vh' }}
    >
      <div className="sticky top-24 max-w-7xl mx-auto px-6 lg:px-8 mb-8">
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
            ⇐ Scroll down to explore our case studies ⇒
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container - Sticky */}
      <div className="sticky top-48 h-[500px] overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 pl-6 lg:pl-12"
        >
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-[700px]"
            >
              <div className="h-full bg-[#0D1117]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#539AC1]/50 transition-all duration-500 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  {/* Image - 2 columns */}
                  <div className="relative h-48 md:h-full md:col-span-2 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-40 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020507] via-transparent to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#0D4669]/90 backdrop-blur-sm text-[#A5C7E0] text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content - 3 columns */}
                  <div className="p-6 md:col-span-3 flex flex-col justify-between overflow-hidden">
                    <div className="space-y-3 overflow-y-auto">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {caseStudy.title}
                      </h3>

                      <div>
                        <h4 className="text-[10px] font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                          Challenge
                        </h4>
                        <p className="text-[#D9EAF6]/80 text-sm leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                          Approach
                        </h4>
                        <p className="text-[#D9EAF6]/80 text-sm leading-relaxed">
                          {caseStudy.approach}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                          Outcome
                        </h4>
                        <p className="text-white font-semibold text-sm leading-relaxed">
                          {caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div 
                          key={idx} 
                          className={`text-center p-2 bg-gradient-to-br ${caseStudy.color} rounded-lg border border-white/10`}
                        >
                          <div className="text-xs md:text-sm font-bold text-white leading-tight">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-[100vh]" />

      {/* Scroll indicator at bottom */}
      <div className="text-center pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D1117]/50 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-[#539AC1] rounded-full animate-pulse" />
          <span className="text-[#D9EAF6]/70 text-sm">Scrolled through all case studies</span>
        </div>
      </div>
    </section>
  );
};