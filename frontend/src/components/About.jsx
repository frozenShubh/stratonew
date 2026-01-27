import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Compass, TrendingUp } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Durable Systems',
      description: 'We build for the long term — systems that scale, endure, and evolve.',
    },
    {
      icon: Layers,
      title: 'Disciplined Execution',
      description: 'Rigorous engineering practices, clear accountability, measurable outcomes.',
    },
    {
      icon: Compass,
      title: 'Strategic Clarity',
      description: 'Technology decisions grounded in business reality and long-term vision.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Excellence',
      description: 'Relentless focus on performance, reliability, and operational excellence.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              About Stratosport
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Stratosport was founded on a simple belief: <strong>technology done right</strong>{' '}
                is a competitive advantage. Technology done poorly is an existential risk.
              </p>
              <p>
                We exist to help organizations navigate the most complex technology and AI
                challenges — from scaling platforms to building production AI systems, from
                hiring the right leaders to making critical build-vs-buy decisions.
              </p>
              <p>
                Our team has built, scaled, and governed technology at some of the world's most
                demanding companies. We bring that experience — and the scars that come with it
                — to every engagement.
              </p>
              <p className="font-medium text-slate-900">
                We're not here to write reports. We're here to build systems that work, teams
                that deliver, and outcomes that matter.
              </p>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Philosophy</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <value.icon className="text-slate-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};