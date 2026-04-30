import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Compass, Wrench, Users2, Handshake } from 'lucide-react';

export const EngagementModels = () => {
  const models = [
    {
      icon: Compass,
      title: 'Advisory & Strategy',
      description:
        'Technology strategy, architecture design, and executive advisory for critical decisions.',
      features: [
        'CTO-level strategic guidance',
        'Architecture and platform design',
        'Technology roadmap development',
      ],
    },
    {
      icon: Wrench,
      title: 'Hands-On Execution',
      description:
        'Full-cycle product development, platform engineering, and system implementation.',
      features: [
        'Product and platform development',
        'System implementation and integration',
        'DevOps and infrastructure setup',
      ],
    },
    {
      icon: Users2,
      title: 'Embedded Leadership',
      description:
        'Fractional or interim CTO/CPTO roles embedded within your organization.',
      features: [
        'Fractional CTO / CPTO services',
        'Engineering leadership augmentation',
        'Team building and scaling support',
      ],
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnerships',
      description:
        'Ongoing technology partnerships for sustained innovation and operational excellence.',
      features: [
        'Continuous optimization and support',
        'Evolving technology roadmaps',
        'Strategic technology partnership',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#020507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engagement Models
          </h2>
          <p className="text-xl text-[#D9EAF6]/80 leading-relaxed">
            Flexible engagement approaches designed to meet your organization where you are
            — from strategic guidance to hands-on delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#0D1117]/50 border-white/5 hover:shadow-2xl transition-all duration-300 hover:border-[#539AC1]/30 backdrop-blur-sm group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#0D4669]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#539AC1]/20 transition-colors duration-300">
                    <model.icon className="text-[#539AC1] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white mb-3">
                    {model.title}
                  </CardTitle>
                  <p className="text-[#D9EAF6]/70 leading-relaxed">{model.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-[#D9EAF6]/70 text-sm flex items-start space-x-2"
                      >
                        <span className="text-[#539AC1]/70 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-[#0D1117]/50 border border-[#539AC1]/20 rounded-lg backdrop-blur-sm"
        >
          <p className="text-lg text-[#D9EAF6]/90 leading-relaxed">
            All engagements emphasize <strong className="text-white font-semibold">senior involvement</strong> and{' '}
            <strong className="text-white font-semibold">accountability</strong>. We bring experienced technology leaders who have
            built, scaled, and governed complex systems in production environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};