import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Megaphone, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export const InsightsGrid = () => {
  const insights = [
    {
      type: 'Research Report',
      icon: FileText,
      title: 'AI Systems at Scale: Executive Priorities for 2026',
      description: 'After two years of rapid AI adoption, technology leaders face a critical juncture. Our research reveals the gaps between AI pilots and production-scale systems.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800',
      link: '#',
    },
    {
      type: 'Event',
      icon: Calendar,
      title: 'Technology Leadership Summit 2026',
      description: 'Join us for insights on scaling AI systems, platform modernization, and building engineering organizations that deliver.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
      link: '#',
      date: 'March 15-17, 2026',
      location: 'Bangalore, India',
    },
    {
      type: 'Research Report',
      icon: FileText,
      title: 'Platform Engineering: From Complexity to Competitive Advantage',
      description: 'How leading organizations are transforming infrastructure chaos into streamlined, developer-friendly platforms that accelerate delivery.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800',
      link: '#',
    },
    {
      type: 'Announcement',
      icon: Megaphone,
      title: 'Stratosport Named Leader in Technology Consulting',
      description: 'Recognized for our expertise in AI systems, platform architecture, and engineering excellence across enterprise transformations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
      link: '#',
    },
    {
      type: 'Research Report',
      icon: FileText,
      title: 'The State of Engineering Excellence',
      description: 'Data-driven insights on what separates high-performing engineering organizations from the rest.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
      link: '#',
    },
    {
      type: 'Research Report',
      icon: FileText,
      title: 'Cost Optimization in the AI Era',
      description: 'Strategic approaches to managing cloud and AI infrastructure costs while maintaining performance and innovation velocity.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      link: '#',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0D10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-[#0D1117] border-0 overflow-hidden hover:shadow-2xl hover:shadow-[#539AC1]/10 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Type Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <insight.icon className="text-[#539AC1]" size={16} />
                    <span className="text-[#539AC1] text-xs font-semibold uppercase tracking-wider">
                      {insight.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {insight.title}
                  </h3>

                  {/* Date & Location for Events */}
                  {insight.date && (
                    <div className="text-sm text-[#A5C7E0] mb-2">
                      {insight.date}<br />{insight.location}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[#D9EAF6]/70 text-sm leading-relaxed mb-6 flex-1">
                    {insight.description}
                  </p>

                  {/* Link */}
                  <a
                    href={insight.link}
                    className="text-[#539AC1] hover:text-[#A5C7E0] font-semibold text-sm flex items-center group/link transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};