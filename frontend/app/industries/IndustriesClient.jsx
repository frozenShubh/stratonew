"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Industries } from '@/components/Industries';


import { motion } from 'framer-motion';
import { ArrowRight, Building2, Cpu, Heart, GraduationCap, Plane, ShoppingCart } from 'lucide-react';

export function IndustriesClient() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const industryChallenges = [
    {
      icon: Building2,
      industry: 'Enterprise & SaaS',
      challenges: [
        'Scaling from startup to enterprise',
        'Multi-tenant architecture design',
        'Enterprise security & compliance',
        'Complex integration requirements'
      ],
      solutions: [
        'Cloud-native architecture patterns',
        'Microservices & event-driven systems',
        'SOC 2, HIPAA, GDPR compliance frameworks',
        'API-first development & integration hubs'
      ]
    },
    {
      icon: Cpu,
      industry: 'Technology & AI',
      challenges: [
        'AI model production deployment',
        'ML infrastructure at scale',
        'Data pipeline reliability',
        'Model monitoring & governance'
      ],
      solutions: [
        'MLOps platforms & model registries',
        'Distributed training infrastructure',
        'Real-time data processing pipelines',
        'AI ethics & bias detection systems'
      ]
    },
    {
      icon: Heart,
      industry: 'Healthcare & Life Sciences',
      challenges: [
        'HIPAA compliance & data security',
        'Patient data interoperability',
        'Clinical workflow optimization',
        'Regulatory reporting automation'
      ],
      solutions: [
        'Secure healthcare data platforms',
        'FHIR-based interoperability layers',
        'Clinical decision support systems',
        'Automated compliance reporting'
      ]
    },
    {
      icon: GraduationCap,
      industry: 'Education & EdTech',
      challenges: [
        'Scalable learning platforms',
        'Personalized learning systems',
        'Campus management integration',
        'Remote learning infrastructure'
      ],
      solutions: [
        'Adaptive learning algorithms',
        'Multi-tenant education platforms',
        'LMS integration & SSO',
        'Video streaming & collaboration tools'
      ]
    },
    {
      icon: Plane,
      industry: 'Travel & Hospitality',
      challenges: [
        'Dynamic pricing systems',
        'Real-time inventory management',
        'Global distribution systems',
        'Mobile booking experiences'
      ],
      solutions: [
        'Event-driven booking platforms',
        'Real-time pricing engines',
        'Global inventory synchronization',
        'Progressive web applications'
      ]
    },
    {
      icon: ShoppingCart,
      industry: 'E-commerce & Retail',
      challenges: [
        'High-traffic shopping platforms',
        'Personalization at scale',
        'Supply chain optimization',
        'Mobile commerce experiences'
      ],
      solutions: [
        'Headless commerce architectures',
        'Recommendation engines',
        'Inventory & fulfillment systems',
        'Omnichannel retail platforms'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020507]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #539AC1 1px, transparent 1px), radial-gradient(circle at 75% 75%, #A5C7E0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
                Industry Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Technology Solutions
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Across Industries
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed mb-8">
              We understand the unique technology challenges and opportunities in every industry.
              Our solutions are tailored to your sector's specific requirements and regulatory landscape.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                Discuss Your Industry Needs
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Component */}
      <Industries />

      {/* Industry-Specific Solutions */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Industry-Specific Challenges & Solutions
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto">
              Every industry has unique technology requirements. Here's how we address the most common challenges.
            </p>
          </motion.div>

          <div className="space-y-16">
            {industryChallenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#0D1117]/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/5"
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-[#0D4669]/50 rounded-xl flex items-center justify-center mr-6">
                    <item.icon className="text-[#A5C7E0]" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.industry}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold text-[#539AC1] mb-6">Key Challenges</h4>
                    <ul className="space-y-3">
                      {item.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#539AC1] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#D9EAF6]/80">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#539AC1] mb-6">Our Solutions</h4>
                    <ul className="space-y-3">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#A5C7E0] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#D9EAF6]/80">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Cross-Industry Capabilities
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto">
              Regardless of your industry, these foundational capabilities ensure your technology success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Scalable Architecture',
                description: 'Design systems that grow with your business, from startup to enterprise scale.'
              },
              {
                title: 'Security & Compliance',
                description: 'Industry-standard security practices and regulatory compliance frameworks.'
              },
              {
                title: 'Performance Optimization',
                description: 'Fast, reliable systems that deliver exceptional user experiences.'
              },
              {
                title: 'Data-Driven Insights',
                description: 'Transform your data into actionable intelligence and competitive advantages.'
              },
              {
                title: 'Integration Excellence',
                description: 'Seamlessly connect your systems with existing infrastructure and third-party services.'
              },
              {
                title: 'Future-Proofing',
                description: 'Build technology that evolves with industry trends and technological advancements.'
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-[#539AC1]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {capability.title}
                </h3>
                <p className="text-[#D9EAF6]/70 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Solve Your Industry Challenges?
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto mb-8">
              Let's discuss how our industry expertise can help transform your technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                Start the Conversation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-[#539AC1]/30 text-[#539AC1] hover:bg-[#539AC1]/10 font-semibold rounded-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
