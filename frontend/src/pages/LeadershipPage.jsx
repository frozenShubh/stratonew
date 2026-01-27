import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Briefcase } from 'lucide-react';

const LeadershipPage = () => {
  const leaders = [
    {
      name: 'Rajesh Kumar',
      role: 'Founding Partner',
      bio: 'Former CTO at global SaaS platforms with 15+ years building and scaling distributed systems. Led technology transformations at companies ranging from Series A startups to public enterprises. Deep expertise in platform architecture, AI systems, and engineering organization design. Advised 50+ companies on technology strategy and execution.',
      expertise: ['Platform Architecture', 'AI Systems', 'Engineering Leadership', 'SaaS Scale', 'Board Advisory', 'M&A Due Diligence'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      achievements: [
        'Built systems serving 50M+ users',
        'Led 3 successful acquisitions',
        'Scaled engineering from 10 to 200+',
      ],
    },
    {
      name: 'Priya Sharma',
      role: 'Partner, AI & Product Engineering',
      bio: 'Led AI product initiatives at Fortune 500 companies and hyper-growth startups. Specialist in production AI systems, LLM applications, and product-to-platform transformations. Previously built computer vision and NLP systems at scale. Published researcher in ML systems and AI governance.',
      expertise: ['AI Product Strategy', 'LLM Systems', 'Computer Vision', 'Product Development', 'AI Governance', 'Research'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      achievements: [
        'Launched 5 AI products to production',
        'Processing 10M+ AI requests daily',
        'SOC 2 compliant AI infrastructure',
      ],
    },
    {
      name: 'Vikram Patel',
      role: 'Partner, Infrastructure & SRE',
      bio: 'Infrastructure architect and SRE leader with experience at high-traffic consumer platforms and enterprise infrastructure companies. Expert in distributed systems, reliability engineering, cloud optimization, and platform security. Led infrastructure teams managing billions of requests per day.',
      expertise: ['Distributed Systems', 'SRE', 'Cloud Architecture', 'Security', 'FinOps', 'Performance'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      achievements: [
        '99.99% uptime at billion-request scale',
        'Reduced infrastructure costs by 60%',
        'Built multi-region active-active systems',
      ],
    },
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
            className="max-w-3xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Our Leadership
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Experienced
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Technology Operators
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed">
              Our leadership team brings strategic clarity and execution rigor to every engagement. 
              We've built, scaled, and governed systems at companies you know.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-[#0D1117]/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#539AC1]/30 transition-all duration-500"
              >
                {/* Image & Quick Info */}
                <div className="lg:col-span-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#539AC1] to-[#0D4669] rounded-2xl blur-xl opacity-30" />
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {leader.name}
                    </h3>
                    <p className="text-[#539AC1] font-semibold mb-6 text-lg">{leader.role}</p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3 mb-8">
                      <a
                        href="#"
                        className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center hover:bg-[#539AC1]/20 hover:border-[#539AC1]/50 border border-white/10 transition-all duration-300 group"
                      >
                        <Linkedin className="text-[#A5C7E0] group-hover:text-[#539AC1]" size={20} />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center hover:bg-[#539AC1]/20 hover:border-[#539AC1]/50 border border-white/10 transition-all duration-300 group"
                      >
                        <Mail className="text-[#A5C7E0] group-hover:text-[#539AC1]" size={20} />
                      </a>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      {leader.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Award className="text-[#539AC1] flex-shrink-0 mt-1" size={16} />
                          <span className="text-[#D9EAF6]/70 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio & Expertise */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-[#539AC1] uppercase tracking-wider mb-4 flex items-center space-x-2">
                      <Briefcase size={16} />
                      <span>Background</span>
                    </h4>
                    <p className="text-lg text-[#D9EAF6]/80 leading-relaxed">{leader.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-[#539AC1] uppercase tracking-wider mb-4">
                      Core Expertise
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {leader.expertise.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-3 bg-gradient-to-br from-[#0D4669]/50 to-[#033051]/30 border border-[#539AC1]/20 text-[#A5C7E0] font-medium rounded-lg text-sm text-center hover:border-[#539AC1]/50 transition-colors"
                        >
                          {skill}
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

      {/* Team Philosophy */}
      <section className="py-24 bg-[#020507]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#0D1117]/50 backdrop-blur-sm rounded-3xl p-12 border border-white/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Approach to Leadership
            </h2>
            <div className="space-y-6 text-lg text-[#D9EAF6]/80 leading-relaxed">
              <p>
                At Stratosport, leadership means <span className="text-[#539AC1] font-semibold">accountability</span>. 
                Every partner is deeply involved in client work — from initial strategy to final delivery. 
                We don't delegate to junior teams. We show up, we lead, and we're accountable for outcomes.
              </p>
              <p>
                Our leadership team has made the hard calls, shipped under pressure, scaled through chaos, 
                and built systems that millions depend on. We bring that experience — and the judgment that 
                comes with it — to every engagement.
              </p>
              <p className="text-white font-semibold">
                When you work with Stratosport, you work with senior technology leaders who have been there before.
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