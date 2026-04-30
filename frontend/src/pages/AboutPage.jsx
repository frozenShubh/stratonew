import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Heart, Shield } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to accelerate technology transformation for organizations that matter. Every engagement advances our mission of building systems that scale and endure.'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Technology serves humanity. We prioritize the human experience in everything we build, ensuring our solutions enhance lives and empower teams.'
    },
    {
      icon: Award,
      title: 'Excellence Above All',
      description: 'We maintain uncompromising standards in our work. Every line of code, every system design, every recommendation reflects our commitment to excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation with Purpose',
      description: 'We innovate not for novelty, but for impact. Our solutions solve real problems at scale, creating meaningful change for our clients and their users.'
    },
    {
      icon: Heart,
      title: 'Long-Term Partnership',
      description: 'We invest in relationships that last. Our success is measured not just in project completion, but in the sustained growth and success of our partners.'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'Trust is earned through consistent action. We operate with transparency, honesty, and a deep sense of responsibility to our clients and their stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020507]">
      <Helmet>
        <title>About Stratosport | AI-First Technology Consulting</title>
        <meta name="description" content="Stratosport is a boutique technology consulting firm specializing in AI transformation, production AI systems, and GCC setup. Founded by senior technology operators with 15+ years of experience." />
        <meta property="og:title" content="About Stratosport | AI-First Technology Consulting" />
        <meta property="og:description" content="Senior technology operators building systems that scale. AI transformation, GCC setup, and enterprise platform engineering." />
        <link rel="canonical" href="https://stratosport.in/about" />
      </Helmet>
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
                About Stratosport
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Building the
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Future of Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed">
              We're a team of senior technology operators who have built, scaled, and transformed
              systems at the world's most demanding companies. Our mission is to bring that same
              level of excellence to every organization we partner with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-[#D9EAF6]/80 leading-relaxed">
                <p>
                  Stratosport was founded by technology leaders who recognized a gap in the market.
                  Too many organizations were receiving generic consulting or junior-level implementation,
                  when what they truly needed was senior operator expertise.
                </p>
                <p>
                  We've collectively built systems serving billions of users, managed infrastructure
                  at massive scale, and led technology transformations across industries. Now, we bring
                  that experience to help other organizations achieve similar success.
                </p>
                <p>
                  Our approach is simple: no hierarchies, no bureaucracy, no junior staff. Every
                  engagement is led by experienced operators who have been in your position and
                  know what it takes to succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#539AC1] to-[#0D4669] rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-[#0D1117]/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#539AC1] mb-2">50+</div>
                    <div className="text-sm text-[#D9EAF6]/60">Companies Advised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#539AC1] mb-2">15+</div>
                    <div className="text-sm text-[#D9EAF6]/60">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#539AC1] mb-2">10M+</div>
                    <div className="text-sm text-[#D9EAF6]/60">Users Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#539AC1] mb-2">99.9%</div>
                    <div className="text-sm text-[#D9EAF6]/60">Uptime Achieved</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto">
              These principles guide everything we do, from how we work with clients to how we build our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-[#539AC1]/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0D4669]/50 rounded-lg flex items-center justify-center">
                    <value.icon className="text-[#A5C7E0]" size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-[#D9EAF6]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*
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
              Meet Our Leadership
            </h2>
            <p className="text-xl text-[#D9EAF6]/70 max-w-3xl mx-auto mb-8">
              Our team brings decades of experience from building systems at the highest levels of scale and complexity.
            </p>
            <a
              href="/leadership"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
            >
              Meet the Team
            </a>
          </motion.div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
};

export default AboutPage;