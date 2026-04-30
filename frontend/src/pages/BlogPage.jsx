import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020507]">
      <Helmet>
        <title>Insights & Blog | AI Transformation, GCC, Technology Strategy | Stratosport</title>
        <meta name="description" content="Insights on AI transformation, GCC setup, production AI systems, and enterprise technology strategy from Stratosport's senior technology leaders." />
        <meta property="og:title" content="Insights & Blog | Stratosport" />
        <meta property="og:description" content="Expert insights on AI transformation, GCC setup, and enterprise technology strategy." />
        <link rel="canonical" href="https://stratosport.in/blog" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, #539AC1 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Insights
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Thinking on
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Technology & AI
              </span>
            </h1>
            <p className="text-xl text-[#D9EAF6]/60 max-w-2xl">
              Perspectives from senior technology operators on AI transformation, GCC strategy,
              and building systems that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-[#0A0D10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-[#539AC1]/30 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Category bar */}
                    <div className="px-8 pt-8 pb-0">
                      <span className="px-3 py-1 bg-[#0D4669]/40 text-[#539AC1] text-[10px] font-semibold uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#A5C7E0] transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {post.title}
                      </h2>
                      <p className="text-[#D9EAF6]/50 text-sm leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-[#D9EAF6]/30 text-xs pt-4 border-t border-white/[0.06]">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight size={14} className="text-[#539AC1] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
