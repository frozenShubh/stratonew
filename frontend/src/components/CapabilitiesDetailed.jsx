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
  Target,
  Users,
  Layers,
  TrendingUp,
} from 'lucide-react';

export const CapabilitiesDetailed = () => {
  const capabilities = [
    {
      icon: Briefcase,
      title: 'CTO / CPTO Advisory & Technology Leadership',
      description: 'Strategic technology leadership for organizations that demand executive-level guidance and accountability.',
      items: [
        'Technology vision, strategy, and multi-year roadmaps aligned with business objectives',
        'Enterprise architecture design and platform strategy',
        'Engineering organization design, team structure, and scaling playbooks',
        'Delivery governance, execution frameworks, and engineering metrics',
        'Fractional and interim CTO / CPTO roles with hands-on involvement',
        'Board-level technology advisory and investor relations support',
        'Technical due diligence for M&A, fundraising, and strategic partnerships',
      ],
    },
    {
      icon: Code,
      title: 'Product & Application Development',
      description: 'End-to-end product engineering from concept to production-grade systems.',
      items: [
        'Full-stack product development (web, mobile, API-first architectures)',
        'Modern web applications with React, Next.js, and progressive web apps',
        'Mobile application development (iOS, Android, React Native, Flutter)',
        'API design, microservices architecture, and event-driven systems',
        'Legacy system modernization and technical debt remediation',
        'Product-to-platform transformations for scaling organizations',
        'Developer experience optimization and internal tooling',
      ],
    },
    {
      icon: Zap,
      title: 'Scale, Reliability & Distributed Systems',
      description: 'Building resilient systems that handle millions of users and critical workloads.',
      items: [
        'High-scale distributed system design and implementation',
        'Event-driven architectures and real-time data processing',
        'Cloud-native and hybrid cloud infrastructure (AWS, GCP, Azure)',
        'Site Reliability Engineering (SRE) practices and implementation',
        'Observability, monitoring, alerting, and incident management',
        'Multi-region deployment strategies and high-availability systems',
        'Database scaling, caching strategies, and performance optimization',
        'Chaos engineering and resilience testing frameworks',
      ],
    },
    {
      icon: Bot,
      title: 'AI & Advanced AI Systems',
      description: 'Production AI systems from pilot to scale, with enterprise-grade governance.',
      items: [
        'AI product strategy and system architecture design',
        'LLM-based applications, RAG systems, and agentic workflows',
        'Voice AI systems, speech-to-text, and natural language interfaces',
        'Computer vision (CNN-based), image processing, and video analytics',
        'AI model fine-tuning, evaluation, and lifecycle management',
        'AI inference infrastructure, GPU optimization, and cost management',
        'ML pipelines, feature stores, and model registry systems',
        'AI observability and model monitoring in production',
      ],
    },
    {
      icon: Shield,
      title: 'AI Compliance, Security & Governance',
      description: 'Responsible AI frameworks that meet enterprise and regulatory requirements.',
      items: [
        'Responsible AI frameworks and ethical AI principles implementation',
        'AI risk assessment, model bias detection, and mitigation strategies',
        'Secure AI architecture with data protection and privacy controls',
        'Model access control, versioning, and approval workflows',
        'Enterprise AI compliance readiness (GDPR, CCPA, industry-specific)',
        'AI explainability and interpretability frameworks',
        'Model governance documentation and audit trail systems',
      ],
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization & Engineering Efficiency',
      description: 'Strategic cost management that maintains performance and enables growth.',
      items: [
        'Cloud cost optimization and FinOps practice implementation',
        'Architecture-led cost reduction without compromising reliability',
        'Performance tuning, query optimization, and resource efficiency',
        'Infrastructure right-sizing and auto-scaling strategies',
        'Reserved capacity planning and committed use discount optimization',
        'Cost attribution, showback/chargeback models, and budget governance',
        'Engineering productivity metrics and developer velocity improvement',
      ],
    },
    {
      icon: FileCheck,
      title: 'Vendor Selection & Contract Negotiation',
      description: 'Expert guidance on technology partnerships and vendor relationships.',
      items: [
        'Technology and AI vendor evaluation frameworks',
        'RFP development, technical requirements, and evaluation criteria',
        'Vendor technical due diligence and reference checks',
        'SaaS, cloud, and AI platform selection and comparison',
        'Contract negotiation support and commercial terms optimization',
        'Ongoing vendor performance management and relationship governance',
        'Multi-vendor strategy and integration planning',
      ],
    },
    {
      icon: Brain,
      title: 'Compliance & Enterprise Readiness',
      description: 'Preparing platforms for enterprise customers and regulatory requirements.',
      items: [
        'SOC 2 Type I & II readiness and audit preparation',
        'ISO 27001, HIPAA, PCI-DSS compliance frameworks',
        'Security-by-design engineering practices and secure SDLC',
        'Enterprise customer security questionnaire support',
        'Platform hardening, penetration testing, and vulnerability management',
        'Privacy compliance (GDPR, CCPA) and data governance',
        'Compliance automation and continuous monitoring systems',
      ],
    },
    {
      icon: Target,
      title: 'Platform Engineering & DevOps',
      description: 'Internal platforms that accelerate developer productivity and delivery.',
      items: [
        'Platform engineering strategy and internal developer platforms',
        'CI/CD pipeline design and deployment automation',
        'Infrastructure as Code (Terraform, CloudFormation, Pulumi)',
        'Container orchestration (Kubernetes, ECS, serverless)',
        'GitOps workflows and declarative infrastructure management',
        'Developer self-service portals and platform documentation',
        'Build systems, artifact management, and release engineering',
      ],
    },
    {
      icon: Users,
      title: 'Engineering Team Building & Culture',
      description: 'Building high-performing engineering organizations that deliver consistently.',
      items: [
        'Engineering hiring strategy, interviewing, and assessment frameworks',
        'Team structure design and role definition (IC ladder, management tracks)',
        'Engineering culture development and values establishment',
        'Performance management, career progression, and compensation frameworks',
        'Technical mentorship programs and knowledge sharing practices',
        'Remote-first and hybrid work models for engineering teams',
        'Engineering onboarding programs and documentation standards',
      ],
    },
    {
      icon: Layers,
      title: 'Data & Analytics Platforms',
      description: 'Modern data infrastructure for analytics, ML, and business intelligence.',
      items: [
        'Data platform architecture and modern data stack implementation',
        'Data warehouse and lakehouse solutions (Snowflake, Databricks, BigQuery)',
        'ETL/ELT pipelines, data orchestration (Airflow, dbt)',
        'Real-time analytics and streaming data platforms',
        'Business intelligence and data visualization strategies',
        'Data governance, cataloging, and lineage tracking',
        'Analytics engineering and semantic layer development',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Technical Due Diligence & Advisory',
      description: 'Expert technology assessment for investors, acquirers, and boards.',
      items: [
        'Technology due diligence for M&A, PE, and VC investments',
        'Code quality assessment, technical debt analysis, and risk evaluation',
        'Team capability assessment and organizational health review',
        'Scalability and architecture review for growth scenarios',
        'Security posture evaluation and vulnerability assessment',
        'Technology roadmap validation and feasibility analysis',
        'Post-acquisition integration planning and execution support',
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[#0A0D10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Technology
            <br />
            <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
              & AI Services
            </span>
          </h2>
          <p className="text-xl text-[#D9EAF6]/70 leading-relaxed">
            End-to-end technology consulting designed for organizations that demand
            excellence, reliability, and measurable outcomes.
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
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#0D1117]/50 backdrop-blur-sm border border-white/5 rounded-xl px-6 hover:border-[#539AC1]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#539AC1]/5"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center space-x-4 text-left w-full">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center">
                          <capability.icon className="text-[#A5C7E0]" size={24} />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-[#D9EAF6]/60">
                          {capability.description}
                        </p>
                      </div>
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
                          className="text-[#D9EAF6]/80 flex items-start space-x-3 group"
                        >
                          <span className="text-[#539AC1] mt-1.5 group-hover:scale-125 transition-transform">•</span>
                          <span className="leading-relaxed">{item}</span>
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