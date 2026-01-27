import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  const cases = [
    {
      challenge: 'Global SaaS Platform Scaling',
      approach:
        'Redesigned distributed architecture, implemented event-driven processing, and established SRE practices for a growth-stage B2B SaaS company.',
      outcome:
        '10x traffic growth handled seamlessly. 99.99% uptime achieved. Infrastructure costs reduced by 35% through architecture optimization.',
      tags: ['Scale', 'SRE', 'Cost Optimization'],
    },
    {
      challenge: 'AI Product Strategy & Implementation',
      approach:
        'Designed and built production LLM-based platform with secure inference pipeline, model governance, and compliance framework for enterprise customers.',
      outcome:
        'AI product launched in 4 months. SOC 2 compliant from day one. Processing 1M+ AI requests daily with sub-second latency.',
      tags: ['AI', 'Compliance', 'Product Development'],
    },
    {
      challenge: 'Technology Leadership Transition',
      approach:
        'Served as interim CTO during leadership transition. Stabilized engineering organization, shipped critical features, and hired permanent CTO.',
      outcome:
        'Zero delivery disruption during 6-month transition. Engineering velocity increased 40%. Successful CTO hire and seamless handoff.',
      tags: ['Leadership', 'Team Building', 'Delivery'],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Impact & Outcomes
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real challenges, pragmatic solutions, measurable results. Here's how we've helped
            organizations build, scale, and succeed.
          </p>
        </motion.div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {caseStudy.challenge}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Approach
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{caseStudy.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Outcome
                    </h4>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-lg">
            Client names withheld for confidentiality. Specific details available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
};