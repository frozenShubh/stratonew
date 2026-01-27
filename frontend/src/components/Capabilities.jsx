import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import {
  Brain,
  Code,
  Zap,
  Bot,
  Shield,
  DollarSign,
  FileCheck,
  Briefcase,
} from 'lucide-react';

export const Capabilities = () => {
  const capabilities = [
    {
      icon: Briefcase,
      title: 'CTO / CPTO Advisory & Technology Leadership',
      items: [
        'Technology vision, strategy, and roadmaps',
        'Architecture and platform design',
        'Engineering organization design and scaling',
        'Delivery governance and execution oversight',
        'Fractional and interim CTO / CPTO roles',
        'Board-level technology advisory',
      ],
    },
    {
      icon: Code,
      title: 'Product & Application Development',
      items: [
        'End-to-end tech product development',
        'Web and mobile application development',
        'API-first and platform-oriented architectures',
        'Legacy system modernization',
        'Product-to-platform transformations',
      ],
    },
    {
      icon: Zap,
      title: 'Scale, Reliability & Distributed Systems',
      items: [
        'High-scale distributed system design',
        'Event-driven and real-time architectures',
        'Cloud-native and hybrid environments',
        'Reliability engineering (SRE)',
        'Observability, incident management, and resilience',
        'Multi-region, high-availability platforms',
      ],
    },
    {
      icon: Bot,
      title: 'AI & Advanced AI Systems',
      items: [
        'AI product strategy and system design',
        'LLM-based applications and platforms',
        'Voice-based AI systems',
        'Computer vision (CNN-based systems)',
        'AI pipelines, inference systems, and orchestration',
        'AI model lifecycle management',
      ],
    },
    {
      icon: Shield,
      title: 'AI Compliance, Security & Governance',
      items: [
        'Responsible AI frameworks',
        'AI risk assessment and mitigation',
        'Secure AI architecture and data protection',
        'Model access control and governance',
        'Enterprise AI compliance readiness',
      ],
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization & Engineering Efficiency',
      items: [
        'Cloud cost optimization (FinOps)',
        'Architecture-led cost reduction',
        'Performance and scalability tuning',
        'Infrastructure and platform efficiency reviews',
        'Long-term cost governance',
      ],
    },
    {
      icon: FileCheck,
      title: 'Vendor Selection & Contract Negotiation',
      items: [
        'Technology and AI vendor evaluation',
        'RFP and technical due diligence',
        'SaaS, cloud, and AI platform selection',
        'Contract and commercial negotiation support',
        'Ongoing vendor risk management',
      ],
    },
    {
      icon: Brain,
      title: 'Compliance & Enterprise Readiness',
      items: [
        'SOC 2 and ISO 27001 readiness',
        'Security-by-design engineering practices',
        'Audit and enterprise customer preparation',
        'Platform hardening and governance',
        'Privacy and compliance integration',
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive technology and AI services designed for organizations that
            demand excellence, reliability, and measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-lg px-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center space-x-4 text-left">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                          <capability.icon className="text-slate-700" size={24} />
                        </div>
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                        {capability.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <ul className="space-y-3 ml-16">
                      {capability.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                          className="text-slate-600 flex items-start space-x-3"
                        >
                          <span className="text-slate-400 mt-1.5">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};