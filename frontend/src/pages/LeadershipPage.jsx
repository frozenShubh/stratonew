import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const LeadershipPage = () => {
  const leaders = [
    {
      name: 'Rajesh Kumar',
      role: 'Founding Partner',
      bio: 'Former CTO at global SaaS platforms. 15+ years building and scaling distributed systems for companies ranging from Series A startups to public enterprises. Deep expertise in platform architecture, AI systems, and engineering organization design.',
      expertise: ['Platform Architecture', 'AI Systems', 'Engineering Leadership', 'SaaS Scale'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'Partner, AI & Product Engineering',
      bio: 'Led AI product initiatives at Fortune 500 companies and hyper-growth startups. Specialist in production AI systems, LLM applications, and product-to-platform transformations. Previously built computer vision and NLP systems at scale.',
      expertise: ['AI Product Strategy', 'LLM Systems', 'Computer Vision', 'Product Development'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Vikram Patel',
      role: 'Partner, Infrastructure & SRE',
      bio: 'Infrastructure architect and SRE leader with experience at high-traffic consumer platforms and enterprise infrastructure companies. Expert in distributed systems, reliability engineering, cloud optimization, and platform security.',
      expertise: ['Distributed Systems', 'SRE', 'Cloud Architecture', 'Security'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Leadership
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Experienced technology operators who bring strategic clarity and execution rigor to
              every engagement. Our leadership team has built, scaled, and governed systems at
              companies you know.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
              >
                {/* Image & Contact */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full aspect-square object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                    <p className="text-slate-600 font-medium mb-4">{leader.role}</p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio & Expertise */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Background
                    </h4>
                    <p className="text-lg text-slate-700 leading-relaxed">{leader.bio}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Approach to Leadership
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At Stratosport, leadership means accountability. Every partner is deeply involved
                in client work — from initial strategy to final delivery. We don't delegate to
                junior teams. We show up, we lead, and we're accountable for outcomes.
              </p>
              <p>
                Our leadership team has made the hard calls, shipped under pressure, scaled through
                chaos, and built systems that millions depend on. We bring that experience — and
                the judgment that comes with it — to every engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;