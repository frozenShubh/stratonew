import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const CaseStudiesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cases = [
    {
      title: 'Global SaaS Platform Scaling',
      challenge: 'Rapid growth requiring 10x traffic capacity',
      approach: 'Redesigned distributed architecture, implemented event-driven processing, and established SRE practices for a growth-stage B2B SaaS company.',
      outcome: '10x traffic handled seamlessly. 99.99% uptime achieved. Infrastructure costs reduced by 35% through architecture optimization.',
      tags: ['Scale', 'SRE', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      metrics: ['10x Scale', '99.99% Uptime', '35% Cost Cut'],
    },
    {
      title: 'AI Product Strategy & Implementation',
      challenge: 'Building production LLM platform for enterprise customers',
      approach: 'Designed secure inference pipeline with model governance, compliance framework, and multi-tenant architecture for enterprise AI deployment.',
      outcome: 'AI product launched in 4 months. SOC 2 compliant from day one. Processing 1M+ AI requests daily with sub-second latency.',
      tags: ['AI', 'Compliance', 'Product'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
      metrics: ['4 Month Launch', '1M+ Requests/Day', 'SOC 2 Ready'],
    },
    {
      title: 'Technology Leadership Transition',
      challenge: 'Interim CTO needed during leadership change',
      approach: 'Stabilized engineering organization, shipped critical product features, established delivery metrics, and successfully hired permanent CTO.',
      outcome: 'Zero delivery disruption during 6-month transition. Engineering velocity increased 40%. Seamless CTO handoff completed.',
      tags: ['Leadership', 'Team Building', 'Delivery'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      metrics: ['0 Disruption', '+40% Velocity', 'Successful Hire'],
    },
    {
      title: 'Platform Modernization',
      challenge: 'Legacy monolith blocking innovation and scaling',
      approach: 'Phased migration to microservices with API-first architecture, cloud-native infrastructure, and comprehensive testing strategy.',
      outcome: 'Deployment frequency increased 20x. Time-to-market reduced by 60%. Zero downtime during migration.',
      tags: ['Modernization', 'Architecture', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      metrics: ['20x Deployments', '60% Faster TTM', 'Zero Downtime'],
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
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
    setIsAutoPlaying(false);
  };

  return (
    <section id="impact" className="py-24 md:py-32 bg-[#0A0D10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Impact & Outcomes
          </h2>
          <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto">
            Real challenges, pragmatic solutions, measurable results
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative bg-[#0D1117]/30 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="relative h-[600px] md:h-[500px]">
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
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className="relative h-[250px] lg:h-full rounded-2xl overflow-hidden group">
                  <img
                    src={cases[currentIndex].image}
                    alt={cases[currentIndex].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020507] via-transparent to-transparent opacity-60" />
                  
                  {/* Tags overlay on image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {cases[currentIndex].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#0D4669]/80 backdrop-blur-sm text-[#A5C7E0] text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 overflow-y-auto max-h-[350px] lg:max-h-full pr-4">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {cases[currentIndex].title}
                  </h3>

                  {/* Challenge */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-[#D9EAF6]/80 leading-relaxed">
                      {cases[currentIndex].challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                      Approach
                    </h4>
                    <p className="text-[#D9EAF6]/80 leading-relaxed">
                      {cases[currentIndex].approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#539AC1] uppercase tracking-wider mb-2">
                      Outcome
                    </h4>
                    <p className="text-white font-semibold leading-relaxed">
                      {cases[currentIndex].outcome}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {cases[currentIndex].metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="text-center p-4 bg-gradient-to-br from-[#0D4669]/50 to-[#033051]/30 rounded-lg border border-[#539AC1]/20 hover:border-[#539AC1]/50 transition-colors"
                      >
                        <div className="text-xl md:text-2xl font-bold text-[#A5C7E0]">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <Button
              onClick={() => {
                paginate(-1);
                setIsAutoPlaying(false);
              }}
              variant="outline"
              size="lg"
              className="pointer-events-auto rounded-full w-12 h-12 p-0 bg-[#0D1117]/80 backdrop-blur-sm border-[#539AC1]/50 hover:bg-[#539AC1]/20 hover:border-[#539AC1]"
            >
              <ChevronLeft className="text-[#A5C7E0]" size={24} />
            </Button>

            <Button
              onClick={() => {
                paginate(1);
                setIsAutoPlaying(false);
              }}
              variant="outline"
              size="lg"
              className="pointer-events-auto rounded-full w-12 h-12 p-0 bg-[#0D1117]/80 backdrop-blur-sm border-[#539AC1]/50 hover:bg-[#539AC1]/20 hover:border-[#539AC1]"
            >
              <ChevronRight className="text-[#A5C7E0]" size={24} />
            </Button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-[#539AC1] w-12'
                  : 'bg-[#539AC1]/30 w-2 hover:bg-[#539AC1]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-[#539AC1]/70 hover:text-[#539AC1] text-sm transition-colors"
          >
            {isAutoPlaying ? 'Auto-playing...' : 'Click dots to navigate'}
          </button>
        </div>
      </div>
    </section>
  );
};