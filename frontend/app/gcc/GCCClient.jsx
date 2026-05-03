"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';


import {
  ArrowRight,
  Users,
  Cpu,
  Globe,
  Target,
  Shield,
  CheckCircle2,
  Layers,
  Zap,
  Brain,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/FAQSection';

export function GCCClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gccServices = [
    {
      icon: Target,
      title: 'GCC Strategy & Setup',
      description: 'We help you define the right GCC model — from location strategy and entity setup to talent planning and technology stack decisions. We\'ve done this before and know what works.',
      items: [
        'GCC feasibility assessment and business case',
        'Location strategy (India: Bengaluru, Hyderabad, Pune, NCR)',
        'Entity setup, compliance, and operational playbook',
        'Technology stack and infrastructure architecture',
      ],
    },
    {
      icon: Brain,
      title: 'AI-First Capability Building',
      description: 'Most GCCs start as cost centers. We design yours as an AI-first innovation hub — with embedded AI engineering, MLOps practices, and data platform capabilities from day one.',
      items: [
        'AI/ML team design and hiring frameworks',
        'ML platform and data infrastructure setup',
        'AI Center of Excellence (CoE) establishment',
        'Generative AI and LLM capabilities',
      ],
    },
    {
      icon: Users,
      title: 'Talent & Engineering Culture',
      description: 'Building a high-performing engineering team in India requires more than recruiters. We establish engineering culture, technical interview frameworks, and career ladders that attract and retain top talent.',
      items: [
        'Engineering hiring strategy and technical assessments',
        'IC and management career ladder design',
        'Engineering culture and operating principles',
        'Onboarding programs and knowledge transfer',
      ],
    },
    {
      icon: Layers,
      title: 'Platform Engineering & DevOps',
      description: 'We set up the foundational engineering infrastructure — CI/CD pipelines, cloud architecture, developer platforms, and SRE practices — so your GCC ships from week one.',
      items: [
        'Cloud-native infrastructure (AWS, GCP, Azure)',
        'CI/CD pipelines and deployment automation',
        'Internal developer platform and tooling',
        'SRE practices, monitoring, and incident management',
      ],
    },
  ];

  const gccModels = [
    {
      title: 'Build-Operate-Transfer',
      description: 'We build and operate your GCC with our team, then transfer full ownership to you once it\'s stable and scaled. Lowest risk, fastest time to value.',
      ideal: 'Organizations entering India for the first time',
      timeline: '3-6 months to operational',
    },
    {
      title: 'Accelerated Setup',
      description: 'We work alongside your team to stand up the GCC — from entity setup to first hires to infrastructure. You own it from day one, we accelerate the journey.',
      ideal: 'Companies with some India presence seeking rapid expansion',
      timeline: '2-4 months to first hires',
    },
    {
      title: 'AI Capability Injection',
      description: 'Your GCC already exists but lacks AI/ML capability. We embed AI engineering practices, hire and train the team, and build the platform infrastructure.',
      ideal: 'Existing GCCs looking to add AI-first capabilities',
      timeline: '4-8 weeks to first AI workloads',
    },
  ];

  const whyIndia = [
    { metric: '1.5M+', label: 'Engineering graduates annually' },
    { metric: '75%', label: 'Cost advantage vs US/UK engineering' },
    { metric: '#1', label: 'Global destination for GCCs' },
    { metric: '1,600+', label: 'GCCs already operating in India' },
  ];

  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />

      {/* Hero */}
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
                Global Capability Centers
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Build AI-First
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                GCCs in India
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/70 leading-relaxed mb-10 max-w-3xl">
              Don't build a cost center — build an innovation engine. We help enterprises
              set up Global Capability Centers with AI engineering, ML platforms, and
              production-grade infrastructure from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(83,154,193,0.4)] border-0 rounded-lg group"
                >
                  <span className="flex items-center">
                    Plan Your GCC
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Button>
              </Link>
              <Link href="/ai-transformation">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#539AC1]/30 text-[#539AC1] hover:bg-[#539AC1]/10 hover:border-[#539AC1] px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-lg bg-transparent"
                >
                  Explore AI Transformation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why India Stats */}
      <section className="py-20 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why India. Why Now.
            </h2>
            <p className="text-lg text-[#D9EAF6]/50">India is the world's #1 destination for GCCs — and it's accelerating.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyIndia.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-6 bg-[#0D1117]/50 rounded-2xl border border-white/[0.06]"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#539AC1] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.metric}
                </div>
                <p className="text-[#D9EAF6]/50 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GCC Services */}
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
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              End-to-End GCC Services
            </h2>
            <p className="text-xl text-[#D9EAF6]/60 max-w-2xl leading-relaxed">
              From strategy and setup to AI capability building and scaling — we handle the full lifecycle.
            </p>
          </motion.div>

          <div className="space-y-8">
            {gccServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0D1117]/60 backdrop-blur-sm">
                  <div className="lg:col-span-1 bg-gradient-to-b from-[#0D4669] to-[#033051] p-6 flex lg:flex-col items-center justify-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <service.icon className="text-[#A5C7E0]" size={24} />
                    </div>
                    <span className="text-[#A5C7E0]/50 text-xs font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-11 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-[#D9EAF6]/60 leading-relaxed mb-6 max-w-3xl">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.items.map((item, idx) => (
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

      {/* Engagement Models */}
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
                Engagement Models
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Flexible GCC Models
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gccModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D4669]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10 flex-1">
                    <div className="text-[#539AC1]/50 text-xs font-mono mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {model.title}
                    </h3>
                    <p className="text-[#D9EAF6]/60 text-sm leading-relaxed mb-6">
                      {model.description}
                    </p>
                  </div>

                  <div className="relative z-10 space-y-3 pt-6 border-t border-white/[0.06]">
                    <div>
                      <span className="text-[#539AC1] text-xs font-semibold uppercase tracking-wider">Ideal for</span>
                      <p className="text-[#D9EAF6]/70 text-sm mt-1">{model.ideal}</p>
                    </div>
                    <div>
                      <span className="text-[#539AC1] text-xs font-semibold uppercase tracking-wider">Timeline</span>
                      <p className="text-white text-sm font-medium mt-1">{model.timeline}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-First Differentiation */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Not just a GCC.{' '}
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                An AI-first innovation hub.
              </span>
            </h2>
            <p className="text-lg text-[#D9EAF6]/60 max-w-3xl mx-auto leading-relaxed">
              Traditional GCC setups focus on headcount and cost arbitrage. We build capability
              centers that are designed for AI from the ground up — with ML platforms, data
              infrastructure, and engineering practices that make AI a core competency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'AI/ML Engineering Teams', desc: 'Hire and structure dedicated AI teams with the right mix of research, engineering, and MLOps talent.' },
              { icon: Cpu, title: 'ML Platform from Day One', desc: 'Purpose-built ML infrastructure — model registry, feature stores, experiment tracking, and inference pipelines.' },
              { icon: Globe, title: 'Data Engineering at Scale', desc: 'Modern data stack with real-time pipelines, data governance, and analytics platforms built for AI workloads.' },
              { icon: Shield, title: 'Enterprise Security & Compliance', desc: 'SOC 2, GDPR, HIPAA readiness baked in. Not a checkbox — a design principle.' },
              { icon: Zap, title: 'Production SRE Practices', desc: 'SRE culture, observability, on-call practices, and reliability engineering from the first sprint.' },
              { icon: BarChart3, title: 'Outcome-Driven Metrics', desc: 'Engineering metrics, delivery KPIs, and AI impact measurement — so your GCC proves its value.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group"
              >
                <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#539AC1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#0D4669]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                      <item.icon className="text-[#539AC1]" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#D9EAF6]/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#539AC1]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="GCC Setup FAQ"
        faqs={[
          {
            question: 'How long does it take to set up a GCC in India?',
            answer: 'With the right partner, you can have entity setup, cloud infrastructure, and your first 5-10 engineers in place within 60-90 days. A fully operational center with 30+ engineers typically takes 6-9 months. The key is starting with senior hires who set the culture, not bulk hiring.',
          },
          {
            question: 'What cities in India are best for a GCC?',
            answer: 'Bengaluru remains the top choice for deep tech and AI talent. Hyderabad offers excellent infrastructure at lower costs. Pune is strong for enterprise engineering. NCR (Gurugram/Noida) is ideal for proximity to enterprise clients. We help you choose based on your specific talent needs and budget.',
          },
          {
            question: 'What\'s the cost of setting up a GCC in India?',
            answer: 'Total cost depends on team size, location, and capabilities. A 25-person engineering team in Bengaluru typically costs 60-75% less than an equivalent US team. Setup costs (entity, office, infrastructure) range from $100K-$300K depending on model. We help you build a detailed business case with realistic projections.',
          },
          {
            question: 'Should our GCC be a cost center or a product engineering hub?',
            answer: 'We strongly recommend positioning it as a product engineering or innovation hub from day one. Cost-center GCCs struggle with talent retention, get assigned low-value work, and rarely justify their investment. AI-first GCCs that own product outcomes attract better talent and deliver higher ROI.',
          },
          {
            question: 'What\'s the Build-Operate-Transfer (BOT) model?',
            answer: 'In a BOT model, we set up and operate your GCC under our umbrella initially — handling entity setup, hiring, infrastructure, and management. Once the center reaches a defined maturity milestone, we transfer full ownership and operations to you. This minimizes risk and accelerates time to value.',
          },
          {
            question: 'Can you help add AI capabilities to an existing GCC?',
            answer: 'Yes. Our AI Capability Injection model is designed for exactly this. We assess your current team and infrastructure, design the AI engineering function, help hire specialized talent, set up ML platforms, and establish practices — typically delivering first AI workloads within 4-8 weeks.',
          },
        ]}
      />

      <Footer />
    </div>
  );
}
