import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const CaseStudiesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cases = [
    {
      title: 'Global SaaS Platform Scaling',
      challenge: 'Rapid growth requiring 10x traffic capacity',
      approach: 'Redesigned distributed architecture, implemented event-driven processing, and established SRE practices',
      outcome: '10x traffic handled seamlessly. 99.99% uptime achieved. Infrastructure costs reduced by 35%.',
      tags: ['Scale', 'SRE', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      metrics: ['10x Scale', '99.99% Uptime', '35% Cost Reduction'],
    },
    {
      title: 'AI Product Strategy & Implementation',
      challenge: 'Building production LLM platform for enterprise customers',
      approach: 'Designed secure inference pipeline, model governance framework, and SOC 2 compliant architecture',
      outcome: 'AI product launched in 4 months. Processing 1M+ daily requests with sub-second latency.',
      tags: ['AI', 'Compliance', 'Product Development'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
      metrics: ['4 Month Launch', '1M+ Daily Requests', 'SOC 2 Compliant'],
    },
    {
      title: 'Technology Leadership Transition',
      challenge: 'Interim CTO needed during leadership change',
      approach: 'Stabilized engineering organization, shipped critical features, and hired permanent CTO',
      outcome: 'Zero delivery disruption. 40% velocity increase. Seamless CTO handoff.',
      tags: ['Leadership', 'Team Building', 'Delivery'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      metrics: ['0 Disruption', '40% Faster Velocity', 'Successful Hire'],
    },
    {
      title: 'Platform Modernization',
      challenge: 'Legacy monolith blocking innovation and scaling',
      approach: 'Phased migration to microservices, API-first architecture, and cloud-native infrastructure',
      outcome: 'Deployment frequency increased 20x. Time-to-market reduced by 60%.',
      tags: ['Modernization', 'Architecture', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      metrics: ['20x Deployments', '60% Faster TTM', 'Zero Downtime'],
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
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

  return (
    <section className="py-24 md:py-32 bg-[#0A0D10] overflow-hidden">
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
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={cases[currentIndex].image}
                  alt={cases[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020507] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cases[currentIndex].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-[#0D4669]/50 text-[#A5C7E0] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white">
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
                    <div key={idx} className="text-center p-4 bg-[#0D1117]/50 rounded-lg border border-white/5">
                      <div className="text-2xl font-bold text-[#539AC1]">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              onClick={() => paginate(-1)}
              variant="outline"
              size="lg"
              className="rounded-full w-14 h-14 p-0 border-[#539AC1] hover:bg-[#539AC1]/20"
            >
              <ChevronLeft className="text-[#539AC1]" size={24} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-[#539AC1] w-8'
                      : 'bg-[#539AC1]/30 hover:bg-[#539AC1]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={() => paginate(1)}
              variant="outline"
              size="lg"
              className="rounded-full w-14 h-14 p-0 border-[#539AC1] hover:bg-[#539AC1]/20"
            >
              <ChevronRight className="text-[#539AC1]" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};