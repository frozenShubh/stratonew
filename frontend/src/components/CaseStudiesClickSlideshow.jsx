import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

export const CaseStudiesClickSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cases = [
    {
      title: 'Scaling Through Hypergrowth',
      subtitle: 'B2B Fintech SaaS',
      challenge: 'Series B fintech startup hitting database bottlenecks and cascading failures during peak hours as user base grew 5x in 6 months.',
      approach: 'Identified critical bottlenecks in synchronous API calls and monolithic database. Introduced read replicas, async event processing with Kafka, and circuit breakers. Established SRE runbooks and on-call culture.',
      outcome: 'Peak traffic handled without degradation. P99 latency dropped from 1200ms to 180ms. Monthly infrastructure spend reduced by 28% by right-sizing over-provisioned resources.',
      tags: ['Performance', 'SRE', 'Infrastructure'],
      metrics: [
        { value: '180ms', label: 'P99 Latency' },
        { value: '28%', label: 'Cost Saved' },
        { value: '0', label: 'Outages' },
      ],
      color: 'from-[#0D4669] to-[#033051]',
      accent: '#539AC1',
    },
    {
      title: 'From POC to Production',
      subtitle: 'Enterprise AI — Insurance',
      challenge: 'Mid-market insurance company stuck in "AI pilot purgatory" — 3 failed vendor POCs over 18 months with no production deployment.',
      approach: 'Audited existing data pipelines, identified gaps in data quality and governance. Built a lean internal ML platform with guardrails, model versioning, and human-in-the-loop review for claims processing automation.',
      outcome: 'First AI model in production within 14 weeks. Claims triage time reduced by 62%. Internal team upskilled to own and iterate on models independently.',
      tags: ['AI/ML', 'Data', 'Insurance'],
      metrics: [
        { value: '14 wks', label: 'To Production' },
        { value: '62%', label: 'Faster Triage' },
        { value: '100%', label: 'Team Ownership' },
      ],
      color: 'from-[#235D94] to-[#0D4669]',
      accent: '#A5C7E0',
    },
    {
      title: 'Stabilizing During Founder Transition',
      subtitle: 'Interim CTO — 80-Person Startup',
      challenge: 'Lost CTO and VP Engineering within a month. Engineering morale dropped, sprint commitments were being missed, and a critical product launch was 6 weeks away.',
      approach: 'Stepped in as interim CTO. Simplified the roadmap to focus on launch-critical features, introduced lightweight delivery tracking, ran 1:1s with every engineer in week one, and began a structured CTO search.',
      outcome: 'Product launched on schedule. Attrition dropped to zero during the engagement. Permanent CTO hired and onboarded with full context handoff within 5 months.',
      tags: ['Leadership', 'Team', 'Delivery'],
      metrics: [
        { value: 'On-Time', label: 'Product Launch' },
        { value: '0', label: 'Attrition' },
        { value: '5 mo', label: 'CTO Hired' },
      ],
      color: 'from-[#539AC1] to-[#235D94]',
      accent: '#539AC1',
    },
    {
      title: 'Monolith to Modular',
      subtitle: 'Platform Modernization — Logistics',
      challenge: '8-year-old PHP monolith powering a logistics platform — deployments took 4 hours with frequent rollbacks, and adding new features required touching 15+ files.',
      approach: 'Mapped domain boundaries with the team using event storming. Extracted highest-risk modules into standalone services behind an API gateway. Introduced CI/CD pipelines and automated regression tests before each extraction.',
      outcome: 'Deploy cycle dropped from 4 hours to 12 minutes. Feature delivery cadence improved from monthly to weekly. The monolith still runs — but only handles what it should.',
      tags: ['Modernization', 'Architecture', 'DevOps'],
      metrics: [
        { value: '12 min', label: 'Deploy Time' },
        { value: 'Weekly', label: 'Releases' },
        { value: '0', label: 'Downtime' },
      ],
      color: 'from-[#0D4669] to-[#539AC1]',
      accent: '#A5C7E0',
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = cases.length - 1;
      if (newIndex >= cases.length) newIndex = 0;
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="impact" className="py-24 md:py-32 bg-[#020507] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: `radial-gradient(ellipse, ${currentCase.accent}, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Impact & Outcomes
              </h2>
              <p className="text-lg text-[#D9EAF6]/60 max-w-2xl">
                Real engagements. Specific problems. Measurable results.
              </p>
            </div>
            {/* Navigation arrows — desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={() => paginate(-1)}
                variant="outline"
                className="rounded-full w-12 h-12 p-0 bg-transparent border-[#539AC1]/30 hover:bg-[#539AC1]/10 hover:border-[#539AC1] transition-all duration-300"
              >
                <ChevronLeft className="text-[#A5C7E0]" size={22} />
              </Button>
              <Button
                onClick={() => paginate(1)}
                variant="outline"
                className="rounded-full w-12 h-12 p-0 bg-transparent border-[#539AC1]/30 hover:bg-[#539AC1]/10 hover:border-[#539AC1] transition-all duration-300"
              >
                <ChevronRight className="text-[#A5C7E0]" size={22} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Slideshow */}
        <div className="relative min-h-[560px] md:min-h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0D1117]/60 backdrop-blur-sm">

                {/* Left — Metrics Panel */}
                <div className={`lg:col-span-3 bg-gradient-to-br ${currentCase.color} p-8 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/[0.08]" />
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border border-white/[0.06]" />

                  <div className="relative z-10">
                    <span className="text-[#A5C7E0]/80 text-xs font-semibold uppercase tracking-widest">
                      {currentCase.subtitle}
                    </span>
                    <div className="mt-8 space-y-6">
                      {currentCase.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-3xl md:text-4xl font-bold text-white leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {metric.value}
                          </div>
                          <div className="text-[#A5C7E0]/70 text-sm mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags at bottom */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-8 lg:mt-0">
                    {currentCase.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/[0.08] backdrop-blur-sm text-white/80 text-[10px] font-medium rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — Content */}
                <div className="lg:col-span-9 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {currentCase.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Challenge */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                        <h4 className="text-xs font-semibold text-red-400/80 uppercase tracking-widest">
                          Challenge
                        </h4>
                      </div>
                      <p className="text-[#D9EAF6]/70 text-sm leading-relaxed">
                        {currentCase.challenge}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#539AC1]" />
                        <h4 className="text-xs font-semibold text-[#539AC1] uppercase tracking-widest">
                          Approach
                        </h4>
                      </div>
                      <p className="text-[#D9EAF6]/70 text-sm leading-relaxed">
                        {currentCase.approach}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                        <h4 className="text-xs font-semibold text-emerald-400/80 uppercase tracking-widest">
                          Outcome
                        </h4>
                      </div>
                      <p className="text-[#D9EAF6]/90 text-sm leading-relaxed font-medium">
                        {currentCase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between mt-10">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-400 ${
                  idx === currentIndex
                    ? 'bg-[#539AC1] w-10 h-2.5'
                    : 'bg-[#539AC1]/20 w-2.5 h-2.5 hover:bg-[#539AC1]/40'
                }`}
                aria-label={`Go to case study ${idx + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="text-[#539AC1]/50 text-sm font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
          </span>

          {/* Mobile navigation */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              onClick={() => paginate(-1)}
              variant="outline"
              className="rounded-full w-10 h-10 p-0 bg-transparent border-[#539AC1]/30 hover:bg-[#539AC1]/10 hover:border-[#539AC1] transition-all duration-300"
            >
              <ChevronLeft className="text-[#A5C7E0]" size={18} />
            </Button>
            <Button
              onClick={() => paginate(1)}
              variant="outline"
              className="rounded-full w-10 h-10 p-0 bg-transparent border-[#539AC1]/30 hover:bg-[#539AC1]/10 hover:border-[#539AC1] transition-all duration-300"
            >
              <ChevronRight className="text-[#A5C7E0]" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};