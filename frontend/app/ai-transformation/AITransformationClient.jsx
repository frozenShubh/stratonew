"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';


import {
  ArrowRight,
  Brain,
  Bot,
  Layers,
  Shield,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/FAQSection';

export function AITransformationClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transformationPillars = [
    {
      icon: Brain,
      title: 'AI Strategy & Roadmap',
      description: 'We work with your leadership team to define an AI strategy that aligns with business outcomes — not technology hype. We identify high-impact use cases, assess organizational readiness, and build a phased roadmap that delivers value in quarters, not years.',
      items: [
        'AI maturity assessment and gap analysis',
        'Use case identification and ROI prioritization',
        'Build vs buy vs partner evaluation',
        'Executive alignment and board-ready AI strategy',
      ],
    },
    {
      icon: Bot,
      title: 'Production AI Systems',
      description: 'Most AI projects die in pilot. We build production-grade AI systems with proper governance, monitoring, and reliability — the same engineering rigor we bring to any mission-critical platform.',
      items: [
        'LLM-powered applications and RAG architectures',
        'Agentic workflows and multi-model orchestration',
        'Voice AI, NLP, and conversational systems',
        'Computer vision and document intelligence',
      ],
    },
    {
      icon: Layers,
      title: 'AI Platform Engineering',
      description: 'Scaling AI requires purpose-built infrastructure. We design and implement the ML platforms, data pipelines, and inference infrastructure that let your teams ship models reliably.',
      items: [
        'ML platform design (MLOps, feature stores, model registry)',
        'GPU-optimized inference infrastructure',
        'Data pipeline architecture for AI workloads',
        'Model versioning, A/B testing, and canary deployment',
      ],
    },
    {
      icon: Shield,
      title: 'AI Governance & Compliance',
      description: 'Enterprise AI demands responsible deployment. We help you implement frameworks for bias detection, explainability, audit trails, and regulatory compliance — so your AI is trusted, not just fast.',
      items: [
        'Responsible AI frameworks and ethical guidelines',
        'Model monitoring, drift detection, and alerting',
        'AI risk assessment and mitigation strategies',
        'Compliance readiness (EU AI Act, GDPR, industry-specific)',
      ],
    },
  ];

  const useCases = [
    {
      title: 'Intelligent Document Processing',
      description: 'Automating complex document workflows — contracts, invoices, claims — with multi-modal AI that understands context, not just text.',
      metric: '70-90% reduction in manual processing',
    },
    {
      title: 'Customer Experience AI',
      description: 'Deploying conversational AI and recommendation systems that personalize experiences at scale, across channels.',
      metric: '3-5x improvement in resolution rates',
    },
    {
      title: 'Operational Intelligence',
      description: 'Building predictive systems for demand forecasting, anomaly detection, and resource optimization that learn from your operational data.',
      metric: '20-40% improvement in operational efficiency',
    },
    {
      title: 'Knowledge Management',
      description: 'Transforming institutional knowledge into searchable, actionable intelligence using RAG systems built on your proprietary data.',
      metric: '60% faster time-to-answer for teams',
    },
    {
      title: 'Code & Engineering Acceleration',
      description: 'Implementing AI-assisted development workflows, automated testing, and code review systems that amplify your engineering team.',
      metric: '30-50% improvement in developer velocity',
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Building AI-powered analytics platforms that surface insights, detect patterns, and provide recommendations — not just dashboards.',
      metric: 'From reactive reporting to proactive intelligence',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, #539AC1 1px, transparent 1px), radial-gradient(circle at 70% 80%, #A5C7E0 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>


        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                AI Transformation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Turn AI From
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Pilot to Production
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/70 leading-relaxed mb-10 max-w-3xl">
              Most enterprises are stuck in AI pilot purgatory. We help you move past POCs
              and build production AI systems that actually transform how your business operates.
              No slide decks — just working systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(83,154,193,0.4)] border-0 rounded-lg group"
                >
                  <span className="flex items-center">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Button>
              </Link>
              <Link href="/gcc">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#539AC1]/30 text-[#539AC1] hover:bg-[#539AC1]/10 hover:border-[#539AC1] px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-lg bg-transparent"
                >
                  Explore AI-First GCCs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The AI gap isn't technology.{' '}
              <span className="text-[#539AC1]">It's execution.</span>
            </h2>
            <p className="text-lg text-[#D9EAF6]/60 leading-relaxed">
              87% of AI projects never make it to production. The challenge isn't the models —
              it's the engineering, the governance, the data infrastructure, and the organizational
              readiness to operationalize AI at scale. That's exactly where we work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '87%', label: 'of AI projects fail to reach production', color: 'text-red-400/80' },
              { number: '18 mo', label: 'average time from pilot to production', color: 'text-amber-400/80' },
              { number: '3-5x', label: 'cost overrun on typical AI initiatives', color: 'text-red-400/80' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8 bg-[#0D1117]/50 rounded-2xl border border-white/[0.06]"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.number}
                </div>
                <p className="text-[#D9EAF6]/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Pillars */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              End-to-End AI Transformation
            </h2>
            <p className="text-xl text-[#D9EAF6]/60 max-w-2xl leading-relaxed">
              From strategy through production — we cover the full stack of making AI real in your organization.
            </p>
          </motion.div>

          <div className="space-y-8">
            {transformationPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0D1117]/60 backdrop-blur-sm">
                  {/* Left accent panel */}
                  <div className="lg:col-span-1 bg-gradient-to-b from-[#0D4669] to-[#033051] p-6 flex lg:flex-col items-center lg:items-center justify-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <pillar.icon className="text-[#A5C7E0]" size={24} />
                    </div>
                    <span className="text-[#A5C7E0]/50 text-xs font-mono lg:writing-vertical">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-11 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {pillar.title}
                    </h3>
                    <p className="text-[#D9EAF6]/60 leading-relaxed mb-6 max-w-3xl">
                      {pillar.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pillar.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#539AC1] flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-[#D9EAF6]/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Use Cases
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              AI That Delivers
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Business Outcomes
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#539AC1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {useCase.title}
                    </h3>
                    <p className="text-[#D9EAF6]/60 text-sm leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-[#539AC1]" size={14} />
                      <span className="text-[#539AC1] text-xs font-semibold">{useCase.metric}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stratosport for AI */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why enterprises choose us for{' '}
                <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                  AI transformation
                </span>
              </h2>
              <p className="text-lg text-[#D9EAF6]/60 leading-relaxed mb-8">
                We're not an AI research lab and we're not a body shop. We're senior technology
                operators who have shipped production AI systems at scale. We understand the full
                picture — the models, the infrastructure, the team dynamics, and the organizational
                change required to become AI-first.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(83,154,193,0.4)] border-0 rounded-lg group"
                >
                  <span className="flex items-center">
                    Discuss Your AI Strategy
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { title: 'Production-first mindset', desc: 'We build AI systems with SRE-grade reliability from day one. Not notebooks — production code.' },
                { title: 'Full-stack AI capability', desc: 'Strategy, data engineering, model development, infrastructure, governance — one team, end to end.' },
                { title: 'Enterprise-grade governance', desc: 'Compliance, security, audit trails, and responsible AI baked in — not bolted on after launch.' },
                { title: 'Organizational transformation', desc: 'We help you build internal AI capability — upskilling teams, establishing practices, and transferring knowledge.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-[#0D1117]/50 rounded-xl border border-white/[0.06] hover:border-[#539AC1]/20 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-[#D9EAF6]/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="AI Transformation FAQ"
        faqs={[
          {
            question: 'How long does it take to get an AI model into production?',
            answer: 'With the right infrastructure and engineering practices, we typically get a first AI use case to production within 8-14 weeks. The key is starting with proper data pipelines, ML platform foundations, and governance frameworks — not jumping straight to model development.',
          },
          {
            question: 'What\'s the difference between a POC and a production AI system?',
            answer: 'A POC proves a concept works on clean data in a controlled environment. A production AI system handles real-world data at scale with defined SLAs for latency, uptime, and accuracy. It includes monitoring, drift detection, rollback capabilities, access controls, and compliance frameworks. The engineering effort to bridge this gap is typically 5-10x the POC effort.',
          },
          {
            question: 'Do we need to hire a full AI team before starting?',
            answer: 'No. We can operate as your interim AI engineering team while helping you hire and build internal capability. Our goal is always to transfer knowledge and build your team\'s self-sufficiency — not create long-term dependency.',
          },
          {
            question: 'How do you handle AI governance and compliance?',
            answer: 'We implement responsible AI frameworks from day one — including bias testing, model explainability, audit trails, and approval workflows. For regulated industries, we ensure compliance with GDPR, HIPAA, SOC 2, and the EU AI Act as applicable.',
          },
          {
            question: 'Can you work with our existing data infrastructure?',
            answer: 'Yes. We assess your current data stack and build AI capabilities on top of it where possible. If there are gaps — missing feature stores, poor data quality, lack of real-time pipelines — we address those as part of the engagement rather than requiring a full rebuild.',
          },
          {
            question: 'What industries do you work with for AI transformation?',
            answer: 'We work across sectors including fintech, insurance, healthcare, SaaS, e-commerce, and enterprise technology. The specific industry matters less than the maturity of your data and the clarity of your business use cases.',
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
